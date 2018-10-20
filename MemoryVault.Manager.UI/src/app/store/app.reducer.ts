import * as AppActions from './app.actions';
import { UploadFile } from 'ngx-file-drop';
import { FileQueueObject, FileQueueStatus } from '../services/upload.service';

export const allowedFileTypes: string[] = ['.jpg', '.jpeg', '.png', '.mp4', '.avi', '.mkv', '.mov'];

export interface AppState {
    isUploading: boolean;
    autoUpload: boolean;
    pendingUploads: FileQueueObject[];
    uploadQueue: FileQueueObject[];
}

const initialState: AppState = {
    isUploading: false,
    autoUpload: false,
    pendingUploads: [],
    uploadQueue: []
};

export function appReducer(state = initialState, action: AppActions.AppActions) {
    console.log("appReducer => " + action.type);

    switch (action.type) {
        case (AppActions.ENQUEUE_FILE):
            if (isAllowed(action.payload.name)) {
                let fqo = new FileQueueObject(action.payload);
                state.pendingUploads.push(fqo);
                state.uploadQueue.push(fqo);
                return {
                    ...state,
                    pendingUploads: state.pendingUploads,
                    uploadQueue: state.uploadQueue
                }
            }
            else
                return state;

        case (AppActions.UPLOAD_FILE):
            const uidx = state.pendingUploads.map(p => p.id).indexOf(action.payload.id);
            action.payload.status = FileQueueStatus.Progress;

            return {
                ...state,
                pendingUploads: state.pendingUploads
            }

        case (AppActions.FILE_UPLOADING):
            const upidx = state.pendingUploads.map(p => p.id).indexOf(action.payload.id);
            let itemProg = state.pendingUploads[upidx];
            itemProg.status = FileQueueStatus.Progress;
            itemProg.progress = action.payload.progressPercentage;

            return {
                ...state,
                pendingUploads: state.pendingUploads
            }

        case (AppActions.FILE_UPLOAD_FAILED):
            const fidx = state.pendingUploads.map(p => p.id).indexOf(action.payload.id);
            let itemFail = state.pendingUploads[fidx];
            itemFail.status = FileQueueStatus.Error;

            return {
                ...state,
                pendingUploads: state.pendingUploads
            }

        case (AppActions.FILE_UPLOAD_COMPLETE):
            const idx = state.pendingUploads.map(p => p.id).indexOf(action.payload);
            return {
                ...state,
                pendingUploads: [
                    ...state.pendingUploads.slice(0, idx),
                    ...state.pendingUploads.slice(idx + 1)
                ]
            }

        case (AppActions.START_UPLOAD):
            return {
                ...state,
                isUploading: true
            }

        case (AppActions.ALL_UPLOAD_COMPLETE):
        case (AppActions.STOP_UPLOAD):
            return {
                ...state,
                isUploading: false
            }

        case (AppActions.SET_AUTO_UPLOAD):
            return {
                ...state,
                autoUpload: action.payload
            };



        default:
            return state;
    }
}


function isAllowed(fileName: string): boolean {

    if (fileName) {

        let str = fileName.toLowerCase();
        for (let ft of allowedFileTypes) {
            if (str.endsWith(ft))
                return true;
        }
    }

    return false;
}
