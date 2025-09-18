"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_client-portal_client-portal-app-layout_client-portal-app-layout_component_ts"],{

/***/ 70172:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/client-portal/client-portal-app-layout/client-portal-app-layout.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientPortalAppLayoutComponent: () => (/* binding */ ClientPortalAppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layouts/topbar/topbar.component */ 56414);
/* harmony import */ var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/sidebar/sidebar.component */ 76072);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);










class ClientPortalAppLayoutComponent {
  constructor(router, translate) {
    this.router = router;
    this.translate = translate;
  }
  ngOnInit() {
    // Initialize translation service
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    // Apply dark sidebar theme to match accountant portal
    document.body.setAttribute('data-sidebar', 'dark');
    document.body.setAttribute('data-layout', 'vertical');
  }
  onSettingsButtonClicked() {
    // Handle settings button click
  }
  onToggleMobileMenu() {
    // Handle mobile menu toggle
  }
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function ClientPortalAppLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientPortalAppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ClientPortalAppLayoutComponent,
      selectors: [["app-client-portal-app-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 0,
      consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"], [1, "container-fluid"]],
      template: function ClientPortalAppLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-topbar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("settingsButtonClicked", function ClientPortalAppLayoutComponent_Template_app_topbar_settingsButtonClicked_1_listener() {
            return ctx.onSettingsButtonClicked();
          })("mobileMenuButtonClicked", function ClientPortalAppLayoutComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() {
            return ctx.onToggleMobileMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-rightsidebar");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_3__.RightsidebarComponent],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50LXBvcnRhbC9jbGllbnQtcG9ydGFsLWFwcC1sYXlvdXQvY2xpZW50LXBvcnRhbC1hcHAtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSSxvREFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC8qIFJlbW92ZSBjdXN0b20gc3R5bGVzIHRvIHVzZSBnbG9iYWwgdGhlbWUgc3R5bGVzICovXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_client-portal_client-portal-app-layout_client-portal-app-layout_component_ts.js.map