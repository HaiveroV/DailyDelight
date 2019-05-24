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

/***/ "./src/app/@core/angular-materials.module.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/angular-materials.module.ts ***!
  \***************************************************/
/*! exports provided: CustomAngularMaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAngularMaterialsModule", function() { return CustomAngularMaterialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var CustomAngularMaterialsModule = /** @class */ (function () {
    function CustomAngularMaterialsModule() {
    }
    CustomAngularMaterialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ],
            declarations: []
        })
    ], CustomAngularMaterialsModule);
    return CustomAngularMaterialsModule;
}());



/***/ }),

/***/ "./src/app/@core/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/@core/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" id=\"footer\">\r\n    <p>footer works!</p>\r\n</div>"

/***/ }),

/***/ "./src/app/@core/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/@core/footer/footer.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvcmUvZm9vdGVyL0Q6XFxVbmlcXERldlxcQU5HVUxBUlxcRGFpbHlEZWxpZ2h0L3NyY1xcYXBwXFxAY29yZVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9AY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/@core/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/@core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/@core/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@core/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/@core/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" [ngClass]=\"{hidden: !(isHandset$ | async)}\" fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar>{{ shortTitle }}\r\n      <button type=\"button\" class=\"close\" id=\"menuCloseBtn\" aria-label=\"Close\" (click)=\"drawer.toggle()\">\r\n        <span aria-hidden=\"true\" style=\"font-size: 25px !important;\">&times;</span>\r\n      </button>\r\n    </mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/login\">Login</a>\r\n      <a mat-list-item routerLink=\"/register\">Register</a>\r\n      <a mat-list-item routerLink=\"/privacy\">Privacy & Policy</a>\r\n      <a mat-list-item routerLink=\"/terms\">Terms of Use</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span id=\"navHeading\"><strong>{{ title }}</strong></span>\r\n      <div>\r\n        <img class=\"img-fluid\" src=\"../../../assets/icons/favicon.ico\" id=\"navLogo\">\r\n      </div>\r\n      <span class=\"firstSpacer\"></span>\r\n      <a routerLink=\"/privacy\" class=\"toolbar-links\">Privacy & Policy</a>\r\n      <a routerLink=\"/terms\" class=\"toolbar-links\">Terms of Use</a>\r\n      <span class=\"secondSpacer\"></span>\r\n      <a routerLink=\"/login\" class=\"toolbar-links\">Login\r\n        <img src=\"../../../assets/icons/login_icon.png\" id=\"logIcon\"></a>\r\n      <a routerLink=\"/register\" class=\"toolbar-links\">Register\r\n        <img src=\"../../../assets/icons/register_icon.png\" id=\"regIcon\"></a>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/@core/navbar/navbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/@core/navbar/navbar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 150px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.hidden {\n  display: none; }\n\n@media (max-width: 700px) {\n  #navLogo {\n    display: none; } }\n\n@media (max-width: 600px) {\n  #navHeading {\n    display: none; } }\n\n#navLogo {\n  height: 40px;\n  margin-left: 0.5rem; }\n\n#menuCloseBtn {\n  color: #ffffff;\n  opacity: 1;\n  margin-left: 1.5rem; }\n\n#menuCloseBtn:hover {\n  color: #c2185b;\n  text-shadow: none; }\n\n.secondSpacer {\n  flex: 1 1 auto; }\n\n.firstSpacer {\n  flex: 0.1; }\n\n.toolbar-links {\n  display: inline-block;\n  margin: 0 10px;\n  color: #ffffff;\n  text-decoration: none; }\n\n.toolbar-links:hover {\n  color: #424242; }\n\n@media (max-width: 530px) {\n  #regIcon,\n  #logIcon {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvcmUvbmF2YmFyL0Q6XFxVbmlcXERldlxcQU5HVUxBUlxcRGFpbHlEZWxpZ2h0L3NyY1xcYXBwXFxAY29yZVxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFOztJQUVFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvQGNvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgI25hdkxvZ28ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNuYXZIZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4jbmF2TG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbiNtZW51Q2xvc2VCdG4ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5cclxuI21lbnVDbG9zZUJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICNjMjE4NWI7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWNvbmRTcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZmlyc3RTcGFjZXIge1xyXG4gIGZsZXg6IDAuMTtcclxufVxyXG5cclxuLnRvb2xiYXItbGlua3Mge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50b29sYmFyLWxpbmtzOmhvdmVyIHtcclxuICBjb2xvcjogIzQyNDI0MjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgI3JlZ0ljb24sXHJcbiAgI2xvZ0ljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/@core/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.title = 'DailyDelight';
        this.shortTitle = 'D & D';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/@core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/@core/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/@modules/auth/forgotten-password/forgotten-password.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/@modules/auth/forgotten-password/forgotten-password.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>FORGOTTEN PASSWORD WORKS !</p>"

/***/ }),

/***/ "./src/app/@modules/auth/forgotten-password/forgotten-password.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/@modules/auth/forgotten-password/forgotten-password.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL2F1dGgvZm9yZ290dGVuLXBhc3N3b3JkL2ZvcmdvdHRlbi1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/auth/forgotten-password/forgotten-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/@modules/auth/forgotten-password/forgotten-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ForgottenPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgottenPasswordComponent", function() { return ForgottenPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgottenPasswordComponent = /** @class */ (function () {
    function ForgottenPasswordComponent() {
    }
    ForgottenPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotten-password',
            template: __webpack_require__(/*! ./forgotten-password.component.html */ "./src/app/@modules/auth/forgotten-password/forgotten-password.component.html"),
            styles: [__webpack_require__(/*! ./forgotten-password.component.scss */ "./src/app/@modules/auth/forgotten-password/forgotten-password.component.scss")]
        })
    ], ForgottenPasswordComponent);
    return ForgottenPasswordComponent;
}());



/***/ }),

/***/ "./src/app/@modules/auth/login/login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/@modules/auth/login/login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\r\n    <div class=\"row justify-content-sm-center\">\r\n        <div class=\"col-sm-10 col-md-6\">\r\n            <div class=\"card border-info\">\r\n                <div class=\"card-header\">Login</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 text-center\">\r\n                            <img src=\"https://placeimg.com/128/128/nature\">\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <form>\r\n                                <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Email\" required autofocus>\r\n                                <input type=\"password\" class=\"form-control mb-2\" placeholder=\"Password\" required>\r\n                                <button class=\"btn btn-lg btn-primary btn-block mb-1\" type=\"submit\">Login</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/@modules/auth/login/login.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/@modules/auth/login/login.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvYXV0aC9sb2dpbi9EOlxcVW5pXFxEZXZcXEFOR1VMQVJcXERhaWx5RGVsaWdodC9zcmNcXGFwcFxcQG1vZHVsZXNcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUEwRSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgIDEwcHggIDIwcHggIHJnYmEoMCwwLDAsMC4xOSksIDAgIDZweCAgNnB4ICByZ2JhKDAsMCwwLDAuMjMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/@modules/auth/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/@modules/auth/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/@modules/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/@modules/auth/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/@modules/auth/register/register.component.html":
/*!****************************************************************!*\
  !*** ./src/app/@modules/auth/register/register.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p> register works !</p>"

/***/ }),

/***/ "./src/app/@modules/auth/register/register.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@modules/auth/register/register.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@modules/auth/register/register.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@modules/auth/register/register.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/@modules/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/@modules/auth/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/@modules/auth/verify-email/verify-email.component.html":
/*!************************************************************************!*\
  !*** ./src/app/@modules/auth/verify-email/verify-email.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>verify email works</p>"

/***/ }),

/***/ "./src/app/@modules/auth/verify-email/verify-email.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/@modules/auth/verify-email/verify-email.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL2F1dGgvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/auth/verify-email/verify-email.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/auth/verify-email/verify-email.component.ts ***!
  \**********************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent() {
    }
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/@modules/auth/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/app/@modules/auth/verify-email/verify-email.component.scss")]
        })
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/@modules/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/@modules/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/@modules/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/@modules/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/@modules/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/@modules/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/@modules/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/@modules/home/welcome/welcome.component.html":
/*!**************************************************************!*\
  !*** ./src/app/@modules/home/welcome/welcome.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  welcome works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/@modules/home/welcome/welcome.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/@modules/home/welcome/welcome.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL2hvbWUvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@modules/home/welcome/welcome.component.ts":
/*!************************************************************!*\
  !*** ./src/app/@modules/home/welcome/welcome.component.ts ***!
  \************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/@modules/home/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/@modules/home/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/@shared/components/not-found/not-found.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/@shared/components/not-found/not-found.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>NOT FOUND WORKS</p>"

/***/ }),

/***/ "./src/app/@shared/components/not-found/not-found.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/@shared/components/not-found/not-found.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@shared/components/not-found/not-found.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@shared/components/not-found/not-found.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/@shared/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/@shared/components/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/@shared/components/privacy/privacy.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/@shared/components/privacy/privacy.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>PRIVACY WORKS!</p>"

/***/ }),

/***/ "./src/app/@shared/components/privacy/privacy.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/@shared/components/privacy/privacy.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@shared/components/privacy/privacy.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@shared/components/privacy/privacy.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/@shared/components/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/@shared/components/privacy/privacy.component.scss")]
        })
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/@shared/components/terms-of-use/terms-of-use.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/@shared/components/terms-of-use/terms-of-use.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>TERMS OF USE WORKS!</p>"

/***/ }),

/***/ "./src/app/@shared/components/terms-of-use/terms-of-use.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/@shared/components/terms-of-use/terms-of-use.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy90ZXJtcy1vZi11c2UvdGVybXMtb2YtdXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@shared/components/terms-of-use/terms-of-use.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@shared/components/terms-of-use/terms-of-use.component.ts ***!
  \***************************************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsOfUseComponent = /** @class */ (function () {
    function TermsOfUseComponent() {
    }
    TermsOfUseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-of-use',
            template: __webpack_require__(/*! ./terms-of-use.component.html */ "./src/app/@shared/components/terms-of-use/terms-of-use.component.html"),
            styles: [__webpack_require__(/*! ./terms-of-use.component.scss */ "./src/app/@shared/components/terms-of-use/terms-of-use.component.scss")]
        })
    ], TermsOfUseComponent);
    return TermsOfUseComponent;
}());



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
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@modules/home/home.component */ "./src/app/@modules/home/home.component.ts");
/* harmony import */ var _modules_auth_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@modules/auth/verify-email/verify-email.component */ "./src/app/@modules/auth/verify-email/verify-email.component.ts");
/* harmony import */ var _shared_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@shared/components/privacy/privacy.component */ "./src/app/@shared/components/privacy/privacy.component.ts");
/* harmony import */ var _shared_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@shared/components/terms-of-use/terms-of-use.component */ "./src/app/@shared/components/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _modules_auth_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@modules/auth/forgotten-password/forgotten-password.component */ "./src/app/@modules/auth/forgotten-password/forgotten-password.component.ts");
/* harmony import */ var _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@modules/auth/login/login.component */ "./src/app/@modules/auth/login/login.component.ts");
/* harmony import */ var _modules_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@modules/auth/register/register.component */ "./src/app/@modules/auth/register/register.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@shared/components/not-found/not-found.component */ "./src/app/@shared/components/not-found/not-found.component.ts");
/* harmony import */ var _modules_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@modules/home/welcome/welcome.component */ "./src/app/@modules/home/welcome/welcome.component.ts");





// import { AuthGuard } from './@core/guards/auth.guard';







var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'login',
        component: _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    {
        path: 'register',
        component: _modules_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    },
    {
        path: 'welcome',
        component: _modules_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"]
    },
    {
        path: 'forgotten-password',
        component: _modules_auth_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgottenPasswordComponent"]
    },
    {
        path: 'verify-email',
        component: _modules_auth_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__["VerifyEmailComponent"]
    },
    {
        path: '404',
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
    },
    {
        path: 'privacy',
        component: _shared_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyComponent"]
    },
    {
        path: 'terms',
        component: _shared_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_6__["TermsOfUseComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <app-navbar></app-navbar>\r\n</header>\r\n<router-outlet></router-outlet>\r\n<main>\r\n\r\n</main>\r\n<footer>\r\n    <app-footer></app-footer>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'DailyDelight';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _core_angular_materials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@core/angular-materials.module */ "./src/app/@core/angular-materials.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@shared/components/terms-of-use/terms-of-use.component */ "./src/app/@shared/components/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _shared_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@shared/components/privacy/privacy.component */ "./src/app/@shared/components/privacy/privacy.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@shared/components/not-found/not-found.component */ "./src/app/@shared/components/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@modules/home/home.component */ "./src/app/@modules/home/home.component.ts");
/* harmony import */ var _modules_auth_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./@modules/auth/verify-email/verify-email.component */ "./src/app/@modules/auth/verify-email/verify-email.component.ts");
/* harmony import */ var _modules_auth_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./@modules/auth/register/register.component */ "./src/app/@modules/auth/register/register.component.ts");
/* harmony import */ var _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./@modules/auth/login/login.component */ "./src/app/@modules/auth/login/login.component.ts");
/* harmony import */ var _modules_auth_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./@modules/auth/forgotten-password/forgotten-password.component */ "./src/app/@modules/auth/forgotten-password/forgotten-password.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./@core/footer/footer.component */ "./src/app/@core/footer/footer.component.ts");
/* harmony import */ var _modules_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./@modules/home/welcome/welcome.component */ "./src/app/@modules/home/welcome/welcome.component.ts");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./@core/navbar/navbar.component */ "./src/app/@core/navbar/navbar.component.ts");





















var config = {
    apiKey: "AIzaSyCtrMa720Y_af612fMzUwq7NKaIoCKwNSg",
    authDomain: "dailydelight-6b195.firebaseapp.com",
    databaseURL: "https://dailydelight-6b195.firebaseio.com",
    projectId: "dailydelight-6b195",
    storageBucket: "dailydelight-6b195.appspot.com",
    messagingSenderId: "317294291225",
    appId: "1:317294291225:web:34962cff435727c4"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_8__["TermsOfUseComponent"],
                _shared_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_9__["PrivacyComponent"],
                _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _modules_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _modules_auth_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_13__["VerifyEmailComponent"],
                _modules_auth_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _modules_auth_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgottenPasswordComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _modules_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_18__["WelcomeComponent"],
                _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(config),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _core_angular_materials_module__WEBPACK_IMPORTED_MODULE_6__["CustomAngularMaterialsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\Uni\Dev\ANGULAR\DailyDelight\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map