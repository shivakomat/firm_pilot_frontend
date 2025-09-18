"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_extrapages_extrapages_module_ts"],{

/***/ 46289:
/*!***************************************************************!*\
  !*** ./src/app/extrapages/comingsoon/comingsoon.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingsoonComponent: () => (/* binding */ ComingsoonComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





/**
 * Coming-soon component
 */
class ComingsoonComponent {
  constructor() {}
  ngOnInit() {
    this._trialEndsAt = "2026-12-31";
    (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(x => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe(x => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });
  }
  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }
  getHours(t) {
    return Math.floor(t / (1000 * 60 * 60) % 24);
  }
  getMinutes(t) {
    return Math.floor(t / 1000 / 60 % 60);
  }
  getSeconds(t) {
    return Math.floor(t / 1000 % 60);
  }
  static {
    this.ɵfac = function ComingsoonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComingsoonComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ComingsoonComponent,
      selectors: [["app-comingsoon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 4,
      consts: [[1, "home-btn", "d-none", "d-sm-block"], ["routerLink", "/", 1, "text-white"], [1, "fas", "fa-home", "h2"], [1, "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "row", "justify-content-center", "mt-5"], [1, "col-sm-4"], [1, "maintenance-img"], ["src", "assets/images/coming-soon.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "mt-5"], [1, "text-muted"], [1, "col-md-8"], ["inputDate", "December 31, 2026", 1, "counter-number", "ico-countdown"], [1, "coming-box"]],
      template: function ComingsoonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9)(10, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11)(12, "div", 12)(13, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Let's get started with Skote");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "It will be as simple as Occidental in fact it will be Occidental.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "div", 17)(21, "div", 18)(22, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Hours");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Minutes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Seconds");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._days);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._hours);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._minutes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._seconds);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95283:
/*!*****************************************************************!*\
  !*** ./src/app/extrapages/confirmmail/confirmmail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmmailComponent: () => (/* binding */ ConfirmmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class ConfirmmailComponent {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    document.body.classList.remove('auth-body-bg');
  }
  static {
    this.ɵfac = function ConfirmmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfirmmailComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmmailComponent,
      selectors: [["app-confirmmail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 32,
      vars: 1,
      consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bx-mail-send", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "text-muted"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success"], [1, "mt-5", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function ConfirmmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6)(7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Responsive Bootstrap 5 Admin Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18)(20, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Success !");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20)(25, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Back to Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22)(28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 47283:
/*!*******************************************************************!*\
  !*** ./src/app/extrapages/confirmmail2/confirmmail2.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Confirmmail2Component: () => (/* binding */ Confirmmail2Component)
/* harmony export */ });
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class Confirmmail2Component {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
    // swiper config
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function Confirmmail2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Confirmmail2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Confirmmail2Component,
      selectors: [["app-confirmmail2"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 63,
      vars: 2,
      consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bx-mail-send", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "text-muted"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function Confirmmail2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5k");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Satisfied clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14)(18, "ngx-slick-carousel", 15)(19, "div", 16)(20, "div", 17)(21, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div")(24, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Abs1981");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div")(33, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nezerious");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21)(38, "div", 22)(39, "div", 4)(40, "div", 23)(41, "div", 24)(42, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 26)(44, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28)(46, "div", 10)(47, "div", 29)(48, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32)(51, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Success !");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34)(56, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Back to Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36)(59, "p", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
        }
      },
      dependencies: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickItemDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 74912:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/extrapages-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtrapagesRoutingModule: () => (/* binding */ ExtrapagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 24739);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404/page404.component */ 53911);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page500/page500.component */ 10239);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 43843);
/* harmony import */ var _account_auth_login2_login2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account/auth/login2/login2.component */ 655);
/* harmony import */ var _lockscreen2_lockscreen2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lockscreen2/lockscreen2.component */ 38539);
/* harmony import */ var _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmmail/confirmmail.component */ 95283);
/* harmony import */ var _confirmmail2_confirmmail2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirmmail2/confirmmail2.component */ 47283);
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verification/verification.component */ 35963);
/* harmony import */ var _verification2_verification2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verification2/verification2.component */ 97427);
/* harmony import */ var _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./steptwoverification/steptwoverification.component */ 33051);
/* harmony import */ var _steptwoverification2_steptwoverification2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./steptwoverification2/steptwoverification2.component */ 57107);
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ 46289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
















const routes = [{
  path: 'maintenance',
  component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_0__.MaintenanceComponent
}, {
  path: 'coming-soon',
  component: _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_12__.ComingsoonComponent
}, {
  path: '404',
  component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component
}, {
  path: '500',
  component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_2__.Page500Component
}, {
  path: 'login-2',
  component: _account_auth_login2_login2_component__WEBPACK_IMPORTED_MODULE_4__.Login2Component
}, {
  path: 'lock-screen-1',
  component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__.LockscreenComponent
}, {
  path: 'lock-screen-2',
  component: _lockscreen2_lockscreen2_component__WEBPACK_IMPORTED_MODULE_5__.Lockscreen2Component
}, {
  path: 'confirm-mail',
  component: _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmmailComponent
}, {
  path: 'confirm-mail-2',
  component: _confirmmail2_confirmmail2_component__WEBPACK_IMPORTED_MODULE_7__.Confirmmail2Component
}, {
  path: 'email-verification',
  component: _verification_verification_component__WEBPACK_IMPORTED_MODULE_8__.VerificationComponent
}, {
  path: 'email-verification-2',
  component: _verification2_verification2_component__WEBPACK_IMPORTED_MODULE_9__.Verification2Component
}, {
  path: 'two-step-verification',
  component: _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_10__.SteptwoverificationComponent
}, {
  path: 'two-step-verification-2',
  component: _steptwoverification2_steptwoverification2_component__WEBPACK_IMPORTED_MODULE_11__.Steptwoverification2Component
}];
class ExtrapagesRoutingModule {
  static {
    this.ɵfac = function ExtrapagesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExtrapagesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: ExtrapagesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ExtrapagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 21073:
/*!*************************************************!*\
  !*** ./src/app/extrapages/extrapages.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtrapagesModule: () => (/* binding */ ExtrapagesModule)
/* harmony export */ });
/* harmony import */ var _extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extrapages-routing.module */ 74912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class ExtrapagesModule {
  static {
    this.ɵfac = function ExtrapagesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExtrapagesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ExtrapagesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtrapagesRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExtrapagesModule, {
    imports: [_extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtrapagesRoutingModule]
  });
})();

/***/ }),

/***/ 43843:
/*!***************************************************************!*\
  !*** ./src/app/extrapages/lockscreen/lockscreen.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockscreenComponent: () => (/* binding */ LockscreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/**
 * Lock-screen component
 */
class LockscreenComponent {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
  static {
    this.ɵfac = function LockscreenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LockscreenComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LockscreenComponent,
      selectors: [["app-lockscreen"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 1,
      consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/dashboard"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], [1, "user-thumb", "text-center", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "thumbnail", 1, "rounded-circle", "img-thumbnail", "avatar-md"], [1, "font-size-15", "mt-3"], [1, "mb-3"], ["for", "userpassword"], ["type", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login-1", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function LockscreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lock screen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter your password to unlock the screen!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17)(22, "form")(23, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Maria Laird");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21)(28, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24)(32, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Unlock");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26)(35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Not you ? return ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sign In ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 38539:
/*!*****************************************************************!*\
  !*** ./src/app/extrapages/lockscreen2/lockscreen2.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lockscreen2Component: () => (/* binding */ Lockscreen2Component)
/* harmony export */ });
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class Lockscreen2Component {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
    // swiper config
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function Lockscreen2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Lockscreen2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Lockscreen2Component,
      selectors: [["app-lockscreen2"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 74,
      vars: 2,
      consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [1, "form-horizontal"], [1, "user-thumb", "text-center", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "thumbnail", 1, "rounded-circle", "img-thumbnail", "avatar-md"], [1, "font-size-15", "mt-3"], ["for", "userpassword"], ["type", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md", "waves-effect", "waves-light"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function Lockscreen2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5k");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Satisfied clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14)(18, "ngx-slick-carousel", 15)(19, "div", 16)(20, "div", 17)(21, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div")(24, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Abs1981");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div")(33, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nezerious");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21)(38, "div", 22)(39, "div", 4)(40, "div", 23)(41, "div", 24)(42, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 26)(44, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28)(46, "div")(47, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lock screen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Enter your password to unlock the screen!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30)(52, "form", 31)(53, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Maria Laird");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11)(58, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37)(62, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Unlock");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39)(65, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Not you ? return ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Sign In ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 41)(70, "p", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.year, "Skote. Crafted with ");
        }
      },
      dependencies: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickItemDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 24739:
/*!*****************************************************************!*\
  !*** ./src/app/extrapages/maintenance/maintenance.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceComponent: () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/**
 * Maintenance page component
 */
class MaintenanceComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function MaintenanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaintenanceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MaintenanceComponent,
      selectors: [["app-maintenance"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 47,
      vars: 0,
      consts: [[1, "home-btn", "d-none", "d-sm-block"], ["routerLink", "/", 1, "text-dark"], [1, "fas", "fa-home", "h2"], [1, "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], [1, "home-wrapper"], [1, "mb-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "row", "justify-content-center"], [1, "col-sm-4"], [1, "maintenance-img"], ["src", "assets/images/maintenance.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "mt-5"], [1, "col-md-4"], [1, "card", "mt-4", "maintenance-box"], [1, "card-body"], [1, "bx", "bx-broadcast", "mb-4", "h1", "text-primary"], [1, "font-size-15", "text-uppercase"], [1, "text-muted", "mb-0"], [1, "bx", "bx-time-five", "mb-4", "h1", "text-primary"], [1, "bx", "bx-envelope", "mb-4", "h1", "text-primary"], ["href", "mailto:no-reply@domain.com", 1, "text-decoration-underline"]],
      template: function MaintenanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10)(11, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12)(13, "div", 13)(14, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Site is Under Maintenance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Please check back in sometime.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5)(21, "div", 17)(22, "div", 18)(23, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Why is the Site Down?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " What is the Downtime?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17)(38, "div", 18)(39, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Do you need Support?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "no-reply@domain.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 10239:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/page500/page500.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page500Component: () => (/* binding */ Page500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/**
 * Pages-500 component
 */
class Page500Component {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function Page500Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Page500Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page500Component,
      selectors: [["app-page500"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 0,
      consts: [[1, "account-pages", "my-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/images/error-img.png", "alt", "", 1, "img-fluid"]],
      template: function Page500Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Internal Server Error");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 33051:
/*!*********************************************************************************!*\
  !*** ./src/app/extrapages/steptwoverification/steptwoverification.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SteptwoverificationComponent: () => (/* binding */ SteptwoverificationComponent)
/* harmony export */ });
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-otp-input */ 51087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class SteptwoverificationComponent {
  constructor() {
    this.config = {
      allowNumbersOnly: true,
      length: 4,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: '',
      inputStyles: {
        'width': '80px',
        'height': '50px'
      }
    };
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    document.body.classList.remove('auth-body-bg');
  }
  static {
    this.ɵfac = function SteptwoverificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SteptwoverificationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SteptwoverificationComponent,
      selectors: [["app-steptwoverification"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 2,
      consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "mb-5"], [1, "fw-semibold"], [3, "config"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-5", "text-center"], ["href", "javascript: void(0);", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function SteptwoverificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6)(7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Responsive Bootstrap 4 Admin Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18)(20, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Verify your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Please enter the 4 digit code sent to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "example@abc.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ng-otp-input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22)(29, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24)(32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Did't receive a code ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Resend ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
        }
      },
      dependencies: [ng_otp_input__WEBPACK_IMPORTED_MODULE_1__.NgOtpInputModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_1__.NgOtpInputComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 57107:
/*!***********************************************************************************!*\
  !*** ./src/app/extrapages/steptwoverification2/steptwoverification2.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Steptwoverification2Component: () => (/* binding */ Steptwoverification2Component)
/* harmony export */ });
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-otp-input */ 51087);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





class Steptwoverification2Component {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
    this.config = {
      allowNumbersOnly: true,
      length: 4,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: '',
      inputStyles: {
        'width': '80px',
        'height': '50px'
      }
    };
    // swiper config
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function Steptwoverification2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Steptwoverification2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Steptwoverification2Component,
      selectors: [["app-steptwoverification2"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 66,
      vars: 3,
      consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "mb-5"], [1, "fw-semibold"], [3, "config"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function Steptwoverification2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h4", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "5k");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+ Satisfied clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14)(17, "ngx-slick-carousel", 15)(18, "div", 16)(19, "div", 17)(20, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div")(23, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Abs1981");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div")(32, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "nezerious");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21)(37, "div", 22)(38, "div", 4)(39, "div", 23)(40, "div", 24)(41, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 26)(43, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28)(45, "div", 10)(46, "div", 29)(47, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32)(50, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Verify your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Please enter the 4 digit code sent to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "example@abc.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "ng-otp-input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36)(59, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Confirm");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 38)(62, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
        }
      },
      dependencies: [ng_otp_input__WEBPACK_IMPORTED_MODULE_1__.NgOtpInputModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_1__.NgOtpInputComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__.SlickItemDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 35963:
/*!*******************************************************************!*\
  !*** ./src/app/extrapages/verification/verification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationComponent: () => (/* binding */ VerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class VerificationComponent {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    document.body.classList.remove('auth-body-bg');
  }
  static {
    this.ɵfac = function VerificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VerificationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VerificationComponent,
      selectors: [["app-verification"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 39,
      vars: 1,
      consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-5", "text-center"], ["href", "javascript: void(0);", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function VerificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6)(7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Responsive Bootstrap 4 Admin Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18)(20, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Verify your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "We have sent you verification email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "example@abc.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", Please check it");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20)(28, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Verify email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22)(31, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Did't receive an email ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Resend ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 97427:
/*!*********************************************************************!*\
  !*** ./src/app/extrapages/verification2/verification2.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Verification2Component: () => (/* binding */ Verification2Component)
/* harmony export */ });
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class Verification2Component {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
    // swiper config
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function Verification2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Verification2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Verification2Component,
      selectors: [["app-verification2"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 66,
      vars: 2,
      consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function Verification2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5k");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Satisfied clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14)(18, "ngx-slick-carousel", 15)(19, "div", 16)(20, "div", 17)(21, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div")(24, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Abs1981");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div")(33, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nezerious");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21)(38, "div", 22)(39, "div", 4)(40, "div", 23)(41, "div", 24)(42, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 26)(44, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28)(46, "div", 10)(47, "div", 29)(48, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32)(51, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Verify your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "We have sent you verification email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "example@abc.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ", Please check it");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34)(59, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Verify email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 36)(62, "p", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
        }
      },
      dependencies: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickItemDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 51087:
/*!*************************************************************!*\
  !*** ./node_modules/ng-otp-input/fesm2020/ng-otp-input.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgOtpInputComponent: () => (/* binding */ NgOtpInputComponent),
/* harmony export */   NgOtpInputConfig: () => (/* binding */ Config),
/* harmony export */   NgOtpInputModule: () => (/* binding */ NgOtpInputModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);






function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function NgOtpInputComponent_div_0_input_1_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onKeyUp($event, i_r3));
    })("input", function NgOtpInputComponent_div_0_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onInput($event));
    })("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onKeyDown($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r4])("id", ctx_r1.getBoxId(i_r3));
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 2, 9, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-otp-input-wrapper wrapper ", ctx_r1.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx_r1.otpForm == null ? null : ctx_r1.otpForm.controls));
  }
}
class KeyboardUtil {
  static ifTab(event) {
    return this.ifKey(event, 'Tab');
  }
  static ifDelete(event) {
    return this.ifKey(event, 'Delete;Del');
  }
  static ifBackspace(event) {
    return this.ifKey(event, 'Backspace');
  }
  static ifRightArrow(event) {
    return this.ifKey(event, 'ArrowRight;Right');
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, 'ArrowLeft;Left');
  }
  static ifSpacebar(event) {
    return this.ifKey(event, 'Spacebar; '); //don't remove the space after ; as this will check for space key
  }
  static ifKey(event, keys) {
    let keysToCheck = keys.split(';');
    return keysToCheck.some(k => k === event.key);
  }
}
class KeysPipe {
  transform(value) {
    return Object.keys(value);
  }
}
/** @nocollapse */
KeysPipe.ɵfac = function KeysPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || KeysPipe)();
};
/** @nocollapse */
KeysPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "keys",
  type: KeysPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'keys'
    }]
  }], null, null);
})();
class NgOtpInputComponent {
  constructor(keysPipe, document) {
    this.keysPipe = keysPipe;
    this.document = document;
    this.config = {
      length: 4
    };
    // tslint:disable-next-line: no-output-on-prefix
    this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
  }
  get inputType() {
    return this.config?.isPasswordInput ? 'password' : this.config?.allowNumbersOnly ? 'tel' : 'text';
  }
  ngOnInit() {
    this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
    }
    this.otpForm.valueChanges.subscribe(v => {
      this.keysPipe.transform(this.otpForm.controls).forEach(k => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = this.document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName('otp-input')[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    const prevInputId = this.getBoxId(inputIdx - 1);
    const currentInputId = this.getBoxId(inputIdx);
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
    if (KeyboardUtil.ifBackspace($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
  }
  onInput($event) {
    let newVal = this.currentVal ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = '';
      $event.stopPropagation();
      $event.preventDefault();
      return;
    }
  }
  onKeyUp($event, inputIdx) {
    if (KeyboardUtil.ifTab($event)) {
      inputIdx -= 1;
    }
    const nextInputId = this.getBoxId(inputIdx + 1);
    const prevInputId = this.getBoxId(inputIdx - 1);
    const currentInputId = this.getBoxId(inputIdx);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
    if (KeyboardUtil.ifDelete($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
    if (!$event.target.value) {
      return;
    }
    if (this.ifValidKeyCode($event)) {
      this.setSelected(nextInputId);
    }
    this.rebuildValue();
  }
  validateNumber(val) {
    return val && /^[0-9]+$/.test(val);
  }
  getBoxId(idx) {
    return `otp_${idx}_${this.componentKey}`;
  }
  clearInput(eleId, inputIdx) {
    let ctrlName = this.getControlName(inputIdx);
    this.otpForm.controls[ctrlName]?.setValue(null);
    const ele = this.document.getElementById(eleId);
    if (ele && ele instanceof HTMLInputElement) {
      ele.value = null;
    }
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = this.document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event) {
    const inp = event.key;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /[a-zA-Z0-9-_]/.test(inp);
  }
  focusTo(eleId) {
    const ele = this.document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm.reset();
    if (!value) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, ''); // remove whitespace
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      const containerItem = this.document.getElementById(`c_${this.componentKey}`);
      var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
      let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
      if (ele && ele.focus) {
        ele.focus();
      }
    }
    this.rebuildValue();
  }
  rebuildValue() {
    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        let ctrlVal = this.otpForm.controls[k].value;
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        val += ctrlVal;
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if (this.formCtrl?.setValue) {
      this.formCtrl.setValue(val);
    }
    this.onInputChange.emit(val);
    this.currentVal = val;
  }
  handlePaste(e) {
    // Get pasted data via clipboard API
    let clipboardData = e.clipboardData || window['clipboardData'];
    if (clipboardData) {
      var pastedData = clipboardData.getData('Text');
    }
    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
}
/** @nocollapse */
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
/** @nocollapse */
NgOtpInputComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgOtpInputComponent,
  selectors: [["ng-otp-input"]],
  inputs: {
    config: "config",
    formCtrl: "formCtrl"
  },
  outputs: {
    onInputChange: "onInputChange"
  },
  decls: 1,
  vars: 1,
  consts: [["inp", ""], [3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "class", "formControl", "id", "paste", "keyup", "input", "keydown", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "paste", "keyup", "input", "keydown", "pattern", "type", "placeholder", "ngStyle", "formControl", "id"]],
  template: function NgOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 9, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, KeysPipe],
  styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-otp-input',
      template: "<div class=\"ng-otp-input-wrapper wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input (paste)=\"handlePaste($event)\" [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\"  [placeholder]=\"config?.placeholder || ''\"\r\n    [ngStyle]=\"config.inputStyles\" \r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"one-time-code\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" #inp [id]=\"getBoxId(i)\" \r\n    (keyup)=\"onKeyUp($event,i)\" (input)=\"onInput($event)\" (keydown)=\"onKeyDown($event,i)\" >\r\n</div>",
      styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
    }]
  }], function () {
    return [{
      type: KeysPipe
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    formCtrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgOtpInputModule {}
/** @nocollapse */
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgOtpInputModule)();
};
/** @nocollapse */
NgOtpInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgOtpInputModule
});
/** @nocollapse */
NgOtpInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [KeysPipe],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule],
      declarations: [NgOtpInputComponent, KeysPipe],
      exports: [NgOtpInputComponent],
      providers: [KeysPipe]
    }]
  }], null, null);
})();
class Config {}

/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_extrapages_extrapages_module_ts.js.map