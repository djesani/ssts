import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AttachmentsService } from './attachments.service';

@Component({
  selector: 'application-attachments',
  templateUrl: './application-attachments.component.html'
})
export class ApplicationAttachmentsComponent implements OnInit {

  attachmentsForm: FormGroup;
  attachments = [];
  attachmentsUploaded = [];
  attachmentFile: any = {};
  attachmentsUploadedCount = 0;
  attachmentRemoveError = false;
  filesMaxUploadAllowedError = false;
  formClass: string;
  formPreFilled = false;

  @Input() attachmentsRequiredShow: boolean;
  @Input() attachmentConfig: any;
  @Input() existingData: any;
  @Output() attachmentsFormData = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private attachmentsService: AttachmentsService,
  ) { }

  ngOnInit() {
    this.attachmentsForm = this.formBuilder.group({
      attachment: [null, Validators.required]
    });
    this.formClass = this.attachmentConfig.attachmentType.replace(/ /g, "-").toLowerCase();
    this.attachmentConfigSetDefault();
    this.formPreFill();
  }

  ngOnChanges() {
    this.formPreFill();
  }

  attachmentConfigSetDefault() {
    if (this.attachmentConfig.applicationId == undefined || this.attachmentConfig.applicationId == "") {
      this.attachmentConfig.applicationId = "1";
    }
    if (this.attachmentConfig.attachmentType == undefined || this.attachmentConfig.attachmentType == "") {
      this.attachmentConfig.attachmentType = "Attachment type";
    }
    if (this.attachmentConfig.labelPrimaryCounter == undefined || this.attachmentConfig.labelPrimaryCounter == "") {
      this.attachmentConfig.labelPrimaryCounter = "1.";
    }
    if (this.attachmentConfig.labelPrimary == undefined || this.attachmentConfig.labelPrimary == "") {
      this.attachmentConfig.labelPrimary = "Attachment upload";
    }
    if (this.attachmentConfig.labelSecondary == undefined || this.attachmentConfig.labelSecondary == "") {
      this.attachmentConfig.labelSecondary = "Each attached file must be less than 10MB in size";
    }
    if (this.attachmentConfig.fileTypeAcceptError == undefined || this.attachmentConfig.fileTypeAcceptError == "") {
      this.attachmentConfig.fileTypeAcceptError = "We couldn't upload this file as this file format is not allowed";
    }
    if (this.attachmentConfig.fileMaxSizeError == undefined || this.attachmentConfig.fileMaxSizeError == "") {
      this.attachmentConfig.fileMaxSizeError = "We couldn't upload this file as it's more than 10MB";
    }
    if (this.attachmentConfig.fileMinSizeError == undefined || this.attachmentConfig.fileMinSizeError == "") {
      this.attachmentConfig.fileMinSizeError = "We couldn't upload this file as it's less than 1KB";
    }
    if (this.attachmentConfig.fileNoContentError == undefined || this.attachmentConfig.fileNoContentError == "") {
      this.attachmentConfig.fileNoContentError = "We couldn't upload this file as it's 0 bytes";
    }
    if (this.attachmentConfig.filesMaxUploadAllowedError == undefined || this.attachmentConfig.filesMaxUploadAllowedError == "") {
      this.attachmentConfig.filesMaxUploadAllowedError = "You've reached the limit of attachments";
    }
    if (this.attachmentConfig.fileTypeAccept == undefined || this.attachmentConfig.fileTypeAccept == "") {
      this.attachmentConfig.fileTypeAccept = ".doc, .docx, .pdf, .jpg, .jpeg";
    }
    if (this.attachmentConfig.fileUploadMultiple == undefined || this.attachmentConfig.fileUploadMultiple == "") {
      this.attachmentConfig.fileUploadMultiple = true;
    }
    if (this.attachmentConfig.filesMaxUploadAllowed == undefined || this.attachmentConfig.filesMaxUploadAllowed == "") {
      this.attachmentConfig.filesMaxUploadAllowed = 5;
    }
    if (this.attachmentConfig.fileMaxSize == undefined || this.attachmentConfig.fileMaxSize == "") {
      this.attachmentConfig.fileMaxSize = 10485760; // 10MB in bytes,
    }
    if (this.attachmentConfig.fileMinSize == undefined || this.attachmentConfig.fileMinSize == "") {
      this.attachmentConfig.fileMinSize = 1024; // bytes
    }
    if (this.attachmentConfig.attachmentAddError == undefined || this.attachmentConfig.attachmentAddError == "") {
      this.attachmentConfig.attachmentAddError = "Error in adding attachment";
    }
    if (this.attachmentConfig.attachmentRemoveError == undefined || this.attachmentConfig.attachmentRemoveError == "") {
      this.attachmentConfig.attachmentRemoveError = "Error in removing attachment";
    }
    if (this.attachmentConfig.attachmentsRequiredError == undefined || this.attachmentConfig.attachmentsRequiredError == "") {
      this.attachmentConfig.attachmentsRequiredError = "Please attach at least one file";
    }
    if (this.attachmentConfig.labelFileUpload == undefined || this.attachmentConfig.labelFileUpload == "") {
      this.attachmentConfig.labelFileUpload = "Attach file(s)";
    }
    if (this.attachmentConfig.labelFileUploadIconClass == undefined || this.attachmentConfig.labelFileUploadIconClass == "") {
      this.attachmentConfig.labelFileUploadIconClass = "fa-plus";
    }
    if (this.attachmentConfig.labelRemove == undefined || this.attachmentConfig.labelRemove == "") {
      this.attachmentConfig.labelRemove = "Remove";
    }
  }

  uploadFiles(fileEvent: any) {

    const fileList: FileList = fileEvent.target.files;
    const files = Array.from(fileList);

    files.forEach(file => {

      this.attachmentFile = {};
      this.attachmentFile.file = file;

      this.attachmentFile.fileNoContentError = false;
      this.attachmentFile.fileMinSizeError = false;
      this.attachmentFile.fileMaxSizeError = false;
      this.attachmentFile.fileTypeAcceptError = false;

      if (file.size < this.attachmentConfig.fileMinSize) {
        this.attachmentFile.fileMinSizeError = true;
      }

      if (file.size > this.attachmentConfig.fileMaxSize) {
        this.attachmentFile.fileMaxSizeError = true;
      }

      this.attachmentFile.fileExt = '.' + file.name.split('.').pop().toLowerCase();
      let attachmentAcceptArray = this.attachmentConfig.fileTypeAccept.replace(/ /g, "").split(',')

      if (attachmentAcceptArray.includes(this.attachmentFile.fileExt)) {
        this.attachmentFile.fileTypeAcceptError = false;
      } else {
        this.attachmentFile.fileTypeAcceptError = true;
        this.attachmentFile.fileNoContentError = false;
        this.attachmentFile.fileMinSizeError = false;
        this.attachmentFile.fileMaxSizeError = false;
      }

      if (file.size == 0) {
        this.attachmentFile.fileMinSizeError = false;
        this.attachmentFile.fileTypeAcceptError = false;
        this.attachmentFile.fileNoContentError = true;
      }

      this.attachmentFile.fileName = file.name;
      this.attachmentFile.attachmentType = this.attachmentConfig.attachmentType;

      if (
        this.attachmentFile.fileNoContentError ||
        this.attachmentFile.fileMinSizeError ||
        this.attachmentFile.fileMaxSizeError ||
        this.attachmentFile.fileTypeAcceptError
      ) {
        this.attachments.push(this.attachmentFile);
        this.attachmentsForm.reset();
        return;
      } else {
        this.attachmentsUploadedCount = this.attachments.filter(function (element) {
          return element.uploadStatus == 'success' || element.uploading == true;
        }).length;

        if (this.attachmentsUploadedCount >= this.attachmentConfig.filesMaxUploadAllowed) {
          this.filesMaxUploadAllowedError = true;
          return;
        }

        let formData: any = new FormData();
        formData.append("documentType", this.attachmentConfig.attachmentType);
        formData.append('applicationId', this.attachmentConfig.applicationId);
        formData.append("attachment", file);
        this.attachmentFile.uploading = true;

        this.attachmentsService.postAttachment(formData).subscribe((data: any[]) => {
          let response: any = data;
          if (response.message == "success") {
            let document = response.document;
            document.metadata = JSON.parse(document.metadata);
            this.attachments.find(function (element) {
              if (element.uploading == true && element.fileName == document.metadata.documentName) {
                element.swimReference = response.document.swimReference;
                element.id = response.document.id;
                element.uploading = false;
                element.removing = false;
                element.uploadStatus = "success";
                element.metadata = document.metadata;
              }
            });
          }
          this.attachmentsFormDataEmit();
          this.attachmentsUploadedCount = this.attachmentsUploaded.length;
        });
        this.attachments.push(this.attachmentFile);
        this.attachmentsForm.reset();
      }
    });

  }

  removeAttachment(attachment: any) {
    let objIndex = this.attachments.findIndex((obj => obj.swimReference == attachment.swimReference));
    this.attachments[objIndex].removing = true;

    this.attachmentsService.deleteAttachment(attachment).subscribe((data: any[]) => {
      let response: any = data;
      if (response) {
        this.attachments = this.attachments.filter(({ swimReference }) => !attachment.swimReference.includes(swimReference));
        this.attachmentsFormDataEmit();
        this.attachmentsUploadedCount = this.attachmentsUploaded.length;
        this.filesMaxUploadAllowedError = false;
        this.attachmentsForm.reset();
      } else {
        attachment.attachmentRemoveError = true;
        this.attachments[objIndex].removing = false;
      }
    });
  }

  removeFailed() {
    this.attachments = this.attachments.filter(function (element) {
      return element.uploadStatus == 'success' || element.removing == true;
    });
  }

  attachmentsFormDataEmit() {
    this.getFormData();
    this.attachmentsFormData.emit(this.attachmentsUploaded);
  }

  attachmentsFormSubmit() {
    this.attachmentsFormDataEmit();
  }

  getFormData() {
    this.attachmentsUploaded = this.attachments.filter(function (element) {
      return element.uploadStatus == 'success';
    });
  }

  formPreFill() {
    if (this.existingData.length > 0 && !this.formPreFilled) {
      this.attachments = this.existingData;
      this.formPreFilled = true; // run only once
      this.attachmentsFormDataEmit();
    }
  }

}