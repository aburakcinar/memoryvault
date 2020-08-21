(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <router-outlet></router-outlet>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _upload_center_upload_center_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-center/upload-center.component */ "./src/app/upload-center/upload-center.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_app_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/app.effects */ "./src/app/store/app.effects.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sample_upload_sample_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sample-upload/sample-upload.component */ "./src/app/sample-upload/sample-upload.component.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _components_side_upload_side_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/side-upload/side-upload.component */ "./src/app/components/side-upload/side-upload.component.ts");
/* harmony import */ var _services_singlefileupload_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/singlefileupload.service */ "./src/app/services/singlefileupload.service.ts");
/* harmony import */ var _components_gallery_item_gallery_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/gallery-item/gallery-item.component */ "./src/app/components/gallery-item/gallery-item.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_pending_gallery_pending_gallery_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/pending-gallery/pending-gallery.component */ "./src/app/pages/pending-gallery/pending-gallery.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "not-found", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] },
    { path: "gallery", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"] },
    { path: "gallery/pending", component: _pages_pending_gallery_pending_gallery_component__WEBPACK_IMPORTED_MODULE_25__["PendingGalleryComponent"] },
    { path: "gallery/approved", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"] },
    { path: "upload", component: _upload_center_upload_center_component__WEBPACK_IMPORTED_MODULE_12__["UploadCenterComponent"] },
    { path: "sample-upload", component: _sample_upload_sample_upload_component__WEBPACK_IMPORTED_MODULE_19__["SampleUploadComponent"] },
    { path: "**", redirectTo: "not-found" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"],
                _upload_center_upload_center_component__WEBPACK_IMPORTED_MODULE_12__["UploadCenterComponent"],
                _sample_upload_sample_upload_component__WEBPACK_IMPORTED_MODULE_19__["SampleUploadComponent"],
                _components_side_upload_side_upload_component__WEBPACK_IMPORTED_MODULE_21__["SideUploadComponent"],
                _components_gallery_item_gallery_item_component__WEBPACK_IMPORTED_MODULE_23__["GalleryItemComponent"],
                _pages_pending_gallery_pending_gallery_component__WEBPACK_IMPORTED_MODULE_25__["PendingGalleryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_3__["FileDropModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot({ uploadFeature: _store_app_reducer__WEBPACK_IMPORTED_MODULE_15__["appReducer"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_17__["AppEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument() : [],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"]
            ],
            providers: [_services_upload_service__WEBPACK_IMPORTED_MODULE_20__["FileUploaderService"], _services_singlefileupload_service__WEBPACK_IMPORTED_MODULE_22__["SingleFileUploadService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/gallery-item/gallery-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/gallery-item/gallery-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-item {\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.card input[type='checkbox']{\r\n  position: absolute;\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.card-selected{\r\n  border: 1px solid red !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5LWl0ZW0vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbGxlcnktaXRlbS9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5LWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG59XHJcblxyXG4uY2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCdde1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1zZWxlY3RlZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/gallery-item/gallery-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/gallery-item/gallery-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-100\" [ngClass]=\"{'card-selected':model.isSelected}\">\r\n  <img class=\"card-img-top\" src=\"http://localhost:5000/api/thumbfetch/{{ model.id}}/M\" alt=\"Card image cap\">\r\n  <input type=\"checkbox\" [checked]=\"model.isSelected\" (change)=\"changeSelected()\"/>\r\n  <div class=\"card-body\">\r\n    <h6 class=\"card-title\">{{ model.fileName }}</h6>    \r\n    <p>{{ model.isSelected }}</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/gallery-item/gallery-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/gallery-item/gallery-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: GalleryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryItemComponent", function() { return GalleryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_appState_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/appState.service */ "./src/app/services/appState.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent(appActions) {
        this.appActions = appActions;
    }
    GalleryItemComponent.prototype.ngOnInit = function () {
    };
    GalleryItemComponent.prototype.changeSelected = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GalleryItemComponent.prototype, "model", void 0);
    GalleryItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-item',
            template: __webpack_require__(/*! ./gallery-item.component.html */ "./src/app/components/gallery-item/gallery-item.component.html"),
            styles: [__webpack_require__(/*! ./gallery-item.component.css */ "./src/app/components/gallery-item/gallery-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_appState_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"]])
    ], GalleryItemComponent);
    return GalleryItemComponent;
}());



/***/ }),

/***/ "./src/app/components/side-upload/side-upload.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/side-upload/side-upload.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS11cGxvYWQvc2lkZS11cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/side-upload/side-upload.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/side-upload/side-upload.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2 \">\r\n  <div class=\"col-12\">\r\n    <file-drop headertext=\"\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" customstyle=\"drop-zone-custom\"\r\n      class=\"drop-zone\" (onFileLeave)=\"fileLeave($event)\">\r\n      <span>Drop files here</span>\r\n    </file-drop>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <div class=\"col-12\">\r\n    <button type=\"button\" class=\"btn btn-primary w-100\" [(ngModel)]=\"autoUpload\" btnCheckbox (click)=\"handleAutoUpload()\"\r\n      btnCheckboxTrue=\"On\" btnCheckboxFalse=\"Off\">\r\n      Auto Upload : {{ autoUpload }}\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    Uploading :{{ isUploading }}\r\n  </div>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <div class=\"col-12\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-sm table-striped\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">%</th>\r\n            <th scope=\"col\">State</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"upload-name-style\">\r\n          <tr *ngFor=\"let item of queue\">\r\n            <td>{{ item?.file?.name }} \r\n              <br/>\r\n              {{ item?.file?.size/1024/1024 | number:'.2' }} MB\r\n            </td>\r\n            <td>{{ item.progress + ' %' }}</td>\r\n            <td>\r\n              <span *ngIf=\"item.isPending()\" class=\"badge badge-default\">Pending</span>\r\n              <span *ngIf=\"item.isSuccess()\" class=\"badge badge-success\">Uploaded</span>\r\n              <span *ngIf=\"item.inProgress()\" class=\"badge badge-warning\">Uploading</span>\r\n              <span *ngIf=\"item.isError()\" class=\"badge badge-danger\">Error</span>\r\n              <span *ngIf=\"item.inQueued()\" class=\"badge badge-secondary\">Queued</span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <a tooltip=\"Upload file\" (click)=\"item.upload()\" *ngIf=\"item.isUploadable()\">\r\n                <i class=\"fa fa-upload\"></i>\r\n              </a>\r\n              <a tooltip=\"Cancel upload\" (click)=\"item.cancel()\" *ngIf=\"item.inProgress()\">\r\n                <i class=\"fa fa-times-circle\"></i>\r\n              </a>\r\n              <a tooltip=\"Remove from queue\" (click)=\"item.remove()\" *ngIf=\"!item.inProgress()\">\r\n                <i class=\"fa fa-trash\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/side-upload/side-upload.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/side-upload/side-upload.component.ts ***!
  \*****************************************************************/
/*! exports provided: SideUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideUploadComponent", function() { return SideUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/app.actions */ "./src/app/store/app.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideUploadComponent = /** @class */ (function () {
    function SideUploadComponent(store) {
        this.store = store;
        this.autoUpload = 'Off';
        this.isUploading = false;
    }
    SideUploadComponent.prototype.ngOnInit = function () {
        //this.queue = this.uploadService.queue;
        var _this = this;
        this.stateSubs = this.store.select("uploadFeature")
            .subscribe(function (state) {
            _this.queue = state.pendingUploads;
            _this.isUploading = state.isUploading;
        });
    };
    SideUploadComponent.prototype.dropped = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            //   // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    //console.log("file entry");
                    // Here you can access the real file
                    // this.uploadService.addToQueue([file]);
                    _this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["EnqueueFile"](file));
                });
            }
        }
    };
    SideUploadComponent.prototype.fileOver = function (event) {
        //console.log(event);
    };
    SideUploadComponent.prototype.fileLeave = function (event) {
        //console.log(event);
    };
    SideUploadComponent.prototype.uploadQueue = function () {
        //this.uploadService.uploadByQueue();
    };
    SideUploadComponent.prototype.handleAutoUpload = function () {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["SetAutoUpload"](this.autoUpload == 'On'));
    };
    SideUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-upload',
            template: __webpack_require__(/*! ./side-upload.component.html */ "./src/app/components/side-upload/side-upload.component.html"),
            styles: [__webpack_require__(/*! ./side-upload.component.css */ "./src/app/components/side-upload/side-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SideUploadComponent);
    return SideUploadComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.side-upload-container{\r\n    border-left: 1px solid #333;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNpZGUtdXBsb2FkLWNvbnRhaW5lcntcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-9 col-lg-8 col-6\">\r\n    <h3>Gallery</h3>\r\n    <button class=\"btn btn-primary\" (click)=\"refresh()\">Refresh</button>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-3\" *ngFor=\"let item of (items | async)\">\r\n        <app-gallery-item [model]=\"item\" class=\"m-1\"></app-gallery-item>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-3 col-lg-4 col-6 side-upload-container\" style=\"height: 100vh\">\r\n    <app-side-upload></app-side-upload>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(http) {
        this.http = http;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.refresh = function () {
        this.items = this.http.get("http://localhost:5000/api/gallery/20");
        console.log("refreshed");
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pending-gallery/pending-gallery.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/pending-gallery/pending-gallery.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVuZGluZy1nYWxsZXJ5L3BlbmRpbmctZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7c0RBQ2tEO0lBQ2xELGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZW5kaW5nLWdhbGxlcnkvcGVuZGluZy1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pending-gallery/pending-gallery.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/pending-gallery/pending-gallery.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-9 col-lg-8 col-6\">\r\n        <mat-toolbar color=\"secondary\">\r\n            <span></span>\r\n\r\n            <!-- This fills the remaining space of the current row -->\r\n            <span class=\"example-fill-remaining-space\"></span>\r\n\r\n            <span>\r\n                <button mat-icon-button>\r\n                    <mat-icon aria-label=\"Approve\">\r\n                      done</mat-icon>\r\n                </button>\r\n            </span>\r\n        </mat-toolbar>\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-3\" *ngFor=\"let item of (contentAsync | async)\">\r\n                <app-gallery-item [model]=\"item\" class=\"m-1\"></app-gallery-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-4 col-6 side-upload-container\" style=\"height: 100vh\">\r\n        <app-side-upload></app-side-upload>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/pending-gallery/pending-gallery.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/pending-gallery/pending-gallery.component.ts ***!
  \********************************************************************/
/*! exports provided: PendingGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingGalleryComponent", function() { return PendingGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_appState_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/appState.service */ "./src/app/services/appState.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendingGalleryComponent = /** @class */ (function () {
    function PendingGalleryComponent(store, appActions) {
        this.store = store;
        this.appActions = appActions;
    }
    PendingGalleryComponent.prototype.ngOnInit = function () {
        this.contentAsync = this.store.select("uploadFeature").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (m) { return m.pendingList; }));
        this.appActions.fetchPendingList(0, 50);
        var items = this.store.select("uploadFeature").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (m) { return m.pendingList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (l) { return l.forEach(function (p) { return p.isSelected; }); }));
        items.subscribe(function (s) { return console.log(s); });
    };
    PendingGalleryComponent.prototype.refresh = function () {
        //this.store.dispatch(new fromAppAction.FetchPendingList({ 'skip': 0, 'take': 50 }));
        this.appActions.fetchPendingList(0, 50);
    };
    PendingGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-gallery',
            template: __webpack_require__(/*! ./pending-gallery.component.html */ "./src/app/pages/pending-gallery/pending-gallery.component.html"),
            styles: [__webpack_require__(/*! ./pending-gallery.component.css */ "./src/app/pages/pending-gallery/pending-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services_appState_service__WEBPACK_IMPORTED_MODULE_3__["AppStateService"]])
    ], PendingGalleryComponent);
    return PendingGalleryComponent;
}());



/***/ }),

/***/ "./src/app/sample-upload/sample-upload.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sample-upload/sample-upload.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.drop-zone{\r\n    margin: auto;\r\n    height: 100px;\r\n    width: 500px;\r\n}\r\n\r\n.content {\r\n    color: #0782d0;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlLXVwbG9hZC9zYW1wbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFHZCxjQUFjO0lBR2Qsd0JBQXdCO0lBR3hCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS11cGxvYWQvc2FtcGxlLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kcm9wLXpvbmV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBjb2xvcjogIzA3ODJkMDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sample-upload/sample-upload.component.html":
/*!************************************************************!*\
  !*** ./src/app/sample-upload/sample-upload.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row pt-5\">\r\n    <file-drop headertext=\"\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" class=\"drop-zone\"\r\n      (onFileLeave)=\"fileLeave($event)\">\r\n      <span>Drop files here</span>\r\n    </file-drop>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"upload-table\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"upload-name-style\">\r\n          <tr *ngFor=\"let item of files; let i=index\">\r\n            <td><strong>{{ item.relativePath }}</strong></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sample-upload/sample-upload.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sample-upload/sample-upload.component.ts ***!
  \**********************************************************/
/*! exports provided: SampleUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleUploadComponent", function() { return SampleUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SampleUploadComponent = /** @class */ (function () {
    function SampleUploadComponent(http) {
        this.http = http;
        this.files = [];
    }
    SampleUploadComponent.prototype.ngOnInit = function () {
    };
    SampleUploadComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append('logo', file, droppedFile.relativePath);
                    // // Headers
                    // const headers = new HttpHeaders({
                    //   'security-token': 'mytoken'
                    // })
                    _this.http.post('http://localhost:5000/api/v1/upload', formData, { responseType: 'blob' })
                        .subscribe(function (data) {
                        // Sanitized logo returned from backend
                        console.log("Upload result => ");
                        console.log(data);
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            _loop_1(droppedFile);
        }
    };
    SampleUploadComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    SampleUploadComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    SampleUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sample-upload',
            template: __webpack_require__(/*! ./sample-upload.component.html */ "./src/app/sample-upload/sample-upload.component.html"),
            styles: [__webpack_require__(/*! ./sample-upload.component.css */ "./src/app/sample-upload/sample-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SampleUploadComponent);
    return SampleUploadComponent;
}());



/***/ }),

/***/ "./src/app/services/appState.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/appState.service.ts ***!
  \**********************************************/
/*! exports provided: AppStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStateService", function() { return AppStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/app.actions */ "./src/app/store/app.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppStateService = /** @class */ (function () {
    function AppStateService(store) {
        this.store = store;
    }
    AppStateService.prototype.fetchApprovedList = function (skip, take) {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["FetchApprovedList"]({ 'skip': skip, 'take': take }));
    };
    AppStateService.prototype.fetchPendingList = function (skip, take) {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["FetchPendingList"]({ 'skip': skip, 'take': take }));
    };
    AppStateService.prototype.changeItemSelectedState = function (id) {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["ChangeItemSelectedState"](id));
    };
    AppStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppStateService);
    return AppStateService;
}());



/***/ }),

/***/ "./src/app/services/listing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/listing.service.ts ***!
  \*********************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
        this.url = 'http://localhost:5000/api/v2/gallery';
    }
    ListingService.prototype.fetchPending = function (skip, take) {
        if (skip === undefined)
            skip = 0;
        if (take === undefined)
            take = 50;
        return this.http.get(this.url + "/pending?skip=" + skip + "&take=" + take);
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/services/singlefileupload.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/singlefileupload.service.ts ***!
  \******************************************************/
/*! exports provided: SingleFileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFileUploadService", function() { return SingleFileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/app.actions */ "./src/app/store/app.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleFileUploadService = /** @class */ (function () {
    //subs: Subscription;
    function SingleFileUploadService(http, store) {
        this.http = http;
        this.store = store;
        this.url = 'http://localhost:5000/api/v2/upload';
    }
    SingleFileUploadService.prototype.upload = function (item) {
        var _this = this;
        // create form data for file
        var form = new FormData();
        form.append('file', item.file, item.file.name);
        // upload file and report progress
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.url, form, {
            reportProgress: true,
        });
        // upload file and report progress
        //this.subs =
        this.http
            .request(req)
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                var progress = Math.round(100 * event.loaded / event.total);
                _this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_3__["FileUploading"]({ id: item.id, progressPercentage: progress }));
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_3__["FileUploadComplete"](item.id));
            }
        }, function (err) {
            _this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_3__["FileUploadFailed"]({ id: item.id, error: err }));
        });
    };
    SingleFileUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SingleFileUploadService);
    return SingleFileUploadService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: FileQueueStatus, FileQueueObject, allowedFileTypes, FileUploaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileQueueStatus", function() { return FileQueueStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileQueueObject", function() { return FileQueueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedFileTypes", function() { return allowedFileTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderService", function() { return FileUploaderService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileQueueStatus;
(function (FileQueueStatus) {
    FileQueueStatus[FileQueueStatus["Pending"] = 0] = "Pending";
    FileQueueStatus[FileQueueStatus["Queued"] = 1] = "Queued";
    FileQueueStatus[FileQueueStatus["Success"] = 2] = "Success";
    FileQueueStatus[FileQueueStatus["Error"] = 3] = "Error";
    FileQueueStatus[FileQueueStatus["Progress"] = 4] = "Progress";
})(FileQueueStatus || (FileQueueStatus = {}));
var FileQueueObject = /** @class */ (function () {
    function FileQueueObject(file) {
        var _this = this;
        this.status = FileQueueStatus.Pending;
        this.progress = 0;
        this.request = null;
        this.response = null;
        // actions
        this.upload = function () { };
        this.cancel = function () { };
        this.remove = function () { };
        // statuses
        this.isPending = function () { return _this.status === FileQueueStatus.Pending; };
        this.isSuccess = function () { return _this.status === FileQueueStatus.Success; };
        this.isError = function () { return _this.status === FileQueueStatus.Error; };
        this.inProgress = function () { return _this.status === FileQueueStatus.Progress; };
        this.inQueued = function () { return _this.status === FileQueueStatus.Queued; };
        this.isUploadable = function () { return _this.status === FileQueueStatus.Pending || _this.status === FileQueueStatus.Error; };
        this.id = guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].create();
        this.file = file;
    }
    return FileQueueObject;
}());

var allowedFileTypes = ['.jpg', '.jpeg', '.png', '.mp4', '.avi', '.mkv', '.mov'];
// tslint:disable-next-line:max-classes-per-file
var FileUploaderService = /** @class */ (function () {
    function FileUploaderService(http) {
        this.http = http;
        this.url = 'http://localhost:5000/api/v2/upload';
        this._files = [];
        this._uploadQueue = [];
        this._queue = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._files);
    }
    Object.defineProperty(FileUploaderService.prototype, "queue", {
        // the queue
        get: function () {
            return this._queue.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // public events
    FileUploaderService.prototype.onCompleteItem = function (queueObj, response) {
        return { queueObj: queueObj, response: response };
    };
    // public functions
    FileUploaderService.prototype.addToQueue = function (data) {
        var _this = this;
        // add file to the queue
        lodash__WEBPACK_IMPORTED_MODULE_0__["each"](data, function (file) { return _this._addToQueue(file); });
    };
    FileUploaderService.prototype.clearQueue = function () {
        // clear the queue
        this._files = [];
        this._queue.next(this._files);
    };
    FileUploaderService.prototype.uploadAll = function () {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_0__["each"](this._files, function (queueObj) {
            //console.log("call _upload");
            if (queueObj.isUploadable()) {
                _this._upload(queueObj);
            }
        });
    };
    FileUploaderService.prototype.uploadByQueue = function () {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_0__["each"](this._files, function (q) {
            q.status = FileQueueStatus.Queued;
            _this._uploadQueue.push(q);
        });
        this.uploadNext();
    };
    FileUploaderService.prototype.uploadQueueAndRemove = function () {
    };
    FileUploaderService.prototype.uploadNext = function () {
        var _this = this;
        var queueObj = this._uploadQueue.shift();
        if (queueObj) {
            // create form data for file
            var form = new FormData();
            form.append('file', queueObj.file, queueObj.file.name);
            // upload file and report progress
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', this.url, form, {
                reportProgress: true,
            });
            // upload file and report progress
            queueObj.request = this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                    _this._uploadProgress(queueObj, event);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                    _this._uploadComplete(queueObj, event);
                    _this.uploadNext();
                }
            }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    _this._uploadFailed(queueObj, err);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    _this._uploadFailed(queueObj, err);
                }
            });
        }
    };
    // private functions
    FileUploaderService.prototype._addToQueue = function (file) {
        var _this = this;
        if (!this.isAllowed(file.name))
            return;
        var queueObj = new FileQueueObject(file);
        // set the individual object events
        queueObj.upload = function () { return _this._upload(queueObj); };
        queueObj.remove = function () { return _this._removeFromQueue(queueObj); };
        queueObj.cancel = function () { return _this._cancel(queueObj); };
        // push to the queue
        this._files.push(queueObj);
        this._queue.next(this._files);
    };
    FileUploaderService.prototype._removeFromQueue = function (queueObj) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["remove"](this._files, queueObj);
    };
    FileUploaderService.prototype._upload = function (queueObj) {
        var _this = this;
        console.log("_upload");
        // create form data for file
        var form = new FormData();
        form.append('file', queueObj.file, queueObj.file.name);
        // upload file and report progress
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', this.url, form, {
            reportProgress: true,
        });
        // upload file and report progress
        queueObj.request = this.http.request(req).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                _this._uploadProgress(queueObj, event);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                _this._uploadComplete(queueObj, event);
            }
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                _this._uploadFailed(queueObj, err);
            }
            else {
                // The backend returned an unsuccessful response code.
                _this._uploadFailed(queueObj, err);
            }
        });
        return queueObj;
    };
    FileUploaderService.prototype._cancel = function (queueObj) {
        // update the FileQueueObject as cancelled
        queueObj.request.unsubscribe();
        queueObj.progress = 0;
        queueObj.status = FileQueueStatus.Pending;
        this._queue.next(this._files);
    };
    FileUploaderService.prototype._uploadProgress = function (queueObj, event) {
        // update the FileQueueObject with the current progress
        var progress = Math.round(100 * event.loaded / event.total);
        queueObj.progress = progress;
        queueObj.status = FileQueueStatus.Progress;
        this._queue.next(this._files);
    };
    FileUploaderService.prototype._uploadComplete = function (queueObj, response) {
        // update the FileQueueObject as completed
        queueObj.progress = 100;
        queueObj.status = FileQueueStatus.Success;
        queueObj.response = response;
        this._queue.next(this._files);
        this.onCompleteItem(queueObj, response.body);
    };
    FileUploaderService.prototype._uploadFailed = function (queueObj, response) {
        // update the FileQueueObject as errored
        queueObj.progress = 0;
        queueObj.status = FileQueueStatus.Error;
        queueObj.response = response;
        this._queue.next(this._files);
    };
    FileUploaderService.prototype.isAllowed = function (fileName) {
        if (fileName) {
            var str = fileName.toLowerCase();
            for (var _i = 0, allowedFileTypes_1 = allowedFileTypes; _i < allowedFileTypes_1.length; _i++) {
                var ft = allowedFileTypes_1[_i];
                if (str.endsWith(ft))
                    return true;
            }
        }
        return false;
    };
    FileUploaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileUploaderService);
    return FileUploaderService;
}());



/***/ }),

/***/ "./src/app/store/app.actions.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.actions.ts ***!
  \**************************************/
/*! exports provided: ENQUEUE_FILE, UPLOAD_FILE, START_UPLOAD, STOP_UPLOAD, START_UPLOAD_NEXT, SET_AUTO_UPLOAD, UPLOAD_NEXT, FETCH_PENDING_LIST, FETCH_APPROVED_LIST, CHANGE_ITEM_SELECTED_STATE, FILE_ENQUEUED, FILE_UPLOADING, FILE_UPLOAD_COMPLETE, FILE_UPLOAD_FAILED, ALL_UPLOAD_COMPLETE, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE, EnqueueFile, StartUpload, StopUpload, UploadNext, UploadFile, SetAutoUpload, FetchPendingList, FetchApprovedList, ChangeItemSelectedState, FileUploading, FileUploadComplete, FileUploadFailed, AllUploadComplete, FetchListSucceed, FetchListFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENQUEUE_FILE", function() { return ENQUEUE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FILE", function() { return UPLOAD_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_UPLOAD", function() { return START_UPLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_UPLOAD", function() { return STOP_UPLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_UPLOAD_NEXT", function() { return START_UPLOAD_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTO_UPLOAD", function() { return SET_AUTO_UPLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_NEXT", function() { return UPLOAD_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PENDING_LIST", function() { return FETCH_PENDING_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_APPROVED_LIST", function() { return FETCH_APPROVED_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ITEM_SELECTED_STATE", function() { return CHANGE_ITEM_SELECTED_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_ENQUEUED", function() { return FILE_ENQUEUED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_UPLOADING", function() { return FILE_UPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_UPLOAD_COMPLETE", function() { return FILE_UPLOAD_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_UPLOAD_FAILED", function() { return FILE_UPLOAD_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_UPLOAD_COMPLETE", function() { return ALL_UPLOAD_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LIST_SUCCESS", function() { return FETCH_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LIST_FAILURE", function() { return FETCH_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnqueueFile", function() { return EnqueueFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartUpload", function() { return StartUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopUpload", function() { return StopUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadNext", function() { return UploadNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFile", function() { return UploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAutoUpload", function() { return SetAutoUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPendingList", function() { return FetchPendingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchApprovedList", function() { return FetchApprovedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeItemSelectedState", function() { return ChangeItemSelectedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploading", function() { return FileUploading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComplete", function() { return FileUploadComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadFailed", function() { return FileUploadFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUploadComplete", function() { return AllUploadComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchListSucceed", function() { return FetchListSucceed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchListFailed", function() { return FetchListFailed; });
var ENQUEUE_FILE = "[APP:CMD]=ENQUEUE_FILE";
var UPLOAD_FILE = "[APP:CMD]=UPLOAD_FILE";
var START_UPLOAD = "[APP:CMD]=START_UPLOAD";
var STOP_UPLOAD = "[APP:CMD]=START_UPLOAD";
var START_UPLOAD_NEXT = "[APP:CMD]=START_UPLOAD_NEXT";
var SET_AUTO_UPLOAD = '[APP:CMD]=SET_AUTO_UPLOAD';
var UPLOAD_NEXT = '[APP:CMD]=UPLOAD_NEXT';
var FETCH_PENDING_LIST = '[APP:CMD]=FETCH_PENDING_LIST';
var FETCH_APPROVED_LIST = '[APP:CMD]=FETCH_APPROVED_LIST';
var CHANGE_ITEM_SELECTED_STATE = '[APP:CMD]=CHANGE_ITEM_SELECTED_STATE';
var FILE_ENQUEUED = '[APP:EVENT]=FILE_ENQUEUED';
var FILE_UPLOADING = "[APP:EVENT]=FILE_UPLOADING";
var FILE_UPLOAD_COMPLETE = "[APP:EVENT]=FILE_UPLOAD_COMPLETE";
var FILE_UPLOAD_FAILED = "[APP:EVENT]=FILE_UPLOAD_FAILED";
var ALL_UPLOAD_COMPLETE = "[APP:EVENT]=ALL_UPLOAD_COMPLETE";
var FETCH_LIST_SUCCESS = '[APP:EVENT]=FETCH_LIST_SUCCESS';
var FETCH_LIST_FAILURE = '[APP:EVENT]=FETCH_LIST_FAILURE';
var EnqueueFile = /** @class */ (function () {
    function EnqueueFile(payload) {
        this.payload = payload;
        this.type = ENQUEUE_FILE;
    }
    return EnqueueFile;
}());

var StartUpload = /** @class */ (function () {
    function StartUpload() {
        this.type = START_UPLOAD;
    }
    return StartUpload;
}());

var StopUpload = /** @class */ (function () {
    function StopUpload() {
        this.type = STOP_UPLOAD;
    }
    return StopUpload;
}());

var UploadNext = /** @class */ (function () {
    function UploadNext() {
        this.type = UPLOAD_NEXT;
    }
    return UploadNext;
}());

var UploadFile = /** @class */ (function () {
    function UploadFile(payload) {
        this.payload = payload;
        this.type = UPLOAD_FILE;
    }
    return UploadFile;
}());

var SetAutoUpload = /** @class */ (function () {
    function SetAutoUpload(payload) {
        this.payload = payload;
        this.type = SET_AUTO_UPLOAD;
    }
    return SetAutoUpload;
}());

var FetchPendingList = /** @class */ (function () {
    function FetchPendingList(payload) {
        this.payload = payload;
        this.type = FETCH_PENDING_LIST;
    }
    return FetchPendingList;
}());

var FetchApprovedList = /** @class */ (function () {
    function FetchApprovedList(payload) {
        this.payload = payload;
        this.type = FETCH_APPROVED_LIST;
    }
    return FetchApprovedList;
}());

var ChangeItemSelectedState = /** @class */ (function () {
    function ChangeItemSelectedState(payload) {
        this.payload = payload;
        this.type = CHANGE_ITEM_SELECTED_STATE;
    }
    return ChangeItemSelectedState;
}());

var FileUploading = /** @class */ (function () {
    function FileUploading(payload) {
        this.payload = payload;
        this.type = FILE_UPLOADING;
    }
    return FileUploading;
}());

var FileUploadComplete = /** @class */ (function () {
    function FileUploadComplete(payload) {
        this.payload = payload;
        this.type = FILE_UPLOAD_COMPLETE;
    }
    return FileUploadComplete;
}());

var FileUploadFailed = /** @class */ (function () {
    function FileUploadFailed(payload) {
        this.payload = payload;
        this.type = FILE_UPLOAD_FAILED;
    }
    return FileUploadFailed;
}());

var AllUploadComplete = /** @class */ (function () {
    function AllUploadComplete() {
        this.type = ALL_UPLOAD_COMPLETE;
    }
    return AllUploadComplete;
}());

var FetchListSucceed = /** @class */ (function () {
    function FetchListSucceed(payload) {
        this.payload = payload;
        this.type = FETCH_LIST_SUCCESS;
    }
    return FetchListSucceed;
}());

var FetchListFailed = /** @class */ (function () {
    function FetchListFailed(payload) {
        this.payload = payload;
        this.type = FETCH_LIST_FAILURE;
    }
    return FetchListFailed;
}());



/***/ }),

/***/ "./src/app/store/app.effects.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _services_singlefileupload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/singlefileupload.service */ "./src/app/services/singlefileupload.service.ts");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/listing.service */ "./src/app/services/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppEffects = /** @class */ (function () {
    function AppEffects(actions$, store$, sfus, http, listService) {
        var _this = this;
        this.actions$ = actions$;
        this.store$ = store$;
        this.sfus = sfus;
        this.http = http;
        this.listService = listService;
        // TODO : buradan taşınacak
        this.url = 'http://localhost:5000/api/v2/upload';
        this.appEnqueueFile = this.actions$
            .ofType(_app_actions__WEBPACK_IMPORTED_MODULE_6__["ENQUEUE_FILE"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store$.select('uploadFeature')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            console.log("ENQUEUE_FILE", state);
            if (state.autoUpload && !state.isUploading) {
                console.log("ENQUEUE_FILE", "start upload");
                return new _app_actions__WEBPACK_IMPORTED_MODULE_6__["StartUpload"]();
            }
            return { type: 'DUMMY_CMD=>ENQUEUE_FILE' };
        }));
        this.appStartUpload = this.actions$
            .ofType(_app_actions__WEBPACK_IMPORTED_MODULE_6__["START_UPLOAD"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store$.select('uploadFeature')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            if (state.pendingUploads.length > 0)
                return new _app_actions__WEBPACK_IMPORTED_MODULE_6__["UploadNext"]();
            else
                return { type: 'DUMMY_CMD=>START_UPLOAD' };
        }));
        this.appUploadNext = this.actions$
            .ofType(_app_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_NEXT"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store$.select('uploadFeature')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            if (state.isUploading
                && state.pendingUploads.length > 0) {
                var item = state.uploadQueue.shift();
                if (item) {
                    return new _app_actions__WEBPACK_IMPORTED_MODULE_6__["UploadFile"](item);
                }
            }
            //return new fromAppActions.StopUpload();
            return new _app_actions__WEBPACK_IMPORTED_MODULE_6__["AllUploadComplete"]();
        }));
        this.appUploadFile = this.actions$
            .ofType(_app_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_FILE"])
            .pipe(
        //take(1),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (payload) {
            console.log("UPLOAD_FILE", "init...");
            _this.sfus.upload(payload);
            console.log("UPLOAD_FILE", "initiated.");
            return { type: 'DUMMY_CMD=>UPLOAD_FILE' };
        }));
        this.appUploadComplete = this.actions$
            .ofType(_app_actions__WEBPACK_IMPORTED_MODULE_6__["FILE_UPLOAD_COMPLETE"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return new _app_actions__WEBPACK_IMPORTED_MODULE_6__["UploadNext"]();
        }));
        this.appSetAutoUpload = this.actions$
            .ofType(_app_actions__WEBPACK_IMPORTED_MODULE_6__["SET_AUTO_UPLOAD"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store$.select('uploadFeature')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            console.log('SET_AUTO_UPLOAD', action, state);
            if (action.payload
                && state.pendingUploads
                && state.pendingUploads.length > 0
                && !state.isUploading) {
                return new _app_actions__WEBPACK_IMPORTED_MODULE_6__["StartUpload"]();
            }
            else {
                return { type: 'DUMMY_CMD=>SET_AUTO_UPLOAD' };
            }
        }));
        this.appFetchPendingItems = this.actions$
            .ofType(_app_actions__WEBPACK_IMPORTED_MODULE_6__["FETCH_PENDING_LIST"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (stt) { return console.log("Effect => FETCH_PENDING_LIST"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (action) {
            return _this.listService
                .fetchPending(action.payload.skip, action.payload.take)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lst) { return new _app_actions__WEBPACK_IMPORTED_MODULE_6__["FetchListSucceed"](lst); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_6__["FetchListFailed"]({ 'error': error })); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "appEnqueueFile", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "appStartUpload", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "appUploadNext", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "appUploadFile", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "appUploadComplete", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "appSetAutoUpload", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "appFetchPendingItems", void 0);
    AppEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_singlefileupload_service__WEBPACK_IMPORTED_MODULE_7__["SingleFileUploadService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_listing_service__WEBPACK_IMPORTED_MODULE_8__["ListingService"]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: allowedFileTypes, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedFileTypes", function() { return allowedFileTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/upload.service */ "./src/app/services/upload.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var allowedFileTypes = ['.jpg', '.jpeg', '.png', '.mp4', '.avi', '.mkv', '.mov'];
var initialState = {
    isUploading: false,
    autoUpload: false,
    pendingUploads: [],
    uploadQueue: [],
    lastOperation: "",
    pendingList: []
};
function appReducer(state, action) {
    if (state === void 0) { state = initialState; }
    console.log("appReducer => " + action.type);
    switch (action.type) {
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["ENQUEUE_FILE"]):
            if (isAllowed(action.payload.name)) {
                var fqo = new _services_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileQueueObject"](action.payload);
                state.pendingUploads.push(fqo);
                state.uploadQueue.push(fqo);
                return __assign({}, state, { pendingUploads: state.pendingUploads, uploadQueue: state.uploadQueue });
            }
            else
                return state;
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["UPLOAD_FILE"]):
            var uidx = state.pendingUploads.map(function (p) { return p.id; }).indexOf(action.payload.id);
            action.payload.status = _services_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileQueueStatus"].Progress;
            return __assign({}, state, { pendingUploads: state.pendingUploads });
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILE_UPLOADING"]):
            var upidx = state.pendingUploads.map(function (p) { return p.id; }).indexOf(action.payload.id);
            var itemProg = state.pendingUploads[upidx];
            itemProg.status = _services_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileQueueStatus"].Progress;
            itemProg.progress = action.payload.progressPercentage;
            return __assign({}, state, { pendingUploads: state.pendingUploads });
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILE_UPLOAD_FAILED"]):
            var fidx = state.pendingUploads.map(function (p) { return p.id; }).indexOf(action.payload.id);
            var itemFail = state.pendingUploads[fidx];
            itemFail.status = _services_upload_service__WEBPACK_IMPORTED_MODULE_1__["FileQueueStatus"].Error;
            return __assign({}, state, { pendingUploads: state.pendingUploads });
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILE_UPLOAD_COMPLETE"]):
            var idx = state.pendingUploads.map(function (p) { return p.id; }).indexOf(action.payload);
            return __assign({}, state, { pendingUploads: state.pendingUploads.slice(0, idx).concat(state.pendingUploads.slice(idx + 1)) });
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["START_UPLOAD"]):
            return __assign({}, state, { isUploading: true });
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["ALL_UPLOAD_COMPLETE"]):
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["STOP_UPLOAD"]):
            return __assign({}, state, { isUploading: false });
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_AUTO_UPLOAD"]):
            return __assign({}, state, { autoUpload: action.payload });
        case (_app_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_LIST_SUCCESS"]):
            return __assign({}, state, { lastOperation: action.type, pendingList: action.payload });
        default:
            return __assign({}, state, { lastOperation: action.type });
            return state;
    }
}
function isAllowed(fileName) {
    if (fileName) {
        var str = fileName.toLowerCase();
        for (var _i = 0, allowedFileTypes_1 = allowedFileTypes; _i < allowedFileTypes_1.length; _i++) {
            var ft = allowedFileTypes_1[_i];
            if (str.endsWith(ft))
                return true;
        }
    }
    return false;
}


/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\r\n  color: hotpink;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1oZWFydCB7XHJcbiAgY29sb3I6IGhvdHBpbms7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\r\n  <div class=\"navbar-expand m-auto navbar-text\">\r\n    Maarifa <i class=\"fa fa-heart\"></i> by <a href=\"https://maarifa.com.tr\">Maarifa</a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggleMenuStyle {\r\n    display: block;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJO3NEQUNrRDtJQUNsRCxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZU1lbnVTdHlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n    <span>Memory Vault</span>\r\n\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n\r\n    <span>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <span>Galleries</span>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"navigate('/gallery/pending')\">\r\n                <mat-icon>dialpad</mat-icon>\r\n                <span>Pending</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"navigate('/gallery/approved')\">\r\n                <mat-icon>voicemail</mat-icon>\r\n                <span>Approved</span>\r\n            </button>\r\n        </mat-menu>\r\n    </span>\r\n    <span class=\"p-1\"></span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, modal) {
        this.router = router;
        this.modal = modal;
        this.toggleMenu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onToggleMenu = function () {
        if (this.toggleMenu === true) {
            this.toggleMenu = false;
        }
        else {
            this.toggleMenu = true;
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    HeaderComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.side-menu{\r\n    width:250px;\r\n}\r\n\r\n.content,\r\n.side-menu{\r\n    display: table;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnNpZGUtbWVudXtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG59XHJcblxyXG4uY29udGVudCxcclxuLnNpZGUtbWVudXtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/upload-center/upload-center.component.css":
/*!***********************************************************!*\
  !*** ./src/app/upload-center/upload-center.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.drop-zone{\r\n    margin: auto;\r\n    height: 150px;\r\n    width: 600px;\r\n    border: 4px dashed #ccc;\r\n}\r\n\r\n.content {\r\n    color: #0782d0;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWNlbnRlci91cGxvYWQtY2VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFHZCxjQUFjO0lBR2Qsd0JBQXdCO0lBR3hCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1jZW50ZXIvdXBsb2FkLWNlbnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kcm9wLXpvbmV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggZGFzaGVkICNjY2M7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGNvbG9yOiAjMDc4MmQwO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/upload-center/upload-center.component.html":
/*!************************************************************!*\
  !*** ./src/app/upload-center/upload-center.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row pt-5\">\r\n    <file-drop headertext=\"\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" customstyle=\"border:0px;\"\r\n      class=\"drop-zone\" (onFileLeave)=\"fileLeave($event)\">\r\n      <span>Drop files here</span>\r\n    </file-drop>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"upload-table\">\r\n      <table class=\"table table-sm table-striped\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Size</th>\r\n            <th scope=\"col\">%</th>\r\n            <th scope=\"col\">State</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of queue | async\">\r\n            <td><strong>{{ item?.file?.name }}</strong></td>\r\n            <td>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n            <td>{{ item.progress + ' %' }}</td>\r\n            <td>\r\n              <span *ngIf=\"item.isPending()\" class=\"badge badge-default\">Pending</span>\r\n              <span *ngIf=\"item.isSuccess()\" class=\"badge badge-success\">Uploaded</span>\r\n              <span *ngIf=\"item.inProgress()\" class=\"badge badge-warning\">Uploading</span>\r\n              <span *ngIf=\"item.isError()\" class=\"badge badge-danger\">Error</span>\r\n              <span *ngIf=\"item.inQueued()\" class=\"badge badge-secondary\">Queued</span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <a tooltip=\"Upload file\" (click)=\"item.upload()\" *ngIf=\"item.isUploadable()\">\r\n                <i class=\"fa fa-upload\"></i>\r\n              </a>\r\n              <a tooltip=\"Cancel upload\" (click)=\"item.cancel()\" *ngIf=\"item.inProgress()\">\r\n                <i class=\"fa fa-times-circle\"></i>\r\n              </a>\r\n              <a tooltip=\"Remove from queue\" (click)=\"item.remove()\" *ngIf=\"!item.inProgress()\">\r\n                <i class=\"fa fa-trash\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" (click)=\"uploadQueue()\">Upload By Queue</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/upload-center/upload-center.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/upload-center/upload-center.component.ts ***!
  \**********************************************************/
/*! exports provided: UploadCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCenterComponent", function() { return UploadCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/upload.service */ "./src/app/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadCenterComponent = /** @class */ (function () {
    function UploadCenterComponent(store, uploadService) {
        this.store = store;
        this.uploadService = uploadService;
        this.files = [];
    }
    UploadCenterComponent.prototype.ngOnInit = function () {
        this.queue = this.uploadService.queue;
    };
    UploadCenterComponent.prototype.dropped = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    //console.log("file entry");
                    // Here you can access the real file
                    _this.uploadService.addToQueue([file]);
                });
            }
            // else {
            //   // It was a directory (empty directories are added, otherwise only files)
            //   const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
            //   console.log(droppedFile.relativePath, fileEntry);
            // }
        }
    };
    UploadCenterComponent.prototype.fileOver = function (event) {
        //console.log(event);
    };
    UploadCenterComponent.prototype.fileLeave = function (event) {
        //console.log(event);
    };
    UploadCenterComponent.prototype.uploadQueue = function () {
        this.uploadService.uploadByQueue();
    };
    UploadCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-center',
            template: __webpack_require__(/*! ./upload-center.component.html */ "./src/app/upload-center/upload-center.component.html"),
            styles: [__webpack_require__(/*! ./upload-center.component.css */ "./src/app/upload-center/upload-center.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploaderService"]])
    ], UploadCenterComponent);
    return UploadCenterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\memoryvault\MemoryVault.Manager.UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map