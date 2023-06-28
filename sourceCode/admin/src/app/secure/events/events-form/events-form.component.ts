import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { EventsService } from "../events.service";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { environment } from "../../../../environments/environment";

const now = new Date();

@Component({
  selector: "app-events-form",
  templateUrl: "./events-form.component.html",
  styles: [],
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
    toolbar: [
      "heading",
      "|",
      "fontfamily",
      "fontsize",
      "alignment",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "|",
      "link",
      "|",
      "outdent",
      "indent",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo",
    ],
  };

  uploadFileConfigEvent: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private eventsService: EventsService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get("id");
    this.urlSegments = this.activatedRoute.snapshot.url;
    this.hasEdit();
  }

  ngOnInit(): void {
    this.buildForm();
    this.setAddEditValidators();

    this.loadData();

    this.minStartDate = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate() + 1,
    };
    this.maxStartDate = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate() + 1,
    };

    this.minEndDate = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate() + 1,
    };
    this.maxEndDate = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate() + 1,
    };

    this.uploadFileConfigEvent = {
      fileTypeAccept: ".jpg, .jpeg, .png",
      fileTypeAcceptError: "File format not accepted",
      uploadFilesRequiredError: "At least one file required",
      filesMaxUploadAllowedError: "5 files only",
      labelFileUpload: "Attach file/s",
      labelRemoveIconClass: "fa-trash",
      // fileMaxSizeError: "We couldn't upload this file as it's more than 10MB",
      // fileMinSizeError: "We couldn't upload this file as it's less than 1KB",
      // fileNoContentError: "We couldn't upload this file as it's 0 bytes",
      // fileUploadMultiple: true,
      // filesMaxUploadAllowed: 5,
      // fileMaxSize: 10485760, // 10MB in bytes,
      // fileMinSize: 1024, // bytes
      // uploadFileAddError: "Error in adding uploadFile",
      // uploadFileRemoveError: "Error in removing uploadFile",
      // labelFileUploadIconClass: "fa-plus",
      // labelRemove: "Remove",
    };
  }

  @ViewChild("name", { static: false }) inputEl: ElementRef;

  loadData() {
    this.eventsService.getAll().subscribe((data: any[]) => {
      this.events = data;

      // console.log('this.events', this.events)
      if (this.isEdit) {
        console.log("this.events", this.events);
        this.event = this.events.find((event) => event.filename == this.getId);
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
    const imageName = this.eventForm.get("imageName");
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
    this.urlSegments.forEach((element) => {
      if (element.path == "edit") {
        return (this.isEdit = true);
      }
    });
  }

  setEndDate() {
    let startDate = this.eventForm.get("startDate").value;
    this.eventForm.get("endDate").setValue(startDate);
    let startDateArray = startDate.split("/");
    this.minEndDate = {
      year: parseInt(startDateArray[2]),
      month: parseInt(startDateArray[1]),
      day: parseInt(startDateArray[0]),
    };
    this.maxEndDate = {
      year: parseInt(startDateArray[2]) + 1,
      month: parseInt(startDateArray[1]),
      day: parseInt(startDateArray[0]),
    }; // one year
  }

  onChangeEndDate(event) {
    this.changeEndDate = event.target.checked;
  }

  setData() {
    this.eventForm.get("name").setValue(this.event.name);
    this.eventForm.get("description").setValue(this.event.description);
    this.eventForm.get("startDate").setValue(this.event.startDate);
    this.eventForm.get("endDate").setValue(this.event.endDate);
    this.eventForm.get("imageurl").setValue(this.event.imageurl);
    this.eventForm.get("unpublished").setValue(!this.event.unpublished); // inverse
    this.eventForm.get("filename").setValue(this.event.filename);
    this.eventForm.get("imageName").setValue("");

    if (this.event.startDate !== this.event.endDate) {
      this.changeEndDate = true;
    } else {
      this.changeEndDate = false;
    }
  }

  getData() {
    this.event.name = this.eventForm.get("name").value;
    this.event.description = this.eventForm.get("description").value;
    this.event.startDate = this.eventForm.get("startDate").value;
    this.event.endDate = this.eventForm.get("endDate").value;
    // this.event.imageurl = this.eventForm.get('imageurl').value; // do not get this as it has been changed
    this.event.unpublished = !this.eventForm.get("unpublished").value; // inverse
    this.event.filename = this.eventForm.get("filename").value;
  }

  saveEvent() {
    this.getData();
    if (this.isEdit) {
      this.eventsService.update(this.event.filename, this.event).subscribe(
        (data) => {
          console.log("edit-data", data);
        },
        (error) => {
          this.router.navigate(["events"]);
        },
        () => {
          console.log("success");
          this.router.navigate(["events"]);
        }
      );
    } else {
      this.eventsService.add(this.event).subscribe(
        (data) => {
          console.log("add-data", data);
        },
        (error) => {
          this.router.navigate(["events"]);
        },
        () => {
          console.log("success");
          this.router.navigate(["events"]);
        }
      );
    }
  }

  cancelEvent() {
    this.router.navigate(["events"]);
  }
}
