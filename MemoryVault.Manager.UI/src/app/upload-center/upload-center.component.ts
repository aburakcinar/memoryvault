import { Component, OnInit } from '@angular/core';
import { FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile } from 'ngx-file-drop';
import { Store } from '@ngrx/store';

import * as fromAppStore from '../store/app.actions';
import { FileUploaderService, FileQueueObject } from '../services/upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-center',
  templateUrl: './upload-center.component.html',
  styleUrls: ['./upload-center.component.css']
})
export class UploadCenterComponent implements OnInit {

  queue: Observable<FileQueueObject[]>;

  constructor(
    private store: Store<fromAppStore.AppActions>,
    private uploadService: FileUploaderService) { }

  ngOnInit() {
    this.queue = this.uploadService.queue;
  }

  public files: UploadFile[] = [];

  public dropped(event: UploadEvent) {

    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          //console.log("file entry");
          // Here you can access the real file
          this.uploadService.addToQueue([file]);
        });
      }
      // else {
      //   // It was a directory (empty directories are added, otherwise only files)
      //   const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      //   console.log(droppedFile.relativePath, fileEntry);
      // }
    }

  }

  public fileOver(event) {
    //console.log(event);
  }

  public fileLeave(event) {
    //console.log(event);
  }

  public uploadQueue() {
    this.uploadService.uploadByQueue();
  }
}
