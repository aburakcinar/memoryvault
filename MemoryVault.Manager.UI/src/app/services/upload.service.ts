import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';

import { BehaviorSubject, Subscription } from 'rxjs';

export enum FileQueueStatus {
  Pending,
  Queued,
  Success,
  Error,
  Progress
}

export class FileQueueObject {
  public id: Guid;
  public file: any;
  public status: FileQueueStatus = FileQueueStatus.Pending;
  public progress: number = 0;
  public request: Subscription = null;
  public response: HttpResponse<any> | HttpErrorResponse = null;

  constructor(file: any) {
    this.id = Guid.create();
    this.file = file;
  }

  // actions
  public upload = () => { /* set in service */ };
  public cancel = () => { /* set in service */ };
  public remove = () => { /* set in service */ };

  // statuses
  public isPending = () => this.status === FileQueueStatus.Pending;
  public isSuccess = () => this.status === FileQueueStatus.Success;
  public isError = () => this.status === FileQueueStatus.Error;
  public inProgress = () => this.status === FileQueueStatus.Progress;
  public inQueued = () => this.status === FileQueueStatus.Queued;
  public isUploadable = () => this.status === FileQueueStatus.Pending || this.status === FileQueueStatus.Error;

  // public setProgress(event: any) {
  //   this.progress = Math.round(100 * event.loaded / event.total);
  //   this.status = FileQueueStatus.Progress;
  // }

  // public success() {

  // }

  // public failure() {

  // }
}

export const allowedFileTypes: string[] = ['.jpg', '.jpeg', '.png', '.mp4', '.avi', '.mkv', '.mov'];

// tslint:disable-next-line:max-classes-per-file
@Injectable({ providedIn: 'root' })
export class FileUploaderService {

  public url: string = 'http://localhost:5000/api/v2/upload';

  private _queue: BehaviorSubject<FileQueueObject[]>;
  private _files: FileQueueObject[] = [];
  private _uploadQueue: FileQueueObject[] = [];

  constructor(private http: HttpClient) {
    this._queue = <BehaviorSubject<FileQueueObject[]>>new BehaviorSubject(this._files);
  }

  // the queue
  public get queue() {
    return this._queue.asObservable();
  }

  // public events
  public onCompleteItem(queueObj: FileQueueObject, response: any): any {
    return { queueObj, response };
  }

  // public functions
  public addToQueue(data: any) {
    // add file to the queue
    _.each(data, (file: any) => this._addToQueue(file));

  }

  public clearQueue() {
    // clear the queue
    this._files = [];
    this._queue.next(this._files);
  }

  public uploadAll() {

    _.each(this._files, (queueObj: FileQueueObject) => {
      //console.log("call _upload");
      if (queueObj.isUploadable()) {
        this._upload(queueObj);
      }
    });
  }

  public uploadByQueue() {

    _.each(this._files, (q: FileQueueObject) => {
      q.status = FileQueueStatus.Queued;
      this._uploadQueue.push(q);
    });

    this.uploadNext();
  }

  public uploadQueueAndRemove() {

  }

  private uploadNext() {
    let queueObj = this._uploadQueue.shift();

    if (queueObj) {

      // create form data for file
      const form = new FormData();
      form.append('file', queueObj.file, queueObj.file.name);

      // upload file and report progress
      const req = new HttpRequest('POST', this.url, form, {
        reportProgress: true,
      });

      // upload file and report progress
      queueObj.request = this.http.request(req).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this._uploadProgress(queueObj, event);
          } else if (event instanceof HttpResponse) {
            this._uploadComplete(queueObj, event);
            this.uploadNext();
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            this._uploadFailed(queueObj, err);
          } else {
            // The backend returned an unsuccessful response code.
            this._uploadFailed(queueObj, err);
          }
        }
      );
    }
  }

  // private functions
  private _addToQueue(file: any) {

    if (!this.isAllowed(file.name))
      return;

    const queueObj = new FileQueueObject(file);

    // set the individual object events
    queueObj.upload = () => this._upload(queueObj);
    queueObj.remove = () => this._removeFromQueue(queueObj);
    queueObj.cancel = () => this._cancel(queueObj);

    // push to the queue
    this._files.push(queueObj);
    this._queue.next(this._files);
  }

  private _removeFromQueue(queueObj: FileQueueObject) {
    _.remove(this._files, queueObj);
  }

  private _upload(queueObj: FileQueueObject) {

    console.log("_upload");

    // create form data for file
    const form = new FormData();
    form.append('file', queueObj.file, queueObj.file.name);

    // upload file and report progress
    const req = new HttpRequest('POST', this.url, form, {
      reportProgress: true,
    });

    // upload file and report progress
    queueObj.request = this.http.request(req).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this._uploadProgress(queueObj, event);
        } else if (event instanceof HttpResponse) {
          this._uploadComplete(queueObj, event);
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          this._uploadFailed(queueObj, err);
        } else {
          // The backend returned an unsuccessful response code.
          this._uploadFailed(queueObj, err);
        }
      }
    );

    return queueObj;
  }

  private _cancel(queueObj: FileQueueObject) {
    // update the FileQueueObject as cancelled
    queueObj.request.unsubscribe();
    queueObj.progress = 0;
    queueObj.status = FileQueueStatus.Pending;
    this._queue.next(this._files);
  }

  private _uploadProgress(queueObj: FileQueueObject, event: any) {
    // update the FileQueueObject with the current progress
    const progress = Math.round(100 * event.loaded / event.total);
    queueObj.progress = progress;
    queueObj.status = FileQueueStatus.Progress;
    this._queue.next(this._files);
  }

  private _uploadComplete(queueObj: FileQueueObject, response: HttpResponse<any>) {
    // update the FileQueueObject as completed
    queueObj.progress = 100;
    queueObj.status = FileQueueStatus.Success;
    queueObj.response = response;
    this._queue.next(this._files);
    this.onCompleteItem(queueObj, response.body);
  }

  private _uploadFailed(queueObj: FileQueueObject, response: HttpErrorResponse) {
    // update the FileQueueObject as errored
    queueObj.progress = 0;
    queueObj.status = FileQueueStatus.Error;
    queueObj.response = response;
    this._queue.next(this._files);
  }

  private isAllowed(fileName: string): boolean {

    if (fileName) {

      let str = fileName.toLowerCase();
      for (let ft of allowedFileTypes) {
        if (str.endsWith(ft))
          return true;
      }
    }

    return false;
  }

}