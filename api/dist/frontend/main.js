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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/add-blog/add-blog.component */ "./src/app/blog/add-blog/add-blog.component.ts");
/* harmony import */ var _blog_list_blog_list_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/list-blog/list-blog.component */ "./src/app/blog/list-blog/list-blog.component.ts");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");








var routes = [
    {
        path: 'signup',
        component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
    }, {
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    }, {
        path: 'add-blog',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_5__["AddBlogComponent"],
    }, {
        path: '',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _blog_list_blog_list_blog_component__WEBPACK_IMPORTED_MODULE_6__["ListBlogComponent"],
    }, {
        path: '**',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _blog_list_blog_list_blog_component__WEBPACK_IMPORTED_MODULE_6__["ListBlogComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true,
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptor/token.interceptor */ "./src/app/core/interceptor/token.interceptor.ts");
/* harmony import */ var _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog/add-blog/add-blog.component */ "./src/app/blog/add-blog/add-blog.component.ts");
/* harmony import */ var _blog_list_blog_list_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog/list-blog/list-blog.component */ "./src/app/blog/list-blog/list-blog.component.ts");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");



// import { NgModule } from '@angular/core';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_14__["AddBlogComponent"],
                _blog_list_blog_list_blog_component__WEBPACK_IMPORTED_MODULE_15__["ListBlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]
            ],
            providers: [
                _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/add-blog/add-blog.component.css":
/*!******************************************************!*\
  !*** ./src/app/blog/add-blog/add-blog.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/blog/add-blog/add-blog.component.html":
/*!*******************************************************!*\
  !*** ./src/app/blog/add-blog/add-blog.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<block-ui>\n    <!-- Your app markup here -->\n  </block-ui>\n  \n  <body class=\"user-log-body\">\n  \n    <div class=\"user-login-page\">\n\n      <div class=\"user-login-box\">\n        <div class=\"login-box\" style=\"width: 89%;\">\n          <!-- /.login-logo -->\n          <div class=\"login-box-body\">\n  \n            <form [formGroup]=\"AddPostForm\" #prodForm=\"ngForm\">\n              <div class=\"form-group has-feedback\">\n                <input class=\"form-control\" formControlName=\"title\" placeholder=\"Title\" type=\"text\">\n              </div>\n              <div class=\"col-sm-8 col-xs-12\" *ngIf=\"AddPostForm.controls['title'].touched || submitted\">\n                <p class=\"form_error\" style=\"color: red;\"\n                  *ngIf=\"AddPostForm.controls['title'].hasError('required')\">You must enter business name email</p>\n                <p class=\"form_error\" style=\"color: red;\"\n                  *ngIf=\"AddPostForm.controls['title'].hasError('minlength')\">Minimum 2 characters should be entered\n                </p>\n                <!-- <p class=\"form_error\" style=\"color: red;\" *ngIf=\"AddPostForm.controls['name'].hasError('maxlength')\">Maximum 15 characters should be entered</p> -->\n              </div>\n              <div class=\"form-group has-feedback\">\n                  <textarea rows=\"10\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\" type=\"description\"></textarea>\n  \n                <!-- <span class=\"glyphicon form-control-feedback\">\n                  <img src=\"/assets/images/description_icon_login.png\" alt=\"\" />\n                </span> -->\n                <!-- <a (click)=\"forgotdescription()\" style=\"cursor: pointer\" class=\"forgot-link\">Forgot?</a> -->\n              </div>\n              <div class=\"col-sm-8 col-xs-12\" *ngIf=\"AddPostForm.controls['description'].touched || submitted\">\n                <p class=\"form_error\" style=\"color: red;\"\n                  *ngIf=\"AddPostForm.controls['description'].hasError('required')\">You must enter description</p>\n              </div>\n              <div class=\"row\">\n                <!-- <div class=\"col-xs-12\">\n                  <div class=\"checkbox checkbox-primary\">\n                    <input id=\"checkbox\" type=\"checkbox\" (change)=\"RememberMe()\">\n                    <label for=\"checkbox\">\n                      Remember description\n                    </label>\n                  </div>\n                </div> -->\n                <!-- /.col -->\n                <div class=\"col-xs-12\">\n                  <div class=\"text-center login-padding\">\n                    <button type=\"submit\"  (click)=\"addPost(AddPostForm.value)\" class=\"btn btn-primary\">Creatre Post</button>\n                  </div>\n                </div>\n                <!-- /.col -->\n              </div>\n            </form>\n  \n  \n  \n          </div>\n          <!-- /.login-box-body -->\n        </div>\n  \n      </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./src/app/blog/add-blog/add-blog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/add-blog/add-blog.component.ts ***!
  \*****************************************************/
/*! exports provided: AddBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function() { return AddBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var AddBlogComponent = /** @class */ (function () {
    function AddBlogComponent(router, formBuilder, toastr, user) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.user = user;
        this.formBuilder = formBuilder;
        this.AddPostForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddBlogComponent.prototype.ngOnInit = function () {
    };
    AddBlogComponent.prototype.addPost = function (values) {
        var _this = this;
        if (values.title === "" || values.title === null || values.description === "" || values.description === null) {
            this.toastr.error("error", "Please fill the form");
        }
        else {
            this.user.addPost(values).subscribe(function (Response) {
                if (Response.code === 200) {
                    _this.router.navigate(['']);
                }
                else {
                    _this.toastr.warning('warning', Response.message);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddBlogComponent.prototype, "blockUI", void 0);
    AddBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-blog',
            template: __webpack_require__(/*! ./add-blog.component.html */ "./src/app/blog/add-blog/add-blog.component.html"),
            styles: [__webpack_require__(/*! ./add-blog.component.css */ "./src/app/blog/add-blog/add-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AddBlogComponent);
    return AddBlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/list-blog/list-blog.component.css":
/*!********************************************************!*\
  !*** ./src/app/blog/list-blog/list-blog.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvbGlzdC1ibG9nL2xpc3QtYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/list-blog/list-blog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/blog/list-blog/list-blog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n  <!-- Your app markup here -->\n</block-ui>\n<header class=\"main-header userside-header\">\n    <li class=\"user_Mjcx red-li\" style=\"text-align: end;\">\n        <a (click)=\"logout()\" class=\"logout_btn\" style=\"color: white;font-size: 20PX;padding: 10px;\">Logout</a>\n      </li>\n</header>\n<section class=\"content container-fluid\">\n  <div class=\"row\">\n    <!-- <div > -->\n    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let Brand of posts\">\n      <div class=\"brand-box\" style=\"min-height: 200px;\">\n        <h2 style=\" font-size: 22px; color: #666674;\"> {{ Brand.title}}</h2>\n        <div class=\"brand-box-content\">\n          <ul class=\"brand-number\">\n            <!-- <li>\n              <img src=\"assets/images/camera_icon.png\" alt=\"\" /></li> -->\n            <li>\n              {{ Brand.description}}\n            </li>\n          </ul>\n          <ul class=\"brand-list-footer\">\n            <li>\n              <img src=\"assets/images/user_icon.png\" class=\"userimg\" alt=\"\" />{{ Brand.createdBy.firstName}}\n              {{ Brand.createdBy.lastName}}\n            </li>\n            <li style=\" font-size: 15px; \">\n                <img src=\"assets/images/clock.png\" class=\"userimg\" alt=\"\" />{{ Brand.createdBy.createdAt |  date:'medium'}}\n              </li>\n\n            <!-- <li>\n              <a [routerLink]=\"['/buzzybooth/business/b/'+Brand['_id']]\" target=\"_blank\" (click)=\"BrandStats(Brand)\">\n                <img src=\"assets/images/slideshow_icon.png\" alt=\"\" />Slideasdfasdfasshow\n              </a>\n            </li> -->\n            <li>\n              <a>\n                <i class=\"fa fa-ellipsis-v\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-4 col-sm-6\" *ngIf=\"userType != 'User'\">\n      <a [routerLink]=\"['/add-blog']\" target=\"_blank\">\n        <div class=\"brand-box\" style=\"text-align: center;max-height: 150px;min-height: 200px\">\n          <div class=\"brand-pic\">\n            <img src=\"assets/images/add-box.jpg\" alt=\"\" style=\"max-height: 150px;\"/>\n          </div>\n          <!-- <h2></h2>\n          <div class=\"brand-box-content\">\n            <ul class=\"brand-number\">\n              <li></li>\n              <li></li>\n            </ul>\n            <ul class=\"brand-list-footer\">\n              <li></li>\n              <li></li>\n              <li>\n\n              </li>\n            </ul>\n          </div> -->\n        </div>\n      </a>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/blog/list-blog/list-blog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/blog/list-blog/list-blog.component.ts ***!
  \*******************************************************/
/*! exports provided: ListBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBlogComponent", function() { return ListBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListBlogComponent = /** @class */ (function () {
    function ListBlogComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    ListBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.listblogs().subscribe(function (responce) {
            console.log(responce);
            _this.posts = responce.post;
        });
    };
    ListBlogComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        this.router.navigate(['/login']);
    };
    ListBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-blog',
            template: __webpack_require__(/*! ./list-blog.component.html */ "./src/app/blog/list-blog/list-blog.component.html"),
            styles: [__webpack_require__(/*! ./list-blog.component.css */ "./src/app/blog/list-blog/list-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListBlogComponent);
    return ListBlogComponent;
}());



/***/ }),

/***/ "./src/app/core/guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.checkLogin();
    };
    AuthGuard.prototype.checkLogin = function () {
        var _this = this;
        var isUserLoggedIn;
        return this.user.checkUserLogin().map(function (response) {
            console.log('response-------->', response);
            if (response.code === 200) {
                _this.isUserLoggedIn = true;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                _this.isUserLoggedIn = false;
                return false;
            }
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptor/token.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/token.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(router, activatedRouter) {
        this.router = router;
        this.activatedRouter = activatedRouter;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        console.log('just hitting');
        if (localStorage.getItem('token')) {
            // let isAdminroute =
            var token = localStorage.getItem('token');
            console.log('token---------------->', token);
            // console.log(">>>>>>>>>>>>>>>>>>>>>>>", this.activatedRouter, this.router.url, this.router.url.includes('/admin'), 'token-------------->', token)
            var accessReq = req.clone({
                headers: req.headers.set('authorization', 'Bearer ' + token)
            });
            return next.handle(accessReq);
        }
        else {
            return next.handle(req);
        }
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

;


/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http, https) {
        this.http = http;
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);
    }
    UserService.prototype.signUp = function (data) {
        return this.http.post(this.apiUrl + 'user-sign-up', data);
    };
    UserService.prototype.login = function (data) {
        return this.http.post(this.apiUrl + 'user-login', data);
    };
    UserService.prototype.checkUserLogin = function () {
        return this.http.get(this.apiUrl + 'check-user-login');
    };
    UserService.prototype.userLoggedIn = function (data) {
        return this.http.post(this.apiUrl + 'check-if-user-logged-in', data);
    };
    UserService.prototype.userLogout = function () {
        return this.http.get(this.apiUrl + 'user-logout');
    };
    UserService.prototype.forgotpassword = function (data) {
        return this.http.post(this.apiUrl + 'forgot-password', data);
    };
    // blog apis
    UserService.prototype.listblogs = function () {
        return this.http.get(this.apiUrl + 'list-posts');
    };
    UserService.prototype.addPost = function (data) {
        return this.http.post(this.apiUrl + 'add-post', data);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    text-align: center;\r\n    padding: 15px;\r\n    color: #666;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n  <!-- Your app markup here -->\n</block-ui>\n\n<body class=\"user-log-body\">\n\n  <div *ngIf=\"signinBox\" class=\"user-login-page\">\n    <div class=\"user-login-bg\">\n      <div class=\"login-overlay\"></div>\n    </div>\n    <div class=\"user-login-box\">\n      <div class=\"login-box\">\n        <!-- <div class=\"login-logo\">\n          <a href=\"#\">\n            <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAdVBMVEX///8AAABpaWmCgoLd3d2np6fT09PIyMj19fXi4uL6+vq2trYVFRXl5eVeXl7w8PDPz8+Hh4dycnIxMTG/v7+ampqioqIQEBAlJSU3NzdFRUVWVlYdHR1oaGhcXFx5eXkrKyuSkpJBQUFOTk48PDyFhYW6urqB4K2NAAAGQElEQVR4nO2b65aiOhCF1UZBBNEGAVFbEdv3f8QjiFoVcsEz00N6rf39RArJtpK6JI5GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4fvuPWzML+JvNVbbGa97eIZs2XON777/fvSdJpS7rS3hiujud9Nq7Jgni5mPumR0fOpsqDxmIcnA5Ts4U/ny7j1iLbF8d3fqdhWI6fHDW3OeVpLHBItA+ONsWbFqPrRLTIyzfcdgjIG38ob3I+xXE1xK7SIiqlFpmr9sCk8wPdf1Tnj8b3w/SR77qXDuzGp0INd6uyWEbmF+Hki78wzJ/CLJ93UA2sdifZfPSOGovxVPYlbq6x+LI3ihjl85bqcdVcuxY6vW+suy7rZlqLSuWyg2OSLzrrtRiPU9FCOXEfHET9FiaL3NYQbJDPVy5JL7j/eTuzhbBkOnrfq4ktnb8G+dZmLcZjV/FANWtqEcY9LCxd//TyXYVBxNVxvZ6chUh8IUvTVGpRiLGbRhxhqQwuh+/1uhKXgPLHpfg/aOWLAjaC5bXVydlwOb6fFg4f8+HaOo2T8tAavKavIHg5u1/2XCHZtDL/08r3QV8/v5IVK+JzdCZ53M3zEmrB1Xg6U8h0XdIYwbNHK6evTj6H+th2xj9M2ajbiy69WAj+wn6M7UOnkl794DElZGHIUPINgk4+OrK8M3eofkGrLfWwbSdZY/q1tQRLc7pFDP20+vPR/nV08tGVr5sdj6hr3OeiT/XpFsQe/fhyv5aQS5LsZEVzGguTP418K/Lma4lpSOb2vrlCo8BGZjEj3C/R+m4mMUkNjxwYjXwb0w//Ld5AtehXZ/kk55vI+g/UoQ9vjeyfoJGP5GNLqe2cDK0u3bzq7aGG5BHy0EAS99i+5p9avoi0OxU9I5Jz1LN7TlypZ5gkeXkmT0xIMM/sS/3U8jmkfSlblUYslE5GbJ1/jtRPjx8Kal8iC0Qh/47w8rpFv50wBGr5ZuZZQ0JFPb2Jo8SPxVLTQajFIKvlp/w76APsy/zU8pHAWyhSBqJwETH5ikfk0LQLa5cmiaIsuAtvaF/d20s+VbuSKszl270vnyot+f3yqSYv8b6Ky/esyTTy1ZOXyKeYvPQN7Uv8esnXrdjukIX/wC1is3yZ4H2KVCci2dCvCh2kZlNEXjL4OvI6JJF5CK6Wr3FpktWd5N9Bs6HfJN+clOuKRYcUpPXCT/dFHvNMLd+uzvNomSdfIUhR/KvyPv/r9VEutSVL3z2xJlKd23vUiUuz1tH2qnQHk6Y2Z/t6BpqijfaXpGVHp8QtyYV2ovnu4sWUpMB3tWhJG8vieyQKbhca+ej24U5SUVHPiZsr1B1lYw1pC6xxJeriUveje1XilqgF6Pp95M0lnXzv1B1Zx7s4tJva1mhsM6obodgOsIXd+r7d5k6/1KPbGvt2UaeRYN8Rg7ZGn91mukt5EafvjHZL5W2fYdHudbCNNj51eER9nG1jYuRCvzmhm0LFw5XYTrKwPZKwF1BkT4NC5PvufMg3yY/ENxx+eO8ZEtkGUrYh081L2VmC59Rmio/3i1fP1J8y9SwMHEy+3fRF2niOsM8blG6jYJgIR6hIWshlPU/vLuOvUr7tTbZ9hH3eYnE3mU2F45X2ZS0j9ZmK+0xOhKvZ6bzbncXDZDvSZZ8J5wmC7e7rq9ry34Gvi+LZy2BbLKuteC5BnhUOjUq+tn1UKj6m5KxcEE9pSGFpZHQxG2hPDg+IQb4e+gVChNgYLcTOSSQ/lkvZGY+VD4NJPv1J0ZpOC/jDZNGpoFemM1aVhSlfg0k+IZh2OEnKeL2FrGsXdU7hM1RHqIfHLJ92NSukyZj2tKg0BkSq96gprVWvj3yjSNV0ylXtX6WF+mT9QnWmt7IxXX7QR76R70oXp506FfMTqUWwUDtSWEpfJLV12WtQuYlYwSUTIRErSkMem0zEZG9i2Gj0NhW3yJaSk0lWETpyOtr4oXssTvvgRh4vN475DEttccmDYFybXI5uaF7CojA9bE/ZzWB/uhyvPSx+F978xlsW4XwVzt8ruOrvsPafHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABu/Ac3q0g8ZVCYjgAAAABJRU5ErkJggg==\" alt=\"\" />\n          </a>\n        </div> -->\n        <!-- /.login-logo -->\n        <div class=\"login-box-body\">\n\n          <form [formGroup]=\"userLoginForm\" #prodForm=\"ngForm\">\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" type=\"email\">\n              <span class=\"glyphicon form-control-feedback\">\n                <img src=\"/assets/images/email_icon_login.png\" alt=\"\" />\n              </span>\n            </div>\n            <div class=\"col-sm-8 col-xs-12\" *ngIf=\"userLoginForm.controls['email'].touched || submitted\">\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userLoginForm.controls['email'].hasError('required')\">You must enter email id</p>\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userLoginForm.controls['email'].hasError('minlength')\">Minimum 2 characters should be entered</p>\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userLoginForm.controls['email'].hasError('pattern')\">Please enter a valid email address</p>\n\n            </div>\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" type=\"password\">\n\n              <span class=\"glyphicon form-control-feedback\">\n                <img src=\"/assets/images/password_icon_login.png\" alt=\"\" />\n              </span>\n              <a (click)=\"forgotpassword()\" style=\"cursor: pointer\" class=\"forgot-link\">Forgot?</a>\n            </div>\n            <div class=\"col-sm-8 col-xs-12\" *ngIf=\"userLoginForm.controls['password'].touched || submitted\">\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userLoginForm.controls['password'].hasError('required')\">You must enter password</p>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"checkbox checkbox-primary\">\n                  <input id=\"checkbox\" type=\"checkbox\" (change)=\"RememberMe()\">\n                  <label for=\"checkbox\">\n                    Remember Password\n                  </label>\n                </div>\n              </div>\n              <!-- /.col -->\n              <div class=\"col-xs-12\">\n                <div class=\"text-center login-padding\" style=\"width: 100%; padding-top: 10px !important\">\n                  <button type=\"submit\" (click)=\"userLogin(userLoginForm.value)\" class=\"btn btn-primary\" style=\"width: 100%;\">Login</button>\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n          </form>\n\n\n\n        </div>\n        <div [className]=\"'login'\"><p>Not registered ? <a [routerLink]=\"['/signup']\">Create an account</a> </p></div>\n        <!-- /.login-box-body -->\n      </div>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"forgotPasswordBox\" class=\"login-box\">\n    <div class=\"login-logo\">\n      <a href=\"\">\n        <b>Forgot Password? </b>\n      </a>\n    </div>\n    <div class=\"login-box-body\">\n      <p class=\"login-box-msg\">Enter your email and business name</p>\n      <form [formGroup]=\"forgotPassword\" #prodForm=\"ngForm\" (ngSubmit)=\"forgotPasswordFunc(forgotPassword.valid)\">\n        <div class=\"form-group has-feedback\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n        </div>\n        <div *ngIf=\"forgotPassword.controls['email'].touched \">\n          <p class=\"form_error\" *ngIf=\"forgotPassword.controls['email'].hasError('required')\">You must enter the email id</p>\n          <p class=\"form_error\" *ngIf=\"forgotPassword.controls['email'].hasError('minlength')\">Minimum 3 characters must be entered</p>\n          <p class=\"form_error\" *ngIf=\"forgotPassword.controls['email'].hasError('pattern')\">Incorrect Email Pattern</p>\n        </div>\n        <div class=\"form-group has-feedback Login\">\n          <button type=\"submit\" [disabled]=\"!forgotPassword.valid\" class=\"btn btn-danger btn-block btn-flat\">Submit</button>\n        </div>\n\n        <div class=\"form-group has-feedback Login login-right\">\n          <span class=\"forgetspan\">\n            <a type=\"submit\" style=\"cursor: pointer\" class=\"\" (click)=\"signInClicked()\">Back to Login</a>\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, toastr, user) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.user = user;
        this.submitted = false;
        this.signinBox = true;
        this.forgotPasswordBox = false;
        this.isChecked = false;
        this.isChcekBoxChecked = false;
        this.formBuilder = formBuilder;
        this.userLoginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.forgotPassword = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9]+[a-zA-Z0-9]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.userLogin = function (value) {
        var _this = this;
        this.submitted = true;
        console.log('--->', value);
        if (value.email === "" || value.email === null || value.password === "" || value.password === null) {
            this.toastr.error("error", "Please fill the form");
        }
        else {
            this.blockUI.start('User login...');
            this.user.login(value).subscribe(function (response) {
                if (response.code === 404) {
                    _this.toastr.error('error', response.message);
                    setTimeout(function () {
                        _this.blockUI.stop();
                    }, 10);
                }
                else if (response.code === 200) {
                    if (_this.isChecked) {
                        var dateOffset = (24 * 60 * 60 * 1000) * 15; //5 days
                        var myDate = new Date();
                        myDate.setTime(myDate.getTime() + dateOffset);
                        document.cookie = 'u_email = ' + value.email + '; expires = ' + myDate + '; path = /';
                        document.cookie = 'u_String = ' + value.password + '; expires = ' + myDate + '; path = /';
                        document.cookie = 'u_rememberMe = 1; expires = ' + myDate + '; path = /';
                    }
                    else {
                        document.cookie = 'u_email =; expires =; path = /';
                        document.cookie = 'u_String =; expires =; path = /';
                        document.cookie = 'u_rememberMe = 0; expires =; path = /';
                    }
                    console.log('response------->', response);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('email', value.email);
                    localStorage.setItem('id', response.data.id);
                    _this.router.navigate(['']);
                    setTimeout(function () {
                        _this.blockUI.stop();
                        _this.toastr.success('success', response.message);
                    }, 2000);
                }
                else {
                    _this.toastr.warning('warning', response.message);
                    setTimeout(function () {
                        _this.blockUI.stop();
                    }, 3000);
                }
            });
        }
    };
    LoginComponent.prototype.forgotpassword = function (valid) {
        this.signinBox = false;
        this.forgotPasswordBox = true;
    };
    LoginComponent.prototype.signInClicked = function () {
        this.signinBox = true;
        this.forgotPasswordBox = false;
    };
    LoginComponent.prototype.RememberMe = function () {
        if (this.isChecked === false) {
            this.isChecked = true;
        }
        else if (this.isChecked === true) {
            this.isChecked = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "blockUI", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup{\r\n    text-align: center;\r\n    padding: 15px;\r\n    color: #666;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n  <!-- Your app markup here -->\n</block-ui>\n\n<body class=\"user-log-body\">\n\n  <div class=\"user-login-page\">\n    <div class=\"user-login-bg\">\n      <div class=\"login-overlay\"></div>\n    </div>\n    <div class=\"user-login-box\">\n      <div class=\"login-box\">\n        <!-- /.login-logo -->\n        <div class=\"login-box-body\">\n\n          <form [formGroup]=\"userSignupForm\" #prodForm=\"ngForm\">\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" formControlName=\"firstName\" placeholder=\"First Name\" type=\"text\">\n              <span class=\"glyphicon form-control-feedback\">\n                <img src=\"/assets/images/user_icon_login.png\" alt=\"\" />\n              </span>\n            </div>\n            <div class=\"col-sm-8 col-xs-12\" *ngIf=\"userSignupForm.controls['firstName'].touched || submitted\">\n              <p class=\"form_error\" style=\"color: red;\"\n                *ngIf=\"userSignupForm.controls['firstName'].hasError('required')\">You must enter business name email</p>\n              <p class=\"form_error\" style=\"color: red;\"\n                *ngIf=\"userSignupForm.controls['firstName'].hasError('minlength')\">Minimum 2 characters should be entered\n              </p>\n              <!-- <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userSignupForm.controls['name'].hasError('maxlength')\">Maximum 15 characters should be entered</p> -->\n            </div>\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" formControlName=\"lastName\" placeholder=\"Second Name\" type=\"text\">\n              <span class=\"glyphicon form-control-feedback\">\n                <img src=\"/assets/images/user_icon_login.png\" alt=\"\" />\n              </span>\n            </div>\n            <div class=\"col-sm-8 col-xs-12\" *ngIf=\"userSignupForm.controls['lastName'].touched || submitted\">\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userSignupForm.controls['lastName'].hasError('required')\">You\n                must enter business name email</p>\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userSignupForm.controls['lastName'].hasError('minlength')\">\n                Minimum 2 characters should be entered</p>\n              <!-- <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userSignupForm.controls['name'].hasError('maxlength')\">Maximum 15 characters should be entered</p> -->\n            </div>\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" type=\"email\">\n              <span class=\"glyphicon form-control-feedback\">\n                <img src=\"/assets/images/email_icon_login.png\" alt=\"\" />\n              </span>\n            </div>\n            <div class=\"col-sm-8 col-xs-12\" *ngIf=\"userSignupForm.controls['email'].touched || submitted\">\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userSignupForm.controls['email'].hasError('required')\">\n                You must enter email id</p>\n              <p class=\"form_error\" style=\"color: red;\"\n                *ngIf=\"userSignupForm.controls['email'].hasError('minlength')\">Minimum 2 characters should be entered\n              </p>\n              <p class=\"form_error\" style=\"color: red;\" *ngIf=\"userSignupForm.controls['email'].hasError('pattern')\">\n                Please enter a valid email address</p>\n\n            </div>\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" type=\"password\">\n\n              <span class=\"glyphicon form-control-feedback\">\n                <img src=\"/assets/images/password_icon_login.png\" alt=\"\" />\n              </span>\n              <!-- <a (click)=\"forgotpassword()\" style=\"cursor: pointer\" class=\"forgot-link\">Forgot?</a> -->\n            </div>\n            <div class=\"col-sm-8 col-xs-12\" *ngIf=\"userSignupForm.controls['password'].touched || submitted\">\n              <p class=\"form_error\" style=\"color: red;\"\n                *ngIf=\"userSignupForm.controls['password'].hasError('required')\">You must enter password</p>\n            </div>\n            <div class=\"row\">\n              <!-- <div class=\"col-xs-12\">\n                <div class=\"checkbox checkbox-primary\">\n                  <input id=\"checkbox\" type=\"checkbox\" (change)=\"RememberMe()\">\n                  <label for=\"checkbox\">\n                    Remember Password\n                  </label>\n                </div>\n              </div> -->\n              <!-- /.col -->\n              <div class=\"col-xs-12\">\n                <div class=\"text-center login-padding\"  style=\"width: 100%; padding-top: 10px !important\">\n                  <button type=\"submit\"  (click)=\"userSignup(userSignupForm.value)\" class=\"btn btn-primary\" style=\"width: 100%;\">Sign Up</button>\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n          </form>\n\n\n\n        </div>\n        <!-- /.login-box-body -->\n        <div [className]=\"'signup'\"><p>Already registered ? <a [routerLink]=\"['/login']\">Login</a> </p></div>\n      </div>\n\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, formBuilder, toastr, user) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.user = user;
        this.formBuilder = formBuilder;
        this.userSignupForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.userSignup = function (value) {
        var _this = this;
        console.log(value);
        this.blockUI.start('User login...');
        if (value.firstName === "" || value.firstName === null || value.lastName === "" || value.lastName === null || value.email === "" || value.email === null || value.password === "" || value.password === null) {
            this.toastr.error("error", "Please fill the form");
            this.blockUI.stop();
        }
        else {
            this.user.signUp(value).subscribe(function (response) {
                console.log('sadfasdfasdfadfasdf===>', response);
                if (response.code === 404) {
                    _this.toastr.error('error', response.message);
                    setTimeout(function () {
                        _this.blockUI.stop();
                    }, 10);
                }
                else if (response.code === 200) {
                    // localStorage.setItem('business_name', response.data.business_name);
                    // localStorage.setItem('token', response.data.token);
                    // localStorage.setItem('email', response.data.email_id);
                    // localStorage.setItem('user_id', response.data.user_id);
                    // localStorage.setItem('create_time', response.data.create_time);
                    // localStorage.setItem('userType', response.data.userType);
                    _this.router.navigate(['/login']);
                    setTimeout(function () {
                        _this.blockUI.stop();
                        _this.toastr.success('success', response.message);
                    }, 0);
                }
                else {
                    _this.toastr.warning('warning', response.message);
                    setTimeout(function () {
                        _this.blockUI.stop();
                    }, 0);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupComponent.prototype, "blockUI", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5105/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\mu test\ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map