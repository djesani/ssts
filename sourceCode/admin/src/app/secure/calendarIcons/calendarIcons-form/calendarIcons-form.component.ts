import { Component, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CalendarIconsService } from '../calendarIcons.service';

import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

import { environment } from '../../../../environments/environment';

const now = new Date();

@Component({
  selector: 'app-calendarIcons-form',
  templateUrl: './calendarIcons-form.component.html',
  styles: []
})
export class CalendarIconsFormComponent implements OnInit {

  calendarIcons: any;
  calendarIcon: any;
  getId: any;
  urlSegments: any;
  isEdit: boolean;

  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  calendarIconForm: FormGroup;
  changeEndDate = false;

  LOCAL_PATH = environment.LOCAL_PATH;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private calendarIconsService: CalendarIconsService,
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.urlSegments = this.activatedRoute.snapshot.url;
    this.hasEdit();

    this.options = { concurrency: 1, maxUploads: 3, maxFileSize: 1000000 };
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input calendarIcons, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit(): void {

    this.buildForm();
    this.setAddEditValidators();

    this.loadData();
  }

  @ViewChild('name', { static: false }) inputEl: ElementRef;


  loadData() {
    this.calendarIconsService.getAll().subscribe((data: any[]) => {
      this.calendarIcons = data;

      if (this.isEdit) {
        this.calendarIcon = this.calendarIcons.find(calendarIcon => calendarIcon.filename == this.getId);
        this.setData();
      } else {
        this.calendarIcon = {};
      }
    });
  }

  buildForm() {
    this.calendarIconForm = this.formBuilder.group({
      name: ["", Validators.required],
      imageName: [null],
      imageurl: [null],
      unpublished: [true],
      filename: [null],
    });
  }

  setAddEditValidators() {
    const imageName = this.calendarIconForm.get('imageName');
    if (this.isEdit) {
      imageName.setValidators(null);
    } else {
      imageName.setValidators([Validators.required]);
    }
    imageName.updateValueAndValidity();
  }

  calendarIconFormSubmit() {
    this.calendarIconForm.markAllAsTouched();
    if (this.calendarIconForm.valid) {
      this.saveCalendarIcon();
    }
  }

  get calendarIconFormControls() {
    return this.calendarIconForm.controls;
  }

  hasEdit() {
    this.urlSegments.forEach(element => {
      if (element.path == 'edit') {
        return this.isEdit = true;
      }
    });
  }

  setData() {
    this.calendarIconForm.get('name').setValue(this.calendarIcon.name);
    this.calendarIconForm.get('imageurl').setValue(this.calendarIcon.imageurl);
    this.calendarIconForm.get('unpublished').setValue(!this.calendarIcon.unpublished); // inverse
    this.calendarIconForm.get('filename').setValue(this.calendarIcon.filename);
    this.calendarIconForm.get('imageName').setValue('');
  }

  getData() {
    this.calendarIcon.name = this.calendarIconForm.get('name').value;
    // this.calendarIcon.imageurl = this.calendarIconForm.get('imageurl').value; // do not get this as it has been changed
    this.calendarIcon.unpublished = !this.calendarIconForm.get('unpublished').value; // inverse
    this.calendarIcon.filename = this.calendarIconForm.get('filename').value;
  }

  saveCalendarIcon() {
    this.getData();
    if (this.isEdit) {
      this.calendarIconsService.update(this.calendarIcon.filename, this.calendarIcon)
        .subscribe(
          data => { console.log('edit-data', data) },
          error => { this.router.navigate(['calendarIcons']) },
          () => {
            this.router.navigate(['calendarIcons']);
          }
        );
    } else {
      this.calendarIconsService.add(this.calendarIcon)
        .subscribe(
          data => { console.log('add-data', data) },
          error => { this.router.navigate(['calendarIcons']) },
          () => {
            this.router.navigate(['calendarIcons']);
          }
        );
    }
  }

  cancelCalendarIcon() {
    this.router.navigate(['calendarIcons']);
  }

  // ****************************************** upload start

  onUploadOutput(output: UploadOutput): void {

    switch (output.type) {
      case 'allAddedToQueue':
        // uncomment this if you want to auto upload files when added
        const uploadAll: UploadInput = {
          type: 'uploadAll',
          url: `${environment.CONTEXT_PATH}/calendaricons/fileupload`,
          method: 'POST'
        };
        this.uploadInput.emit(uploadAll);
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.files.push(output.file);
        }
        break;
      case 'uploading':
        if (typeof output.file !== 'undefined') {
          // update current data in files array for uploading file
          const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
          this.files[index] = output.file;
        }
        break;
      case 'removed':
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
        break;
      case 'dragOver':
        this.dragOver = true;
        break;
      case 'dragOut':
      case 'drop':
        this.dragOver = false;
        break;
      case 'done':
        this.calendarIcon.imageurl = '/images/calendaricons/' + output.file.name;
        break;
    }
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

  // ****************************************** upload end

}
