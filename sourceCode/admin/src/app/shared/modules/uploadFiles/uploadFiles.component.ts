import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UploadFilesService } from './uploadFiles.service';

import { Observable, of, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-uploadFiles',
  templateUrl: './uploadFiles.component.html'
})
export class UploadFilesComponent implements OnInit {

  uploadFilesForm: FormGroup;
  uploadFiles = [];
  uploadFilesUploaded = [];
  uploadFile: any = {};
  uploadFilesUploadedCount = 0;
  uploadFileRemoveError = false;
  filesMaxUploadAllowedError = false;
  formClass: string;
  formPreFilled = false;

  uploadFileConfigSetDefault() {
    if (this.uploadFileConfig.fileTypeAcceptError == undefined || this.uploadFileConfig.fileTypeAcceptError == "") {
      this.uploadFileConfig.fileTypeAcceptError = "We couldn't upload this file as this file format is not allowed";
    }
    if (this.uploadFileConfig.fileMaxSizeError == undefined || this.uploadFileConfig.fileMaxSizeError == "") {
      this.uploadFileConfig.fileMaxSizeError = "We couldn't upload this file as it's more than 10MB";
    }
    if (this.uploadFileConfig.fileMinSizeError == undefined || this.uploadFileConfig.fileMinSizeError == "") {
      this.uploadFileConfig.fileMinSizeError = "We couldn't upload this file as it's less than 1KB";
    }
    if (this.uploadFileConfig.fileNoContentError == undefined || this.uploadFileConfig.fileNoContentError == "") {
      this.uploadFileConfig.fileNoContentError = "We couldn't upload this file as it's 0 bytes";
    }
    if (this.uploadFileConfig.filesMaxUploadAllowedError == undefined || this.uploadFileConfig.filesMaxUploadAllowedError == "") {
      this.uploadFileConfig.filesMaxUploadAllowedError = "You've reached the limit of uploadFiles";
    }
    if (this.uploadFileConfig.fileTypeAccept == undefined || this.uploadFileConfig.fileTypeAccept == "") {
      this.uploadFileConfig.fileTypeAccept = ".doc, .docx, .pdf, .jpg, .jpeg";
    }
    if (this.uploadFileConfig.fileUploadMultiple == undefined || this.uploadFileConfig.fileUploadMultiple == "") {
      this.uploadFileConfig.fileUploadMultiple = true;
    }
    if (this.uploadFileConfig.filesMaxUploadAllowed == undefined || this.uploadFileConfig.filesMaxUploadAllowed == "") {
      this.uploadFileConfig.filesMaxUploadAllowed = 5;
    }
    if (this.uploadFileConfig.fileMaxSize == undefined || this.uploadFileConfig.fileMaxSize == "") {
      this.uploadFileConfig.fileMaxSize = 10485760; // 10MB in bytes,
    }
    if (this.uploadFileConfig.fileMinSize == undefined || this.uploadFileConfig.fileMinSize == "") {
      this.uploadFileConfig.fileMinSize = 1024; // bytes
    }
    if (this.uploadFileConfig.uploadFileAddError == undefined || this.uploadFileConfig.uploadFileAddError == "") {
      this.uploadFileConfig.uploadFileAddError = "Error in adding uploadFile";
    }
    if (this.uploadFileConfig.uploadFileRemoveError == undefined || this.uploadFileConfig.uploadFileRemoveError == "") {
      this.uploadFileConfig.uploadFileRemoveError = "Error in removing uploadFile";
    }
    if (this.uploadFileConfig.uploadFilesRequiredError == undefined || this.uploadFileConfig.uploadFilesRequiredError == "") {
      this.uploadFileConfig.uploadFilesRequiredError = "Please attach at least one file";
    }
    if (this.uploadFileConfig.labelFileUpload == undefined || this.uploadFileConfig.labelFileUpload == "") {
      this.uploadFileConfig.labelFileUpload = "Attach file(s)";
    }
    if (this.uploadFileConfig.labelFileUploadIconClass == undefined || this.uploadFileConfig.labelFileUploadIconClass == "") {
      this.uploadFileConfig.labelFileUploadIconClass = "fa-plus";
    }
    if (this.uploadFileConfig.labelRemove == undefined || this.uploadFileConfig.labelRemove == "") {
      this.uploadFileConfig.labelRemove = "Remove";
    }
  }

  @Input() uploadFilesRequiredShow: boolean;
  @Input() uploadFileConfig: any;
  @Input() existingData: any;
  @Output() uploadFilesFormData = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private uploadFilesService: UploadFilesService,
  ) { }

  ngOnInit() {
    this.uploadFilesForm = this.formBuilder.group({
      uploadFile: [null, Validators.required]
    });
    this.formClass = this.uploadFileConfig.uploadFileType.replace(/ /g, "-").toLowerCase();
    this.uploadFileConfigSetDefault();
    this.formPreFill();
  }

  ngOnChanges() {
    this.formPreFill();
  }

  uploadFilesFunction(fileEvent: any) {

    const fileList: FileList = fileEvent.target.files;
    const files = Array.from(fileList);

    files.forEach(file => {

      this.uploadFile = {};
      this.uploadFile.file = file;

      this.uploadFile.fileNoContentError = false;
      this.uploadFile.fileMinSizeError = false;
      this.uploadFile.fileMaxSizeError = false;
      this.uploadFile.fileTypeAcceptError = false;

      if (file.size < this.uploadFileConfig.fileMinSize) {
        this.uploadFile.fileMinSizeError = true;
      }

      if (file.size > this.uploadFileConfig.fileMaxSize) {
        this.uploadFile.fileMaxSizeError = true;
      }

      this.uploadFile.fileExt = '.' + file.name.split('.').pop().toLowerCase();
      let uploadFileAcceptArray = this.uploadFileConfig.fileTypeAccept.replace(/ /g, "").split(',')

      if (uploadFileAcceptArray.includes(this.uploadFile.fileExt)) {
        this.uploadFile.fileTypeAcceptError = false;
      } else {
        this.uploadFile.fileTypeAcceptError = true;
        this.uploadFile.fileNoContentError = false;
        this.uploadFile.fileMinSizeError = false;
        this.uploadFile.fileMaxSizeError = false;
      }

      if (file.size == 0) {
        this.uploadFile.fileMinSizeError = false;
        this.uploadFile.fileTypeAcceptError = false;
        this.uploadFile.fileNoContentError = true;
      }

      this.uploadFile.fileName = file.name;

      if (
        this.uploadFile.fileNoContentError ||
        this.uploadFile.fileMinSizeError ||
        this.uploadFile.fileMaxSizeError ||
        this.uploadFile.fileTypeAcceptError
      ) {
        this.uploadFiles.push(this.uploadFile);
        this.uploadFilesForm.reset();
        return;
      } else {
        this.uploadFilesUploadedCount = this.uploadFiles.filter(function (element) {
          return element.uploadStatus == 'success' || element.uploading == true;
        }).length;

        if (this.uploadFilesUploadedCount >= this.uploadFileConfig.filesMaxUploadAllowed) {
          this.filesMaxUploadAllowedError = true;
          return;
        }

        let formData: any = new FormData();
        formData.append("documentType", "abc");
        formData.append('applicationId', "def");
        formData.append("uploadFile", file);

        this.uploadFile.uploading = true;

      //  .subscribe({
      //     next: data => {
      //         // this.postId = data.id;
      //         console.log('data', data)
      //     },
      //     error: error => {
      //         // this.errorMessage = error.message;
      //         console.error('There was an error!', error);
      //     }
      // })
  // }

        this.uploadFilesService.postUploadFile(formData)

        // .subscribe({
        //     next: data => {
        //         // this.postId = data.id;
        //         console.log('data', data)
        //     },
        //     error: error => {

        //       console.log('error', error)
        //         // this.errorMessage = error.message;
        //         console.error('There was an error!', error);
        //     }
        // })

      //   .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      //     // this.errorMessage = error.message;
      //     console.error('There was an error!', error);

      //     // after handling the error, return a new observable 
      //     // that doesn't emit any values and completes
      //     return of();
      // }))
      .subscribe(data => {
          // this.postId = data.id;
          console.log('data', data)
      });

        // .subscribe((data) => {
        //   console.log('data', data)
        //   // let response: any = data;
        //   // console.log('response', response)
        //   // if (response == "File uploaded!") {
        //   //   let document = response.document;
        //   //   document.metadata = JSON.parse(document.metadata);
        //   //   this.uploadFiles.find(function (element) {
        //   //     if (element.uploading == true && element.fileName == document.metadata.documentName) {
        //   //       element.id = response.document.id;
        //   //       element.uploading = false;
        //   //       element.removing = false;
        //   //       element.uploadStatus = "success";
        //   //       element.metadata = document.metadata;
        //   //     }
        //   //   });
        //   // }
        //   this.uploadFilesFormDataEmit();
        //   this.uploadFilesUploadedCount = this.uploadFilesUploaded.length;
        // });
        this.uploadFiles.push(this.uploadFile);

        // console.log("this.uploadFiles", this.uploadFiles)
        // this.uploadFilesForm.reset();
      }
    });

  }

  removeUploadFile(uploadFile: any) {
    let objIndex = this.uploadFiles.findIndex((obj => obj.id == uploadFile.id));
    this.uploadFiles[objIndex].removing = true;

    this.uploadFilesService.deleteUploadFile(uploadFile).subscribe((data: any[]) => {
      let response: any = data;
      if (response) {
        this.uploadFiles = this.uploadFiles.filter(({ id }) => !uploadFile.id.includes(id));
        this.uploadFilesFormDataEmit();
        this.uploadFilesUploadedCount = this.uploadFilesUploaded.length;
        this.filesMaxUploadAllowedError = false;
        this.uploadFilesForm.reset();
      } else {
        uploadFile.uploadFileRemoveError = true;
        this.uploadFiles[objIndex].removing = false;
      }
    });
  }

  removeFailed() {
    this.uploadFiles = this.uploadFiles.filter(function (element) {
      return element.uploadStatus == 'success' || element.removing == true;
    });
  }

  uploadFilesFormDataEmit() {
    this.getFormData();
    this.uploadFilesFormData.emit(this.uploadFilesUploaded);
  }

  uploadFilesFormSubmit() {
    this.uploadFilesFormDataEmit();
  }

  getFormData() {
    this.uploadFilesUploaded = this.uploadFiles.filter(function (element) {
      return element.uploadStatus == 'success';
    });
  }

  formPreFill() {
    if (this.existingData.length > 0 && !this.formPreFilled) {
      this.uploadFiles = this.existingData;
      this.formPreFilled = true; // run only once
      this.uploadFilesFormDataEmit();
    }
  }

}