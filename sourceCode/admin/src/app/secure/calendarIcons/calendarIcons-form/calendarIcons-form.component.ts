import { Component, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CalendarIconsService } from '../calendarIcons.service';

// import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

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

  formData: FormData;
  existingFileUrl: any;

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
  }

  ngOnInit(): void {

    this.buildForm();
    this.setAddEditValidators();

    this.formPreFill();
  }

  formPreFill() {
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
      imageurl: [null],
      unpublished: [true],
      filename: [null],
    });
  }

  setAddEditValidators() {
    const imageurl = this.calendarIconForm.get("imageurl");
    if (this.isEdit) {
      imageurl.setValidators(null);
    } else {
      imageurl.setValidators([Validators.required]);
    }
    imageurl.updateValueAndValidity();
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

    this.existingFileUrl = this.LOCAL_PATH + this.calendarIcon.imageurl;
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

  uploadedFilename(filename: any) {
    this.calendarIcon.imageurl = "/images/events/" + filename;
    // this.calendarIcon.imageurl = "/images/calendarIcon/" + filename;
    this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl);
  }

}
