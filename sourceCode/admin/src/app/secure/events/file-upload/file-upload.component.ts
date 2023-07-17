import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  preview = '';

  @Input() existingFileUrl: string;
  @Output() uploadedFilename = new EventEmitter();

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {}

  selectFile(event: any): void {
    this.preview = '';
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.preview = '';
        this.currentFile = file;
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };
        reader.readAsDataURL(this.currentFile);
        this.upload();
      }
    }
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe(
          (data) => {},
          (msg) => {
            this.uploadedFilename.emit(this.currentFile.name);
            console.log("upload", msg);
          },
          () => {
            this.uploadedFilename.emit(this.currentFile.name);
            console.log("success");
          }
        )
      }
    }
  }
  
}