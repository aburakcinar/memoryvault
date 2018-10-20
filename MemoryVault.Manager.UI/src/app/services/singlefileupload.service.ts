import { Injectable } from "@angular/core";
import { FileQueueObject } from "./upload.service";
import { HttpClient, HttpRequest, HttpEventType, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.reducer";
import *  as fromAppActions from '../store/app.actions';


@Injectable({ providedIn: 'root' })
export class SingleFileUploadService {

    public url: string = 'http://localhost:5000/api/v2/upload';
    //subs: Subscription;

    constructor(
        private http: HttpClient,
        private store: Store<AppState>
    ) { }

    public upload(item: FileQueueObject) {

        // create form data for file
        const form = new FormData();
        form.append('file', item.file, item.file.name);

        // upload file and report progress
        const req = new HttpRequest('POST', this.url, form, {
            reportProgress: true,
        });

        // upload file and report progress
        //this.subs =
            this.http
                .request(req)
                .subscribe(
                    (event: any) => {
                        if (event.type === HttpEventType.UploadProgress) {
                            const progress = Math.round(100 * event.loaded / event.total);
                            this.store.dispatch(new fromAppActions.FileUploading({ id: item.id, progressPercentage: progress }));

                        } else if (event instanceof HttpResponse) {
                            this.store.dispatch(new fromAppActions.FileUploadComplete(item.id));
                        }
                    },
                    (err: HttpErrorResponse) => {
                        
                        this.store.dispatch(new fromAppActions.FileUploadFailed({ id: item.id, error: err }));
                    }
                );

    }
}