import { Component, OnInit } from '@angular/core';
import { FileSystemFileEntry, UploadEvent } from 'ngx-file-drop';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { FileQueueObject, FileUploaderService } from '../../services/upload.service';
import * as fromAppAction from '../../store/app.actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-side-upload',
  templateUrl: './side-upload.component.html',
  styleUrls: ['./side-upload.component.css']
})
export class SideUploadComponent implements OnInit {

  queue: FileQueueObject[];
  autoUpload: string = 'Off';
  stateSubs: Subscription;
  isUploading = false;

  constructor(
    private store: Store<fromAppAction.AppActions>) { }

  ngOnInit() {
    //this.queue = this.uploadService.queue;

    this.stateSubs = this.store.select("uploadFeature")
      .subscribe( (state: AppState) =>{
          this.queue = state.pendingUploads;
          this.isUploading = state.isUploading;
      });
  }

  public dropped(event: UploadEvent) {

    for (const droppedFile of event.files) {

      //   // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          //console.log("file entry");
          // Here you can access the real file
          // this.uploadService.addToQueue([file]);

          this.store.dispatch(new fromAppAction.EnqueueFile(file));
        });
      }
    }
  }

  public fileOver(event) {
    //console.log(event);
  }

  public fileLeave(event) {
    //console.log(event);
  }

  public uploadQueue() {
    //this.uploadService.uploadByQueue();
  }

  public handleAutoUpload() {
    this.store.dispatch(new fromAppAction.SetAutoUpload( this.autoUpload == 'On' ));
  }
}
