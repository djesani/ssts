import { Component, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { EventsService } from '../events.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../../../environments/environment';

const now = new Date();

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styles: []
})
export class EventsFormComponent implements OnInit {

  events: any;
  event: any;
  getId: any;
  urlSegments: any;
  isEdit: boolean;

  minStartDate: NgbDateStruct;
  maxStartDate: NgbDateStruct;
  minEndDate: NgbDateStruct;
  maxEndDate: NgbDateStruct;

  formData: FormData;

  eventForm: FormGroup;
  changeEndDate = false;

  LOCAL_PATH = environment.LOCAL_PATH;

  public Editor = ClassicEditor;

  public cKEditorConfig = {
    toolbar: [ 'heading', '|',
      'fontfamily','fontsize',
      'alignment',
      'fontColor','fontBackgroundColor', '|',
      'bold', 'italic','|',
      'link','|',
      'outdent','indent','|',
      'bulletedList','numberedList','|',
      'undo','redo'
    ]
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.urlSegments = this.activatedRoute.snapshot.url;
    this.hasEdit();
  }

  ngOnInit(): void {

    this.buildForm();
    this.setAddEditValidators();

    this.loadData();

    this.minStartDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 1 };
    this.maxStartDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 1 };

    this.minEndDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 1 };
    this.maxEndDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 1 };

  }

  @ViewChild('name', { static: false }) inputEl: ElementRef;

  loadData() {
    this.eventsService.getAll().subscribe((data: any[]) => {
      this.events = data;

      // console.log('this.events', this.events)
      if (this.isEdit) {

        console.log('this.events', this.events)
        this.event = this.events.find(event => event.filename == this.getId);
        this.setData();
      } else {
        this.event = {};
      }
    });
  }

  buildForm() {
    this.eventForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      startDate: [null, Validators.required],
      endDate: [null],
      imageName: [null],
      imageurl: [null],
      unpublished: [true],
      filename: [null],
    });
  }

  setAddEditValidators() {
    const imageName = this.eventForm.get('imageName');
    if (this.isEdit) {
      imageName.setValidators(null);
    } else {
      imageName.setValidators([Validators.required]);
    }
    imageName.updateValueAndValidity();
  }

  eventFormSubmit() {
    this.eventForm.markAllAsTouched();
    if (this.eventForm.valid) {
      this.saveEvent();
    }
  }

  get eventFormControls() {
    return this.eventForm.controls;
  }

  hasEdit() {
    this.urlSegments.forEach(element => {
      if (element.path == 'edit') {
        return this.isEdit = true;
      }
    });
  }

  setEndDate() {
    let startDate = this.eventForm.get('startDate').value;
    this.eventForm.get('endDate').setValue(startDate);
    let startDateArray = startDate.split('/');
    this.minEndDate = { year: parseInt(startDateArray[2]), month: parseInt(startDateArray[1]), day: parseInt(startDateArray[0]) };
    this.maxEndDate = { year: parseInt(startDateArray[2]) + 1, month: parseInt(startDateArray[1]), day: parseInt(startDateArray[0]) }; // one year
  }

  onChangeEndDate(event) {
    this.changeEndDate = event.target.checked;
  }

  setData() {
    this.eventForm.get('name').setValue(this.event.name);
    this.eventForm.get('description').setValue(this.event.description);
    this.eventForm.get('startDate').setValue(this.event.startDate);
    this.eventForm.get('endDate').setValue(this.event.endDate);
    this.eventForm.get('imageurl').setValue(this.event.imageurl);
    this.eventForm.get('unpublished').setValue(!this.event.unpublished); // inverse
    this.eventForm.get('filename').setValue(this.event.filename);
    this.eventForm.get('imageName').setValue('');

    if (this.event.startDate !== this.event.endDate) {
      this.changeEndDate = true;
    } else {
      this.changeEndDate = false;
    }

  }

  getData() {
    this.event.name = this.eventForm.get('name').value;
    this.event.description = this.eventForm.get('description').value;
    this.event.startDate = this.eventForm.get('startDate').value;
    this.event.endDate = this.eventForm.get('endDate').value;
    // this.event.imageurl = this.eventForm.get('imageurl').value; // do not get this as it has been changed
    this.event.unpublished = !this.eventForm.get('unpublished').value; // inverse
    this.event.filename = this.eventForm.get('filename').value;
  }

  saveEvent() {
    this.getData();
    if (this.isEdit) {
      this.eventsService.update(this.event.filename, this.event)
        .subscribe(
          data => { console.log('edit-data', data) },
          error => { this.router.navigate(['events']) },
          () => {
            console.log('success');
            this.router.navigate(['events']);
          }
        );
    } else {
      this.eventsService.add(this.event)
        .subscribe(
          data => { console.log('add-data', data) },
          error => { this.router.navigate(['events']) },
          () => {
            console.log('success');
            this.router.navigate(['events']);
          }
        );
    }
  }

  cancelEvent() {
    this.router.navigate(['events']);
  }

  // ****************************************** upload start

  // onUploadOutput(output: UploadOutput): void {

  //   switch (output.type) {
  //     case 'allAddedToQueue':
  //       // uncomment this if you want to auto upload files when added
  //       const uploadAll: UploadInput = {
  //         type: 'uploadAll',
  //         url: `${environment.CONTEXT_PATH}/fileupload`,
  //         method: 'POST'
  //       };
  //       this.uploadInput.emit(uploadAll);
  //       break;
  //     case 'addedToQueue':
  //       if (typeof output.file !== 'undefined') {
  //         this.files.push(output.file);
  //       }
  //       break;
  //     case 'uploading':
  //       if (typeof output.file !== 'undefined') {
  //         // update current data in files array for uploading file
  //         const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
  //         this.files[index] = output.file;
  //       }
  //       break;
  //     case 'removed':
  //       // remove file from array when removed
  //       this.files = this.files.filter((file: UploadFile) => file !== output.file);
  //       break;
  //     case 'dragOver':
  //       this.dragOver = true;
  //       break;
  //     case 'dragOut':
  //     case 'drop':
  //       this.dragOver = false;
  //       break;
  //     case 'done':
  //       this.event.imageurl = '/images/events/' + output.file.name;
  //       break;
  //   }
  // }

  // cancelUpload(id: string): void {
  //   this.uploadInput.emit({ type: 'cancel', id: id });
  // }

  // removeFile(id: string): void {
  //   this.uploadInput.emit({ type: 'remove', id: id });
  // }

  // removeAllFiles(): void {
  //   this.uploadInput.emit({ type: 'removeAll' });
  // }

  // ****************************************** upload end

}
