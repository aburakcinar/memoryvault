import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Effect, Actions } from '@ngrx/effects';
import { HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';

import { of } from "rxjs";
import { switchMap, tap, take, map, catchError, flatMap, withLatestFrom } from 'rxjs/operators';

import * as fromAppActions from './app.actions';
import { AppState } from './app.reducer';
import { UploadFile, FileSystemFileEntry } from "ngx-file-drop";
import { SingleFileUploadService } from "../services/singlefileupload.service";
import { ListingService } from '../services/listing.service';

@Injectable({ providedIn: 'root' })
export class AppEffects {

    // TODO : buradan taşınacak
    public url: string = 'http://localhost:5000/api/v2/upload';

    @Effect()
    appEnqueueFile = this.actions$
        .ofType(fromAppActions.ENQUEUE_FILE)
        .pipe(
            map((action: fromAppActions.EnqueueFile) => action),
            withLatestFrom(this.store$.select('uploadFeature')),
            map(([action, state]) => {

                console.log("ENQUEUE_FILE", state);

                if (state.autoUpload && !state.isUploading) {
                    console.log("ENQUEUE_FILE", "start upload");
                    return new fromAppActions.StartUpload();
                }

                return { type: 'DUMMY_CMD=>ENQUEUE_FILE' };
            })
        );

    @Effect()
    appStartUpload = this.actions$
        .ofType(fromAppActions.START_UPLOAD)
        .pipe(
            map((action: fromAppActions.StartUpload) => action),
            withLatestFrom(this.store$.select('uploadFeature')),
            map(([action, state]) => {

                if (state.pendingUploads.length > 0)
                    return new fromAppActions.UploadNext();
                else
                    return { type: 'DUMMY_CMD=>START_UPLOAD' };
            })
        );

    @Effect()
    appUploadNext = this.actions$
        .ofType(fromAppActions.UPLOAD_NEXT)
        .pipe(
            map((action: fromAppActions.UploadNext) => action),
            withLatestFrom(this.store$.select('uploadFeature')),
            map(([action, state]) => {
                if (state.isUploading
                    && state.pendingUploads.length > 0) {
                    let item = state.uploadQueue.shift();

                    if (item) {
                        return new fromAppActions.UploadFile(item);
                    }
                }

                //return new fromAppActions.StopUpload();
                return new fromAppActions.AllUploadComplete();
            })
        );

    @Effect()
    appUploadFile = this.actions$
        .ofType(fromAppActions.UPLOAD_FILE)
        .pipe(
            //take(1),
            map((action: fromAppActions.UploadFile) => action.payload),
            map(payload => {
                console.log("UPLOAD_FILE","init...");
                this.sfus.upload(payload);
                console.log("UPLOAD_FILE","initiated.");
                return { type: 'DUMMY_CMD=>UPLOAD_FILE' }
            })
        );

    @Effect()
    appUploadComplete = this.actions$
        .ofType(fromAppActions.FILE_UPLOAD_COMPLETE)
        .pipe(
            map( action => {
                return new fromAppActions.UploadNext();
            })
        );

    @Effect()
    appSetAutoUpload = this.actions$
        .ofType(fromAppActions.SET_AUTO_UPLOAD)
        .pipe(
            map((action: fromAppActions.SetAutoUpload) => action),
            withLatestFrom(this.store$.select('uploadFeature')),
            map(([action, state]) => {

                console.log('SET_AUTO_UPLOAD', action, state);

                if (action.payload
                    && state.pendingUploads
                    && state.pendingUploads.length > 0
                    && !state.isUploading) {
                    return new fromAppActions.StartUpload();
                } else {
                    return { type: 'DUMMY_CMD=>SET_AUTO_UPLOAD' };
                }
            })
        );

    @Effect()
    appFetchPendingItems = this.actions$
        .ofType(fromAppActions.FETCH_PENDING_LIST)
        .pipe(
            tap(stt => console.log("Effect => FETCH_PENDING_LIST")),
            map((action: fromAppActions.FetchApprovedList) => action),
            switchMap((action: fromAppActions.FetchApprovedList) => {
                return this.listService
                  .fetchPending(action.payload.skip, action.payload.take )
                  .pipe(
                    map(lst => new fromAppActions.FetchListSucceed(lst)),
                    catchError(error => of(new fromAppActions.FetchListFailed({ 'error' : error} )))
                  );
              })
        );


    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private sfus: SingleFileUploadService,
        private http: HttpClient,
        private listService: ListingService) { }
}