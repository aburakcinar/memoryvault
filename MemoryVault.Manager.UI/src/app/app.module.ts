import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UiModule } from './ui/ui.module';
import { GalleryComponent } from './gallery/gallery.component';
import { UploadCenterComponent } from './upload-center/upload-center.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { environment } from '../environments/environment';
import { SampleUploadComponent } from './sample-upload/sample-upload.component';
import { FileUploaderService } from './services/upload.service';
import { SideUploadComponent } from './components/side-upload/side-upload.component';
import { SingleFileUploadService } from './services/singlefileupload.service';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "upload", component: UploadCenterComponent },
  { path: "sample-upload", component: SampleUploadComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    NotFoundComponent,
    GalleryComponent,
    UploadCenterComponent,
    SampleUploadComponent,
    SideUploadComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FileDropModule,
    StoreModule.forRoot({uploadFeature: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ButtonsModule
  ],
  providers: [ FileUploaderService, SingleFileUploadService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
