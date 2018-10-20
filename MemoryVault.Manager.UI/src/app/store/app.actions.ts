import { Action } from '@ngrx/store';
import { FileQueueObject } from '../services/upload.service';
import { Guid } from "guid-typescript";

export const ENQUEUE_FILE = "[APP:CMD]=ENQUEUE_FILE";
export const UPLOAD_FILE = "[APP:CMD]=UPLOAD_FILE";
export const START_UPLOAD = "[APP:CMD]=START_UPLOAD";
export const STOP_UPLOAD = "[APP:CMD]=START_UPLOAD";
export const START_UPLOAD_NEXT = "[APP:CMD]=START_UPLOAD_NEXT";
export const SET_AUTO_UPLOAD = '[APP:CMD]=SET_AUTO_UPLOAD';
export const UPLOAD_NEXT = '[APP:CMD]=UPLOAD_NEXT';

export const FILE_ENQUEUED = '[APP:EVENT]=FILE_ENQUEUED'; 
export const FILE_UPLOADING = "[APP:EVENT]=FILE_UPLOADING";
export const FILE_UPLOAD_COMPLETE = "[APP:EVENT]=FILE_UPLOAD_COMPLETE";
export const FILE_UPLOAD_FAILED = "[APP:EVENT]=FILE_UPLOAD_FAILED";
export const ALL_UPLOAD_COMPLETE = "[APP:EVENT]=ALL_UPLOAD_COMPLETE";

export class EnqueueFile implements Action{
    readonly type = ENQUEUE_FILE;

    constructor(public payload: File){}
}

export class StartUpload implements Action{
    readonly type = START_UPLOAD;
}

export class StopUpload implements Action{
    readonly type = STOP_UPLOAD;
}

export class UploadNext implements Action{
    readonly type = UPLOAD_NEXT;
}

export class UploadFile implements Action{
    readonly type = UPLOAD_FILE;

    constructor(public payload: FileQueueObject){}
}

export class SetAutoUpload implements Action{
    readonly type = SET_AUTO_UPLOAD;

    constructor(public payload: boolean){}
}

export class FileUploading implements Action{
    readonly type = FILE_UPLOADING;

    constructor(public payload: {id: Guid, progressPercentage: number}){}
}

export class FileUploadComplete implements Action{
    readonly type = FILE_UPLOAD_COMPLETE;

    constructor(public payload: Guid){}
}

export class FileUploadFailed implements Action{
    readonly type = FILE_UPLOAD_FAILED;

    constructor(public payload:{ id: Guid, error: any } ){}
}

export class AllUploadComplete implements Action{
    readonly type = ALL_UPLOAD_COMPLETE;
}

export type AppActions =
    UploadNext
    | StartUpload 
    | StopUpload
    | UploadFile
    | SetAutoUpload
    | EnqueueFile
    | FileUploading
    | FileUploadComplete
    | FileUploadFailed
    | AllUploadComplete
    ;