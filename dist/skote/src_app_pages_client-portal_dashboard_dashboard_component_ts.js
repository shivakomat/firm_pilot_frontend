"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_client-portal_dashboard_dashboard_component_ts"],{

/***/ 68796:
/*!**********************************************************************!*\
  !*** ./src/app/pages/client-portal/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientDashboardComponent: () => (/* binding */ ClientDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




class ClientDashboardComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ClientDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientDashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientDashboardComponent,
      selectors: [["app-client-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 142,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "col-xl-12"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "col-7"], [1, "text-primary", "p-3"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "d-flex"], [1, "flex-1", "ms-3"], [1, "font-size-16", "mb-1"], [1, "text-muted", "mb-2"], ["routerLink", "/client-portal/documents", 1, "btn", "btn-primary", "btn-sm"], [1, "bx", "bx-file", "me-1"], [1, "flex-shrink-0", "align-self-center"], [1, "avatar-sm", "rounded-circle", "bg-primary-subtle"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary"], [1, "bx", "bx-file", "font-size-24"], ["routerLink", "/client-portal/tax-intake", 1, "btn", "btn-primary", "btn-sm"], [1, "bx", "bx-receipt", "me-1"], [1, "avatar-sm", "rounded-circle", "bg-success-subtle"], [1, "avatar-title", "rounded-circle", "bg-success-subtle", "text-success"], [1, "bx", "bx-edit", "font-size-24"], ["routerLink", "/client-portal/chat", 1, "btn", "btn-info", "btn-sm"], [1, "bx", "bx-chat", "me-1"], [1, "avatar-sm", "rounded-circle", "bg-info-subtle"], [1, "avatar-title", "rounded-circle", "bg-info-subtle", "text-info"], [1, "bx", "bx-chat", "font-size-24"], [1, "col-xl-8"], [1, "card-title", "mb-4"], [1, "table-responsive"], [1, "table", "table-nowrap", "align-middle", "mb-0"], [2, "width", "50px"], [1, "avatar-sm"], [1, "bx", "bx-file"], [1, "font-size-14", "mb-1"], [1, "text-muted", "mb-0"], [1, "text-end"], [1, "text-muted", "font-size-12"], [1, "bx", "bx-edit"], [1, "bx", "bx-chat"], [1, "text-center"], [1, "mb-4"], [1, "bx", "bx-check-circle", "text-success", "display-4"], [1, "text-muted"], [1, "mt-4"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "progress", 2, "height", "6px"], ["role", "progressbar", 1, "progress-bar", "bg-success", 2, "width", "85%"]],
      template: function ClientDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Welcome Back!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your client portal dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div")(26, "h5", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "View and upload documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " View Documents ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13)(38, "div", 14)(39, "div", 15)(40, "div", 16)(41, "div", 17)(42, "div")(43, "h5", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Intake Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Complete required forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Tax Intake ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22)(51, "div", 28)(52, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13)(55, "div", 14)(56, "div", 15)(57, "div", 16)(58, "div", 17)(59, "div")(60, "h5", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Chat");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Message your accountant");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Start Chat ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22)(68, "div", 33)(69, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1)(72, "div", 36)(73, "div", 14)(74, "div", 15)(75, "h4", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Recent Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38)(78, "table", 39)(79, "tbody")(80, "tr")(81, "td", 40)(82, "div", 41)(83, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td")(86, "h5", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Document uploaded");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Tax documents for 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td")(91, "div", 45)(92, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "2 hours ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr")(95, "td")(96, "div", 41)(97, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td")(100, "h5", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Form completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Client intake form submitted");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td")(105, "div", 45)(106, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "1 day ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr")(109, "td")(110, "div", 41)(111, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td")(114, "h5", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Message received");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "New message from your accountant");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td")(119, "div", 45)(120, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "3 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 13)(123, "div", 14)(124, "div", 15)(125, "h4", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Account Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 49)(128, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Account Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Your account is in good standing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53)(135, "div", 54)(136, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Profile Completion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "85%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".avatar-sm[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 2rem;\n}\n\n.avatar-title[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #556ee6;\n  color: #fff;\n  display: flex;\n  font-weight: 500;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n\n.bg-primary-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(85, 110, 230, 0.1) !important;\n}\n\n.bg-success-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(52, 195, 143, 0.1) !important;\n}\n\n.bg-info-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(80, 165, 241, 0.1) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50LXBvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQU47O0FBR0k7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLG9EQUFBO0FBQU47O0FBR0k7RUFDRSxvREFBQTtBQUFOOztBQUdJO0VBQ0Usb0RBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5hdmF0YXItc20ge1xuICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgfVxuICAgIFxuICAgIC5hdmF0YXItdGl0bGUge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTZlZTY7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmJnLXByaW1hcnktc3VidGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDExMCwgMjMwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5iZy1zdWNjZXNzLXN1YnRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxOTUsIDE0MywgMC4xKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuYmctaW5mby1zdWJ0bGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgMTY1LCAyNDEsIDAuMSkgIWltcG9ydGFudDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_client-portal_dashboard_dashboard_component_ts.js.map