"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["main"],{

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class AppComponent {
  ngOnInit() {}
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 70289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig),
/* harmony export */   createTranslateLoader: () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/http-loader */ 18952);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 54285);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ 8144);
/* harmony import */ var _store_filemanager_filemanager_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/filemanager/filemanager.effects */ 47871);
/* harmony import */ var _store_orders_order_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/orders/order.effects */ 1468);
/* harmony import */ var _store_Authentication_authentication_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/Authentication/authentication.effects */ 121);
/* harmony import */ var _store_Cart_cart_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/Cart/cart.effects */ 33881);
/* harmony import */ var _store_ProjectsData_project_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/ProjectsData/project.effects */ 25306);
/* harmony import */ var _store_UserGrid_user_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/UserGrid/user.effects */ 3947);
/* harmony import */ var _store_UserList_userlist_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/UserList/userlist.effect */ 16952);
/* harmony import */ var _store_Job_job_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/Job/job.effects */ 95703);
/* harmony import */ var _store_Candidate_candidate_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/Candidate/candidate.effects */ 34231);
/* harmony import */ var _store_Invoices_invoice_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/Invoices/invoice.effects */ 2350);
/* harmony import */ var _store_Chat_chat_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/Chat/chat.effect */ 43366);
/* harmony import */ var _store_Tasks_tasks_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/Tasks/tasks.effect */ 92016);
/* harmony import */ var _store_Crypto_crypto_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/Crypto/crypto.effects */ 66439);
/* harmony import */ var _store_customer_customer_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/customer/customer.effects */ 39981);
/* harmony import */ var _store_Email_email_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/Email/email.effects */ 72743);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routes */ 32181);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 54195);


// Other module imports

























function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_19__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_16__.routes), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_20__.provideStore)(_store__WEBPACK_IMPORTED_MODULE_0__.rootReducer), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.provideEffects)([_store_filemanager_filemanager_effects__WEBPACK_IMPORTED_MODULE_1__.FilemanagerEffects, _store_orders_order_effects__WEBPACK_IMPORTED_MODULE_2__.OrderEffects, _store_Authentication_authentication_effects__WEBPACK_IMPORTED_MODULE_3__.AuthenticationEffects, _store_Cart_cart_effects__WEBPACK_IMPORTED_MODULE_4__.CartEffects, _store_ProjectsData_project_effects__WEBPACK_IMPORTED_MODULE_5__.ProjectEffects, _store_UserGrid_user_effects__WEBPACK_IMPORTED_MODULE_6__.usersEffects, _store_UserList_userlist_effect__WEBPACK_IMPORTED_MODULE_7__.userslistEffects, _store_Job_job_effects__WEBPACK_IMPORTED_MODULE_8__.JoblistEffects, _store_Candidate_candidate_effects__WEBPACK_IMPORTED_MODULE_9__.CandidateEffects, _store_Invoices_invoice_effects__WEBPACK_IMPORTED_MODULE_10__.InvoiceDataEffects, _store_Chat_chat_effect__WEBPACK_IMPORTED_MODULE_11__.ChatEffects, _store_Tasks_tasks_effect__WEBPACK_IMPORTED_MODULE_12__.tasklistEffects, _store_Crypto_crypto_effects__WEBPACK_IMPORTED_MODULE_13__.OrdersEffects, _store_customer_customer_effects__WEBPACK_IMPORTED_MODULE_14__.CustomerEffects, _store_Email_email_effects__WEBPACK_IMPORTED_MODULE_15__.MailEffects]), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.withInterceptorsFromDi)()), (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClient]
    }
  })), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.provideAnimations)(), (0,ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.provideToastr)(), {
    provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_26__.BsDropdownConfig,
    useValue: {
      isAnimated: true,
      autoClose: true
    }
  }]
};

/***/ }),

/***/ 32181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _extrapages_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extrapages/page404/page404.component */ 53911);
/* harmony import */ var _cyptolanding_cyptolanding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cyptolanding/cyptolanding.component */ 182);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth.guard */ 34978);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/layout.component */ 58979);
/* harmony import */ var _pages_invitations_client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/invitations/client-registration/client-registration.component */ 70964);





const routes = [{
  path: "auth",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_account_auth_login2_login2_component_ts"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 90359)).then(m => m.AccountModule)
}, {
  path: "register/:token",
  component: _pages_invitations_client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_4__.ClientRegistrationComponent
}, {
  path: "",
  component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_chat_service_ts-src_app_shared_ui_loader_loader_component_ts-no-cd042c"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 98423)).then(m => m.PagesModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: "client-portal",
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_client-portal_client-portal-app-layout_client-portal-app-layout_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/client-portal/client-portal-app-layout/client-portal-app-layout.component */ 70172)).then(c => c.ClientPortalAppLayoutComponent),
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_chat_service_ts-src_app_shared_ui_loader_loader_component_ts-no-cd042c"), __webpack_require__.e("src_app_pages_client-portal_client-portal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/client-portal/client-portal.module */ 40546)).then(m => m.ClientPortalModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: "pages",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_account_auth_login2_login2_component_ts"), __webpack_require__.e("src_app_extrapages_extrapages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./extrapages/extrapages.module */ 21073)).then(m => m.ExtrapagesModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: "crypto-ico-landing",
  component: _cyptolanding_cyptolanding_component__WEBPACK_IMPORTED_MODULE_1__.CyptolandingComponent
}, {
  path: "**",
  component: _extrapages_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component
}];

/***/ }),

/***/ 35689:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFirebaseBackend: () => (/* binding */ getFirebaseBackend),
/* harmony export */   initFirebaseBackend: () => (/* binding */ initFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ 12043);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ 15108);



class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    /**
     * Registers the user with given details
     */
    this.registerUser = (email, password) => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then(user => {
          var user = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
          resolve(user);
        }, error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * Login user with given details
     */
    this.loginUser = (email, password) => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then(user => {
          // eslint-disable-next-line no-redeclare
          var user = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
          resolve(user);
        }, error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * forget Password user with given details
     */
    this.forgetPassword = email => {
      return new Promise((resolve, reject) => {
        // tslint:disable-next-line: max-line-length
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().sendPasswordResetEmail(email, {
          url: window.location.protocol + '//' + window.location.host + '/login'
        }).then(() => {
          resolve(true);
        }).catch(error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * Logout the user
     */
    this.logout = () => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(() => {
          resolve(true);
        }).catch(error => {
          reject(this._handleError(error));
        });
      });
    };
    this.setLoggeedInUser = user => {
      sessionStorage.setItem('authUser', JSON.stringify(user));
    };
    /**
     * Returns the authenticated user
     */
    this.getAuthenticatedUser = () => {
      if (!sessionStorage.getItem('authUser')) {
        return null;
      }
      return JSON.parse(sessionStorage.getItem('authUser'));
    };
    if (firebaseConfig) {
      // Initialize Firebase
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged(user => {
        if (user) {
          sessionStorage.setItem('authUser', JSON.stringify(user));
        } else {
          sessionStorage.removeItem('authUser');
        }
      });
    }
  }
  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    // tslint:disable-next-line: prefer-const
    var errorMessage = error.message;
    return errorMessage;
  }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = config => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};


/***/ }),

/***/ 25392:
/*!****************************************!*\
  !*** ./src/app/core/data/candidate.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidateList: () => (/* binding */ CandidateList)
/* harmony export */ });
const CandidateList = [{
  id: '1',
  type: 'Full Time',
  profile: 'assets/images/users/avatar-1.jpg',
  name: 'Steven Franklin',
  position: 'UI/UX Designer',
  location: 'Louisiana',
  price: 38,
  tags: ['Bootstrap', 'HTML', 'CSS']
}, {
  id: '2',
  type: 'Freelance',
  profile: 'assets/images/users/avatar-2.jpg',
  name: 'Dolores Minter',
  position: 'Assistant / Shope Keeper',
  location: 'Hong-Kong',
  price: 25,
  tags: ['Shope', 'Assistant']
}, {
  id: '3',
  type: 'Part Time',
  profile: 'assets/images/users/avatar-3.jpg',
  name: 'Charles Brown',
  position: 'Web Designer',
  location: 'Finlande',
  price: 24,
  tags: ['Bootstrap', 'HTML', 'SASS']
}, {
  id: '4',
  type: 'Internship',
  profile: 'assets/images/users/avatar-4.jpg',
  name: 'Bonnie Harney',
  position: 'Web Developer',
  location: 'France',
  price: 47,
  tags: ['MYSQL', 'PHP', 'Laravel']
}, {
  id: '5',
  type: 'Internship',
  profile: 'assets/images/users/avatar-5.jpg',
  name: 'Stephen Hadley',
  position: 'Graphic Designer',
  location: 'Danemark',
  price: 83,
  tags: ['Figma', 'Adobe XD', 'Sketch']
}, {
  id: '6',
  type: 'Internship',
  profile: 'assets/images/users/avatar-6.jpg',
  name: 'Henry Wells',
  position: 'Executive, HR Operations',
  location: 'Danemark',
  price: 65,
  tags: ['HR', 'Executive', 'Professional']
}, {
  id: '7',
  type: 'Full Time',
  profile: 'assets/images/users/avatar-7.jpg',
  name: 'Adam Miller',
  position: 'Education Training',
  location: 'Colombie',
  price: 40,
  tags: ['Teaching', 'React', 'Training']
}, {
  id: '8',
  type: 'Freelance',
  profile: 'assets/images/users/avatar-8.jpg',
  name: 'Keith Gonzales',
  position: 'Product Manager',
  location: 'Brazil',
  price: 50,
  tags: ['Manager', 'Business', 'Product']
}];


/***/ }),

/***/ 39691:
/*!***********************************!*\
  !*** ./src/app/core/data/cart.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cartData: () => (/* binding */ cartData)
/* harmony export */ });
const cartData = [{
  id: 1,
  image: 'assets/images/product/img-1.png',
  name: 'Half sleeve T-shirt',
  color: 'Maroon',
  price: 450,
  qty: 2,
  total: '900'
}, {
  id: 2,
  image: 'assets/images/product/img-2.png',
  name: 'Light blue T-shirt',
  color: 'Light blue',
  price: 225,
  qty: 1,
  total: '225'
}, {
  id: 3,
  image: 'assets/images/product/img-3.png',
  name: 'Black Color T-shirt',
  color: 'Black',
  price: 152,
  qty: 1,
  total: '304'
}, {
  id: 4,
  image: 'assets/images/product/img-4.png',
  name: 'Hoodie (Blue)',
  color: 'Blue',
  price: 145,
  qty: 2,
  total: '290'
}, {
  id: 5,
  image: 'assets/images/product/img-5.png',
  name: 'Half sleeve T-Shirt',
  color: 'Light orange',
  price: 138,
  qty: 1,
  total: '138'
}, {
  id: 6,
  image: 'assets/images/product/img-6.png',
  name: 'Green color T-shirt',
  color: 'Green',
  price: 152,
  qty: 2,
  total: '304'
}];


/***/ }),

/***/ 48259:
/*!***********************************!*\
  !*** ./src/app/core/data/chat.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatData: () => (/* binding */ chatData),
/* harmony export */   chatMessagesData: () => (/* binding */ chatMessagesData)
/* harmony export */ });
const chatData = [{
  image: 'assets/images/users/avatar-2.jpg',
  name: 'Steven Franklin',
  message: 'Hey! there I\'m available',
  time: '05 min',
  color: 'secondary'
}, {
  image: 'assets/images/users/avatar-3.jpg',
  name: 'Adam Miller',
  message: 'I\'ve finished it! See you so',
  time: '12 min',
  color: 'success'
}, {
  name: 'Keith Gonzales',
  message: 'This theme is awesome!',
  time: '24 min',
  color: 'success'
}, {
  image: 'assets/images/users/avatar-4.jpg',
  name: 'Jose Vickery',
  message: 'Nice to meet you',
  time: '1 hr',
  color: 'warning'
}, {
  name: 'Mitchel Givens',
  message: 'Hey! there I\'m available',
  time: '3 hrs',
  color: 'secondary'
}, {
  image: 'assets/images/users/avatar-4.jpg',
  name: 'Stephen Hadley',
  message: 'I\'ve finished it! See you so',
  time: '5 hrs',
  color: 'success'
}, {
  image: 'assets/images/users/avatar-2.jpg',
  name: 'Keith Gonzales',
  message: 'This theme is awesome!',
  time: '24 min',
  color: 'success'
}];
const chatMessagesData = [{
  name: 'Steven Franklin',
  message: 'Hello!',
  time: '10:00'
}, {
  align: 'right',
  name: 'Henry Wells',
  message: 'Hi, How are you? What about our next meeting?',
  time: '10:02'
}, {
  name: 'Steven Franklin',
  message: 'Yeah everything is fine',
  time: '10:06'
}, {
  name: 'Steven Franklin',
  message: '& Next meeting tomorrow 10.00AM',
  time: '10:06'
}, {
  align: 'right',
  name: 'Henry Wells',
  message: 'Wow that\'s great',
  time: '10:07'
}];


/***/ }),

/***/ 53798:
/*!******************************************!*\
  !*** ./src/app/core/data/cryptoOrder.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orders: () => (/* binding */ orders)
/* harmony export */ });
const orders = [{
  id: '#SK3215',
  status: 'Completed',
  date: '03 Mar, 2020',
  type: 'Buy',
  coin: 'Bitcoin',
  value: '1.00952 BTC',
  usd: '$ 9067.62'
}, {
  id: '#SK3216',
  status: 'Completed',
  date: '04 Mar, 2020',
  type: 'Buy',
  coin: 'Litecoin',
  value: '0.00214 LTC',
  usd: '$ 9067.62'
}, {
  id: '#SK3217',
  status: 'Pending',
  date: '05 Mar, 2020',
  type: 'Sell',
  coin: 'Bitcoin',
  value: '1.00952 BTC',
  usd: '$ 9067.62'
}, {
  id: '#SK3218',
  status: 'Completed',
  date: '03 Mar, 2020',
  type: 'Sell',
  coin: 'Ethereum',
  value: '0.00413 ETH',
  usd: '$ 2123.01'
}, {
  id: '#SK3219',
  status: 'Completed',
  date: '08 Mar, 2020',
  type: 'Buy',
  coin: 'Litecoin',
  value: '1.00124 LTC',
  usd: '$ 1802.62'
}, {
  id: '#SK3220',
  status: 'Pending',
  date: '06 Mar, 2020',
  type: 'Sell',
  coin: 'Ethereum',
  value: '0.00413 ETH',
  usd: '$ 2123.01'
}, {
  id: '#SK3221',
  status: 'Failed',
  date: '05 Mar, 2020',
  type: 'Buy',
  coin: 'Bitcoin',
  value: '1.00952 BTC',
  usd: '$ 9067.62'
}, {
  id: '#SK3222',
  status: 'Completed',
  date: '03 Mar, 2020',
  type: 'Buy',
  coin: 'Ethereum',
  value: '0.00413 ETH',
  usd: '$ 2123.01'
}, {
  id: '#SK3223',
  status: 'Pending',
  date: '10 Mar, 2020',
  type: 'Buy',
  coin: 'Bitcoin',
  value: '1.00952 BTC',
  usd: '$ 9067.62'
}, {
  id: '#SK3224',
  status: 'Pending',
  date: '18 Mar, 2020',
  type: 'Buy',
  coin: 'Litecoin',
  value: '0.00224 LTC',
  usd: '$ 1773.01'
}, {
  id: '#SK3225',
  status: 'Completed',
  date: '03 Mar, 2020',
  type: 'Buy',
  coin: 'Bitcoin',
  value: '1.00952 BTC',
  usd: '$ 9423.73'
}, {
  id: '#SK3226',
  status: 'Pending',
  date: '15 Mar, 2020',
  type: 'Sell',
  coin: 'Ethereum',
  value: '0.00413 ETH',
  usd: '$ 2123.01'
}, {
  id: '#SK3227',
  status: 'Completed',
  date: '03 Mar, 2020',
  type: 'Sell',
  coin: 'Bitcoin',
  value: '1.00952 BTC',
  usd: '$ 9067.62'
}, {
  id: '#SK3228',
  status: 'Failed',
  date: '01 Mar, 2020',
  type: 'Sell',
  coin: 'Litecoin',
  value: '1.00217 LTC',
  usd: '$ 9067.62'
}];


/***/ }),

/***/ 66909:
/*!***************************************!*\
  !*** ./src/app/core/data/customer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customersData: () => (/* binding */ customersData)
/* harmony export */ });
const customersData = [{
  id: 1,
  username: 'Stephen Rash',
  phone: '325-250-1106',
  email: 'StephenRash@teleworm.us',
  address: '2470 Grove Street Bethpage, NY 11714',
  rating: '4.2',
  balance: '$5,412',
  date: '07 Oct, 2019'
}, {
  id: 2,
  username: 'Juan Mays',
  phone: '443-523-4726',
  email: 'JuanMays@armyspy.com',
  address: '3755 Harron Drive Salisbury, MD 21875',
  rating: '4.0',
  balance: '$5,632',
  date: '06 Oct, 2019'
}, {
  id: 3,
  username: 'Scott Henry',
  phone: '704-629-9535',
  email: 'ScottHenry@jourrapide.com',
  address: '3632 Snyder Avenue Bessemer City, NC 28016',
  rating: '4.4',
  balance: '$7,523',
  date: '06 Oct, 2019'
}, {
  id: 4,
  username: 'Cody Menendez',
  phone: '701-832-5838',
  email: 'CodyMenendez@armyspy.com',
  address: '4401 Findley Avenue Minot, ND 58701',
  rating: '4.1',
  balance: '$6,325',
  date: '05 Oct, 2019'
}, {
  id: 5,
  username: 'Jason Merino',
  phone: '706-219-4095',
  email: 'JasonMerino@dayrep.com',
  address: '3159 Holly Street Cleveland, GA 30528',
  rating: '3.8',
  balance: '$4,523',
  date: '04 Oct, 2019'
}, {
  id: 6,
  username: 'Kyle Aquino',
  phone: '415-232-5443',
  email: 'KyleAquino@teleworm.us',
  address: '4861 Delaware Avenue San Francisco, CA 94143',
  rating: '4.0',
  balance: '$5,412',
  date: '03 Oct, 2019'
}, {
  id: 7,
  username: 'David Gaul',
  phone: '314-483-4679',
  email: 'DavidGaul@teleworm.us',
  address: '1207 Cottrill Lane Stlouis, MO 63101',
  rating: '4.2',
  balance: '$6,180',
  date: '02 Oct, 2019'
}, {
  id: 8,
  username: 'John McCray',
  phone: '253-661-7551',
  email: 'JohnMcCray@armyspy.com',
  address: '3309 Horizon Circle Tacoma, WA 98423',
  rating: '4.1',
  balance: '$5,2870',
  date: '02 Oct, 2019'
}, {
  id: 9,
  username: 'Kyle Aquino',
  phone: '415-232-5443',
  email: 'KyleAquino@teleworm.us',
  address: '4861 Delaware Avenue San Francisco, CA 94143',
  rating: '4.0',
  balance: '$5,412',
  date: '03 Oct, 2019'
}, {
  id: 10,
  username: 'David Gaul',
  phone: '314-483-4679',
  email: 'DavidGaul@teleworm.us',
  address: '1207 Cottrill Lane Stlouis, MO 63101',
  rating: '4.2',
  balance: '$6,180',
  date: '02 Oct, 2019'
}, {
  id: 11,
  username: 'John McCray',
  phone: '253-661-7551',
  email: 'JohnMcCray@armyspy.com',
  address: '3309 Horizon Circle Tacoma, WA 98423',
  rating: '4.1',
  balance: '$5,2870',
  date: '02 Oct, 2019'
}, {
  id: 12,
  username: 'Scott Henry',
  phone: '704-629-9535',
  email: 'ScottHenry@jourrapide.com',
  address: '3632 Snyder Avenue Bessemer City, NC 28016',
  rating: '4.4',
  balance: '$7,523',
  date: '06 Oct, 2019'
}];


/***/ }),

/***/ 64629:
/*!************************************!*\
  !*** ./src/app/core/data/email.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emailData: () => (/* binding */ emailData)
/* harmony export */ });
const emailData = [{
  id: 1,
  title: 'Waters, Jacobs and Ortiz',
  // tslint:disable-next-line: max-line-length
  subject: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  date: '09-Dec',
  category: "all"
}, {
  id: 2,
  title: 'Ernser, Bernier and Schaden',
  // tslint:disable-next-line: max-line-length
  subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  date: '29-Apr',
  category: "starred",
  isIcon: true
}, {
  id: 3,
  title: 'Davis, Pouros and Welch',
  // tslint:disable-next-line: max-line-length
  subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
  date: '12-Jun',
  category: "starred",
  isIcon: true
}, {
  id: 4,
  title: 'O\'Keefe Group\'',
  // tslint:disable-next-line: max-line-length
  subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
  date: '01-Mar',
  category: "all"
}, {
  id: 5,
  title: 'Batz, Abbott and Jakubowski',
  // tslint:disable-next-line: max-line-length
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
  date: '12-Oct',
  category: "all"
}, {
  id: 6,
  unread: true,
  title: 'Mertz and Sons',
  subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  date: '09-May',
  category: "important"
}, {
  id: 7,
  title: 'Thompson Group',
  // tslint:disable-next-line: max-line-length
  subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  date: '26-Dec',
  category: "all"
}, {
  id: 8,
  title: 'Jerde, Okuneva and Klocko',
  // tslint:disable-next-line: max-line-length
  subject: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  date: '02-Feb',
  category: "all"
}, {
  id: 9,
  title: 'Boyer-Lubowitz',
  subject: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
  date: '13-Nov',
  category: "all"
}, {
  id: 10,
  title: 'Gutmann, McLaughlin and Nienow',
  // tslint:disable-next-line: max-line-length
  subject: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  date: '25-Jul',
  category: "draft"
}, {
  id: 11,
  title: 'Lebsack-Schmitt',
  // tslint:disable-next-line: max-line-length
  subject: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '30-Sep',
  category: "draft"
}, {
  id: 12,
  unread: true,
  title: 'Jacobi-Greenholt',
  // tslint:disable-next-line: max-line-length
  subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  date: '16-May',
  category: "all"
}, {
  id: 13,
  title: 'Kutch, Jacobson and Kozey',
  // tslint:disable-next-line: max-line-length
  subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
  date: '06-Apr',
  category: "draft"
}, {
  id: 14,
  title: 'Bernhard and Sons',
  // tslint:disable-next-line: max-line-length
  subject: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
  date: '09-Feb',
  category: "all"
}, {
  id: 15,
  title: 'Kunze Inc',
  // tslint:disable-next-line: max-line-length
  subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  date: '11-May',
  category: "draft"
}, {
  id: 16,
  title: 'Miller Group',
  subject: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
  date: '19-Jul',
  category: "sent-mail"
}, {
  id: 17,
  title: 'Durgan and Sons',
  // tslint:disable-next-line: max-line-length
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: '23-Dec',
  category: "all"
}, {
  id: 18,
  title: 'Pfannerstill-Kautzer',
  // tslint:disable-next-line: max-line-length
  subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  date: '20-Jan',
  category: "all"
}, {
  id: 19,
  title: 'O\'Reilly-Ferry',
  subject: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  date: '29-Apr',
  category: "all"
}, {
  id: 20,
  title: 'Shields, Jast and Towne',
  // tslint:disable-next-line: max-line-length
  subject: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  date: '16-Feb',
  category: "trash"
}, {
  id: 21,
  title: 'Mayert-Dickinson',
  // tslint:disable-next-line: max-line-length
  subject: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '30-Dec',
  category: "trash"
}, {
  id: 22,
  title: 'Little LLC',
  // tslint:disable-next-line: max-line-length
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: '07-Mar',
  category: "trash"
}, {
  id: 23,
  title: 'Crist, Blanda and Wuckert',
  subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
  date: '13-Aug',
  category: "all"
}, {
  id: 24,
  title: 'Williamson-Sanford',
  subject: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
  date: '09-Jul',
  category: "all"
}, {
  id: 25,
  title: 'Gleason-Shanahan',
  // tslint:disable-next-line: max-line-length
  subject: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
  date: '13-May',
  category: "all"
}, {
  id: 26,
  unread: true,
  title: 'Franecki-Hodkiewicz',
  // tslint:disable-next-line: max-line-length
  subject: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  date: '15-Mar',
  category: "all"
}, {
  id: 27,
  title: 'Bailey-Simonis',
  subject: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: '18-Sep',
  category: "all"
}, {
  id: 28,
  title: 'Grant-Volkman',
  // tslint:disable-next-line: max-line-length
  subject: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
  date: '13-Mar',
  category: "all"
}, {
  id: 29,
  title: 'Kshlerin-Cole',
  // tslint:disable-next-line: max-line-length
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '21-Nov',
  category: "all"
}, {
  id: 30,
  title: 'Pouros-Funk',
  // tslint:disable-next-line: max-line-length
  subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
  date: '05-Jun',
  category: "all"
}, {
  id: 31,
  title: 'Ziemann-Denesik',
  subject: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  date: '14-Apr',
  category: "all"
}, {
  id: 32,
  title: 'Johnson LLC',
  // tslint:disable-next-line: max-line-length
  subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  date: '30-Nov',
  category: "all"
}, {
  id: 33,
  title: 'Cummings-Ferry',
  // tslint:disable-next-line: max-line-length
  subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
  date: '30-Nov',
  category: "all"
}, {
  id: 34,
  title: 'Weimann-Lueilwitz',
  // tslint:disable-next-line: max-line-length
  subject: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  date: '06-Nov',
  category: "all"
}, {
  id: 35,
  unread: true,
  title: 'Zieme, Krajcik and Champlin',
  // tslint:disable-next-line: max-line-length
  subject: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  date: '28-Mar',
  category: "all"
}, {
  id: 36,
  title: 'Toy-Kunde',
  // tslint:disable-next-line: max-line-length
  subject: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
  date: '27-Dec',
  category: "all"
}, {
  id: 37,
  title: 'Mosciski and Sons',
  subject: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
  date: '04-Feb',
  category: "all"
}, {
  id: 38,
  title: 'Lowe, Windler and Wolff',
  // tslint:disable-next-line: max-line-length
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '13-Mar',
  category: "all"
}, {
  id: 39,
  title: 'Bruen-Bashirian',
  // tslint:disable-next-line: max-line-length
  subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
  date: '04-Mar',
  category: "all"
}, {
  id: 40,
  title: 'Nader, Hickle and Ullrich',
  // tslint:disable-next-line: max-line-length
  subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  date: '28-May',
  category: "all"
}, {
  id: 41,
  title: 'Reilly-Homenick',
  // tslint:disable-next-line: max-line-length
  subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  date: '18-Jan',
  category: "all"
}, {
  id: 42,
  unread: true,
  title: 'O\'Connell and Sons',
  // tslint:disable-next-line: max-line-length
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  date: '03-Aug',
  category: "all"
}];


/***/ }),

/***/ 19261:
/*!*******************************************!*\
  !*** ./src/app/core/data/file-manager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recentFiles: () => (/* binding */ recentFiles)
/* harmony export */ });
const recentFiles = [{
  id: 1,
  name: 'index.html',
  date: '12-10-2020, 09:45',
  size: '09 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-file-document'
}, {
  id: 2,
  name: 'Project-A.zip',
  date: '11-10-2020, 17:05',
  size: '115 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-folder-zip   text-warning'
}, {
  id: 3,
  name: 'Img-1.jpeg',
  date: '11-10-2020, 13:26',
  size: '86 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-image text-muted'
}, {
  id: 4,
  name: 'update list.txt',
  date: '10-10-2020, 11:32',
  size: '08 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-text-box text-muted'
}, {
  id: 5,
  name: 'Project B',
  date: '10-10-2020, 10:51',
  size: '72 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-folder text-warning'
}, {
  id: 6,
  name: 'Changes list.txt',
  date: '09-10-2020, 17:05',
  size: '07 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-text-box text-muted'
}, {
  id: 7,
  name: 'Img-2.png',
  date: '09-10-2020, 15:12',
  size: '31 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-image text-success'
}, {
  id: 8,
  name: 'Project C',
  date: '09-10-2020, 10:11',
  size: '20 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'mdi mdi-folder text-warning'
}, {
  id: 9,
  name: 'starter-page.html',
  date: '08-10-2020, 03:22',
  size: '11 KB',
  actions: ['Open', 'Edit', 'Rename', 'Remove'],
  icon: 'bx bxs-file'
}];


/***/ }),

/***/ 17289:
/*!************************************!*\
  !*** ./src/app/core/data/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidateList: () => (/* reexport safe */ _candidate__WEBPACK_IMPORTED_MODULE_9__.CandidateList),
/* harmony export */   JobApplydata: () => (/* reexport safe */ _jobapply__WEBPACK_IMPORTED_MODULE_12__.JobApplydata),
/* harmony export */   JobGriddata: () => (/* reexport safe */ _jobgrid__WEBPACK_IMPORTED_MODULE_8__.JobGriddata),
/* harmony export */   JobListdata: () => (/* reexport safe */ _joblist__WEBPACK_IMPORTED_MODULE_7__.JobListdata),
/* harmony export */   cartData: () => (/* reexport safe */ _cart__WEBPACK_IMPORTED_MODULE_3__.cartData),
/* harmony export */   chatData: () => (/* reexport safe */ _chat__WEBPACK_IMPORTED_MODULE_11__.chatData),
/* harmony export */   chatMessagesData: () => (/* reexport safe */ _chat__WEBPACK_IMPORTED_MODULE_11__.chatMessagesData),
/* harmony export */   customersData: () => (/* reexport safe */ _customer__WEBPACK_IMPORTED_MODULE_2__.customersData),
/* harmony export */   emailData: () => (/* reexport safe */ _email__WEBPACK_IMPORTED_MODULE_15__.emailData),
/* harmony export */   listData: () => (/* reexport safe */ _invoices__WEBPACK_IMPORTED_MODULE_10__.listData),
/* harmony export */   memberList: () => (/* reexport safe */ _kanban__WEBPACK_IMPORTED_MODULE_13__.memberList),
/* harmony export */   orders: () => (/* reexport safe */ _cryptoOrder__WEBPACK_IMPORTED_MODULE_14__.orders),
/* harmony export */   ordersData: () => (/* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.ordersData),
/* harmony export */   projectData: () => (/* reexport safe */ _projectdata__WEBPACK_IMPORTED_MODULE_4__.projectData),
/* harmony export */   recentFiles: () => (/* reexport safe */ _file_manager__WEBPACK_IMPORTED_MODULE_0__.recentFiles),
/* harmony export */   tasks: () => (/* reexport safe */ _kanban__WEBPACK_IMPORTED_MODULE_13__.tasks),
/* harmony export */   userGridData: () => (/* reexport safe */ _usergrid__WEBPACK_IMPORTED_MODULE_5__.userGridData),
/* harmony export */   userList: () => (/* reexport safe */ _userlist__WEBPACK_IMPORTED_MODULE_6__.userList)
/* harmony export */ });
/* harmony import */ var _file_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-manager */ 19261);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ 16725);
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer */ 66909);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ 39691);
/* harmony import */ var _projectdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectdata */ 20584);
/* harmony import */ var _usergrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usergrid */ 78298);
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userlist */ 81438);
/* harmony import */ var _joblist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./joblist */ 70958);
/* harmony import */ var _jobgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jobgrid */ 426);
/* harmony import */ var _candidate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./candidate */ 25392);
/* harmony import */ var _invoices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invoices */ 43133);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat */ 48259);
/* harmony import */ var _jobapply__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobapply */ 29224);
/* harmony import */ var _kanban__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kanban */ 93698);
/* harmony import */ var _cryptoOrder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cryptoOrder */ 53798);
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./email */ 64629);


















/***/ }),

/***/ 43133:
/*!***************************************!*\
  !*** ./src/app/core/data/invoices.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listData: () => (/* binding */ listData)
/* harmony export */ });
const listData = [{
  name: 'Marion Burton',
  id: '#14251',
  title: 'Skote Dashboard UI',
  amount: '$1455',
  date: '10 Oct, 19'
}, {
  image: 'assets/images/users/avatar-2.jpg',
  name: 'Francis Witte',
  id: '#14252',
  title: 'Brand logo design',
  amount: '$1024',
  date: '11 Oct, 19'
}, {
  image: 'assets/images/users/avatar-7.jpg',
  name: 'Joseph Flint',
  id: '#14253',
  title: 'Landing page Design',
  amount: '$1189',
  date: '12 Oct, 19'
}, {
  image: 'assets/images/users/avatar-8.jpg',
  name: 'Larry Nielsen',
  id: '#14254',
  title: 'Redesign - Landing page',
  amount: '$1254',
  date: '12 Oct, 19'
}, {
  image: 'assets/images/users/avatar-5.jpg',
  name: 'Mark Evans',
  id: '#14255',
  title: 'Blog Template Design',
  amount: '$1024',
  date: '11 Oct, 19'
}, {
  name: 'Timothy Lee',
  id: '#14256',
  title: 'Landing page Design',
  amount: '$1189',
  date: '13 Oct, 19'
}, {
  image: 'assets/images/users/avatar-1.jpg',
  name: 'Stanley Bland',
  id: '#14257',
  title: 'Landing page UI',
  amount: '$1148',
  date: '14 Oct, 19'
}, {
  name: 'Tommy Wilson',
  id: '#14258',
  title: 'Redesign - Dashboard',
  amount: '$1259',
  date: '15 Oct, 19'
}, {
  image: 'assets/images/users/avatar-4.jpg',
  name: 'Louis Brandon',
  id: '#14257',
  title: 'Email Template UI',
  amount: '$1355',
  date: '15 Oct, 19'
}];


/***/ }),

/***/ 29224:
/*!***************************************!*\
  !*** ./src/app/core/data/jobapply.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobApplydata: () => (/* binding */ JobApplydata)
/* harmony export */ });
const JobApplydata = [{
  id: 1,
  title: "Magento Developer",
  company: "Creative Agency",
  type: "Full Time",
  date: "02 June 2021",
  status: "Active"
}, {
  id: 2,
  title: "Apple School & College",
  company: "Themesbrand",
  type: "Part Time",
  date: "15 June 2021",
  status: "New"
}, {
  id: 3,
  title: "Marketing Director",
  company: "Web Technology pvt.Ltd",
  type: "Full Time",
  date: "02 June 2021",
  status: "Close"
}, {
  id: 4,
  title: "HTML Developer",
  company: "Skote Technology pvt.Ltd",
  type: "Full Time",
  date: "02 June 2021",
  status: "Active"
}, {
  id: 5,
  title: "Product Sales Specialist",
  company: "New Technology pvt.Ltd",
  type: "Part Time",
  date: "25 June 2021",
  status: "New"
}, {
  id: 6,
  title: "Magento Developer",
  company: "Themesbrand",
  type: "Freelance",
  date: "25 June 2021",
  status: "Close"
}, {
  id: 7,
  title: "Magento Developer",
  company: "Web Technology pvt.Ltd",
  type: "Part Time",
  date: "25 June 2021",
  status: "Active"
}, {
  id: 8,
  title: "Magento Developer",
  company: "Web Technology pvt.Ltd",
  type: "Full Time",
  date: "02 June 2021",
  status: "Close"
}, {
  id: 9,
  title: "Magento Developer",
  company: "Adobe Agency",
  type: "Freelance",
  date: "02 June 2021",
  status: "New"
}, {
  id: 10,
  title: "Magento Developer",
  company: "Web Technology pvt.Ltd",
  type: "Internship",
  date: "02 June 2021",
  status: "Active"
}];


/***/ }),

/***/ 426:
/*!**************************************!*\
  !*** ./src/app/core/data/jobgrid.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobGriddata: () => (/* binding */ JobGriddata)
/* harmony export */ });
const JobGriddata = [{
  id: 1,
  image: "assets/images/companies/adobe.svg",
  title: "Magento Developer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 2,
  image: "assets/images/companies/adobe-photoshop.svg",
  title: "Product Designer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 3,
  image: "assets/images/companies/airbnb.svg",
  title: "Marketing Director",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 4,
  image: "assets/images/companies/amazon.svg",
  title: "Project Manager",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 5,
  image: "assets/images/companies/flutter.svg",
  title: "HTML Developer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 6,
  image: "assets/images/companies/mailchimp.svg",
  title: "Business Associate",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 7,
  image: "assets/images/companies/line.svg",
  title: "Product Sales Specialist",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 8,
  image: "assets/images/companies/spotify.svg",
  title: "Magento Developer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 9,
  image: "assets/images/companies/wordpress.svg",
  title: "Magento Developer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 10,
  image: "assets/images/companies/upwork.svg",
  title: "Magento Developer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 11,
  image: "assets/images/companies/sass.svg",
  title: "Magento Developer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}, {
  id: 12,
  image: "assets/images/companies/reddit.svg",
  title: "Magento Developer",
  year: "0-2",
  company: "Skote Technology Pvt.Ltd",
  location: "California",
  price: "$250 - $800"
}];


/***/ }),

/***/ 70958:
/*!**************************************!*\
  !*** ./src/app/core/data/joblist.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobListdata: () => (/* binding */ JobListdata)
/* harmony export */ });
const JobListdata = [{
  id: 1,
  title: "Magento Developer",
  name: "Themesbrand",
  location: "California",
  experience: "0-2 Years",
  position: 2,
  type: "Full Time",
  type_color: "success",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Active",
  status_color: "success"
}, {
  id: 2,
  title: "Product Designer",
  name: "Web Technology pvt.ltd",
  location: "California",
  experience: "1-2 Years",
  position: 3,
  type: "Part Time",
  type_color: "danger",
  posted_date: "15 June 2021",
  last_date: "28 June 2021",
  status: "New",
  status_color: "info"
}, {
  id: 3,
  title: "Marketing Director",
  name: "Creative Agency",
  location: "Phoenix",
  experience: "-",
  position: 5,
  type: "Full Time",
  type_color: "success",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Close",
  status_color: "danger"
}, {
  id: 4,
  title: "HTML Developer",
  name: "Web Technology pvt.ltd",
  location: "California",
  experience: "0-4 Years",
  position: 8,
  type: "Full Time",
  type_color: "success",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Active",
  status_color: "success"
}, {
  id: 5,
  title: "Product Sales Specialist",
  name: "Skote Technology pvt.Ltd",
  location: "Louisiana",
  experience: "5+ Years",
  position: 1,
  type: "Part Time",
  type_color: "danger",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "New",
  status_color: "info"
}, {
  id: 6,
  title: "Magento Developer",
  name: "New Technology pvt.ltd",
  location: "Oakridge Lane Richardson",
  experience: "0-2 Years",
  position: 2,
  type: "Freelance",
  type_color: "info",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "New",
  status_color: "info"
}, {
  id: 7,
  title: "Business Associate",
  name: "Web Technology pvt.ltd",
  location: "California",
  experience: "0-2 Years",
  position: 2,
  type: "Full Time",
  type_color: "success",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Active",
  status_color: "success"
}, {
  id: 8,
  title: "Magento Developer",
  name: "Adobe Agency",
  location: "California",
  experience: "0-2 Years",
  position: 2,
  type: "Full Time",
  type_color: "success",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Close",
  status_color: "danger"
}, {
  id: 9,
  title: "HTML Developer",
  name: "Web Technology pvt.ltd",
  location: "California",
  experience: "0-2 Years",
  position: 2,
  type: "Part Time",
  type_color: "danger",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "New",
  status_color: "info"
}, {
  id: 10,
  title: "Marketing Director",
  name: "Web Technology pvt.ltd",
  location: "California",
  experience: "0-2 Years",
  position: 2,
  type: "Internship",
  type_color: "warning",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Active",
  status_color: "success"
}, {
  id: 11,
  title: "Marketing Director",
  name: "Web Technology pvt.ltd",
  location: "California",
  experience: "0-2 Years",
  position: 2,
  type: "Internship",
  type_color: "warning",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Active",
  status_color: "success"
}, {
  id: 12,
  title: "Marketing Director",
  name: "Web Technology pvt.ltd",
  location: "California",
  experience: "0-2 Years",
  position: 2,
  type: "Internship",
  type_color: "warning",
  posted_date: "02 June 2021",
  last_date: "25 June 2021",
  status: "Active",
  status_color: "success"
}];


/***/ }),

/***/ 93698:
/*!*************************************!*\
  !*** ./src/app/core/data/kanban.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memberList: () => (/* binding */ memberList),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
const tasks = [{
  id: 1,
  title: 'Topnav layout design',
  date: '14 Oct, 2019',
  task: 'Waiting',
  user: ['assets/images/users/avatar-4.jpg', 'assets/images/users/avatar-5.jpg'],
  budget: 145,
  status: 'upcoming'
}, {
  id: 2,
  title: 'Create a New Landing UI',
  date: '15 Oct, 2019',
  task: 'Approved',
  user: ['assets/images/users/avatar-6.jpg', 'assets/images/users/avatar-7.jpg'],
  budget: 112,
  status: 'upcoming'
}, {
  id: 3,
  title: 'Create a Skote Logo',
  date: '15 Oct, 2019',
  task: 'Waiting',
  user: ['assets/images/users/avatar-5.jpg'],
  budget: 86,
  status: 'upcoming'
}, {
  id: 4,
  title: 'Brand logo design',
  date: '12 Oct, 2019',
  task: 'Complete',
  user: ['assets/images/users/avatar-6.jpg'],
  budget: 132,
  status: 'inprogress'
}, {
  id: 5,
  title: 'Create a Blog Template UI',
  date: '13 Oct, 2019',
  task: 'Pending',
  user: ['assets/images/users/avatar-8.jpg', 'assets/images/users/avatar-1.jpg'],
  budget: 103,
  status: 'inprogress'
}, {
  id: 6,
  title: 'Skote Dashboard UI',
  date: '13 Oct, 2019',
  task: 'Complete',
  user: ['assets/images/users/avatar-2.jpg'],
  budget: 94,
  status: 'inprogress'
}, {
  id: 7,
  title: 'Redesign - Landing page',
  date: '10 Oct, 2019',
  task: 'Complete',
  user: ['assets/images/users/avatar-4.jpg'],
  budget: 145,
  groupId: 3,
  status: 'completed'
}, {
  id: 8,
  title: 'Multipurpose Landing',
  date: '09 Oct, 2019',
  task: 'Complete',
  user: ['assets/images/users/avatar-6.jpg', 'assets/images/users/avatar-7.jpg'],
  budget: 92,
  groupId: 3,
  status: 'completed'
}, {
  id: 9,
  title: 'Skote landing Psd',
  date: '15 Oct, 2019',
  task: 'Waiting',
  user: ['assets/images/users/avatar-5.jpg'],
  budget: 86,
  groupId: 3,
  status: 'completed'
}];
const memberList = [{
  id: 1,
  profile: "assets/images/users/avatar-1.jpg",
  name: "Albert Rodarte",
  checked: false
}, {
  id: 2,
  profile: "assets/images/users/avatar-2.jpg",
  name: "Hannah Glover",
  checked: false
}, {
  id: 3,
  profile: "assets/images/users/avatar-3.jpg",
  name: "Adrian Rodarte",
  checked: false
}, {
  id: 4,
  profile: "assets/images/users/avatar-4.jpg",
  name: "Frank Hamilton",
  checked: false
}, {
  id: 5,
  profile: "assets/images/users/avatar-5.jpg",
  name: "Justin Howard",
  checked: false
}, {
  id: 6,
  profile: "assets/images/users/avatar-6.jpg",
  name: "Michael Lawrence",
  checked: false
}, {
  id: 7,
  profile: "assets/images/users/avatar-7.jpg",
  name: "Oliver Sharp",
  checked: false
}, {
  id: 8,
  profile: "assets/images/users/avatar-8.jpg",
  name: "Richard Simpson",
  checked: false
}];


/***/ }),

/***/ 16725:
/*!************************************!*\
  !*** ./src/app/core/data/order.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ordersData: () => (/* binding */ ordersData)
/* harmony export */ });
const ordersData = [{
  id: '#SK2540',
  name: 'Neal Matthews',
  date: '2019-10-07',
  total: '$400',
  status: 'Paid',
  payment_icon: 'fab fa-cc-mastercard',
  payment: 'Mastercard',
  index: 1
}, {
  id: '#SK2541',
  name: 'Jamal Burnett',
  date: '2019-10-07',
  total: '$380',
  status: 'Chargeback',
  payment_icon: 'fab fa-cc-visa',
  payment: 'Visa',
  index: 2
}, {
  id: '#SK2542',
  name: 'Juan Mitchell',
  date: '2019-10-06',
  total: '$384',
  status: 'Paid',
  payment_icon: 'fab fa-cc-paypal',
  payment: 'Paypal',
  index: 3
}, {
  id: '#SK2543',
  name: 'Barry Dick',
  date: '2019-10-05',
  total: '$412',
  status: 'Paid',
  payment_icon: 'fab fa-cc-mastercard',
  payment: 'Mastercard',
  index: 4
}, {
  id: '#SK2544',
  name: 'Ronald Taylor',
  date: '2019-10-04',
  total: '$404',
  status: 'Refund',
  payment_icon: 'fab fa-cc-visa',
  payment: 'Visa',
  index: 5
}, {
  id: '#SK2545',
  name: 'Jacob Hunter',
  date: '2019-10-04',
  total: '$392',
  status: 'Paid',
  payment_icon: 'fab fa-cc-paypal',
  payment: 'Paypal',
  index: 6
}, {
  id: '#SK2546',
  name: 'William Cruz',
  date: '2019-10-03',
  total: '$374',
  status: 'Paid',
  payment_icon: 'fas fa-money-bill-alt',
  payment: 'COD',
  index: 7
}, {
  id: '#SK2547',
  name: 'Dustin Moser',
  date: '2019-10-02',
  total: '$350',
  status: 'Paid',
  payment_icon: 'fab fa-cc-mastercard',
  payment: 'Mastercard',
  index: 8
}, {
  id: '#SK2548',
  name: 'Clark Benson',
  date: '2019-10-01',
  total: '$345',
  status: 'Refund',
  payment_icon: 'fab fa-cc-visa',
  payment: 'Visa',
  index: 9
}];


/***/ }),

/***/ 20584:
/*!******************************************!*\
  !*** ./src/app/core/data/projectdata.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectData: () => (/* binding */ projectData)
/* harmony export */ });
const projectData = [{
  id: 1,
  image: 'assets/images/companies/img-1.png',
  text: 'New admin Design',
  subtext: 'It will be as simple as Occidental',
  users: ['assets/images/users/avatar-2.jpg', 'assets/images/users/avatar-1.jpg'],
  status: 'Completed',
  date: '15 Oct, 19',
  comment: 214
}, {
  id: 2,
  image: 'assets/images/companies/img-2.png',
  text: 'Brand logo design',
  subtext: 'To achieve it would be necessary',
  users: ['assets/images/users/avatar-3.jpg'],
  status: 'Pending',
  date: '22 Oct, 19',
  comment: 183
}, {
  id: 3,
  image: 'assets/images/companies/img-3.png',
  text: 'New Landing Design',
  subtext: 'For science, music, sport, etc',
  users: ['assets/images/users/avatar-5.jpg', 'assets/images/users/avatar-4.jpg'],
  status: 'Delay',
  date: '13 Oct, 19',
  comment: 175
}, {
  id: 4,
  image: 'assets/images/companies/img-4.png',
  text: 'Redesign - Landing page',
  subtext: 'If several languages coalesce',
  users: ['assets/images/users/avatar-6.jpg', 'assets/images/users/avatar-4.jpg', 'assets/images/users/avatar-3.jpg'],
  status: 'Completed',
  date: '14 Oct, 19',
  comment: 202
}, {
  id: 5,
  image: 'assets/images/companies/img-5.png',
  text: 'Skote Dashboard UI',
  subtext: 'Separate existence is a myth',
  users: ['assets/images/users/avatar-7.jpg', 'assets/images/users/avatar-8.jpg'],
  status: 'Completed',
  date: '13 Oct, 19',
  comment: 194
}, {
  id: 6,
  image: 'assets/images/companies/img-6.png',
  text: 'Blog Template UI',
  subtext: 'For science, music, sport, etc',
  users: ['assets/images/users/avatar-6.jpg'],
  status: 'Pending',
  date: '24 Oct, 19',
  comment: 122
}, {
  id: 7,
  image: 'assets/images/companies/img-3.png',
  text: 'Multipurpose Landing',
  subtext: 'It will be as simple as Occidental',
  users: ['assets/images/users/avatar-3.jpg'],
  status: 'Delay',
  date: '15 Oct, 19',
  comment: 214
}, {
  id: 8,
  image: 'assets/images/companies/img-4.png',
  text: 'App Landing UI',
  subtext: 'For science, music, sport, etc',
  users: ['assets/images/users/avatar-4.jpg'],
  status: 'Completed',
  date: '11 Oct, 19',
  comment: 185
}, {
  id: 9,
  image: 'assets/images/companies/img-2.png',
  text: 'New admin Design',
  subtext: 'Their most common words.',
  users: ['assets/images/users/avatar-5.jpg'],
  status: 'Completed',
  date: '12 Oct, 19',
  comment: 106
}, {
  id: 10,
  image: 'assets/images/companies/img-6.png',
  text: 'Blog Template UI',
  subtext: 'For science, music, sport, etc',
  users: ['assets/images/users/avatar-6.jpg'],
  status: 'Pending',
  date: '24 Oct, 19',
  comment: 122
}, {
  id: 11,
  image: 'assets/images/companies/img-3.png',
  text: 'Multipurpose Landing',
  subtext: 'It will be as simple as Occidental',
  users: ['assets/images/users/avatar-3.jpg'],
  status: 'Delay',
  date: '15 Oct, 19',
  comment: 214
}, {
  id: 12,
  image: 'assets/images/companies/img-4.png',
  text: 'Redesign - Landing page',
  subtext: 'If several languages coalesce',
  users: ['assets/images/users/avatar-6.jpg', 'assets/images/users/avatar-4.jpg', 'assets/images/users/avatar-3.jpg'],
  status: 'Completed',
  date: '14 Oct, 19',
  comment: 202
}];


/***/ }),

/***/ 78298:
/*!***************************************!*\
  !*** ./src/app/core/data/usergrid.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userGridData: () => (/* binding */ userGridData)
/* harmony export */ });
const userGridData = [{
  id: 1,
  name: 'David McHenry',
  designation: 'UI/UX Designer',
  projects: ['Photoshop', 'illustrator'],
  email: 'david@skote.com'
}, {
  id: 2,
  image: 'assets/images/users/avatar-2.jpg',
  name: 'Frank Kirk',
  designation: 'Frontend Developer',
  projects: ['Html', 'Css', '2 + more'],
  email: 'frank@skote.com'
}, {
  id: 3,
  image: 'assets/images/users/avatar-3.jpg',
  name: 'Rafael Morales',
  designation: 'Backend Developer',
  projects: ['Php', 'Java', 'Python'],
  email: 'Rafael@skote.com'
}, {
  id: 4,
  name: 'Mark Ellison',
  designation: 'Full Stack Developer',
  projects: ['Ruby', 'Php', '2 + more'],
  email: 'mark@skote.com'
}, {
  id: 5,
  image: 'assets/images/users/avatar-4.jpg',
  name: 'Minnie Walter',
  designation: 'Frontend Developer',
  projects: ['Html', 'Css', '2 + more'],
  email: 'minnie@skote.com'
}, {
  id: 6,
  image: 'assets/images/users/avatar-5.jpg',
  name: 'Shirley Smith',
  designation: 'UI/UX Designer',
  projects: ['Photoshop', 'illustrator'],
  email: 'shirley@skote.com'
}, {
  id: 7,
  name: 'John Santiago',
  designation: 'Full Stack Developer',
  projects: ['Ruby', 'Php', '2 + more'],
  email: 'john@skote.com'
}, {
  id: 8,
  image: 'assets/images/users/avatar-5.jpg',
  name: 'Colin Melton',
  designation: 'Backend Developer',
  projects: ['Php', 'Java', 'Python'],
  email: 'colin@skote.com'
}];


/***/ }),

/***/ 81438:
/*!***************************************!*\
  !*** ./src/app/core/data/userlist.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userList: () => (/* binding */ userList)
/* harmony export */ });
const userList = [{
  id: 1,
  name: "David McHenry",
  position: "UI/UX Designer",
  email: "david@skote.com",
  tags: ['Photoshop', 'illustrator'],
  project: "152",
  isSelected: false
}, {
  id: 2,
  profile: "assets/images/users/avatar-2.jpg",
  name: "Frank Kirk",
  position: "Frontend Developer",
  email: "frank@skote.com",
  tags: ['Html', 'Css', '2 + more'],
  project: "132",
  isSelected: false
}, {
  id: 3,
  profile: "assets/images/users/avatar-3.jpg",
  name: "Rafael Morales",
  position: "Backend Developer",
  email: "Rafael@skote.com",
  tags: ['Php', 'Java', 'Python'],
  project: "112",
  isSelected: false
}, {
  id: 4,
  name: "Mark Ellison",
  position: "Full Stack Developer",
  email: "mark@skote.com",
  tags: ['Ruby', 'Php', '2 + more'],
  project: "121",
  isSelected: false
}, {
  id: 5,
  profile: "assets/images/users/avatar-4.jpg",
  name: "Minnie Walter",
  position: "Frontend Developer",
  email: "minnie@skote.com",
  tags: ['Html', 'Css', '2 + more'],
  project: "145",
  isSelected: false
}, {
  id: 6,
  profile: "assets/images/users/avatar-5.jpg",
  name: "Shirley Smith",
  position: "UI/UX Designer",
  email: "shirley@skote.com",
  tags: ['Photoshop', 'illustrator'],
  project: "136",
  isSelected: false
}, {
  id: 7,
  name: "John Santiago",
  position: "Full Stack Developer",
  email: "john@skote.com",
  tags: ['Ruby', 'Php', '2 + more'],
  project: "125",
  isSelected: false
}, {
  id: 8,
  profile: "assets/images/users/avatar-5.jpg",
  name: "Colin Melton",
  position: "Backend Developer",
  email: "colin@skote.com",
  tags: ['Php', 'Java', 'Python'],
  project: "136",
  isSelected: false
}, {
  id: 9,
  name: "Mark Ellison",
  position: "Full Stack Developer",
  email: "mark@skote.com",
  tags: ['Ruby', 'Php', '2 + more'],
  project: "121",
  isSelected: false
}, {
  id: 10,
  profile: "assets/images/users/avatar-4.jpg",
  name: "Minnie Walter",
  position: "Frontend Developer",
  email: "minnie@skote.com",
  tags: ['Html', 'Css', '2 + more'],
  project: "145",
  isSelected: false
}, {
  id: 11,
  profile: "assets/images/users/avatar-5.jpg",
  name: "Shirley Smith",
  position: "UI/UX Designer",
  email: "shirley@skote.com",
  tags: ['Photoshop', 'illustrator'],
  project: "136",
  isSelected: false
}, {
  id: 12,
  name: "John Santiago",
  position: "Full Stack Developer",
  email: "john@skote.com",
  tags: ['Ruby', 'Php', '2 + more'],
  project: "125",
  isSelected: false
}, {
  id: 13,
  profile: "assets/images/users/avatar-5.jpg",
  name: "Colin Melton",
  position: "Backend Developer",
  email: "colin@skote.com",
  tags: ['Php', 'Java', 'Python'],
  project: "136",
  isSelected: false
}];


/***/ }),

/***/ 34978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class AuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate(route, state) {
    // Check if user has authentication token
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Check user role and redirect accordingly
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        try {
          const user = JSON.parse(currentUser);
          const userRole = user.role?.toLowerCase();
          const userType = user.userType?.toLowerCase();
          const roleType = user.roleType?.toLowerCase();
          console.log('AuthGuard - User role:', userRole, 'userType:', userType, 'roleType:', roleType, 'URL:', state.url, 'Full user:', user);
          // If client trying to access admin areas, redirect to client portal
          if ((userRole === 'client' || userType === 'client' || roleType === 'client') && !state.url.includes('client-portal')) {
            console.log('CLIENT user detected, redirecting to client portal from:', state.url);
            this.router.navigate(['/client-portal']);
            return false;
          }
          // If admin trying to access client portal, redirect to dashboard
          if (userRole !== 'client' && userType !== 'client' && roleType !== 'client' && state.url.includes('client-portal')) {
            this.router.navigate(['/dashboard']);
            return false;
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
      return true;
    }
    // Not logged in, redirect to login page with the return url
    this.router.navigate(['/auth/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 40033:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 68010);




class ErrorInterceptor {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload();
      }
      const error = err.error.message || err.statusText;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
  static {
    this.ɵfac = function ErrorInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 14548:
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FakeBackendInterceptor: () => (/* binding */ FakeBackendInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 79176);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 95074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6449);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ 17289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);






class FakeBackendInterceptor {
  constructor() {}
  intercept(request, next) {
    // array in local storage for registered users
    // tslint:disable-next-line: max-line-length
    const users = JSON.parse(localStorage.getItem('users')) || [{
      username: 'admin',
      email: 'admin@themesbrand.com',
      password: '123456'
    }];
    // wrap in delayed observable to simulate server api call
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        const filteredUsers = users.filter(user => {
          return user.email === request.body.email && user.password === request.body.password;
        });
        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const body = {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
          };
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body
          }));
        } else {
          // else return 400 bad request
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            error: {
              message: 'Username or password is incorrect'
            }
          });
        }
      }
      // get users
      if (request.url.endsWith('/users') && request.method === 'GET') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        // if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
          status: 200,
          body: users
        }));
        // } else {
        // return 401 not authorised if token is null or invalid
        // return throwError({ status: 401, error: { message: 'Unauthorised' } });
        // }
      }
      // get user by id
      if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          // tslint:disable-next-line: radix
          const id = parseInt(urlParts[urlParts.length - 1]);
          // tslint:disable-next-line: no-shadowed-variable
          const matchedUsers = users.filter(user => user.id === id);
          const user = matchedUsers.length ? matchedUsers[0] : null;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: user
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // register user
      if (request.url.endsWith('/users/register') && request.method === 'POST') {
        // get new user object from post body
        const newUser = request.body;
        // validation
        const duplicateUser = users.filter(user => user.username === newUser.username).length;
        if (duplicateUser) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            error: {
              message: 'Username "' + newUser.username + '" is already taken'
            }
          });
        }
        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        // respond 200 OK
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
          status: 200
        }));
      }
      // delete user
      if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          // tslint:disable-next-line: radix
          const id = parseInt(urlParts[urlParts.length - 1]);
          for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.id === id) {
              // delete user
              users.splice(i, 1);
              localStorage.setItem('users', JSON.stringify(users));
              break;
            }
          }
          // respond 200 OK
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // get recentFiles
      if (request.url.endsWith('/app/recentFiles') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.recentFiles) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.recentFiles
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get Orderdata
      if (request.url.endsWith('/app/orderData') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.ordersData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.ordersData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Add Orderdata
      if (request.url.endsWith('/app/orderData') && request.method === 'POST') {
        const newUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.ordersData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: newUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Update Orderdata
      if (request.url.endsWith('/app/orderData') && request.method === 'PUT') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.ordersData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // delete Orderdata
      if (request.url.endsWith('/app/orderData') && request.method === 'DELETE') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.ordersData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          })); // respond 200 OK
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // get cart
      if (request.url.endsWith('/app/cart') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.cartData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.cartData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get projects
      if (request.url.endsWith('/app/projects') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.projectData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.projectData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get userGridData
      if (request.url.endsWith('/app/userGrid') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.userGridData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.userGridData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get userGridData
      if (request.url.endsWith('/app/userlist') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.userList) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.userList
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Add userlist
      if (request.url.endsWith('/app/userlist') && request.method === 'POST') {
        const newUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.userList) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: newUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Update userlist
      if (request.url.endsWith('/app/userlist') && request.method === 'PUT') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.userList) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // delete userlist
      if (request.url.endsWith('/app/userlist') && request.method === 'DELETE') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.userList) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          })); // respond 200 OK
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // get joblist
      if (request.url.endsWith('/app/joblist') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.JobListdata) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.JobListdata
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Add joblist
      if (request.url.endsWith('/app/joblist') && request.method === 'POST') {
        const newUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.JobListdata) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: newUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Update joblist
      if (request.url.endsWith('/app/joblist') && request.method === 'PUT') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.JobListdata) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // delete joblist
      if (request.url.endsWith('/app/joblist') && request.method === 'DELETE') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.JobListdata) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          })); // respond 200 OK
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // get joblist
      if (request.url.endsWith('/app/jobgrid') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.JobGriddata) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.JobGriddata
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get joblist
      if (request.url.endsWith('/app/jobapply') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.JobApplydata) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.JobApplydata
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get candidates
      if (request.url.endsWith('/app/candidate') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.CandidateList) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.CandidateList
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get invoice
      if (request.url.endsWith('/app/invoice') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.listData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.listData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get chat
      if (request.url.endsWith('/app/chat') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.chatData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.chatData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get chatmessage
      if (request.url.endsWith('/app/chatMessage') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.chatMessagesData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.chatMessagesData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get Tasks
      if (request.url.endsWith('/app/tasks') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.tasks) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.tasks
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Add Tasks
      if (request.url.endsWith('/app/tasks') && request.method === 'POST') {
        const newUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.tasks) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: newUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Update Tasks
      if (request.url.endsWith('/app/tasks') && request.method === 'PUT') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.tasks) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get chatmessage
      if (request.url.endsWith('/app/cryto') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.orders) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.orders
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get userGridData
      if (request.url.endsWith('/app/customersData') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.customersData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.customersData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Add Tasks
      if (request.url.endsWith('/app/customersData') && request.method === 'POST') {
        const newUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.customersData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: newUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Update Tasks
      if (request.url.endsWith('/app/customersData') && request.method === 'PUT') {
        const updatedUser = request.body;
        if (_data__WEBPACK_IMPORTED_MODULE_0__.customersData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: updatedUser
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // get chatmessage
      if (request.url.endsWith('/app/emailData') && request.method === 'GET') {
        if (_data__WEBPACK_IMPORTED_MODULE_0__.emailData) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            status: 200,
            body: _data__WEBPACK_IMPORTED_MODULE_0__.emailData
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
            status: 401,
            error: {
              message: 'No Data Found'
            }
          });
        }
      }
      // Pass through /businesses/* requests to real backend
      if (request.url.includes('/businesses/')) {
        return next.handle(request);
      }
      // pass through any requests not handled above
      return next.handle(request);
    }))
    // tslint:disable-next-line: max-line-length
    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.materialize)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(500)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.dematerialize)());
  }
  static {
    this.ɵfac = function FakeBackendInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FakeBackendInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: FakeBackendInterceptor,
      factory: FakeBackendInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 33790:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 68010);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authfake.service */ 26687);




class JwtInterceptor {
  constructor(authenticationService, authfackservice) {
    this.authenticationService = authenticationService;
    this.authfackservice = authfackservice;
  }
  intercept(request, next) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
      // add authorization header with jwt token if available
      let currentUser = this.authenticationService.currentUser();
      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`
          }
        });
      }
    } else {
      // add authorization header with jwt token if available
      const currentUser = this.authfackservice.currentUserValue;
      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`
          }
        });
      }
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function JwtInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 16344:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class ApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  /**
   * Debug method to check token status
   */
  debugTokenStatus() {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('currentUser');
    console.log('=== TOKEN DEBUG ===');
    console.log('Token exists:', !!token);
    console.log('Token value:', token ? token.substring(0, 20) + '...' : 'null');
    console.log('User exists:', !!user);
    console.log('User data:', user ? JSON.parse(user) : 'null');
    console.log('==================');
  }
  /**
   * Register a new user with the backend API
   * @param signupData - User registration data
   */
  signup(signupData) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/auth/signup`, signupData, {
      headers
    });
  }
  /**
   * Login user with the backend API
   * @param loginData - User login data
   */
  login(loginData) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/auth/login`, loginData, {
      headers
    });
  }
  /**
   * Logout user with the backend API
   */
  logout() {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.baseUrl}/auth/logout`, {}, {
      headers
    });
  }
  /**
   * Create a new client
   * @param clientData - Client data to create
   */
  createClient(clientData) {
    const token = localStorage.getItem('authToken');
    // Debug token status
    console.log('=== CREATE CLIENT DEBUG ===');
    console.log('Token exists:', !!token);
    console.log('Token value:', token ? token.substring(0, 20) + '...' : 'null');
    console.log('Request data:', clientData);
    console.log('===========================');
    if (!token) {
      throw new Error('No authentication token found. Please log in again.');
    }
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.baseUrl}/clients`, clientData, {
      headers
    });
  }
  /**
   * Get all clients
   */
  getClients() {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/clients`, {
      headers
    });
  }
  /**
   * Update an existing client
   * @param clientId - ID of the client to update
   * @param clientData - Updated client data
   */
  updateClient(clientId, clientData) {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.baseUrl}/clients/${clientId}`, clientData, {
      headers
    });
  }
  /**
   * Send invitation to a client
   * @param clientId - ID of the client to invite
   * @param inviteData - Invitation data with optional message
   */
  inviteClient(clientId, inviteData) {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No authentication token found. Please log in again.');
    }
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.baseUrl}/clients/${clientId}/invite`, inviteData, {
      headers
    });
  }
  /**
   * Get all invitations
   */
  getInvitations() {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/invitations`, {
      headers
    });
  }
  /**
   * Resend an invitation
   * @param invitationId - ID of the invitation to resend
   * @param resendData - Optional message for resend
   */
  resendInvitation(invitationId, resendData = {}) {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.baseUrl}/invitations/${invitationId}/resend`, resendData, {
      headers
    });
  }
  /**
   * Get invitation by token (for public access)
   * @param token - Invitation token
   */
  getInvitationByToken(token) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.baseUrl}/invitations/${token}`, {
      headers
    });
  }
  /**
   * Accept an invitation (public endpoint)
   * @param token - Invitation token
   * @param acceptData - User registration data
   */
  acceptInvitation(token, acceptData) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/invitations/${token}/accept`, acceptData, {
      headers
    });
  }
  /**
   * Cancel an invitation
   * @param invitationId - ID of the invitation to cancel
   */
  cancelInvitation(invitationId) {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.baseUrl}/invitations/${invitationId}`, {
      headers
    });
  }
  static {
    this.ɵfac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 68010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 35689);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);



class AuthenticationService {
  constructor() {}
  /**
   * Returns the current user
   */
  currentUser() {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
  }
  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email, password) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)((0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().loginUser(email, password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      return user;
    })));
  }
  /**
   * Performs the register
   * @param email email
   * @param password password
   */
  register(user) {
    // return from(getFirebaseBackend().registerUser(user));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)((0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().registerUser(user).then(response => {
      const user = response;
      return user;
    }));
  }
  /**
   * Reset password
   * @param email email
   */
  resetPassword(email) {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().forgetPassword(email).then(response => {
      const message = response.data;
      return message;
    });
  }
  /**
   * Logout the user
   */
  logout() {
    // logout the user
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
  }
  static {
    this.ɵfac = function AuthenticationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthenticationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 26687:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthfakeauthenticationService: () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);




class AuthfakeauthenticationService {
  constructor(http) {
    this.http = http;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  login(email, password) {
    return this.http.post(`/users/authenticate`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  static {
    this.ɵfac = function AuthfakeauthenticationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthfakeauthenticationService,
      factory: AuthfakeauthenticationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 18128:
/*!***********************************************!*\
  !*** ./src/app/core/services/crud.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrudService: () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class CrudService {
  constructor(http) {
    this.http = http;
  }
  /***
   * Get
   */
  fetchData(url) {
    console.log('CrudService.fetchData called with URL:', url);
    console.log('Full URL will be:', window.location.origin + url);
    return this.http.get(url);
  }
  addData(url, newData) {
    return this.http.post(url, newData);
  }
  updateData(url, updatedData) {
    return this.http.put(url, updatedData);
  }
  deleteData(url) {
    return this.http.delete(url);
  }
  static {
    this.ɵfac = function CrudService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CrudService,
      factory: CrudService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 30944:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventService: () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);



class EventService {
  constructor() {
    this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type, payload = {}) {
    this.handler.next({
      type,
      payload
    });
  }
  /**
   * Subscribe to event
   * @param type type of event
   * @param callback call back function
   */
  subscribe(type, callback) {
    return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => event.payload)).subscribe(callback);
  }
  static {
    this.ɵfac = function EventService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EventService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: EventService,
      factory: EventService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 83318:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 39213);



class LanguageService {
  constructor(translate, cookieService) {
    this.translate = translate;
    this.cookieService = cookieService;
    this.languages = ['en', 'es', 'de', 'it', 'ru'];
    let browserLang;
    this.translate.addLangs(this.languages);
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang');
    } else {
      this.setLanguage('en');
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
  }
  setLanguage(lang) {
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
  }
  static {
    this.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LanguageService,
      factory: LanguageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 13443:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileService: () => (/* binding */ UserProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class UserProfileService {
  constructor(http) {
    this.http = http;
  }
  /***
   * Get All User
   */
  getAll() {
    return this.http.get(`api/users`);
  }
  /***
   * Facked User Register
   */
  register(user) {
    return this.http.post(`/users/register`, user);
  }
  static {
    this.ɵfac = function UserProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserProfileService,
      factory: UserProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 182:
/*!********************************************************!*\
  !*** ./src/app/cyptolanding/cyptolanding.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CyptolandingComponent: () => (/* binding */ CyptolandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 39803);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _pages_tables_tables_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/tables/tables.module */ 53498);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 75119);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 54032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/scrollspy.directive */ 6243);














const _c0 = a0 => ({
  "active": a0
});
const _c1 = () => ["SECTION"];
function CyptolandingComponent_ng_template_574_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "General Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CyptolandingComponent_ng_template_609_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Token sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CyptolandingComponent_ng_template_644_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Roadmap");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
/**
 * Crypto landing page
 */
class CyptolandingComponent {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
    this.currentSection = 'home';
    // Timeline config
    this.slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
    // Team config
    this.config = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    };
    // About config
    this.aboutConfig = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    };
  }
  ngOnInit() {
    this._trialEndsAt = "2023-12-31";
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(3000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => {
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
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }
  scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('topnav-menu-content').classList.toggle('show');
  }
  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId) {
    this.currentSection = sectionId;
  }
  static {
    this.ɵfac = function CyptolandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CyptolandingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CyptolandingComponent,
      selectors: [["app-cyptolanding"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 763,
      vars: 47,
      consts: [["faq", ""], ["faq1", ""], ["faq2", ""], ["faq3", ""], ["faq4", ""], ["faq5", ""], ["faq6", ""], ["faq7", ""], ["faq8", ""], ["faq9", ""], ["faq10", ""], ["faq11", ""], ["id", "navbar", 1, "navbar", "navbar-expand-lg", "navigation", "fixed-top", "sticky", 3, "scroll"], [1, "container"], ["routerLink", "/", 1, "navbar-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "19", 1, "logo", "logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19", 1, "logo", "logo-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#topnav-menu-content", 1, "btn", "btn-sm", "px-3", "font-size-16", "d-lg-none", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse"], ["id", "topnav-menu", 1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["href", "javascript: void(0);", 1, "nav-link", 3, "click", "ngClass"], [1, "my-2", "ms-lg-2"], ["href", "javascript: void(0);", 1, "btn", "btn-outline-success", "w-xs"], ["appScrollspy", "", 3, "sectionChange", "spiedTags"], ["id", "home", 1, "section", "hero-section", "bg-ico-hero"], [1, "bg-overlay", "bg-primary"], [1, "row", "align-items-center"], [1, "col-lg-5"], [1, "text-white-50"], [1, "text-white", "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14"], [1, "button-items", "mt-4", "d-flex", "gap-2"], ["href", "javascript: void(0);", 1, "btn", "btn-success"], ["href", "javascript: void(0);", 1, "btn", "btn-light"], [1, "col-lg-5", "col-md-8", "col-sm-10", "ms-lg-auto"], [1, "card", "overflow-hidden", "mb-0", "mt-5", "mt-lg-0"], [1, "card-header", "text-center"], [1, "mb-0"], [1, "card-body"], [1, "text-center"], [1, "mt-4"], ["inputDate", "December 31, 2022", 1, "counter-number", "ico-countdown"], [1, "coming-box"], ["type", "button", 1, "btn", "btn-success", "w-md"], [1, "mt-5"], [1, "fw-semibold"], [1, "clearfix", "mt-4"], [1, "float-end", "font-size-14"], [1, "progress", "p-1", "progress-xl", "softcap-progress"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "15%"], [1, "progress-label"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "30%"], [1, "section", "bg-white", "p-0"], [1, "currency-price"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-warning-subtle", "text-warning", "font-size-18"], [1, "mdi", "mdi-bitcoin"], [1, "flex-grow-1"], [1, "text-muted"], [1, "text-muted", "text-truncate", "mb-0"], [1, "mdi", "mdi-arrow-up", "ms-1", "text-success"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-18"], [1, "mdi", "mdi-ethereum"], [1, "mdi", "mdi-arrow-down", "ms-1", "text-danger"], [1, "avatar-title", "rounded-circle", "bg-info-subtle", "text-info", "font-size-18"], [1, "mdi", "mdi-litecoin"], ["id", "about", 1, "section", "pt-4", "bg-white"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "small-title"], [1, "mb-4"], [1, "button-items", "d-flex", "gap-2"], ["href", "javascript: void(0);", 1, "btn", "btn-outline-primary"], [1, "row", "mt-4"], [1, "col-lg-4", "col-6"], [1, "col-lg-6", "ms-auto"], [1, "mt-4", "mt-lg-0"], [1, "col-sm-6"], [1, "card", "border"], [1, "mb-3"], [1, "mdi", "mdi-bitcoin", "h2", "text-success"], [1, "text-muted", "mb-0"], [1, "card-footer", "bg-transparent", "border-top", "text-center"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "card", "border", "mt-lg-5"], [1, "mdi", "mdi-wallet-outline", "h2", "text-success"], [1, "my-5"], ["dir", "ltr", 1, "events", "navs-carousel", 3, "config"], ["ngxSlickItem", ""], [1, "item"], [1, "client-images"], ["src", "assets/images/clients/1.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/2.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/3.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/4.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/5.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/6.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["id", "features", 1, "section"], [1, "row", "align-items-center", "pt-4"], [1, "col-md-6", "col-sm-8"], ["src", "assets/images/crypto/features-img/img-1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-5", "ms-auto"], [1, "mt-4", "mt-md-auto"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3"], [1, "text-muted", "mt-4"], [1, "mb-2"], [1, "mdi", "mdi-circle-medium", "text-success", "me-1"], [1, "row", "align-items-center", "mt-5", "pt-md-5"], [1, "col-md-5"], [1, "mt-4", "mt-md-0"], [1, "col-md-6", "col-sm-8", "ms-md-auto"], [1, "mt-4", "me-md-0"], ["src", "assets/images/crypto/features-img/img-2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["id", "roadmap", 1, "section", "bg-white"], [1, "hori-timeline"], [1, "item", "event-list"], [1, "event-date"], [1, "text-primary", "mb-1"], [1, "event-down-icon"], [1, "bx", "bx-down-arrow-circle", "h1", "text-primary", "down-arrow-icon"], [1, "mt-3", "px-3"], [1, "item", "event-list", "active"], ["id", "team", 1, "section"], ["ngxSlickItem", "", 2, "width", "264px", "margin-right", "24px"], [1, "card", "text-center", "team-box"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded"], [1, "mt-3"], [1, "card-footer", "bg-transparent", "border-top"], [1, "d-flex", "mb-0", "team-social-links"], [1, "flex-fill"], ["href", "javascript: void(0);", "tooltip", "Facebook"], [1, "mdi", "mdi-facebook"], ["href", "javascript: void(0);", "tooltip", "Linkedin"], [1, "mdi", "mdi-linkedin"], ["href", "javascript: void(0);", "tooltip", "Google"], [1, "mdi", "mdi-google"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded"], ["src", "assets/images/users/avatar-8.jpg", "alt", "", 1, "rounded"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "rounded", "w-100"], ["id", "news", 1, "section", "bg-white"], [1, "col-xl-4", "col-sm-6"], [1, "blog-box", "mb-4", "mb-xl-0"], [1, "position-relative"], ["src", "assets/images/crypto/blog/img-1.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block", "w-100"], [1, "badge", "bg-success", "blog-badge", "font-size-11"], [1, "mt-4", "text-muted"], [1, "bx", "bx-calendar", "me-1"], ["href", "javascript: void(0);"], ["src", "assets/images/crypto/blog/img-2.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block", "w-100"], ["src", "assets/images/crypto/blog/img-3.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block", "w-100"], ["id", "faqs", 1, "section"], [1, "vertical-nav"], [1, "nav-pills", "custom-vertical-tabs", 3, "justified"], [1, "px-4"], ["tabHeading", "", 1, "accordion-list", "collapsed"], [1, "card-title", "mb-4"], [1, "custom-accordion", 3, "closeOthers"], ["heading", "What is Lorem Ipsum ?", 1, "accordion-list", "p-0"], ["accordion-heading", "", 1, "float-end"], [1, "mdi", 3, "ngClass"], [1, "card-body", "p-0"], ["heading", "Why do we use it ?", 1, "accordion-list", "p-0"], ["heading", "Where does it come from ?", 1, "accordion-list", "p-0"], ["heading", "Where can I get some ?", 1, "accordion-list", "p-0"], ["tabHeading", ""], ["activeIds", "static-2", 1, "custom-accordion", 3, "closeOthers"], ["activeIds", "static-1", 1, "custom-accordion", 3, "closeOthers"], ["id", "static-1", "heading", "Where can I get some ?", 1, "accordion-list", "p-0"], ["id", "static-2", "heading", "What is Lorem Ipsum ?", 1, "accordion-list", "p-0"], ["id", "static-3", "heading", "Why do we use it ?", 1, "accordion-list", "p-0"], ["id", "static-4", "heading", "Where does it come from ?", 1, "accordion-list", "p-0"], [1, "col-lg-10"], [1, "landing-footer"], [1, "col-lg-3", "col-sm-6"], [1, "mb-4", "mb-lg-0"], [1, "mb-3", "footer-list-title"], [1, "list-unstyled", "footer-list-menu"], [1, "blog-post"], ["href", "javascript: void(0);", 1, "post"], [1, "badge", "badge-soft-success", "font-size-11", "mb-3"], [1, "post-title"], [1, "footer-border", "my-5"], [1, "col-lg-6"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "bx", "bx-help-circle", "nav-icon", "d-block", "mb-2"], [1, "fw-bold", "mb-0"], [1, "bx", "bx-receipt", "nav-icon", "d-block", "mb-2"], [1, "bx", "bx-timer", "d-block", "nav-icon", "mb-2"]],
      template: function CyptolandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function CyptolandingComponent_Template_nav_scroll_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.windowScroll());
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13)(2, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 15)(4, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 19)(8, "ul", 20)(9, "li", 21)(10, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scrollTo("home"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 21)(13, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scrollTo("about"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 21)(16, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scrollTo("features"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 21)(19, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scrollTo("roadmap"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Roadmap");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 21)(22, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scrollTo("team"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Team");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 21)(25, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_a_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scrollTo("news"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "News");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 21)(28, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CyptolandingComponent_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.scrollTo("faqs"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 23)(31, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sectionChange", function CyptolandingComponent_Template_div_sectionChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSectionChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "section", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 13)(37, "div", 28)(38, "div", 29)(39, "div", 30)(40, "h1", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Skote - Ico Landing for a cryptocurrency business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "It will be as simple as occidental in fact to an English person, it will seem like simplified as a skeptical Cambridge");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 33)(45, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Get Whitepaper");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "How it work");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 36)(50, "div", 37)(51, "div", 38)(52, "h5", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "ICO Countdown time");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 40)(55, "div", 41)(56, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Time left to Ico :");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 42)(59, "div", 43)(60, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Hours");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Minutes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Seconds");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 42)(77, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Get Token");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 46)(80, "h4", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "1 ETH = 2235 SKT");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 48)(83, "h5", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "5234.43");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 50)(86, "div", 51)(87, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "15 %");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 53)(90, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "30 %");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "section", 54)(93, "div", 13)(94, "div", 55)(95, "div", 56)(96, "div", 57)(97, "div", 58)(98, "div", 40)(99, "div", 59)(100, "div", 60)(101, "div", 61)(102, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 64)(105, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Bitcoin");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "$ 9134.39");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "p", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "+ 0.0012.23 ( 0.2 % ) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 57)(113, "div", 58)(114, "div", 40)(115, "div", 59)(116, "div", 60)(117, "div", 61)(118, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 64)(121, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Ethereum");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "$ 245.44");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "p", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "- 004.12 ( 0.1 % ) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 57)(129, "div", 58)(130, "div", 40)(131, "div", 59)(132, "div", 60)(133, "div", 61)(134, "span", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 64)(137, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Litecoin");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "$ 63.61");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "p", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "+ 0.0001.12 ( 0.1 % ) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "section", 73)(145, "div", 13)(146, "div", 56)(147, "div", 74)(148, "div", 75)(149, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "About us");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "What is ICO Token?");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 28)(154, "div", 29)(155, "div", 65)(156, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Best ICO for your cryptocurrency business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "If several languages coalesce, the grammar of the resulting that of the individual new common language will be more simple and regular than the existing.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "p", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "It would be necessary to have uniform pronunciation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 78)(163, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "a", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "How It work");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 80)(168, "div", 81)(169, "div", 42)(170, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "$ 6.2 M");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Invest amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 81)(175, "div", 42)(176, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "16245");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 82)(181, "div", 83)(182, "div", 56)(183, "div", 84)(184, "div", 85)(185, "div", 40)(186, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Lending");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "At vero eos et accusamus et iusto blanditiis");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 89)(193, "a", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Learn more");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 84)(196, "div", 91)(197, "div", 40)(198, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Wallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Quis autem vel eum iure reprehenderit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 89)(205, "a", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Learn more");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "hr", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 56)(209, "div", 74)(210, "ngx-slick-carousel", 94)(211, "div", 95)(212, "div", 96)(213, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "img", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 95)(216, "div", 96)(217, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "img", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 95)(220, "div", 96)(221, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](222, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "div", 95)(224, "div", 96)(225, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 95)(228, "div", 96)(229, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "img", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 95)(232, "div", 96)(233, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "img", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "section", 104)(236, "div", 13)(237, "div", 56)(238, "div", 74)(239, "div", 75)(240, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, "Key features of the product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "div", 105)(245, "div", 106)(246, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 108)(249, "div", 109)(250, "div", 110)(251, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, "01");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "h4", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Lending");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "If several languages coalesce, the grammar of the resulting language is more simple and regular than of the individual will be more simple and regular than the existing. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 112)(258, "p", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "Donec pede justo vel aliquet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "Aenean et nisl sagittis");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 115)(265, "div", 116)(266, "div", 117)(267, "div", 110)(268, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "02");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "h4", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](271, "Wallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "div", 112)(275, "p", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](276, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "Donec pede justo vel aliquet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](279, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, "Aenean et nisl sagittis");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 118)(282, "div", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](283, "img", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "section", 121)(285, "div", 13)(286, "div", 56)(287, "div", 74)(288, "div", 75)(289, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "Timeline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Our Roadmap");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 80)(294, "div", 74)(295, "div", 122)(296, "ngx-slick-carousel", 94)(297, "div", 95)(298, "div", 123)(299, "div")(300, "div", 124)(301, "div", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302, "December, 2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](303, "h5", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "ICO Platform Idea");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](306, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "div", 128)(308, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "It will be as simple as occidental in fact it will be Cambridge");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 95)(311, "div", 123)(312, "div")(313, "div", 124)(314, "div", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, "January, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "h5", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "Research on project");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](319, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "div", 128)(321, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, "To an English person, it will seem like simplified English existence.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 95)(324, "div", 129)(325, "div")(326, "div", 124)(327, "div", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "February, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "h5", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, "ICO & Token Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](332, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "div", 128)(334, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "For science, music, sport, etc, Europe uses the same vocabulary.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "div", 95)(337, "div", 123)(338, "div")(339, "div", 124)(340, "div", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](341, "March, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "h5", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "ICO Launch Platform");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](345, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "div", 128)(347, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, "New common language will be more simple than existing. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "div", 95)(350, "div", 123)(351, "div")(352, "div", 124)(353, "div", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](354, "April, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "h5", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](356, "Token sale round 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](358, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "div", 128)(360, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "It will be as simple as occidental in fact it will be Cambridge");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "div", 95)(363, "div", 123)(364, "div")(365, "div", 124)(366, "div", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "May, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "h5", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "Token sale round 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](371, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "div", 128)(373, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "To an English person, it will seem like simplified English existence.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](375, "- ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "section", 130)(377, "div", 13)(378, "div", 56)(379, "div", 74)(380, "div", 75)(381, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "Team");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "Meet our team");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 74)(386, "ngx-slick-carousel", 94)(387, "div", 131)(388, "div", 96)(389, "div", 132)(390, "div", 40)(391, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](392, "img", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "div", 134)(394, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](395, "Mark Hurley");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "P", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, "CEO & Lead");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "div", 135)(399, "div", 136)(400, "div", 137)(401, "a", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](402, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "div", 137)(404, "a", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](405, "i", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](406, "div", 137)(407, "a", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](408, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "div", 131)(410, "div", 96)(411, "div", 132)(412, "div", 40)(413, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](414, "img", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "div", 134)(416, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](417, "Calvin Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](418, "P", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](419, "Blockchain developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](420, "div", 135)(421, "div", 136)(422, "div", 137)(423, "a", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](424, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "div", 137)(426, "a", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](427, "i", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "div", 137)(429, "a", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](430, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "div", 131)(432, "div", 96)(433, "div", 132)(434, "div", 40)(435, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](436, "img", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "div", 134)(438, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](439, "Vickie Sample");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](440, "P", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](441, "Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](442, "div", 135)(443, "div", 136)(444, "div", 137)(445, "a", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](446, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "div", 137)(448, "a", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](449, "i", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](450, "div", 137)(451, "a", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](452, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "div", 131)(454, "div", 96)(455, "div", 132)(456, "div", 40)(457, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](458, "img", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "div", 134)(460, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](461, "Alma Farley");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](462, "P", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](463, "App developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](464, "div", 135)(465, "div", 136)(466, "div", 137)(467, "a", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](468, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "div", 137)(470, "a", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](471, "i", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](472, "div", 137)(473, "a", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](474, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](475, "div", 131)(476, "div", 96)(477, "div", 132)(478, "div", 40)(479, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](480, "img", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](481, "div", 134)(482, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](483, "Amy Hood ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](484, "P", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](485, "Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](486, "div", 135)(487, "div", 136)(488, "div", 137)(489, "a", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](490, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](491, "div", 137)(492, "a", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](493, "i", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](494, "div", 137)(495, "a", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](496, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](497, "section", 148)(498, "div", 13)(499, "div", 56)(500, "div", 74)(501, "div", 75)(502, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](503, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](504, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](505, "Latest News");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](506, "div", 56)(507, "div", 149)(508, "div", 150)(509, "div", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](510, "img", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](511, "div", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](512, "Cryptocurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](513, "div", 154)(514, "p", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](515, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](516, " 04 Mar, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](517, "h5", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](518, "Donec pede justo, fringilla vele");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](519, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](520, "If several languages coalesce, the grammar of the resulting language");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](521, "div")(522, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](523, "Read more");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](524, "div", 149)(525, "div", 150)(526, "div", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](527, "img", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](528, "div", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](529, "Cryptocurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](530, "div", 154)(531, "p", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](532, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](533, " 12 Feb, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](534, "h5", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](535, "Aenean ut eros et nisl");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](536, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](537, "Everyone realizes why a new common language would be desirable");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](538, "div")(539, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](540, "Read more");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](541, "div", 149)(542, "div", 150)(543, "div", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](544, "img", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](545, "div", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](546, "Cryptocurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](547, "div", 154)(548, "p", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](549, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](550, " 06 Jan, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](551, "h5", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](552, "In turpis, pellentesque posuere");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](553, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](554, "To an English person, it will seem like simplified English, as a skeptical Cambridge");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](555, "div")(556, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](557, "Read more");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](558, "section", 159)(559, "div", 13)(560, "div", 56)(561, "div", 74)(562, "div", 75)(563, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](564, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](565, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](566, "Frequently asked questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](567, "div", 56)(568, "div", 74)(569, "div", 160)(570, "div", 56)(571, "div", 74)(572, "tabset", 161)(573, "tab", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](574, CyptolandingComponent_ng_template_574_Template, 3, 0, "ng-template", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](575, "div", 58)(576, "div", 40)(577, "h4", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](578, "General Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](579, "accordion", 165)(580, "accordion-group", 166, 0)(582, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](583, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](584, "div", 169)(585, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](586, "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](587, "accordion-group", 170, 1)(589, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](590, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](591, "div", 169)(592, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](593, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](594, "accordion-group", 171, 2)(596, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](597, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](598, "div", 169)(599, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](600, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](601, "accordion-group", 172, 3)(603, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](604, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](605, "div", 169)(606, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](607, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](608, "tab", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](609, CyptolandingComponent_ng_template_609_Template, 3, 0, "ng-template", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](610, "div", 58)(611, "div", 40)(612, "h4", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](613, "Token sale");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](614, "accordion", 174)(615, "accordion-group", 170, 4)(617, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](618, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](619, "div", 169)(620, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](621, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](622, "accordion-group", 166, 5)(624, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](625, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](626, "div", 169)(627, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](628, "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](629, "accordion-group", 172, 6)(631, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](632, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](633, "div", 169)(634, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](635, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](636, "accordion-group", 171, 7)(638, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](639, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](640, "div", 169)(641, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](642, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](643, "tab", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](644, CyptolandingComponent_ng_template_644_Template, 3, 0, "ng-template", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](645, "div", 58)(646, "div", 40)(647, "h4", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](648, "Roadmap");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](649, "accordion", 175)(650, "accordion-group", 176, 8)(652, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](653, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](654, "div", 169)(655, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](656, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](657, "accordion-group", 177, 9)(659, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](660, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](661, "div", 169)(662, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](663, "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](664, "accordion-group", 178, 10)(666, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](667, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](668, "div", 169)(669, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](671, "accordion-group", 179, 11)(673, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](674, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](675, "div", 169)(676, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](677, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](678, "div", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](679, "footer", 181)(680, "div", 13)(681, "div", 56)(682, "div", 182)(683, "div", 183)(684, "h5", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](685, "Company");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](686, "ul", 185)(687, "li")(688, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](689, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](690, "li")(691, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](692, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](693, "li")(694, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](695, "Team");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](696, "li")(697, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](698, "News");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](699, "li")(700, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](701, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](702, "div", 182)(703, "div", 183)(704, "h5", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](705, "Resources");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](706, "ul", 185)(707, "li")(708, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](709, "Whitepaper");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](710, "li")(711, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](712, "Token sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](713, "li")(714, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](715, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](716, "li")(717, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](718, "Terms & Conditions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](719, "div", 182)(720, "div", 183)(721, "h5", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](722, "Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](723, "ul", 185)(724, "li")(725, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](726, "Tokens");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](727, "li")(728, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](729, "Roadmap");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](730, "li")(731, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](732, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](733, "div", 182)(734, "div", 183)(735, "h5", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](736, "Latest News");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](737, "div", 186)(738, "a", 187)(739, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](740, "Cryptocurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](741, "h5", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](742, "Donec pede justo aliquet nec");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](743, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](744, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](745, " 04 Mar, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](746, "a", 187)(747, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](748, "Cryptocurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](749, "h5", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](750, "In turpis, Pellentesque");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](751, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](752, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](753, " 12 Mar, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](754, "hr", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](755, "div", 56)(756, "div", 191)(757, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](758, "img", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](759, "p", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](760);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](761, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](762, "It will be as simple as occidental in fact, it will be to an english person, it will seem like simplified English, as a skeptical");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const faq_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](581);
          const faq1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](588);
          const faq2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](595);
          const faq3_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](602);
          const faq4_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](616);
          const faq5_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](623);
          const faq6_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](630);
          const faq7_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](637);
          const faq8_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](651);
          const faq9_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](658);
          const faq10_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](665);
          const faq11_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](672);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c0, ctx.currentSection === "home"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c0, ctx.currentSection === "about"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](36, _c0, ctx.currentSection === "features"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c0, ctx.currentSection === "roadmap"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c0, ctx.currentSection === "team"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c0, ctx.currentSection === "news"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](44, _c0, ctx.currentSection === "faqs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](46, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._days);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._hours);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._minutes);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._seconds);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](137);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.aboutConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.slideConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](90);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](186);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("justified", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq_r2 == null ? null : faq_r2.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq1_r3 == null ? null : faq1_r3.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq2_r4 == null ? null : faq2_r4.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq3_r5 == null ? null : faq3_r5.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq4_r6 == null ? null : faq4_r6.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq5_r7 == null ? null : faq5_r7.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq6_r8 == null ? null : faq6_r8.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq7_r9 == null ? null : faq7_r9.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq8_r10 == null ? null : faq8_r10.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq9_r11 == null ? null : faq9_r11.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq10_r12 == null ? null : faq10_r12.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !(faq11_r13 == null ? null : faq11_r13.isOpen) ? "mdi mdi-plus accor-plus-icon" : "mdi mdi-minus accor-plus-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.year, " \u00A9 Skote. Design & Develop by Themesbrand");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionPanelComponent, _pages_tables_tables_module__WEBPACK_IMPORTED_MODULE_0__.TablesModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabsModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabHeadingDirective, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__.SlickItemDirective, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollspyDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6243:
/*!************************************************************!*\
  !*** ./src/app/cyptolanding/shared/scrollspy.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollspyDirective: () => (/* binding */ ScrollspyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);



class ScrollspyDirective {
  // tslint:disable-next-line: variable-name
  constructor(_el, document) {
    this._el = _el;
    this.document = document;
    this.spiedTags = [];
    this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Window scroll method
   */
  onScroll(event) {
    let currentSection;
    const children = this._el.nativeElement.querySelectorAll('section');
    const scrollTop = this.document.documentElement.scrollTop;
    const parentOffset = this.document.documentElement.offsetTop;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if (element.offsetTop - parentOffset <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
  static {
    this.ɵfac = function ScrollspyDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollspyDirective,
      selectors: [["", "appScrollspy", ""]],
      hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        spiedTags: "spiedTags"
      },
      outputs: {
        sectionChange: "sectionChange"
      }
    });
  }
}

/***/ }),

/***/ 54032:
/*!******************************************************!*\
  !*** ./src/app/cyptolanding/shared/shared.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollspy.directive */ 6243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective]
  });
})();

/***/ }),

/***/ 53911:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/page404/page404.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page404Component: () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/**
 * PAges-404 component
 */
class Page404Component {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function Page404Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Page404Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page404Component,
      selectors: [["app-page404"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 0,
      consts: [[1, "account-pages", "my-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/images/error-img.png", "alt", "", 1, "img-fluid"]],
      template: function Page404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sorry, page not found");
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

/***/ 17856:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/**
 * Footer component
 */
class FooterComponent {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 1,
      consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "text-sm-end", "d-none", "d-sm-block"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Design & Developed by Shiva Komatreddy ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " \u00A9 Firm Pilot. ");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 64338:
/*!************************************************************!*\
  !*** ./src/app/layouts/horizontal/horizontal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalComponent: () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 17856);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 56730);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topbar/topbar.component */ 56414);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../horizontaltopbar/horizontaltopbar.component */ 13222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/event.service */ 30944);







/**
 * Horizontal-layout component
 */
class HorizontalComponent {
  constructor(eventService) {
    this.eventService = eventService;
  }
  ngOnInit() {
    // this.topbar = TOPBAR;
    this.eventService.subscribe('changeTopbar', topbar => {
      this.topbar = topbar;
      this.changeTopbar(this.topbar);
    });
    document.body.setAttribute('data-layout', 'horizontal');
    document.body.removeAttribute('data-sidebar');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.removeAttribute('data-sidebar-small');
    this.changeTopbar(this.topbar);
  }
  ngAfterViewInit() {}
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }
  changeTopbar(topbar) {
    switch (topbar) {
      case "light":
        document.body.setAttribute("data-topbar", "light");
        break;
      case "dark":
        document.body.setAttribute("data-topbar", "dark");
        break;
      case "colored":
        document.body.setAttribute("data-topbar", "colored");
        break;
      default:
        document.body.setAttribute("data-topbar", "dark");
        break;
    }
  }
  /**
  * On mobile toggle button clicked
  */
  onToggleMobileMenu() {
    this.isCondensed = !this.isCondensed;
    document.body.classList.toggle('sidebar-enable');
    document.body.classList.toggle('vertical-collpsed');
    if (window.screen.width <= 768) {
      document.body.classList.remove('vertical-collpsed');
    }
  }
  static {
    this.ɵfac = function HorizontalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HorizontalComponent,
      selectors: [["app-horizontal"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"]],
      template: function HorizontalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "app-topbar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("settingsButtonClicked", function HorizontalComponent_Template_app_topbar_settingsButtonClicked_1_listener() {
            return ctx.onSettingsButtonClicked();
          })("mobileMenuButtonClicked", function HorizontalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() {
            return ctx.onToggleMobileMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-horizontaltopbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-footer")(7, "app-rightsidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_1__.RightsidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_3__.HorizontaltopbarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 13222:
/*!************************************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/horizontaltopbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontaltopbarComponent: () => (/* binding */ HorizontaltopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs */ 18592);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ 73300);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 30944);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/api.service */ 16344);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/language.service */ 83318);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 39213);













const _c0 = ["componentRef"];
const _c1 = ["sideMenu"];
const _c2 = (a0, a1) => ({
  "dropdown-mega-menu-xl px-2": a0,
  "show": a1
});
const _c3 = () => ({
  exact: true
});
const _c4 = a0 => ({
  "show": a0
});
function HorizontaltopbarComponent_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_For_6_Conditional_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onMenuClick(item_r2.parentId, item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r2.icon, " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, item_r2.label), " ");
  }
}
function HorizontaltopbarComponent_For_6_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 10);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r2.icon, " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r2.label), " ");
  }
}
function HorizontaltopbarComponent_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_For_6_Conditional_3_Conditional_1_Template, 4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", item_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.hasItems(item_r2) ? 1 : -1);
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subitem_r4.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, subitem_r4.label), " ");
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const subitem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onMenuClick(subitem_r4.parentId, subitem_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subitem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subitem_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, subitem_r4.label), " ");
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 16)(10, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const i_r7 = ctx_r5.index;
    const subitem_r4 = ctx_r5.$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subitem_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, item_r2.subItems[i_r7].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", item_r2.subItems[i_r7 + 1] == null ? null : item_r2.subItems[i_r7 + 1].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 8, item_r2.subItems[i_r7 + 1] == null ? null : item_r2.subItems[i_r7 + 1].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", item_r2.subItems[i_r7 + 2] == null ? null : item_r2.subItems[i_r7 + 2].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 10, item_r2.subItems[i_r7 + 2] == null ? null : item_r2.subItems[i_r7 + 2].label));
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_2_Conditional_1_Template, 13, 12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](i_r7 % 3 == 0 ? 1 : -1);
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Conditional_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSubSubitem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subSubSubitem_r11.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, subSubSubitem_r11.label));
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Conditional_0_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const subSubitem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onMenuClick(subSubitem_r10.parentId, subSubitem_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Conditional_0_ng_template_6_Template, 3, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subSubitem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, subSubitem_r10.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c4, subSubitem_r10.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", subSubitem_r10.subItems);
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSubitem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subSubitem_r10.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, subSubitem_r10.label));
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Conditional_0_Template, 7, 7, "div", 13)(1, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Conditional_1_Template, 3, 4, "a", 20);
  }
  if (rf & 2) {
    const subSubitem_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.hasItems(subSubitem_r10) ? 0 : 1);
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const subitem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onMenuClick(subitem_r4.parentId, subitem_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_ng_template_6_Template, 2, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subitem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, subitem_r4.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c4, subitem_r4.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", subitem_r4.subItems);
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_0_Template, 3, 6, "a", 12)(1, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_1_Template, 5, 4, "div")(2, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_2_Template, 2, 1, "div")(3, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Conditional_3_Template, 7, 7, "div", 13);
  }
  if (rf & 2) {
    const subitem_r4 = ctx.$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r2.subItems.length < 11 && !ctx_r2.hasItems(subitem_r4) ? 0 : item_r2.subItems.length == 11 && !ctx_r2.hasItems(subitem_r4) ? 1 : item_r2.subItems.length > 11 ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.hasItems(subitem_r4) ? 3 : -1);
  }
}
function HorizontaltopbarComponent_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_For_6_Conditional_4_ng_template_1_Template, 4, 2, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c2, item_r2.subItems.length > 11, item_r2.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r2.subItems);
  }
}
function HorizontaltopbarComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HorizontaltopbarComponent_For_6_Conditional_2_Template, 5, 6, "a", 6)(3, HorizontaltopbarComponent_For_6_Conditional_3_Template, 2, 2, "a", 7)(4, HorizontaltopbarComponent_For_6_Conditional_4_Template, 2, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r2.subItems ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.hasItems(item_r2) ? 4 : -1);
  }
}
/**
 * Horizontal Topbar and navbar specified
 */
class HorizontaltopbarComponent {
  // tslint:disable-next-line: max-line-length
  constructor(document, router, eventService, apiService, languageService, _cookiesService) {
    this.document = document;
    this.router = router;
    this.eventService = eventService;
    this.apiService = apiService;
    this.languageService = languageService;
    this._cookiesService = _cookiesService;
    this.isCondensed = false;
    this.menuItems = [];
    this.listLang = [{
      text: 'English',
      flag: 'assets/images/flags/us.jpg',
      lang: 'en'
    }, {
      text: 'Spanish',
      flag: 'assets/images/flags/spain.jpg',
      lang: 'es'
    }, {
      text: 'German',
      flag: 'assets/images/flags/germany.jpg',
      lang: 'de'
    }, {
      text: 'Italian',
      flag: 'assets/images/flags/italy.jpg',
      lang: 'it'
    }, {
      text: 'Russian',
      flag: 'assets/images/flags/russia.jpg',
      lang: 'ru'
    }];
    router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.activateMenu();
        this.menuItems.forEach(element => {
          element.isCollapsed = false;
        });
      }
    });
  }
  ngOnInit() {
    this.element = document.documentElement;
    this.initialize();
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.valueset = 'assets/images/flags/us.jpg';
      }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }
  setLanguage(text, lang, flag) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
  /**
   * Logout the user
   */
  logout() {
    // Call backend logout API
    this.apiService.logout().subscribe({
      next: response => {
        // Clear local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        // Redirect to login page
        this.router.navigate(['/auth/login']);
      },
      error: error => {
        // Even if logout API fails, clear local storage and redirect
        console.error('Logout API error:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/login']);
      }
    });
  }
  /**
   * On menu click
   */
  onMenuClick(parentIndex, item) {
    if (!parentIndex) {
      this.menuItems.forEach(element => {
        if (item == element) {
          // Toggle the clicked item
          element.isCollapsed = !element.isCollapsed;
        } else {
          // Close all other items of other parent items
          element.isCollapsed = false;
        }
      });
    }
  }
  ngAfterViewInit() {
    // this.menu = new MetisMenu(this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }
  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new metismenujs__WEBPACK_IMPORTED_MODULE_0__["default"](this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }
  /**
   * Togglemenu bar
   */
  toggleMenubar() {
    const element = document.getElementById('topnav-menu-content');
    element.classList.toggle('show');
  }
  /**
   * Activates the menu
   */
  activateMenu() {
    const resetParent = el => {
      const parent = el.parentElement;
      if (parent) {
        parent.classList.remove('active');
        const parent2 = parent.parentElement;
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        if (parent2) {
          parent2.classList.remove('active');
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove('active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.remove('active');
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove('active');
                const menuelement = document.getElementById("topnav-menu-content");
                if (menuelement !== null) {
                  if (menuelement.classList.contains('show')) document.getElementById("topnav-menu-content").classList.remove("show");
                }
              }
            }
          }
        }
      }
    };
    // activate menu item based on location
    const links = document.getElementsByClassName('side-nav-link-ref');
    let matchingMenuItem = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      if (location.pathname === links[i]['pathname']) {
        matchingMenuItem = links[i];
        break;
      }
    }
    if (matchingMenuItem) {
      const parent = matchingMenuItem.parentElement;
      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add('active');
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add('active');
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add('active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add('active');
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.add('active');
                const parent6 = parent5.parentElement;
                if (parent6) {
                  parent6.classList.add('active');
                }
              }
            }
          }
        }
      }
    }
  }
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }
  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (!document.fullscreenElement && !this.element.mozFullScreenElement && !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
  /**
   * Initialize
   */
  initialize() {
    this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU;
  }
  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    const paths = [];
    for (let i = 0; i < links.length; i++) {
      paths.push(links[i]['pathname']);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) {
              childAnchor.classList.add('mm-active');
            }
            if (childDropdown) {
              childDropdown.classList.add('mm-active');
            }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') {
                  childanchor.classList.add('mm-active');
                }
              }
            }
          }
        }
      }
    }
  }
  static {
    this.ɵfac = function HorizontaltopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HorizontaltopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HorizontaltopbarComponent,
      selectors: [["app-horizontaltopbar"]],
      viewQuery: function HorizontaltopbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
        }
      },
      inputs: {
        isCondensed: "isCondensed"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 0,
      consts: [[1, "topnav"], [1, "container-fluid"], [1, "navbar", "navbar-light", "navbar-expand-lg", "topnav-menu", "active"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse", "active"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "routerLink"], ["aria-labelledby", "topnav-dashboard", 1, "dropdown-menu", 3, "ngClass"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], [1, "arrow-down"], ["ngFor", "", 3, "ngForOf"], ["routerLinkActive", "active", 1, "col", "dropdown-item", "side-nav-link-ref", 3, "routerLink", "routerLinkActiveOptions"], [1, "dropdown"], ["href", "javascript: void(0);", "routerLinkActive", "active", 1, "dropdown-item", "dropdown-toggle", 3, "click", "routerLink"], [1, "row"], [1, "col-lg-4"], ["routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"], ["href", "javascript: void(0);", 1, "dropdown-item", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", 3, "ngClass"], ["href", "javascript: void(0);", "routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"]],
      template: function HorizontaltopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "ul", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](5, HorizontaltopbarComponent_For_6_Template, 5, 2, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.menuItems);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73300:
/*!**************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/menu.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU: () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [{
  id: 1,
  label: 'MENUITEMS.DASHBOARDS.TEXT',
  icon: 'bx-home-circle',
  isCollapsed: false,
  subItems: [{
    id: 2,
    label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
    link: '/dashboard',
    parentId: 1
  }, {
    id: 3,
    label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
    link: '/dashboards/saas',
    parentId: 1
  }, {
    id: 4,
    label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
    link: '/dashboards/crypto',
    parentId: 1
  }, {
    id: 5,
    label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
    link: '/dashboards/blog',
    parentId: 1
  }, {
    id: 6,
    label: 'MENUITEMS.DASHBOARDS.LIST.JOBS',
    link: '/dashboards/jobs',
    parentId: 1
  }]
}, {
  id: 7,
  label: 'MENUITEMS.UIELEMENTS.TEXT',
  icon: 'bx-tone',
  isCollapsed: false,
  isUiElement: true,
  subItems: [{
    id: 8,
    label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
    link: '/ui/alerts',
    parentId: 7
  }, {
    id: 9,
    label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
    link: '/ui/modals',
    parentId: 7
  }, {
    id: 10,
    label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
    link: '/ui/typography',
    parentId: 7
  }, {
    id: 11,
    label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
    link: '/ui/buttons',
    parentId: 7
  }, {
    id: 12,
    label: 'MENUITEMS.UIELEMENTS.LIST.TOASTS',
    link: '/ui/toasts',
    parentId: 7
  }, {
    id: 13,
    label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
    link: '/ui/cards',
    parentId: 7
  }, {
    id: 14,
    label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
    link: '/ui/rangeslider',
    parentId: 7
  }, {
    id: 15,
    label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
    link: '/ui/video',
    parentId: 7
  }, {
    id: 16,
    label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
    link: '/ui/carousel',
    parentId: 7
  }, {
    id: 17,
    label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
    link: '/ui/general',
    parentId: 7
  }, {
    id: 18,
    label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
    link: '/ui/dropdowns',
    parentId: 7
  }, {
    id: 19,
    label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
    link: '/ui/progressbar',
    parentId: 7
  }, {
    id: 20,
    label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
    link: '/ui/colors',
    parentId: 7
  }, {
    id: 21,
    label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
    link: '/ui/grid',
    parentId: 7
  }, {
    id: 22,
    label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
    link: '/ui/placeholder',
    parentId: 7
  }, {
    id: 23,
    label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
    link: '/ui/rating',
    parentId: 7
  }, {
    id: 24,
    label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
    link: '/ui/images',
    parentId: 7
  }, {
    id: 25,
    label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
    link: '/ui/sweet-alert',
    parentId: 7
  }, {
    id: 26,
    label: 'MENUITEMS.UIELEMENTS.LIST.NOTIFICATION',
    link: '/ui/notification',
    parentId: 7
  }, {
    id: 27,
    label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
    link: '/ui/lightbox',
    parentId: 7
  }, {
    id: 28,
    label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
    link: '/ui/tabs-accordions',
    parentId: 7
  }, {
    id: 29,
    label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
    link: '/ui/image-crop',
    parentId: 7
  }]
}, {
  id: 30,
  label: 'MENUITEMS.APPS.TEXT',
  icon: 'bx-customize',
  isCollapsed: false,
  subItems: [{
    id: 31,
    label: 'MENUITEMS.CALENDAR.TEXT',
    link: '/calendar',
    parentId: 30
  }, {
    id: 32,
    label: 'MENUITEMS.CHAT.TEXT',
    link: '/chat',
    parentId: 30
  }, {
    id: 33,
    label: 'MENUITEMS.FILEMANAGER.TEXT',
    link: '/filemanager',
    parentId: 30
  }, {
    id: 34,
    label: 'MENUITEMS.EMAIL.TEXT',
    isCollapsed: false,
    parentId: 30,
    subItems: [{
      id: 35,
      label: 'MENUITEMS.EMAIL.LIST.INBOX',
      link: '/email/inbox',
      parentId: 34
    }, {
      id: 36,
      label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
      link: '/email/read',
      parentId: 34
    }, {
      id: 37,
      label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
      parentId: 34,
      subItems: [{
        id: 38,
        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
        link: '/email/basic',
        parentId: 37
      }, {
        id: 39,
        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
        link: '/email/alert',
        parentId: 37
      }, {
        id: 40,
        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
        link: '/email/billing',
        parentId: 37
      }]
    }]
  }, {
    id: 41,
    label: 'MENUITEMS.ECOMMERCE.TEXT',
    isCollapsed: false,
    parentId: 30,
    subItems: [{
      id: 42,
      label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
      link: '/ecommerce/products',
      parentId: 41
    }, {
      id: 43,
      label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
      link: '/ecommerce/product-detail/1',
      parentId: 41
    }, {
      id: 44,
      label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
      link: '/ecommerce/orders',
      parentId: 41
    }, {
      id: 45,
      label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
      link: '/ecommerce/customers',
      parentId: 41
    }, {
      id: 46,
      label: 'MENUITEMS.ECOMMERCE.LIST.CART',
      link: '/ecommerce/cart',
      parentId: 41
    }, {
      id: 47,
      label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
      link: '/ecommerce/checkout',
      parentId: 41
    }, {
      id: 48,
      label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
      link: '/ecommerce/shops',
      parentId: 41
    }, {
      id: 49,
      label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
      link: '/ecommerce/add-product',
      parentId: 41
    }]
  }, {
    id: 50,
    label: 'MENUITEMS.CRYPTO.TEXT',
    icon: 'bx-bitcoin',
    isCollapsed: false,
    parentId: 30,
    subItems: [{
      id: 51,
      label: 'MENUITEMS.CRYPTO.LIST.WALLET',
      link: '/crypto/wallet',
      parentId: 50
    }, {
      id: 52,
      label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
      link: '/crypto/buy-sell',
      parentId: 50
    }, {
      id: 53,
      label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
      link: '/crypto/exchange',
      parentId: 50
    }, {
      id: 54,
      label: 'MENUITEMS.CRYPTO.LIST.LENDING',
      link: '/crypto/lending',
      parentId: 50
    }, {
      id: 55,
      label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
      link: '/crypto/orders',
      parentId: 50
    }, {
      id: 56,
      label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
      link: '/crypto/kyc-application',
      parentId: 50
    }, {
      id: 57,
      label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
      link: '/crypto-ico-landing',
      parentd: 50
    }]
  }, {
    id: 58,
    label: 'MENUITEMS.PROJECTS.TEXT',
    isCollapsed: false,
    parentId: 30,
    subItems: [{
      id: 59,
      label: 'MENUITEMS.PROJECTS.LIST.GRID',
      link: '/projects/grid',
      parentId: 58
    }, {
      id: 60,
      label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
      link: '/projects/list',
      parentId: 58
    }, {
      id: 61,
      label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
      link: '/projects/overview',
      parentId: 58
    }, {
      id: 62,
      label: 'MENUITEMS.PROJECTS.LIST.CREATE',
      link: '/projects/create',
      parentId: 58
    }]
  }, {
    id: 63,
    label: 'MENUITEMS.TASKS.TEXT',
    isCollapsed: false,
    parentId: 30,
    subItems: [{
      id: 64,
      label: 'MENUITEMS.TASKS.LIST.TASKLIST',
      link: '/tasks/list',
      parentId: 63
    }, {
      id: 65,
      label: 'MENUITEMS.TASKS.LIST.KANBAN',
      link: '/tasks/kanban',
      parentId: 63
    }, {
      id: 66,
      label: 'MENUITEMS.TASKS.LIST.CREATETASK',
      link: '/tasks/create',
      parentId: 63
    }]
  }, {
    id: 67,
    label: 'MENUITEMS.CONTACTS.TEXT',
    isCollapsed: false,
    icon: 'bxs-user-detail',
    parentId: 30,
    subItems: [{
      id: 68,
      label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
      link: '/contacts/grid',
      parentId: 67
    }, {
      id: 69,
      label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
      link: '/contacts/list',
      parentId: 67
    }, {
      id: 70,
      label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
      link: '/contacts/profile',
      parentId: 67
    }]
  }, {
    id: 71,
    label: 'MENUITEMS.BLOG.TEXT',
    isCollapsed: false,
    parentId: 30,
    subItems: [{
      id: 72,
      label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
      link: '/blog/list',
      parentId: 71
    }, {
      id: 73,
      label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
      link: '/blog/grid',
      parentId: 71
    }, {
      id: 74,
      label: 'MENUITEMS.BLOG.LIST.DETAIL',
      link: '/blog/detail',
      parentId: 71
    }]
  }, {
    id: 75,
    label: 'MENUITEMS.JOBS.TEXT',
    isCollapsed: false,
    icon: 'bx-briefcase-alt',
    parentId: 30,
    badge: {
      variant: 'success',
      text: 'MENUITEMS.JOBS.BADGE'
    },
    subItems: [{
      id: 76,
      label: 'MENUITEMS.JOBS.LIST.JOBLIST',
      link: '/jobs/list',
      parentId: 75
    }, {
      id: 77,
      label: 'MENUITEMS.JOBS.LIST.JOBGRID',
      link: '/jobs/grid',
      parentId: 75
    }, {
      id: 78,
      label: 'MENUITEMS.JOBS.LIST.APPLYJOB',
      link: '/jobs/apply',
      parentId: 75
    }, {
      id: 79,
      label: 'MENUITEMS.JOBS.LIST.JOBDETAILS',
      link: '/jobs/details',
      parentId: 75
    }, {
      id: 80,
      label: 'MENUITEMS.JOBS.LIST.JOBCATEGORIES',
      link: '/jobs/categories',
      parentId: 75
    }, {
      id: 81,
      label: 'MENUITEMS.JOBS.LIST.CANDIDATE.TEXT',
      parentId: 75,
      subItems: [{
        id: 82,
        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.LIST',
        link: '/jobs/candidate-list',
        parentId: 81
      }, {
        id: 83,
        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.OVERVIEW',
        link: '/jobs/candidate-overview',
        parentId: 81
      }]
    }]
  }]
}, {
  id: 84,
  icon: 'bx-collection',
  label: 'MENUITEMS.COMPONENTS.TEXT',
  isCollapsed: false,
  subItems: [{
    id: 85,
    label: 'MENUITEMS.FORMS.TEXT',
    parentId: 84,
    subItems: [{
      id: 86,
      label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
      link: '/form/elements',
      parentId: 85
    }, {
      id: 87,
      label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
      link: '/form/layouts',
      parentId: 85
    }, {
      id: 88,
      label: 'MENUITEMS.FORMS.LIST.VALIDATION',
      link: '/form/validation',
      parentId: 85
    }, {
      id: 89,
      label: 'MENUITEMS.FORMS.LIST.ADVANCED',
      link: '/form/advanced',
      parentId: 85
    }, {
      id: 90,
      label: 'MENUITEMS.FORMS.LIST.EDITOR',
      link: '/form/editor',
      parentId: 85
    }, {
      id: 91,
      label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
      link: '/form/uploads',
      parentId: 85
    }, {
      id: 92,
      label: 'MENUITEMS.FORMS.LIST.REPEATER',
      link: '/form/repeater',
      parentId: 85
    }, {
      id: 93,
      label: 'MENUITEMS.FORMS.LIST.WIZARD',
      link: '/form/wizard',
      parentId: 85
    }, {
      id: 94,
      label: 'MENUITEMS.FORMS.LIST.MASK',
      link: '/form/mask',
      parentId: 85
    }]
  }, {
    id: 95,
    label: 'MENUITEMS.TABLES.TEXT',
    parentId: 84,
    subItems: [{
      id: 96,
      label: 'MENUITEMS.TABLES.LIST.BASIC',
      link: '/tables/basic',
      parentId: 95
    }, {
      id: 97,
      label: 'MENUITEMS.TABLES.LIST.DataTables',
      link: '/tables/advanced',
      parentId: 95
    }, {
      id: 98,
      label: 'MENUITEMS.TABLES.LIST.EditTableTables',
      link: '/tables/editable',
      parentId: 95
    }]
  }, {
    id: 99,
    label: 'MENUITEMS.CHARTS.TEXT',
    parentId: 84,
    subItems: [{
      id: 100,
      label: 'MENUITEMS.CHARTS.LIST.APEX',
      link: '/charts/apex',
      parentId: 99
    }, {
      id: 101,
      label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
      link: '/charts/chartjs',
      parentId: 99
    }, {
      id: 102,
      label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
      link: '/charts/chartist',
      parentId: 99
    }, {
      id: 103,
      label: 'MENUITEMS.CHARTS.LIST.ECHART',
      link: '/charts/echart',
      parentId: 99
    }]
  }, {
    id: 104,
    label: 'MENUITEMS.ICONS.TEXT',
    parentId: 84,
    subItems: [{
      id: 105,
      label: 'MENUITEMS.ICONS.LIST.BOXICONS',
      link: '/icons/boxicons',
      parentId: 104
    }, {
      id: 106,
      label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
      link: '/icons/materialdesign',
      parentId: 104
    }, {
      id: 107,
      label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
      link: '/icons/dripicons',
      parentId: 104
    }, {
      id: 108,
      label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
      link: '/icons/fontawesome',
      parentId: 104
    }]
  }, {
    id: 109,
    label: 'MENUITEMS.MAPS.TEXT',
    parentId: 84,
    subItems: [
    // {
    //     id: 110,
    //     label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
    //     link: '/maps/google',
    //     parentId: 109
    // },
    {
      id: 111,
      label: 'MENUITEMS.MAPS.LIST.LEAFLETMAP',
      link: '/maps/leaflet',
      parentId: 109
    }]
  }]
}, {
  id: 112,
  label: 'HEADER.EXTRA_PAGES.TITLE',
  icon: 'bx-file',
  subItems: [{
    id: 113,
    label: 'MENUITEMS.INVOICES.TEXT',
    parentId: 112,
    subItems: [{
      id: 114,
      label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
      link: '/invoices/list',
      parentId: 113
    }, {
      id: 115,
      label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
      link: '/invoices/detail',
      parentId: 113
    }]
  }, {
    id: 116,
    label: 'MENUITEMS.AUTHENTICATION.TEXT',
    parentId: 112,
    subItems: [{
      id: 117,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
      link: '/auth/login',
      parentId: 116
    }, {
      id: 118,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
      link: '/auth/login-2',
      parentId: 116
    }, {
      id: 119,
      label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
      link: '/auth/signup',
      parentId: 116
    }, {
      id: 120,
      label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
      link: '/auth/signup-2',
      parentId: 116
    }, {
      id: 121,
      label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
      link: '/auth/reset-password',
      parentId: 116
    }, {
      id: 122,
      label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
      link: '/auth/recoverpwd-2',
      parentId: 116
    }, {
      id: 123,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
      link: '/pages/lock-screen-1',
      parentId: 116
    }, {
      id: 124,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
      link: '/pages/lock-screen-2',
      parentId: 116
    }, {
      id: 125,
      label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
      link: '/pages/confirm-mail',
      parentId: 116
    }, {
      id: 126,
      label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
      link: '/pages/confirm-mail-2',
      parentId: 116
    }, {
      id: 127,
      label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
      link: '/pages/email-verification',
      parentId: 116
    }, {
      id: 128,
      label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
      link: '/pages/email-verification-2',
      parentId: 116
    }, {
      id: 129,
      label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
      link: '/pages/two-step-verification',
      parentId: 116
    }, {
      id: 130,
      label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
      link: '/pages/two-step-verification-2',
      parentId: 116
    }]
  }, {
    id: 131,
    label: 'MENUITEMS.UTILITY.TEXT',
    icon: 'bx-file',
    parentId: 112,
    subItems: [{
      id: 132,
      label: 'MENUITEMS.UTILITY.LIST.STARTER',
      link: '/pages/starter',
      parentId: 131
    }, {
      id: 133,
      label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
      link: '/pages/maintenance',
      parentId: 131
    }, {
      id: 134,
      label: 'Coming Soon',
      link: '/pages/coming-soon',
      parentId: 131
    }, {
      id: 135,
      label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
      link: '/pages/timeline',
      parentId: 131
    }, {
      id: 136,
      label: 'MENUITEMS.UTILITY.LIST.FAQS',
      link: '/pages/faqs',
      parentId: 131
    }, {
      id: 137,
      label: 'MENUITEMS.UTILITY.LIST.PRICING',
      link: '/pages/pricing',
      parentId: 131
    }, {
      id: 138,
      label: 'MENUITEMS.UTILITY.LIST.ERROR404',
      link: '/pages/404',
      parentId: 131
    }, {
      id: 139,
      label: 'MENUITEMS.UTILITY.LIST.ERROR500',
      link: '/pages/500',
      parentId: 131
    }]
  }]
}];

/***/ }),

/***/ 58979:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical/vertical.component */ 17642);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 64338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/event.service */ 30944);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 81383);








function LayoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-vertical");
  }
}
function LayoutComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-horizontal");
  }
}
class LayoutComponent {
  constructor(eventService, store, stores) {
    this.eventService = eventService;
    this.store = store;
    this.stores = stores;
    this.dataLayout$ = store.select('layout').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.DATA_LAYOUT));
  }
  ngOnInit() {
    // default settings
    this.stores.select('layout').subscribe(data => {
      document.body.setAttribute('data-bs-theme', data.LAYOUT_MODE);
      document.body.setAttribute('data-layout-size', data.LAYOUT_WIDTH);
      document.body.setAttribute('data-sidebar', data.SIDEBAR_MODE);
      document.body.setAttribute('data-topbar', data.TOPBAR_TYPE);
      switch (data.SIDEBAR_MODE) {
        case "light":
          document.body.setAttribute('data-sidebar', 'light');
          document.body.setAttribute('data-topbar', 'dark');
          document.body.removeAttribute('data-sidebar-size');
          document.body.removeAttribute('data-layout-size');
          document.body.removeAttribute('data-keep-enlarged');
          document.body.classList.remove('vertical-collpsed');
          document.body.removeAttribute('data-layout-scrollable');
          break;
        case "compact":
          document.body.setAttribute('data-sidebar-size', 'small');
          document.body.setAttribute('data-sidebar', 'dark');
          document.body.removeAttribute('data-topbar');
          document.body.removeAttribute('data-layout-size');
          document.body.removeAttribute('data-keep-enlarged');
          document.body.classList.remove('sidebar-enable');
          document.body.classList.remove('vertical-collpsed');
          document.body.removeAttribute('data-layout-scrollable');
          break;
        case "dark":
          document.body.setAttribute('data-sidebar', 'dark');
          document.body.removeAttribute('data-topbar');
          document.body.removeAttribute('data-layout-size');
          document.body.removeAttribute('data-keep-enlarged');
          document.body.removeAttribute('data-sidebar-size');
          document.body.classList.remove('sidebar-enable');
          document.body.classList.remove('vertical-collpsed');
          document.body.removeAttribute('data-layout-scrollable');
          break;
        case "icon":
          document.body.classList.add('vertical-collpsed');
          document.body.setAttribute('data-sidebar', 'dark');
          document.body.removeAttribute('data-layout-size');
          document.body.setAttribute('data-keep-enlarged', "true");
          document.body.removeAttribute('data-topbar');
          document.body.removeAttribute('data-layout-scrollable');
          break;
        case "colored":
          document.body.classList.remove('sidebar-enable');
          document.body.classList.remove('vertical-collpsed');
          document.body.setAttribute('data-sidebar', 'colored');
          document.body.removeAttribute('data-layout-size');
          document.body.removeAttribute('data-keep-enlarged');
          document.body.removeAttribute('data-topbar');
          document.body.removeAttribute('data-layout-scrollable');
          document.body.removeAttribute('data-sidebar-size');
          break;
        default:
          document.body.setAttribute('data-sidebar', 'dark');
          break;
      }
      switch (data.LAYOUT_WIDTH) {
        case "fluid":
          document.body.setAttribute("data-layout-size", "fluid");
          document.body.classList.remove("vertical-collpsed");
          document.body.removeAttribute("data-layout-scrollable");
          break;
        case "boxed":
          document.body.setAttribute("data-layout-size", "boxed");
          document.body.classList.add("vertical-collpsed");
          document.body.removeAttribute("data-layout-scrollable");
          break;
        case "scrollable":
          document.body.removeAttribute("data-layout-size");
          document.body.setAttribute("data-layout-scrollable", "true");
          document.body.setAttribute("data-layout-size", "fluid");
          document.body.classList.remove("right-bar-enabled", "vertical-collpsed");
        default:
          document.body.setAttribute("data-layout-size", "fluid");
          break;
      }
    });
  }
  ngAfterViewInit() {}
  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    this.dataLayout$.subscribe(dataLayout => {
      document.body.setAttribute('data-layout', dataLayout);
    });
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 6,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LayoutComponent_Conditional_0_Template, 1, 0, "app-vertical");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_Conditional_2_Template, 1, 0, "app-horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.dataLayout$) === "vertical" ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.dataLayout$) === "horizontal" ? 2 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_0__.VerticalComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_1__.HorizontalComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 56730:
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightsidebarComponent: () => (/* binding */ RightsidebarComponent)
/* harmony export */ });
/* harmony import */ var src_app_store_layouts_layouts_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/layouts/layouts.reducer */ 47749);
/* harmony import */ var src_app_store_layouts_layout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/layouts/layout.actions */ 34261);
/* harmony import */ var src_app_store_layouts_layout_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/layouts/layout.selector */ 68029);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar-angular */ 67363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/event.service */ 30944);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 81383);









function RightsidebarComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Sidebar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 17)(5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_29_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeSidebartype("light"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 17)(9, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_29_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeSidebartype("dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 17)(13, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_29_Template_input_change_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeSidebartype("compact"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 17)(17, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_29_Template_input_change_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeSidebartype("icon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17)(21, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_29_Template_input_change_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeSidebartype("colored"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.sidebar === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.sidebar === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.sidebar === "compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.sidebar === "icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.sidebar === "colored");
  }
}
function RightsidebarComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Topbar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10)(5, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_41_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeTopbar("light"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10)(9, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_41_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeTopbar("dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10)(13, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Conditional_41_Template_input_change_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changeTopbar("colored"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.topbar === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.topbar === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.topbar === "colored");
  }
}
// import { RootReducerState } from 'src/app/store';
/**
 * Rightsidebar component
 */
class RightsidebarComponent {
  constructor(eventService, store) {
    this.eventService = eventService;
    this.store = store;
  }
  ngOnInit() {
    this.initialAppState = src_app_store_layouts_layouts_reducer__WEBPACK_IMPORTED_MODULE_0__.initialState;
    this.store.select('layout').subscribe(data => {
      this.mode = data.LAYOUT_MODE;
      this.theme = data.DATA_LAYOUT;
      this.topbar = data.TOPBAR_TYPE;
      this.sidebar = data.SIDEBAR_MODE;
      this.layoutSize = data.LAYOUT_WIDTH;
    });
    this.attribute = '';
    /**
     * horizontal-vertical layput set
     */
    this.attribute = document.body.getAttribute('data-layout');
    const vertical = document.getElementById('is-layout');
    if (vertical != null) {
      vertical.setAttribute('checked', 'true');
    }
    if (this.attribute == 'horizontal') {
      vertical.removeAttribute('checked');
    }
  }
  /**
   * Hide the sidebar
   */
  hide() {
    document.body.classList.remove('right-bar-enabled');
  }
  /**
   * Change Topbar
   */
  changeTopbar(topbar) {
    this.topbar = topbar;
    this.eventService.broadcast('changeTopbar', topbar);
  }
  // toggle button of layout mode
  toggleLayout() {
    this.theme = this.theme === 'vertical' ? 'horizontal' : 'vertical';
    this.changeLayout(this.theme);
  }
  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layoutMode) {
    this.theme = layoutMode;
    this.store.dispatch((0,src_app_store_layouts_layout_actions__WEBPACK_IMPORTED_MODULE_1__.changesLayout)({
      layoutMode
    }));
    this.store.select(src_app_store_layouts_layout_selector__WEBPACK_IMPORTED_MODULE_2__.getLayoutMode).subscribe(layout => {
      document.documentElement.setAttribute('data-layout', layout);
    });
  }
  changeWidth(layoutWidth) {
    this.store.dispatch((0,src_app_store_layouts_layout_actions__WEBPACK_IMPORTED_MODULE_1__.changeLayoutWidth)({
      layoutWidth
    }));
    this.store.select(src_app_store_layouts_layout_selector__WEBPACK_IMPORTED_MODULE_2__.getLayoutWidth).subscribe(layoutWidth => {
      document.documentElement.setAttribute('data-layout-size', layoutWidth);
    });
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }
  // sidebar
  changeSidebartype(sidebarMode) {
    this.store.dispatch((0,src_app_store_layouts_layout_actions__WEBPACK_IMPORTED_MODULE_1__.changeSidebarMode)({
      sidebarMode
    }));
    this.store.select(src_app_store_layouts_layout_selector__WEBPACK_IMPORTED_MODULE_2__.getsidebar).subscribe(sidebarMode => {
      document.documentElement.setAttribute('data-sidebar', sidebarMode);
    });
  }
  changeMode(mode) {
    this.store.dispatch((0,src_app_store_layouts_layout_actions__WEBPACK_IMPORTED_MODULE_1__.changeMode)({
      mode
    }));
    this.store.select(src_app_store_layouts_layout_selector__WEBPACK_IMPORTED_MODULE_2__.getLayoutMode).subscribe(mode => {
      document.documentElement.setAttribute('data-bs-theme', mode);
    });
    if (mode == 'light') {
      document.documentElement.setAttribute('data-topbar', 'dark');
    } else {
      document.documentElement.setAttribute('data-topbar', mode);
    }
  }
  static {
    this.ɵfac = function RightsidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RightsidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: RightsidebarComponent,
      selectors: [["app-rightsidebar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 55,
      vars: 8,
      consts: [[1, "right-bar"], [1, "h-100"], [1, "rightbar-title", "px-3", "py-4"], ["href", "javascript:void(0);", 1, "right-bar-toggle", "float-end", 3, "click"], [1, "mdi", "mdi-close", "noti-icon"], [1, "m-0"], [1, "mt-4", "mb-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "is-layout", 1, "form-check-input", 3, "change"], ["for", "is-layout", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "layout-width", "id", "layout-width-fuild", "value", "fluid", 1, "form-check-input", 3, "change", "checked"], ["for", "layout-width-fuild", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-boxed", "value", "boxed", 1, "form-check-input", 3, "change", "checked"], ["for", "layout-width-boxed", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-scrollable", "value", "scrollable", 1, "form-check-input", 3, "change", "checked"], ["for", "layout-width-scrollable", 1, "form-check-label"], [1, "form-check", "sidebar-setting"], ["type", "radio", "name", "theme-color", "id", "theme-color-light", 1, "form-check-input", 3, "change", "checked"], ["for", "theme-color-light", 1, "form-check-label"], ["type", "radio", "name", "theme-color", "id", "theme-color-dark", 1, "form-check-input", 3, "change", "checked"], ["for", "theme-color-dark", 1, "form-check-label"], [1, "text-center", "mb-0", "mt-4"], [1, "p-4"], [1, "mb-2"], ["href", "//skote-v-light.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-1.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-dark.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-2.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-rtl.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-3.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], [1, "rightbar-overlay", 3, "click"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-light", "value", "light", 1, "form-check-input", 3, "change", "checked"], ["for", "sidebar-color-light", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-dark", "value", "dark", 1, "form-check-input", 3, "change", "checked"], ["for", "sidebar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-brand", "value", "compact", 1, "form-check-input", 3, "change", "checked"], ["for", "sidebar-color-brand", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-icon", "value", "icon", 1, "form-check-input", 3, "change", "checked"], ["for", "sidebar-color-icon", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color", "value", "colored", 1, "form-check-input", 3, "change", "checked"], ["for", "sidebar-color", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-light", "value", "light", 1, "form-check-input", 3, "change", "checked"], ["for", "topbar-color-light", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-dark", "value", "dark", 1, "form-check-input", 3, "change", "checked"], ["for", "topbar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-colored", "value", "colored", 1, "form-check-input", 3, "change", "checked"], ["for", "topbar-color-colored", 1, "form-check-label"]],
      template: function RightsidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "ngx-simplebar", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightsidebarComponent_Template_a_click_3_listener() {
            return ctx.hide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_11_listener() {
            return ctx.toggleLayout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Width");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_18_listener() {
            return ctx.changeWidth("fluid");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Fluid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10)(22, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_22_listener() {
            return ctx.changeWidth("boxed");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Boxed");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 10)(26, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_26_listener() {
            return ctx.changeWidth("scrollable");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Scrolable");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, RightsidebarComponent_Conditional_29_Template, 24, 5, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Theme Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17)(34, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_34_listener() {
            return ctx.changeMode("light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 17)(38, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_38_listener() {
            return ctx.changeMode("dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, RightsidebarComponent_Conditional_41_Template, 16, 3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "h6", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Choose Layouts");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 23)(45, "div", 24)(46, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 24)(49, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 24)(52, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightsidebarComponent_Template_div_click_54_listener() {
            return ctx.hide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.theme === "vertical" ? "Vertical" : "Horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.layoutSize === "fluid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.layoutSize === "boxed");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.layoutSize === "scrollable");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.attribute == "vertical" ? 29 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.mode === "light");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.mode === "dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.attribute !== "vertical" ? 41 : -1);
        }
      },
      dependencies: [simplebar_angular__WEBPACK_IMPORTED_MODULE_6__.SimplebarAngularModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_6__.SimplebarAngularComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 81009:
/*!*******************************************************!*\
  !*** ./src/app/layouts/sidebar/client-portal-menu.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT_PORTAL_MENU: () => (/* binding */ CLIENT_PORTAL_MENU)
/* harmony export */ });
const CLIENT_PORTAL_MENU = [{
  id: 1,
  label: 'MENUITEMS.PORTAL.DASHBOARD.TEXT',
  icon: 'bx-home-circle',
  link: '/client-portal/dashboard'
}, {
  id: 2,
  label: 'MENUITEMS.PORTAL.DOCUMENTS.TEXT',
  icon: 'bx-file',
  link: '/client-portal/documents'
}, {
  id: 3,
  label: 'MENUITEMS.PORTAL.INTAKE.TEXT',
  icon: 'bx-edit',
  link: '/client-portal/tax-intake'
}, {
  id: 4,
  label: 'MENUITEMS.PORTAL.CHAT.TEXT',
  icon: 'bx-chat',
  link: '/client-portal/chat'
}, {
  id: 5,
  isLayout: true
}, {
  id: 6,
  label: 'MENUITEMS.PORTAL.LOGOUT.TEXT',
  icon: 'bx-log-out',
  link: 'logout',
  isLogout: true
}];

/***/ }),

/***/ 64970:
/*!*****************************************!*\
  !*** ./src/app/layouts/sidebar/menu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU: () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [{
  id: 2,
  label: 'MENUITEMS.DASHBOARDS.TEXT',
  icon: 'bx-home-circle',
  link: '/dashboards/default'
}, {
  id: 8,
  isLayout: true
},
// {
//     id: 40,
//     label: 'MENUITEMS.PROJECTS.TEXT',
//     icon: 'bx-briefcase-alt-2',
//     subItems: [
//         {
//             id: 41,
//             label: 'MENUITEMS.PROJECTS.LIST.GRID',
//             link: '/projects/grid',
//             parentId: 40
//         },
//         {
//             id: 42,
//             label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
//             link: '/projects/list',
//             parentId: 40
//         },
//         {
//             id: 43,
//             label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
//             link: '/projects/overview',
//             parentId: 40
//         },
//         {
//             id: 44,
//             label: 'MENUITEMS.PROJECTS.LIST.CREATE',
//             link: '/projects/create',
//             parentId: 40
//         }
//     ]
// },
// {
//     id: 45,
//     label: 'MENUITEMS.TASKS.TEXT',
//     icon: 'bx-task',
//     link: '/tasks/list',
//     // subItems: [
//     //     {
//     //         id: 46,
//     //         label: 'MENUITEMS.TASKS.LIST.TASKLIST',
//     //         link: '/tasks/list',
//     //         parentId: 45
//     //     },
//     //     {
//     //         id: 48,
//     //         label: 'MENUITEMS.TASKS.LIST.CREATETASK',
//     //         link: '/tasks/create',
//     //         parentId: 45
//     //     }
//     // ]
// },
// {
//     id: 49,
//     label: 'MENUITEMS.CONTACTS.TEXT',
//     icon: 'bxs-user-detail',
//     link: '/contacts/list',
//     // subItems: [
//     //     {
//     //         id: 50,
//     //         label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
//     //         link: '/contacts/grid',
//     //         parentId: 49
//     //     },
//     //     {
//     //         id: 51,
//     //         label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
//     //         link: '/contacts/list',
//     //         parentId: 49
//     //     },
//     //     {
//     //         id: 52,
//     //         label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
//     //         link: '/contacts/profile',
//     //         parentId: 49
//     //     }
//     // ]
// },
{
  id: 50,
  label: 'MENUITEMS.CLIENTS.TEXT',
  icon: 'bxs-user-detail',
  link: '/clients/list'
}, {
  id: 10,
  label: 'MENUITEMS.CALENDAR.TEXT',
  icon: 'bx-calendar',
  link: '/calendar'
}, {
  id: 30,
  label: 'MENUITEMS.EMAIL.TEXT',
  icon: 'bx-envelope',
  link: '/email/inbox'
  // subItems: [
  //     {
  //         id: 31,
  //         label: 'MENUITEMS.EMAIL.LIST.INBOX',
  //         link: '/email/inbox',
  //         parentId: 30
  //     },
  //     {
  //         id: 32,
  //         label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
  //         link: '/email/read/1',
  //         parentId: 30
  //     },
  //     {
  //         id: 33,
  //         label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
  //         badge: {
  //             variant: 'success',
  //             text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
  //         },
  //         parentId: 30,
  //         subItems: [
  //             {
  //                 id: 34,
  //                 label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
  //                 link: '/email/basic',
  //                 parentId: 30
  //             },
  //             {
  //                 id: 35,
  //                 label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
  //                 link: '/email/alert',
  //                 parentId: 30
  //             },
  //             {
  //                 id: 36,
  //                 label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
  //                 link: '/email/billing',
  //                 parentId: 30
  //             }
  //         ]
  //     }
  // ]
}, {
  id: 12,
  label: 'MENUITEMS.FILEMANAGER.TEXT',
  icon: 'bx-file',
  link: '/filemanager'
}, {
  id: 50,
  label: 'MENUITEMS.INVITATIONS.TEXT',
  icon: 'bx-mail-send',
  link: '/invitations'
}, {
  id: 60,
  label: 'MENUITEMS.TAXCONSULTANT.TEXT',
  icon: 'bx-calculator',
  subItems: [{
    id: 61,
    label: 'MENUITEMS.TAXCONSULTANT.LIST.INTAKEFORMS',
    link: '/tax-consultant/intake-forms',
    parentId: 60
  }, {
    id: 62,
    label: 'MENUITEMS.TAXCONSULTANT.LIST.CLIENTDOCUMENTS',
    link: '/tax-consultant/client-documents',
    parentId: 60
  }]
}, {
  id: 37,
  label: 'MENUITEMS.INVOICES.TEXT',
  icon: 'bx-receipt',
  link: '/invoices/list'
  // subItems: [
  //     {
  //         id: 38,
  //         label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
  //         link: '/invoices/list',
  //         parentId: 37
  //     },
  //     {
  //         id: 39,
  //         label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
  //         link: '/invoices/detail',
  //         parentId: 37
  //     },
  // ]
}, {
  id: 30,
  label: 'MENUITEMS.CHAT.TEXT',
  icon: 'bx-chat',
  link: '/chat'
}];

/***/ }),

/***/ 76072:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs */ 18592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ 64970);
/* harmony import */ var _client_portal_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-portal-menu */ 81009);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simplebar-angular */ 67363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/event.service */ 30944);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/api.service */ 16344);















const _c0 = ["componentRef"];
const _c1 = ["sideMenu"];
const _c2 = (a0, a1) => ({
  "has-arrow": a0,
  "has-dropdown": a1
});
function SidebarComponent_ng_template_0_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r1.label));
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r1.icon, "");
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill float-end bg-", item_r1.badge.variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r1.badge.text));
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_1_Conditional_1_Template, 1, 3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_1_Conditional_5_Template, 3, 6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c2, !item_r1.badge, item_r1.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.icon ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, item_r1.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.badge ? 5 : -1);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r1.icon, "");
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", item_r1.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r1.badge.text));
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_0_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.handleLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_0_Conditional_1_Template, 1, 3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_0_Conditional_5_Template, 3, 6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.icon ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, item_r1.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.badge ? 5 : -1);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r1.icon, "");
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", item_r1.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r1.badge.text));
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_1_Conditional_1_Template, 1, 3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_1_Conditional_5_Template, 3, 6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.icon ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, item_r1.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.badge ? 5 : -1);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_0_Template, 6, 5, "a", 11)(1, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Conditional_1_Template, 6, 6, "a", 12);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.isLogout ? 0 : 1);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subSubitem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", subSubitem_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subSubitem_r4.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, subSubitem_r4.label), " ");
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](4, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_1_For_5_Template, 4, 5, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subitem_r5.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, subitem_r5.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](subitem_r5.subItems);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", subitem_r5.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, subitem_r5.badge.text));
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_2_Conditional_3_Template, 3, 6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", subitem_r5.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subitem_r5.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, subitem_r5.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](subitem_r5.badge ? 3 : -1);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_1_Template, 6, 4)(2, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Conditional_2_Template, 4, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.hasItems(subitem_r5) ? 1 : 2);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_For_2_Template, 3, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](item_r1.subItems);
  }
}
function SidebarComponent_ng_template_0_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_1_Template, 6, 9, "a", 8)(2, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_2_Template, 2, 1)(3, SidebarComponent_ng_template_0_For_4_Conditional_2_Conditional_3_Template, 3, 0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.hasItems(item_r1) ? 1 : 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.hasItems(item_r1) ? 3 : -1);
  }
}
function SidebarComponent_ng_template_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_For_4_Conditional_1_Template, 3, 3, "li", 7)(2, SidebarComponent_ng_template_0_For_4_Conditional_2_Template, 4, 2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](item_r1.isTitle ? 1 : !item_r1.isTitle && !item_r1.isLayout ? 2 : -1);
  }
}
function SidebarComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "ul", 6, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](3, SidebarComponent_ng_template_0_For_4_Template, 3, 1, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.menuItems);
  }
}
function SidebarComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function SidebarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const contentTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", contentTemplate_r6);
  }
}
function SidebarComponent_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function SidebarComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_Conditional_6_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const contentTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", contentTemplate_r6);
  }
}
/**
 * Sidebar component
 */
class SidebarComponent {
  constructor(eventService, router, translate, http, apiService) {
    this.eventService = eventService;
    this.router = router;
    this.translate = translate;
    this.http = http;
    this.apiService = apiService;
    this.isCondensed = false;
    this.menuItems = [];
    router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this._activateMenuDropdown();
        this._scrollElement();
      }
    });
  }
  ngOnInit() {
    this.initialize();
    this._scrollElement();
  }
  ngAfterViewInit() {
    this.menu = new metismenujs__WEBPACK_IMPORTED_MODULE_0__["default"](this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }
  toggleMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }
  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new metismenujs__WEBPACK_IMPORTED_MODULE_0__["default"](this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  _scrollElement() {
    setTimeout(() => {
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
        if (currentPosition > 500) if (this.scrollRef.SimpleBar !== null) this.scrollRef.SimpleBar.getScrollElement().scrollTop = currentPosition + 300;
      }
    }, 300);
  }
  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }
  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    const paths = [];
    for (let i = 0; i < links.length; i++) {
      paths.push(links[i]['pathname']);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) {
              childAnchor.classList.add('mm-active');
            }
            if (childDropdown) {
              childDropdown.classList.add('mm-active');
            }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') {
                  childanchor.classList.add('mm-active');
                }
              }
            }
          }
        }
      }
    }
  }
  /**
   * Initialize
   */
  initialize() {
    // Check if user is in client portal
    const currentUrl = this.router.url;
    if (currentUrl.includes('/client-portal')) {
      this.menuItems = _client_portal_menu__WEBPACK_IMPORTED_MODULE_2__.CLIENT_PORTAL_MENU;
    } else {
      this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU;
    }
  }
  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
  /**
   * Handle logout from sidebar
   */
  handleLogout() {
    // Call backend logout API
    this.apiService.logout().subscribe({
      next: response => {
        // Clear local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        // Redirect to login page
        this.router.navigate(['/auth/login']);
      },
      error: error => {
        // Even if logout API fails, clear local storage and redirect
        console.error('Logout API error:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/login']);
      }
    });
  }
  static {
    this.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      viewQuery: function SidebarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
        }
      },
      inputs: {
        isCondensed: "isCondensed"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 1,
      consts: [["contentTemplate", ""], ["componentRef", ""], ["sideMenu", ""], [1, "vertical-menu"], [1, "h-100"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], [1, "menu-title"], ["href", "javascript:void(0);", 1, "is-parent", 3, "ngClass"], ["aria-expanded", "false", 1, "sub-menu"], [3, "class"], ["href", "javascript:void(0);", 1, "side-nav-link-ref"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], ["href", "javascript:void(0);", 1, "side-nav-link-ref", 3, "click"], ["href", "javascript:void(0);", 1, "side-nav-link-a-ref", "has-arrow"], ["aria-expanded", "false", 1, "sub-menu", "mm-collapse"], [4, "ngTemplateOutlet"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SidebarComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "ngx-simplebar", 4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_Conditional_5_Template, 2, 1, "div")(6, SidebarComponent_Conditional_6_Template, 2, 1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isCondensed ? 5 : 6);
        }
      },
      dependencies: [simplebar_angular__WEBPACK_IMPORTED_MODULE_9__.SimplebarAngularModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_9__.SimplebarAngularComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 56414:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopbarComponent: () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var src_app_store_layouts_layout_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/layouts/layout.actions */ 34261);
/* harmony import */ var src_app_store_layouts_layout_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/layouts/layout.selector */ 68029);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 54195);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simplebar-angular */ 67363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/api.service */ 16344);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/language.service */ 83318);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 39213);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 81383);

















const _c0 = a0 => ({
  "d-none": a0
});
const _c1 = a0 => ({
  "active": a0
});
function TopbarComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "form", 38)(2, "div", 39)(3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 42)(6, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
}
function TopbarComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.valueset, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function TopbarComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function TopbarComponent_div_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_div_34_For_2_Template_a_click_0_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.setLanguage(item_r3.text, item_r3.lang, item_r3.flag));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r0.cookieValue === item_r3.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", item_r3.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.text);
  }
}
function TopbarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](1, TopbarComponent_div_34_For_2_Template, 4, 5, "a", 45, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.listLang);
  }
}
function TopbarComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49)(1, "div", 38)(2, "div", 50)(3, "div", 51)(4, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 52)(8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ngx-simplebar", 54)(12, "a", 55)(13, "div", 2)(14, "div", 56)(15, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 59)(18, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 61)(22, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 55)(30, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 59)(33, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 61)(37, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 55)(45, "div", 2)(46, "div", 56)(47, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 59)(50, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 61)(54, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "a", 55)(62, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 59)(65, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 61)(69, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 68)(77, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 15, "HEADER.NOTIFICATIONS.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 17, "HEADER.NOTIFICATIONS.VIEW_ALL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 19, "HEADER.NOTIFICATIONS.FIRST.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 21, "HEADER.NOTIFICATIONS.FIRST.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 23, "HEADER.NOTIFICATIONS.FIRST.TIME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 25, "HEADER.NOTIFICATIONS.SECOND.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 27, "HEADER.NOTIFICATIONS.SECOND.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 29, "HEADER.NOTIFICATIONS.SECOND.TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 31, "HEADER.NOTIFICATIONS.THIRD.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](56, 33, "HEADER.NOTIFICATIONS.THIRD.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](60, 35, "HEADER.NOTIFICATIONS.THIRD.TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](67, 37, "HEADER.NOTIFICATIONS.FOUR.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 39, "HEADER.NOTIFICATIONS.FOUR.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 41, "HEADER.NOTIFICATIONS.FOUR.TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](81, 43, "HEADER.NOTIFICATIONS.LOAD_MORE"));
  }
}
function TopbarComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 76)(10, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_div_49_Template_a_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "HEADER.LOGIN.PROFILE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, "HEADER.LOGIN.MY_WALLET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 9, "HEADER.LOGIN.SETTINGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 11, "HEADER.LOGIN.LOCK_SCREEN"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 13, "HEADER.LOGIN.LOGOUT"), "");
  }
}
/**
 * Topbar component
 */
class TopbarComponent {
  // Define layoutMode as a property
  constructor(document, router, apiService, languageService, translate, _cookiesService, store) {
    this.document = document;
    this.router = router;
    this.apiService = apiService;
    this.languageService = languageService;
    this.translate = translate;
    this._cookiesService = _cookiesService;
    this.store = store;
    this.listLang = [{
      text: 'English',
      flag: 'assets/images/flags/us.jpg',
      lang: 'en'
    }, {
      text: 'Spanish',
      flag: 'assets/images/flags/spain.jpg',
      lang: 'es'
    }, {
      text: 'German',
      flag: 'assets/images/flags/germany.jpg',
      lang: 'de'
    }, {
      text: 'Italian',
      flag: 'assets/images/flags/italy.jpg',
      lang: 'it'
    }, {
      text: 'Russian',
      flag: 'assets/images/flags/russia.jpg',
      lang: 'ru'
    }];
    this.userEmail = 'user@example.com';
    this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    // this.initialAppState = initialState;
    this.store.select('layout').subscribe(data => {
      this.theme = data.DATA_LAYOUT;
    });
    this.openMobileMenu = false;
    this.element = document.documentElement;
    // Load user email from localStorage
    this.loadUserEmail();
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.valueset = 'assets/images/flags/us.jpg';
      }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }
  /**
   * Load user's email from localStorage
   */
  loadUserEmail() {
    const currentUser = localStorage.getItem('currentUser');
    console.log('=== TOPBAR USER DEBUG ===');
    console.log('currentUser from localStorage:', currentUser);
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        console.log('Parsed user object:', user);
        console.log('Available user properties:', Object.keys(user));
        // Try multiple possible field names for email
        this.userEmail = user.email || user.emailAddress || user.username || 'user@firmpilot.com';
        console.log('Selected userEmail:', this.userEmail);
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.userEmail = 'user@firmpilot.com';
      }
    } else {
      console.log('No currentUser found in localStorage - using default');
      this.userEmail = 'user@firmpilot.com';
    }
    console.log('========================');
  }
  setLanguage(text, lang, flag) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }
  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }
  /**
   * Logout the user
   */
  logout() {
    // Call backend logout API
    this.apiService.logout().subscribe({
      next: response => {
        // Clear local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        // Redirect to login page
        this.router.navigate(['/auth/login']);
      },
      error: error => {
        // Even if logout API fails, clear local storage and redirect
        console.error('Logout API error:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/login']);
      }
    });
  }
  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (!document.fullscreenElement && !this.element.mozFullScreenElement && !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
  changeLayout(layoutMode) {
    this.theme = layoutMode;
    this.store.dispatch((0,src_app_store_layouts_layout_actions__WEBPACK_IMPORTED_MODULE_0__.changesLayout)({
      layoutMode
    }));
    this.store.select(src_app_store_layouts_layout_selector__WEBPACK_IMPORTED_MODULE_1__.getLayoutMode).subscribe(layout => {
      document.documentElement.setAttribute('data-layout', layout);
    });
  }
  static {
    this.ɵfac = function TopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: TopbarComponent,
      selectors: [["app-topbar"]],
      outputs: {
        settingsButtonClicked: "settingsButtonClicked",
        mobileMenuButtonClicked: "mobileMenuButtonClicked"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 53,
      vars: 8,
      consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box", 2, "padding-top", "25px"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], [1, "mb-0", "text-dark", "font-weight-bold"], [1, "logo-lg"], ["routerLink", "/", 1, "logo", "logo-light"], [1, "mb-0", "text-light", "font-weight-bold"], ["type", "button", "id", "vertical-menu-btn", 1, "btn", "btn-sm", "px-3", "font-size-16", "header-item", 3, "click", "ngClass"], [1, "fa", "fa-fw", "fa-bars"], [1, "app-search", "d-none", "d-lg-block"], [1, "position-relative"], ["type", "text", 1, "form-control", 3, "placeholder"], [1, "bx", "bx-search-alt"], ["dropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ms-2"], ["type", "button", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "dropdownToggle", "", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["class", "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0", "aria-labelledby", "page-header-search-dropdown", 4, "dropdownMenu"], ["dropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "id", "page-header-user-dropdown", "dropdownToggle", "", 1, "btn", "header-item"], ["alt", "Header Language", "height", "16", 3, "src"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "dropdown", "d-none", "d-lg-inline-block", "ms-1"], ["type", "button", "data-bs-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", "waves-effect", 3, "click"], [1, "bx", "bx-fullscreen"], ["type", "button", "id", "page-header-notifications-dropdown", "dropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "bg-danger", "rounded-pill"], ["class", "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0", "aria-labelledby", "page-header-notifications-dropdown", 4, "dropdownMenu"], ["type", "button", "dropdownToggle", "", "id", "page-header-user-dropdown", 1, "btn", "header-item"], [1, "d-none", "d-xl-inline-block", "ms-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], [1, "dropdown", "d-inline-block"], ["type", "button", 1, "btn", "header-item", "noti-icon", "right-bar-toggle", 3, "click"], [1, "bx", "bx-cog", "bx-spin"], ["aria-labelledby", "page-header-search-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "ngClass"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "click", "ngClass"], ["alt", "user-image", "height", "12", 1, "me-1", 3, "src"], [1, "align-middle"], ["aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "row", "align-items-center"], [1, "col"], [1, "col-auto"], ["href", "javascript: void(0);", 1, "small"], [2, "position", "relative", "height", "230px"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "flex-grow-1"], [1, "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top", "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-14", "text-center"], [1, "mdi", "mdi-arrow-right-circle", "me-1"], ["key", "t-view-more"], ["routerLink", "/contacts/profile", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "me-1"], ["routerLink", "/crypto/wallet", "href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "badge", "bg-success", "float-end"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "me-1"], ["routerLink", "/pages/lock-screen-1", 1, "dropdown-item"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "me-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5)(6, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "FP");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 7)(9, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Firm Pilot");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 8)(12, "span", 5)(13, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "FP");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 7)(16, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Firm Pilot");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_18_listener($event) {
            return ctx.toggleMobileMenu($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "form", 12)(21, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 2)(26, "div", 16)(27, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TopbarComponent_div_29_Template, 8, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20)(31, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, TopbarComponent_Conditional_32_Template, 1, 1, "img", 22)(33, TopbarComponent_Conditional_33_Template, 1, 1, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, TopbarComponent_div_34_Template, 3, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 24)(36, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_36_listener() {
            return ctx.fullscreen();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 20)(39, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, TopbarComponent_div_43_Template, 82, 45, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 20)(45, "button", 31)(46, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, TopbarComponent_div_49_Template, 24, 15, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 34)(51, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_51_listener() {
            return ctx.toggleRightSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, ctx.theme === "horizontal"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 4, "HEADER.SEARCH"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.flagvalue === undefined ? 32 : 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.userEmail, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownDirective, simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 17642:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerticalComponent: () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 56730);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 17856);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topbar/topbar.component */ 56414);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 76072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/event.service */ 30944);








// import { SIDEBAR_TYPE } from "../layouts.model";
/**
 * Vertical component
 */
class VerticalComponent {
  constructor(router, eventService) {
    this.router = router;
    this.eventService = eventService;
    this.isCondensed = false;
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        document.body.classList.remove('sidebar-enable');
      }
    });
  }
  ngOnInit() {
    document.body.setAttribute('data-layout', 'vertical');
  }
  isMobile() {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
  }
  ngAfterViewInit() {}
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }
  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    this.isCondensed = !this.isCondensed;
    document.body.classList.toggle('sidebar-enable');
    document.body.classList.toggle('vertical-collpsed');
    if (window.screen.width <= 768) {
      document.body.classList.remove('vertical-collpsed');
    }
  }
  static {
    this.ɵfac = function VerticalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: VerticalComponent,
      selectors: [["app-vertical"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"]],
      template: function VerticalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-topbar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() {
            return ctx.onSettingsButtonClicked();
          })("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() {
            return ctx.onToggleMobileMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-rightsidebar");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_0__.RightsidebarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 70964:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/invitations/client-registration/client-registration.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientRegistrationComponent: () => (/* binding */ ClientRegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api.service */ 16344);







function ClientRegistrationComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading invitation details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ClientRegistrationComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35)(4, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Go to Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.invitationError, " ");
  }
}
function ClientRegistrationComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 37)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Registration Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Your account has been created successfully. You will be redirected to the login page shortly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 42)(9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Redirecting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Redirecting to login...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ClientRegistrationComponent_div_28_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71)(1, "div", 46)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Entity Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 46)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.client == null ? null : ctx_r0.client.entityType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.client == null ? null : ctx_r0.client.status, " ");
  }
}
function ClientRegistrationComponent_div_28_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function ClientRegistrationComponent_div_28_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First name must be at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClientRegistrationComponent_div_28_div_23_div_1_Template, 2, 0, "div", 23)(2, ClientRegistrationComponent_div_28_div_23_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["firstName"].errors == null ? null : ctx_r0.f["firstName"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["firstName"].errors == null ? null : ctx_r0.f["firstName"].errors["minlength"]);
  }
}
function ClientRegistrationComponent_div_28_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last name must be at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClientRegistrationComponent_div_28_div_30_div_1_Template, 2, 0, "div", 23)(2, ClientRegistrationComponent_div_28_div_30_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["lastName"].errors == null ? null : ctx_r0.f["lastName"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["lastName"].errors == null ? null : ctx_r0.f["lastName"].errors["minlength"]);
  }
}
function ClientRegistrationComponent_div_28_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClientRegistrationComponent_div_28_div_40_div_1_Template, 2, 0, "div", 23)(2, ClientRegistrationComponent_div_28_div_40_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["minlength"]);
  }
}
function ClientRegistrationComponent_div_28_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please confirm your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClientRegistrationComponent_div_28_div_50_div_1_Template, 2, 0, "div", 23)(2, ClientRegistrationComponent_div_28_div_50_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["confirmPassword"].errors == null ? null : ctx_r0.f["confirmPassword"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["confirmPassword"].errors == null ? null : ctx_r0.f["confirmPassword"].errors["passwordMismatch"]);
  }
}
function ClientRegistrationComponent_div_28_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 74);
  }
}
function ClientRegistrationComponent_div_28_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Creating Account...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Complete Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientRegistrationComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 43)(2, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Invitation Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8)(6, "div", 46)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Client:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 46)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ClientRegistrationComponent_div_28_div_14_Template, 9, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ClientRegistrationComponent_div_28_Template_form_ngSubmit_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ClientRegistrationComponent_div_28_div_16_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ClientRegistrationComponent_div_28_div_23_Template, 3, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 49)(25, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ClientRegistrationComponent_div_28_div_30_Template, 3, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 49)(32, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ClientRegistrationComponent_div_28_div_40_Template, 3, 2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 49)(42, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Confirm Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ClientRegistrationComponent_div_28_div_50_Template, 3, 2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 65)(52, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ClientRegistrationComponent_div_28_span_53_Template, 1, 0, "span", 67)(54, ClientRegistrationComponent_div_28_span_54_Template, 2, 0, "span", 23)(55, ClientRegistrationComponent_div_28_span_55_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 68)(57, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Terms of Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " & ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getClientDisplayName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.client == null ? null : ctx_r0.client.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.client == null ? null : ctx_r0.client.entityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.registrationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r0.submitted && ctx_r0.f["firstName"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["firstName"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r0.submitted && ctx_r0.f["lastName"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["lastName"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r0.submitted && ctx_r0.f["password"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["password"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r0.submitted && ctx_r0.f["confirmPassword"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f["confirmPassword"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" By registering you agree to the ", ctx_r0.getFirmName(), " ");
  }
}
function ClientRegistrationComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68)(1, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class ClientRegistrationComponent {
  constructor(formBuilder, route, router, apiService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.apiService = apiService;
    this.submitted = false;
    this.loading = false;
    this.error = '';
    this.success = false;
    this.invitationToken = '';
    this.invitation = null;
    this.client = null;
    this.invitationLoading = true;
    this.invitationError = '';
  }
  ngOnInit() {
    // Get invitation token from URL
    this.invitationToken = this.route.snapshot.params['token'];
    if (!this.invitationToken) {
      this.invitationError = 'Invalid invitation link. Please check your invitation email.';
      this.invitationLoading = false;
      return;
    }
    // Initialize registration form
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
    // Load invitation details
    this.loadInvitationDetails();
  }
  /**
   * Custom validator to check if passwords match
   */
  passwordMatchValidator(form) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        passwordMismatch: true
      });
      return {
        passwordMismatch: true
      };
    }
    return null;
  }
  /**
   * Load invitation details using the token
   */
  loadInvitationDetails() {
    this.invitationLoading = true;
    this.invitationError = '';
    this.apiService.getInvitationByToken(this.invitationToken).subscribe({
      next: response => {
        console.log('Invitation details loaded:', response);
        if (response.success && response.invitation && response.client) {
          this.invitation = response.invitation;
          this.client = response.client;
          // Pre-fill form with client information
          this.registrationForm.patchValue({
            firstName: this.client.firstName || '',
            lastName: this.client.lastName || ''
          });
          // Check invitation status
          if (this.invitation.status === 'accepted') {
            this.invitationError = 'This invitation has already been accepted. Please contact your accountant if you need assistance.';
          } else if (this.invitation.status === 'expired') {
            this.invitationError = 'This invitation has expired. Please contact your accountant to request a new invitation.';
          }
        } else {
          this.invitationError = 'Invalid or expired invitation. Please check your invitation link.';
        }
        this.invitationLoading = false;
      },
      error: error => {
        console.error('Error loading invitation details:', error);
        this.invitationError = 'Unable to load invitation details. Please check your invitation link or try again later.';
        this.invitationLoading = false;
      }
    });
  }
  /**
   * Handle form submission to accept invitation and register
   */
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.registrationForm.invalid) {
      return;
    }
    this.loading = true;
    const registrationData = {
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      password: this.registrationForm.value.password
    };
    this.apiService.acceptInvitation(this.invitationToken, registrationData).subscribe({
      next: response => {
        console.log('Invitation accepted:', response);
        if (response.success) {
          this.success = true;
          this.loading = false;
          // Redirect to login page after a delay
          setTimeout(() => {
            this.router.navigate(['/account/login'], {
              queryParams: {
                message: 'Registration successful! Please log in with your credentials.',
                email: this.client?.email
              }
            });
          }, 3000);
        } else {
          this.error = response.message || 'Registration failed. Please try again.';
          this.loading = false;
        }
      },
      error: error => {
        console.error('Error accepting invitation:', error);
        this.error = error.error?.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }
  /**
   * Get form control for easy access in template
   */
  get f() {
    return this.registrationForm.controls;
  }
  /**
   * Check if invitation is valid for registration
   */
  isInvitationValid() {
    return this.invitation && (this.invitation.status === 'pending' || this.invitation.status === 'sent') && !this.invitationError;
  }
  /**
   * Format client name for display
   */
  getClientDisplayName() {
    if (!this.client) return '';
    return `${this.client.firstName || ''} ${this.client.lastName || ''}`.trim();
  }
  /**
   * Get firm name (could be dynamic based on invitation)
   */
  getFirmName() {
    return 'Firm Pilot'; // This could be dynamic based on the invitation
  }
  static {
    this.ɵfac = function ClientRegistrationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ClientRegistrationComponent,
      selectors: [["app-client-registration"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 11,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["href", "/", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], [1, "text-center", "mt-2"], [1, "text-primary"], [1, "text-muted"], ["class", "text-center py-4", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["class", "mt-4 text-center", 4, "ngIf"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], ["role", "alert", 1, "alert", "alert-danger"], [1, "mdi", "mdi-alert-circle-outline", "me-2"], [1, "mt-3"], ["href", "/account/login", 1, "btn", "btn-primary", "btn-sm"], [1, "avatar-md", "mx-auto", "mb-4"], [1, "avatar-title", "bg-light", "text-success", "display-4", "rounded-circle"], [1, "ri-checkbox-circle-fill"], [1, "text-success"], [1, "text-muted", "mb-4"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary", "me-2"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-heading", "mb-2"], [1, "mdi", "mdi-information-outline", "me-2"], [1, "col-sm-6"], ["class", "row mt-2", 4, "ngIf"], ["novalidate", "", 1, "needs-validation", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "firstName", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Enter your first name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Enter your last name", 1, "form-control"], ["for", "password", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup", "mb-3"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Enter password", 1, "form-control", "pe-5", "password-input"], ["type", "button", "id", "password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], [1, "ri-eye-fill", "align-middle"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirm password", 1, "form-control", "pe-5", "password-input"], ["type", "button", "id", "confirm-password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "mt-4", "text-center"], [1, "mb-0", "fs-14", "text-muted"], ["href", "#", 1, "text-decoration-underline"], [1, "row", "mt-2"], [1, "invalid-feedback"], [1, "invalid-feedback", "d-block"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mb-0"], ["href", "/account/login", 1, "fw-semibold", "text-primary", "text-decoration-underline"]],
      template: function ClientRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div")(12, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Complete Your Registration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "You've been invited to join our client portal. Please complete your registration below.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ClientRegistrationComponent_div_25_Template, 6, 0, "div", 21)(26, ClientRegistrationComponent_div_26_Template, 6, 1, "div", 22)(27, ClientRegistrationComponent_div_27_Template, 13, 0, "div", 21)(28, ClientRegistrationComponent_div_28_Template, 64, 22, "div", 23)(29, ClientRegistrationComponent_div_29_Template, 5, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "footer", 25)(31, "div", 7)(32, "div", 8)(33, "div", 9)(34, "div", 26)(35, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " for our clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome to ", ctx.getFirmName(), "!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invitationLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invitationError && !ctx.invitationLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.invitationLoading && !ctx.invitationError && !ctx.success && ctx.isInvitationValid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](37, 8, "currentYear", "yyyy"), " ", ctx.getFirmName(), ". Crafted with ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".auth-page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.auth-page-wrapper[_ngcontent-%COMP%]   .auth-one-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  position: relative;\n  overflow: hidden;\n}\n.auth-page-wrapper[_ngcontent-%COMP%]   .auth-one-bg[_ngcontent-%COMP%]   .bg-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.auth-page-wrapper[_ngcontent-%COMP%]   .auth-one-bg[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.auth-page-wrapper[_ngcontent-%COMP%]   .auth-one-bg[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  fill: #fff;\n}\n.auth-page-wrapper[_ngcontent-%COMP%]   .auth-page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  z-index: 1;\n  padding: 2rem 0;\n}\n\n.auth-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 40px;\n  width: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n  border-radius: 0.75rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: 1px solid #e9ecef;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #405189;\n  box-shadow: 0 0 0 0.2rem rgba(64, 81, 137, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #f06548;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #f06548;\n  box-shadow: 0 0 0 0.2rem rgba(240, 101, 72, 0.25);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n\n.auth-pass-inputgroup[_ngcontent-%COMP%] {\n  position: relative;\n}\n.auth-pass-inputgroup[_ngcontent-%COMP%]   .password-addon[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0.75rem 1rem;\n  color: #74788d;\n}\n.auth-pass-inputgroup[_ngcontent-%COMP%]   .password-addon[_ngcontent-%COMP%]:hover {\n  color: #405189;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #0ab39c;\n  border-color: #0ab39c;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #099885;\n  border-color: #099885;\n}\n.btn.btn-success[_ngcontent-%COMP%]:disabled {\n  background-color: #0ab39c;\n  border-color: #0ab39c;\n  opacity: 0.65;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #405189;\n  border-color: #405189;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #364574;\n  border-color: #364574;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background-color: #cff4fc;\n  color: #055160;\n}\n.alert.alert-info[_ngcontent-%COMP%]   .alert-heading[_ngcontent-%COMP%] {\n  color: #055160;\n  font-weight: 600;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n\n.avatar-md[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n.avatar-md[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n\n.spinner-border.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #405189 !important;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: #0ab39c !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #74788d !important;\n}\n\n.text-white-50[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 1.5rem 0;\n  margin-top: auto;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n@media (max-width: 768px) {\n  .auth-page-wrapper[_ngcontent-%COMP%]   .auth-page-content[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .col-md-8.col-lg-6.col-xl-5[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media (max-width: 576px) {\n  .auth-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 30px;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 1rem;\n    font-size: 0.875rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out;\n}\n\n.btn[_ngcontent-%COMP%]:focus, \n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaW52aXRhdGlvbnMvY2xpZW50LXJlZ2lzdHJhdGlvbi9jbGllbnQtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQ0UsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHSTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRE47QUFJSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUZSO0FBT0U7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtBQU5GO0FBUUU7RUFDRSxhQUFBO0FBTko7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVJGO0FBVUU7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FBUko7QUFXRTtFQUNFLHFCQUFBO0FBVEo7QUFXSTtFQUNFLHFCQUFBO0VBQ0EsaURBQUE7QUFUTjs7QUFjQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBWEY7O0FBZUE7RUFDRSxrQkFBQTtBQVpGO0FBY0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFaSjtBQWNJO0VBQ0UsY0FBQTtBQVpOOztBQWtCQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWZGO0FBaUJFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQWZKO0FBaUJJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQWZOO0FBa0JJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFoQk47QUFvQkU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBbEJKO0FBb0JJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQWxCTjs7QUF3QkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFyQkY7QUF1QkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFyQko7QUF1Qkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFyQk47QUF5QkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUF2Qko7QUEwQkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUF4Qko7O0FBNkJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUExQkY7QUE0QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTFCSjs7QUFnQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTdCSjs7QUFrQ0E7RUFDRSx5QkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSx5QkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSx5QkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSwwQ0FBQTtBQS9CRjs7QUFtQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFoQ0Y7QUFrQ0U7RUFDRSxTQUFBO0VBQ0EsK0JBQUE7QUFoQ0o7O0FBcUNBO0VBRUk7SUFDRSxlQUFBO0VBbkNKO0VBdUNBO0lBQ0UsWUFBQTtFQXJDRjtFQXVDRTtJQUNFLGVBQUE7RUFyQ0o7RUF5Q0E7SUFDRSxVQUFBO0VBdkNGO0FBQ0Y7QUEwQ0E7RUFDRTtJQUNFLGdCQUFBO0VBeENGO0VBMkNBO0lBQ0UsYUFBQTtFQXpDRjtFQTRDQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUExQ0Y7QUFDRjtBQThDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBNUNGO0VBOENBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBNUNGO0FBQ0Y7QUErQ0E7RUFDRSxpQ0FBQTtBQTdDRjs7QUFpREE7O0VBRUUsYUFBQTtBQTlDRjs7QUFrREE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBL0NGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2xpZW50IFJlZ2lzdHJhdGlvbiBDb21wb25lbnQgU3R5bGVzXG5cbi5hdXRoLXBhZ2Utd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgLmF1dGgtb25lLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxuICAgIC5iZy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgXG4gICAgLnNoYXBlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIFxuICAgICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5hdXRoLXBhZ2UtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gIH1cbn1cblxuLmF1dGgtbG9nbyBpbWcge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMC43NXJlbSAxLjVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn1cblxuLy8gRm9ybSBTdHlsZXNcbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzQwNTE4OTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg2NCwgODEsIDEzNywgMC4yNSk7XG4gIH1cbiAgXG4gICYuaXMtaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjA2NTQ4O1xuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZjA2NTQ4O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQwLCAxMDEsIDcyLCAwLjI1KTtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4vLyBQYXNzd29yZCBJbnB1dCBTdHlsZXNcbi5hdXRoLXBhc3MtaW5wdXRncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5wYXNzd29yZC1hZGRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIGNvbG9yOiAjNzQ3ODhkO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM0MDUxODk7XG4gICAgfVxuICB9XG59XG5cbi8vIEJ1dHRvbiBTdHlsZXNcbi5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBcbiAgJi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhYjM5YztcbiAgICBib3JkZXItY29sb3I6ICMwYWIzOWM7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk5ODg1O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDk5ODg1O1xuICAgIH1cbiAgICBcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYWIzOWM7XG4gICAgICBib3JkZXItY29sb3I6ICMwYWIzOWM7XG4gICAgICBvcGFjaXR5OiAwLjY1O1xuICAgIH1cbiAgfVxuICBcbiAgJi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTE4OTtcbiAgICBib3JkZXItY29sb3I6ICM0MDUxODk7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTc0O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMzY0NTc0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBbGVydCBTdHlsZXNcbi5hbGVydCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBcbiAgJi5hbGVydC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmNGZjO1xuICAgIGNvbG9yOiAjMDU1MTYwO1xuICAgIFxuICAgIC5hbGVydC1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiAjMDU1MTYwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbiAgXG4gICYuYWxlcnQtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICB9XG4gIFxuICAmLmFsZXJ0LXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGQ7XG4gICAgY29sb3I6ICMwZjUxMzI7XG4gIH1cbn1cblxuLy8gQXZhdGFyIFN0eWxlc1xuLmF2YXRhci1tZCB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIFxuICAuYXZhdGFyLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuXG4vLyBMb2FkaW5nIFNwaW5uZXJcbi5zcGlubmVyLWJvcmRlciB7XG4gICYuc3Bpbm5lci1ib3JkZXItc20ge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgfVxufVxuXG4vLyBUZXh0IFN0eWxlc1xuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjNDA1MTg5ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzBhYjM5YyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjNzQ3ODhkICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdoaXRlLTUwIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4vLyBGb290ZXJcbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hdXRoLXBhZ2Utd3JhcHBlciB7XG4gICAgLmF1dGgtcGFnZS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgfVxuICB9XG4gIFxuICAuY29sLW1kLTguY29sLWxnLTYuY29sLXhsLTUge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5hdXRoLWxvZ28gaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIGZvciBzdWNjZXNzIHN0YXRlXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5hbGVydCwgLmNhcmQge1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi8vIEZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eVxuLmJ0bjpmb2N1cyxcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vLyBJbnZhbGlkIGZlZWRiYWNrXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 92244:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tables/advancedtable/advanced-sortable.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedSortableDirective: () => (/* binding */ AdvancedSortableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


const rotate = {
  asc: 'desc',
  desc: '',
  '': 'asc'
};
class AdvancedSortableDirective {
  constructor() {
    this.direction = '';
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({
      column: this.sortable,
      direction: this.direction
    });
  }
  static {
    this.ɵfac = function AdvancedSortableDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdvancedSortableDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AdvancedSortableDirective,
      selectors: [["th", "sortable", ""]],
      hostVars: 4,
      hostBindings: function AdvancedSortableDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedSortableDirective_click_HostBindingHandler() {
            return ctx.rotate();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        }
      },
      inputs: {
        sortable: "sortable",
        direction: "direction"
      },
      outputs: {
        sort: "sort"
      },
      standalone: true
    });
  }
}

/***/ }),

/***/ 24019:
/*!****************************************************************!*\
  !*** ./src/app/pages/tables/advancedtable/advanced.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedService: () => (/* binding */ AdvancedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 95074);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 73796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);





const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
/**
 * Sort the table data
 * @param tabless Table field value
 * @param column Fetch the column
 * @param direction Sort direction Ascending or Descending
 */
function sort(tables, column, direction) {
  if (direction === '' || column === '') {
    return tables;
  } else {
    return [...tables].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === 'asc' ? res : -res;
    });
  }
}
/**
 * Table Data Match with Search input
 * @param tables Table field value fetch
 * @param term Search the value
 */
function matches(tables, term, pipe) {
  return tables.name.toLowerCase().includes(term.toLowerCase()) || tables.position.toLowerCase().includes(term) || tables.office.toLowerCase().includes(term) || pipe.transform(tables.age).includes(term) || tables.date.toLowerCase().includes(term) || tables.salary.toLowerCase().includes(term);
}
class AdvancedService {
  constructor(pipe) {
    this.pipe = pipe;
    // tslint:disable-next-line: variable-name
    this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
    // tslint:disable-next-line: variable-name
    this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    // tslint:disable-next-line: variable-name
    this._tables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    // tslint:disable-next-line: variable-name
    this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    // tslint:disable-next-line: variable-name
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: '',
      sortColumn: '',
      sortDirection: '',
      startIndex: 0,
      endIndex: 9,
      totalRecords: 0
    };
    this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
      this._tables$.next(result.tables);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  /**
   * Returns the value
   */
  get tables$() {
    return this._tables$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  get startIndex() {
    return this._state.startIndex;
  }
  get endIndex() {
    return this._state.endIndex;
  }
  get totalRecords() {
    return this._state.totalRecords;
  }
  /**
   * set the value
   */
  // tslint:disable-next-line: adjacent-overload-signatures
  set page(page) {
    this._set({
      page
    });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set pageSize(pageSize) {
    this._set({
      pageSize
    });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  // tslint:disable-next-line: adjacent-overload-signatures
  set startIndex(startIndex) {
    this._set({
      startIndex
    });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set endIndex(endIndex) {
    this._set({
      endIndex
    });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set totalRecords(totalRecords) {
    this._set({
      totalRecords
    });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set searchTerm(searchTerm) {
    this._set({
      searchTerm
    });
  }
  set sortColumn(sortColumn) {
    this._set({
      sortColumn
    });
  }
  set sortDirection(sortDirection) {
    this._set({
      sortDirection
    });
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  /**
   * Search Method
   */
  _search() {
    const {
      sortColumn,
      sortDirection,
      pageSize,
      page,
      searchTerm
    } = this._state;
    // 1. sort
    let tables = sort(_data__WEBPACK_IMPORTED_MODULE_0__.tableData, sortColumn, sortDirection);
    // 2. filter
    tables = tables.filter(table => matches(table, searchTerm, this.pipe));
    const total = tables.length;
    // 3. paginate
    this.totalRecords = tables.length;
    this._state.startIndex = (page - 1) * this.pageSize + 1;
    this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    tables = tables.slice(this._state.startIndex - 1, this._state.endIndex);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      tables,
      total
    });
  }
  static {
    this.ɵfac = function AdvancedService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdvancedService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: AdvancedService,
      factory: AdvancedService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 66877:
/*!***********************************************************************!*\
  !*** ./src/app/pages/tables/advancedtable/advancedtable.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedtableComponent: () => (/* binding */ AdvancedtableComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 73796);
/* harmony import */ var _advanced_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced.service */ 24019);
/* harmony import */ var _advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-sortable.directive */ 92244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 16983);
/* harmony import */ var src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/pagetitle/pagetitle.component */ 56551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);












function AdvancedtableComponent_For_50_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AdvancedtableComponent_For_50_Conditional_21_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const table_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r5.name);
  }
}
function AdvancedtableComponent_For_50_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 41)(3, "table", 42)(4, "thead", 43)(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "CountryName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Price/Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Sales Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Buy Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](15, AdvancedtableComponent_For_50_Conditional_21_For_16_Template, 9, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 0, ctx_r3.tables$));
  }
}
function AdvancedtableComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 31)(3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdvancedtableComponent_For_50_Template_a_click_3_listener() {
      const $index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeValue($index_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AdvancedtableComponent_For_50_div_20_Template, 7, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AdvancedtableComponent_For_50_Conditional_21_Template, 18, 2, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const table_r6 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", table_r6.position, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r6.office);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", table_r6.age, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r6.salary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx_r3.hideme[$index_r3] ? 21 : -1);
  }
}
function AdvancedtableComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Modal Heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdvancedtableComponent_ng_template_60_Template_button_click_3_listener() {
      const modal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r8.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 47)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Overflowing text to show scroll behavior");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 48)(15, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdvancedtableComponent_ng_template_60_Template_button_click_15_listener() {
      const modal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r8.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
/**
 * Advanced table component
 */
class AdvancedtableComponent {
  constructor(service) {
    this.service = service;
    this.hideme = [];
    this.isCollapsed = true;
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }
  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Tables'
    }, {
      label: 'Advanced Table',
      active: true
    }];
    /**
     * fetch data
     */
    this._fetchData();
  }
  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }
  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = _data__WEBPACK_IMPORTED_MODULE_0__.tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }
  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({
    column,
    direction
  }) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  static {
    this.ɵfac = function AdvancedtableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdvancedtableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_advanced_service__WEBPACK_IMPORTED_MODULE_1__.AdvancedService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AdvancedtableComponent,
      selectors: [["app-advancedtable"]],
      viewQuery: function AdvancedtableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_2__.AdvancedSortableDirective, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_advanced_service__WEBPACK_IMPORTED_MODULE_1__.AdvancedService, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 62,
      vars: 16,
      consts: [["content", ""], [1, "container-fluid"], ["title", "Advanced Table", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-sub-title"], [1, "row", "mb-md-2"], [1, "col-sm-12", "col-md-6"], ["id", "tickets-table_length", 1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "tickets-table_length", "aria-controls", "tickets-table", "name", "pageSize", 1, "form-control", "form-control-sm", "mx-2", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["id", "tickets-table_filter", 1, "dataTables_filter", "text-md-end"], ["type", "text", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "form-control-sm", "ms-2", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], ["id", "basic-datatable", 1, "table", "table-bordered", "dt-responsive", "nowrap", "datatables", "no-footer", "dtr-inline"], ["sortable", "name", 3, "sort"], ["sortable", "position", 3, "sort"], ["sortable", "office", 3, "sort"], ["sortable", "age", 3, "sort"], ["sortable", "date", 3, "sort"], ["sortable", "salary", 3, "sort"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [3, "ngModelChange", "totalItems", "ngModel"], ["role", "document"], ["align", "center"], [1, "expand-row", 3, "click"], ["dropdown", "", "placement", "bottom-left", 1, "dropdown"], ["dropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "true", 1, "mdi", "mdi-dots-vertical", "dropdown-toggle"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "sub-table", "no-bg"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "mdi", "mdi-plus"], [1, "mdi", "mdi-account-edit"], ["colspan", "15", 1, "p-0"], [1, "table", "mb-0", "table-striped"], [1, "bg-dark", "text-white"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]],
      template: function AdvancedtableComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Advanced Data Table");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Example of datatable. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Show ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdvancedtableComponent_Template_select_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.service.pageSize, $event) || (ctx.service.pageSize = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "25");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "100");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " entries");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 10)(26, "div", 15)(27, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Search: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdvancedtableComponent_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.service.searchTerm, $event) || (ctx.service.searchTerm = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "table", 18)(32, "thead")(33, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function AdvancedtableComponent_Template_th_sort_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSort($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function AdvancedtableComponent_Template_th_sort_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSort($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Position");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function AdvancedtableComponent_Template_th_sort_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSort($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function AdvancedtableComponent_Template_th_sort_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSort($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Age");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function AdvancedtableComponent_Template_th_sort_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSort($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Start date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function AdvancedtableComponent_Template_th_sort_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSort($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Salary");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](49, AdvancedtableComponent_For_50_Template, 22, 7, "tbody", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 25)(53, "div", 26)(54, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 26)(57, "div", 28)(58, "pagination", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdvancedtableComponent_Template_pagination_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.service.page, $event) || (ctx.service.page = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, AdvancedtableComponent_ng_template_60_Template, 19, 0, "ng-template", 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.service.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.service.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 12, ctx.tables$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("Showing ", ctx.service.startIndex, " to ", ctx.service.endIndex, " of ", ctx.service.totalRecords, " entries ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("totalItems", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 14, ctx.total$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.service.page);
        }
      },
      dependencies: [src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_2__.AdvancedSortableDirective],
      styles: ["\n\n@media all {\n  body[_ngcontent-%COMP%] {\n    overflow: auto !important;\n    width: 100% !important;\n  }\n  html[_ngcontent-%COMP%], \n   body[_ngcontent-%COMP%] {\n    background-color: #e4e5e6;\n  }\n  html[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 100%;\n  }\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n  }\n  .card-header[_ngcontent-%COMP%]:first-child {\n    border-radius: 4px 4px 0px 0px;\n  }\n  \n\n  html[_ngcontent-%COMP%], \n   body[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 400;\n    font-size: 13px;\n  }\n  body[_ngcontent-%COMP%] {\n    padding-top: 52px;\n  }\n  input[_ngcontent-%COMP%], \n   textarea[_ngcontent-%COMP%], \n   select[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-right: -8px;\n    margin-left: -8px;\n  }\n  .col[_ngcontent-%COMP%], \n   .col-1[_ngcontent-%COMP%], \n   .col-10[_ngcontent-%COMP%], \n   .col-11[_ngcontent-%COMP%], \n   .col-12[_ngcontent-%COMP%], \n   .col-2[_ngcontent-%COMP%], \n   .col-3[_ngcontent-%COMP%], \n   .col-4[_ngcontent-%COMP%], \n   .col-5[_ngcontent-%COMP%], \n   .col-6[_ngcontent-%COMP%], \n   .col-7[_ngcontent-%COMP%], \n   .col-8[_ngcontent-%COMP%], \n   .col-9[_ngcontent-%COMP%], \n   .col-auto[_ngcontent-%COMP%], \n   .col-lg[_ngcontent-%COMP%], \n   .col-lg-1[_ngcontent-%COMP%], \n   .col-lg-10[_ngcontent-%COMP%], \n   .col-lg-11[_ngcontent-%COMP%], \n   .col-lg-12[_ngcontent-%COMP%], \n   .col-lg-2[_ngcontent-%COMP%], \n   .col-lg-3[_ngcontent-%COMP%], \n   .col-lg-4[_ngcontent-%COMP%], \n   .col-lg-5[_ngcontent-%COMP%], \n   .col-lg-6[_ngcontent-%COMP%], \n   .col-lg-7[_ngcontent-%COMP%], \n   .col-lg-8[_ngcontent-%COMP%], \n   .col-lg-9[_ngcontent-%COMP%], \n   .col-lg-auto[_ngcontent-%COMP%], \n   .col-md[_ngcontent-%COMP%], \n   .col-md-1[_ngcontent-%COMP%], \n   .col-md-10[_ngcontent-%COMP%], \n   .col-md-11[_ngcontent-%COMP%], \n   .col-md-12[_ngcontent-%COMP%], \n   .col-md-2[_ngcontent-%COMP%], \n   .col-md-3[_ngcontent-%COMP%], \n   .col-md-4[_ngcontent-%COMP%], \n   .col-md-5[_ngcontent-%COMP%], \n   .col-md-6[_ngcontent-%COMP%], \n   .col-md-7[_ngcontent-%COMP%], \n   .col-md-8[_ngcontent-%COMP%], \n   .col-md-9[_ngcontent-%COMP%], \n   .col-md-auto[_ngcontent-%COMP%], \n   .col-sm[_ngcontent-%COMP%], \n   .col-sm-1[_ngcontent-%COMP%], \n   .col-sm-10[_ngcontent-%COMP%], \n   .col-sm-11[_ngcontent-%COMP%], \n   .col-sm-12[_ngcontent-%COMP%], \n   .col-sm-2[_ngcontent-%COMP%], \n   .col-sm-3[_ngcontent-%COMP%], \n   .col-sm-4[_ngcontent-%COMP%], \n   .col-sm-5[_ngcontent-%COMP%], \n   .col-sm-6[_ngcontent-%COMP%], \n   .col-sm-7[_ngcontent-%COMP%], \n   .col-sm-8[_ngcontent-%COMP%], \n   .col-sm-9[_ngcontent-%COMP%], \n   .col-sm-auto[_ngcontent-%COMP%], \n   .col-xl[_ngcontent-%COMP%], \n   .col-xl-1[_ngcontent-%COMP%], \n   .col-xl-10[_ngcontent-%COMP%], \n   .col-xl-11[_ngcontent-%COMP%], \n   .col-xl-12[_ngcontent-%COMP%], \n   .col-xl-2[_ngcontent-%COMP%], \n   .col-xl-3[_ngcontent-%COMP%], \n   .col-xl-4[_ngcontent-%COMP%], \n   .col-xl-5[_ngcontent-%COMP%], \n   .col-xl-6[_ngcontent-%COMP%], \n   .col-xl-7[_ngcontent-%COMP%], \n   .col-xl-8[_ngcontent-%COMP%], \n   .col-xl-9[_ngcontent-%COMP%], \n   .col-xl-auto[_ngcontent-%COMP%] {\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    background-color: #f0f3f5;\n    border-bottom: 1px solid #c8ced3;\n    font-size: 13px;\n    font-weight: 600;\n    color: #464646;\n    text-transform: uppercase;\n    padding: 0.75rem 8px;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    padding: 0.45rem 0.2rem;\n    font-size: 13px;\n    border-bottom-width: 0px !important;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    background: #f0f3f5;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 0px 0rem 0px 0.2rem;\n    height: calc(2rem + 2px);\n  }\n  .cnstr-record[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n    padding-left: 0.05rem;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n   .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    vertical-align: middle;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.3rem;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n  .wp-50[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .wp-60[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .wp-70[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .wp-80[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .wp-90[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n  .wp-100[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .mw-auto[_ngcontent-%COMP%] {\n    min-width: inherit;\n  }\n  .expand-row[_ngcontent-%COMP%] {\n    width: 100%;\n    border: solid 1px #596269;\n    display: inline-block;\n    border-radius: 3px;\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    vertical-align: top;\n    background: #596269;\n    color: #ffffff !important;\n  }\n  .expand-row[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  .expand-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: top;\n    position: relative;\n    top: 2px;\n  }\n  .sub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 12px;\n  }\n  .sub-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: #efefef;\n  }\n  .no-bg[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: inherit;\n  }\n  .mw-100[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFibGVzL2FkdmFuY2VkdGFibGUvYWR2YW5jZWR0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxpQkFBQTtBQUNBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTs7SUFFRSx5QkFBQTtFQUZGO0VBS0E7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VBSEY7RUFNQTtJQUNFLGtCQUFBO0VBSkY7RUFPQTtJQUNFLDhCQUFBO0VBTEY7RUFRQSxVQUFBO0VBQ0E7O0lBRUUsaUNBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFORjtFQVNBO0lBQ0UsaUJBQUE7RUFQRjtFQVVBOzs7SUFHRSxpQ0FBQTtFQVJGO0VBV0E7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VBVEY7RUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNFRSxrQkFBQTtJQUNBLGlCQUFBO0VBVkY7RUFhQTtJQUNFLHlCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtFQVhGO0VBZUE7SUFDRSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLG1DQUFBO0VBYkY7RUFnQkE7SUFDRSxtQkFBQTtFQWRGO0VBaUJBO0lBQ0UsZUFBQTtJQUNBLDRCQUFBO0lBQ0Esd0JBQUE7RUFmRjtFQWtCQTtJQUNFLHFCQUFBO0VBaEJGO0VBbUJBOztJQUVFLHNCQUFBO0VBakJGO0VBb0JBO0lBQ0UsZUFBQTtFQWxCRjtFQXFCQTtJQUNFLFdBQUE7RUFuQkY7RUFzQkE7SUFDRSxXQUFBO0VBcEJGO0VBdUJBO0lBQ0UsV0FBQTtFQXJCRjtFQXdCQTtJQUNFLFdBQUE7RUF0QkY7RUF5QkE7SUFDRSxXQUFBO0VBdkJGO0VBMEJBO0lBQ0UsV0FBQTtFQXhCRjtFQTJCQTtJQUNFLFlBQUE7RUF6QkY7RUE0QkE7SUFDRSxrQkFBQTtFQTFCRjtFQTZCQTtJQUNFLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VBM0JGO0VBNkJFO0lBQ0UsZUFBQTtFQTNCSjtFQStCQTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBOUJGO0VBaUNBO0lBQ0UsbUJBQUE7RUEvQkY7RUFrQ0E7SUFDRSxtQkFBQTtFQWhDRjtFQW1DQTtJQUNFLGVBQUE7RUFqQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwidXRmLThcIjtcblxuLyogQ1NTIERvY3VtZW50ICovXG5AbWVkaWEgYWxsIHtcbiAgYm9keSB7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTVlNjtcbiAgfVxuXG4gIGh0bWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIC5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICB9XG5cbiAgLypUeXBla2l0Ki9cbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDUycHg7XG4gIH1cblxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICB9XG5cbiAgLmNvbCxcbiAgLmNvbC0xLFxuICAuY29sLTEwLFxuICAuY29sLTExLFxuICAuY29sLTEyLFxuICAuY29sLTIsXG4gIC5jb2wtMyxcbiAgLmNvbC00LFxuICAuY29sLTUsXG4gIC5jb2wtNixcbiAgLmNvbC03LFxuICAuY29sLTgsXG4gIC5jb2wtOSxcbiAgLmNvbC1hdXRvLFxuICAuY29sLWxnLFxuICAuY29sLWxnLTEsXG4gIC5jb2wtbGctMTAsXG4gIC5jb2wtbGctMTEsXG4gIC5jb2wtbGctMTIsXG4gIC5jb2wtbGctMixcbiAgLmNvbC1sZy0zLFxuICAuY29sLWxnLTQsXG4gIC5jb2wtbGctNSxcbiAgLmNvbC1sZy02LFxuICAuY29sLWxnLTcsXG4gIC5jb2wtbGctOCxcbiAgLmNvbC1sZy05LFxuICAuY29sLWxnLWF1dG8sXG4gIC5jb2wtbWQsXG4gIC5jb2wtbWQtMSxcbiAgLmNvbC1tZC0xMCxcbiAgLmNvbC1tZC0xMSxcbiAgLmNvbC1tZC0xMixcbiAgLmNvbC1tZC0yLFxuICAuY29sLW1kLTMsXG4gIC5jb2wtbWQtNCxcbiAgLmNvbC1tZC01LFxuICAuY29sLW1kLTYsXG4gIC5jb2wtbWQtNyxcbiAgLmNvbC1tZC04LFxuICAuY29sLW1kLTksXG4gIC5jb2wtbWQtYXV0byxcbiAgLmNvbC1zbSxcbiAgLmNvbC1zbS0xLFxuICAuY29sLXNtLTEwLFxuICAuY29sLXNtLTExLFxuICAuY29sLXNtLTEyLFxuICAuY29sLXNtLTIsXG4gIC5jb2wtc20tMyxcbiAgLmNvbC1zbS00LFxuICAuY29sLXNtLTUsXG4gIC5jb2wtc20tNixcbiAgLmNvbC1zbS03LFxuICAuY29sLXNtLTgsXG4gIC5jb2wtc20tOSxcbiAgLmNvbC1zbS1hdXRvLFxuICAuY29sLXhsLFxuICAuY29sLXhsLTEsXG4gIC5jb2wteGwtMTAsXG4gIC5jb2wteGwtMTEsXG4gIC5jb2wteGwtMTIsXG4gIC5jb2wteGwtMixcbiAgLmNvbC14bC0zLFxuICAuY29sLXhsLTQsXG4gIC5jb2wteGwtNSxcbiAgLmNvbC14bC02LFxuICAuY29sLXhsLTcsXG4gIC5jb2wteGwtOCxcbiAgLmNvbC14bC05LFxuICAuY29sLXhsLWF1dG8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4Y2VkMztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IC43NXJlbSA4cHg7XG4gIH1cblxuXG4gIC5jbnN0ci1yZWNvcmQgdGgge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogLjQ1cmVtIC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jbnN0ci1yZWNvcmQgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICNmMGYzZjU7XG4gIH1cblxuICAuY25zdHItcmVjb3JkIC5mb3JtLWNvbnRyb2wge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiAwcHggMHJlbSAwcHggMC4ycmVtO1xuICAgIGhlaWdodDogY2FsYygycmVtICsgMnB4KTtcbiAgfVxuXG4gIC5jbnN0ci1yZWNvcmQgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuMDVyZW07XG4gIH1cblxuICAuY25zdHItcmVjb3JkIC50YWJsZSB0ZCxcbiAgLmNuc3RyLXJlY29yZCAudGFibGUgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuY25zdHItcmVjb3JkIC50YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogLjNyZW07XG4gIH1cblxuICAuY25zdHItcmVjb3JkIC50YWJsZSB0ZCBoNCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICAud3AtNTAge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLndwLTYwIHtcbiAgICB3aWR0aDogNjBweDtcbiAgfVxuXG4gIC53cC03MCB7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cblxuICAud3AtODAge1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG5cbiAgLndwLTkwIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxuXG4gIC53cC0xMDAge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIC5tdy1hdXRvIHtcbiAgICBtaW4td2lkdGg6IGluaGVyaXQ7XG4gIH1cblxuICAuZXhwYW5kLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzU5NjI2OTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJhY2tncm91bmQ6ICM1OTYyNjk7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5leHBhbmQtcm93IGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gIH1cblxuICAuc3ViLXRhYmxlIHRoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5zdWItdGFibGUgdGQge1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIH1cblxuICAubm8tYmcgdGQge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICAubXctMTAwIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73796:
/*!****************************************************!*\
  !*** ./src/app/pages/tables/advancedtable/data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tableData: () => (/* binding */ tableData)
/* harmony export */ });
const tableData = [{
  name: 'Timoteo Lyddy',
  position: 'Recruiting Manager',
  office: 'Vidago',
  age: '29',
  date: '2018/12/04',
  salary: '$11700'
}, {
  name: 'Cherye Bleby',
  position: 'Quality Engineer',
  office: 'La Concordia',
  age: '62',
  date: '2018/10/04',
  salary: '$14700'
}, {
  name: 'Zacharias O\'Shaughnessy',
  position: 'Senior Editor',
  office: 'Maungatapere',
  age: '26',
  date: '2018/07/30',
  salary: '$11600'
}, {
  name: 'Odie Jentin',
  position: 'Programmer II',
  office: 'Grabovci',
  age: '26',
  date: '2019/05/16',
  salary: '$11200'
}, {
  name: 'Eugenie Sang',
  position: 'Operator',
  office: 'Oxbow',
  age: '59',
  date: '2019/07/16',
  salary: '$15200'
}, {
  name: 'Sammy Guyers',
  position: 'Mechanical Systems Engineer',
  office: 'Sanhe',
  age: '53',
  date: '2019/07/09',
  salary: '$14200'
}, {
  name: 'Tarah Blick',
  position: 'Paralegal',
  office: 'Fylí',
  age: '23',
  date: '2018/12/14',
  salary: '$15200'
}, {
  name: 'Jemie Ormshaw',
  position: 'Systems Administrator II',
  office: 'Vila Fria',
  age: '28',
  date: '2019/05/15',
  salary: '$14400'
}, {
  name: 'Gerrie Semeradova',
  position: 'Research Associate',
  office: 'Balykchy',
  age: '26',
  date: '2018/09/28',
  salary: '$14900'
}, {
  name: 'Ottilie Mostyn',
  position: 'Accounting Assistant II',
  office: 'Eskilstuna',
  age: '43',
  date: '2018/08/20',
  salary: '$11300'
}, {
  name: 'Lombard Crepin',
  position: 'Project Manager',
  office: 'Novoul’yanovsk',
  age: '63',
  date: '2019/04/28',
  salary: '$13300'
}, {
  name: 'Fons Sopp',
  position: 'Structural Analysis Engineer',
  office: 'Bealanana',
  age: '47',
  date: '2019/02/22',
  salary: '$13300'
}, {
  name: 'Berenice Wildey',
  position: 'Sales Representative',
  office: 'Markópoulo Oropoú',
  age: '49',
  date: '2018/10/19',
  salary: '$14700'
}, {
  name: 'Maybelle Cullotey',
  position: 'Senior Financial Analyst',
  office: 'Arcos de Valdevez',
  age: '33',
  date: '2019/02/06',
  salary: '$14700'
}, {
  name: 'Mikkel Lingner',
  position: 'Assistant Media Planner',
  office: 'Celestynów',
  age: '32',
  date: '2018/08/12',
  salary: '$11400'
}, {
  name: 'Silvano Hartil',
  position: 'Assistant Manager',
  office: 'Leles',
  age: '26',
  date: '2019/04/30',
  salary: '$11500'
}, {
  name: 'Maddi Mansell',
  position: 'Assistant Media Planner',
  office: 'Doug An',
  age: '48',
  date: '2019/05/29',
  salary: '$14600'
}, {
  name: 'Mohandas Course',
  position: 'Staff Accountant II',
  office: 'Wuping',
  age: '59',
  date: '2019/07/18',
  salary: '$12900'
}, {
  name: 'Ericha Clilverd',
  position: 'Desktop Support Technician',
  office: 'Conde',
  age: '37',
  date: '2018/09/12',
  salary: '$14400'
}, {
  name: 'Elspeth Leap',
  position: 'Paralegal',
  office: 'Hägersten',
  age: '42',
  date: '2019/02/15',
  salary: '$14400'
}, {
  name: 'Sam Chinge',
  position: 'Assistant Media Planner',
  office: 'Arai',
  age: '55',
  date: '2019/05/26',
  salary: '$11800'
}, {
  name: 'Lucinda Stickley',
  position: 'Data Coordiator',
  office: 'Sirnarasa',
  age: '31',
  date: '2018/07/29',
  salary: '$13600'
}, {
  name: 'Henrietta Carsberg',
  position: 'Data Coordiator',
  office: 'Paninggaran',
  age: '59',
  date: '2019/07/13',
  salary: '$13700'
}, {
  name: 'Phylys David',
  position: 'Senior Developer',
  office: 'New Glasgow',
  age: '52',
  date: '2019/04/08',
  salary: '$15200'
}, {
  name: 'Brena Shivell',
  position: 'Graphic Designer',
  office: 'Caen',
  age: '50',
  date: '2018/12/14',
  salary: '$15800'
}, {
  name: 'Carmon Tuiller',
  position: 'Marketing Assistant',
  office: 'Jiangbei',
  age: '46',
  date: '2019/06/19',
  salary: '$12800'
}, {
  name: 'Tina Strattan',
  position: 'Account Representative III',
  office: 'São Miguel da Carreira',
  age: '31',
  date: '2019/07/08',
  salary: '$13900'
}, {
  name: 'Jon Tarbox',
  position: 'Senior Cost Accountant',
  office: 'Ryazhsk',
  age: '61',
  date: '2019/02/22',
  salary: '$16000'
}, {
  name: 'Carmine Hollibone',
  position: 'Assistant Manager',
  office: 'Punta del Este',
  age: '50',
  date: '2019/04/23',
  salary: '$15000'
}, {
  name: 'Cora Germann',
  position: 'Automation Specialist III',
  office: 'Heshui',
  age: '47',
  date: '2019/03/27',
  salary: '$11300'
}, {
  name: 'Dawna Hillyatt',
  position: 'Biostatistician I',
  office: 'Suresnes',
  age: '37',
  date: '2018/12/02',
  salary: '$14800'
}, {
  name: 'Natty Casini',
  position: 'Senior Developer',
  office: 'Pucallpa',
  age: '31',
  date: '2018/08/19',
  salary: '$11900'
}, {
  name: 'Vittorio Lauder',
  position: 'Developer II',
  office: 'Tønsberg',
  age: '54',
  date: '2018/12/10',
  salary: '$16200'
}, {
  name: 'Chery Cardenas',
  position: 'Senior Developer',
  office: 'Santo Tomas',
  age: '26',
  date: '2018/12/07',
  salary: '$11100'
}, {
  name: 'Hilde McFfaden',
  position: 'Senior Financial Analyst',
  office: 'Cruz',
  age: '43',
  date: '2018/11/05',
  salary: '$14100'
}, {
  name: 'Siward Kindred',
  position: 'Office Assistant III',
  office: 'Béziers',
  age: '39',
  date: '2018/09/26',
  salary: '$15500'
}, {
  name: 'Tamera Caneo',
  position: 'Executive Secretary',
  office: 'Hetian',
  age: '38',
  date: '2018/09/28',
  salary: '$12300'
}, {
  name: 'Munmro Rendell',
  position: 'Marketing Manager',
  office: 'Castelo',
  age: '60',
  date: '2018/11/15',
  salary: '$12400'
}, {
  name: 'Nerta Eddisforth',
  position: 'Social Worker',
  office: 'Al Ḩayfah',
  age: '33',
  date: '2018/12/01',
  salary: '$14900'
}, {
  name: 'Laraine Hamlyn',
  position: 'Chemical Engineer',
  office: 'Baška Voda',
  age: '44',
  date: '2019/03/25',
  salary: '$12800'
}, {
  name: 'Judie Hug',
  position: 'Operator',
  office: 'Verkhniy Rohachyk',
  age: '32',
  date: '2018/11/18',
  salary: '$11300'
}, {
  name: 'Lulita Espasa',
  position: 'Operator',
  office: 'Sabi',
  age: '59',
  date: '2019/06/06',
  salary: '$13600'
}, {
  name: 'Kandy Fulker',
  position: 'Human Resources Assistant I',
  office: 'Murowana Goślina',
  age: '57',
  date: '2019/05/01',
  salary: '$13100'
}, {
  name: 'Bradley Gunbie',
  position: 'Assistant Media Planner',
  office: 'Bundoran',
  age: '34',
  date: '2019/03/16',
  salary: '$13700'
}, {
  name: 'Katie Proctor',
  position: 'Quality Engineer',
  office: 'Qingxi',
  age: '34',
  date: '2018/10/14',
  salary: '$12400'
}, {
  name: 'Lin Gallaccio',
  position: 'VP Quality Control',
  office: 'Rongcheng',
  age: '23',
  date: '2018/08/27',
  salary: '$10300'
}, {
  name: 'Christy Ranaghan',
  position: 'Nurse Practicioner',
  office: 'Naval',
  age: '42',
  date: '2018/11/02',
  salary: '$15700'
}, {
  name: 'Concordia Varrow',
  position: 'Environmental Specialist',
  office: 'Rashaant',
  age: '48',
  date: '2018/12/11',
  salary: '$12500'
}, {
  name: 'Normand Tropman',
  position: 'Legal Assistant',
  office: 'Yläne',
  age: '52',
  date: '2019/01/21',
  salary: '$14600'
}, {
  name: 'Oswald Cruikshank',
  position: 'Help Desk Operator',
  office: 'Armenia',
  age: '57',
  date: '2019/05/16',
  salary: '$15700'
}, {
  name: 'Debbie Pinchin',
  position: 'Tax Accountant',
  office: 'Seara',
  age: '35',
  date: '2018/08/29',
  salary: '$12100'
}, {
  name: 'Wells Dartan',
  position: 'Financial Analyst',
  office: 'Bhalwāl',
  age: '44',
  date: '2019/03/03',
  salary: '$10500'
}, {
  name: 'Kelsey Zucker',
  position: 'Accountant III',
  office: 'Douz',
  age: '44',
  date: '2018/11/09',
  salary: '$15700'
}, {
  name: 'Lothaire Rubinchik',
  position: 'Operator',
  office: 'Paringin',
  age: '37',
  date: '2018/07/26',
  salary: '$13800'
}, {
  name: 'Dmitri Marrow',
  position: 'Quality Engineer',
  office: 'Kirzhach',
  age: '30',
  date: '2018/11/25',
  salary: '$13400'
}, {
  name: 'Virgie Bullivant',
  position: 'Dental Hygienist',
  office: 'Mungyeong',
  age: '34',
  date: '2019/07/16',
  salary: '$14600'
}, {
  name: 'Simmonds Moughtin',
  position: 'Programmer III',
  office: 'Loma',
  age: '44',
  date: '2018/10/20',
  salary: '$13900'
}, {
  name: 'Ralina Bounds',
  position: 'Associate Professor',
  office: 'Cacocum',
  age: '52',
  date: '2019/05/12',
  salary: '$11400'
}, {
  name: 'Bettye Hearons',
  position: 'Food Chemist',
  office: 'Guayabetal',
  age: '30',
  date: '2018/12/29',
  salary: '$16000'
}, {
  name: 'Cortie Andreacci',
  position: 'Assistant Manager',
  office: 'Yongheshi',
  age: '33',
  date: '2018/11/23',
  salary: '$11200'
}];


/***/ }),

/***/ 37377:
/*!*******************************************************!*\
  !*** ./src/app/pages/tables/basic/basic.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicComponent: () => (/* binding */ BasicComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ui/pagetitle/pagetitle.component */ 56551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


/**
 * Basic table component
 */
class BasicComponent {
  constructor() {}
  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Tables'
    }, {
      label: 'Basic Tables',
      active: true
    }];
  }
  static {
    this.ɵfac = function BasicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BasicComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BasicComponent,
      selectors: [["app-basic"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 629,
      vars: 1,
      consts: [[1, "container-fluid"], ["title", "Basic Tables", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "table-responsive"], [1, "table", "mb-0"], [1, "thead-dark"], ["scope", "row"], [1, "table", "table-dark", "mb-0"], [1, "table-light"], [1, "table", "table-striped", "mb-0"], [1, "table", "table-bordered", "mb-0"], [1, "table", "table-borderless", "mb-0"], [1, "table", "table-hover", "mb-0"], [1, "table", "table-sm", "m-0"], [1, "table-success"], [1, "table-info"], [1, "table-warning"], [1, "table-danger"], [1, "col-lg-12"]],
      template: function BasicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Basic example");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "For basic styling\u2014light padding and only horizontal dividers\u2014add the base class ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " to any ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "<table>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "table", 9)(18, "thead", 10)(19, "tr")(20, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tbody")(29, "tr")(30, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr")(39, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr")(48, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 3)(57, "div", 4)(58, "div", 5)(59, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Dark table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, ".table-dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 8)(67, "table", 12)(68, "thead")(69, "tr")(70, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tbody")(79, "tr")(80, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "tr")(89, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tr")(98, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 2)(107, "div", 3)(108, "div", 4)(109, "div", 5)(110, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Table head");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Use one of two modifier classes to make ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "<thead>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "s appear light or dark gray.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 8)(118, "table", 9)(119, "thead", 13)(120, "tr")(121, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "tbody")(130, "tr")(131, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "tr")(140, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "tr")(149, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 3)(158, "div", 4)(159, "div", 5)(160, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Striped rows");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, ".table-striped");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " to add zebra-striping to any table row within the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "<tbody>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 8)(171, "table", 14)(172, "thead")(173, "tr")(174, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "tbody")(183, "tr")(184, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "tr")(193, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "tr")(202, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 2)(211, "div", 3)(212, "div", 4)(213, "div", 5)(214, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Bordered table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, ".table-bordered");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " for borders on all sides of the table and cells. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 8)(222, "table", 15)(223, "thead")(224, "tr")(225, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "tbody")(234, "tr")(235, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "tr")(244, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "tr")(253, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 3)(262, "div", 4)(263, "div", 5)(264, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Borderless table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, " Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, ".table-borderless");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, " for a table without borders.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 8)(272, "table", 16)(273, "thead")(274, "tr")(275, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "tbody")(284, "tr")(285, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "tr")(294, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "tr")(303, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 2)(312, "div", 3)(313, "div", 4)(314, "div", 5)(315, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Hoverable rows");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, ".table-hover");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, " to enable a hover state on table rows within a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "<tbody>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 8)(326, "table", 17)(327, "thead")(328, "tr")(329, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "tbody")(338, "tr")(339, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "tr")(348, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "tr")(357, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 3)(366, "div", 4)(367, "div", 5)(368, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Small table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, " Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, ".table-sm");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, " to make tables more compact by cutting cell padding in half.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 8)(376, "table", 18)(377, "thead")(378, "tr")(379, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "tbody")(388, "tr")(389, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "tr")(398, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "tr")(407, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "tr")(416, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "tr")(425, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "div", 2)(434, "div", 3)(435, "div", 4)(436, "div", 5)(437, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "Contextual classes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "Use contextual classes to color table rows or individual cells.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "div", 8)(442, "table", 9)(443, "thead")(444, "tr")(445, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Column heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Column heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Column heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "tbody")(454, "tr", 13)(455, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "tr", 19)(464, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "tr", 20)(473, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](474, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "tr", 21)(482, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "tr", 22)(491, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](498, "Column content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "div", 3)(500, "div", 4)(501, "div", 5)(502, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](503, "Captions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "<caption>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, " functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "div", 8)(510, "table", 9)(511, "caption");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "List of users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "thead")(514, "tr")(515, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](516, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "tbody")(524, "tr")(525, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](528, "Mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "Otto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, "@mdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "tr")(534, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](535, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](537, "Jacob");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](539, "Thornton");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](541, "@fat");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "tr")(543, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](544, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, "Larry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "the Bird");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](550, "@twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "div", 2)(552, "div", 23)(553, "div", 4)(554, "div", 5)(555, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](556, "Responsive tables");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](558, " Create responsive tables by wrapping any ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](560, ".table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](561, " in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](563, ".table-responsive");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](564, " to make them scroll horizontally on small devices (under 768px). ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "div", 8)(566, "table", 9)(567, "thead")(568, "tr")(569, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "Table heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, "Table heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](576, "Table heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](578, "Table heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](580, "Table heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](582, "Table heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "tbody")(584, "tr")(585, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](586, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](588, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](590, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](592, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](594, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](596, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](598, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "tr")(600, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](601, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](602, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](603, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](605, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](607, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](609, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](610, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](611, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](612, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](613, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](614, "tr")(615, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](620, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](622, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](623, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](628, "Table cell");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        }
      },
      dependencies: [src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95931:
/*!*******************************************************!*\
  !*** ./src/app/pages/tables/tables-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablesRoutingModule: () => (/* binding */ TablesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/basic.component */ 37377);
/* harmony import */ var _advancedtable_advancedtable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advancedtable/advancedtable.component */ 66877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: 'basic',
  component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__.BasicComponent
}, {
  path: 'advanced',
  component: _advancedtable_advancedtable_component__WEBPACK_IMPORTED_MODULE_1__.AdvancedtableComponent
}];
class TablesRoutingModule {
  static {
    this.ɵfac = function TablesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TablesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TablesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TablesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 53498:
/*!***********************************************!*\
  !*** ./src/app/pages/tables/tables.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablesModule: () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ 35337);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 54195);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 16983);
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables-routing.module */ 95931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);










class TablesModule {
  static {
    this.ɵfac = function TablesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TablesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TablesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule.forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__.TypeaheadModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TablesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__.TypeaheadModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
  });
})();

/***/ }),

/***/ 56551:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagetitleComponent: () => (/* binding */ PagetitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


function PagetitleComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.label, " ");
  }
}
function PagetitleComponent_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
  }
}
function PagetitleComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagetitleComponent_For_8_Conditional_1_Template, 2, 1, "li", 6)(2, PagetitleComponent_For_8_Conditional_2_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](item_r1.active ? 1 : 2);
  }
}
class PagetitleComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function PagetitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PagetitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagetitleComponent,
      selectors: [["app-page-title"]],
      inputs: {
        breadcrumbItems: "breadcrumbItems",
        title: "title"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 1,
      consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"]],
      template: function PagetitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "ol", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](7, PagetitleComponent_For_8_Template, 3, 1, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.breadcrumbItems);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 98180:
/*!****************************************************************!*\
  !*** ./src/app/store/Authentication/authentication.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register: () => (/* binding */ Register),
/* harmony export */   RegisterFailure: () => (/* binding */ RegisterFailure),
/* harmony export */   RegisterSuccess: () => (/* binding */ RegisterSuccess),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   loginFailure: () => (/* binding */ loginFailure),
/* harmony export */   loginSuccess: () => (/* binding */ loginSuccess),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   logoutSuccess: () => (/* binding */ logoutSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// Register action
const Register = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Authentication] Register', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const RegisterSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Authentication] Register Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const RegisterFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Authentication] Register Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// login action
const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Authentication] Login', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Authentication] Login Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Authentication] Login Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// logout action
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Authentication] Logout');
const logoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout Success');

/***/ }),

/***/ 121:
/*!****************************************************************!*\
  !*** ./src/app/store/Authentication/authentication.effects.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationEffects: () => (/* binding */ AuthenticationEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 67953);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _authentication_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.actions */ 98180);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ 68010);
/* harmony import */ var src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/authfake.service */ 26687);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user.service */ 13443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);











class AuthenticationEffects {
  constructor(actions$, AuthenticationService, AuthfakeService, userService, router) {
    this.actions$ = actions$;
    this.AuthenticationService = AuthenticationService;
    this.AuthfakeService = AuthfakeService;
    this.userService = userService;
    this.router = router;
    this.Register$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.Register), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({
      email,
      username,
      password
    }) => {
      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === 'fakebackend') {
        return this.userService.register({
          email,
          username,
          password
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(user => {
          this.router.navigate(['/auth/login']);
          return (0,_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.RegisterSuccess)({
            user
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)((0,_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.RegisterFailure)({
          error
        }))));
      } else {
        return this.AuthenticationService.register({
          email,
          username,
          password
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(user => {
          this.router.navigate(['/auth/login']);
          return (0,_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.RegisterSuccess)({
            user
          });
        }));
      }
    })));
    this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.login), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({
      email,
      password
    }) => {
      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === "fakebackend") {
        return this.AuthfakeService.login(email, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(user => {
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', user.token);
            this.router.navigate(['/']);
          }
          return (0,_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess)({
            user
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)((0,_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.loginFailure)({
          error
        }))));
      } else if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === "firebase") {
        return this.AuthenticationService.login(email, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(user => {
          return (0,_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess)({
            user
          });
        }));
      }
    })));
    this.logout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
      // Perform any necessary cleanup or side effects before logging out
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)((0,_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.logoutSuccess)()))));
  }
  static {
    this.ɵfac = function AuthenticationEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthenticationEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_3__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
      token: AuthenticationEffects,
      factory: AuthenticationEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 87699:
/*!****************************************************************!*\
  !*** ./src/app/store/Authentication/authentication.reducer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authenticationReducer: () => (/* binding */ authenticationReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _authentication_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.actions */ 98180);


const initialState = {
  isLoggedIn: false,
  user: null,
  error: null
};
const authenticationReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.Register, state => ({
  ...state,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.RegisterSuccess, (state, {
  user
}) => ({
  ...state,
  isLoggedIn: true,
  user,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.RegisterFailure, (state, {
  error
}) => ({
  ...state,
  error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.login, state => ({
  ...state,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess, (state, {
  user
}) => ({
  ...state,
  isLoggedIn: true,
  user,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.loginFailure, (state, {
  error
}) => ({
  ...state,
  error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_authentication_actions__WEBPACK_IMPORTED_MODULE_0__.logout, state => ({
  ...state,
  user: null
})));

/***/ }),

/***/ 59018:
/*!******************************************************!*\
  !*** ./src/app/store/Candidate/candidate.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCandidatelistData: () => (/* binding */ fetchCandidatelistData),
/* harmony export */   fetchCandidatelistFail: () => (/* binding */ fetchCandidatelistFail),
/* harmony export */   fetchCandidatelistSuccess: () => (/* binding */ fetchCandidatelistSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchCandidatelistData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Candidatelist');
const fetchCandidatelistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Candidatelist success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchCandidatelistFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch Candidatelist failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 34231:
/*!******************************************************!*\
  !*** ./src/app/store/Candidate/candidate.effects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidateEffects: () => (/* binding */ CandidateEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _candidate_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidate.actions */ 59018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class CandidateEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_candidate_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCandidatelistData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/candidate').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(candidateList => (0,_candidate_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCandidatelistSuccess)({
      candidateList
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_candidate_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCandidatelistFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function CandidateEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CandidateEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: CandidateEffects,
      factory: CandidateEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 34477:
/*!******************************************************!*\
  !*** ./src/app/store/Candidate/candidate.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidateReducer: () => (/* binding */ CandidateReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _candidate_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidate.actions */ 59018);


const initialState = {
  candidateList: [],
  loading: false,
  error: null
};
const CandidateReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_candidate_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCandidatelistData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_candidate_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCandidatelistSuccess, (state, {
  candidateList
}) => {
  return {
    ...state,
    candidateList,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_candidate_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCandidatelistFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return CandidateReducer(state, action);
}

/***/ }),

/***/ 22125:
/*!*******************************************!*\
  !*** ./src/app/store/Cart/cart.action.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCartData: () => (/* binding */ fetchCartData),
/* harmony export */   fetchCartFail: () => (/* binding */ fetchCartFail),
/* harmony export */   fetchCartSuccess: () => (/* binding */ fetchCartSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchCartData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Cart');
const fetchCartSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Cart success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchCartFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch Cart failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 33881:
/*!********************************************!*\
  !*** ./src/app/store/Cart/cart.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartEffects: () => (/* binding */ CartEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _cart_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.action */ 22125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class CartEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_cart_action__WEBPACK_IMPORTED_MODULE_0__.fetchCartData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/cart').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(cartdata => (0,_cart_action__WEBPACK_IMPORTED_MODULE_0__.fetchCartSuccess)({
      cartdata
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_cart_action__WEBPACK_IMPORTED_MODULE_0__.fetchCartFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function CartEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CartEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: CartEffects,
      factory: CartEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 30675:
/*!********************************************!*\
  !*** ./src/app/store/Cart/cart.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartReducer: () => (/* binding */ CartReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _cart_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.action */ 22125);


const initialState = {
  cartdata: [],
  loading: false,
  error: null
};
const CartReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_cart_action__WEBPACK_IMPORTED_MODULE_0__.fetchCartData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_cart_action__WEBPACK_IMPORTED_MODULE_0__.fetchCartSuccess, (state, {
  cartdata
}) => {
  return {
    ...state,
    cartdata,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_cart_action__WEBPACK_IMPORTED_MODULE_0__.fetchCartFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return CartReducer(state, action);
}

/***/ }),

/***/ 1921:
/*!*******************************************!*\
  !*** ./src/app/store/Chat/chat.action.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchchatFail: () => (/* binding */ fetchchatFail),
/* harmony export */   fetchchatMessageData: () => (/* binding */ fetchchatMessageData),
/* harmony export */   fetchchatMessageFail: () => (/* binding */ fetchchatMessageFail),
/* harmony export */   fetchchatMessageSuccess: () => (/* binding */ fetchchatMessageSuccess),
/* harmony export */   fetchchatSuccess: () => (/* binding */ fetchchatSuccess),
/* harmony export */   fetchchatdata: () => (/* binding */ fetchchatdata)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch chatmessage
const fetchchatdata = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Chat');
const fetchchatSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Chat success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchchatFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch Chat failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// fetch chatmessage 
const fetchchatMessageData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch ChatMessage');
const fetchchatMessageSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch ChatMessage success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchchatMessageFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch ChatMessage failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 43366:
/*!*******************************************!*\
  !*** ./src/app/store/Chat/chat.effect.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatEffects: () => (/* binding */ ChatEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _chat_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.action */ 1921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class ChatEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatdata), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/chat').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(chat => (0,_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatSuccess)({
      chat
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatFail)({
      error
    })))))));
    this.fetchChatMessageData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatMessageData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/chatMessage').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(chatMessage => (0,_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatMessageSuccess)({
      chatMessage
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatMessageFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function ChatEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChatEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ChatEffects,
      factory: ChatEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 29319:
/*!********************************************!*\
  !*** ./src/app/store/Chat/chat.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatReducer: () => (/* binding */ ChatReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _chat_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.action */ 1921);


const initialState = {
  chat: [],
  chatMessage: [],
  loading: false,
  error: null
};
const ChatReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatdata, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatSuccess, (state, {
  chat
}) => {
  return {
    ...state,
    chat,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatMessageData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatMessageSuccess, (state, {
  chatMessage
}) => {
  return {
    ...state,
    chatMessage,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_chat_action__WEBPACK_IMPORTED_MODULE_0__.fetchchatMessageFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return ChatReducer(state, action);
}

/***/ }),

/***/ 32250:
/*!************************************************!*\
  !*** ./src/app/store/Crypto/crypto.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchorderData: () => (/* binding */ fetchorderData),
/* harmony export */   fetchorderFail: () => (/* binding */ fetchorderFail),
/* harmony export */   fetchorderSuccess: () => (/* binding */ fetchorderSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchorderData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch orderData');
const fetchorderSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch orderData success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchorderFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch orderData failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 66439:
/*!************************************************!*\
  !*** ./src/app/store/Crypto/crypto.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersEffects: () => (/* binding */ OrdersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _crypto_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto.actions */ 32250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class OrdersEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_crypto_actions__WEBPACK_IMPORTED_MODULE_0__.fetchorderData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/cryto').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(orders => (0,_crypto_actions__WEBPACK_IMPORTED_MODULE_0__.fetchorderSuccess)({
      orders
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_crypto_actions__WEBPACK_IMPORTED_MODULE_0__.fetchorderFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function OrdersEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrdersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: OrdersEffects,
      factory: OrdersEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 1341:
/*!************************************************!*\
  !*** ./src/app/store/Crypto/crypto.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersReducer: () => (/* binding */ OrdersReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _crypto_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto.actions */ 32250);


const initialState = {
  orders: [],
  loading: false,
  error: null
};
const OrdersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_crypto_actions__WEBPACK_IMPORTED_MODULE_0__.fetchorderData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_crypto_actions__WEBPACK_IMPORTED_MODULE_0__.fetchorderSuccess, (state, {
  orders
}) => {
  return {
    ...state,
    orders,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_crypto_actions__WEBPACK_IMPORTED_MODULE_0__.fetchorderFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return OrdersReducer(state, action);
}

/***/ }),

/***/ 24379:
/*!*********************************************!*\
  !*** ./src/app/store/Email/email.action.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchmailData: () => (/* binding */ fetchmailData),
/* harmony export */   fetchmailFail: () => (/* binding */ fetchmailFail),
/* harmony export */   fetchmailSuccess: () => (/* binding */ fetchmailSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchmailData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch mail');
const fetchmailSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch mail success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchmailFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch mail failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 72743:
/*!**********************************************!*\
  !*** ./src/app/store/Email/email.effects.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailEffects: () => (/* binding */ MailEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _email_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.action */ 24379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class MailEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_email_action__WEBPACK_IMPORTED_MODULE_0__.fetchmailData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/emailData').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(maildata => (0,_email_action__WEBPACK_IMPORTED_MODULE_0__.fetchmailSuccess)({
      maildata
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_email_action__WEBPACK_IMPORTED_MODULE_0__.fetchmailFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function MailEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MailEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: MailEffects,
      factory: MailEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 93245:
/*!**********************************************!*\
  !*** ./src/app/store/Email/email.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailReducer: () => (/* binding */ MailReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _email_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.action */ 24379);


const initialState = {
  maildata: [],
  loading: false,
  error: null
};
const MailReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_email_action__WEBPACK_IMPORTED_MODULE_0__.fetchmailData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_email_action__WEBPACK_IMPORTED_MODULE_0__.fetchmailSuccess, (state, {
  maildata
}) => {
  return {
    ...state,
    maildata,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_email_action__WEBPACK_IMPORTED_MODULE_0__.fetchmailFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return MailReducer(state, action);
}

/***/ }),

/***/ 11536:
/*!**************************************************!*\
  !*** ./src/app/store/Invoices/invoice.action.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchInvoiceListData: () => (/* binding */ fetchInvoiceListData),
/* harmony export */   fetchInvoiceListFail: () => (/* binding */ fetchInvoiceListFail),
/* harmony export */   fetchInvoiceListSuccess: () => (/* binding */ fetchInvoiceListSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchInvoiceListData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch InvoiceList');
const fetchInvoiceListSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch InvoiceList success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchInvoiceListFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch InvoiceList failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 2350:
/*!***************************************************!*\
  !*** ./src/app/store/Invoices/invoice.effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceDataEffects: () => (/* binding */ InvoiceDataEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _invoice_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.action */ 11536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class InvoiceDataEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_invoice_action__WEBPACK_IMPORTED_MODULE_0__.fetchInvoiceListData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/invoice').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(InvoiceData => (0,_invoice_action__WEBPACK_IMPORTED_MODULE_0__.fetchInvoiceListSuccess)({
      InvoiceData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_invoice_action__WEBPACK_IMPORTED_MODULE_0__.fetchInvoiceListFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function InvoiceDataEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceDataEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: InvoiceDataEffects,
      factory: InvoiceDataEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 1123:
/*!****************************************************!*\
  !*** ./src/app/store/Invoices/invoices.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceDataReducer: () => (/* binding */ InvoiceDataReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _invoice_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.action */ 11536);


const initialState = {
  InvoiceData: [],
  loading: false,
  error: null
};
const InvoiceDataReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_invoice_action__WEBPACK_IMPORTED_MODULE_0__.fetchInvoiceListData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_invoice_action__WEBPACK_IMPORTED_MODULE_0__.fetchInvoiceListSuccess, (state, {
  InvoiceData
}) => {
  return {
    ...state,
    InvoiceData,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_invoice_action__WEBPACK_IMPORTED_MODULE_0__.fetchInvoiceListFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return InvoiceDataReducer(state, action);
}

/***/ }),

/***/ 68715:
/*!*****************************************!*\
  !*** ./src/app/store/Job/job.action.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addJoblist: () => (/* binding */ addJoblist),
/* harmony export */   addJoblistFailure: () => (/* binding */ addJoblistFailure),
/* harmony export */   addJoblistSuccess: () => (/* binding */ addJoblistSuccess),
/* harmony export */   deleteJoblist: () => (/* binding */ deleteJoblist),
/* harmony export */   deleteJoblistFailure: () => (/* binding */ deleteJoblistFailure),
/* harmony export */   deleteJoblistSuccess: () => (/* binding */ deleteJoblistSuccess),
/* harmony export */   fetchJobApplyData: () => (/* binding */ fetchJobApplyData),
/* harmony export */   fetchJobApplyFail: () => (/* binding */ fetchJobApplyFail),
/* harmony export */   fetchJobApplySuccess: () => (/* binding */ fetchJobApplySuccess),
/* harmony export */   fetchJobgridData: () => (/* binding */ fetchJobgridData),
/* harmony export */   fetchJobgridFail: () => (/* binding */ fetchJobgridFail),
/* harmony export */   fetchJobgridSuccess: () => (/* binding */ fetchJobgridSuccess),
/* harmony export */   fetchJoblistData: () => (/* binding */ fetchJoblistData),
/* harmony export */   fetchJoblistFail: () => (/* binding */ fetchJoblistFail),
/* harmony export */   fetchJoblistSuccess: () => (/* binding */ fetchJoblistSuccess),
/* harmony export */   updateJoblist: () => (/* binding */ updateJoblist),
/* harmony export */   updateJoblistFailure: () => (/* binding */ updateJoblistFailure),
/* harmony export */   updateJoblistSuccess: () => (/* binding */ updateJoblistSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

//  fetchJoblistData
const fetchJoblistData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Joblist');
const fetchJoblistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Joblist success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchJoblistFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch Joblist failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//  fetchJobgridData
const fetchJobgridData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Jobgrid');
const fetchJobgridSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Jobgrid success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchJobgridFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch Jobgrid failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//  fetchJobApplyData
const fetchJobApplyData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch JobApply');
const fetchJobApplySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch JobApply success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchJobApplyFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch JobApply failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Add Data
const addJoblist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Joblist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addJoblistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Joblist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addJoblistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Joblist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Update Data
const updateJoblist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Joblist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateJoblistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Joblist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateJoblistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Joblist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Delete Data
const deleteJoblist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Joblist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteJoblistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Joblist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteJoblistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Joblist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 95703:
/*!******************************************!*\
  !*** ./src/app/store/Job/job.effects.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoblistEffects: () => (/* binding */ JoblistEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _job_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job.action */ 68715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class JoblistEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJoblistData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/joblist').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(joblist => (0,_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJoblistSuccess)({
      joblist
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJoblistFail)({
      error
    })))))));
    this.fetchgroupData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobgridData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/jobgrid').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(jobGrid => (0,_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobgridSuccess)({
      jobGrid
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobgridFail)({
      error
    })))))));
    this.fetchjobapplyData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobApplyData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/jobapply').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(JobApply => (0,_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobApplySuccess)({
      JobApply
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobApplyFail)({
      error
    })))))));
    this.addData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_job_action__WEBPACK_IMPORTED_MODULE_0__.addJoblist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      newData
    }) => this.CrudService.addData('/app/joblist', newData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_job_action__WEBPACK_IMPORTED_MODULE_0__.addJoblistSuccess)({
      newData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_job_action__WEBPACK_IMPORTED_MODULE_0__.addJoblistFailure)({
      error
    })))))));
    this.updateData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_job_action__WEBPACK_IMPORTED_MODULE_0__.updateJoblist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      updatedData
    }) => this.CrudService.updateData('/app/joblist', updatedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_job_action__WEBPACK_IMPORTED_MODULE_0__.updateJoblistSuccess)({
      updatedData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_job_action__WEBPACK_IMPORTED_MODULE_0__.updateJoblistFailure)({
      error
    })))))));
  }
  static {
    this.ɵfac = function JoblistEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JoblistEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: JoblistEffects,
      factory: JoblistEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 54829:
/*!******************************************!*\
  !*** ./src/app/store/Job/job.reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoblistReducer: () => (/* binding */ JoblistReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _job_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job.action */ 68715);


const initialState = {
  joblist: [],
  jobGrid: [],
  JobApply: [],
  loading: false,
  error: null
};
const JoblistReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJoblistData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJoblistSuccess, (state, {
  joblist
}) => {
  return {
    ...state,
    joblist,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJoblistFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobgridData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobgridSuccess, (state, {
  jobGrid
}) => {
  return {
    ...state,
    jobGrid,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobgridFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobApplyData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobApplySuccess, (state, {
  JobApply
}) => {
  return {
    ...state,
    JobApply,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.fetchJobApplyFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.addJoblist, (state, {
  newData
}) => {
  return {
    ...state,
    joblist: [newData, ...state.joblist],
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_job_action__WEBPACK_IMPORTED_MODULE_0__.updateJoblistSuccess, (state, {
  updatedData
}) => {
  return {
    ...state,
    joblist: state.joblist.map(joblist => joblist.id === updatedData.id ? updatedData : joblist),
    error: null
  };
}));
// Selector
function reducer(state, action) {
  return JoblistReducer(state, action);
}

/***/ }),

/***/ 84499:
/*!*******************************************************!*\
  !*** ./src/app/store/ProjectsData/project.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchprojectData: () => (/* binding */ fetchprojectData),
/* harmony export */   fetchprojectFail: () => (/* binding */ fetchprojectFail),
/* harmony export */   fetchprojectSuccess: () => (/* binding */ fetchprojectSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchprojectData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch project');
const fetchprojectSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch project success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchprojectFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch project failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 25306:
/*!*******************************************************!*\
  !*** ./src/app/store/ProjectsData/project.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectEffects: () => (/* binding */ ProjectEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _project_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.actions */ 84499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class ProjectEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_project_actions__WEBPACK_IMPORTED_MODULE_0__.fetchprojectData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/businesses/1/projects').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(projectdata => (0,_project_actions__WEBPACK_IMPORTED_MODULE_0__.fetchprojectSuccess)({
      projectdata
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_project_actions__WEBPACK_IMPORTED_MODULE_0__.fetchprojectFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function ProjectEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProjectEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ProjectEffects,
      factory: ProjectEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 90120:
/*!*******************************************************!*\
  !*** ./src/app/store/ProjectsData/project.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   projectReducer: () => (/* binding */ projectReducer),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _project_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.actions */ 84499);


const initialState = {
  projectdata: [],
  loading: false,
  error: null
};
const projectReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_project_actions__WEBPACK_IMPORTED_MODULE_0__.fetchprojectData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_project_actions__WEBPACK_IMPORTED_MODULE_0__.fetchprojectSuccess, (state, {
  projectdata
}) => {
  return {
    ...state,
    projectdata,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_project_actions__WEBPACK_IMPORTED_MODULE_0__.fetchprojectFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return projectReducer(state, action);
}

/***/ }),

/***/ 54779:
/*!*********************************************!*\
  !*** ./src/app/store/Tasks/tasks.action.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addtasklist: () => (/* binding */ addtasklist),
/* harmony export */   addtasklistFailure: () => (/* binding */ addtasklistFailure),
/* harmony export */   addtasklistSuccess: () => (/* binding */ addtasklistSuccess),
/* harmony export */   fetchtasklistData: () => (/* binding */ fetchtasklistData),
/* harmony export */   fetchtasklistFail: () => (/* binding */ fetchtasklistFail),
/* harmony export */   fetchtasklistSuccess: () => (/* binding */ fetchtasklistSuccess),
/* harmony export */   updatetasklist: () => (/* binding */ updatetasklist),
/* harmony export */   updatetasklistFailure: () => (/* binding */ updatetasklistFailure),
/* harmony export */   updatetasklistSuccess: () => (/* binding */ updatetasklistSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchtasklistData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch tasklist');
const fetchtasklistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch tasklist success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchtasklistFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch tasklist failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Add Data
const addtasklist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add tasklist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addtasklistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add tasklist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addtasklistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add tasklist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Update Data
const updatetasklist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update tasklist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatetasklistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update tasklist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatetasklistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update tasklist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 92016:
/*!*********************************************!*\
  !*** ./src/app/store/Tasks/tasks.effect.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tasklistEffects: () => (/* binding */ tasklistEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _tasks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.action */ 54779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class tasklistEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.fetchtasklistData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/tasks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(tasklist => (0,_tasks_action__WEBPACK_IMPORTED_MODULE_0__.fetchtasklistSuccess)({
      tasklist
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_tasks_action__WEBPACK_IMPORTED_MODULE_0__.fetchtasklistFail)({
      error
    })))))));
    this.addData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.addtasklist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      newData
    }) => this.CrudService.addData('/app/tasks', newData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_tasks_action__WEBPACK_IMPORTED_MODULE_0__.addtasklistSuccess)({
      newData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_tasks_action__WEBPACK_IMPORTED_MODULE_0__.addtasklistFailure)({
      error
    })))))));
    this.updateData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.updatetasklist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      updatedData
    }) => this.CrudService.updateData('/app/tasks', updatedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_tasks_action__WEBPACK_IMPORTED_MODULE_0__.updatetasklistSuccess)({
      updatedData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_tasks_action__WEBPACK_IMPORTED_MODULE_0__.updatetasklistFailure)({
      error
    })))))));
  }
  static {
    this.ɵfac = function tasklistEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || tasklistEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: tasklistEffects,
      factory: tasklistEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 60445:
/*!**********************************************!*\
  !*** ./src/app/store/Tasks/tasks.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   tasklistReducer: () => (/* binding */ tasklistReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _tasks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.action */ 54779);


const initialState = {
  tasklist: [],
  loading: false,
  error: null
};
const tasklistReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.fetchtasklistData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.fetchtasklistSuccess, (state, {
  tasklist
}) => {
  return {
    ...state,
    tasklist,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.fetchtasklistFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.addtasklistSuccess, (state, {
  newData
}) => {
  return {
    ...state,
    tasklist: [newData, ...state.tasklist],
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_tasks_action__WEBPACK_IMPORTED_MODULE_0__.updatetasklistSuccess, (state, {
  updatedData
}) => {
  return {
    ...state,
    tasklist: state.tasklist.map(tasklist => tasklist.id === updatedData.id ? updatedData : tasklist),
    error: null
  };
}));

/***/ }),

/***/ 30647:
/*!***********************************************!*\
  !*** ./src/app/store/UserGrid/user.action.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchuserGridData: () => (/* binding */ fetchuserGridData),
/* harmony export */   fetchuserGridFail: () => (/* binding */ fetchuserGridFail),
/* harmony export */   fetchuserGridSuccess: () => (/* binding */ fetchuserGridSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchuserGridData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch userGrid');
const fetchuserGridSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch userGrid success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchuserGridFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch userGrid failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 3947:
/*!************************************************!*\
  !*** ./src/app/store/UserGrid/user.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usersEffects: () => (/* binding */ usersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.action */ 30647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class usersEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_user_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserGridData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/userGrid').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(UserGriddata => (0,_user_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserGridSuccess)({
      UserGriddata
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_user_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserGridFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function usersEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || usersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: usersEffects,
      factory: usersEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 96537:
/*!************************************************!*\
  !*** ./src/app/store/UserGrid/user.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserReducer: () => (/* binding */ UserReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.action */ 30647);


const initialState = {
  UserGriddata: [],
  loading: false,
  error: null
};
const UserReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_user_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserGridData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_user_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserGridSuccess, (state, {
  UserGriddata
}) => {
  return {
    ...state,
    UserGriddata,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_user_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserGridFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));

/***/ }),

/***/ 46483:
/*!***************************************************!*\
  !*** ./src/app/store/UserList/userlist.action.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adduserlist: () => (/* binding */ adduserlist),
/* harmony export */   adduserlistFailure: () => (/* binding */ adduserlistFailure),
/* harmony export */   adduserlistSuccess: () => (/* binding */ adduserlistSuccess),
/* harmony export */   deleteuserlist: () => (/* binding */ deleteuserlist),
/* harmony export */   deleteuserlistFailure: () => (/* binding */ deleteuserlistFailure),
/* harmony export */   deleteuserlistSuccess: () => (/* binding */ deleteuserlistSuccess),
/* harmony export */   fetchuserlistData: () => (/* binding */ fetchuserlistData),
/* harmony export */   fetchuserlistFail: () => (/* binding */ fetchuserlistFail),
/* harmony export */   fetchuserlistSuccess: () => (/* binding */ fetchuserlistSuccess),
/* harmony export */   updateuserlist: () => (/* binding */ updateuserlist),
/* harmony export */   updateuserlistFailure: () => (/* binding */ updateuserlistFailure),
/* harmony export */   updateuserlistSuccess: () => (/* binding */ updateuserlistSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchuserlistData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch userlist');
const fetchuserlistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch userlist success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchuserlistFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch userlist failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Add Data
const adduserlist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add userlist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const adduserlistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add userlist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const adduserlistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add userlist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Update Data
const updateuserlist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update userlist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateuserlistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update userlist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateuserlistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update userlist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Delete Data
const deleteuserlist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete userlist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteuserlistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete userlist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteuserlistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete userlist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 16952:
/*!***************************************************!*\
  !*** ./src/app/store/UserList/userlist.effect.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userslistEffects: () => (/* binding */ userslistEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _userlist_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist.action */ 46483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class userslistEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserlistData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/userlist').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(UserListdata => (0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserlistSuccess)({
      UserListdata
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserlistFail)({
      error
    })))))));
    this.addData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.adduserlist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      newData
    }) => this.CrudService.addData('/app/userlist', newData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.adduserlistSuccess)({
      newData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.adduserlistFailure)({
      error
    })))))));
    this.updateData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.updateuserlist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      updatedData
    }) => this.CrudService.updateData('/app/userlist', updatedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.updateuserlistSuccess)({
      updatedData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.updateuserlistFailure)({
      error
    })))))));
    this.deleteData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.deleteuserlist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      id
    }) => this.CrudService.deleteData('/app/userlist').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.deleteuserlistSuccess)({
      id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_userlist_action__WEBPACK_IMPORTED_MODULE_0__.deleteuserlistFailure)({
      error
    })))))));
  }
  static {
    this.ɵfac = function userslistEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || userslistEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: userslistEffects,
      factory: userslistEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 96949:
/*!****************************************************!*\
  !*** ./src/app/store/UserList/userlist.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListReducer: () => (/* binding */ UserListReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _userlist_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist.action */ 46483);


const initialState = {
  UserListdata: [],
  loading: false,
  error: null
};
const UserListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserlistData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserlistSuccess, (state, {
  UserListdata
}) => {
  return {
    ...state,
    UserListdata,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.fetchuserlistFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.adduserlistSuccess, (state, {
  newData
}) => {
  return {
    ...state,
    UserListdata: [newData, ...state.UserListdata],
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.updateuserlistSuccess, (state, {
  updatedData
}) => {
  return {
    ...state,
    UserListdata: state.UserListdata.map(UserListdata => UserListdata.id === updatedData.id ? updatedData : UserListdata),
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_userlist_action__WEBPACK_IMPORTED_MODULE_0__.deleteuserlistSuccess, (state, {
  id
}) => {
  return {
    ...state,
    UserListdata: state.UserListdata.filter(UserListdata => UserListdata.id !== id),
    error: null
  };
}));

/***/ }),

/***/ 44137:
/*!***************************************************!*\
  !*** ./src/app/store/customer/customer.action.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCustomerlist: () => (/* binding */ addCustomerlist),
/* harmony export */   addCustomerlistFailure: () => (/* binding */ addCustomerlistFailure),
/* harmony export */   addCustomerlistSuccess: () => (/* binding */ addCustomerlistSuccess),
/* harmony export */   deleteCustomerlist: () => (/* binding */ deleteCustomerlist),
/* harmony export */   deleteCustomerlistFailure: () => (/* binding */ deleteCustomerlistFailure),
/* harmony export */   deleteCustomerlistSuccess: () => (/* binding */ deleteCustomerlistSuccess),
/* harmony export */   fetchCustomerData: () => (/* binding */ fetchCustomerData),
/* harmony export */   fetchCustomerFail: () => (/* binding */ fetchCustomerFail),
/* harmony export */   fetchCustomerSuccess: () => (/* binding */ fetchCustomerSuccess),
/* harmony export */   updateCustomerlist: () => (/* binding */ updateCustomerlist),
/* harmony export */   updateCustomerlistFailure: () => (/* binding */ updateCustomerlistFailure),
/* harmony export */   updateCustomerlistSuccess: () => (/* binding */ updateCustomerlistSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchCustomerData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Customer');
const fetchCustomerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch Customer success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchCustomerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch Customer failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Add Data
const addCustomerlist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Customerlist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addCustomerlistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Customerlist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addCustomerlistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Customerlist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Update Data
const updateCustomerlist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Customerlist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCustomerlistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Customerlist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCustomerlistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Customerlist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Delete Data
const deleteCustomerlist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Customerlist', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteCustomerlistSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Customerlist Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteCustomerlistFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Customerlist Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 39981:
/*!****************************************************!*\
  !*** ./src/app/store/customer/customer.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerEffects: () => (/* binding */ CustomerEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _customer_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.action */ 44137);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class CustomerEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.fetchCustomerData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/customersData').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(customer => (0,_customer_action__WEBPACK_IMPORTED_MODULE_0__.fetchCustomerSuccess)({
      customer
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_customer_action__WEBPACK_IMPORTED_MODULE_0__.fetchCustomerFail)({
      error
    })))))));
    this.addData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.addCustomerlist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      newData
    }) => this.CrudService.addData('/app/customersData', newData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_customer_action__WEBPACK_IMPORTED_MODULE_0__.addCustomerlistSuccess)({
      newData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_customer_action__WEBPACK_IMPORTED_MODULE_0__.addCustomerlistFailure)({
      error
    })))))));
    this.updateData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.updateCustomerlist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      updatedData
    }) => this.CrudService.updateData('/app/customersData', updatedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_customer_action__WEBPACK_IMPORTED_MODULE_0__.updateCustomerlistSuccess)({
      updatedData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_customer_action__WEBPACK_IMPORTED_MODULE_0__.updateCustomerlistFailure)({
      error
    })))))));
  }
  static {
    this.ɵfac = function CustomerEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: CustomerEffects,
      factory: CustomerEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 14927:
/*!****************************************************!*\
  !*** ./src/app/store/customer/customer.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerReducer: () => (/* binding */ CustomerReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _customer_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.action */ 44137);


const initialState = {
  customer: [],
  loading: false,
  error: null
};
const CustomerReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.fetchCustomerData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.fetchCustomerSuccess, (state, {
  customer
}) => {
  return {
    ...state,
    customer,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.fetchCustomerFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.addCustomerlistSuccess, (state, {
  newData
}) => {
  return {
    ...state,
    customer: [newData, ...state.customer],
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customer_action__WEBPACK_IMPORTED_MODULE_0__.updateCustomerlistSuccess, (state, {
  updatedData
}) => {
  return {
    ...state,
    customer: state.customer.map(customer => customer.id === updatedData.id ? updatedData : customer),
    error: null
  };
}));
// Selector
function reducer(state, action) {
  return CustomerReducer(state, action);
}

/***/ }),

/***/ 19970:
/*!**********************************************************!*\
  !*** ./src/app/store/filemanager/filemanager.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchRecentFilesData: () => (/* binding */ fetchRecentFilesData),
/* harmony export */   fetchRecentFilesFail: () => (/* binding */ fetchRecentFilesFail),
/* harmony export */   fetchRecentFilesSuccess: () => (/* binding */ fetchRecentFilesSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchRecentFilesData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch RecentFiles');
const fetchRecentFilesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch RecentFiles success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchRecentFilesFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch RecentFiles failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 47871:
/*!**********************************************************!*\
  !*** ./src/app/store/filemanager/filemanager.effects.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilemanagerEffects: () => (/* binding */ FilemanagerEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _filemanager_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filemanager.actions */ 19970);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class FilemanagerEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_filemanager_actions__WEBPACK_IMPORTED_MODULE_0__.fetchRecentFilesData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/recentFiles').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recentFiles => (0,_filemanager_actions__WEBPACK_IMPORTED_MODULE_0__.fetchRecentFilesSuccess)({
      recentFiles
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_filemanager_actions__WEBPACK_IMPORTED_MODULE_0__.fetchRecentFilesFail)({
      error
    })))))));
  }
  static {
    this.ɵfac = function FilemanagerEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilemanagerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: FilemanagerEffects,
      factory: FilemanagerEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 89845:
/*!**********************************************************!*\
  !*** ./src/app/store/filemanager/filemanager.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilemanageReducer: () => (/* binding */ FilemanageReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _filemanager_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filemanager.actions */ 19970);


const initialState = {
  recentFiles: [],
  loading: false,
  error: null
};
const FilemanageReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_filemanager_actions__WEBPACK_IMPORTED_MODULE_0__.fetchRecentFilesData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_filemanager_actions__WEBPACK_IMPORTED_MODULE_0__.fetchRecentFilesSuccess, (state, {
  recentFiles
}) => {
  return {
    ...state,
    recentFiles,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_filemanager_actions__WEBPACK_IMPORTED_MODULE_0__.fetchRecentFilesFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}));
// Selector
function reducer(state, action) {
  return FilemanageReducer(state, action);
}

/***/ }),

/***/ 8144:
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rootReducer: () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _filemanager_filemanager_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filemanager/filemanager.reducer */ 89845);
/* harmony import */ var _orders_order_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/order.reducer */ 38902);
/* harmony import */ var _Authentication_authentication_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Authentication/authentication.reducer */ 87699);
/* harmony import */ var _Cart_cart_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart/cart.reducer */ 30675);
/* harmony import */ var _ProjectsData_project_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectsData/project.reducer */ 90120);
/* harmony import */ var _UserGrid_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserGrid/user.reducer */ 96537);
/* harmony import */ var _UserList_userlist_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserList/userlist.reducer */ 96949);
/* harmony import */ var _Job_job_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Job/job.reducer */ 54829);
/* harmony import */ var _Candidate_candidate_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Candidate/candidate.reducer */ 34477);
/* harmony import */ var _Invoices_invoices_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Invoices/invoices.reducer */ 1123);
/* harmony import */ var _Chat_chat_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/chat.reducer */ 29319);
/* harmony import */ var _Tasks_tasks_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Tasks/tasks.reducer */ 60445);
/* harmony import */ var _Crypto_crypto_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Crypto/crypto.reducer */ 1341);
/* harmony import */ var _layouts_layouts_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/layouts.reducer */ 47749);
/* harmony import */ var _customer_customer_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/customer.reducer */ 14927);
/* harmony import */ var _Email_email_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Email/email.reducer */ 93245);
















const rootReducer = {
  layout: _layouts_layouts_reducer__WEBPACK_IMPORTED_MODULE_13__.layoutReducer,
  auth: _Authentication_authentication_reducer__WEBPACK_IMPORTED_MODULE_2__.authenticationReducer,
  Filelist: _filemanager_filemanager_reducer__WEBPACK_IMPORTED_MODULE_0__.FilemanageReducer,
  EcoOrderList: _orders_order_reducer__WEBPACK_IMPORTED_MODULE_1__.OrderReducer,
  CartList: _Cart_cart_reducer__WEBPACK_IMPORTED_MODULE_3__.CartReducer,
  Projectlist: _ProjectsData_project_reducer__WEBPACK_IMPORTED_MODULE_4__.projectReducer,
  usergrid: _UserGrid_user_reducer__WEBPACK_IMPORTED_MODULE_5__.UserReducer,
  userList: _UserList_userlist_reducer__WEBPACK_IMPORTED_MODULE_6__.UserListReducer,
  Joblist: _Job_job_reducer__WEBPACK_IMPORTED_MODULE_7__.JoblistReducer,
  CandidateList: _Candidate_candidate_reducer__WEBPACK_IMPORTED_MODULE_8__.CandidateReducer,
  InvoiceList: _Invoices_invoices_reducer__WEBPACK_IMPORTED_MODULE_9__.InvoiceDataReducer,
  chatList: _Chat_chat_reducer__WEBPACK_IMPORTED_MODULE_10__.ChatReducer,
  Tasklist: _Tasks_tasks_reducer__WEBPACK_IMPORTED_MODULE_11__.tasklistReducer,
  Order: _Crypto_crypto_reducer__WEBPACK_IMPORTED_MODULE_12__.OrdersReducer,
  Customer: _customer_customer_reducer__WEBPACK_IMPORTED_MODULE_14__.CustomerReducer,
  Maillist: _Email_email_reducer__WEBPACK_IMPORTED_MODULE_15__.MailReducer
};

/***/ }),

/***/ 34261:
/*!*************************************************!*\
  !*** ./src/app/store/layouts/layout.actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLayoutWidth: () => (/* binding */ changeLayoutWidth),
/* harmony export */   changeMode: () => (/* binding */ changeMode),
/* harmony export */   changeSidebarMode: () => (/* binding */ changeSidebarMode),
/* harmony export */   changeTopbarMode: () => (/* binding */ changeTopbarMode),
/* harmony export */   changesLayout: () => (/* binding */ changesLayout)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const changeMode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] set mode', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const changesLayout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] Set Horizontal layout', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const changeLayoutWidth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] Set LayoutWidth', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const changeSidebarMode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] Set SidebarMode', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const changeTopbarMode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] Set TopbarMode', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 68029:
/*!**************************************************!*\
  !*** ./src/app/store/layouts/layout.selector.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataLayout: () => (/* binding */ getDataLayout),
/* harmony export */   getLayoutMode: () => (/* binding */ getLayoutMode),
/* harmony export */   getLayoutState: () => (/* binding */ getLayoutState),
/* harmony export */   getLayoutWidth: () => (/* binding */ getLayoutWidth),
/* harmony export */   getTopbarLayout: () => (/* binding */ getTopbarLayout),
/* harmony export */   getsidebar: () => (/* binding */ getsidebar)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const getLayoutState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('layout');
const getLayoutMode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, state => state.LAYOUT_MODE);
const getDataLayout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, state => state.DATA_LAYOUT);
const getLayoutWidth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, state => state.LAYOUT_WIDTH);
const getsidebar = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, state => state.SIDEBAR_MODE);
const getTopbarLayout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, state => state.TOPBAR_TYPE);

/***/ }),

/***/ 33808:
/*!*****************************************!*\
  !*** ./src/app/store/layouts/layout.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATA_LAYOUT_MODE: () => (/* binding */ DATA_LAYOUT_MODE),
/* harmony export */   LAYOUT_MODE_TYPES: () => (/* binding */ LAYOUT_MODE_TYPES),
/* harmony export */   LAYOUT_WIDTH_TYPES: () => (/* binding */ LAYOUT_WIDTH_TYPES),
/* harmony export */   SIDEBAR_TYPE: () => (/* binding */ SIDEBAR_TYPE),
/* harmony export */   TOPBAR_MODE_TYPES: () => (/* binding */ TOPBAR_MODE_TYPES)
/* harmony export */ });
const LAYOUT_MODE_TYPES = {
  LIGHTMODE: "light",
  DARKMODE: "dark"
};
const DATA_LAYOUT_MODE = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
};
const LAYOUT_WIDTH_TYPES = {
  FLUID: "fluid",
  BOXED: "boxed",
  SCROLLABLE: "scrollable"
};
const SIDEBAR_TYPE = {
  LIGHT: "light",
  DARK: "dark",
  COLOERED: "colored"
};
const TOPBAR_MODE_TYPES = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored"
};


/***/ }),

/***/ 47749:
/*!**************************************************!*\
  !*** ./src/app/store/layouts/layouts.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   layoutReducer: () => (/* binding */ layoutReducer),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _layout_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.actions */ 34261);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ 33808);



// INIT_STATE 
const initialState = {
  LAYOUT_MODE: _layout__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_MODE_TYPES.LIGHTMODE,
  DATA_LAYOUT: _layout__WEBPACK_IMPORTED_MODULE_1__.DATA_LAYOUT_MODE.VERTICAL,
  LAYOUT_WIDTH: _layout__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_WIDTH_TYPES.FLUID,
  SIDEBAR_MODE: _layout__WEBPACK_IMPORTED_MODULE_1__.SIDEBAR_TYPE.DARK,
  TOPBAR_TYPE: _layout__WEBPACK_IMPORTED_MODULE_1__.TOPBAR_MODE_TYPES.DARK
};
// Reducer
const layoutReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_layout_actions__WEBPACK_IMPORTED_MODULE_0__.changeMode, (state, action) => ({
  ...state,
  LAYOUT_MODE: action.mode
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_layout_actions__WEBPACK_IMPORTED_MODULE_0__.changesLayout, (state, action) => ({
  ...state,
  DATA_LAYOUT: action.layoutMode
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_layout_actions__WEBPACK_IMPORTED_MODULE_0__.changeLayoutWidth, (state, action) => ({
  ...state,
  LAYOUT_WIDTH: action.layoutWidth
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_layout_actions__WEBPACK_IMPORTED_MODULE_0__.changeSidebarMode, (state, action) => ({
  ...state,
  SIDEBAR_MODE: action.sidebarMode
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_layout_actions__WEBPACK_IMPORTED_MODULE_0__.changeTopbarMode, (state, action) => ({
  ...state,
  TOPBAR_TYPE: action.topbarmode
})));
// Selector
function reducer(state, action) {
  return layoutReducer(state, action);
}

/***/ }),

/***/ 62117:
/*!***********************************************!*\
  !*** ./src/app/store/orders/order.actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEcoOrders: () => (/* binding */ addEcoOrders),
/* harmony export */   addEcoOrdersFailure: () => (/* binding */ addEcoOrdersFailure),
/* harmony export */   addEcoOrdersSuccess: () => (/* binding */ addEcoOrdersSuccess),
/* harmony export */   deleteEcoOrders: () => (/* binding */ deleteEcoOrders),
/* harmony export */   deleteEcoOrdersFailure: () => (/* binding */ deleteEcoOrdersFailure),
/* harmony export */   deleteEcoOrdersSuccess: () => (/* binding */ deleteEcoOrdersSuccess),
/* harmony export */   fetchEcoorderDataData: () => (/* binding */ fetchEcoorderDataData),
/* harmony export */   fetchEcoorderDataFail: () => (/* binding */ fetchEcoorderDataFail),
/* harmony export */   fetchEcoorderDataSuccess: () => (/* binding */ fetchEcoorderDataSuccess),
/* harmony export */   updateEcoOrders: () => (/* binding */ updateEcoOrders),
/* harmony export */   updateEcoOrdersFailure: () => (/* binding */ updateEcoOrdersFailure),
/* harmony export */   updateEcoOrdersSuccess: () => (/* binding */ updateEcoOrdersSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

// fetch 
const fetchEcoorderDataData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch orderDatas');
const fetchEcoorderDataSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] fetch orderDatas success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchEcoorderDataFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data fetch orderDatas failed]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Add Data
const addEcoOrders = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Orders', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addEcoOrdersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Orders Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addEcoOrdersFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Add Orders Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Update Data
const updateEcoOrders = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Orders', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateEcoOrdersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Orders Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateEcoOrdersFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Update Orders Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Delete Data
const deleteEcoOrders = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Orders', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteEcoOrdersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Orders Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteEcoOrdersFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Data] Delete Orders Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 1468:
/*!***********************************************!*\
  !*** ./src/app/store/orders/order.effects.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderEffects: () => (/* binding */ OrderEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _order_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.actions */ 62117);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/crud.service */ 18128);







class OrderEffects {
  constructor(actions$, CrudService) {
    this.actions$ = actions$;
    this.CrudService = CrudService;
    this.fetchData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.fetchEcoorderDataData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.CrudService.fetchData('/app/orderData').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(orderDatas => (0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.fetchEcoorderDataSuccess)({
      orderDatas
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.fetchEcoorderDataFail)({
      error
    })))))));
    this.addData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.addEcoOrders), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      newData
    }) => this.CrudService.addData('/app/orderData', newData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.addEcoOrdersSuccess)({
      newData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.addEcoOrdersFailure)({
      error
    })))))));
    this.updateData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.updateEcoOrders), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      updatedData
    }) => this.CrudService.updateData('/app/orderData', updatedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.updateEcoOrdersSuccess)({
      updatedData
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.updateEcoOrdersFailure)({
      error
    })))))));
    this.deleteData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.deleteEcoOrders), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      ids
    }) => this.CrudService.deleteData('/app/orderData').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => (0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.deleteEcoOrdersSuccess)({
      ids
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_order_actions__WEBPACK_IMPORTED_MODULE_0__.deleteEcoOrdersFailure)({
      error
    })))))));
  }
  static {
    this.ɵfac = function OrderEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: OrderEffects,
      factory: OrderEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 38902:
/*!***********************************************!*\
  !*** ./src/app/store/orders/order.reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderReducer: () => (/* binding */ OrderReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _order_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.actions */ 62117);


const initialState = {
  orderDatas: [],
  loading: false,
  error: null
};
const OrderReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.fetchEcoorderDataData, state => {
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.fetchEcoorderDataSuccess, (state, {
  orderDatas
}) => {
  return {
    ...state,
    orderDatas,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.fetchEcoorderDataFail, (state, {
  error
}) => {
  return {
    ...state,
    error,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.addEcoOrdersSuccess, (state, {
  newData
}) => {
  return {
    ...state,
    orderDatas: [newData, ...state.orderDatas],
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.updateEcoOrdersSuccess, (state, {
  updatedData
}) => {
  return {
    ...state,
    orderDatas: state.orderDatas.map(orderDatas => orderDatas.id === updatedData.id ? updatedData : orderDatas),
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_order_actions__WEBPACK_IMPORTED_MODULE_0__.deleteEcoOrdersSuccess, (state, {
  ids
}) => {
  const updatedTable = state.orderDatas.filter(orderDatas => !ids.includes(orderDatas.id));
  return {
    ...state,
    orderDatas: updatedTable,
    error: null
  };
}));
// Selector
function reducer(state, action) {
  return OrderReducer(state, action);
}

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  defaultauth: 'fakebackend',
  apiUrl: 'http://localhost:9000',
  // Development backend URL
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 70289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 20092);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_authUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/authUtils */ 35689);
/* harmony import */ var _app_core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/core/helpers/fake-backend */ 14548);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _app_core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/core/helpers/jwt.interceptor */ 33790);
/* harmony import */ var _app_core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/core/helpers/error.interceptor */ 40033);
// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
// enableProdMode();
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));










// Enable production mode if in production environment
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.enableProdMode)();
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.defaultauth === 'firebase') {
  (0,_app_authUtils__WEBPACK_IMPORTED_MODULE_3__.initFirebaseBackend)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig);
} else {
  _app_core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_4__.FakeBackendInterceptor;
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.provideHttpClient)(), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
    useClass: _app_core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
    useClass: _app_core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.ErrorInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
    useClass: _app_core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_4__.FakeBackendInterceptor,
    multi: true
  }, ..._app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig.providers]
}).catch(err => console.error('Error during bootstrapping the application:', err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map