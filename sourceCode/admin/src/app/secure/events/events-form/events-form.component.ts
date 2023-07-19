import { Component, OnInit } from "@angular/core";
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

  existingFileUrl: any;

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

    this.formPreFill();

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
  }

  formPreFill() {
    this.eventsService.getAll().subscribe((data: any[]) => {
      this.events = data;
      if (this.isEdit) {
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
      unpublished: [true],
      imageurl: [null],
    });
  }

  setAddEditValidators() {
    const imageurl = this.eventForm.get("imageurl");
    if (this.isEdit) {
      imageurl.setValidators(null);
    } else {
      imageurl.setValidators([Validators.required]);
    }
    imageurl.updateValueAndValidity();
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
    this.eventForm.get("unpublished").setValue(!this.event.unpublished); // inverse
    this.eventForm.get("imageurl").setValue(this.event.imageurl);

    if (this.event.startDate !== this.event.endDate) {
      this.changeEndDate = true;
    } else {
      this.changeEndDate = false;
    }

    this.existingFileUrl = this.LOCAL_PATH + this.event.imageurl;
  }

  getData() {
    this.event.name = this.eventForm.get("name").value;
    this.event.description = this.eventForm.get("description").value;
    this.event.startDate = this.eventForm.get("startDate").value;
    this.event.endDate = this.eventForm.get("endDate").value;
    this.event.unpublished = !this.eventForm.get("unpublished").value; // inverse
    // this.event.imageurl = !this.eventForm.get("imageurl").value;
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

  uploadedFilename(filename: any) {
    this.event.imageurl = "/images/events/" + filename;
    this.eventForm.get("imageurl").setValue(this.event.imageurl);
  }
}
