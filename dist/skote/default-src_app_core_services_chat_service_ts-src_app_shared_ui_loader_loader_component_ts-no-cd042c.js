(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_core_services_chat_service_ts-src_app_shared_ui_loader_loader_component_ts-no-cd042c"],{

/***/ 85538:
/*!***********************************************!*\
  !*** ./src/app/core/services/chat.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatService: () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);





class ChatService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:9000';
    // Real-time updates
    this.threadsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.currentThreadSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.newMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.threads$ = this.threadsSubject.asObservable();
    this.currentThread$ = this.currentThreadSubject.asObservable();
    this.newMessage$ = this.newMessageSubject.asObservable();
  }
  /**
   * Get all chat threads for accountant
   */
  getAllThreads() {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/threads`, {
      headers
    });
  }
  /**
   * Get specific chat thread with messages
   */
  getThread(clientId) {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/threads/${clientId}`, {
      headers
    });
  }
  /**
   * Send message to a thread
   */
  sendMessage(clientId, messageRequest) {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.baseUrl}/threads/${clientId}/messages`, messageRequest, {
      headers
    });
  }
  /**
   * Get AI Agent response (mock implementation for now)
   */
  getAIResponse(message, context) {
    // Mock AI response - replace with actual AI service later
    const mockResponse = {
      message: this.generateMockAIResponse(message),
      confidence: 0.85,
      suggestedActions: ['Schedule a consultation', 'Review tax documents', 'Check deduction eligibility']
    };
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      setTimeout(() => {
        observer.next(mockResponse);
        observer.complete();
      }, 1000); // Simulate API delay
    });
  }
  /**
   * Update threads list
   */
  updateThreads(threads) {
    this.threadsSubject.next(threads);
  }
  /**
   * Update current thread
   */
  updateCurrentThread(thread) {
    this.currentThreadSubject.next(thread);
  }
  /**
   * Emit new message
   */
  emitNewMessage(message) {
    this.newMessageSubject.next(message);
  }
  /**
   * Get current user info
   */
  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
  /**
   * Check if current user is client
   */
  isClient() {
    const user = this.getCurrentUser();
    if (!user) return false;
    const userRole = user.role?.toLowerCase();
    const userType = user.userType?.toLowerCase();
    const roleType = user.roleType?.toLowerCase();
    return userRole === 'client' || userType === 'client' || roleType === 'client';
  }
  /**
   * Generate mock AI response (temporary)
   */
  generateMockAIResponse(message) {
    const responses = ["I understand you're asking about tax matters. Let me help you with that information.", "Based on current tax regulations, here's what I can tell you about your question.", "That's a great question about taxes. Here's some guidance that might help.", "I can assist you with that tax-related inquiry. Let me provide some insights.", "Thank you for your question. Here's what you should know about this tax matter."];
    return responses[Math.floor(Math.random() * responses.length)] + " For specific advice regarding your situation, I recommend discussing this with your accountant.";
  }
  static {
    this.ɵfac = function ChatService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 87163:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class LoaderService {
  constructor() {
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  }
  static {
    this.ɵfac = function LoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoaderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 69295:
/*!******************************************************!*\
  !*** ./src/app/shared/ui/loader/loader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/loader.service */ 87163);



function LoaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3)(4, "div", 3)(5, "div", 3)(6, "div", 3)(7, "div", 3)(8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LoaderComponent {
  constructor(loaderService) {
    this.loaderService = loaderService;
    this.loading = true;
    this.loaderService.isLoading.subscribe(v => {
      setTimeout(() => {
        this.loading = v;
      }, 1500);
    });
  }
  ngOnInit() {}
  static {
    this.ɵfac = function LoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["id", "preloader"], ["id", "status"], [1, "spinner-chase"], [1, "chase-dot"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_Conditional_0_Template, 9, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.loading ? 0 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 85176:
/*!************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.js ***!
  \************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else { var i, a; }
})(self, function () {
  return /******/function () {
    // webpackBootstrap
    /******/
    var __webpack_modules__ = {
      /***/3099: (/***/function (module) {
        module.exports = function (it) {
          if (typeof it != 'function') {
            throw TypeError(String(it) + ' is not a function');
          }
          return it;
        };

        /***/
      }),
      /***/6077: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_786__) {
        var isObject = __nested_webpack_require_786__(111);
        module.exports = function (it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + ' as a prototype');
          }
          return it;
        };

        /***/
      }),
      /***/1223: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_1157__) {
        var wellKnownSymbol = __nested_webpack_require_1157__(5112);
        var create = __nested_webpack_require_1157__(30);
        var definePropertyModule = __nested_webpack_require_1157__(3070);
        var UNSCOPABLES = wellKnownSymbol('unscopables');
        var ArrayPrototype = Array.prototype;

        // Array.prototype[@@unscopables]
        // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
        if (ArrayPrototype[UNSCOPABLES] == undefined) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
          });
        }

        // add a key to Array.prototype[@@unscopables]
        module.exports = function (key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };

        /***/
      }),
      /***/1530: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_2022__) {
        "use strict";

        var charAt = __nested_webpack_require_2022__(8710).charAt;

        // `AdvanceStringIndex` abstract operation
        // https://tc39.es/ecma262/#sec-advancestringindex
        module.exports = function (S, index, unicode) {
          return index + (unicode ? charAt(S, index).length : 1);
        };

        /***/
      }),
      /***/5787: (/***/function (module) {
        module.exports = function (it, Constructor, name) {
          if (!(it instanceof Constructor)) {
            throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
          }
          return it;
        };

        /***/
      }),
      /***/9670: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_2762__) {
        var isObject = __nested_webpack_require_2762__(111);
        module.exports = function (it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + ' is not an object');
          }
          return it;
        };

        /***/
      }),
      /***/4019: (/***/function (module) {
        module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

        /***/
      }),
      /***/260: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_3268__) {
        "use strict";

        var NATIVE_ARRAY_BUFFER = __nested_webpack_require_3268__(4019);
        var DESCRIPTORS = __nested_webpack_require_3268__(9781);
        var global = __nested_webpack_require_3268__(7854);
        var isObject = __nested_webpack_require_3268__(111);
        var has = __nested_webpack_require_3268__(6656);
        var classof = __nested_webpack_require_3268__(648);
        var createNonEnumerableProperty = __nested_webpack_require_3268__(8880);
        var redefine = __nested_webpack_require_3268__(1320);
        var defineProperty = __nested_webpack_require_3268__(3070).f;
        var getPrototypeOf = __nested_webpack_require_3268__(9518);
        var setPrototypeOf = __nested_webpack_require_3268__(7674);
        var wellKnownSymbol = __nested_webpack_require_3268__(5112);
        var uid = __nested_webpack_require_3268__(9711);
        var Int8Array = global.Int8Array;
        var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
        var Uint8ClampedArray = global.Uint8ClampedArray;
        var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
        var TypedArray = Int8Array && getPrototypeOf(Int8Array);
        var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
        var ObjectPrototype = Object.prototype;
        var isPrototypeOf = ObjectPrototype.isPrototypeOf;
        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
        // Fixing native typed arrays in Opera Presto crashes the browser, see #595
        var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
        var TYPED_ARRAY_TAG_REQIRED = false;
        var NAME;
        var TypedArrayConstructorsList = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8
        };
        var BigIntArrayConstructorsList = {
          BigInt64Array: 8,
          BigUint64Array: 8
        };
        var isView = function isView(it) {
          if (!isObject(it)) return false;
          var klass = classof(it);
          return klass === 'DataView' || has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
        };
        var isTypedArray = function (it) {
          if (!isObject(it)) return false;
          var klass = classof(it);
          return has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
        };
        var aTypedArray = function (it) {
          if (isTypedArray(it)) return it;
          throw TypeError('Target is not a typed array');
        };
        var aTypedArrayConstructor = function (C) {
          if (setPrototypeOf) {
            if (isPrototypeOf.call(TypedArray, C)) return C;
          } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
            var TypedArrayConstructor = global[ARRAY];
            if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
              return C;
            }
          }
          throw TypeError('Target is not a typed array constructor');
        };
        var exportTypedArrayMethod = function (KEY, property, forced) {
          if (!DESCRIPTORS) return;
          if (forced) for (var ARRAY in TypedArrayConstructorsList) {
            var TypedArrayConstructor = global[ARRAY];
            if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
              delete TypedArrayConstructor.prototype[KEY];
            }
          }
          if (!TypedArrayPrototype[KEY] || forced) {
            redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
          }
        };
        var exportTypedArrayStaticMethod = function (KEY, property, forced) {
          var ARRAY, TypedArrayConstructor;
          if (!DESCRIPTORS) return;
          if (setPrototypeOf) {
            if (forced) for (ARRAY in TypedArrayConstructorsList) {
              TypedArrayConstructor = global[ARRAY];
              if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
                delete TypedArrayConstructor[KEY];
              }
            }
            if (!TypedArray[KEY] || forced) {
              // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
              try {
                return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
              } catch (error) {/* empty */}
            } else return;
          }
          for (ARRAY in TypedArrayConstructorsList) {
            TypedArrayConstructor = global[ARRAY];
            if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
              redefine(TypedArrayConstructor, KEY, property);
            }
          }
        };
        for (NAME in TypedArrayConstructorsList) {
          if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
        }

        // WebKit bug - typed arrays constructors prototype is Object.prototype
        if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
          // eslint-disable-next-line no-shadow -- safe
          TypedArray = function TypedArray() {
            throw TypeError('Incorrect invocation');
          };
          if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
            if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
          }
        }
        if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
          TypedArrayPrototype = TypedArray.prototype;
          if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
            if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
          }
        }

        // WebKit bug - one more object in Uint8ClampedArray prototype chain
        if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
          setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
        }
        if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
          TYPED_ARRAY_TAG_REQIRED = true;
          defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
            get: function () {
              return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
            }
          });
          for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
            createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
          }
        }
        module.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
          TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
          aTypedArray: aTypedArray,
          aTypedArrayConstructor: aTypedArrayConstructor,
          exportTypedArrayMethod: exportTypedArrayMethod,
          exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
          isView: isView,
          isTypedArray: isTypedArray,
          TypedArray: TypedArray,
          TypedArrayPrototype: TypedArrayPrototype
        };

        /***/
      }),
      /***/3331: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_10670__) {
        "use strict";

        var global = __nested_webpack_require_10670__(7854);
        var DESCRIPTORS = __nested_webpack_require_10670__(9781);
        var NATIVE_ARRAY_BUFFER = __nested_webpack_require_10670__(4019);
        var createNonEnumerableProperty = __nested_webpack_require_10670__(8880);
        var redefineAll = __nested_webpack_require_10670__(2248);
        var fails = __nested_webpack_require_10670__(7293);
        var anInstance = __nested_webpack_require_10670__(5787);
        var toInteger = __nested_webpack_require_10670__(9958);
        var toLength = __nested_webpack_require_10670__(7466);
        var toIndex = __nested_webpack_require_10670__(7067);
        var IEEE754 = __nested_webpack_require_10670__(1179);
        var getPrototypeOf = __nested_webpack_require_10670__(9518);
        var setPrototypeOf = __nested_webpack_require_10670__(7674);
        var getOwnPropertyNames = __nested_webpack_require_10670__(8006).f;
        var defineProperty = __nested_webpack_require_10670__(3070).f;
        var arrayFill = __nested_webpack_require_10670__(1285);
        var setToStringTag = __nested_webpack_require_10670__(8003);
        var InternalStateModule = __nested_webpack_require_10670__(9909);
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var ARRAY_BUFFER = 'ArrayBuffer';
        var DATA_VIEW = 'DataView';
        var PROTOTYPE = 'prototype';
        var WRONG_LENGTH = 'Wrong length';
        var WRONG_INDEX = 'Wrong index';
        var NativeArrayBuffer = global[ARRAY_BUFFER];
        var $ArrayBuffer = NativeArrayBuffer;
        var $DataView = global[DATA_VIEW];
        var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
        var ObjectPrototype = Object.prototype;
        var RangeError = global.RangeError;
        var packIEEE754 = IEEE754.pack;
        var unpackIEEE754 = IEEE754.unpack;
        var packInt8 = function (number) {
          return [number & 0xFF];
        };
        var packInt16 = function (number) {
          return [number & 0xFF, number >> 8 & 0xFF];
        };
        var packInt32 = function (number) {
          return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
        };
        var unpackInt32 = function (buffer) {
          return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
        };
        var packFloat32 = function (number) {
          return packIEEE754(number, 23, 4);
        };
        var packFloat64 = function (number) {
          return packIEEE754(number, 52, 8);
        };
        var addGetter = function (Constructor, key) {
          defineProperty(Constructor[PROTOTYPE], key, {
            get: function () {
              return getInternalState(this)[key];
            }
          });
        };
        var get = function (view, count, index, isLittleEndian) {
          var intIndex = toIndex(index);
          var store = getInternalState(view);
          if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
          var bytes = getInternalState(store.buffer).bytes;
          var start = intIndex + store.byteOffset;
          var pack = bytes.slice(start, start + count);
          return isLittleEndian ? pack : pack.reverse();
        };
        var set = function (view, count, index, conversion, value, isLittleEndian) {
          var intIndex = toIndex(index);
          var store = getInternalState(view);
          if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
          var bytes = getInternalState(store.buffer).bytes;
          var start = intIndex + store.byteOffset;
          var pack = conversion(+value);
          for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
        };
        if (!NATIVE_ARRAY_BUFFER) {
          $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
            var byteLength = toIndex(length);
            setInternalState(this, {
              bytes: arrayFill.call(new Array(byteLength), 0),
              byteLength: byteLength
            });
            if (!DESCRIPTORS) this.byteLength = byteLength;
          };
          $DataView = function DataView(buffer, byteOffset, byteLength) {
            anInstance(this, $DataView, DATA_VIEW);
            anInstance(buffer, $ArrayBuffer, DATA_VIEW);
            var bufferLength = getInternalState(buffer).byteLength;
            var offset = toInteger(byteOffset);
            if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
            byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
            if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
            setInternalState(this, {
              buffer: buffer,
              byteLength: byteLength,
              byteOffset: offset
            });
            if (!DESCRIPTORS) {
              this.buffer = buffer;
              this.byteLength = byteLength;
              this.byteOffset = offset;
            }
          };
          if (DESCRIPTORS) {
            addGetter($ArrayBuffer, 'byteLength');
            addGetter($DataView, 'buffer');
            addGetter($DataView, 'byteLength');
            addGetter($DataView, 'byteOffset');
          }
          redefineAll($DataView[PROTOTYPE], {
            getInt8: function getInt8(byteOffset) {
              return get(this, 1, byteOffset)[0] << 24 >> 24;
            },
            getUint8: function getUint8(byteOffset) {
              return get(this, 1, byteOffset)[0];
            },
            getInt16: function getInt16(byteOffset /* , littleEndian */) {
              var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
              return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
            },
            getUint16: function getUint16(byteOffset /* , littleEndian */) {
              var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
              return bytes[1] << 8 | bytes[0];
            },
            getInt32: function getInt32(byteOffset /* , littleEndian */) {
              return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
            },
            getUint32: function getUint32(byteOffset /* , littleEndian */) {
              return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
            },
            getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
              return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
            },
            getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
              return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
            },
            setInt8: function setInt8(byteOffset, value) {
              set(this, 1, byteOffset, packInt8, value);
            },
            setUint8: function setUint8(byteOffset, value) {
              set(this, 1, byteOffset, packInt8, value);
            },
            setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
              set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
              set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
              set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
              set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
              set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
              set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
            }
          });
        } else {
          /* eslint-disable no-new -- required for testing */
          if (!fails(function () {
            NativeArrayBuffer(1);
          }) || !fails(function () {
            new NativeArrayBuffer(-1);
          }) || fails(function () {
            new NativeArrayBuffer();
            new NativeArrayBuffer(1.5);
            new NativeArrayBuffer(NaN);
            return NativeArrayBuffer.name != ARRAY_BUFFER;
          })) {
            /* eslint-enable no-new -- required for testing */
            $ArrayBuffer = function ArrayBuffer(length) {
              anInstance(this, $ArrayBuffer);
              return new NativeArrayBuffer(toIndex(length));
            };
            var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
            for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
              if (!((key = keys[j++]) in $ArrayBuffer)) {
                createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
              }
            }
            ArrayBufferPrototype.constructor = $ArrayBuffer;
          }

          // WebKit bug - the same parent prototype for typed arrays and data view
          if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
            setPrototypeOf($DataViewPrototype, ObjectPrototype);
          }

          // iOS Safari 7.x bug
          var testView = new $DataView(new $ArrayBuffer(2));
          var nativeSetInt8 = $DataViewPrototype.setInt8;
          testView.setInt8(0, 2147483648);
          testView.setInt8(1, 2147483649);
          if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
            setInt8: function setInt8(byteOffset, value) {
              nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
            },
            setUint8: function setUint8(byteOffset, value) {
              nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
            }
          }, {
            unsafe: true
          });
        }
        setToStringTag($ArrayBuffer, ARRAY_BUFFER);
        setToStringTag($DataView, DATA_VIEW);
        module.exports = {
          ArrayBuffer: $ArrayBuffer,
          DataView: $DataView
        };

        /***/
      }),
      /***/1048: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_21360__) {
        "use strict";

        var toObject = __nested_webpack_require_21360__(7908);
        var toAbsoluteIndex = __nested_webpack_require_21360__(1400);
        var toLength = __nested_webpack_require_21360__(7466);
        var min = Math.min;

        // `Array.prototype.copyWithin` method implementation
        // https://tc39.es/ecma262/#sec-array.prototype.copywithin
        module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
          var O = toObject(this);
          var len = toLength(O.length);
          var to = toAbsoluteIndex(target, len);
          var from = toAbsoluteIndex(start, len);
          var end = arguments.length > 2 ? arguments[2] : undefined;
          var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
          var inc = 1;
          if (from < to && to < from + count) {
            inc = -1;
            from += count - 1;
            to += count - 1;
          }
          while (count-- > 0) {
            if (from in O) O[to] = O[from];else delete O[to];
            to += inc;
            from += inc;
          }
          return O;
        };

        /***/
      }),
      /***/1285: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_22618__) {
        "use strict";

        var toObject = __nested_webpack_require_22618__(7908);
        var toAbsoluteIndex = __nested_webpack_require_22618__(1400);
        var toLength = __nested_webpack_require_22618__(7466);

        // `Array.prototype.fill` method implementation
        // https://tc39.es/ecma262/#sec-array.prototype.fill
        module.exports = function fill(value /* , start = 0, end = @length */) {
          var O = toObject(this);
          var length = toLength(O.length);
          var argumentsLength = arguments.length;
          var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
          var end = argumentsLength > 2 ? arguments[2] : undefined;
          var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
          while (endPos > index) O[index++] = value;
          return O;
        };

        /***/
      }),
      /***/8533: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_23568__) {
        "use strict";

        var $forEach = __nested_webpack_require_23568__(2092).forEach;
        var arrayMethodIsStrict = __nested_webpack_require_23568__(9341);
        var STRICT_METHOD = arrayMethodIsStrict('forEach');

        // `Array.prototype.forEach` method implementation
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
          return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        } : [].forEach;

        /***/
      }),
      /***/8457: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_24216__) {
        "use strict";

        var bind = __nested_webpack_require_24216__(9974);
        var toObject = __nested_webpack_require_24216__(7908);
        var callWithSafeIterationClosing = __nested_webpack_require_24216__(3411);
        var isArrayIteratorMethod = __nested_webpack_require_24216__(7659);
        var toLength = __nested_webpack_require_24216__(7466);
        var createProperty = __nested_webpack_require_24216__(6135);
        var getIteratorMethod = __nested_webpack_require_24216__(1246);

        // `Array.from` method implementation
        // https://tc39.es/ecma262/#sec-array.from
        module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
          var O = toObject(arrayLike);
          var C = typeof this == 'function' ? this : Array;
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
          var mapping = mapfn !== undefined;
          var iteratorMethod = getIteratorMethod(O);
          var index = 0;
          var length, result, step, iterator, next, value;
          if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
          // if the target is not iterable or it's an array with the default iterator - use a simple case
          if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
            iterator = iteratorMethod.call(O);
            next = iterator.next;
            result = new C();
            for (; !(step = next.call(iterator)).done; index++) {
              value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
              createProperty(result, index, value);
            }
          } else {
            length = toLength(O.length);
            result = new C(length);
            for (; length > index; index++) {
              value = mapping ? mapfn(O[index], index) : O[index];
              createProperty(result, index, value);
            }
          }
          result.length = index;
          return result;
        };

        /***/
      }),
      /***/1318: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_26368__) {
        var toIndexedObject = __nested_webpack_require_26368__(5656);
        var toLength = __nested_webpack_require_26368__(7466);
        var toAbsoluteIndex = __nested_webpack_require_26368__(1400);

        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare -- NaN check
            if (IS_INCLUDES && el != el) while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare -- NaN check
              if (value != value) return true;
              // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
          };
        };
        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false)
        };

        /***/
      }),
      /***/2092: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_27992__) {
        var bind = __nested_webpack_require_27992__(9974);
        var IndexedObject = __nested_webpack_require_27992__(8361);
        var toObject = __nested_webpack_require_27992__(7908);
        var toLength = __nested_webpack_require_27992__(7466);
        var arraySpeciesCreate = __nested_webpack_require_27992__(5417);
        var push = [].push;

        // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
        var createMethod = function (TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var IS_FILTER_OUT = TYPE == 7;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function ($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
            var value, result;
            for (; length > index; index++) if (NO_HOLES || index in self) {
              value = self[index];
              result = boundFunction(value, index, O);
              if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch (TYPE) {
                  case 3:
                    return true;
                  // some
                  case 5:
                    return value;
                  // find
                  case 6:
                    return index;
                  // findIndex
                  case 2:
                    push.call(target, value);
                  // filter
                } else switch (TYPE) {
                  case 4:
                    return false;
                  // every
                  case 7:
                    push.call(target, value);
                  // filterOut
                }
              }
            }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };
        module.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          forEach: createMethod(0),
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          map: createMethod(1),
          // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          filter: createMethod(2),
          // `Array.prototype.some` method
          // https://tc39.es/ecma262/#sec-array.prototype.some
          some: createMethod(3),
          // `Array.prototype.every` method
          // https://tc39.es/ecma262/#sec-array.prototype.every
          every: createMethod(4),
          // `Array.prototype.find` method
          // https://tc39.es/ecma262/#sec-array.prototype.find
          find: createMethod(5),
          // `Array.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-array.prototype.findIndex
          findIndex: createMethod(6),
          // `Array.prototype.filterOut` method
          // https://github.com/tc39/proposal-array-filtering
          filterOut: createMethod(7)
        };

        /***/
      }),
      /***/6583: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_31563__) {
        "use strict";

        var toIndexedObject = __nested_webpack_require_31563__(5656);
        var toInteger = __nested_webpack_require_31563__(9958);
        var toLength = __nested_webpack_require_31563__(7466);
        var arrayMethodIsStrict = __nested_webpack_require_31563__(9341);
        var min = Math.min;
        var nativeLastIndexOf = [].lastIndexOf;
        var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
        var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

        // `Array.prototype.lastIndexOf` method implementation
        // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
        module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
          // convert -0 to +0
          if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
          var O = toIndexedObject(this);
          var length = toLength(O.length);
          var index = length - 1;
          if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
          if (index < 0) index = length + index;
          for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
          return -1;
        } : nativeLastIndexOf;

        /***/
      }),
      /***/1194: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_32944__) {
        var fails = __nested_webpack_require_32944__(7293);
        var wellKnownSymbol = __nested_webpack_require_32944__(5112);
        var V8_VERSION = __nested_webpack_require_32944__(7392);
        var SPECIES = wellKnownSymbol('species');
        module.exports = function (METHOD_NAME) {
          // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/677
          return V8_VERSION >= 51 || !fails(function () {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES] = function () {
              return {
                foo: 1
              };
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
          });
        };

        /***/
      }),
      /***/9341: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_33860__) {
        "use strict";

        var fails = __nested_webpack_require_33860__(7293);
        module.exports = function (METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return !!method && fails(function () {
            // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
            method.call(null, argument || function () {
              throw 1;
            }, 1);
          });
        };

        /***/
      }),
      /***/3671: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_34414__) {
        var aFunction = __nested_webpack_require_34414__(3099);
        var toObject = __nested_webpack_require_34414__(7908);
        var IndexedObject = __nested_webpack_require_34414__(8361);
        var toLength = __nested_webpack_require_34414__(7466);

        // `Array.prototype.{ reduce, reduceRight }` methods implementation
        var createMethod = function (IS_RIGHT) {
          return function (that, callbackfn, argumentsLength, memo) {
            aFunction(callbackfn);
            var O = toObject(that);
            var self = IndexedObject(O);
            var length = toLength(O.length);
            var index = IS_RIGHT ? length - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2) while (true) {
              if (index in self) {
                memo = self[index];
                index += i;
                break;
              }
              index += i;
              if (IS_RIGHT ? index < 0 : length <= index) {
                throw TypeError('Reduce of empty array with no initial value');
              }
            }
            for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
              memo = callbackfn(memo, self[index], index, O);
            }
            return memo;
          };
        };
        module.exports = {
          // `Array.prototype.reduce` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduce
          left: createMethod(false),
          // `Array.prototype.reduceRight` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduceright
          right: createMethod(true)
        };

        /***/
      }),
      /***/5417: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_36122__) {
        var isObject = __nested_webpack_require_36122__(111);
        var isArray = __nested_webpack_require_36122__(3157);
        var wellKnownSymbol = __nested_webpack_require_36122__(5112);
        var SPECIES = wellKnownSymbol('species');

        // `ArraySpeciesCreate` abstract operation
        // https://tc39.es/ecma262/#sec-arrayspeciescreate
        module.exports = function (originalArray, length) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }
          return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
        };

        /***/
      }),
      /***/3411: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_37059__) {
        var anObject = __nested_webpack_require_37059__(9670);
        var iteratorClose = __nested_webpack_require_37059__(9212);

        // call something on iterator step with safe closing on error
        module.exports = function (iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (error) {
            iteratorClose(iterator);
            throw error;
          }
        };

        /***/
      }),
      /***/7072: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_37678__) {
        var wellKnownSymbol = __nested_webpack_require_37678__(5112);
        var ITERATOR = wellKnownSymbol('iterator');
        var SAFE_CLOSING = false;
        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function () {
              return {
                done: !!called++
              };
            },
            'return': function () {
              SAFE_CLOSING = true;
            }
          };
          iteratorWithReturn[ITERATOR] = function () {
            return this;
          };
          // eslint-disable-next-line no-throw-literal -- required for testing
          Array.from(iteratorWithReturn, function () {
            throw 2;
          });
        } catch (error) {/* empty */}
        module.exports = function (exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function () {
              return {
                next: function () {
                  return {
                    done: ITERATION_SUPPORT = true
                  };
                }
              };
            };
            exec(object);
          } catch (error) {/* empty */}
          return ITERATION_SUPPORT;
        };

        /***/
      }),
      /***/4326: (/***/function (module) {
        var toString = {}.toString;
        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      }),
      /***/648: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_39304__) {
        var TO_STRING_TAG_SUPPORT = __nested_webpack_require_39304__(1694);
        var classofRaw = __nested_webpack_require_39304__(4326);
        var wellKnownSymbol = __nested_webpack_require_39304__(5112);
        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        // ES3 wrong here
        var CORRECT_ARGUMENTS = classofRaw(function () {
          return arguments;
        }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (error) {/* empty */}
        };

        // getting tag from ES6+ `Object.prototype.toString`
        module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
          var O, tag, result;
          return it === undefined ? 'Undefined' : it === null ? 'Null'
          // @@toStringTag case
          : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
          // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O)
          // ES3 arguments fallback
          : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
        };

        /***/
      }),
      /***/9920: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_40569__) {
        var has = __nested_webpack_require_40569__(6656);
        var ownKeys = __nested_webpack_require_40569__(3887);
        var getOwnPropertyDescriptorModule = __nested_webpack_require_40569__(1236);
        var definePropertyModule = __nested_webpack_require_40569__(3070);
        module.exports = function (target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        };

        /***/
      }),
      /***/8544: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_41340__) {
        var fails = __nested_webpack_require_41340__(7293);
        module.exports = !fails(function () {
          function F() {/* empty */}
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });

        /***/
      }),
      /***/4994: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_41704__) {
        "use strict";

        var IteratorPrototype = __nested_webpack_require_41704__(3383).IteratorPrototype;
        var create = __nested_webpack_require_41704__(30);
        var createPropertyDescriptor = __nested_webpack_require_41704__(9114);
        var setToStringTag = __nested_webpack_require_41704__(8003);
        var Iterators = __nested_webpack_require_41704__(7497);
        var returnThis = function () {
          return this;
        };
        module.exports = function (IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + ' Iterator';
          IteratorConstructor.prototype = create(IteratorPrototype, {
            next: createPropertyDescriptor(1, next)
          });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };

        /***/
      }),
      /***/8880: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_42640__) {
        var DESCRIPTORS = __nested_webpack_require_42640__(9781);
        var definePropertyModule = __nested_webpack_require_42640__(3070);
        var createPropertyDescriptor = __nested_webpack_require_42640__(9114);
        module.exports = DESCRIPTORS ? function (object, key, value) {
          return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };

        /***/
      }),
      /***/9114: (/***/function (module) {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      }),
      /***/6135: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_43513__) {
        "use strict";

        var toPrimitive = __nested_webpack_require_43513__(7593);
        var definePropertyModule = __nested_webpack_require_43513__(3070);
        var createPropertyDescriptor = __nested_webpack_require_43513__(9114);
        module.exports = function (object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
        };

        /***/
      }),
      /***/654: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_44096__) {
        "use strict";

        var $ = __nested_webpack_require_44096__(2109);
        var createIteratorConstructor = __nested_webpack_require_44096__(4994);
        var getPrototypeOf = __nested_webpack_require_44096__(9518);
        var setPrototypeOf = __nested_webpack_require_44096__(7674);
        var setToStringTag = __nested_webpack_require_44096__(8003);
        var createNonEnumerableProperty = __nested_webpack_require_44096__(8880);
        var redefine = __nested_webpack_require_44096__(1320);
        var wellKnownSymbol = __nested_webpack_require_44096__(5112);
        var IS_PURE = __nested_webpack_require_44096__(1913);
        var Iterators = __nested_webpack_require_44096__(7497);
        var IteratorsCore = __nested_webpack_require_44096__(3383);
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol('iterator');
        var KEYS = 'keys';
        var VALUES = 'values';
        var ENTRIES = 'entries';
        var returnThis = function () {
          return this;
        };
        module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
          createIteratorConstructor(IteratorConstructor, NAME, next);
          var getIterationMethod = function (KIND) {
            if (KIND === DEFAULT && defaultIterator) return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }
            return function () {
              return new IteratorConstructor(this);
            };
          };
          var TO_STRING_TAG = NAME + ' Iterator';
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
          var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
          var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;

          // fix native
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
            if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
              if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
                  createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                }
              }
              // Set @@toStringTag to native iterators
              setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
              if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
            }
          }

          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          }

          // define iterator
          if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
            createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
          }
          Iterators[NAME] = defaultIterator;

          // export additional methods
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES)
            };
            if (FORCED) for (KEY in methods) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                redefine(IterablePrototype, KEY, methods[KEY]);
              }
            } else $({
              target: NAME,
              proto: true,
              forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
            }, methods);
          }
          return methods;
        };

        /***/
      }),
      /***/9781: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_48980__) {
        var fails = __nested_webpack_require_48980__(7293);

        // Detect IE8's incomplete defineProperty implementation
        module.exports = !fails(function () {
          return Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            }
          })[1] != 7;
        });

        /***/
      }),
      /***/317: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_49404__) {
        var global = __nested_webpack_require_49404__(7854);
        var isObject = __nested_webpack_require_49404__(111);
        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };

        /***/
      }),
      /***/8324: (/***/function (module) {
        // iterable DOM collections
        // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
        module.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };

        /***/
      }),
      /***/8113: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_51008__) {
        var getBuiltIn = __nested_webpack_require_51008__(5005);
        module.exports = getBuiltIn('navigator', 'userAgent') || '';

        /***/
      }),
      /***/7392: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_51244__) {
        var global = __nested_webpack_require_51244__(7854);
        var userAgent = __nested_webpack_require_51244__(8113);
        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
          match = v8.split('.');
          version = match[0] + match[1];
        } else if (userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = match[1];
          }
        }
        module.exports = version && +version;

        /***/
      }),
      /***/748: (/***/function (module) {
        // IE8- don't enum bug keys
        module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

        /***/
      }),
      /***/2109: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_52244__) {
        var global = __nested_webpack_require_52244__(7854);
        var getOwnPropertyDescriptor = __nested_webpack_require_52244__(1236).f;
        var createNonEnumerableProperty = __nested_webpack_require_52244__(8880);
        var redefine = __nested_webpack_require_52244__(1320);
        var setGlobal = __nested_webpack_require_52244__(3505);
        var copyConstructorProperties = __nested_webpack_require_52244__(9920);
        var isForced = __nested_webpack_require_52244__(4705);

        /*
          options.target      - name of the target object
          options.global      - target is the global object
          options.stat        - export as static methods of target
          options.proto       - export as prototype methods of target
          options.real        - real prototype method for the `pure` version
          options.forced      - export even if the native feature is available
          options.bind        - bind methods to the target, required for the `pure` version
          options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
          options.unsafe      - use the simple assignment of property instead of delete + defineProperty
          options.sham        - add a flag to not completely full polyfills
          options.enumerable  - export as enumerable property
          options.noTargetGet - prevent calling a getter on target
        */
        module.exports = function (options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global;
          } else if (STATIC) {
            target = global[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global[TARGET] || {}).prototype;
          }
          if (target) for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
            // contained in target
            if (!FORCED && targetProperty !== undefined) {
              if (typeof sourceProperty === typeof targetProperty) continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            // add a flag to not completely full polyfills
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, 'sham', true);
            }
            // extend global
            redefine(target, key, sourceProperty, options);
          }
        };

        /***/
      }),
      /***/7293: (/***/function (module) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };

        /***/
      }),
      /***/7007: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_55415__) {
        "use strict";

        // TODO: Remove from `core-js@4` since it's moved to entry points
        __nested_webpack_require_55415__(4916);
        var redefine = __nested_webpack_require_55415__(1320);
        var fails = __nested_webpack_require_55415__(7293);
        var wellKnownSymbol = __nested_webpack_require_55415__(5112);
        var regexpExec = __nested_webpack_require_55415__(2261);
        var createNonEnumerableProperty = __nested_webpack_require_55415__(8880);
        var SPECIES = wellKnownSymbol('species');
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
          // #replace needs built-in support for named groups.
          // #match works fine because it just return the exec results, even if it has
          // a "grops" property.
          var re = /./;
          re.exec = function () {
            var result = [];
            result.groups = {
              a: '7'
            };
            return result;
          };
          return ''.replace(re, '$<a>') !== '7';
        });

        // IE <= 11 replaces $0 with the whole match, as if it was $&
        // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
        var REPLACE_KEEPS_$0 = function () {
          return 'a'.replace(/./, '$0') === '$0';
        }();
        var REPLACE = wellKnownSymbol('replace');
        // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
          if (/./[REPLACE]) {
            return /./[REPLACE]('a', '$0') === '';
          }
          return false;
        }();

        // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
        // Weex JS has frozen built-in prototypes, so use try / catch wrapper
        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
          // eslint-disable-next-line regexp/no-empty-group -- required for testing
          var re = /(?:)/;
          var originalExec = re.exec;
          re.exec = function () {
            return originalExec.apply(this, arguments);
          };
          var result = 'ab'.split(re);
          return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
        });
        module.exports = function (KEY, length, exec, sham) {
          var SYMBOL = wellKnownSymbol(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function () {
            // String methods call symbol-named RegEp methods
            var O = {};
            O[SYMBOL] = function () {
              return 7;
            };
            return ''[KEY](O) != 7;
          });
          var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
            // Symbol-named RegExp methods call .exec
            var execCalled = false;
            var re = /a/;
            if (KEY === 'split') {
              // We can't use real regex here since it causes deoptimization
              // and serious performance degradation in V8
              // https://github.com/zloirock/core-js/issues/306
              re = {};
              // RegExp[@@split] doesn't call the regex's exec method, but first creates
              // a new one. We need to return the patched regex when creating the new one.
              re.constructor = {};
              re.constructor[SPECIES] = function () {
                return re;
              };
              re.flags = '';
              re[SYMBOL] = /./[SYMBOL];
            }
            re.exec = function () {
              execCalled = true;
              return null;
            };
            re[SYMBOL]('');
            return !execCalled;
          });
          if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  // The native String method already delegates to @@method (this
                  // polyfilled function), leasing to infinite recursion.
                  // We avoid it by directly calling the native @@method method.
                  return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                  };
                }
                return {
                  done: true,
                  value: nativeMethod.call(str, regexp, arg2)
                };
              }
              return {
                done: false
              };
            }, {
              REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
            });
            var stringMethod = methods[0];
            var regexMethod = methods[1];
            redefine(String.prototype, KEY, stringMethod);
            redefine(RegExp.prototype, SYMBOL, length == 2
            // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) {
              return regexMethod.call(string, this, arg);
            }
            // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) {
              return regexMethod.call(string, this);
            });
          }
          if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
        };

        /***/
      }),
      /***/9974: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_61264__) {
        var aFunction = __nested_webpack_require_61264__(3099);

        // optional / simple context binding
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 0:
              return function () {
                return fn.call(that);
              };
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function /* ...args */
          () {
            return fn.apply(that, arguments);
          };
        };

        /***/
      }),
      /***/5005: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_62236__) {
        var path = __nested_webpack_require_62236__(857);
        var global = __nested_webpack_require_62236__(7854);
        var aFunction = function (variable) {
          return typeof variable == 'function' ? variable : undefined;
        };
        module.exports = function (namespace, method) {
          return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
        };

        /***/
      }),
      /***/1246: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_62834__) {
        var classof = __nested_webpack_require_62834__(648);
        var Iterators = __nested_webpack_require_62834__(7497);
        var wellKnownSymbol = __nested_webpack_require_62834__(5112);
        var ITERATOR = wellKnownSymbol('iterator');
        module.exports = function (it) {
          if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
        };

        /***/
      }),
      /***/8554: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_63307__) {
        var anObject = __nested_webpack_require_63307__(9670);
        var getIteratorMethod = __nested_webpack_require_63307__(1246);
        module.exports = function (it) {
          var iteratorMethod = getIteratorMethod(it);
          if (typeof iteratorMethod != 'function') {
            throw TypeError(String(it) + ' is not iterable');
          }
          return anObject(iteratorMethod.call(it));
        };

        /***/
      }),
      /***/647: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_63815__) {
        var toObject = __nested_webpack_require_63815__(7908);
        var floor = Math.floor;
        var replace = ''.replace;
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

        // https://tc39.es/ecma262/#sec-getsubstitution
        module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
          var tailPos = position + matched.length;
          var m = captures.length;
          var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
          if (namedCaptures !== undefined) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }
          return replace.call(replacement, symbols, function (match, ch) {
            var capture;
            switch (ch.charAt(0)) {
              case '$':
                return '$';
              case '&':
                return matched;
              case '`':
                return str.slice(0, position);
              case "'":
                return str.slice(tailPos);
              case '<':
                capture = namedCaptures[ch.slice(1, -1)];
                break;
              default:
                // \d\d?
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                  var f = floor(n / 10);
                  if (f === 0) return match;
                  if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                  return match;
                }
                capture = captures[n - 1];
            }
            return capture === undefined ? '' : capture;
          });
        };

        /***/
      }),
      /***/7854: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_65653__) {
        var check = function (it) {
          return it && it.Math == Math && it;
        };

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports = /* global globalThis -- safe */
        check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof __nested_webpack_require_65653__.g == 'object' && __nested_webpack_require_65653__.g) ||
        // eslint-disable-next-line no-new-func -- fallback
        function () {
          return this;
        }() || Function('return this')();

        /***/
      }),
      /***/6656: (/***/function (module) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      }),
      /***/3501: (/***/function (module) {
        module.exports = {};

        /***/
      }),
      /***/490: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_66688__) {
        var getBuiltIn = __nested_webpack_require_66688__(5005);
        module.exports = getBuiltIn('document', 'documentElement');

        /***/
      }),
      /***/4664: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_66923__) {
        var DESCRIPTORS = __nested_webpack_require_66923__(9781);
        var fails = __nested_webpack_require_66923__(7293);
        var createElement = __nested_webpack_require_66923__(317);

        // Thank's IE8 for his funny defineProperty
        module.exports = !DESCRIPTORS && !fails(function () {
          return Object.defineProperty(createElement('div'), 'a', {
            get: function () {
              return 7;
            }
          }).a != 7;
        });

        /***/
      }),
      /***/1179: (/***/function (module) {
        // IEEE754 conversions based on https://github.com/feross/ieee754
        var abs = Math.abs;
        var pow = Math.pow;
        var floor = Math.floor;
        var log = Math.log;
        var LN2 = Math.LN2;
        var pack = function (number, mantissaLength, bytes) {
          var buffer = new Array(bytes);
          var exponentLength = bytes * 8 - mantissaLength - 1;
          var eMax = (1 << exponentLength) - 1;
          var eBias = eMax >> 1;
          var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
          var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
          var index = 0;
          var exponent, mantissa, c;
          number = abs(number);
          // eslint-disable-next-line no-self-compare -- NaN check
          if (number != number || number === Infinity) {
            // eslint-disable-next-line no-self-compare -- NaN check
            mantissa = number != number ? 1 : 0;
            exponent = eMax;
          } else {
            exponent = floor(log(number) / LN2);
            if (number * (c = pow(2, -exponent)) < 1) {
              exponent--;
              c *= 2;
            }
            if (exponent + eBias >= 1) {
              number += rt / c;
            } else {
              number += rt * pow(2, 1 - eBias);
            }
            if (number * c >= 2) {
              exponent++;
              c /= 2;
            }
            if (exponent + eBias >= eMax) {
              mantissa = 0;
              exponent = eMax;
            } else if (exponent + eBias >= 1) {
              mantissa = (number * c - 1) * pow(2, mantissaLength);
              exponent = exponent + eBias;
            } else {
              mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
              exponent = 0;
            }
          }
          for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
          exponent = exponent << mantissaLength | mantissa;
          exponentLength += mantissaLength;
          for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
          buffer[--index] |= sign * 128;
          return buffer;
        };
        var unpack = function (buffer, mantissaLength) {
          var bytes = buffer.length;
          var exponentLength = bytes * 8 - mantissaLength - 1;
          var eMax = (1 << exponentLength) - 1;
          var eBias = eMax >> 1;
          var nBits = exponentLength - 7;
          var index = bytes - 1;
          var sign = buffer[index--];
          var exponent = sign & 127;
          var mantissa;
          sign >>= 7;
          for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
          mantissa = exponent & (1 << -nBits) - 1;
          exponent >>= -nBits;
          nBits += mantissaLength;
          for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
          if (exponent === 0) {
            exponent = 1 - eBias;
          } else if (exponent === eMax) {
            return mantissa ? NaN : sign ? -Infinity : Infinity;
          } else {
            mantissa = mantissa + pow(2, mantissaLength);
            exponent = exponent - eBias;
          }
          return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
        };
        module.exports = {
          pack: pack,
          unpack: unpack
        };

        /***/
      }),
      /***/8361: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_70997__) {
        var fails = __nested_webpack_require_70997__(7293);
        var classof = __nested_webpack_require_70997__(4326);
        var split = ''.split;

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins -- safe
          return !Object('z').propertyIsEnumerable(0);
        }) ? function (it) {
          return classof(it) == 'String' ? split.call(it, '') : Object(it);
        } : Object;

        /***/
      }),
      /***/9587: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_71696__) {
        var isObject = __nested_webpack_require_71696__(111);
        var setPrototypeOf = __nested_webpack_require_71696__(7674);

        // makes subclassing work correct for wrapped built-ins
        module.exports = function ($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (
          // it can work only with native `setPrototypeOf`
          setPrototypeOf &&
          // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };

        /***/
      }),
      /***/2788: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_72546__) {
        var store = __nested_webpack_require_72546__(5465);
        var functionToString = Function.toString;

        // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
        if (typeof store.inspectSource != 'function') {
          store.inspectSource = function (it) {
            return functionToString.call(it);
          };
        }
        module.exports = store.inspectSource;

        /***/
      }),
      /***/9909: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_73058__) {
        var NATIVE_WEAK_MAP = __nested_webpack_require_73058__(8536);
        var global = __nested_webpack_require_73058__(7854);
        var isObject = __nested_webpack_require_73058__(111);
        var createNonEnumerableProperty = __nested_webpack_require_73058__(8880);
        var objectHas = __nested_webpack_require_73058__(6656);
        var shared = __nested_webpack_require_73058__(5465);
        var sharedKey = __nested_webpack_require_73058__(6200);
        var hiddenKeys = __nested_webpack_require_73058__(3501);
        var WeakMap = global.WeakMap;
        var set, get, has;
        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP) {
          var store = shared.state || (shared.state = new WeakMap());
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function (it, metadata) {
            metadata.facade = it;
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function (it) {
            return wmget.call(store, it) || {};
          };
          has = function (it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return objectHas(it, STATE);
          };
        }
        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor
        };

        /***/
      }),
      /***/7659: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_75245__) {
        var wellKnownSymbol = __nested_webpack_require_75245__(5112);
        var Iterators = __nested_webpack_require_75245__(7497);
        var ITERATOR = wellKnownSymbol('iterator');
        var ArrayPrototype = Array.prototype;

        // check on default Array iterator
        module.exports = function (it) {
          return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };

        /***/
      }),
      /***/3157: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_75760__) {
        var classof = __nested_webpack_require_75760__(4326);

        // `IsArray` abstract operation
        // https://tc39.es/ecma262/#sec-isarray
        module.exports = Array.isArray || function isArray(arg) {
          return classof(arg) == 'Array';
        };

        /***/
      }),
      /***/4705: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_76132__) {
        var fails = __nested_webpack_require_76132__(7293);
        var replacement = /#|\.prototype\./;
        var isForced = function (feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function (string) {
          return String(string).replace(replacement, '.').toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = 'N';
        var POLYFILL = isForced.POLYFILL = 'P';
        module.exports = isForced;

        /***/
      }),
      /***/111: (/***/function (module) {
        module.exports = function (it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        /***/
      }),
      /***/1913: (/***/function (module) {
        module.exports = false;

        /***/
      }),
      /***/7850: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_77204__) {
        var isObject = __nested_webpack_require_77204__(111);
        var classof = __nested_webpack_require_77204__(4326);
        var wellKnownSymbol = __nested_webpack_require_77204__(5112);
        var MATCH = wellKnownSymbol('match');

        // `IsRegExp` abstract operation
        // https://tc39.es/ecma262/#sec-isregexp
        module.exports = function (it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
        };

        /***/
      }),
      /***/9212: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_77799__) {
        var anObject = __nested_webpack_require_77799__(9670);
        module.exports = function (iterator) {
          var returnMethod = iterator['return'];
          if (returnMethod !== undefined) {
            return anObject(returnMethod.call(iterator)).value;
          }
        };

        /***/
      }),
      /***/3383: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_78191__) {
        "use strict";

        var fails = __nested_webpack_require_78191__(7293);
        var getPrototypeOf = __nested_webpack_require_78191__(9518);
        var createNonEnumerableProperty = __nested_webpack_require_78191__(8880);
        var has = __nested_webpack_require_78191__(6656);
        var wellKnownSymbol = __nested_webpack_require_78191__(5112);
        var IS_PURE = __nested_webpack_require_78191__(1913);
        var ITERATOR = wellKnownSymbol('iterator');
        var BUGGY_SAFARI_ITERATORS = false;
        var returnThis = function () {
          return this;
        };

        // `%IteratorPrototype%` object
        // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
        if ([].keys) {
          arrayIterator = [].keys();
          // Safari 8 has buggy iterators w/o `next`
          if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }
        var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
          var test = {};
          // FF44- legacy iterators case
          return IteratorPrototype[ITERATOR].call(test) !== test;
        });
        if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }
        module.exports = {
          IteratorPrototype: IteratorPrototype,
          BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
        };

        /***/
      }),
      /***/7497: (/***/function (module) {
        module.exports = {};

        /***/
      }),
      /***/133: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_80216__) {
        var fails = __nested_webpack_require_80216__(7293);
        module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
          // Chrome 38 Symbol has incorrect toString conversion
          /* global Symbol -- required for testing */
          return !String(Symbol());
        });

        /***/
      }),
      /***/590: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_80623__) {
        var fails = __nested_webpack_require_80623__(7293);
        var wellKnownSymbol = __nested_webpack_require_80623__(5112);
        var IS_PURE = __nested_webpack_require_80623__(1913);
        var ITERATOR = wellKnownSymbol('iterator');
        module.exports = !fails(function () {
          var url = new URL('b?a=1&b=2&c=3', 'http://a');
          var searchParams = url.searchParams;
          var result = '';
          url.pathname = 'c%20d';
          searchParams.forEach(function (value, key) {
            searchParams['delete']('b');
            result += key + value;
          });
          return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR]
          // throws in Edge
          || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
          // not punycoded in Edge
          || new URL('http://тест').host !== 'xn--e1aybc'
          // not escaped in Chrome 62-
          || new URL('http://a#б').hash !== '#%D0%B1'
          // fails in Chrome 66-
          || result !== 'a1c3'
          // throws in Safari
          || new URL('http://x', undefined).host !== 'x';
        });

        /***/
      }),
      /***/8536: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_82011__) {
        var global = __nested_webpack_require_82011__(7854);
        var inspectSource = __nested_webpack_require_82011__(2788);
        var WeakMap = global.WeakMap;
        module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

        /***/
      }),
      /***/1574: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_82369__) {
        "use strict";

        var DESCRIPTORS = __nested_webpack_require_82369__(9781);
        var fails = __nested_webpack_require_82369__(7293);
        var objectKeys = __nested_webpack_require_82369__(1956);
        var getOwnPropertySymbolsModule = __nested_webpack_require_82369__(5181);
        var propertyIsEnumerableModule = __nested_webpack_require_82369__(5296);
        var toObject = __nested_webpack_require_82369__(7908);
        var IndexedObject = __nested_webpack_require_82369__(8361);
        var nativeAssign = Object.assign;
        var defineProperty = Object.defineProperty;

        // `Object.assign` method
        // https://tc39.es/ecma262/#sec-object.assign
        module.exports = !nativeAssign || fails(function () {
          // should have correct order of operations (Edge bug)
          if (DESCRIPTORS && nativeAssign({
            b: 1
          }, nativeAssign(defineProperty({}, 'a', {
            enumerable: true,
            get: function () {
              defineProperty(this, 'b', {
                value: 3,
                enumerable: false
              });
            }
          }), {
            b: 2
          })).b !== 1) return true;
          // should work with symbols and should have deterministic property order (V8 bug)
          var A = {};
          var B = {};
          /* global Symbol -- required for testing */
          var symbol = Symbol();
          var alphabet = 'abcdefghijklmnopqrst';
          A[symbol] = 7;
          alphabet.split('').forEach(function (chr) {
            B[chr] = chr;
          });
          return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
        }) ? function assign(target, source) {
          // eslint-disable-line no-unused-vars -- required for `.length`
          var T = toObject(target);
          var argumentsLength = arguments.length;
          var index = 1;
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          var propertyIsEnumerable = propertyIsEnumerableModule.f;
          while (argumentsLength > index) {
            var S = IndexedObject(arguments[index++]);
            var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
            }
          }
          return T;
        } : nativeAssign;

        /***/
      }),
      /***/30: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_84965__) {
        var anObject = __nested_webpack_require_84965__(9670);
        var defineProperties = __nested_webpack_require_84965__(6048);
        var enumBugKeys = __nested_webpack_require_84965__(748);
        var hiddenKeys = __nested_webpack_require_84965__(3501);
        var html = __nested_webpack_require_84965__(490);
        var documentCreateElement = __nested_webpack_require_84965__(317);
        var sharedKey = __nested_webpack_require_84965__(6200);
        var GT = '>';
        var LT = '<';
        var PROTOTYPE = 'prototype';
        var SCRIPT = 'script';
        var IE_PROTO = sharedKey('IE_PROTO');
        var EmptyConstructor = function () {/* empty */};
        var scriptTag = function (content) {
          return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
        };

        // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
        var NullProtoObjectViaActiveX = function (activeXDocument) {
          activeXDocument.write(scriptTag(''));
          activeXDocument.close();
          var temp = activeXDocument.parentWindow.Object;
          activeXDocument = null; // avoid memory leak
          return temp;
        };

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var NullProtoObjectViaIFrame = function () {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = documentCreateElement('iframe');
          var JS = 'java' + SCRIPT + ':';
          var iframeDocument;
          iframe.style.display = 'none';
          html.appendChild(iframe);
          // https://github.com/zloirock/core-js/issues/475
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag('document.F=Object'));
          iframeDocument.close();
          return iframeDocument.F;
        };

        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        // avoid IE GC bug
        var activeXDocument;
        var NullProtoObject = function () {
          try {
            /* global ActiveXObject -- old IE */
            activeXDocument = document.domain && new ActiveXObject('htmlfile');
          } catch (error) {/* ignore */}
          NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;
          while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;

        // `Object.create` method
        // https://tc39.es/ecma262/#sec-object.create
        module.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
          } else result = NullProtoObject();
          return Properties === undefined ? result : defineProperties(result, Properties);
        };

        /***/
      }),
      /***/6048: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_88427__) {
        var DESCRIPTORS = __nested_webpack_require_88427__(9781);
        var definePropertyModule = __nested_webpack_require_88427__(3070);
        var anObject = __nested_webpack_require_88427__(9670);
        var objectKeys = __nested_webpack_require_88427__(1956);

        // `Object.defineProperties` method
        // https://tc39.es/ecma262/#sec-object.defineproperties
        module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = objectKeys(Properties);
          var length = keys.length;
          var index = 0;
          var key;
          while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
          return O;
        };

        /***/
      }),
      /***/3070: (/***/function (__unused_webpack_module, exports, __nested_webpack_require_89253__) {
        var DESCRIPTORS = __nested_webpack_require_89253__(9781);
        var IE8_DOM_DEFINE = __nested_webpack_require_89253__(4664);
        var anObject = __nested_webpack_require_89253__(9670);
        var toPrimitive = __nested_webpack_require_89253__(7593);
        var nativeDefineProperty = Object.defineProperty;

        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE) try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) {/* empty */}
          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
          if ('value' in Attributes) O[P] = Attributes.value;
          return O;
        };

        /***/
      }),
      /***/1236: (/***/function (__unused_webpack_module, exports, __nested_webpack_require_90265__) {
        var DESCRIPTORS = __nested_webpack_require_90265__(9781);
        var propertyIsEnumerableModule = __nested_webpack_require_90265__(5296);
        var createPropertyDescriptor = __nested_webpack_require_90265__(9114);
        var toIndexedObject = __nested_webpack_require_90265__(5656);
        var toPrimitive = __nested_webpack_require_90265__(7593);
        var has = __nested_webpack_require_90265__(6656);
        var IE8_DOM_DEFINE = __nested_webpack_require_90265__(4664);
        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE) try {
            return nativeGetOwnPropertyDescriptor(O, P);
          } catch (error) {/* empty */}
          if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
        };

        /***/
      }),
      /***/8006: (/***/function (__unused_webpack_module, exports, __nested_webpack_require_91410__) {
        var internalObjectKeys = __nested_webpack_require_91410__(6324);
        var enumBugKeys = __nested_webpack_require_91410__(748);
        var hiddenKeys = enumBugKeys.concat('length', 'prototype');

        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };

        /***/
      }),
      /***/5181: (/***/function (__unused_webpack_module, exports) {
        exports.f = Object.getOwnPropertySymbols;

        /***/
      }),
      /***/9518: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_92111__) {
        var has = __nested_webpack_require_92111__(6656);
        var toObject = __nested_webpack_require_92111__(7908);
        var sharedKey = __nested_webpack_require_92111__(6200);
        var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_92111__(8544);
        var IE_PROTO = sharedKey('IE_PROTO');
        var ObjectPrototype = Object.prototype;

        // `Object.getPrototypeOf` method
        // https://tc39.es/ecma262/#sec-object.getprototypeof
        module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (typeof O.constructor == 'function' && O instanceof O.constructor) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectPrototype : null;
        };

        /***/
      }),
      /***/6324: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_93019__) {
        var has = __nested_webpack_require_93019__(6656);
        var toIndexedObject = __nested_webpack_require_93019__(5656);
        var indexOf = __nested_webpack_require_93019__(1318).indexOf;
        var hiddenKeys = __nested_webpack_require_93019__(3501);
        module.exports = function (object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i) if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
          }
          return result;
        };

        /***/
      }),
      /***/1956: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_93802__) {
        var internalObjectKeys = __nested_webpack_require_93802__(6324);
        var enumBugKeys = __nested_webpack_require_93802__(748);

        // `Object.keys` method
        // https://tc39.es/ecma262/#sec-object.keys
        module.exports = Object.keys || function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };

        /***/
      }),
      /***/5296: (/***/function (__unused_webpack_module, exports) {
        "use strict";

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // Nashorn ~ JDK8 bug
        var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
          1: 2
        }, 1);

        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : nativePropertyIsEnumerable;

        /***/
      }),
      /***/7674: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_95021__) {
        /* eslint-disable no-proto -- safe */
        var anObject = __nested_webpack_require_95021__(9670);
        var aPossiblePrototype = __nested_webpack_require_95021__(6077);

        // `Object.setPrototypeOf` method
        // https://tc39.es/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
            setter.call(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {/* empty */}
          return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
            return O;
          };
        }() : undefined);

        /***/
      }),
      /***/288: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_96137__) {
        "use strict";

        var TO_STRING_TAG_SUPPORT = __nested_webpack_require_96137__(1694);
        var classof = __nested_webpack_require_96137__(648);

        // `Object.prototype.toString` method implementation
        // https://tc39.es/ecma262/#sec-object.prototype.tostring
        module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
          return '[object ' + classof(this) + ']';
        };

        /***/
      }),
      /***/3887: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_96661__) {
        var getBuiltIn = __nested_webpack_require_96661__(5005);
        var getOwnPropertyNamesModule = __nested_webpack_require_96661__(8006);
        var getOwnPropertySymbolsModule = __nested_webpack_require_96661__(5181);
        var anObject = __nested_webpack_require_96661__(9670);

        // all object keys, includes non-enumerable and symbols
        module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
          var keys = getOwnPropertyNamesModule.f(anObject(it));
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
        };

        /***/
      }),
      /***/857: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_97394__) {
        var global = __nested_webpack_require_97394__(7854);
        module.exports = global;

        /***/
      }),
      /***/2248: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_97590__) {
        var redefine = __nested_webpack_require_97590__(1320);
        module.exports = function (target, src, options) {
          for (var key in src) redefine(target, key, src[key], options);
          return target;
        };

        /***/
      }),
      /***/1320: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_97923__) {
        var global = __nested_webpack_require_97923__(7854);
        var createNonEnumerableProperty = __nested_webpack_require_97923__(8880);
        var has = __nested_webpack_require_97923__(6656);
        var setGlobal = __nested_webpack_require_97923__(3505);
        var inspectSource = __nested_webpack_require_97923__(2788);
        var InternalStateModule = __nested_webpack_require_97923__(9909);
        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split('String');
        (module.exports = function (O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          var state;
          if (typeof value == 'function') {
            if (typeof key == 'string' && !has(value, 'name')) {
              createNonEnumerableProperty(value, 'name', key);
            }
            state = enforceInternalState(value);
            if (!state.source) {
              state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
            }
          }
          if (O === global) {
            if (simple) O[key] = value;else setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value);
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, 'toString', function toString() {
          return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
        });

        /***/
      }),
      /***/7651: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_99836__) {
        var classof = __nested_webpack_require_99836__(4326);
        var regexpExec = __nested_webpack_require_99836__(2261);

        // `RegExpExec` abstract operation
        // https://tc39.es/ecma262/#sec-regexpexec
        module.exports = function (R, S) {
          var exec = R.exec;
          if (typeof exec === 'function') {
            var result = exec.call(R, S);
            if (typeof result !== 'object') {
              throw TypeError('RegExp exec method returned something other than an Object or null');
            }
            return result;
          }
          if (classof(R) !== 'RegExp') {
            throw TypeError('RegExp#exec called on incompatible receiver');
          }
          return regexpExec.call(R, S);
        };

        /***/
      }),
      /***/2261: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_100685__) {
        "use strict";

        var regexpFlags = __nested_webpack_require_100685__(7066);
        var stickyHelpers = __nested_webpack_require_100685__(2999);
        var nativeExec = RegExp.prototype.exec;
        // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.
        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;
        var UPDATES_LAST_INDEX_WRONG = function () {
          var re1 = /a/;
          var re2 = /b*/g;
          nativeExec.call(re1, 'a');
          nativeExec.call(re2, 'a');
          return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        }();
        var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

        // nonparticipating capturing group, copied from es5-shim's String#split patch.
        // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
        var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = regexpFlags.call(re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;
            if (sticky) {
              flags = flags.replace('y', '');
              if (flags.indexOf('g') === -1) {
                flags += 'g';
              }
              strCopy = String(str).slice(re.lastIndex);
              // Support anchored sticky behavior.
              if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
                source = '(?: ' + source + ')';
                strCopy = ' ' + strCopy;
                charsAdded++;
              }
              // ^(? + rx + ) is needed, in combination with some str slicing, to
              // simulate the 'y' flag.
              reCopy = new RegExp('^(?:' + source + ')', flags);
            }
            if (NPCG_INCLUDED) {
              reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
            }
            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
            match = nativeExec.call(sticky ? reCopy : re, strCopy);
            if (sticky) {
              if (match) {
                match.input = match.input.slice(charsAdded);
                match[0] = match[0].slice(charsAdded);
                match.index = re.lastIndex;
                re.lastIndex += match[0].length;
              } else re.lastIndex = 0;
            } else if (UPDATES_LAST_INDEX_WRONG && match) {
              re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
              // Fix browsers whose `exec` methods don't consistently return `undefined`
              // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
              nativeReplace.call(match[0], reCopy, function () {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === undefined) match[i] = undefined;
                }
              });
            }
            return match;
          };
        }
        module.exports = patchedExec;

        /***/
      }),
      /***/7066: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_104296__) {
        "use strict";

        var anObject = __nested_webpack_require_104296__(9670);

        // `RegExp.prototype.flags` getter implementation
        // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
        module.exports = function () {
          var that = anObject(this);
          var result = '';
          if (that.global) result += 'g';
          if (that.ignoreCase) result += 'i';
          if (that.multiline) result += 'm';
          if (that.dotAll) result += 's';
          if (that.unicode) result += 'u';
          if (that.sticky) result += 'y';
          return result;
        };

        /***/
      }),
      /***/2999: (/***/function (__unused_webpack_module, exports, __nested_webpack_require_105009__) {
        "use strict";

        var fails = __nested_webpack_require_105009__(7293);

        // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
        // so we use an intermediate function.
        function RE(s, f) {
          return RegExp(s, f);
        }
        exports.UNSUPPORTED_Y = fails(function () {
          // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
          var re = RE('a', 'y');
          re.lastIndex = 2;
          return re.exec('abcd') != null;
        });
        exports.BROKEN_CARET = fails(function () {
          // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
          var re = RE('^r', 'gy');
          re.lastIndex = 2;
          return re.exec('str') != null;
        });

        /***/
      }),
      /***/4488: (/***/function (module) {
        // `RequireObjectCoercible` abstract operation
        // https://tc39.es/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        };

        /***/
      }),
      /***/3505: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_106222__) {
        var global = __nested_webpack_require_106222__(7854);
        var createNonEnumerableProperty = __nested_webpack_require_106222__(8880);
        module.exports = function (key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }
          return value;
        };

        /***/
      }),
      /***/6340: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_106688__) {
        "use strict";

        var getBuiltIn = __nested_webpack_require_106688__(5005);
        var definePropertyModule = __nested_webpack_require_106688__(3070);
        var wellKnownSymbol = __nested_webpack_require_106688__(5112);
        var DESCRIPTORS = __nested_webpack_require_106688__(9781);
        var SPECIES = wellKnownSymbol('species');
        module.exports = function (CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;
          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function () {
                return this;
              }
            });
          }
        };

        /***/
      }),
      /***/8003: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_107539__) {
        var defineProperty = __nested_webpack_require_107539__(3070).f;
        var has = __nested_webpack_require_107539__(6656);
        var wellKnownSymbol = __nested_webpack_require_107539__(5112);
        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        module.exports = function (it, TAG, STATIC) {
          if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, {
              configurable: true,
              value: TAG
            });
          }
        };

        /***/
      }),
      /***/6200: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_108150__) {
        var shared = __nested_webpack_require_108150__(2309);
        var uid = __nested_webpack_require_108150__(9711);
        var keys = shared('keys');
        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      }),
      /***/5465: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_108500__) {
        var global = __nested_webpack_require_108500__(7854);
        var setGlobal = __nested_webpack_require_108500__(3505);
        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || setGlobal(SHARED, {});
        module.exports = store;

        /***/
      }),
      /***/2309: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_108850__) {
        var IS_PURE = __nested_webpack_require_108850__(1913);
        var store = __nested_webpack_require_108850__(5465);
        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: '3.9.0',
          mode: IS_PURE ? 'pure' : 'global',
          copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
        });

        /***/
      }),
      /***/6707: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_109370__) {
        var anObject = __nested_webpack_require_109370__(9670);
        var aFunction = __nested_webpack_require_109370__(3099);
        var wellKnownSymbol = __nested_webpack_require_109370__(5112);
        var SPECIES = wellKnownSymbol('species');

        // `SpeciesConstructor` abstract operation
        // https://tc39.es/ecma262/#sec-speciesconstructor
        module.exports = function (O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
        };

        /***/
      }),
      /***/8710: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_110048__) {
        var toInteger = __nested_webpack_require_110048__(9958);
        var requireObjectCoercible = __nested_webpack_require_110048__(4488);

        // `String.prototype.{ codePointAt, at }` methods implementation
        var createMethod = function (CONVERT_TO_STRING) {
          return function ($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
            first = S.charCodeAt(position);
            return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
          };
        };
        module.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.es/ecma262/#sec-string.prototype.codepointat
          codeAt: createMethod(false),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: createMethod(true)
        };

        /***/
      }),
      /***/3197: (/***/function (module) {
        "use strict";

        // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
        var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
        var base = 36;
        var tMin = 1;
        var tMax = 26;
        var skew = 38;
        var damp = 700;
        var initialBias = 72;
        var initialN = 128; // 0x80
        var delimiter = '-'; // '\x2D'
        var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
        var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
        var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
        var baseMinusTMin = base - tMin;
        var floor = Math.floor;
        var stringFromCharCode = String.fromCharCode;

        /**
         * Creates an array containing the numeric code points of each Unicode
         * character in the string. While JavaScript uses UCS-2 internally,
         * this function will convert a pair of surrogate halves (each of which
         * UCS-2 exposes as separate characters) into a single code point,
         * matching UTF-16.
         */
        var ucs2decode = function (string) {
          var output = [];
          var counter = 0;
          var length = string.length;
          while (counter < length) {
            var value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
              // It's a high surrogate, and there is a next character.
              var extra = string.charCodeAt(counter++);
              if ((extra & 0xFC00) == 0xDC00) {
                // Low surrogate.
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
              } else {
                // It's an unmatched surrogate; only append this code unit, in case the
                // next code unit is the high surrogate of a surrogate pair.
                output.push(value);
                counter--;
              }
            } else {
              output.push(value);
            }
          }
          return output;
        };

        /**
         * Converts a digit/integer into a basic code point.
         */
        var digitToBasic = function (digit) {
          //  0..25 map to ASCII a..z or A..Z
          // 26..35 map to ASCII 0..9
          return digit + 22 + 75 * (digit < 26);
        };

        /**
         * Bias adaptation function as per section 3.4 of RFC 3492.
         * https://tools.ietf.org/html/rfc3492#section-3.4
         */
        var adapt = function (delta, numPoints, firstTime) {
          var k = 0;
          delta = firstTime ? floor(delta / damp) : delta >> 1;
          delta += floor(delta / numPoints);
          for (; delta > baseMinusTMin * tMax >> 1; k += base) {
            delta = floor(delta / baseMinusTMin);
          }
          return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        };

        /**
         * Converts a string of Unicode symbols (e.g. a domain name label) to a
         * Punycode string of ASCII-only symbols.
         */
        // eslint-disable-next-line max-statements -- TODO
        var encode = function (input) {
          var output = [];

          // Convert the input in UCS-2 to an array of Unicode code points.
          input = ucs2decode(input);

          // Cache the length.
          var inputLength = input.length;

          // Initialize the state.
          var n = initialN;
          var delta = 0;
          var bias = initialBias;
          var i, currentValue;

          // Handle the basic code points.
          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue < 0x80) {
              output.push(stringFromCharCode(currentValue));
            }
          }
          var basicLength = output.length; // number of basic code points.
          var handledCPCount = basicLength; // number of code points that have been handled;

          // Finish the basic string with a delimiter unless it's empty.
          if (basicLength) {
            output.push(delimiter);
          }

          // Main encoding loop:
          while (handledCPCount < inputLength) {
            // All non-basic code points < n have been handled already. Find the next larger one:
            var m = maxInt;
            for (i = 0; i < input.length; i++) {
              currentValue = input[i];
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }

            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
            var handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
              throw RangeError(OVERFLOW_ERROR);
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for (i = 0; i < input.length; i++) {
              currentValue = input[i];
              if (currentValue < n && ++delta > maxInt) {
                throw RangeError(OVERFLOW_ERROR);
              }
              if (currentValue == n) {
                // Represent delta as a generalized variable-length integer.
                var q = delta;
                for /* no condition */
                (var k = base;; k += base) {
                  var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) break;
                  var qMinusT = q - t;
                  var baseMinusT = base - t;
                  output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
            ++delta;
            ++n;
          }
          return output.join('');
        };
        module.exports = function (input) {
          var encoded = [];
          var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
          var i, label;
          for (i = 0; i < labels.length; i++) {
            label = labels[i];
            encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
          }
          return encoded.join('.');
        };

        /***/
      }),
      /***/6091: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_117962__) {
        var fails = __nested_webpack_require_117962__(7293);
        var whitespaces = __nested_webpack_require_117962__(1361);
        var non = '\u200B\u0085\u180E';

        // check that a method works with the correct list
        // of whitespaces and has a correct name
        module.exports = function (METHOD_NAME) {
          return fails(function () {
            return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
          });
        };

        /***/
      }),
      /***/3111: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_118565__) {
        var requireObjectCoercible = __nested_webpack_require_118565__(4488);
        var whitespaces = __nested_webpack_require_118565__(1361);
        var whitespace = '[' + whitespaces + ']';
        var ltrim = RegExp('^' + whitespace + whitespace + '*');
        var rtrim = RegExp(whitespace + whitespace + '*$');

        // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
        var createMethod = function (TYPE) {
          return function ($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
          };
        };
        module.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.es/ecma262/#sec-string.prototype.trimstart
          start: createMethod(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.es/ecma262/#sec-string.prototype.trimend
          end: createMethod(2),
          // `String.prototype.trim` method
          // https://tc39.es/ecma262/#sec-string.prototype.trim
          trim: createMethod(3)
        };

        /***/
      }),
      /***/1400: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_119903__) {
        var toInteger = __nested_webpack_require_119903__(9958);
        var max = Math.max;
        var min = Math.min;

        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };

        /***/
      }),
      /***/7067: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_120527__) {
        var toInteger = __nested_webpack_require_120527__(9958);
        var toLength = __nested_webpack_require_120527__(7466);

        // `ToIndex` abstract operation
        // https://tc39.es/ecma262/#sec-toindex
        module.exports = function (it) {
          if (it === undefined) return 0;
          var number = toInteger(it);
          var length = toLength(number);
          if (number !== length) throw RangeError('Wrong length or index');
          return length;
        };

        /***/
      }),
      /***/5656: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_121106__) {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __nested_webpack_require_121106__(8361);
        var requireObjectCoercible = __nested_webpack_require_121106__(4488);
        module.exports = function (it) {
          return IndexedObject(requireObjectCoercible(it));
        };

        /***/
      }),
      /***/9958: (/***/function (module) {
        var ceil = Math.ceil;
        var floor = Math.floor;

        // `ToInteger` abstract operation
        // https://tc39.es/ecma262/#sec-tointeger
        module.exports = function (argument) {
          return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };

        /***/
      }),
      /***/7466: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_121890__) {
        var toInteger = __nested_webpack_require_121890__(9958);
        var min = Math.min;

        // `ToLength` abstract operation
        // https://tc39.es/ecma262/#sec-tolength
        module.exports = function (argument) {
          return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
        };

        /***/
      }),
      /***/7908: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_122348__) {
        var requireObjectCoercible = __nested_webpack_require_122348__(4488);

        // `ToObject` abstract operation
        // https://tc39.es/ecma262/#sec-toobject
        module.exports = function (argument) {
          return Object(requireObjectCoercible(argument));
        };

        /***/
      }),
      /***/4590: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_122735__) {
        var toPositiveInteger = __nested_webpack_require_122735__(3002);
        module.exports = function (it, BYTES) {
          var offset = toPositiveInteger(it);
          if (offset % BYTES) throw RangeError('Wrong offset');
          return offset;
        };

        /***/
      }),
      /***/3002: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_123103__) {
        var toInteger = __nested_webpack_require_123103__(9958);
        module.exports = function (it) {
          var result = toInteger(it);
          if (result < 0) throw RangeError("The argument can't be less than 0");
          return result;
        };

        /***/
      }),
      /***/7593: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_123465__) {
        var isObject = __nested_webpack_require_123465__(111);

        // `ToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
          if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
          if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      }),
      /***/1694: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_124447__) {
        var wellKnownSymbol = __nested_webpack_require_124447__(5112);
        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var test = {};
        test[TO_STRING_TAG] = 'z';
        module.exports = String(test) === '[object z]';

        /***/
      }),
      /***/9843: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_124793__) {
        "use strict";

        var $ = __nested_webpack_require_124793__(2109);
        var global = __nested_webpack_require_124793__(7854);
        var DESCRIPTORS = __nested_webpack_require_124793__(9781);
        var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __nested_webpack_require_124793__(3832);
        var ArrayBufferViewCore = __nested_webpack_require_124793__(260);
        var ArrayBufferModule = __nested_webpack_require_124793__(3331);
        var anInstance = __nested_webpack_require_124793__(5787);
        var createPropertyDescriptor = __nested_webpack_require_124793__(9114);
        var createNonEnumerableProperty = __nested_webpack_require_124793__(8880);
        var toLength = __nested_webpack_require_124793__(7466);
        var toIndex = __nested_webpack_require_124793__(7067);
        var toOffset = __nested_webpack_require_124793__(4590);
        var toPrimitive = __nested_webpack_require_124793__(7593);
        var has = __nested_webpack_require_124793__(6656);
        var classof = __nested_webpack_require_124793__(648);
        var isObject = __nested_webpack_require_124793__(111);
        var create = __nested_webpack_require_124793__(30);
        var setPrototypeOf = __nested_webpack_require_124793__(7674);
        var getOwnPropertyNames = __nested_webpack_require_124793__(8006).f;
        var typedArrayFrom = __nested_webpack_require_124793__(7321);
        var forEach = __nested_webpack_require_124793__(2092).forEach;
        var setSpecies = __nested_webpack_require_124793__(6340);
        var definePropertyModule = __nested_webpack_require_124793__(3070);
        var getOwnPropertyDescriptorModule = __nested_webpack_require_124793__(1236);
        var InternalStateModule = __nested_webpack_require_124793__(9909);
        var inheritIfRequired = __nested_webpack_require_124793__(9587);
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var nativeDefineProperty = definePropertyModule.f;
        var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var round = Math.round;
        var RangeError = global.RangeError;
        var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
        var DataView = ArrayBufferModule.DataView;
        var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
        var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
        var TypedArray = ArrayBufferViewCore.TypedArray;
        var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
        var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
        var isTypedArray = ArrayBufferViewCore.isTypedArray;
        var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
        var WRONG_LENGTH = 'Wrong length';
        var fromList = function (C, list) {
          var index = 0;
          var length = list.length;
          var result = new (aTypedArrayConstructor(C))(length);
          while (length > index) result[index] = list[index++];
          return result;
        };
        var addGetter = function (it, key) {
          nativeDefineProperty(it, key, {
            get: function () {
              return getInternalState(this)[key];
            }
          });
        };
        var isArrayBuffer = function (it) {
          var klass;
          return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
        };
        var isTypedArrayIndex = function (target, key) {
          return isTypedArray(target) && typeof key != 'symbol' && key in target && String(+key) == String(key);
        };
        var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
          return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
        };
        var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
          if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, 'value') && !has(descriptor, 'get') && !has(descriptor, 'set')
          // TODO: add validation descriptor w/o calling accessors
          && !descriptor.configurable && (!has(descriptor, 'writable') || descriptor.writable) && (!has(descriptor, 'enumerable') || descriptor.enumerable)) {
            target[key] = descriptor.value;
            return target;
          }
          return nativeDefineProperty(target, key, descriptor);
        };
        if (DESCRIPTORS) {
          if (!NATIVE_ARRAY_BUFFER_VIEWS) {
            getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
            definePropertyModule.f = wrappedDefineProperty;
            addGetter(TypedArrayPrototype, 'buffer');
            addGetter(TypedArrayPrototype, 'byteOffset');
            addGetter(TypedArrayPrototype, 'byteLength');
            addGetter(TypedArrayPrototype, 'length');
          }
          $({
            target: 'Object',
            stat: true,
            forced: !NATIVE_ARRAY_BUFFER_VIEWS
          }, {
            getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
            defineProperty: wrappedDefineProperty
          });
          module.exports = function (TYPE, wrapper, CLAMPED) {
            var BYTES = TYPE.match(/\d+$/)[0] / 8;
            var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
            var GETTER = 'get' + TYPE;
            var SETTER = 'set' + TYPE;
            var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
            var TypedArrayConstructor = NativeTypedArrayConstructor;
            var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
            var exported = {};
            var getter = function (that, index) {
              var data = getInternalState(that);
              return data.view[GETTER](index * BYTES + data.byteOffset, true);
            };
            var setter = function (that, index, value) {
              var data = getInternalState(that);
              if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
              data.view[SETTER](index * BYTES + data.byteOffset, value, true);
            };
            var addElement = function (that, index) {
              nativeDefineProperty(that, index, {
                get: function () {
                  return getter(this, index);
                },
                set: function (value) {
                  return setter(this, index, value);
                },
                enumerable: true
              });
            };
            if (!NATIVE_ARRAY_BUFFER_VIEWS) {
              TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
                anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
                var index = 0;
                var byteOffset = 0;
                var buffer, byteLength, length;
                if (!isObject(data)) {
                  length = toIndex(data);
                  byteLength = length * BYTES;
                  buffer = new ArrayBuffer(byteLength);
                } else if (isArrayBuffer(data)) {
                  buffer = data;
                  byteOffset = toOffset(offset, BYTES);
                  var $len = data.byteLength;
                  if ($length === undefined) {
                    if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                    byteLength = $len - byteOffset;
                    if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                  } else {
                    byteLength = toLength($length) * BYTES;
                    if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
                  }
                  length = byteLength / BYTES;
                } else if (isTypedArray(data)) {
                  return fromList(TypedArrayConstructor, data);
                } else {
                  return typedArrayFrom.call(TypedArrayConstructor, data);
                }
                setInternalState(that, {
                  buffer: buffer,
                  byteOffset: byteOffset,
                  byteLength: byteLength,
                  length: length,
                  view: new DataView(buffer)
                });
                while (index < length) addElement(that, index++);
              });
              if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
              TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
            } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
              TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
                anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
                return inheritIfRequired(function () {
                  if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
                  if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                  if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                  return typedArrayFrom.call(TypedArrayConstructor, data);
                }(), dummy, TypedArrayConstructor);
              });
              if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
              forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
                if (!(key in TypedArrayConstructor)) {
                  createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
                }
              });
              TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
            }
            if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
              createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
            }
            if (TYPED_ARRAY_TAG) {
              createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
            }
            exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
            $({
              global: true,
              forced: TypedArrayConstructor != NativeTypedArrayConstructor,
              sham: !NATIVE_ARRAY_BUFFER_VIEWS
            }, exported);
            if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
              createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
            }
            if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
              createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
            }
            setSpecies(CONSTRUCTOR_NAME);
          };
        } else module.exports = function () {/* empty */};

        /***/
      }),
      /***/3832: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_135708__) {
        /* eslint-disable no-new -- required for testing */
        var global = __nested_webpack_require_135708__(7854);
        var fails = __nested_webpack_require_135708__(7293);
        var checkCorrectnessOfIteration = __nested_webpack_require_135708__(7072);
        var NATIVE_ARRAY_BUFFER_VIEWS = __nested_webpack_require_135708__(260).NATIVE_ARRAY_BUFFER_VIEWS;
        var ArrayBuffer = global.ArrayBuffer;
        var Int8Array = global.Int8Array;
        module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
          Int8Array(1);
        }) || !fails(function () {
          new Int8Array(-1);
        }) || !checkCorrectnessOfIteration(function (iterable) {
          new Int8Array();
          new Int8Array(null);
          new Int8Array(1.5);
          new Int8Array(iterable);
        }, true) || fails(function () {
          // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
          return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
        });

        /***/
      }),
      /***/3074: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_136805__) {
        var aTypedArrayConstructor = __nested_webpack_require_136805__(260).aTypedArrayConstructor;
        var speciesConstructor = __nested_webpack_require_136805__(6707);
        module.exports = function (instance, list) {
          var C = speciesConstructor(instance, instance.constructor);
          var index = 0;
          var length = list.length;
          var result = new (aTypedArrayConstructor(C))(length);
          while (length > index) result[index] = list[index++];
          return result;
        };

        /***/
      }),
      /***/7321: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_137414__) {
        var toObject = __nested_webpack_require_137414__(7908);
        var toLength = __nested_webpack_require_137414__(7466);
        var getIteratorMethod = __nested_webpack_require_137414__(1246);
        var isArrayIteratorMethod = __nested_webpack_require_137414__(7659);
        var bind = __nested_webpack_require_137414__(9974);
        var aTypedArrayConstructor = __nested_webpack_require_137414__(260).aTypedArrayConstructor;
        module.exports = function from(source /* , mapfn, thisArg */) {
          var O = toObject(source);
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
          var mapping = mapfn !== undefined;
          var iteratorMethod = getIteratorMethod(O);
          var i, length, result, step, iterator, next;
          if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
            iterator = iteratorMethod.call(O);
            next = iterator.next;
            O = [];
            while (!(step = next.call(iterator)).done) {
              O.push(step.value);
            }
          }
          if (mapping && argumentsLength > 2) {
            mapfn = bind(mapfn, arguments[2], 2);
          }
          length = toLength(O.length);
          result = new (aTypedArrayConstructor(this))(length);
          for (i = 0; length > i; i++) {
            result[i] = mapping ? mapfn(O[i], i) : O[i];
          }
          return result;
        };

        /***/
      }),
      /***/9711: (/***/function (module) {
        var id = 0;
        var postfix = Math.random();
        module.exports = function (key) {
          return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
        };

        /***/
      }),
      /***/3307: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_139211__) {
        var NATIVE_SYMBOL = __nested_webpack_require_139211__(133);
        module.exports = NATIVE_SYMBOL
        /* global Symbol -- safe */ && !Symbol.sham && typeof Symbol.iterator == 'symbol';

        /***/
      }),
      /***/5112: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_139510__) {
        var global = __nested_webpack_require_139510__(7854);
        var shared = __nested_webpack_require_139510__(2309);
        var has = __nested_webpack_require_139510__(6656);
        var uid = __nested_webpack_require_139510__(9711);
        var NATIVE_SYMBOL = __nested_webpack_require_139510__(133);
        var USE_SYMBOL_AS_UID = __nested_webpack_require_139510__(3307);
        var WellKnownSymbolsStore = shared('wks');
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
        module.exports = function (name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
          }
          return WellKnownSymbolsStore[name];
        };

        /***/
      }),
      /***/1361: (/***/function (module) {
        // a string of all valid unicode whitespaces
        module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

        /***/
      }),
      /***/8264: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_140771__) {
        "use strict";

        var $ = __nested_webpack_require_140771__(2109);
        var global = __nested_webpack_require_140771__(7854);
        var arrayBufferModule = __nested_webpack_require_140771__(3331);
        var setSpecies = __nested_webpack_require_140771__(6340);
        var ARRAY_BUFFER = 'ArrayBuffer';
        var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
        var NativeArrayBuffer = global[ARRAY_BUFFER];

        // `ArrayBuffer` constructor
        // https://tc39.es/ecma262/#sec-arraybuffer-constructor
        $({
          global: true,
          forced: NativeArrayBuffer !== ArrayBuffer
        }, {
          ArrayBuffer: ArrayBuffer
        });
        setSpecies(ARRAY_BUFFER);

        /***/
      }),
      /***/2222: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_141567__) {
        "use strict";

        var $ = __nested_webpack_require_141567__(2109);
        var fails = __nested_webpack_require_141567__(7293);
        var isArray = __nested_webpack_require_141567__(3157);
        var isObject = __nested_webpack_require_141567__(111);
        var toObject = __nested_webpack_require_141567__(7908);
        var toLength = __nested_webpack_require_141567__(7466);
        var createProperty = __nested_webpack_require_141567__(6135);
        var arraySpeciesCreate = __nested_webpack_require_141567__(5417);
        var arrayMethodHasSpeciesSupport = __nested_webpack_require_141567__(1194);
        var wellKnownSymbol = __nested_webpack_require_141567__(5112);
        var V8_VERSION = __nested_webpack_require_141567__(7392);
        var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
        var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/679
        var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
          var array = [];
          array[IS_CONCAT_SPREADABLE] = false;
          return array.concat()[0] !== array;
        });
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
        var isConcatSpreadable = function (O) {
          if (!isObject(O)) return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== undefined ? !!spreadable : isArray(O);
        };
        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

        // `Array.prototype.concat` method
        // https://tc39.es/ecma262/#sec-array.prototype.concat
        // with adding support of @@isConcatSpreadable and @@species
        $({
          target: 'Array',
          proto: true,
          forced: FORCED
        }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          concat: function concat(arg) {
            var O = toObject(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
              E = i === -1 ? O : arguments[i];
              if (isConcatSpreadable(E)) {
                len = toLength(E.length);
                if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
              } else {
                if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
              }
            }
            A.length = n;
            return A;
          }
        });

        /***/
      }),
      /***/7327: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_144464__) {
        "use strict";

        var $ = __nested_webpack_require_144464__(2109);
        var $filter = __nested_webpack_require_144464__(2092).filter;
        var arrayMethodHasSpeciesSupport = __nested_webpack_require_144464__(1194);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        // with adding support of @@species
        $({
          target: 'Array',
          proto: true,
          forced: !HAS_SPECIES_SUPPORT
        }, {
          filter: function filter(callbackfn /* , thisArg */) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          }
        });

        /***/
      }),
      /***/2772: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_145310__) {
        "use strict";

        var $ = __nested_webpack_require_145310__(2109);
        var $indexOf = __nested_webpack_require_145310__(1318).indexOf;
        var arrayMethodIsStrict = __nested_webpack_require_145310__(9341);
        var nativeIndexOf = [].indexOf;
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict('indexOf');

        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        $({
          target: 'Array',
          proto: true,
          forced: NEGATIVE_ZERO || !STRICT_METHOD
        }, {
          indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
            return NEGATIVE_ZERO
            // convert -0 to +0
            ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
          }
        });

        /***/
      }),
      /***/6992: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_146321__) {
        "use strict";

        var toIndexedObject = __nested_webpack_require_146321__(5656);
        var addToUnscopables = __nested_webpack_require_146321__(1223);
        var Iterators = __nested_webpack_require_146321__(7497);
        var InternalStateModule = __nested_webpack_require_146321__(9909);
        var defineIterator = __nested_webpack_require_146321__(654);
        var ARRAY_ITERATOR = 'Array Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

        // `Array.prototype.entries` method
        // https://tc39.es/ecma262/#sec-array.prototype.entries
        // `Array.prototype.keys` method
        // https://tc39.es/ecma262/#sec-array.prototype.keys
        // `Array.prototype.values` method
        // https://tc39.es/ecma262/#sec-array.prototype.values
        // `Array.prototype[@@iterator]` method
        // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
        // `CreateArrayIterator` internal method
        // https://tc39.es/ecma262/#sec-createarrayiterator
        module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
          setInternalState(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(iterated),
            // target
            index: 0,
            // next index
            kind: kind // kind
          });
          // `%ArrayIteratorPrototype%.next` method
          // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
        }, function () {
          var state = getInternalState(this);
          var target = state.target;
          var kind = state.kind;
          var index = state.index++;
          if (!target || index >= target.length) {
            state.target = undefined;
            return {
              value: undefined,
              done: true
            };
          }
          if (kind == 'keys') return {
            value: index,
            done: false
          };
          if (kind == 'values') return {
            value: target[index],
            done: false
          };
          return {
            value: [index, target[index]],
            done: false
          };
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values%
        // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
        // https://tc39.es/ecma262/#sec-createmappedargumentsobject
        Iterators.Arguments = Iterators.Array;

        // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

        /***/
      }),
      /***/1249: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_149050__) {
        "use strict";

        var $ = __nested_webpack_require_149050__(2109);
        var $map = __nested_webpack_require_149050__(2092).map;
        var arrayMethodHasSpeciesSupport = __nested_webpack_require_149050__(1194);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        // with adding support of @@species
        $({
          target: 'Array',
          proto: true,
          forced: !HAS_SPECIES_SUPPORT
        }, {
          map: function map(callbackfn /* , thisArg */) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          }
        });

        /***/
      }),
      /***/7042: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_149872__) {
        "use strict";

        var $ = __nested_webpack_require_149872__(2109);
        var isObject = __nested_webpack_require_149872__(111);
        var isArray = __nested_webpack_require_149872__(3157);
        var toAbsoluteIndex = __nested_webpack_require_149872__(1400);
        var toLength = __nested_webpack_require_149872__(7466);
        var toIndexedObject = __nested_webpack_require_149872__(5656);
        var createProperty = __nested_webpack_require_149872__(6135);
        var wellKnownSymbol = __nested_webpack_require_149872__(5112);
        var arrayMethodHasSpeciesSupport = __nested_webpack_require_149872__(1194);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
        var SPECIES = wellKnownSymbol('species');
        var nativeSlice = [].slice;
        var max = Math.max;

        // `Array.prototype.slice` method
        // https://tc39.es/ecma262/#sec-array.prototype.slice
        // fallback for not array-like ES3 strings and DOM objects
        $({
          target: 'Array',
          proto: true,
          forced: !HAS_SPECIES_SUPPORT
        }, {
          slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var k = toAbsoluteIndex(start, length);
            var fin = toAbsoluteIndex(end === undefined ? length : end, length);
            // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
            var Constructor, result, n;
            if (isArray(O)) {
              Constructor = O.constructor;
              // cross-realm fallback
              if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
                Constructor = undefined;
              } else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null) Constructor = undefined;
              }
              if (Constructor === Array || Constructor === undefined) {
                return nativeSlice.call(O, k, fin);
              }
            }
            result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
            for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
            result.length = n;
            return result;
          }
        });

        /***/
      }),
      /***/561: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_152257__) {
        "use strict";

        var $ = __nested_webpack_require_152257__(2109);
        var toAbsoluteIndex = __nested_webpack_require_152257__(1400);
        var toInteger = __nested_webpack_require_152257__(9958);
        var toLength = __nested_webpack_require_152257__(7466);
        var toObject = __nested_webpack_require_152257__(7908);
        var arraySpeciesCreate = __nested_webpack_require_152257__(5417);
        var createProperty = __nested_webpack_require_152257__(6135);
        var arrayMethodHasSpeciesSupport = __nested_webpack_require_152257__(1194);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
        var max = Math.max;
        var min = Math.min;
        var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
        var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

        // `Array.prototype.splice` method
        // https://tc39.es/ecma262/#sec-array.prototype.splice
        // with adding support of @@species
        $({
          target: 'Array',
          proto: true,
          forced: !HAS_SPECIES_SUPPORT
        }, {
          splice: function splice(start, deleteCount /* , ...items */) {
            var O = toObject(this);
            var len = toLength(O.length);
            var actualStart = toAbsoluteIndex(start, len);
            var argumentsLength = arguments.length;
            var insertCount, actualDeleteCount, A, k, from, to;
            if (argumentsLength === 0) {
              insertCount = actualDeleteCount = 0;
            } else if (argumentsLength === 1) {
              insertCount = 0;
              actualDeleteCount = len - actualStart;
            } else {
              insertCount = argumentsLength - 2;
              actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
            }
            if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
              throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
            }
            A = arraySpeciesCreate(O, actualDeleteCount);
            for (k = 0; k < actualDeleteCount; k++) {
              from = actualStart + k;
              if (from in O) createProperty(A, k, O[from]);
            }
            A.length = actualDeleteCount;
            if (insertCount < actualDeleteCount) {
              for (k = actualStart; k < len - actualDeleteCount; k++) {
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O) O[to] = O[from];else delete O[to];
              }
              for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
            } else if (insertCount > actualDeleteCount) {
              for (k = len - actualDeleteCount; k > actualStart; k--) {
                from = k + actualDeleteCount - 1;
                to = k + insertCount - 1;
                if (from in O) O[to] = O[from];else delete O[to];
              }
            }
            for (k = 0; k < insertCount; k++) {
              O[k + actualStart] = arguments[k + 2];
            }
            O.length = len - actualDeleteCount + insertCount;
            return A;
          }
        });

        /***/
      }),
      /***/8309: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_155441__) {
        var DESCRIPTORS = __nested_webpack_require_155441__(9781);
        var defineProperty = __nested_webpack_require_155441__(3070).f;
        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name';

        // Function instances `.name` property
        // https://tc39.es/ecma262/#sec-function-instances-name
        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
          defineProperty(FunctionPrototype, NAME, {
            configurable: true,
            get: function () {
              try {
                return FunctionPrototypeToString.call(this).match(nameRE)[1];
              } catch (error) {
                return '';
              }
            }
          });
        }

        /***/
      }),
      /***/489: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_156373__) {
        var $ = __nested_webpack_require_156373__(2109);
        var fails = __nested_webpack_require_156373__(7293);
        var toObject = __nested_webpack_require_156373__(7908);
        var nativeGetPrototypeOf = __nested_webpack_require_156373__(9518);
        var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_156373__(8544);
        var FAILS_ON_PRIMITIVES = fails(function () {
          nativeGetPrototypeOf(1);
        });

        // `Object.getPrototypeOf` method
        // https://tc39.es/ecma262/#sec-object.getprototypeof
        $({
          target: 'Object',
          stat: true,
          forced: FAILS_ON_PRIMITIVES,
          sham: !CORRECT_PROTOTYPE_GETTER
        }, {
          getPrototypeOf: function getPrototypeOf(it) {
            return nativeGetPrototypeOf(toObject(it));
          }
        });

        /***/
      }),
      /***/1539: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_157270__) {
        var TO_STRING_TAG_SUPPORT = __nested_webpack_require_157270__(1694);
        var redefine = __nested_webpack_require_157270__(1320);
        var toString = __nested_webpack_require_157270__(288);

        // `Object.prototype.toString` method
        // https://tc39.es/ecma262/#sec-object.prototype.tostring
        if (!TO_STRING_TAG_SUPPORT) {
          redefine(Object.prototype, 'toString', toString, {
            unsafe: true
          });
        }

        /***/
      }),
      /***/4916: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_157825__) {
        "use strict";

        var $ = __nested_webpack_require_157825__(2109);
        var exec = __nested_webpack_require_157825__(2261);

        // `RegExp.prototype.exec` method
        // https://tc39.es/ecma262/#sec-regexp.prototype.exec
        $({
          target: 'RegExp',
          proto: true,
          forced: /./.exec !== exec
        }, {
          exec: exec
        });

        /***/
      }),
      /***/9714: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_158319__) {
        "use strict";

        var redefine = __nested_webpack_require_158319__(1320);
        var anObject = __nested_webpack_require_158319__(9670);
        var fails = __nested_webpack_require_158319__(7293);
        var flags = __nested_webpack_require_158319__(7066);
        var TO_STRING = 'toString';
        var RegExpPrototype = RegExp.prototype;
        var nativeToString = RegExpPrototype[TO_STRING];
        var NOT_GENERIC = fails(function () {
          return nativeToString.call({
            source: 'a',
            flags: 'b'
          }) != '/a/b';
        });
        // FF44- RegExp#toString has a wrong name
        var INCORRECT_NAME = nativeToString.name != TO_STRING;

        // `RegExp.prototype.toString` method
        // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
        if (NOT_GENERIC || INCORRECT_NAME) {
          redefine(RegExp.prototype, TO_STRING, function toString() {
            var R = anObject(this);
            var p = String(R.source);
            var rf = R.flags;
            var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
            return '/' + p + '/' + f;
          }, {
            unsafe: true
          });
        }

        /***/
      }),
      /***/8783: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_159648__) {
        "use strict";

        var charAt = __nested_webpack_require_159648__(8710).charAt;
        var InternalStateModule = __nested_webpack_require_159648__(9909);
        var defineIterator = __nested_webpack_require_159648__(654);
        var STRING_ITERATOR = 'String Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

        // `String.prototype[@@iterator]` method
        // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
        defineIterator(String, 'String', function (iterated) {
          setInternalState(this, {
            type: STRING_ITERATOR,
            string: String(iterated),
            index: 0
          });
          // `%StringIteratorPrototype%.next` method
          // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
        }, function next() {
          var state = getInternalState(this);
          var string = state.string;
          var index = state.index;
          var point;
          if (index >= string.length) return {
            value: undefined,
            done: true
          };
          point = charAt(string, index);
          state.index += point.length;
          return {
            value: point,
            done: false
          };
        });

        /***/
      }),
      /***/4723: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_161063__) {
        "use strict";

        var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_161063__(7007);
        var anObject = __nested_webpack_require_161063__(9670);
        var toLength = __nested_webpack_require_161063__(7466);
        var requireObjectCoercible = __nested_webpack_require_161063__(4488);
        var advanceStringIndex = __nested_webpack_require_161063__(1530);
        var regExpExec = __nested_webpack_require_161063__(7651);

        // @@match logic
        fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
          return [
          // `String.prototype.match` method
          // https://tc39.es/ecma262/#sec-string.prototype.match
          function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = regexp == undefined ? undefined : regexp[MATCH];
            return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
          },
          // `RegExp.prototype[@@match]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
          function (regexp) {
            var res = maybeCallNative(nativeMatch, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while ((result = regExpExec(rx, S)) !== null) {
              var matchStr = String(result[0]);
              A[n] = matchStr;
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              n++;
            }
            return n === 0 ? null : A;
          }];
        });

        /***/
      }),
      /***/5306: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_162971__) {
        "use strict";

        var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_162971__(7007);
        var anObject = __nested_webpack_require_162971__(9670);
        var toLength = __nested_webpack_require_162971__(7466);
        var toInteger = __nested_webpack_require_162971__(9958);
        var requireObjectCoercible = __nested_webpack_require_162971__(4488);
        var advanceStringIndex = __nested_webpack_require_162971__(1530);
        var getSubstitution = __nested_webpack_require_162971__(647);
        var regExpExec = __nested_webpack_require_162971__(7651);
        var max = Math.max;
        var min = Math.min;
        var maybeToString = function (it) {
          return it === undefined ? it : String(it);
        };

        // @@replace logic
        fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
          var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
          var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
          var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
          return [
          // `String.prototype.replace` method
          // https://tc39.es/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
            return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
          function (regexp, replaceValue) {
            if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
              var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
              if (res.done) return res.value;
            }
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global = rx.global;
            if (global) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            var results = [];
            while (true) {
              var result = regExpExec(rx, S);
              if (result === null) break;
              results.push(result);
              if (!global) break;
              var matchStr = String(result[0]);
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = '';
            var nextSourcePosition = 0;
            for (var i = 0; i < results.length; i++) {
              result = results[i];
              var matched = String(result[0]);
              var position = max(min(toInteger(result.index), S.length), 0);
              var captures = [];
              // NOTE: This is equivalent to
              //   captures = result.slice(1).map(maybeToString)
              // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
              // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
              // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
              for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
              var namedCaptures = result.groups;
              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          }];
        });

        /***/
      }),
      /***/3123: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_167493__) {
        "use strict";

        var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_167493__(7007);
        var isRegExp = __nested_webpack_require_167493__(7850);
        var anObject = __nested_webpack_require_167493__(9670);
        var requireObjectCoercible = __nested_webpack_require_167493__(4488);
        var speciesConstructor = __nested_webpack_require_167493__(6707);
        var advanceStringIndex = __nested_webpack_require_167493__(1530);
        var toLength = __nested_webpack_require_167493__(7466);
        var callRegExpExec = __nested_webpack_require_167493__(7651);
        var regexpExec = __nested_webpack_require_167493__(2261);
        var fails = __nested_webpack_require_167493__(7293);
        var arrayPush = [].push;
        var min = Math.min;
        var MAX_UINT32 = 0xFFFFFFFF;

        // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
        var SUPPORTS_Y = !fails(function () {
          return !RegExp(MAX_UINT32, 'y');
        });

        // @@split logic
        fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
          var internalSplit;
          if ('abbc'.split(/(b)*/)[1] == 'c' ||
          // eslint-disable-next-line regexp/no-empty-group -- required for testing
          'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 ||
          // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
          '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
            // based on es5-shim implementation, need to rework it
            internalSplit = function (separator, limit) {
              var string = String(requireObjectCoercible(this));
              var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
              if (lim === 0) return [];
              if (separator === undefined) return [string];
              // If `separator` is not a regex, use native split
              if (!isRegExp(separator)) {
                return nativeSplit.call(string, separator, lim);
              }
              var output = [];
              var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
              var lastLastIndex = 0;
              // Make `global` and avoid `lastIndex` issues by working with a copy
              var separatorCopy = new RegExp(separator.source, flags + 'g');
              var match, lastIndex, lastLength;
              while (match = regexpExec.call(separatorCopy, string)) {
                lastIndex = separatorCopy.lastIndex;
                if (lastIndex > lastLastIndex) {
                  output.push(string.slice(lastLastIndex, match.index));
                  if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                  lastLength = match[0].length;
                  lastLastIndex = lastIndex;
                  if (output.length >= lim) break;
                }
                if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
              }
              if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test('')) output.push('');
              } else output.push(string.slice(lastLastIndex));
              return output.length > lim ? output.slice(0, lim) : output;
            };
            // Chakra, V8
          } else if ('0'.split(undefined, 0).length) {
            internalSplit = function (separator, limit) {
              return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
            };
          } else internalSplit = nativeSplit;
          return [
          // `String.prototype.split` method
          // https://tc39.es/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
          },
          // `RegExp.prototype[@@split]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function (regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;
              if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;
                for (var i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }
                q = p = e;
              }
            }
            A.push(S.slice(p));
            return A;
          }];
        }, !SUPPORTS_Y);

        /***/
      }),
      /***/3210: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_173749__) {
        "use strict";

        var $ = __nested_webpack_require_173749__(2109);
        var $trim = __nested_webpack_require_173749__(3111).trim;
        var forcedStringTrimMethod = __nested_webpack_require_173749__(6091);

        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        $({
          target: 'String',
          proto: true,
          forced: forcedStringTrimMethod('trim')
        }, {
          trim: function trim() {
            return $trim(this);
          }
        });

        /***/
      }),
      /***/2990: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_174383__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_174383__(260);
        var $copyWithin = __nested_webpack_require_174383__(1048);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.copyWithin` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
        exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
          return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        });

        /***/
      }),
      /***/8927: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_175144__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_175144__(260);
        var $every = __nested_webpack_require_175144__(2092).every;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.every` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
        exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
          return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/3105: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_175874__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_175874__(260);
        var $fill = __nested_webpack_require_175874__(1285);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.fill` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
          return $fill.apply(aTypedArray(this), arguments);
        });

        /***/
      }),
      /***/5035: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_176623__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_176623__(260);
        var $filter = __nested_webpack_require_176623__(2092).filter;
        var fromSpeciesAndList = __nested_webpack_require_176623__(3074);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.filter` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
        exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
          var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          return fromSpeciesAndList(this, list);
        });

        /***/
      }),
      /***/7174: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_177473__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_177473__(260);
        var $findIndex = __nested_webpack_require_177473__(2092).findIndex;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
        exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
          return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/4345: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_178229__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_178229__(260);
        var $find = __nested_webpack_require_178229__(2092).find;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.find` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
        exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
          return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/2846: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_178950__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_178950__(260);
        var $forEach = __nested_webpack_require_178950__(2092).forEach;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
        exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
          $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/4731: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_179687__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_179687__(260);
        var $includes = __nested_webpack_require_179687__(1318).includes;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.includes` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
        exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
          return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/7209: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_180446__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_180446__(260);
        var $indexOf = __nested_webpack_require_180446__(1318).indexOf;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
        exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
          return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/6319: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_181198__) {
        "use strict";

        var global = __nested_webpack_require_181198__(7854);
        var ArrayBufferViewCore = __nested_webpack_require_181198__(260);
        var ArrayIterators = __nested_webpack_require_181198__(6992);
        var wellKnownSymbol = __nested_webpack_require_181198__(5112);
        var ITERATOR = wellKnownSymbol('iterator');
        var Uint8Array = global.Uint8Array;
        var arrayValues = ArrayIterators.values;
        var arrayKeys = ArrayIterators.keys;
        var arrayEntries = ArrayIterators.entries;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];
        var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);
        var typedArrayValues = function values() {
          return arrayValues.call(aTypedArray(this));
        };

        // `%TypedArray%.prototype.entries` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
        exportTypedArrayMethod('entries', function entries() {
          return arrayEntries.call(aTypedArray(this));
        });
        // `%TypedArray%.prototype.keys` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
        exportTypedArrayMethod('keys', function keys() {
          return arrayKeys.call(aTypedArray(this));
        });
        // `%TypedArray%.prototype.values` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
        exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
        // `%TypedArray%.prototype[@@iterator]` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
        exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);

        /***/
      }),
      /***/8867: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_183208__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_183208__(260);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var $join = [].join;

        // `%TypedArray%.prototype.join` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        exportTypedArrayMethod('join', function join(separator) {
          return $join.apply(aTypedArray(this), arguments);
        });

        /***/
      }),
      /***/7789: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_183924__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_183924__(260);
        var $lastIndexOf = __nested_webpack_require_183924__(6583);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.lastIndexOf` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
          return $lastIndexOf.apply(aTypedArray(this), arguments);
        });

        /***/
      }),
      /***/3739: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_184722__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_184722__(260);
        var $map = __nested_webpack_require_184722__(2092).map;
        var speciesConstructor = __nested_webpack_require_184722__(6707);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.map` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
        exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
          return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
            return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
          });
        });

        /***/
      }),
      /***/4483: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_185700__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_185700__(260);
        var $reduceRight = __nested_webpack_require_185700__(3671).right;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.reduceRicht` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
        exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
          return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/9368: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_186489__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_186489__(260);
        var $reduce = __nested_webpack_require_186489__(3671).left;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
        exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
          return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/2056: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_187247__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_187247__(260);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var floor = Math.floor;

        // `%TypedArray%.prototype.reverse` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
        exportTypedArrayMethod('reverse', function reverse() {
          var that = this;
          var length = aTypedArray(that).length;
          var middle = floor(length / 2);
          var index = 0;
          var value;
          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }
          return that;
        });

        /***/
      }),
      /***/3462: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_188177__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_188177__(260);
        var toLength = __nested_webpack_require_188177__(7466);
        var toOffset = __nested_webpack_require_188177__(4590);
        var toObject = __nested_webpack_require_188177__(7908);
        var fails = __nested_webpack_require_188177__(7293);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var FORCED = fails(function () {
          /* global Int8Array -- safe */
          new Int8Array(1).set({});
        });

        // `%TypedArray%.prototype.set` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
        exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
          aTypedArray(this);
          var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
          var length = this.length;
          var src = toObject(arrayLike);
          var len = toLength(src.length);
          var index = 0;
          if (len + offset > length) throw RangeError('Wrong length');
          while (index < len) this[offset + index] = src[index++];
        }, FORCED);

        /***/
      }),
      /***/678: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_189468__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_189468__(260);
        var speciesConstructor = __nested_webpack_require_189468__(6707);
        var fails = __nested_webpack_require_189468__(7293);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var $slice = [].slice;
        var FORCED = fails(function () {
          /* global Int8Array -- safe */
          new Int8Array(1).slice();
        });

        // `%TypedArray%.prototype.slice` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
        exportTypedArrayMethod('slice', function slice(start, end) {
          var list = $slice.call(aTypedArray(this), start, end);
          var C = speciesConstructor(this, this.constructor);
          var index = 0;
          var length = list.length;
          var result = new (aTypedArrayConstructor(C))(length);
          while (length > index) result[index] = list[index++];
          return result;
        }, FORCED);

        /***/
      }),
      /***/7462: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_190721__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_190721__(260);
        var $some = __nested_webpack_require_190721__(2092).some;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.some` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
        exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
          return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        });

        /***/
      }),
      /***/3824: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_191444__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_191444__(260);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var $sort = [].sort;

        // `%TypedArray%.prototype.sort` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
        exportTypedArrayMethod('sort', function sort(comparefn) {
          return $sort.call(aTypedArray(this), comparefn);
        });

        /***/
      }),
      /***/5021: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_192082__) {
        "use strict";

        var ArrayBufferViewCore = __nested_webpack_require_192082__(260);
        var toLength = __nested_webpack_require_192082__(7466);
        var toAbsoluteIndex = __nested_webpack_require_192082__(1400);
        var speciesConstructor = __nested_webpack_require_192082__(6707);
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

        // `%TypedArray%.prototype.subarray` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
        exportTypedArrayMethod('subarray', function subarray(begin, end) {
          var O = aTypedArray(this);
          var length = O.length;
          var beginIndex = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
        });

        /***/
      }),
      /***/2974: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_193149__) {
        "use strict";

        var global = __nested_webpack_require_193149__(7854);
        var ArrayBufferViewCore = __nested_webpack_require_193149__(260);
        var fails = __nested_webpack_require_193149__(7293);
        var Int8Array = global.Int8Array;
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var $toLocaleString = [].toLocaleString;
        var $slice = [].slice;

        // iOS Safari 6.x fails here
        var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
          $toLocaleString.call(new Int8Array(1));
        });
        var FORCED = fails(function () {
          return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
        }) || !fails(function () {
          Int8Array.prototype.toLocaleString.call([1, 2]);
        });

        // `%TypedArray%.prototype.toLocaleString` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
        exportTypedArrayMethod('toLocaleString', function toLocaleString() {
          return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
        }, FORCED);

        /***/
      }),
      /***/5016: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_194482__) {
        "use strict";

        var exportTypedArrayMethod = __nested_webpack_require_194482__(260).exportTypedArrayMethod;
        var fails = __nested_webpack_require_194482__(7293);
        var global = __nested_webpack_require_194482__(7854);
        var Uint8Array = global.Uint8Array;
        var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
        var arrayToString = [].toString;
        var arrayJoin = [].join;
        if (fails(function () {
          arrayToString.call({});
        })) {
          arrayToString = function toString() {
            return arrayJoin.call(this);
          };
        }
        var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

        // `%TypedArray%.prototype.toString` method
        // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
        exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

        /***/
      }),
      /***/2472: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_195490__) {
        var createTypedArrayConstructor = __nested_webpack_require_195490__(9843);

        // `Uint8Array` constructor
        // https://tc39.es/ecma262/#sec-typedarray-objects
        createTypedArrayConstructor('Uint8', function (init) {
          return function Uint8Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
          };
        });

        /***/
      }),
      /***/4747: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_195997__) {
        var global = __nested_webpack_require_195997__(7854);
        var DOMIterables = __nested_webpack_require_195997__(8324);
        var forEach = __nested_webpack_require_195997__(8533);
        var createNonEnumerableProperty = __nested_webpack_require_195997__(8880);
        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
            createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
          } catch (error) {
            CollectionPrototype.forEach = forEach;
          }
        }

        /***/
      }),
      /***/3948: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_196872__) {
        var global = __nested_webpack_require_196872__(7854);
        var DOMIterables = __nested_webpack_require_196872__(8324);
        var ArrayIteratorMethods = __nested_webpack_require_196872__(6992);
        var createNonEnumerableProperty = __nested_webpack_require_196872__(8880);
        var wellKnownSymbol = __nested_webpack_require_196872__(5112);
        var ITERATOR = wellKnownSymbol('iterator');
        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var ArrayValues = ArrayIteratorMethods.values;
        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          if (CollectionPrototype) {
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
              createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
            } catch (error) {
              CollectionPrototype[ITERATOR] = ArrayValues;
            }
            if (!CollectionPrototype[TO_STRING_TAG]) {
              createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
            }
            if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
              // some Chrome versions have non-configurable methods on DOMTokenList
              if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
              } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
              }
            }
          }
        }

        /***/
      }),
      /***/1637: (/***/function (module, __unused_webpack_exports, __nested_webpack_require_198722__) {
        "use strict";

        // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
        __nested_webpack_require_198722__(6992);
        var $ = __nested_webpack_require_198722__(2109);
        var getBuiltIn = __nested_webpack_require_198722__(5005);
        var USE_NATIVE_URL = __nested_webpack_require_198722__(590);
        var redefine = __nested_webpack_require_198722__(1320);
        var redefineAll = __nested_webpack_require_198722__(2248);
        var setToStringTag = __nested_webpack_require_198722__(8003);
        var createIteratorConstructor = __nested_webpack_require_198722__(4994);
        var InternalStateModule = __nested_webpack_require_198722__(9909);
        var anInstance = __nested_webpack_require_198722__(5787);
        var hasOwn = __nested_webpack_require_198722__(6656);
        var bind = __nested_webpack_require_198722__(9974);
        var classof = __nested_webpack_require_198722__(648);
        var anObject = __nested_webpack_require_198722__(9670);
        var isObject = __nested_webpack_require_198722__(111);
        var create = __nested_webpack_require_198722__(30);
        var createPropertyDescriptor = __nested_webpack_require_198722__(9114);
        var getIterator = __nested_webpack_require_198722__(8554);
        var getIteratorMethod = __nested_webpack_require_198722__(1246);
        var wellKnownSymbol = __nested_webpack_require_198722__(5112);
        var $fetch = getBuiltIn('fetch');
        var Headers = getBuiltIn('Headers');
        var ITERATOR = wellKnownSymbol('iterator');
        var URL_SEARCH_PARAMS = 'URLSearchParams';
        var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
        var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
        var plus = /\+/g;
        var sequences = Array(4);
        var percentSequence = function (bytes) {
          return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
        };
        var percentDecode = function (sequence) {
          try {
            return decodeURIComponent(sequence);
          } catch (error) {
            return sequence;
          }
        };
        var deserialize = function (it) {
          var result = it.replace(plus, ' ');
          var bytes = 4;
          try {
            return decodeURIComponent(result);
          } catch (error) {
            while (bytes) {
              result = result.replace(percentSequence(bytes--), percentDecode);
            }
            return result;
          }
        };
        var find = /[!'()~]|%20/g;
        var replace = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+'
        };
        var replacer = function (match) {
          return replace[match];
        };
        var serialize = function (it) {
          return encodeURIComponent(it).replace(find, replacer);
        };
        var parseSearchParams = function (result, query) {
          if (query) {
            var attributes = query.split('&');
            var index = 0;
            var attribute, entry;
            while (index < attributes.length) {
              attribute = attributes[index++];
              if (attribute.length) {
                entry = attribute.split('=');
                result.push({
                  key: deserialize(entry.shift()),
                  value: deserialize(entry.join('='))
                });
              }
            }
          }
        };
        var updateSearchParams = function (query) {
          this.entries.length = 0;
          parseSearchParams(this.entries, query);
        };
        var validateArgumentsLength = function (passed, required) {
          if (passed < required) throw TypeError('Not enough arguments');
        };
        var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
          setInternalState(this, {
            type: URL_SEARCH_PARAMS_ITERATOR,
            iterator: getIterator(getInternalParamsState(params).entries),
            kind: kind
          });
        }, 'Iterator', function next() {
          var state = getInternalIteratorState(this);
          var kind = state.kind;
          var step = state.iterator.next();
          var entry = step.value;
          if (!step.done) {
            step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
          }
          return step;
        });

        // `URLSearchParams` constructor
        // https://url.spec.whatwg.org/#interface-urlsearchparams
        var URLSearchParamsConstructor = function URLSearchParams(/* init */
        ) {
          anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
          var init = arguments.length > 0 ? arguments[0] : undefined;
          var that = this;
          var entries = [];
          var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
          setInternalState(that, {
            type: URL_SEARCH_PARAMS,
            entries: entries,
            updateURL: function () {/* empty */},
            updateSearchParams: updateSearchParams
          });
          if (init !== undefined) {
            if (isObject(init)) {
              iteratorMethod = getIteratorMethod(init);
              if (typeof iteratorMethod === 'function') {
                iterator = iteratorMethod.call(init);
                next = iterator.next;
                while (!(step = next.call(iterator)).done) {
                  entryIterator = getIterator(anObject(step.value));
                  entryNext = entryIterator.next;
                  if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done) throw TypeError('Expected sequence with length 2');
                  entries.push({
                    key: first.value + '',
                    value: second.value + ''
                  });
                }
              } else for (key in init) if (hasOwn(init, key)) entries.push({
                key: key,
                value: init[key] + ''
              });
            } else {
              parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
            }
          }
        };
        var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
        redefineAll(URLSearchParamsPrototype, {
          // `URLSearchParams.prototype.append` method
          // https://url.spec.whatwg.org/#dom-urlsearchparams-append
          append: function append(name, value) {
            validateArgumentsLength(arguments.length, 2);
            var state = getInternalParamsState(this);
            state.entries.push({
              key: name + '',
              value: value + ''
            });
            state.updateURL();
          },
          // `URLSearchParams.prototype.delete` method
          // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
          'delete': function (name) {
            validateArgumentsLength(arguments.length, 1);
            var state = getInternalParamsState(this);
            var entries = state.entries;
            var key = name + '';
            var index = 0;
            while (index < entries.length) {
              if (entries[index].key === key) entries.splice(index, 1);else index++;
            }
            state.updateURL();
          },
          // `URLSearchParams.prototype.get` method
          // https://url.spec.whatwg.org/#dom-urlsearchparams-get
          get: function get(name) {
            validateArgumentsLength(arguments.length, 1);
            var entries = getInternalParamsState(this).entries;
            var key = name + '';
            var index = 0;
            for (; index < entries.length; index++) {
              if (entries[index].key === key) return entries[index].value;
            }
            return null;
          },
          // `URLSearchParams.prototype.getAll` method
          // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
          getAll: function getAll(name) {
            validateArgumentsLength(arguments.length, 1);
            var entries = getInternalParamsState(this).entries;
            var key = name + '';
            var result = [];
            var index = 0;
            for (; index < entries.length; index++) {
              if (entries[index].key === key) result.push(entries[index].value);
            }
            return result;
          },
          // `URLSearchParams.prototype.has` method
          // https://url.spec.whatwg.org/#dom-urlsearchparams-has
          has: function has(name) {
            validateArgumentsLength(arguments.length, 1);
            var entries = getInternalParamsState(this).entries;
            var key = name + '';
            var index = 0;
            while (index < entries.length) {
              if (entries[index++].key === key) return true;
            }
            return false;
          },
          // `URLSearchParams.prototype.set` method
          // https://url.spec.whatwg.org/#dom-urlsearchparams-set
          set: function set(name, value) {
            validateArgumentsLength(arguments.length, 1);
            var state = getInternalParamsState(this);
            var entries = state.entries;
            var found = false;
            var key = name + '';
            var val = value + '';
            var index = 0;
            var entry;
            for (; index < entries.length; index++) {
              entry = entries[index];
              if (entry.key === key) {
                if (found) entries.splice(index--, 1);else {
                  found = true;
                  entry.value = val;
                }
              }
            }
            if (!found) entries.push({
              key: key,
              value: val
            });
            state.updateURL();
          },
          // `URLSearchParams.prototype.sort` method
          // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
          sort: function sort() {
            var state = getInternalParamsState(this);
            var entries = state.entries;
            // Array#sort is not stable in some engines
            var slice = entries.slice();
            var entry, entriesIndex, sliceIndex;
            entries.length = 0;
            for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
              entry = slice[sliceIndex];
              for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
                if (entries[entriesIndex].key > entry.key) {
                  entries.splice(entriesIndex, 0, entry);
                  break;
                }
              }
              if (entriesIndex === sliceIndex) entries.push(entry);
            }
            state.updateURL();
          },
          // `URLSearchParams.prototype.forEach` method
          forEach: function forEach(callback /* , thisArg */) {
            var entries = getInternalParamsState(this).entries;
            var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
            var index = 0;
            var entry;
            while (index < entries.length) {
              entry = entries[index++];
              boundFunction(entry.value, entry.key, this);
            }
          },
          // `URLSearchParams.prototype.keys` method
          keys: function keys() {
            return new URLSearchParamsIterator(this, 'keys');
          },
          // `URLSearchParams.prototype.values` method
          values: function values() {
            return new URLSearchParamsIterator(this, 'values');
          },
          // `URLSearchParams.prototype.entries` method
          entries: function entries() {
            return new URLSearchParamsIterator(this, 'entries');
          }
        }, {
          enumerable: true
        });

        // `URLSearchParams.prototype[@@iterator]` method
        redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

        // `URLSearchParams.prototype.toString` method
        // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
        redefine(URLSearchParamsPrototype, 'toString', function toString() {
          var entries = getInternalParamsState(this).entries;
          var result = [];
          var index = 0;
          var entry;
          while (index < entries.length) {
            entry = entries[index++];
            result.push(serialize(entry.key) + '=' + serialize(entry.value));
          }
          return result.join('&');
        }, {
          enumerable: true
        });
        setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
        $({
          global: true,
          forced: !USE_NATIVE_URL
        }, {
          URLSearchParams: URLSearchParamsConstructor
        });

        // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
        // https://github.com/zloirock/core-js/issues/674
        if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
          $({
            global: true,
            enumerable: true,
            forced: true
          }, {
            fetch: function fetch(input /* , init */) {
              var args = [input];
              var init, body, headers;
              if (arguments.length > 1) {
                init = arguments[1];
                if (isObject(init)) {
                  body = init.body;
                  if (classof(body) === URL_SEARCH_PARAMS) {
                    headers = init.headers ? new Headers(init.headers) : new Headers();
                    if (!headers.has('content-type')) {
                      headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    }
                    init = create(init, {
                      body: createPropertyDescriptor(0, String(body)),
                      headers: createPropertyDescriptor(0, headers)
                    });
                  }
                }
                args.push(init);
              }
              return $fetch.apply(this, args);
            }
          });
        }
        module.exports = {
          URLSearchParams: URLSearchParamsConstructor,
          getState: getInternalParamsState
        };

        /***/
      }),
      /***/285: (/***/function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_213265__) {
        "use strict";

        // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
        __nested_webpack_require_213265__(8783);
        var $ = __nested_webpack_require_213265__(2109);
        var DESCRIPTORS = __nested_webpack_require_213265__(9781);
        var USE_NATIVE_URL = __nested_webpack_require_213265__(590);
        var global = __nested_webpack_require_213265__(7854);
        var defineProperties = __nested_webpack_require_213265__(6048);
        var redefine = __nested_webpack_require_213265__(1320);
        var anInstance = __nested_webpack_require_213265__(5787);
        var has = __nested_webpack_require_213265__(6656);
        var assign = __nested_webpack_require_213265__(1574);
        var arrayFrom = __nested_webpack_require_213265__(8457);
        var codeAt = __nested_webpack_require_213265__(8710).codeAt;
        var toASCII = __nested_webpack_require_213265__(3197);
        var setToStringTag = __nested_webpack_require_213265__(8003);
        var URLSearchParamsModule = __nested_webpack_require_213265__(1637);
        var InternalStateModule = __nested_webpack_require_213265__(9909);
        var NativeURL = global.URL;
        var URLSearchParams = URLSearchParamsModule.URLSearchParams;
        var getInternalSearchParamsState = URLSearchParamsModule.getState;
        var setInternalState = InternalStateModule.set;
        var getInternalURLState = InternalStateModule.getterFor('URL');
        var floor = Math.floor;
        var pow = Math.pow;
        var INVALID_AUTHORITY = 'Invalid authority';
        var INVALID_SCHEME = 'Invalid scheme';
        var INVALID_HOST = 'Invalid host';
        var INVALID_PORT = 'Invalid port';
        var ALPHA = /[A-Za-z]/;
        var ALPHANUMERIC = /[\d+-.A-Za-z]/;
        var DIGIT = /\d/;
        var HEX_START = /^(0x|0X)/;
        var OCT = /^[0-7]+$/;
        var DEC = /^\d+$/;
        var HEX = /^[\dA-Fa-f]+$/;
        /* eslint-disable no-control-regex -- safe */
        var FORBIDDEN_HOST_CODE_POINT = /[\u0000\t\u000A\u000D #%/:?@[\\]]/;
        var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\t\u000A\u000D #/:?@[\\]]/;
        var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
        var TAB_AND_NEW_LINE = /[\t\u000A\u000D]/g;
        /* eslint-enable no-control-regex -- safe */
        var EOF;
        var parseHost = function (url, input) {
          var result, codePoints, index;
          if (input.charAt(0) == '[') {
            if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
            result = parseIPv6(input.slice(1, -1));
            if (!result) return INVALID_HOST;
            url.host = result;
            // opaque host
          } else if (!isSpecial(url)) {
            if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
            result = '';
            codePoints = arrayFrom(input);
            for (index = 0; index < codePoints.length; index++) {
              result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
            }
            url.host = result;
          } else {
            input = toASCII(input);
            if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
            result = parseIPv4(input);
            if (result === null) return INVALID_HOST;
            url.host = result;
          }
        };
        var parseIPv4 = function (input) {
          var parts = input.split('.');
          var partsLength, numbers, index, part, radix, number, ipv4;
          if (parts.length && parts[parts.length - 1] == '') {
            parts.pop();
          }
          partsLength = parts.length;
          if (partsLength > 4) return input;
          numbers = [];
          for (index = 0; index < partsLength; index++) {
            part = parts[index];
            if (part == '') return input;
            radix = 10;
            if (part.length > 1 && part.charAt(0) == '0') {
              radix = HEX_START.test(part) ? 16 : 8;
              part = part.slice(radix == 8 ? 1 : 2);
            }
            if (part === '') {
              number = 0;
            } else {
              if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
              number = parseInt(part, radix);
            }
            numbers.push(number);
          }
          for (index = 0; index < partsLength; index++) {
            number = numbers[index];
            if (index == partsLength - 1) {
              if (number >= pow(256, 5 - partsLength)) return null;
            } else if (number > 255) return null;
          }
          ipv4 = numbers.pop();
          for (index = 0; index < numbers.length; index++) {
            ipv4 += numbers[index] * pow(256, 3 - index);
          }
          return ipv4;
        };

        // eslint-disable-next-line max-statements -- TODO
        var parseIPv6 = function (input) {
          var address = [0, 0, 0, 0, 0, 0, 0, 0];
          var pieceIndex = 0;
          var compress = null;
          var pointer = 0;
          var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
          var char = function () {
            return input.charAt(pointer);
          };
          if (char() == ':') {
            if (input.charAt(1) != ':') return;
            pointer += 2;
            pieceIndex++;
            compress = pieceIndex;
          }
          while (char()) {
            if (pieceIndex == 8) return;
            if (char() == ':') {
              if (compress !== null) return;
              pointer++;
              pieceIndex++;
              compress = pieceIndex;
              continue;
            }
            value = length = 0;
            while (length < 4 && HEX.test(char())) {
              value = value * 16 + parseInt(char(), 16);
              pointer++;
              length++;
            }
            if (char() == '.') {
              if (length == 0) return;
              pointer -= length;
              if (pieceIndex > 6) return;
              numbersSeen = 0;
              while (char()) {
                ipv4Piece = null;
                if (numbersSeen > 0) {
                  if (char() == '.' && numbersSeen < 4) pointer++;else return;
                }
                if (!DIGIT.test(char())) return;
                while (DIGIT.test(char())) {
                  number = parseInt(char(), 10);
                  if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
                  if (ipv4Piece > 255) return;
                  pointer++;
                }
                address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                numbersSeen++;
                if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
              }
              if (numbersSeen != 4) return;
              break;
            } else if (char() == ':') {
              pointer++;
              if (!char()) return;
            } else if (char()) return;
            address[pieceIndex++] = value;
          }
          if (compress !== null) {
            swaps = pieceIndex - compress;
            pieceIndex = 7;
            while (pieceIndex != 0 && swaps > 0) {
              swap = address[pieceIndex];
              address[pieceIndex--] = address[compress + swaps - 1];
              address[compress + --swaps] = swap;
            }
          } else if (pieceIndex != 8) return;
          return address;
        };
        var findLongestZeroSequence = function (ipv6) {
          var maxIndex = null;
          var maxLength = 1;
          var currStart = null;
          var currLength = 0;
          var index = 0;
          for (; index < 8; index++) {
            if (ipv6[index] !== 0) {
              if (currLength > maxLength) {
                maxIndex = currStart;
                maxLength = currLength;
              }
              currStart = null;
              currLength = 0;
            } else {
              if (currStart === null) currStart = index;
              ++currLength;
            }
          }
          if (currLength > maxLength) {
            maxIndex = currStart;
            maxLength = currLength;
          }
          return maxIndex;
        };
        var serializeHost = function (host) {
          var result, index, compress, ignore0;
          // ipv4
          if (typeof host == 'number') {
            result = [];
            for (index = 0; index < 4; index++) {
              result.unshift(host % 256);
              host = floor(host / 256);
            }
            return result.join('.');
            // ipv6
          } else if (typeof host == 'object') {
            result = '';
            compress = findLongestZeroSequence(host);
            for (index = 0; index < 8; index++) {
              if (ignore0 && host[index] === 0) continue;
              if (ignore0) ignore0 = false;
              if (compress === index) {
                result += index ? ':' : '::';
                ignore0 = true;
              } else {
                result += host[index].toString(16);
                if (index < 7) result += ':';
              }
            }
            return '[' + result + ']';
          }
          return host;
        };
        var C0ControlPercentEncodeSet = {};
        var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
          ' ': 1,
          '"': 1,
          '<': 1,
          '>': 1,
          '`': 1
        });
        var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
          '#': 1,
          '?': 1,
          '{': 1,
          '}': 1
        });
        var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
          '/': 1,
          ':': 1,
          ';': 1,
          '=': 1,
          '@': 1,
          '[': 1,
          '\\': 1,
          ']': 1,
          '^': 1,
          '|': 1
        });
        var percentEncode = function (char, set) {
          var code = codeAt(char, 0);
          return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
        };
        var specialSchemes = {
          ftp: 21,
          file: null,
          http: 80,
          https: 443,
          ws: 80,
          wss: 443
        };
        var isSpecial = function (url) {
          return has(specialSchemes, url.scheme);
        };
        var includesCredentials = function (url) {
          return url.username != '' || url.password != '';
        };
        var cannotHaveUsernamePasswordPort = function (url) {
          return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
        };
        var isWindowsDriveLetter = function (string, normalized) {
          var second;
          return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
        };
        var startsWithWindowsDriveLetter = function (string) {
          var third;
          return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
        };
        var shortenURLsPath = function (url) {
          var path = url.path;
          var pathSize = path.length;
          if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
            path.pop();
          }
        };
        var isSingleDot = function (segment) {
          return segment === '.' || segment.toLowerCase() === '%2e';
        };
        var isDoubleDot = function (segment) {
          segment = segment.toLowerCase();
          return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
        };

        // States:
        var SCHEME_START = {};
        var SCHEME = {};
        var NO_SCHEME = {};
        var SPECIAL_RELATIVE_OR_AUTHORITY = {};
        var PATH_OR_AUTHORITY = {};
        var RELATIVE = {};
        var RELATIVE_SLASH = {};
        var SPECIAL_AUTHORITY_SLASHES = {};
        var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
        var AUTHORITY = {};
        var HOST = {};
        var HOSTNAME = {};
        var PORT = {};
        var FILE = {};
        var FILE_SLASH = {};
        var FILE_HOST = {};
        var PATH_START = {};
        var PATH = {};
        var CANNOT_BE_A_BASE_URL_PATH = {};
        var QUERY = {};
        var FRAGMENT = {};

        // eslint-disable-next-line max-statements -- TODO
        var parseURL = function (url, input, stateOverride, base) {
          var state = stateOverride || SCHEME_START;
          var pointer = 0;
          var buffer = '';
          var seenAt = false;
          var seenBracket = false;
          var seenPasswordToken = false;
          var codePoints, char, bufferCodePoints, failure;
          if (!stateOverride) {
            url.scheme = '';
            url.username = '';
            url.password = '';
            url.host = null;
            url.port = null;
            url.path = [];
            url.query = null;
            url.fragment = null;
            url.cannotBeABaseURL = false;
            input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
          }
          input = input.replace(TAB_AND_NEW_LINE, '');
          codePoints = arrayFrom(input);
          while (pointer <= codePoints.length) {
            char = codePoints[pointer];
            switch (state) {
              case SCHEME_START:
                if (char && ALPHA.test(char)) {
                  buffer += char.toLowerCase();
                  state = SCHEME;
                } else if (!stateOverride) {
                  state = NO_SCHEME;
                  continue;
                } else return INVALID_SCHEME;
                break;
              case SCHEME:
                if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
                  buffer += char.toLowerCase();
                } else if (char == ':') {
                  if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host)) return;
                  url.scheme = buffer;
                  if (stateOverride) {
                    if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
                    return;
                  }
                  buffer = '';
                  if (url.scheme == 'file') {
                    state = FILE;
                  } else if (isSpecial(url) && base && base.scheme == url.scheme) {
                    state = SPECIAL_RELATIVE_OR_AUTHORITY;
                  } else if (isSpecial(url)) {
                    state = SPECIAL_AUTHORITY_SLASHES;
                  } else if (codePoints[pointer + 1] == '/') {
                    state = PATH_OR_AUTHORITY;
                    pointer++;
                  } else {
                    url.cannotBeABaseURL = true;
                    url.path.push('');
                    state = CANNOT_BE_A_BASE_URL_PATH;
                  }
                } else if (!stateOverride) {
                  buffer = '';
                  state = NO_SCHEME;
                  pointer = 0;
                  continue;
                } else return INVALID_SCHEME;
                break;
              case NO_SCHEME:
                if (!base || base.cannotBeABaseURL && char != '#') return INVALID_SCHEME;
                if (base.cannotBeABaseURL && char == '#') {
                  url.scheme = base.scheme;
                  url.path = base.path.slice();
                  url.query = base.query;
                  url.fragment = '';
                  url.cannotBeABaseURL = true;
                  state = FRAGMENT;
                  break;
                }
                state = base.scheme == 'file' ? FILE : RELATIVE;
                continue;
              case SPECIAL_RELATIVE_OR_AUTHORITY:
                if (char == '/' && codePoints[pointer + 1] == '/') {
                  state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                  pointer++;
                } else {
                  state = RELATIVE;
                  continue;
                }
                break;
              case PATH_OR_AUTHORITY:
                if (char == '/') {
                  state = AUTHORITY;
                  break;
                } else {
                  state = PATH;
                  continue;
                }
              case RELATIVE:
                url.scheme = base.scheme;
                if (char == EOF) {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = base.path.slice();
                  url.query = base.query;
                } else if (char == '/' || char == '\\' && isSpecial(url)) {
                  state = RELATIVE_SLASH;
                } else if (char == '?') {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = base.path.slice();
                  url.query = '';
                  state = QUERY;
                } else if (char == '#') {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = base.path.slice();
                  url.query = base.query;
                  url.fragment = '';
                  state = FRAGMENT;
                } else {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = base.path.slice();
                  url.path.pop();
                  state = PATH;
                  continue;
                }
                break;
              case RELATIVE_SLASH:
                if (isSpecial(url) && (char == '/' || char == '\\')) {
                  state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                } else if (char == '/') {
                  state = AUTHORITY;
                } else {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  state = PATH;
                  continue;
                }
                break;
              case SPECIAL_AUTHORITY_SLASHES:
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
                pointer++;
                break;
              case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                if (char != '/' && char != '\\') {
                  state = AUTHORITY;
                  continue;
                }
                break;
              case AUTHORITY:
                if (char == '@') {
                  if (seenAt) buffer = '%40' + buffer;
                  seenAt = true;
                  bufferCodePoints = arrayFrom(buffer);
                  for (var i = 0; i < bufferCodePoints.length; i++) {
                    var codePoint = bufferCodePoints[i];
                    if (codePoint == ':' && !seenPasswordToken) {
                      seenPasswordToken = true;
                      continue;
                    }
                    var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                    if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
                  }
                  buffer = '';
                } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
                  if (seenAt && buffer == '') return INVALID_AUTHORITY;
                  pointer -= arrayFrom(buffer).length + 1;
                  buffer = '';
                  state = HOST;
                } else buffer += char;
                break;
              case HOST:
              case HOSTNAME:
                if (stateOverride && url.scheme == 'file') {
                  state = FILE_HOST;
                  continue;
                } else if (char == ':' && !seenBracket) {
                  if (buffer == '') return INVALID_HOST;
                  failure = parseHost(url, buffer);
                  if (failure) return failure;
                  buffer = '';
                  state = PORT;
                  if (stateOverride == HOSTNAME) return;
                } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
                  if (isSpecial(url) && buffer == '') return INVALID_HOST;
                  if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
                  failure = parseHost(url, buffer);
                  if (failure) return failure;
                  buffer = '';
                  state = PATH_START;
                  if (stateOverride) return;
                  continue;
                } else {
                  if (char == '[') seenBracket = true;else if (char == ']') seenBracket = false;
                  buffer += char;
                }
                break;
              case PORT:
                if (DIGIT.test(char)) {
                  buffer += char;
                } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url) || stateOverride) {
                  if (buffer != '') {
                    var port = parseInt(buffer, 10);
                    if (port > 0xFFFF) return INVALID_PORT;
                    url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
                    buffer = '';
                  }
                  if (stateOverride) return;
                  state = PATH_START;
                  continue;
                } else return INVALID_PORT;
                break;
              case FILE:
                url.scheme = 'file';
                if (char == '/' || char == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
                  if (char == EOF) {
                    url.host = base.host;
                    url.path = base.path.slice();
                    url.query = base.query;
                  } else if (char == '?') {
                    url.host = base.host;
                    url.path = base.path.slice();
                    url.query = '';
                    state = QUERY;
                  } else if (char == '#') {
                    url.host = base.host;
                    url.path = base.path.slice();
                    url.query = base.query;
                    url.fragment = '';
                    state = FRAGMENT;
                  } else {
                    if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                      url.host = base.host;
                      url.path = base.path.slice();
                      shortenURLsPath(url);
                    }
                    state = PATH;
                    continue;
                  }
                } else {
                  state = PATH;
                  continue;
                }
                break;
              case FILE_SLASH:
                if (char == '/' || char == '\\') {
                  state = FILE_HOST;
                  break;
                }
                if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                  if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);else url.host = base.host;
                }
                state = PATH;
                continue;
              case FILE_HOST:
                if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
                  if (!stateOverride && isWindowsDriveLetter(buffer)) {
                    state = PATH;
                  } else if (buffer == '') {
                    url.host = '';
                    if (stateOverride) return;
                    state = PATH_START;
                  } else {
                    failure = parseHost(url, buffer);
                    if (failure) return failure;
                    if (url.host == 'localhost') url.host = '';
                    if (stateOverride) return;
                    buffer = '';
                    state = PATH_START;
                  }
                  continue;
                } else buffer += char;
                break;
              case PATH_START:
                if (isSpecial(url)) {
                  state = PATH;
                  if (char != '/' && char != '\\') continue;
                } else if (!stateOverride && char == '?') {
                  url.query = '';
                  state = QUERY;
                } else if (!stateOverride && char == '#') {
                  url.fragment = '';
                  state = FRAGMENT;
                } else if (char != EOF) {
                  state = PATH;
                  if (char != '/') continue;
                }
                break;
              case PATH:
                if (char == EOF || char == '/' || char == '\\' && isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
                  if (isDoubleDot(buffer)) {
                    shortenURLsPath(url);
                    if (char != '/' && !(char == '\\' && isSpecial(url))) {
                      url.path.push('');
                    }
                  } else if (isSingleDot(buffer)) {
                    if (char != '/' && !(char == '\\' && isSpecial(url))) {
                      url.path.push('');
                    }
                  } else {
                    if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                      if (url.host) url.host = '';
                      buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
                    }
                    url.path.push(buffer);
                  }
                  buffer = '';
                  if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
                    while (url.path.length > 1 && url.path[0] === '') {
                      url.path.shift();
                    }
                  }
                  if (char == '?') {
                    url.query = '';
                    state = QUERY;
                  } else if (char == '#') {
                    url.fragment = '';
                    state = FRAGMENT;
                  }
                } else {
                  buffer += percentEncode(char, pathPercentEncodeSet);
                }
                break;
              case CANNOT_BE_A_BASE_URL_PATH:
                if (char == '?') {
                  url.query = '';
                  state = QUERY;
                } else if (char == '#') {
                  url.fragment = '';
                  state = FRAGMENT;
                } else if (char != EOF) {
                  url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
                }
                break;
              case QUERY:
                if (!stateOverride && char == '#') {
                  url.fragment = '';
                  state = FRAGMENT;
                } else if (char != EOF) {
                  if (char == "'" && isSpecial(url)) url.query += '%27';else if (char == '#') url.query += '%23';else url.query += percentEncode(char, C0ControlPercentEncodeSet);
                }
                break;
              case FRAGMENT:
                if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
                break;
            }
            pointer++;
          }
        };

        // `URL` constructor
        // https://url.spec.whatwg.org/#url-class
        var URLConstructor = function URL(url /* , base */) {
          var that = anInstance(this, URLConstructor, 'URL');
          var base = arguments.length > 1 ? arguments[1] : undefined;
          var urlString = String(url);
          var state = setInternalState(that, {
            type: 'URL'
          });
          var baseState, failure;
          if (base !== undefined) {
            if (base instanceof URLConstructor) baseState = getInternalURLState(base);else {
              failure = parseURL(baseState = {}, String(base));
              if (failure) throw TypeError(failure);
            }
          }
          failure = parseURL(state, urlString, null, baseState);
          if (failure) throw TypeError(failure);
          var searchParams = state.searchParams = new URLSearchParams();
          var searchParamsState = getInternalSearchParamsState(searchParams);
          searchParamsState.updateSearchParams(state.query);
          searchParamsState.updateURL = function () {
            state.query = String(searchParams) || null;
          };
          if (!DESCRIPTORS) {
            that.href = serializeURL.call(that);
            that.origin = getOrigin.call(that);
            that.protocol = getProtocol.call(that);
            that.username = getUsername.call(that);
            that.password = getPassword.call(that);
            that.host = getHost.call(that);
            that.hostname = getHostname.call(that);
            that.port = getPort.call(that);
            that.pathname = getPathname.call(that);
            that.search = getSearch.call(that);
            that.searchParams = getSearchParams.call(that);
            that.hash = getHash.call(that);
          }
        };
        var URLPrototype = URLConstructor.prototype;
        var serializeURL = function () {
          var url = getInternalURLState(this);
          var scheme = url.scheme;
          var username = url.username;
          var password = url.password;
          var host = url.host;
          var port = url.port;
          var path = url.path;
          var query = url.query;
          var fragment = url.fragment;
          var output = scheme + ':';
          if (host !== null) {
            output += '//';
            if (includesCredentials(url)) {
              output += username + (password ? ':' + password : '') + '@';
            }
            output += serializeHost(host);
            if (port !== null) output += ':' + port;
          } else if (scheme == 'file') output += '//';
          output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
          if (query !== null) output += '?' + query;
          if (fragment !== null) output += '#' + fragment;
          return output;
        };
        var getOrigin = function () {
          var url = getInternalURLState(this);
          var scheme = url.scheme;
          var port = url.port;
          if (scheme == 'blob') try {
            return new URL(scheme.path[0]).origin;
          } catch (error) {
            return 'null';
          }
          if (scheme == 'file' || !isSpecial(url)) return 'null';
          return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
        };
        var getProtocol = function () {
          return getInternalURLState(this).scheme + ':';
        };
        var getUsername = function () {
          return getInternalURLState(this).username;
        };
        var getPassword = function () {
          return getInternalURLState(this).password;
        };
        var getHost = function () {
          var url = getInternalURLState(this);
          var host = url.host;
          var port = url.port;
          return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
        };
        var getHostname = function () {
          var host = getInternalURLState(this).host;
          return host === null ? '' : serializeHost(host);
        };
        var getPort = function () {
          var port = getInternalURLState(this).port;
          return port === null ? '' : String(port);
        };
        var getPathname = function () {
          var url = getInternalURLState(this);
          var path = url.path;
          return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
        };
        var getSearch = function () {
          var query = getInternalURLState(this).query;
          return query ? '?' + query : '';
        };
        var getSearchParams = function () {
          return getInternalURLState(this).searchParams;
        };
        var getHash = function () {
          var fragment = getInternalURLState(this).fragment;
          return fragment ? '#' + fragment : '';
        };
        var accessorDescriptor = function (getter, setter) {
          return {
            get: getter,
            set: setter,
            configurable: true,
            enumerable: true
          };
        };
        if (DESCRIPTORS) {
          defineProperties(URLPrototype, {
            // `URL.prototype.href` accessors pair
            // https://url.spec.whatwg.org/#dom-url-href
            href: accessorDescriptor(serializeURL, function (href) {
              var url = getInternalURLState(this);
              var urlString = String(href);
              var failure = parseURL(url, urlString);
              if (failure) throw TypeError(failure);
              getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
            }),
            // `URL.prototype.origin` getter
            // https://url.spec.whatwg.org/#dom-url-origin
            origin: accessorDescriptor(getOrigin),
            // `URL.prototype.protocol` accessors pair
            // https://url.spec.whatwg.org/#dom-url-protocol
            protocol: accessorDescriptor(getProtocol, function (protocol) {
              var url = getInternalURLState(this);
              parseURL(url, String(protocol) + ':', SCHEME_START);
            }),
            // `URL.prototype.username` accessors pair
            // https://url.spec.whatwg.org/#dom-url-username
            username: accessorDescriptor(getUsername, function (username) {
              var url = getInternalURLState(this);
              var codePoints = arrayFrom(String(username));
              if (cannotHaveUsernamePasswordPort(url)) return;
              url.username = '';
              for (var i = 0; i < codePoints.length; i++) {
                url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
              }
            }),
            // `URL.prototype.password` accessors pair
            // https://url.spec.whatwg.org/#dom-url-password
            password: accessorDescriptor(getPassword, function (password) {
              var url = getInternalURLState(this);
              var codePoints = arrayFrom(String(password));
              if (cannotHaveUsernamePasswordPort(url)) return;
              url.password = '';
              for (var i = 0; i < codePoints.length; i++) {
                url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
              }
            }),
            // `URL.prototype.host` accessors pair
            // https://url.spec.whatwg.org/#dom-url-host
            host: accessorDescriptor(getHost, function (host) {
              var url = getInternalURLState(this);
              if (url.cannotBeABaseURL) return;
              parseURL(url, String(host), HOST);
            }),
            // `URL.prototype.hostname` accessors pair
            // https://url.spec.whatwg.org/#dom-url-hostname
            hostname: accessorDescriptor(getHostname, function (hostname) {
              var url = getInternalURLState(this);
              if (url.cannotBeABaseURL) return;
              parseURL(url, String(hostname), HOSTNAME);
            }),
            // `URL.prototype.port` accessors pair
            // https://url.spec.whatwg.org/#dom-url-port
            port: accessorDescriptor(getPort, function (port) {
              var url = getInternalURLState(this);
              if (cannotHaveUsernamePasswordPort(url)) return;
              port = String(port);
              if (port == '') url.port = null;else parseURL(url, port, PORT);
            }),
            // `URL.prototype.pathname` accessors pair
            // https://url.spec.whatwg.org/#dom-url-pathname
            pathname: accessorDescriptor(getPathname, function (pathname) {
              var url = getInternalURLState(this);
              if (url.cannotBeABaseURL) return;
              url.path = [];
              parseURL(url, pathname + '', PATH_START);
            }),
            // `URL.prototype.search` accessors pair
            // https://url.spec.whatwg.org/#dom-url-search
            search: accessorDescriptor(getSearch, function (search) {
              var url = getInternalURLState(this);
              search = String(search);
              if (search == '') {
                url.query = null;
              } else {
                if ('?' == search.charAt(0)) search = search.slice(1);
                url.query = '';
                parseURL(url, search, QUERY);
              }
              getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
            }),
            // `URL.prototype.searchParams` getter
            // https://url.spec.whatwg.org/#dom-url-searchparams
            searchParams: accessorDescriptor(getSearchParams),
            // `URL.prototype.hash` accessors pair
            // https://url.spec.whatwg.org/#dom-url-hash
            hash: accessorDescriptor(getHash, function (hash) {
              var url = getInternalURLState(this);
              hash = String(hash);
              if (hash == '') {
                url.fragment = null;
                return;
              }
              if ('#' == hash.charAt(0)) hash = hash.slice(1);
              url.fragment = '';
              parseURL(url, hash, FRAGMENT);
            })
          });
        }

        // `URL.prototype.toJSON` method
        // https://url.spec.whatwg.org/#dom-url-tojson
        redefine(URLPrototype, 'toJSON', function toJSON() {
          return serializeURL.call(this);
        }, {
          enumerable: true
        });

        // `URL.prototype.toString` method
        // https://url.spec.whatwg.org/#URL-stringification-behavior
        redefine(URLPrototype, 'toString', function toString() {
          return serializeURL.call(this);
        }, {
          enumerable: true
        });
        if (NativeURL) {
          var nativeCreateObjectURL = NativeURL.createObjectURL;
          var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
          // `URL.createObjectURL` method
          // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
            return nativeCreateObjectURL.apply(NativeURL, arguments);
          });
          // `URL.revokeObjectURL` method
          // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
            return nativeRevokeObjectURL.apply(NativeURL, arguments);
          });
        }
        setToStringTag(URLConstructor, 'URL');
        $({
          global: true,
          forced: !USE_NATIVE_URL,
          sham: !DESCRIPTORS
        }, {
          URL: URLConstructor
        });

        /***/
      })

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __nested_webpack_require_253329__(moduleId) {
      /******/ // Check if module is in cache
      /******/if (__webpack_module_cache__[moduleId]) {
        /******/return __webpack_module_cache__[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = __webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_253329__);
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/
    !function () {
      /******/ // define getter functions for harmony exports
      /******/__nested_webpack_require_253329__.d = function (exports, definition) {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_253329__.o(definition, key) && !__nested_webpack_require_253329__.o(exports, key)) {
            /******/Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    }();
    /******/
    /******/ /* webpack/runtime/global */
    /******/
    !function () {
      /******/__nested_webpack_require_253329__.g = function () {
        /******/if (typeof globalThis === 'object') return globalThis;
        /******/
        try {
          /******/return this || new Function('return this')();
          /******/
        } catch (e) {
          /******/if (typeof window === 'object') return window;
          /******/
        }
        /******/
      }();
      /******/
    }();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    !function () {
      /******/__nested_webpack_require_253329__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
      /******/
    }();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    !function () {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_253329__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
    }();
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    !function () {
      "use strict";

      // ESM COMPAT FLAG
      __nested_webpack_require_253329__.r(__nested_webpack_exports__);

      // EXPORTS
      __nested_webpack_require_253329__.d(__nested_webpack_exports__, {
        "Dropzone": function () {
          return /* reexport */Dropzone;
        },
        "default": function () {
          return /* binding */dropzone_dist;
        }
      });

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
      var es_array_concat = __nested_webpack_require_253329__(2222);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
      var es_array_filter = __nested_webpack_require_253329__(7327);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
      var es_array_index_of = __nested_webpack_require_253329__(2772);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
      var es_array_iterator = __nested_webpack_require_253329__(6992);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
      var es_array_map = __nested_webpack_require_253329__(1249);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
      var es_array_slice = __nested_webpack_require_253329__(7042);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
      var es_array_splice = __nested_webpack_require_253329__(561);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.constructor.js
      var es_array_buffer_constructor = __nested_webpack_require_253329__(8264);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
      var es_function_name = __nested_webpack_require_253329__(8309);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
      var es_object_get_prototype_of = __nested_webpack_require_253329__(489);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
      var es_object_to_string = __nested_webpack_require_253329__(1539);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
      var es_regexp_exec = __nested_webpack_require_253329__(4916);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
      var es_regexp_to_string = __nested_webpack_require_253329__(9714);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
      var es_string_iterator = __nested_webpack_require_253329__(8783);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
      var es_string_match = __nested_webpack_require_253329__(4723);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
      var es_string_replace = __nested_webpack_require_253329__(5306);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
      var es_string_split = __nested_webpack_require_253329__(3123);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
      var es_string_trim = __nested_webpack_require_253329__(3210);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
      var es_typed_array_uint8_array = __nested_webpack_require_253329__(2472);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
      var es_typed_array_copy_within = __nested_webpack_require_253329__(2990);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
      var es_typed_array_every = __nested_webpack_require_253329__(8927);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
      var es_typed_array_fill = __nested_webpack_require_253329__(3105);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
      var es_typed_array_filter = __nested_webpack_require_253329__(5035);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
      var es_typed_array_find = __nested_webpack_require_253329__(4345);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
      var es_typed_array_find_index = __nested_webpack_require_253329__(7174);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
      var es_typed_array_for_each = __nested_webpack_require_253329__(2846);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
      var es_typed_array_includes = __nested_webpack_require_253329__(4731);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
      var es_typed_array_index_of = __nested_webpack_require_253329__(7209);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
      var es_typed_array_iterator = __nested_webpack_require_253329__(6319);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
      var es_typed_array_join = __nested_webpack_require_253329__(8867);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
      var es_typed_array_last_index_of = __nested_webpack_require_253329__(7789);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
      var es_typed_array_map = __nested_webpack_require_253329__(3739);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
      var es_typed_array_reduce = __nested_webpack_require_253329__(9368);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
      var es_typed_array_reduce_right = __nested_webpack_require_253329__(4483);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
      var es_typed_array_reverse = __nested_webpack_require_253329__(2056);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
      var es_typed_array_set = __nested_webpack_require_253329__(3462);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
      var es_typed_array_slice = __nested_webpack_require_253329__(678);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
      var es_typed_array_some = __nested_webpack_require_253329__(7462);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
      var es_typed_array_sort = __nested_webpack_require_253329__(3824);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
      var es_typed_array_subarray = __nested_webpack_require_253329__(5021);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
      var es_typed_array_to_locale_string = __nested_webpack_require_253329__(2974);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
      var es_typed_array_to_string = __nested_webpack_require_253329__(5016);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
      var web_dom_collections_for_each = __nested_webpack_require_253329__(4747);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
      var web_dom_collections_iterator = __nested_webpack_require_253329__(3948);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
      var web_url = __nested_webpack_require_253329__(285);
      ; // CONCATENATED MODULE: ./src/emitter.js

      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it;
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = o[Symbol.iterator]();
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      // The Emitter class provides the ability to call `.on()` on Dropzone to listen
      // to events.
      // It is strongly based on component's emitter class, and I removed the
      // functionality because of the dependency hell with different frameworks.
      var Emitter = /*#__PURE__*/function () {
        function Emitter() {
          _classCallCheck(this, Emitter);
        }
        _createClass(Emitter, [{
          key: "on",
          value:
          // Add an event listener for given event
          function on(event, fn) {
            this._callbacks = this._callbacks || {}; // Create namespace for this event

            if (!this._callbacks[event]) {
              this._callbacks[event] = [];
            }
            this._callbacks[event].push(fn);
            return this;
          }
        }, {
          key: "emit",
          value: function emit(event) {
            this._callbacks = this._callbacks || {};
            var callbacks = this._callbacks[event];
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            if (callbacks) {
              var _iterator = _createForOfIteratorHelper(callbacks, true),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var callback = _step.value;
                  callback.apply(this, args);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } // trigger a corresponding DOM event

            if (this.element) {
              this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
                args: args
              }));
            }
            return this;
          }
        }, {
          key: "makeEvent",
          value: function makeEvent(eventName, detail) {
            var params = {
              bubbles: true,
              cancelable: true,
              detail: detail
            };
            if (typeof window.CustomEvent === "function") {
              return new CustomEvent(eventName, params);
            } else {
              // IE 11 support
              // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
              var evt = document.createEvent("CustomEvent");
              evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
              return evt;
            }
          } // Remove event listener for given event. If fn is not provided, all event
          // listeners for that event will be removed. If neither is provided, all
          // event listeners will be removed.
        }, {
          key: "off",
          value: function off(event, fn) {
            if (!this._callbacks || arguments.length === 0) {
              this._callbacks = {};
              return this;
            } // specific event

            var callbacks = this._callbacks[event];
            if (!callbacks) {
              return this;
            } // remove all handlers

            if (arguments.length === 1) {
              delete this._callbacks[event];
              return this;
            } // remove specific handler

            for (var i = 0; i < callbacks.length; i++) {
              var callback = callbacks[i];
              if (callback === fn) {
                callbacks.splice(i, 1);
                break;
              }
            }
            return this;
          }
        }]);
        return Emitter;
      }();
      ; // CONCATENATED MODULE: ./src/preview-template.html
      // Module
      var code = "<div class=\"dz-preview dz-file-preview\"> <div class=\"dz-image\"><img data-dz-thumbnail/></div> <div class=\"dz-details\"> <div class=\"dz-size\"><span data-dz-size></span></div> <div class=\"dz-filename\"><span data-dz-name></span></div> </div> <div class=\"dz-progress\"> <span class=\"dz-upload\" data-dz-uploadprogress></span> </div> <div class=\"dz-error-message\"><span data-dz-errormessage></span></div> <div class=\"dz-success-mark\"> <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <title>Check</title> <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\"></path> </g> </svg> </div> <div class=\"dz-error-mark\"> <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <title>Error</title> <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\"> <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\"></path> </g> </g> </svg> </div> </div> ";
      // Exports
      /* harmony default export */
      var preview_template = code;
      ; // CONCATENATED MODULE: ./src/options.js

      function options_createForOfIteratorHelper(o, allowArrayLike) {
        var it;
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (it = options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = o[Symbol.iterator]();
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }
      function options_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return options_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return options_arrayLikeToArray(o, minLen);
      }
      function options_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      var defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,
        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",
        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,
        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         * If set to null or 0, no timeout is going to be set.
         */
        timeout: null,
        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads documentation section for more info)
         */
        parallelUploads: 2,
        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,
        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,
        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,
        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,
        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,
        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,
        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,
        /**
         * The maximum filesize (in bytes) that is allowed to be uploaded.
         */
        maxFilesize: 256,
        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",
        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,
        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,
        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,
        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,
        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: "crop",
        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,
        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,
        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,
        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,
        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: "contain",
        /**
         * The base that is used to calculate the **displayed** filesize. You can
         * change this to 1024 if you would rather display kibibytes, mebibytes,
         * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
         * not `1 kilobyte`. You can change this to `1024` if you don't care about
         * validity.
         */
        filesizeBase: 1000,
        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual
         * feedback.
         */
        maxFiles: null,
        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,
        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,
        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,
        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,
        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,
        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,
        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,
        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,
        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,
        /**
         * Set this to `true` if you don't want previews to be shown.
         */
        disablePreviews: false,
        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         *
         * Can be a selector string, or an element directly.
         */
        hiddenInputContainer: "body",
        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,
        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,
        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,
        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,
        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",
        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",
        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",
        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",
        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",
        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",
        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,
        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",
        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: {
          tb: "TB",
          gb: "GB",
          mb: "MB",
          kb: "KB",
          b: "b"
        },
        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},
        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },
        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },
        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },
        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement;
          this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
          var _iterator = options_createForOfIteratorHelper(this.element.getElementsByTagName("div"), true),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;
              if (/(^| )dz-message($| )/.test(child.className)) {
                messageElement = child;
                child.className = "dz-message"; // Removes the 'dz-default' class

                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (!messageElement) {
            messageElement = Dropzone.createElement('<div class="dz-message"><span></span></div>');
            this.element.appendChild(messageElement);
          }
          var span = messageElement.getElementsByTagName("span")[0];
          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }
          return this.element.appendChild(this.getFallbackForm());
        },
        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };
          var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          } // Make sure images aren't upscaled

          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);
          var trgRatio = width / height;
          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === "crop") {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === "contain") {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
            }
          }
          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;
          info.trgWidth = width;
          info.trgHeight = height;
          return info;
        },
        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },
        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: preview_template,
        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */
        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},
        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },
        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this = this;
          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }
          if (this.previewsContainer && !this.options.disablePreviews) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);
            var _iterator2 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]"), true),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var node = _step2.value;
                node.textContent = file.name;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            var _iterator3 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]"), true),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                node = _step3.value;
                node.innerHTML = this.filesize(file.size);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>".concat(this.options.dictRemoveFile, "</a>"));
              file.previewElement.appendChild(file._removeLink);
            }
            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function () {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function () {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
            var _iterator4 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]"), true),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var removeLink = _step4.value;
                removeLink.addEventListener("click", removeFileEvent);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        },
        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }
          return this._updateMaxFilesReachedClass();
        },
        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            var _iterator5 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]"), true),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var thumbnailElement = _step5.value;
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },
        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");
            if (typeof message !== "string" && message.error) {
              message = message.error;
            }
            var _iterator6 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]"), true),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var node = _step6.value;
                node.textContent = message;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        },
        errormultiple: function errormultiple() {},
        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");
            if (file._removeLink) {
              return file._removeLink.innerHTML = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},
        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            var _iterator7 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), true),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var node = _step7.value;
                node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = "".concat(progress, "%");
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        },
        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},
        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},
        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},
        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},
        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.innerHTML = this.options.dictRemoveFile;
          }
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };
      /* harmony default export */
      var src_options = defaultOptions;
      ; // CONCATENATED MODULE: ./src/dropzone.js
      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }
        return _typeof(obj);
      }
      function dropzone_createForOfIteratorHelper(o, allowArrayLike) {
        var it;
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (it = dropzone_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = o[Symbol.iterator]();
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }
      function dropzone_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return dropzone_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropzone_arrayLikeToArray(o, minLen);
      }
      function dropzone_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function dropzone_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function dropzone_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function dropzone_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) dropzone_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) dropzone_defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }
      var Dropzone = /*#__PURE__*/function (_Emitter) {
        _inherits(Dropzone, _Emitter);
        var _super = _createSuper(Dropzone);
        function Dropzone(el, options) {
          var _this;
          dropzone_classCallCheck(this, Dropzone);
          _this = _super.call(this);
          var fallback, left;
          _this.element = el; // For backwards compatibility since the version was in the prototype previously

          _this.version = Dropzone.version;
          _this.clickableElements = [];
          _this.listeners = [];
          _this.files = []; // All files

          if (typeof _this.element === "string") {
            _this.element = document.querySelector(_this.element);
          } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.

          if (!_this.element || _this.element.nodeType == null) {
            throw new Error("Invalid dropzone element.");
          }
          if (_this.element.dropzone) {
            throw new Error("Dropzone already attached.");
          } // Now add this dropzone to the instances.

          Dropzone.instances.push(_assertThisInitialized(_this)); // Put the dropzone inside the element itself.

          _this.element.dropzone = _assertThisInitialized(_this);
          var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
          _this.options = Dropzone.extend({}, src_options, elementOptions, options != null ? options : {});
          _this.options.previewTemplate = _this.options.previewTemplate.replace(/\n*/g, ""); // If the browser failed, just call the fallback and leave

          if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
            return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
          } // @options.url = @element.getAttribute "action" unless @options.url?

          if (_this.options.url == null) {
            _this.options.url = _this.element.getAttribute("action");
          }
          if (!_this.options.url) {
            throw new Error("No URL provided.");
          }
          if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
            throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
          }
          if (_this.options.uploadMultiple && _this.options.chunking) {
            throw new Error("You cannot set both: uploadMultiple and chunking.");
          } // Backwards compatibility

          if (_this.options.acceptedMimeTypes) {
            _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
            delete _this.options.acceptedMimeTypes;
          } // Backwards compatibility

          if (_this.options.renameFilename != null) {
            _this.options.renameFile = function (file) {
              return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
            };
          }
          if (typeof _this.options.method === "string") {
            _this.options.method = _this.options.method.toUpperCase();
          }
          if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
            // Remove the fallback
            fallback.parentNode.removeChild(fallback);
          } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false

          if (_this.options.previewsContainer !== false) {
            if (_this.options.previewsContainer) {
              _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
            } else {
              _this.previewsContainer = _this.element;
            }
          }
          if (_this.options.clickable) {
            if (_this.options.clickable === true) {
              _this.clickableElements = [_this.element];
            } else {
              _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
            }
          }
          _this.init();
          return _this;
        } // Returns all files that have been accepted

        dropzone_createClass(Dropzone, [{
          key: "getAcceptedFiles",
          value: function getAcceptedFiles() {
            return this.files.filter(function (file) {
              return file.accepted;
            }).map(function (file) {
              return file;
            });
          } // Returns all files that have been rejected
          // Not sure when that's going to be useful, but added for completeness.
        }, {
          key: "getRejectedFiles",
          value: function getRejectedFiles() {
            return this.files.filter(function (file) {
              return !file.accepted;
            }).map(function (file) {
              return file;
            });
          }
        }, {
          key: "getFilesWithStatus",
          value: function getFilesWithStatus(status) {
            return this.files.filter(function (file) {
              return file.status === status;
            }).map(function (file) {
              return file;
            });
          } // Returns all files that are in the queue
        }, {
          key: "getQueuedFiles",
          value: function getQueuedFiles() {
            return this.getFilesWithStatus(Dropzone.QUEUED);
          }
        }, {
          key: "getUploadingFiles",
          value: function getUploadingFiles() {
            return this.getFilesWithStatus(Dropzone.UPLOADING);
          }
        }, {
          key: "getAddedFiles",
          value: function getAddedFiles() {
            return this.getFilesWithStatus(Dropzone.ADDED);
          } // Files that are either queued or uploading
        }, {
          key: "getActiveFiles",
          value: function getActiveFiles() {
            return this.files.filter(function (file) {
              return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
            }).map(function (file) {
              return file;
            });
          } // The function that gets called when Dropzone is initialized. You
          // can (and should) setup event listeners inside this function.
        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            // In case it isn't set already
            if (this.element.tagName === "form") {
              this.element.setAttribute("enctype", "multipart/form-data");
            }
            if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
              this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><button class=\"dz-button\" type=\"button\">".concat(this.options.dictDefaultMessage, "</button></div>")));
            }
            if (this.clickableElements.length) {
              var setupHiddenFileInput = function setupHiddenFileInput() {
                if (_this2.hiddenFileInput) {
                  _this2.hiddenFileInput.parentNode.removeChild(_this2.hiddenFileInput);
                }
                _this2.hiddenFileInput = document.createElement("input");
                _this2.hiddenFileInput.setAttribute("type", "file");
                if (_this2.options.maxFiles === null || _this2.options.maxFiles > 1) {
                  _this2.hiddenFileInput.setAttribute("multiple", "multiple");
                }
                _this2.hiddenFileInput.className = "dz-hidden-input";
                if (_this2.options.acceptedFiles !== null) {
                  _this2.hiddenFileInput.setAttribute("accept", _this2.options.acceptedFiles);
                }
                if (_this2.options.capture !== null) {
                  _this2.hiddenFileInput.setAttribute("capture", _this2.options.capture);
                } // Making sure that no one can "tab" into this field.

                _this2.hiddenFileInput.setAttribute("tabindex", "-1"); // Not setting `display="none"` because some browsers don't accept clicks
                // on elements that aren't displayed.

                _this2.hiddenFileInput.style.visibility = "hidden";
                _this2.hiddenFileInput.style.position = "absolute";
                _this2.hiddenFileInput.style.top = "0";
                _this2.hiddenFileInput.style.left = "0";
                _this2.hiddenFileInput.style.height = "0";
                _this2.hiddenFileInput.style.width = "0";
                Dropzone.getElement(_this2.options.hiddenInputContainer, "hiddenInputContainer").appendChild(_this2.hiddenFileInput);
                _this2.hiddenFileInput.addEventListener("change", function () {
                  var files = _this2.hiddenFileInput.files;
                  if (files.length) {
                    var _iterator = dropzone_createForOfIteratorHelper(files, true),
                      _step;
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var file = _step.value;
                        _this2.addFile(file);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }
                  _this2.emit("addedfiles", files);
                  setupHiddenFileInput();
                });
              };
              setupHiddenFileInput();
            }
            this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
            // They're not in @setupEventListeners() because they shouldn't be removed
            // again when the dropzone gets disabled.

            var _iterator2 = dropzone_createForOfIteratorHelper(this.events, true),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var eventName = _step2.value;
                this.on(eventName, this.options[eventName]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            this.on("uploadprogress", function () {
              return _this2.updateTotalUploadProgress();
            });
            this.on("removedfile", function () {
              return _this2.updateTotalUploadProgress();
            });
            this.on("canceled", function (file) {
              return _this2.emit("complete", file);
            }); // Emit a `queuecomplete` event if all files finished uploading.

            this.on("complete", function (file) {
              if (_this2.getAddedFiles().length === 0 && _this2.getUploadingFiles().length === 0 && _this2.getQueuedFiles().length === 0) {
                // This needs to be deferred so that `queuecomplete` really triggers after `complete`
                return setTimeout(function () {
                  return _this2.emit("queuecomplete");
                }, 0);
              }
            });
            var containsFiles = function containsFiles(e) {
              if (e.dataTransfer.types) {
                // Because e.dataTransfer.types is an Object in
                // IE, we need to iterate like this instead of
                // using e.dataTransfer.types.some()
                for (var i = 0; i < e.dataTransfer.types.length; i++) {
                  if (e.dataTransfer.types[i] === "Files") return true;
                }
              }
              return false;
            };
            var noPropagation = function noPropagation(e) {
              // If there are no files, we don't want to stop
              // propagation so we don't interfere with other
              // drag and drop behaviour.
              if (!containsFiles(e)) return;
              e.stopPropagation();
              if (e.preventDefault) {
                return e.preventDefault();
              } else {
                return e.returnValue = false;
              }
            }; // Create the listeners

            this.listeners = [{
              element: this.element,
              events: {
                dragstart: function dragstart(e) {
                  return _this2.emit("dragstart", e);
                },
                dragenter: function dragenter(e) {
                  noPropagation(e);
                  return _this2.emit("dragenter", e);
                },
                dragover: function dragover(e) {
                  // Makes it possible to drag files from chrome's download bar
                  // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
                  // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
                  var efct;
                  try {
                    efct = e.dataTransfer.effectAllowed;
                  } catch (error) {}
                  e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                  noPropagation(e);
                  return _this2.emit("dragover", e);
                },
                dragleave: function dragleave(e) {
                  return _this2.emit("dragleave", e);
                },
                drop: function drop(e) {
                  noPropagation(e);
                  return _this2.drop(e);
                },
                dragend: function dragend(e) {
                  return _this2.emit("dragend", e);
                }
              } // This is disabled right now, because the browsers don't implement it properly.
              // "paste": (e) =>
              //   noPropagation e
              //   @paste e
            }];
            this.clickableElements.forEach(function (clickableElement) {
              return _this2.listeners.push({
                element: clickableElement,
                events: {
                  click: function click(evt) {
                    // Only the actual dropzone or the message element should trigger file selection
                    if (clickableElement !== _this2.element || evt.target === _this2.element || Dropzone.elementInside(evt.target, _this2.element.querySelector(".dz-message"))) {
                      _this2.hiddenFileInput.click(); // Forward the click
                    }
                    return true;
                  }
                }
              });
            });
            this.enable();
            return this.options.init.call(this);
          } // Not fully tested yet
        }, {
          key: "destroy",
          value: function destroy() {
            this.disable();
            this.removeAllFiles(true);
            if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
              this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
              this.hiddenFileInput = null;
            }
            delete this.element.dropzone;
            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
          }
        }, {
          key: "updateTotalUploadProgress",
          value: function updateTotalUploadProgress() {
            var totalUploadProgress;
            var totalBytesSent = 0;
            var totalBytes = 0;
            var activeFiles = this.getActiveFiles();
            if (activeFiles.length) {
              var _iterator3 = dropzone_createForOfIteratorHelper(this.getActiveFiles(), true),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var file = _step3.value;
                  totalBytesSent += file.upload.bytesSent;
                  totalBytes += file.upload.total;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              totalUploadProgress = 100 * totalBytesSent / totalBytes;
            } else {
              totalUploadProgress = 100;
            }
            return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
          } // @options.paramName can be a function taking one parameter rather than a string.
          // A parameter name for a file is obtained simply by calling this with an index number.
        }, {
          key: "_getParamName",
          value: function _getParamName(n) {
            if (typeof this.options.paramName === "function") {
              return this.options.paramName(n);
            } else {
              return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
            }
          } // If @options.renameFile is a function,
          // the function will be used to rename the file.name before appending it to the formData
        }, {
          key: "_renameFile",
          value: function _renameFile(file) {
            if (typeof this.options.renameFile !== "function") {
              return file.name;
            }
            return this.options.renameFile(file);
          } // Returns a form that can be used as fallback if the browser does not support DragnDrop
          //
          // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
          // This code has to pass in IE7 :(
        }, {
          key: "getFallbackForm",
          value: function getFallbackForm() {
            var existingFallback, form;
            if (existingFallback = this.getExistingFallback()) {
              return existingFallback;
            }
            var fieldsString = '<div class="dz-fallback">';
            if (this.options.dictFallbackText) {
              fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
            }
            fieldsString += "<input type=\"file\" name=\"".concat(this._getParamName(0), "\" ").concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, " /><input type=\"submit\" value=\"Upload!\"></div>");
            var fields = Dropzone.createElement(fieldsString);
            if (this.element.tagName !== "FORM") {
              form = Dropzone.createElement("<form action=\"".concat(this.options.url, "\" enctype=\"multipart/form-data\" method=\"").concat(this.options.method, "\"></form>"));
              form.appendChild(fields);
            } else {
              // Make sure that the enctype and method attributes are set properly
              this.element.setAttribute("enctype", "multipart/form-data");
              this.element.setAttribute("method", this.options.method);
            }
            return form != null ? form : fields;
          } // Returns the fallback elements if they exist already
          //
          // This code has to pass in IE7 :(
        }, {
          key: "getExistingFallback",
          value: function getExistingFallback() {
            var getFallback = function getFallback(elements) {
              var _iterator4 = dropzone_createForOfIteratorHelper(elements, true),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var el = _step4.value;
                  if (/(^| )fallback($| )/.test(el.className)) {
                    return el;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            };
            for (var _i = 0, _arr = ["div", "form"]; _i < _arr.length; _i++) {
              var tagName = _arr[_i];
              var fallback;
              if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                return fallback;
              }
            }
          } // Activates all listeners stored in @listeners
        }, {
          key: "setupEventListeners",
          value: function setupEventListeners() {
            return this.listeners.map(function (elementListeners) {
              return function () {
                var result = [];
                for (var event in elementListeners.events) {
                  var listener = elementListeners.events[event];
                  result.push(elementListeners.element.addEventListener(event, listener, false));
                }
                return result;
              }();
            });
          } // Deactivates all listeners stored in @listeners
        }, {
          key: "removeEventListeners",
          value: function removeEventListeners() {
            return this.listeners.map(function (elementListeners) {
              return function () {
                var result = [];
                for (var event in elementListeners.events) {
                  var listener = elementListeners.events[event];
                  result.push(elementListeners.element.removeEventListener(event, listener, false));
                }
                return result;
              }();
            });
          } // Removes all event listeners and cancels all files in the queue or being processed.
        }, {
          key: "disable",
          value: function disable() {
            var _this3 = this;
            this.clickableElements.forEach(function (element) {
              return element.classList.remove("dz-clickable");
            });
            this.removeEventListeners();
            this.disabled = true;
            return this.files.map(function (file) {
              return _this3.cancelUpload(file);
            });
          }
        }, {
          key: "enable",
          value: function enable() {
            delete this.disabled;
            this.clickableElements.forEach(function (element) {
              return element.classList.add("dz-clickable");
            });
            return this.setupEventListeners();
          } // Returns a nicely formatted filesize
        }, {
          key: "filesize",
          value: function filesize(size) {
            var selectedSize = 0;
            var selectedUnit = "b";
            if (size > 0) {
              var units = ["tb", "gb", "mb", "kb", "b"];
              for (var i = 0; i < units.length; i++) {
                var unit = units[i];
                var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                if (size >= cutoff) {
                  selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                  selectedUnit = unit;
                  break;
                }
              }
              selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
            }
            return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
          } // Adds or removes the `dz-max-files-reached` class from the form.
        }, {
          key: "_updateMaxFilesReachedClass",
          value: function _updateMaxFilesReachedClass() {
            if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
              if (this.getAcceptedFiles().length === this.options.maxFiles) {
                this.emit("maxfilesreached", this.files);
              }
              return this.element.classList.add("dz-max-files-reached");
            } else {
              return this.element.classList.remove("dz-max-files-reached");
            }
          }
        }, {
          key: "drop",
          value: function drop(e) {
            if (!e.dataTransfer) {
              return;
            }
            this.emit("drop", e); // Convert the FileList to an Array
            // This is necessary for IE11

            var files = [];
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
              files[i] = e.dataTransfer.files[i];
            } // Even if it's a folder, files.length will contain the folders.

            if (files.length) {
              var items = e.dataTransfer.items;
              if (items && items.length && items[0].webkitGetAsEntry != null) {
                // The browser supports dropping of folders, so handle items instead of files
                this._addFilesFromItems(items);
              } else {
                this.handleFiles(files);
              }
            }
            this.emit("addedfiles", files);
          }
        }, {
          key: "paste",
          value: function paste(e) {
            if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
              return x.items;
            }) == null) {
              return;
            }
            this.emit("paste", e);
            var items = e.clipboardData.items;
            if (items.length) {
              return this._addFilesFromItems(items);
            }
          }
        }, {
          key: "handleFiles",
          value: function handleFiles(files) {
            var _iterator5 = dropzone_createForOfIteratorHelper(files, true),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var file = _step5.value;
                this.addFile(file);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } // When a folder is dropped (or files are pasted), items must be handled
          // instead of files.
        }, {
          key: "_addFilesFromItems",
          value: function _addFilesFromItems(items) {
            var _this4 = this;
            return function () {
              var result = [];
              var _iterator6 = dropzone_createForOfIteratorHelper(items, true),
                _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var item = _step6.value;
                  var entry;
                  if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) {
                      result.push(_this4.addFile(item.getAsFile()));
                    } else if (entry.isDirectory) {
                      // Append all files from that directory to files
                      result.push(_this4._addFilesFromDirectory(entry, entry.name));
                    } else {
                      result.push(undefined);
                    }
                  } else if (item.getAsFile != null) {
                    if (item.kind == null || item.kind === "file") {
                      result.push(_this4.addFile(item.getAsFile()));
                    } else {
                      result.push(undefined);
                    }
                  } else {
                    result.push(undefined);
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              return result;
            }();
          } // Goes through the directory, and adds each file it finds recursively
        }, {
          key: "_addFilesFromDirectory",
          value: function _addFilesFromDirectory(directory, path) {
            var _this5 = this;
            var dirReader = directory.createReader();
            var errorHandler = function errorHandler(error) {
              return __guardMethod__(console, "log", function (o) {
                return o.log(error);
              });
            };
            var readEntries = function readEntries() {
              return dirReader.readEntries(function (entries) {
                if (entries.length > 0) {
                  var _iterator7 = dropzone_createForOfIteratorHelper(entries, true),
                    _step7;
                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      var entry = _step7.value;
                      if (entry.isFile) {
                        entry.file(function (file) {
                          if (_this5.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") {
                            return;
                          }
                          file.fullPath = "".concat(path, "/").concat(file.name);
                          return _this5.addFile(file);
                        });
                      } else if (entry.isDirectory) {
                        _this5._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                      }
                    } // Recursively call readEntries() again, since browser only handle
                    // the first 100 entries.
                    // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }
                  readEntries();
                }
                return null;
              }, errorHandler);
            };
            return readEntries();
          } // If `done()` is called without argument the file is accepted
          // If you call it with an error message, the file is rejected
          // (This allows for asynchronous validation)
          //
          // This function checks the filesize, and if the file.type passes the
          // `acceptedFiles` check.
        }, {
          key: "accept",
          value: function accept(file, done) {
            if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
              done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
            } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
              done(this.options.dictInvalidFileType);
            } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
              done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
              this.emit("maxfilesexceeded", file);
            } else {
              this.options.accept.call(this, file, done);
            }
          }
        }, {
          key: "addFile",
          value: function addFile(file) {
            var _this6 = this;
            file.upload = {
              uuid: Dropzone.uuidv4(),
              progress: 0,
              // Setting the total upload size to file.size for the beginning
              // It's actual different than the size to be transmitted.
              total: file.size,
              bytesSent: 0,
              filename: this._renameFile(file) // Not setting chunking information here, because the acutal data — and
              // thus the chunks — might change if `options.transformFile` is set
              // and does something to the data.
            };
            this.files.push(file);
            file.status = Dropzone.ADDED;
            this.emit("addedfile", file);
            this._enqueueThumbnail(file);
            this.accept(file, function (error) {
              if (error) {
                file.accepted = false;
                _this6._errorProcessing([file], error); // Will set the file.status
              } else {
                file.accepted = true;
                if (_this6.options.autoQueue) {
                  _this6.enqueueFile(file);
                } // Will set .accepted = true
              }
              _this6._updateMaxFilesReachedClass();
            });
          } // Wrapper for enqueueFile
        }, {
          key: "enqueueFiles",
          value: function enqueueFiles(files) {
            var _iterator8 = dropzone_createForOfIteratorHelper(files, true),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var file = _step8.value;
                this.enqueueFile(file);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
            return null;
          }
        }, {
          key: "enqueueFile",
          value: function enqueueFile(file) {
            var _this7 = this;
            if (file.status === Dropzone.ADDED && file.accepted === true) {
              file.status = Dropzone.QUEUED;
              if (this.options.autoProcessQueue) {
                return setTimeout(function () {
                  return _this7.processQueue();
                }, 0); // Deferring the call
              }
            } else {
              throw new Error("This file can't be queued because it has already been processed or was rejected.");
            }
          }
        }, {
          key: "_enqueueThumbnail",
          value: function _enqueueThumbnail(file) {
            var _this8 = this;
            if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
              this._thumbnailQueue.push(file);
              return setTimeout(function () {
                return _this8._processThumbnailQueue();
              }, 0); // Deferring the call
            }
          }
        }, {
          key: "_processThumbnailQueue",
          value: function _processThumbnailQueue() {
            var _this9 = this;
            if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
              return;
            }
            this._processingThumbnail = true;
            var file = this._thumbnailQueue.shift();
            return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
              _this9.emit("thumbnail", file, dataUrl);
              _this9._processingThumbnail = false;
              return _this9._processThumbnailQueue();
            });
          } // Can be called by the user to remove a file
        }, {
          key: "removeFile",
          value: function removeFile(file) {
            if (file.status === Dropzone.UPLOADING) {
              this.cancelUpload(file);
            }
            this.files = without(this.files, file);
            this.emit("removedfile", file);
            if (this.files.length === 0) {
              return this.emit("reset");
            }
          } // Removes all files that aren't currently processed from the list
        }, {
          key: "removeAllFiles",
          value: function removeAllFiles(cancelIfNecessary) {
            // Create a copy of files since removeFile() changes the @files array.
            if (cancelIfNecessary == null) {
              cancelIfNecessary = false;
            }
            var _iterator9 = dropzone_createForOfIteratorHelper(this.files.slice(), true),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var file = _step9.value;
                if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                  this.removeFile(file);
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
            return null;
          } // Resizes an image before it gets sent to the server. This function is the default behavior of
          // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
          // the resized blob.
        }, {
          key: "resizeImage",
          value: function resizeImage(file, width, height, resizeMethod, callback) {
            var _this10 = this;
            return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
              if (canvas == null) {
                // The image has not been resized
                return callback(file);
              } else {
                var resizeMimeType = _this10.options.resizeMimeType;
                if (resizeMimeType == null) {
                  resizeMimeType = file.type;
                }
                var resizedDataURL = canvas.toDataURL(resizeMimeType, _this10.options.resizeQuality);
                if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") {
                  // Now add the original EXIF information
                  resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
                }
                return callback(Dropzone.dataURItoBlob(resizedDataURL));
              }
            });
          }
        }, {
          key: "createThumbnail",
          value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
            var _this11 = this;
            var fileReader = new FileReader();
            fileReader.onload = function () {
              file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

              if (file.type === "image/svg+xml") {
                if (callback != null) {
                  callback(fileReader.result);
                }
                return;
              }
              _this11.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
            };
            fileReader.readAsDataURL(file);
          } // `mockFile` needs to have these attributes:
          //
          //     { name: 'name', size: 12345, imageUrl: '' }
          //
          // `callback` will be invoked when the image has been downloaded and displayed.
          // `crossOrigin` will be added to the `img` tag when accessing the file.
        }, {
          key: "displayExistingFile",
          value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
            var _this12 = this;
            var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
            this.emit("addedfile", mockFile);
            this.emit("complete", mockFile);
            if (!resizeThumbnail) {
              this.emit("thumbnail", mockFile, imageUrl);
              if (callback) callback();
            } else {
              var onDone = function onDone(thumbnail) {
                _this12.emit("thumbnail", mockFile, thumbnail);
                if (callback) callback();
              };
              mockFile.dataURL = imageUrl;
              this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
            }
          }
        }, {
          key: "createThumbnailFromUrl",
          value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
            var _this13 = this;

            // Not using `new Image` here because of a bug in latest Chrome versions.
            // See https://github.com/enyo/dropzone/pull/226
            var img = document.createElement("img");
            if (crossOrigin) {
              img.crossOrigin = crossOrigin;
            } // fixOrientation is not needed anymore with browsers handling imageOrientation

            fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
            img.onload = function () {
              var loadExif = function loadExif(callback) {
                return callback(1);
              };
              if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) {
                loadExif = function loadExif(callback) {
                  return EXIF.getData(img, function () {
                    return callback(EXIF.getTag(this, "Orientation"));
                  });
                };
              }
              return loadExif(function (orientation) {
                file.width = img.width;
                file.height = img.height;
                var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                canvas.width = resizeInfo.trgWidth;
                canvas.height = resizeInfo.trgHeight;
                if (orientation > 4) {
                  canvas.width = resizeInfo.trgHeight;
                  canvas.height = resizeInfo.trgWidth;
                }
                switch (orientation) {
                  case 2:
                    // horizontal flip
                    ctx.translate(canvas.width, 0);
                    ctx.scale(-1, 1);
                    break;
                  case 3:
                    // 180° rotate left
                    ctx.translate(canvas.width, canvas.height);
                    ctx.rotate(Math.PI);
                    break;
                  case 4:
                    // vertical flip
                    ctx.translate(0, canvas.height);
                    ctx.scale(1, -1);
                    break;
                  case 5:
                    // vertical flip + 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.scale(1, -1);
                    break;
                  case 6:
                    // 90° rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.translate(0, -canvas.width);
                    break;
                  case 7:
                    // horizontal flip + 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.translate(canvas.height, -canvas.width);
                    ctx.scale(-1, 1);
                    break;
                  case 8:
                    // 90° rotate left
                    ctx.rotate(-0.5 * Math.PI);
                    ctx.translate(-canvas.height, 0);
                    break;
                } // This is a bugfix for iOS' scaling bug.

                drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                var thumbnail = canvas.toDataURL("image/png");
                if (callback != null) {
                  return callback(thumbnail, canvas);
                }
              });
            };
            if (callback != null) {
              img.onerror = callback;
            }
            return img.src = file.dataURL;
          } // Goes through the queue and processes files if there aren't too many already.
        }, {
          key: "processQueue",
          value: function processQueue() {
            var parallelUploads = this.options.parallelUploads;
            var processingLength = this.getUploadingFiles().length;
            var i = processingLength; // There are already at least as many files uploading than should be

            if (processingLength >= parallelUploads) {
              return;
            }
            var queuedFiles = this.getQueuedFiles();
            if (!(queuedFiles.length > 0)) {
              return;
            }
            if (this.options.uploadMultiple) {
              // The files should be uploaded in one request
              return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
            } else {
              while (i < parallelUploads) {
                if (!queuedFiles.length) {
                  return;
                } // Nothing left to process

                this.processFile(queuedFiles.shift());
                i++;
              }
            }
          } // Wrapper for `processFiles`
        }, {
          key: "processFile",
          value: function processFile(file) {
            return this.processFiles([file]);
          } // Loads the file, then calls finishedLoading()
        }, {
          key: "processFiles",
          value: function processFiles(files) {
            var _iterator10 = dropzone_createForOfIteratorHelper(files, true),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var file = _step10.value;
                file.processing = true; // Backwards compatibility

                file.status = Dropzone.UPLOADING;
                this.emit("processing", file);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
            if (this.options.uploadMultiple) {
              this.emit("processingmultiple", files);
            }
            return this.uploadFiles(files);
          }
        }, {
          key: "_getFilesWithXhr",
          value: function _getFilesWithXhr(xhr) {
            var files;
            return files = this.files.filter(function (file) {
              return file.xhr === xhr;
            }).map(function (file) {
              return file;
            });
          } // Cancels the file upload and sets the status to CANCELED
          // **if** the file is actually being uploaded.
          // If it's still in the queue, the file is being removed from it and the status
          // set to CANCELED.
        }, {
          key: "cancelUpload",
          value: function cancelUpload(file) {
            if (file.status === Dropzone.UPLOADING) {
              var groupedFiles = this._getFilesWithXhr(file.xhr);
              var _iterator11 = dropzone_createForOfIteratorHelper(groupedFiles, true),
                _step11;
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var groupedFile = _step11.value;
                  groupedFile.status = Dropzone.CANCELED;
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
              if (typeof file.xhr !== "undefined") {
                file.xhr.abort();
              }
              var _iterator12 = dropzone_createForOfIteratorHelper(groupedFiles, true),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _groupedFile = _step12.value;
                  this.emit("canceled", _groupedFile);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
              if (this.options.uploadMultiple) {
                this.emit("canceledmultiple", groupedFiles);
              }
            } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
              file.status = Dropzone.CANCELED;
              this.emit("canceled", file);
              if (this.options.uploadMultiple) {
                this.emit("canceledmultiple", [file]);
              }
            }
            if (this.options.autoProcessQueue) {
              return this.processQueue();
            }
          }
        }, {
          key: "resolveOption",
          value: function resolveOption(option) {
            if (typeof option === "function") {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              return option.apply(this, args);
            }
            return option;
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file) {
            return this.uploadFiles([file]);
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles(files) {
            var _this14 = this;
            this._transformFiles(files, function (transformedFiles) {
              if (_this14.options.chunking) {
                // Chunking is not allowed to be used with `uploadMultiple` so we know
                // that there is only __one__file.
                var transformedFile = transformedFiles[0];
                files[0].upload.chunked = _this14.options.chunking && (_this14.options.forceChunking || transformedFile.size > _this14.options.chunkSize);
                files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this14.options.chunkSize);
              }
              if (files[0].upload.chunked) {
                // This file should be sent in chunks!
                // If the chunking option is set, we **know** that there can only be **one** file, since
                // uploadMultiple is not allowed with this option.
                var file = files[0];
                var _transformedFile = transformedFiles[0];
                var startedChunkCount = 0;
                file.upload.chunks = [];
                var handleNextChunk = function handleNextChunk() {
                  var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

                  while (file.upload.chunks[chunkIndex] !== undefined) {
                    chunkIndex++;
                  } // This means, that all chunks have already been started.

                  if (chunkIndex >= file.upload.totalChunkCount) return;
                  startedChunkCount++;
                  var start = chunkIndex * _this14.options.chunkSize;
                  var end = Math.min(start + _this14.options.chunkSize, _transformedFile.size);
                  var dataBlock = {
                    name: _this14._getParamName(0),
                    data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
                    filename: file.upload.filename,
                    chunkIndex: chunkIndex
                  };
                  file.upload.chunks[chunkIndex] = {
                    file: file,
                    index: chunkIndex,
                    dataBlock: dataBlock,
                    // In case we want to retry.
                    status: Dropzone.UPLOADING,
                    progress: 0,
                    retries: 0 // The number of times this block has been retried.
                  };
                  _this14._uploadData(files, [dataBlock]);
                };
                file.upload.finishedChunkUpload = function (chunk, response) {
                  var allFinished = true;
                  chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

                  chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

                  chunk.xhr = null;
                  for (var i = 0; i < file.upload.totalChunkCount; i++) {
                    if (file.upload.chunks[i] === undefined) {
                      return handleNextChunk();
                    }
                    if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                      allFinished = false;
                    }
                  }
                  if (allFinished) {
                    _this14.options.chunksUploaded(file, function () {
                      _this14._finished(files, response, null);
                    });
                  }
                };
                if (_this14.options.parallelChunkUploads) {
                  for (var i = 0; i < file.upload.totalChunkCount; i++) {
                    handleNextChunk();
                  }
                } else {
                  handleNextChunk();
                }
              } else {
                var dataBlocks = [];
                for (var _i2 = 0; _i2 < files.length; _i2++) {
                  dataBlocks[_i2] = {
                    name: _this14._getParamName(_i2),
                    data: transformedFiles[_i2],
                    filename: files[_i2].upload.filename
                  };
                }
                _this14._uploadData(files, dataBlocks);
              }
            });
          } /// Returns the right chunk for given file and xhr
        }, {
          key: "_getChunk",
          value: function _getChunk(file, xhr) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
                return file.upload.chunks[i];
              }
            }
          } // This function actually uploads the file(s) to the server.
          // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
          // files, or individual chunks for chunked upload).
        }, {
          key: "_uploadData",
          value: function _uploadData(files, dataBlocks) {
            var _this15 = this;
            var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

            var _iterator13 = dropzone_createForOfIteratorHelper(files, true),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var file = _step13.value;
                file.xhr = xhr;
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
            if (files[0].upload.chunked) {
              // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
              files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
            }
            var method = this.resolveOption(this.options.method, files);
            var url = this.resolveOption(this.options.url, files);
            xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

            var timeout = this.resolveOption(this.options.timeout, files);
            if (timeout) xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

            xhr.withCredentials = !!this.options.withCredentials;
            xhr.onload = function (e) {
              _this15._finishedUploading(files, xhr, e);
            };
            xhr.ontimeout = function () {
              _this15._handleUploadError(files, xhr, "Request timedout after ".concat(_this15.options.timeout / 1000, " seconds"));
            };
            xhr.onerror = function () {
              _this15._handleUploadError(files, xhr);
            }; // Some browsers do not have the .upload property

            var progressObj = xhr.upload != null ? xhr.upload : xhr;
            progressObj.onprogress = function (e) {
              return _this15._updateFilesUploadProgress(files, xhr, e);
            };
            var headers = {
              Accept: "application/json",
              "Cache-Control": "no-cache",
              "X-Requested-With": "XMLHttpRequest"
            };
            if (this.options.headers) {
              Dropzone.extend(headers, this.options.headers);
            }
            for (var headerName in headers) {
              var headerValue = headers[headerName];
              if (headerValue) {
                xhr.setRequestHeader(headerName, headerValue);
              }
            }
            var formData = new FormData(); // Adding all @options parameters

            if (this.options.params) {
              var additionalParams = this.options.params;
              if (typeof additionalParams === "function") {
                additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
              }
              for (var key in additionalParams) {
                var value = additionalParams[key];
                if (Array.isArray(value)) {
                  // The additional parameter contains an array,
                  // so lets iterate over it to attach each value
                  // individually.
                  for (var i = 0; i < value.length; i++) {
                    formData.append(key, value[i]);
                  }
                } else {
                  formData.append(key, value);
                }
              }
            } // Let the user add additional data if necessary

            var _iterator14 = dropzone_createForOfIteratorHelper(files, true),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _file = _step14.value;
                this.emit("sending", _file, xhr, formData);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
            if (this.options.uploadMultiple) {
              this.emit("sendingmultiple", files, xhr, formData);
            }
            this._addFormElementData(formData); // Finally add the files
            // Has to be last because some servers (eg: S3) expect the file to be the last parameter

            for (var _i3 = 0; _i3 < dataBlocks.length; _i3++) {
              var dataBlock = dataBlocks[_i3];
              formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
            }
            this.submitRequest(xhr, formData, files);
          } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
        }, {
          key: "_transformFiles",
          value: function _transformFiles(files, done) {
            var _this16 = this;
            var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

            var doneCounter = 0;
            var _loop = function _loop(i) {
              _this16.options.transformFile.call(_this16, files[i], function (transformedFile) {
                transformedFiles[i] = transformedFile;
                if (++doneCounter === files.length) {
                  done(transformedFiles);
                }
              });
            };
            for (var i = 0; i < files.length; i++) {
              _loop(i);
            }
          } // Takes care of adding other input elements of the form to the AJAX request
        }, {
          key: "_addFormElementData",
          value: function _addFormElementData(formData) {
            // Take care of other input elements
            if (this.element.tagName === "FORM") {
              var _iterator15 = dropzone_createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"), true),
                _step15;
              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var input = _step15.value;
                  var inputName = input.getAttribute("name");
                  var inputType = input.getAttribute("type");
                  if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.

                  if (typeof inputName === "undefined" || inputName === null) continue;
                  if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                    // Possibly multiple values
                    var _iterator16 = dropzone_createForOfIteratorHelper(input.options, true),
                      _step16;
                    try {
                      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                        var option = _step16.value;
                        if (option.selected) {
                          formData.append(inputName, option.value);
                        }
                      }
                    } catch (err) {
                      _iterator16.e(err);
                    } finally {
                      _iterator16.f();
                    }
                  } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
                    formData.append(inputName, input.value);
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
          } // Invoked when there is new progress information about given files.
          // If e is not provided, it is assumed that the upload is finished.
        }, {
          key: "_updateFilesUploadProgress",
          value: function _updateFilesUploadProgress(files, xhr, e) {
            if (!files[0].upload.chunked) {
              // Handle file uploads without chunking
              var _iterator17 = dropzone_createForOfIteratorHelper(files, true),
                _step17;
              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var file = _step17.value;
                  if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) {
                    // If both, the `total` and `bytesSent` have already been set, and
                    // they are equal (meaning progress is at 100%), we can skip this
                    // file, since an upload progress shouldn't go down.
                    continue;
                  }
                  if (e) {
                    file.upload.progress = 100 * e.loaded / e.total;
                    file.upload.total = e.total;
                    file.upload.bytesSent = e.loaded;
                  } else {
                    // No event, so we're at 100%
                    file.upload.progress = 100;
                    file.upload.bytesSent = file.upload.total;
                  }
                  this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
            } else {
              // Handle chunked file uploads
              // Chunked upload is not compatible with uploading multiple files in one
              // request, so we know there's only one file.
              var _file2 = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk
              // progress.

              var chunk = this._getChunk(_file2, xhr);
              if (e) {
                chunk.progress = 100 * e.loaded / e.total;
                chunk.total = e.total;
                chunk.bytesSent = e.loaded;
              } else {
                // No event, so we're at 100%
                chunk.progress = 100;
                chunk.bytesSent = chunk.total;
              } // Now tally the *file* upload progress from its individual chunks

              _file2.upload.progress = 0;
              _file2.upload.total = 0;
              _file2.upload.bytesSent = 0;
              for (var i = 0; i < _file2.upload.totalChunkCount; i++) {
                if (_file2.upload.chunks[i] && typeof _file2.upload.chunks[i].progress !== "undefined") {
                  _file2.upload.progress += _file2.upload.chunks[i].progress;
                  _file2.upload.total += _file2.upload.chunks[i].total;
                  _file2.upload.bytesSent += _file2.upload.chunks[i].bytesSent;
                }
              } // Since the process is a percentage, we need to divide by the amount of
              // chunks we've used.

              _file2.upload.progress = _file2.upload.progress / _file2.upload.totalChunkCount;
              this.emit("uploadprogress", _file2, _file2.upload.progress, _file2.upload.bytesSent);
            }
          }
        }, {
          key: "_finishedUploading",
          value: function _finishedUploading(files, xhr, e) {
            var response;
            if (files[0].status === Dropzone.CANCELED) {
              return;
            }
            if (xhr.readyState !== 4) {
              return;
            }
            if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
              response = xhr.responseText;
              if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                try {
                  response = JSON.parse(response);
                } catch (error) {
                  e = error;
                  response = "Invalid JSON response from server.";
                }
              }
            }
            this._updateFilesUploadProgress(files, xhr);
            if (!(200 <= xhr.status && xhr.status < 300)) {
              this._handleUploadError(files, xhr, response);
            } else {
              if (files[0].upload.chunked) {
                files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
              } else {
                this._finished(files, response, e);
              }
            }
          }
        }, {
          key: "_handleUploadError",
          value: function _handleUploadError(files, xhr, response) {
            if (files[0].status === Dropzone.CANCELED) {
              return;
            }
            if (files[0].upload.chunked && this.options.retryChunks) {
              var chunk = this._getChunk(files[0], xhr);
              if (chunk.retries++ < this.options.retryChunksLimit) {
                this._uploadData(files, [chunk.dataBlock]);
                return;
              } else {
                console.warn("Retried this chunk too often. Giving up.");
              }
            }
            this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
          }
        }, {
          key: "submitRequest",
          value: function submitRequest(xhr, formData, files) {
            if (xhr.readyState != 1) {
              console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
              return;
            }
            xhr.send(formData);
          } // Called internally when processing is finished.
          // Individual callbacks have to be called in the appropriate sections.
        }, {
          key: "_finished",
          value: function _finished(files, responseText, e) {
            var _iterator18 = dropzone_createForOfIteratorHelper(files, true),
              _step18;
            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var file = _step18.value;
                file.status = Dropzone.SUCCESS;
                this.emit("success", file, responseText, e);
                this.emit("complete", file);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
            if (this.options.uploadMultiple) {
              this.emit("successmultiple", files, responseText, e);
              this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
              return this.processQueue();
            }
          } // Called internally when processing is finished.
          // Individual callbacks have to be called in the appropriate sections.
        }, {
          key: "_errorProcessing",
          value: function _errorProcessing(files, message, xhr) {
            var _iterator19 = dropzone_createForOfIteratorHelper(files, true),
              _step19;
            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var file = _step19.value;
                file.status = Dropzone.ERROR;
                this.emit("error", file, message, xhr);
                this.emit("complete", file);
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
            if (this.options.uploadMultiple) {
              this.emit("errormultiple", files, message, xhr);
              this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
              return this.processQueue();
            }
          }
        }], [{
          key: "initClass",
          value: function initClass() {
            // Exposing the emitter class, mainly for tests
            this.prototype.Emitter = Emitter;
            /*
             This is a list of all available events you can register on a dropzone object.
              You can register an event handler like this:
              dropzone.on("dragEnter", function() { });
              */

            this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
            this.prototype._thumbnailQueue = [];
            this.prototype._processingThumbnail = false;
          } // global utility
        }, {
          key: "extend",
          value: function extend(target) {
            for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              objects[_key2 - 1] = arguments[_key2];
            }
            for (var _i4 = 0, _objects = objects; _i4 < _objects.length; _i4++) {
              var object = _objects[_i4];
              for (var key in object) {
                var val = object[key];
                target[key] = val;
              }
            }
            return target;
          }
        }, {
          key: "uuidv4",
          value: function uuidv4() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
              var r = Math.random() * 16 | 0,
                v = c === "x" ? r : r & 0x3 | 0x8;
              return v.toString(16);
            });
          }
        }]);
        return Dropzone;
      }(Emitter);
      Dropzone.initClass();
      Dropzone.version = "5.9.3"; // This is a map of options for your different dropzones. Add configurations
      // to this object for your different dropzone elemens.
      //
      // Example:
      //
      //     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
      //
      // To disable autoDiscover for a specific element, you can set `false` as an option:
      //
      //     Dropzone.options.myDisabledElementId = false;
      //
      // And in html:
      //
      //     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

      Dropzone.options = {}; // Returns the options for an element or undefined if none available.

      Dropzone.optionsForElement = function (element) {
        // Get the `Dropzone.options.elementId` for this element if it exists
        if (element.getAttribute("id")) {
          return Dropzone.options[camelize(element.getAttribute("id"))];
        } else {
          return undefined;
        }
      }; // Holds a list of all dropzone instances

      Dropzone.instances = []; // Returns the dropzone for given element if any

      Dropzone.forElement = function (element) {
        if (typeof element === "string") {
          element = document.querySelector(element);
        }
        if ((element != null ? element.dropzone : undefined) == null) {
          throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        }
        return element.dropzone;
      }; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.

      Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

      Dropzone.discover = function () {
        var dropzones;
        if (document.querySelectorAll) {
          dropzones = document.querySelectorAll(".dropzone");
        } else {
          dropzones = []; // IE :(

          var checkElements = function checkElements(elements) {
            return function () {
              var result = [];
              var _iterator20 = dropzone_createForOfIteratorHelper(elements, true),
                _step20;
              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var el = _step20.value;
                  if (/(^| )dropzone($| )/.test(el.className)) {
                    result.push(dropzones.push(el));
                  } else {
                    result.push(undefined);
                  }
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
              return result;
            }();
          };
          checkElements(document.getElementsByTagName("div"));
          checkElements(document.getElementsByTagName("form"));
        }
        return function () {
          var result = [];
          var _iterator21 = dropzone_createForOfIteratorHelper(dropzones, true),
            _step21;
          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var dropzone = _step21.value;

              // Create a dropzone unless auto discover has been disabled for specific element
              if (Dropzone.optionsForElement(dropzone) !== false) {
                result.push(new Dropzone(dropzone));
              } else {
                result.push(undefined);
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
          return result;
        }();
      }; // Some browsers support drag and drog functionality, but not correctly.
      //
      // So I created a blocklist of userAgents. Yes, yes. Browser sniffing, I know.
      // But what to do when browsers *theoretically* support an API, but crash
      // when using it.
      //
      // This is a list of regular expressions tested against navigator.userAgent
      //
      // ** It should only be used on browser that *do* support the API, but
      // incorrectly **

      Dropzone.blockedBrowsers = [
      // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
      /opera.*(Macintosh|Windows Phone).*version\/12/i]; // Checks if the browser is supported

      Dropzone.isBrowserSupported = function () {
        var capableBrowser = true;
        if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
          if (!("classList" in document.createElement("a"))) {
            capableBrowser = false;
          } else {
            if (Dropzone.blacklistedBrowsers !== undefined) {
              // Since this has been renamed, this makes sure we don't break older
              // configuration.
              Dropzone.blockedBrowsers = Dropzone.blacklistedBrowsers;
            } // The browser supports the API, but may be blocked.

            var _iterator22 = dropzone_createForOfIteratorHelper(Dropzone.blockedBrowsers, true),
              _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var regex = _step22.value;
                if (regex.test(navigator.userAgent)) {
                  capableBrowser = false;
                  continue;
                }
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
        } else {
          capableBrowser = false;
        }
        return capableBrowser;
      };
      Dropzone.dataURItoBlob = function (dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(",")[1]); // separate out the mime component

        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]; // write the bytes of the string to an ArrayBuffer

        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
          ia[i] = byteString.charCodeAt(i);
        } // write the ArrayBuffer to a blob

        return new Blob([ab], {
          type: mimeString
        });
      }; // Returns an array without the rejected item

      var without = function without(list, rejectedItem) {
        return list.filter(function (item) {
          return item !== rejectedItem;
        }).map(function (item) {
          return item;
        });
      }; // abc-def_ghi -> abcDefGhi

      var camelize = function camelize(str) {
        return str.replace(/[\-_](\w)/g, function (match) {
          return match.charAt(1).toUpperCase();
        });
      }; // Creates an element from string

      Dropzone.createElement = function (string) {
        var div = document.createElement("div");
        div.innerHTML = string;
        return div.childNodes[0];
      }; // Tests if given element is inside (or simply is) the container

      Dropzone.elementInside = function (element, container) {
        if (element === container) {
          return true;
        } // Coffeescript doesn't support do/while loops

        while (element = element.parentNode) {
          if (element === container) {
            return true;
          }
        }
        return false;
      };
      Dropzone.getElement = function (el, name) {
        var element;
        if (typeof el === "string") {
          element = document.querySelector(el);
        } else if (el.nodeType != null) {
          element = el;
        }
        if (element == null) {
          throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
        }
        return element;
      };
      Dropzone.getElements = function (els, name) {
        var el, elements;
        if (els instanceof Array) {
          elements = [];
          try {
            var _iterator23 = dropzone_createForOfIteratorHelper(els, true),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                el = _step23.value;
                elements.push(this.getElement(el, name));
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          } catch (e) {
            elements = null;
          }
        } else if (typeof els === "string") {
          elements = [];
          var _iterator24 = dropzone_createForOfIteratorHelper(document.querySelectorAll(els), true),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              el = _step24.value;
              elements.push(el);
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
        } else if (els.nodeType != null) {
          elements = [els];
        }
        if (elements == null || !elements.length) {
          throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
        }
        return elements;
      }; // Asks the user the question and calls accepted or rejected accordingly
      //
      // The default implementation just uses `window.confirm` and then calls the
      // appropriate callback.

      Dropzone.confirm = function (question, accepted, rejected) {
        if (window.confirm(question)) {
          return accepted();
        } else if (rejected != null) {
          return rejected();
        }
      }; // Validates the mime type like this:
      //
      // https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept

      Dropzone.isValidFile = function (file, acceptedFiles) {
        if (!acceptedFiles) {
          return true;
        } // If there are no accepted mime types, it's OK

        acceptedFiles = acceptedFiles.split(",");
        var mimeType = file.type;
        var baseMimeType = mimeType.replace(/\/.*$/, "");
        var _iterator25 = dropzone_createForOfIteratorHelper(acceptedFiles, true),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var validType = _step25.value;
            validType = validType.trim();
            if (validType.charAt(0) === ".") {
              if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                return true;
              }
            } else if (/\/\*$/.test(validType)) {
              // This is something like a image/* mime type
              if (baseMimeType === validType.replace(/\/.*$/, "")) {
                return true;
              }
            } else {
              if (mimeType === validType) {
                return true;
              }
            }
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
        return false;
      }; // Augment jQuery

      if (typeof jQuery !== "undefined" && jQuery !== null) {
        jQuery.fn.dropzone = function (options) {
          return this.each(function () {
            return new Dropzone(this, options);
          });
        };
      } // Dropzone file status codes

      Dropzone.ADDED = "added";
      Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
      // or uploading.

      Dropzone.ACCEPTED = Dropzone.QUEUED;
      Dropzone.UPLOADING = "uploading";
      Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

      Dropzone.CANCELED = "canceled";
      Dropzone.ERROR = "error";
      Dropzone.SUCCESS = "success";
      /*
      
       Bugfix for iOS 6 and 7
       Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
       based on the work of https://github.com/stomita/ios-imagefile-megapixel
      
       */
      // Detecting vertical squash in loaded image.
      // Fixes a bug which squash image vertically while drawing into canvas for some images.
      // This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel

      var detectVerticalSquash = function detectVerticalSquash(img) {
        var iw = img.naturalWidth;
        var ih = img.naturalHeight;
        var canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
          data = _ctx$getImageData.data; // search image edge pixel position in case it is squashed vertically.

        var sy = 0;
        var ey = ih;
        var py = ih;
        while (py > sy) {
          var alpha = data[(py - 1) * 4 + 3];
          if (alpha === 0) {
            ey = py;
          } else {
            sy = py;
          }
          py = ey + sy >> 1;
        }
        var ratio = py / ih;
        if (ratio === 0) {
          return 1;
        } else {
          return ratio;
        }
      }; // A replacement for context.drawImage
      // (args are for source and destination).

      var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        var vertSquashRatio = detectVerticalSquash(img);
        return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
      }; // Based on MinifyJpeg
      // Source: http://www.perry.cz/files/ExifRestorer.js
      // http://elicon.blog57.fc2.com/blog-entry-206.html

      var ExifRestore = /*#__PURE__*/function () {
        function ExifRestore() {
          dropzone_classCallCheck(this, ExifRestore);
        }
        dropzone_createClass(ExifRestore, null, [{
          key: "initClass",
          value: function initClass() {
            this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          }
        }, {
          key: "encode64",
          value: function encode64(input) {
            var output = "";
            var chr1 = undefined;
            var chr2 = undefined;
            var chr3 = "";
            var enc1 = undefined;
            var enc2 = undefined;
            var enc3 = undefined;
            var enc4 = "";
            var i = 0;
            while (true) {
              chr1 = input[i++];
              chr2 = input[i++];
              chr3 = input[i++];
              enc1 = chr1 >> 2;
              enc2 = (chr1 & 3) << 4 | chr2 >> 4;
              enc3 = (chr2 & 15) << 2 | chr3 >> 6;
              enc4 = chr3 & 63;
              if (isNaN(chr2)) {
                enc3 = enc4 = 64;
              } else if (isNaN(chr3)) {
                enc4 = 64;
              }
              output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
              chr1 = chr2 = chr3 = "";
              enc1 = enc2 = enc3 = enc4 = "";
              if (!(i < input.length)) {
                break;
              }
            }
            return output;
          }
        }, {
          key: "restore",
          value: function restore(origFileBase64, resizedFileBase64) {
            if (!origFileBase64.match("data:image/jpeg;base64,")) {
              return resizedFileBase64;
            }
            var rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
            var segments = this.slice2Segments(rawImage);
            var image = this.exifManipulation(resizedFileBase64, segments);
            return "data:image/jpeg;base64,".concat(this.encode64(image));
          }
        }, {
          key: "exifManipulation",
          value: function exifManipulation(resizedFileBase64, segments) {
            var exifArray = this.getExifArray(segments);
            var newImageArray = this.insertExif(resizedFileBase64, exifArray);
            var aBuffer = new Uint8Array(newImageArray);
            return aBuffer;
          }
        }, {
          key: "getExifArray",
          value: function getExifArray(segments) {
            var seg = undefined;
            var x = 0;
            while (x < segments.length) {
              seg = segments[x];
              if (seg[0] === 255 & seg[1] === 225) {
                return seg;
              }
              x++;
            }
            return [];
          }
        }, {
          key: "insertExif",
          value: function insertExif(resizedFileBase64, exifArray) {
            var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
            var buf = this.decode64(imageData);
            var separatePoint = buf.indexOf(255, 3);
            var mae = buf.slice(0, separatePoint);
            var ato = buf.slice(separatePoint);
            var array = mae;
            array = array.concat(exifArray);
            array = array.concat(ato);
            return array;
          }
        }, {
          key: "slice2Segments",
          value: function slice2Segments(rawImageArray) {
            var head = 0;
            var segments = [];
            while (true) {
              var length;
              if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
                break;
              }
              if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
                head += 2;
              } else {
                length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                var endPoint = head + length + 2;
                var seg = rawImageArray.slice(head, endPoint);
                segments.push(seg);
                head = endPoint;
              }
              if (head > rawImageArray.length) {
                break;
              }
            }
            return segments;
          }
        }, {
          key: "decode64",
          value: function decode64(input) {
            var output = "";
            var chr1 = undefined;
            var chr2 = undefined;
            var chr3 = "";
            var enc1 = undefined;
            var enc2 = undefined;
            var enc3 = undefined;
            var enc4 = "";
            var i = 0;
            var buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
              console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (true) {
              enc1 = this.KEY_STR.indexOf(input.charAt(i++));
              enc2 = this.KEY_STR.indexOf(input.charAt(i++));
              enc3 = this.KEY_STR.indexOf(input.charAt(i++));
              enc4 = this.KEY_STR.indexOf(input.charAt(i++));
              chr1 = enc1 << 2 | enc2 >> 4;
              chr2 = (enc2 & 15) << 4 | enc3 >> 2;
              chr3 = (enc3 & 3) << 6 | enc4;
              buf.push(chr1);
              if (enc3 !== 64) {
                buf.push(chr2);
              }
              if (enc4 !== 64) {
                buf.push(chr3);
              }
              chr1 = chr2 = chr3 = "";
              enc1 = enc2 = enc3 = enc4 = "";
              if (!(i < input.length)) {
                break;
              }
            }
            return buf;
          }
        }]);
        return ExifRestore;
      }();
      ExifRestore.initClass();
      /*
       * contentloaded.js
       *
       * Author: Diego Perini (diego.perini at gmail.com)
       * Summary: cross-browser wrapper for DOMContentLoaded
       * Updated: 20101020
       * License: MIT
       * Version: 1.2
       *
       * URL:
       * http://javascript.nwbox.com/ContentLoaded/
       * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
       */
      // @win window reference
      // @fn function reference

      var contentLoaded = function contentLoaded(win, fn) {
        var done = false;
        var top = true;
        var doc = win.document;
        var root = doc.documentElement;
        var add = doc.addEventListener ? "addEventListener" : "attachEvent";
        var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
        var pre = doc.addEventListener ? "" : "on";
        var init = function init(e) {
          if (e.type === "readystatechange" && doc.readyState !== "complete") {
            return;
          }
          (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
          if (!done && (done = true)) {
            return fn.call(win, e.type || e);
          }
        };
        var poll = function poll() {
          try {
            root.doScroll("left");
          } catch (e) {
            setTimeout(poll, 50);
            return;
          }
          return init("poll");
        };
        if (doc.readyState !== "complete") {
          if (doc.createEventObject && root.doScroll) {
            try {
              top = !win.frameElement;
            } catch (error) {}
            if (top) {
              poll();
            }
          }
          doc[add](pre + "DOMContentLoaded", init, false);
          doc[add](pre + "readystatechange", init, false);
          return win[add](pre + "load", init, false);
        }
      }; // As a single function to be able to write tests.

      Dropzone._autoDiscoverFunction = function () {
        if (Dropzone.autoDiscover) {
          return Dropzone.discover();
        }
      };
      contentLoaded(window, Dropzone._autoDiscoverFunction);
      function __guard__(value, transform) {
        return typeof value !== "undefined" && value !== null ? transform(value) : undefined;
      }
      function __guardMethod__(obj, methodName, transform) {
        if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") {
          return transform(obj, methodName);
        } else {
          return undefined;
        }
      }
      ; // CONCATENATED MODULE: ./tool/dropzone.dist.js
      /// Make Dropzone a global variable.

      window.Dropzone = Dropzone;
      /* harmony default export */
      var dropzone_dist = Dropzone;
    }();
    /******/
    return __nested_webpack_exports__;
    /******/
  }();
});

/***/ }),

/***/ 37581:
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.23.0
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }
  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };
  const swalPrefix = 'swal2-';

  /**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});
  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */
  const warnAboutDeprecation = (deprecatedParam, useInstead = null) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const head = parsed.querySelector('head');
      if (head) {
        Array.from(head.childNodes).forEach(child => {
          elem.appendChild(child);
        });
      }
      const body = parsed.querySelector('body');
      if (body) {
        Array.from(body.childNodes).forEach(child => {
          if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
            elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
          } else {
            elem.appendChild(child);
          }
        });
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (!params.customClass) {
      return;
    }
    const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
    if (!customClass) {
      return;
    }
    if (typeof customClass !== 'string' && !customClass.forEach) {
      warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
      return;
    }
    addClass(elem, customClass);
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          if (condition) {
            elem.classList.add(className);
          } else {
            elem.classList.remove(className);
          }
        });
      } else {
        if (condition) {
          target.classList.add(className);
        } else {
          target.classList.remove(className);
        }
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = (elem, display = 'flex') => {
    if (!elem) {
      return;
    }
    elem.style.display = display;
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    if (!elem) {
      return;
    }
    elem.style.display = 'none';
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const showWhenInnerHtmlPresent = (elem, display = 'block') => {
    if (!elem) {
      return;
    }
    new MutationObserver(() => {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement | null} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  const toggle = (elem, condition, display = 'flex') => {
    if (condition) {
      show(elem, display);
    } else {
      hide(elem);
    }
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement} stopElement
   * @returns {boolean}
   */
  const selfOrParentIsScrollable = (element, stopElement) => {
    let parent = element;
    while (parent && parent !== stopElement) {
      if (isScrollable(parent)) {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  };

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';
  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    container.dataset['swal2Theme'] = params.theme;
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    if (params.topLayer) {
      container.setAttribute('popover', '');
      container.showPopover();
    }
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Apply custom background colors to action buttons
    if (params.confirmButtonColor) {
      confirmButton.style.setProperty('--swal2-confirm-button-background-color', params.confirmButtonColor);
    }
    if (params.denyButtonColor) {
      denyButton.style.setProperty('--swal2-deny-button-background-color', params.denyButtonColor);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.setProperty('--swal2-cancel-button-background-color', params.cancelButtonColor);
    }

    // Apply the outline color to action buttons
    applyOutlineColor(confirmButton);
    applyOutlineColor(denyButton);
    applyOutlineColor(cancelButton);
  }

  /**
   * @param {HTMLElement} button
   */
  function applyOutlineColor(button) {
    const buttonStyle = window.getComputedStyle(button);
    if (buttonStyle.getPropertyValue('--swal2-action-button-focus-box-shadow')) {
      // If the button already has a custom outline color, no need to change it
      return;
    }
    const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, 'rgba($1, $2, $3, 0.5)');
    button.style.setProperty('--swal2-action-button-focus-box-shadow', buttonStyle.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${outlineColor}`));
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params[`show${buttonName}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses[`grow-${grow}`]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>

  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (!inputContainer) {
      return;
    }
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const input = getInput$1(popup, inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    if (!params.input) {
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (inputContainer) {
      applyCustomClass(inputContainer, params, 'input');
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder && params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */
  const getInputContainer = inputType => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
  (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, params.footer, 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);

    // Re-adjust the success icon on system theme change
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQueryList.addEventListener('change', adjustSuccessIconBackgroundColor);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  /**
   *
   * @param {SweetAlertOptions} params
   * @returns {string}
   */
  const successIconHtml = params => `
  ${params.animation ? '<div class="swal2-success-circular-line-left"></div>' : ''}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${params.animation ? '<div class="swal2-success-fix"></div>' : ''}
  ${params.animation ? '<div class="swal2-success-circular-line-right"></div>' : ''}
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml(params);
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };
  let dragging = false;
  let mousedownX = 0;
  let mousedownY = 0;
  let initialX = 0;
  let initialY = 0;

  /**
   * @param {HTMLElement} popup
   */
  const addDraggableListeners = popup => {
    popup.addEventListener('mousedown', down);
    document.body.addEventListener('mousemove', move);
    popup.addEventListener('mouseup', up);
    popup.addEventListener('touchstart', down);
    document.body.addEventListener('touchmove', move);
    popup.addEventListener('touchend', up);
  };

  /**
   * @param {HTMLElement} popup
   */
  const removeDraggableListeners = popup => {
    popup.removeEventListener('mousedown', down);
    document.body.removeEventListener('mousemove', move);
    popup.removeEventListener('mouseup', up);
    popup.removeEventListener('touchstart', down);
    document.body.removeEventListener('touchmove', move);
    popup.removeEventListener('touchend', up);
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const down = event => {
    const popup = getPopup();
    if (event.target === popup || getIcon().contains(/** @type {HTMLElement} */event.target)) {
      dragging = true;
      const clientXY = getClientXY(event);
      mousedownX = clientXY.clientX;
      mousedownY = clientXY.clientY;
      initialX = parseInt(popup.style.insetInlineStart) || 0;
      initialY = parseInt(popup.style.insetBlockStart) || 0;
      addClass(popup, 'swal2-dragging');
    }
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const move = event => {
    const popup = getPopup();
    if (dragging) {
      let {
        clientX,
        clientY
      } = getClientXY(event);
      popup.style.insetInlineStart = `${initialX + (clientX - mousedownX)}px`;
      popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
    }
  };
  const up = () => {
    const popup = getPopup();
    dragging = false;
    removeClass(popup, 'swal2-dragging');
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */
  const getClientXY = event => {
    let clientX = 0,
      clientY = 0;
    if (event.type.startsWith('mouse')) {
      clientX = /** @type {MouseEvent} */event.clientX;
      clientY = /** @type {MouseEvent} */event.clientY;
    } else if (event.type.startsWith('touch')) {
      clientX = /** @type {TouchEvent} */event.touches[0].clientX;
      clientY = /** @type {TouchEvent} */event.touches[0].clientY;
    }
    return {
      clientX,
      clientY
    };
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      if (loader) {
        popup.insertBefore(loader, getIcon());
      }
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
    if (params.draggable && !params.toast) {
      addClass(popup, swalClasses.draggable);
      addDraggableListeners(popup);
    } else {
      removeClass(popup, swalClasses.draggable);
      removeDraggableListeners(popup);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    // TODO: remove in the next major
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
    globalState.eventEmitter.emit('didRender', popup);
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  const addKeydownHandler = (globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(innerParams, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    var _dom$getPopup;
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // shift + tab when .swal2-popup is focused
      if (index === -2) {
        index = focusableElements.length - 1;
      }

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  const keydownHandler = (innerParams, event, dismissWith) => {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    const input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const actions = getActions();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (let i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    event.preventDefault();
    if (callIfFunction(innerParams.allowEscapeKey)) {
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const container = getContainer();
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    const htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && !selfOrParentIsScrollable(target, htmlContainer) &&
    // #2823
    target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  const replaceScrollbarWithPadding = initialBodyOverflow => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoReplaceScrollbarWithPadding = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = `${previousBodyPadding}px`;
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    var _globalState$eventEmi;
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    /**
     * @param {AnimationEvent | TransitionEvent} e
     */
    const swalCloseAnimationFinished = function (e) {
      if (e.target === popup) {
        var _globalState$swalClos;
        (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
        delete globalState.swalCloseEventFinishedCallback;
        popup.removeEventListener('animationend', swalCloseAnimationFinished);
        popup.removeEventListener('transitionend', swalCloseAnimationFinished);
      }
    };
    popup.addEventListener('animationend', swalCloseAnimationFinished);
    popup.addEventListener('transitionend', swalCloseAnimationFinished);
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      var _globalState$eventEmi2;
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal();
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */
    const processInputOptions = inputOptions => {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    const select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement('input');
      const radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  const formatInputOptions = inputOptions => {
    /** @type {InputOptionFlattened[]} */
    const result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const input = instance.getInput();
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    const popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }
  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    draggable: false,
    animation: true,
    theme: 'light',
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true,
    topLayer: false
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'theme', 'willClose'];

  /** @type {Record<string, string | undefined>} */
  const deprecatedParams = {
    allowEnterKey: undefined
  };
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    if (params.theme && !['light', 'dark', 'auto', 'minimal', 'borderless', 'embed-iframe', 'bulma', 'bulma-light', 'bulma-dark'].includes(params.theme)) {
      warn(`Invalid theme "${params.theme}"`);
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const container = getContainer();
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    showWarningsForParams(updatedParams);
    container.dataset['swal2Theme'] = updatedParams.theme;
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    globalState.eventEmitter.emit('didDestroy');
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };
  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handlePopupClick = (innerParams, domCache, dismissWith) => {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleToastClick = (innerParams, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  let ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = () => {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = e => {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = () => {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleModalClick = (innerParams, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };
  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire(...args) {
    return new this(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  const increaseTimer = ms => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };
  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  // Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

  class EventEmitter {
    constructor() {
      /** @type {Events} */
      this.events = {};
    }

    /**
     * @param {string} eventName
     * @returns {EventHandlers}
     */
    _getHandlersByEventName(eventName) {
      if (typeof this.events[eventName] === 'undefined') {
        // not Set because we need to keep the FIFO order
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
        this.events[eventName] = [];
      }
      return this.events[eventName];
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    on(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      if (!currentHandlers.includes(eventHandler)) {
        currentHandlers.push(eventHandler);
      }
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    once(eventName, eventHandler) {
      /**
       * @param {Array} args
       */
      const onceFn = (...args) => {
        this.removeListener(eventName, onceFn);
        eventHandler.apply(this, args);
      };
      this.on(eventName, onceFn);
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     */
    emit(eventName, ...args) {
      this._getHandlersByEventName(eventName).forEach(
      /**
       * @param {EventHandler} eventHandler
       */
      eventHandler => {
        try {
          eventHandler.apply(this, args);
        } catch (error) {
          console.error(error);
        }
      });
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    removeListener(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      const index = currentHandlers.indexOf(eventHandler);
      if (index > -1) {
        currentHandlers.splice(index, 1);
      }
    }

    /**
     * @param {string} eventName
     */
    removeAllListeners(eventName) {
      if (this.events[eventName] !== undefined) {
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
        this.events[eventName].length = 0;
      }
    }
    reset() {
      this.events = {};
    }
  }
  globalState.eventEmitter = new EventEmitter();

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const on = (eventName, eventHandler) => {
    globalState.eventEmitter.on(eventName, eventHandler);
  };

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const once = (eventName, eventHandler) => {
    globalState.eventEmitter.once(eventName, eventHandler);
  };

  /**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */
  const off = (eventName, eventHandler) => {
    // Remove all handlers for all events
    if (!eventName) {
      globalState.eventEmitter.reset();
      return;
    }
    if (eventHandler) {
      // Remove a specific handler
      globalState.eventEmitter.removeListener(eventName, eventHandler);
    } else {
      // Remove all handlers for a specific event
      globalState.eventEmitter.removeAllListeners(eventName);
    }
  };
  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    off: off,
    on: on,
    once: once,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });
  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }
  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalParams = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalFunctionParams = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalButtons = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
        return;
      }
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src') || undefined;
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width') || undefined;
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height') || undefined;
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt') || undefined;
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalInput = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement | null} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        if (!optionValue) {
          return;
        }
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, any>}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    /** @type {Record<string, any>} */
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement | null} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };
  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    globalState.eventEmitter.emit('willOpen', popup);
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    globalState.eventEmitter.emit('didOpen', popup);
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener('animationend', swalOpenAnimationFinished);
    popup.removeEventListener('transitionend', swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener('animationend', swalOpenAnimationFinished);
      popup.addEventListener('transitionend', swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(() => {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };
  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  class SweetAlert {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    constructor(...args) {
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, void 0);
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }
    _main(userParams, mixinParams = {}) {
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
        const {
          isAwaitingPromise
        } = globalState.currentInstance;
        globalState.currentInstance._destroy();
        if (!isAwaitingPromise) {
          swalPromiseResolve({
            isDismissed: true
          });
        }
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
    }
    finally(onFinally) {
      return _classPrivateFieldGet2(_promise, this).finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    // TODO: this is dumb, remove `allowEnterKey` param in the next major version
    if (!callIfFunction(innerParams.allowEnterKey)) {
      warnAboutDeprecation('allowEnterKey');
      blurActiveElement();
      return;
    }
    if (focusAutofocus(domCache)) {
      return;
    }
    if (focusButton(domCache, innerParams)) {
      return;
    }
    setFocus(-1, 1);
  };

  /**
   * @param {DomCache} domCache
   * @returns {boolean}
   */
  const focusAutofocus = domCache => {
    const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
    for (const autofocusElement of autofocusElements) {
      if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
        autofocusElement.focus();
        return true;
      }
    }
    return false;
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function (...args) {
      if (currentInstance && currentInstance[key]) {
        return currentInstance[key](...args);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.23.0';
  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;
  return Swal;
});
if (typeof this !== 'undefined' && this.Sweetalert2) {
  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
}
"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

/***/ }),

/***/ 51547:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/focus-trap/fesm2022/ngx-bootstrap-focus-trap.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusTrap: () => (/* binding */ FocusTrap),
/* harmony export */   FocusTrapDirective: () => (/* binding */ FocusTrapDirective),
/* harmony export */   FocusTrapModule: () => (/* binding */ FocusTrapModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 64334);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* eslint-disable */
/** Injectable that ensures only the most recently enabled FocusTrap is active. */
class FocusTrapManager {
  constructor() {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    // Dedupe focusTraps that register multiple times.
    this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
  static {
    this.ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapManager)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusTrapManager,
      factory: FocusTrapManager.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* eslint-disable */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention
    /** Whether the Angular application is being rendered in the browser. */
    this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    /** Whether the current rendering engine is Blink. */
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    /** Whether the current rendering engine is WebKit. */
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    /** Whether the current browser is Firefox. */
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    /** Whether the current browser is Safari. */
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
  static {
    this.ɵfac = function Platform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Platform,
      factory: Platform.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* eslint-disable */
/**
 * Configuration for the isFocusable method.
 */
class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }
}
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
class InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    // This does not capture some cases, such as a non-form control with a disabled attribute or
    // a form control inside of a disabled form, but should capture the most common cases.
    return element.hasAttribute('disabled');
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    // Nothing is tabbable on the server 😎
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      // Frame elements inherit their tabindex onto all child elements.
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      // Browsers disable tabbing to an element inside of an invisible frame.
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute('contenteditable')) {
      return tabIndexValue !== -1;
    }
    if (nodeName === 'iframe' || nodeName === 'object') {
      // The frame or object's content may be tabbable depending on the content, but it's
      // not possibly to reliably detect the content of the frames. We always consider such
      // elements as non-tabbable.
      return false;
    }
    // In iOS, the browser only considers some specific elements as tabbable.
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === 'audio') {
      // Audio elements without controls enabled are never tabbable, regardless
      // of the tabindex attribute explicitly being set.
      if (!element.hasAttribute('controls')) {
        return false;
      }
      // Audio elements with controls are by default tabbable unless the
      // tabindex attribute is set to `-1` explicitly.
      return tabIndexValue !== -1;
    }
    if (nodeName === 'video') {
      // For all video elements, if the tabindex attribute is set to `-1`, the video
      // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
      // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
      // tabindex attribute is the source of truth here.
      if (tabIndexValue === -1) {
        return false;
      }
      // If the tabindex is explicitly set, and not `-1` (as per check before), the
      // video element is always tabbable (regardless of whether it has controls or not).
      if (tabIndexValue !== null) {
        return true;
      }
      // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
      // has controls enabled. Firefox is special as videos are always tabbable regardless
      // of whether there are controls or not.
      return this._platform.FIREFOX || element.hasAttribute('controls');
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    // Perform checks in order of left to most expensive.
    // Again, naive approach that does not capture many edge cases and browser quirks.
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
  static {
    this.ɵfac = function InteractivityChecker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Platform));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InteractivityChecker,
      factory: InteractivityChecker.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractivityChecker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: Platform
  }], null);
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */
function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */
function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }
  let tabIndex = element.getAttribute('tabindex');
  // IE11 parses tabindex="" as the value "-32768"
  if (tabIndex == '-32768') {
    return false;
  }
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* eslint-disable */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to misalign.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */
class FocusTrap {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false;
    // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      if (startAnchor.parentNode) {
        startAnchor.parentNode.removeChild(startAnchor);
      }
    }
    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      if (endAnchor.parentNode) {
        endAnchor.parentNode.removeChild(endAnchor);
      }
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfuly. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then either focuses the first element that the
   * user specified, or the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady() {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement()));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady() {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement()));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady() {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement()));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    let markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);
    for (let i = 0; i < markers.length; i++) {
      // @breaking-change 8.0.0
      if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
      } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
      }
    }
    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement() {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);
    if (redirectToElement) {
      // @breaking-change 8.0.0
      if (redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      }
      // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus();
        return !!focusableChild;
      }
      redirectToElement.focus();
      return true;
    }
    return this.focusFirstTabbableElement();
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement() {
    const redirectToElement = this._getRegionBoundary('start');
    if (redirectToElement) {
      redirectToElement.focus();
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement() {
    const redirectToElement = this._getRegionBoundary('end');
    if (redirectToElement) {
      redirectToElement.focus();
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
    // back to `childNodes` which includes text nodes, comments etc.
    let children = root.children || root.childNodes;
    for (let i = 0; i < children.length; i++) {
      let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    // Iterate in reverse DOM order.
    let children = root.children || root.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
      let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement('div');
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(fn);
    }
  }
}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */
class FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }
  static {
    this.ɵfac = function FocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusTrapFactory,
      factory: FocusTrapFactory.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();
/** Directive for trapping focus within a region. */
class FocusTrapDirective {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap.enabled;
  }
  set enabled(value) {
    this.focusTrap.enabled = coerceBooleanProperty(value);
  }
  /**
   * Whether the directive should automatically move focus into the trapped region upon
   * initialization and return focus to the previous activeElement upon destruction.
   */
  get autoCapture() {
    return this._autoCapture;
  }
  set autoCapture(value) {
    this._autoCapture = coerceBooleanProperty(value);
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */
    this._previouslyFocusedElement = null;
    this._autoCapture = false;
    this._document = _document;
    this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
  }
  ngOnDestroy() {
    this.focusTrap.destroy();
    // If we stored a previously focused element when using autoCapture, return focus to that
    // element now that the trapped region is being destroyed.
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (!this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes['autoCapture'];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = this._document.activeElement;
    this.focusTrap.focusInitialElementWhenReady();
  }
  static {
    this.ɵfac = function FocusTrapDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FocusTrapDirective,
      selectors: [["", "focusTrap", ""]],
      inputs: {
        enabled: [0, "cdkTrapFocus", "enabled"],
        autoCapture: [0, "cdkTrapFocusAutoCapture", "autoCapture"]
      },
      exportAs: ["focusTrap"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[focusTrap]',
      exportAs: 'focusTrap'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], {
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocus']
    }],
    autoCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocusAutoCapture']
    }]
  });
})();
class FocusTrapModule {
  static forRoot() {
    return {
      ngModule: FocusTrapModule,
      providers: [FocusTrapManager, Platform, InteractivityChecker]
    };
  }
  static {
    this.ɵfac = function FocusTrapModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FocusTrapModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [FocusTrapDirective],
      exports: [FocusTrapDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2457:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/fesm2022/ngx-bootstrap-modal.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BsModalRef: () => (/* binding */ BsModalRef),
/* harmony export */   BsModalService: () => (/* binding */ BsModalService),
/* harmony export */   MODAL_CONFIG_DEFAULT_OVERRIDE: () => (/* binding */ MODAL_CONFIG_DEFAULT_OVERRIDE),
/* harmony export */   ModalBackdropComponent: () => (/* binding */ ModalBackdropComponent),
/* harmony export */   ModalBackdropOptions: () => (/* binding */ ModalBackdropOptions),
/* harmony export */   ModalContainerComponent: () => (/* binding */ ModalContainerComponent),
/* harmony export */   ModalDirective: () => (/* binding */ ModalDirective),
/* harmony export */   ModalModule: () => (/* binding */ ModalModule),
/* harmony export */   ModalOptions: () => (/* binding */ ModalOptions)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ 72341);
/* harmony import */ var ngx_bootstrap_focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/focus-trap */ 51547);
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ 70755);
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/positioning */ 40901);









// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _c0 = ["*"];
class BsModalRef {
  constructor() {
    /**
     * Hides the modal
     */
    this.hide = () => void 0;
    /**
     * Sets new class to modal window
     */
    this.setClass = () => void 0;
  }
  static {
    this.ɵfac = function BsModalRef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BsModalRef)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BsModalRef,
      factory: BsModalRef.ɵfac,
      providedIn: 'platform'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalRef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'platform'
    }]
  }], null, null);
})();
class ModalBackdropOptions {
  constructor(options) {
    this.animate = true;
    Object.assign(this, options);
  }
}
class ModalOptions {
  static {
    this.ɵfac = function ModalOptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalOptions)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalOptions,
      factory: ModalOptions.ɵfac,
      providedIn: 'platform'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'platform'
    }]
  }], null, null);
})();
const modalConfigDefaults = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: false,
  ignoreBackdropClick: false,
  class: '',
  animated: true,
  initialState: {},
  closeInterceptor: void 0
};
const MODAL_CONFIG_DEFAULT_OVERRIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('override-default-config');
const CLASS_NAME = {
  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
  BACKDROP: 'modal-backdrop',
  OPEN: 'modal-open',
  FADE: 'fade',
  IN: 'in',
  SHOW: 'show'
};
const SELECTOR = {
  DIALOG: '.modal-dialog',
  DATA_TOGGLE: '[data-toggle="modal"]',
  DATA_DISMISS: '[data-dismiss="modal"]',
  FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
const TRANSITION_DURATIONS = {
  MODAL: 300,
  BACKDROP: 150
};
const DISMISS_REASONS = {
  BACKRDOP: 'backdrop-click',
  ESC: 'esc',
  BACK: 'browser-back-navigation-clicked'
};
class ModalContainerComponent {
  constructor(options, _element, _renderer) {
    this._element = _element;
    this._renderer = _renderer;
    this.isShown = false;
    this.isAnimated = false;
    this._focusEl = null;
    this.isModalHiding = false;
    this.clickStartedInContent = false;
    this.config = Object.assign({}, options);
  }
  ngOnInit() {
    this._focusEl = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.activeElement;
    if (this.isAnimated) {
      this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
    }
    this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
    setTimeout(() => {
      this.isShown = true;
      this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
    }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
    if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body) {
      if (this.bsModalService && this.bsModalService.getModalsCount() === 1) {
        this.bsModalService.checkScrollbar();
        this.bsModalService.setScrollbar();
      }
      this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, CLASS_NAME.OPEN);
      this._renderer.setStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, 'overflow-y', 'hidden');
    }
    if (this._element.nativeElement) {
      this._element.nativeElement.focus();
    }
  }
  onClickStarted(event) {
    this.clickStartedInContent = event.target !== this._element.nativeElement;
  }
  onClickStop(event) {
    const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
    if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
      this.clickStartedInContent = false;
      return;
    }
    this.bsModalService?.setDismissReason(DISMISS_REASONS.BACKRDOP);
    this.hide();
  }
  onPopState() {
    this.bsModalService?.setDismissReason(DISMISS_REASONS.BACK);
    this.hide();
  }
  onEsc(event) {
    if (!this.isShown) {
      return;
    }
    if (event.keyCode === 27 || event.key === 'Escape') {
      event.preventDefault();
    }
    if (this.config.keyboard && this.level === this.bsModalService?.getModalsCount()) {
      this.bsModalService?.setDismissReason(DISMISS_REASONS.ESC);
      this.hide();
    }
  }
  ngOnDestroy() {
    if (this.isShown) {
      this._hide();
    }
  }
  hide() {
    if (this.isModalHiding) {
      return;
    }
    if (this.config.closeInterceptor) {
      this.config.closeInterceptor().then(() => this._hide(), () => undefined);
      return;
    }
    this._hide();
  }
  _hide() {
    this.isModalHiding = true;
    this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
    setTimeout(() => {
      this.isShown = false;
      if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body && this.bsModalService?.getModalsCount() === 1) {
        this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, CLASS_NAME.OPEN);
        this._renderer.setStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, 'overflow-y', '');
      }
      this.bsModalService?.hide(this.config.id);
      this.isModalHiding = false;
      if (this._focusEl) {
        this._focusEl.focus();
      }
    }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
  }
  static {
    this.ɵfac = function ModalContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalContainerComponent,
      selectors: [["modal-container"]],
      hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
      hostVars: 3,
      hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) {
            return ctx.onClickStarted($event);
          })("click", function ModalContainerComponent_click_HostBindingHandler($event) {
            return ctx.onClickStop($event);
          })("popstate", function ModalContainerComponent_popstate_HostBindingHandler() {
            return ctx.onPopState();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
        }
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 2,
      consts: [["role", "document", "focusTrap", ""], [1, "modal-content"]],
      template: function ModalContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.config.class ? " " + ctx.config.class : ""));
        }
      },
      dependencies: [ngx_bootstrap_focus_trap__WEBPACK_IMPORTED_MODULE_2__.FocusTrapDirective],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'modal-container',
      template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')"
         role="document"
         focusTrap>
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        class: 'modal',
        role: 'dialog',
        tabindex: '-1',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'config.ariaLabelledBy',
        '[attr.aria-describedby]': 'config.ariaDescribedby'
      }
    }]
  }], () => [{
    type: ModalOptions
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }], {
    onClickStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    onClickStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onPopState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:popstate']
    }],
    onEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:keydown.esc', ['$event']]
    }]
  });
})();

/** This component will be added as background layout for modals if enabled */
class ModalBackdropComponent {
  get isAnimated() {
    return this._isAnimated;
  }
  set isAnimated(value) {
    this._isAnimated = value;
  }
  get isShown() {
    return this._isShown;
  }
  set isShown(value) {
    this._isShown = value;
    if (value) {
      this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
    } else {
      this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
    }
  }
  constructor(element, renderer) {
    this._isAnimated = false;
    this._isShown = false;
    this.element = element;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (this.isAnimated) {
      this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
      ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.reflow(this.element.nativeElement);
    }
    this.isShown = true;
  }
  static {
    this.ɵfac = function ModalBackdropComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalBackdropComponent,
      selectors: [["bs-modal-backdrop"]],
      hostAttrs: [1, "modal-backdrop"],
      decls: 0,
      vars: 0,
      template: function ModalBackdropComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'bs-modal-backdrop',
      template: ' ',
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        class: CLASS_NAME.BACKDROP
      }
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }], null);
})();

// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events
const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
class ModalDirective {
  /** allows to set modal configuration via element property */
  set config(conf) {
    this._config = this.getConfig(conf);
  }
  get config() {
    return this._config;
  }
  get isShown() {
    return this._isShown;
  }
  constructor(_element, _viewContainerRef, _renderer, clf, modalDefaultOption) {
    this._element = _element;
    this._renderer = _renderer;
    /** This event fires immediately when the `show` instance method is called. */
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** This event is fired when the modal has been made visible to the user
     * (will wait for CSS transitions to complete)
     */
    this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** This event is fired immediately when
     * the hide instance method has been called.
     */
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** This event is fired when the modal has finished being
     * hidden from the user (will wait for CSS transitions to complete).
     */
    this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._isShown = false;
    this.isBodyOverflowing = false;
    this.originalBodyPadding = 0;
    this.scrollbarWidth = 0;
    this.timerHideModal = 0;
    this.timerRmBackDrop = 0;
    this.isNested = false;
    this.clickStartedInContent = false;
    this._focusEl = null;
    this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    this._config = modalDefaultOption || modalConfigDefaults;
  }
  onClickStarted(event) {
    this.clickStartedInContent = event.target !== this._element.nativeElement;
  }
  onClickStop(event) {
    const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
    if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
      this.clickStartedInContent = false;
      return;
    }
    this.dismissReason = DISMISS_REASONS.BACKRDOP;
    this.hide(event);
  }
  // todo: consider preventing default and stopping propagation
  onEsc(event) {
    if (!this._isShown) {
      return;
    }
    if (event.keyCode === 27 || event.key === 'Escape') {
      event.preventDefault();
    }
    if (this.config.keyboard) {
      this.dismissReason = DISMISS_REASONS.ESC;
      this.hide();
    }
  }
  ngOnDestroy() {
    if (this._isShown) {
      this._isShown = false;
      this.hideModal();
      this._backdrop.dispose();
    }
  }
  ngOnInit() {
    this._config = this._config || this.getConfig();
    setTimeout(() => {
      if (this._config.show) {
        this.show();
      }
    }, 0);
  }
  /* Public methods */
  /** Allows to manually toggle modal visibility */
  toggle() {
    return this._isShown ? this.hide() : this.show();
  }
  /** Allows to manually open modal */
  show() {
    this.dismissReason = void 0;
    this.onShow.emit(this);
    if (this._isShown) {
      return;
    }
    clearTimeout(this.timerHideModal);
    clearTimeout(this.timerRmBackDrop);
    this._isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body) {
      if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.classList.contains(CLASS_NAME.OPEN)) {
        this.isNested = true;
      } else {
        this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, CLASS_NAME.OPEN);
        this._renderer.setStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, 'overflow-y', 'hidden');
      }
    }
    this.showBackdrop(() => {
      this.showElement();
    });
  }
  /** Check if we can close the modal */
  hide(event) {
    if (!this._isShown) {
      return;
    }
    if (event) {
      event.preventDefault();
    }
    if (this.config.closeInterceptor) {
      this.config.closeInterceptor().then(() => this._hide(), () => undefined);
      return;
    }
    this._hide();
  }
  /** Private methods @internal */
  /**
   *  Manually close modal
   *  @internal
   */
  _hide() {
    this.onHide.emit(this);
    ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.window.clearTimeout(this.timerHideModal);
    ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.window.clearTimeout(this.timerRmBackDrop);
    this._isShown = false;
    this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
    if (this._config.animated) {
      this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.window.setTimeout(() => this.hideModal(), TRANSITION_DURATION);
    } else {
      this.hideModal();
    }
    if (this._focusEl) {
      this._focusEl.focus();
    }
  }
  getConfig(config) {
    return Object.assign({}, this._config, config);
  }
  /**
   *  Show dialog
   *  @internal
   */
  showElement() {
    // todo: replace this with component loader usage
    if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // don't move modals dom position
      if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body) {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.appendChild(this._element.nativeElement);
      }
    }
    this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
    this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
    this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
    this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
    if (this._config.animated) {
      ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.reflow(this._element.nativeElement);
    }
    this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._element.nativeElement.focus();
      }
      this.onShown.emit(this);
    };
    if (this._config.animated) {
      setTimeout(transitionComplete, TRANSITION_DURATION);
    } else {
      transitionComplete();
    }
  }
  /** @internal */
  hideModal() {
    this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
    this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
    this.showBackdrop(() => {
      if (!this.isNested) {
        if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body) {
          this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, CLASS_NAME.OPEN);
          this._renderer.setStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, 'overflow-y', '');
        }
        this.resetScrollbar();
      }
      this.resetAdjustments();
      this.focusOtherModal();
      this.onHidden.emit(this);
    });
  }
  // todo: original show was calling a callback when done, but we can use
  // promise
  /** @internal */
  showBackdrop(callback) {
    if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
      this.removeBackdrop();
      this._backdrop.attach(ModalBackdropComponent).to('body').show({
        isAnimated: this._config.animated
      });
      this.backdrop = this._backdrop._componentRef;
      if (!callback) {
        return;
      }
      if (!this._config.animated) {
        callback();
        return;
      }
      setTimeout(callback, BACKDROP_TRANSITION_DURATION);
    } else if (!this._isShown && this.backdrop) {
      this.backdrop.instance.isShown = false;
      const callbackRemove = () => {
        this.removeBackdrop();
        if (callback) {
          callback();
        }
      };
      if (this.backdrop.instance.isAnimated) {
        this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.window.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
      } else {
        callbackRemove();
      }
    } else if (callback) {
      callback();
    }
  }
  /** @internal */
  removeBackdrop() {
    this._backdrop.hide();
  }
  /** Events tricks */
  // no need for it
  // protected setEscapeEvent():void {
  //   if (this._isShown && this._config.keyboard) {
  //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
  //       if (event.which === 27) {
  //         this.hide()
  //       }
  //     })
  //
  //   } else if (!this._isShown) {
  //     $(this._element).off(Event.KEYDOWN_DISMISS)
  //   }
  // }
  // protected setResizeEvent():void {
  // console.log(this.renderer.listenGlobal('', Event.RESIZE));
  // if (this._isShown) {
  //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
  // } else {
  //   $(window).off(Event.RESIZE)
  // }
  // }
  focusOtherModal() {
    if (this._element.nativeElement.parentElement == null) {
      return;
    }
    const otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
    if (!otherOpenedModals.length) {
      return;
    }
    otherOpenedModals[otherOpenedModals.length - 1].focus();
  }
  /** @internal */
  resetAdjustments() {
    this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
    this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
  }
  /** Scroll bar tricks */
  /** @internal */
  checkScrollbar() {
    this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth;
    this.scrollbarWidth = this.getScrollbarWidth();
  }
  setScrollbar() {
    if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document) {
      return;
    }
    this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.window.getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body).getPropertyValue('padding-right') || 0, 10);
    if (this.isBodyOverflowing) {
      ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`;
    }
  }
  resetScrollbar() {
    ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.style.paddingRight = `${this.originalBodyPadding}px`;
  }
  // thx d.walsh
  getScrollbarWidth() {
    const scrollDiv = this._renderer.createElement('div');
    this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
    this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, scrollDiv);
    return scrollbarWidth;
  }
  static {
    this.ɵfac = function ModalDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ModalDirective,
      selectors: [["", "bsModal", ""]],
      hostBindings: function ModalDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) {
            return ctx.onClickStarted($event);
          })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) {
            return ctx.onClickStop($event);
          })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) {
            return ctx.onEsc($event);
          });
        }
      },
      inputs: {
        config: "config",
        closeInterceptor: "closeInterceptor"
      },
      outputs: {
        onShow: "onShow",
        onShown: "onShown",
        onHide: "onHide",
        onHidden: "onHidden"
      },
      exportAs: ["bs-modal"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[bsModal]',
      exportAs: 'bs-modal'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderFactory
  }, {
    type: ModalOptions,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
    }]
  }], {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeInterceptor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClickStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    onClickStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseup', ['$event']]
    }],
    onEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.esc', ['$event']]
    }]
  });
})();
let currentId = 1;
class BsModalService {
  constructor(rendererFactory, clf, modalDefaultOption) {
    this.clf = clf;
    this.modalDefaultOption = modalDefaultOption;
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isBodyOverflowing = false;
    this.originalBodyPadding = 0;
    this.scrollbarWidth = 0;
    this.modalsCount = 0;
    this.loaders = [];
    this._focusEl = null;
    this._backdropLoader = this.clf.createLoader();
    this._renderer = rendererFactory.createRenderer(null, null);
    this.config = modalDefaultOption ? Object.assign({}, modalConfigDefaults, modalDefaultOption) : modalConfigDefaults;
  }
  /** Shows a modal */
  show(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content, config) {
    this._focusEl = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.activeElement;
    this.modalsCount++;
    this._createLoaders();
    // must be different per every show() call
    const id = config?.id || currentId++;
    this.config = this.modalDefaultOption ? Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) : Object.assign({}, modalConfigDefaults, config);
    this.config.id = id;
    this._showBackdrop();
    this.lastDismissReason = void 0;
    return this._showModal(content);
  }
  hide(id) {
    if (this.modalsCount === 1 || id == null) {
      this._hideBackdrop();
      this.resetScrollbar();
    }
    this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
    setTimeout(() => {
      this._hideModal(id);
      this.removeLoaders(id);
    }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    if (this._focusEl) {
      this._focusEl.focus();
    }
  }
  _showBackdrop() {
    const isBackdropEnabled = this.config.backdrop === true || this.config.backdrop === 'static';
    const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
    if (this.modalsCount === 1) {
      this.removeBackdrop();
      if (isBackdropEnabled && isBackdropInDOM) {
        this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
          isAnimated: this.config.animated
        });
        this.backdropRef = this._backdropLoader._componentRef;
      }
    }
  }
  _hideBackdrop() {
    if (!this.backdropRef) {
      return;
    }
    this.backdropRef.instance.isShown = false;
    const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
    setTimeout(() => this.removeBackdrop(), duration);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _showModal(content) {
    const modalLoader = this.loaders[this.loaders.length - 1];
    if (this.config && this.config.providers) {
      for (const provider of this.config.providers) {
        modalLoader.provide(provider);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bsModalRef = new BsModalRef();
    const modalContainerRef = modalLoader.provide({
      provide: ModalOptions,
      useValue: this.config
    }).provide({
      provide: BsModalRef,
      useValue: bsModalRef
    }).attach(ModalContainerComponent).to('body');
    bsModalRef.hide = () => this.hide(bsModalRef.id);
    bsModalRef.setClass = newClass => {
      if (modalContainerRef.instance) {
        modalContainerRef.instance.config.class = newClass;
      }
    };
    bsModalRef.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    bsModalRef.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
    this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden);
    // call 'show' method after assign setClass in bsModalRef.
    // it makes modal component's bsModalRef available to call setClass method
    modalContainerRef.show({
      content,
      isAnimated: this.config.animated,
      initialState: this.config.initialState,
      bsModalService: this,
      id: this.config.id
    });
    if (modalContainerRef.instance) {
      modalContainerRef.instance.level = this.getModalsCount();
      bsModalRef.content = modalLoader.getInnerComponent();
      bsModalRef.id = modalContainerRef.instance.config?.id;
    }
    return bsModalRef;
  }
  _hideModal(id) {
    if (id != null) {
      const indexToRemove = this.loaders.findIndex(loader => loader.instance?.config.id === id);
      const modalLoader = this.loaders[indexToRemove];
      if (modalLoader) {
        modalLoader.hide(id);
      }
    } else {
      this.loaders.forEach(loader => {
        if (loader.instance) {
          loader.hide(loader.instance.config.id);
        }
      });
    }
  }
  getModalsCount() {
    return this.modalsCount;
  }
  setDismissReason(reason) {
    this.lastDismissReason = reason;
  }
  removeBackdrop() {
    this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, CLASS_NAME.OPEN);
    this._renderer.setStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, 'overflow-y', '');
    this._backdropLoader.hide();
    this.backdropRef = void 0;
  }
  /** Checks if the body is overflowing and sets scrollbar width */
  /** @internal */
  checkScrollbar() {
    this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.clientWidth < window.innerWidth;
    this.scrollbarWidth = this.getScrollbarWidth();
  }
  setScrollbar() {
    if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document) {
      return;
    }
    this.originalBodyPadding = parseInt(window.getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body).getPropertyValue('padding-right') || '0', 10);
    if (this.isBodyOverflowing) {
      ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`;
    }
  }
  resetScrollbar() {
    ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body.style.paddingRight = `${this.originalBodyPadding}px`;
  }
  // thx d.walsh
  getScrollbarWidth() {
    const scrollDiv = this._renderer.createElement('div');
    this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
    this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.document.body, scrollDiv);
    return scrollbarWidth;
  }
  _createLoaders() {
    const loader = this.clf.createLoader();
    this.copyEvent(loader.onBeforeShow, this.onShow);
    this.copyEvent(loader.onShown, this.onShown);
    this.copyEvent(loader.onBeforeHide, this.onHide);
    this.copyEvent(loader.onHidden, this.onHidden);
    this.loaders.push(loader);
  }
  removeLoaders(id) {
    if (id != null) {
      const indexToRemove = this.loaders.findIndex(loader => loader.instance?.config.id === id);
      if (indexToRemove >= 0) {
        this.loaders.splice(indexToRemove, 1);
        this.loaders.forEach((loader, i) => {
          if (loader.instance) {
            loader.instance.level = i + 1;
          }
        });
      }
    } else {
      this.loaders.splice(0, this.loaders.length);
    }
  }
  copyEvent(from, to) {
    from.subscribe(data => {
      to.emit(this.lastDismissReason || data);
    });
  }
  static {
    this.ɵfac = function BsModalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BsModalService,
      factory: BsModalService.ɵfac,
      providedIn: 'platform'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'platform'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2
  }, {
    type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderFactory
  }, {
    type: ModalOptions,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
    }]
  }], null);
})();
const focusTrapModule = ngx_bootstrap_focus_trap__WEBPACK_IMPORTED_MODULE_2__.FocusTrapModule.forRoot();
class ModalModule {
  static forRoot() {
    return {
      ngModule: ModalModule,
      providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__.PositioningService]
    };
  }
  static forChild() {
    return {
      ngModule: ModalModule,
      providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__.PositioningService]
    };
  }
  static {
    this.ɵfac = function ModalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [ngx_bootstrap_focus_trap__WEBPACK_IMPORTED_MODULE_2__.FocusTrapModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [ngx_bootstrap_focus_trap__WEBPACK_IMPORTED_MODULE_2__.FocusTrapModule],
      declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
      exports: [ModalBackdropComponent, ModalDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 76925:
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-dropzone-wrapper/fesm2022/ngx-dropzone-wrapper.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DROPZONE_CONFIG: () => (/* binding */ DROPZONE_CONFIG),
/* harmony export */   DropzoneComponent: () => (/* binding */ DropzoneComponent),
/* harmony export */   DropzoneConfig: () => (/* binding */ DropzoneConfig),
/* harmony export */   DropzoneDirective: () => (/* binding */ DropzoneDirective),
/* harmony export */   DropzoneModule: () => (/* binding */ DropzoneModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ 85176);





const _c0 = ["*"];
function DropzoneComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", ctx_r0.getPlaceholder());
  }
}
const DROPZONE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DROPZONE_CONFIG');
const DropzoneEvents = ['error', 'success', 'sending', 'canceled', 'complete', 'processing', 'drop', 'dragStart', 'dragEnd', 'dragEnter', 'dragOver', 'dragLeave', 'thumbnail', 'addedFile', 'addedFiles', 'removedFile', 'uploadProgress', 'maxFilesReached', 'maxFilesExceeded', 'errorMultiple', 'successMultiple', 'sendingMultiple', 'canceledMultiple', 'completeMultiple', 'processingMultiple', 'reset', 'queueComplete', 'totalUploadProgress'];
class DropzoneConfig {
  timeout;
  autoReset;
  errorReset;
  cancelReset;
  url;
  method;
  params;
  headers;
  init;
  accept;
  resize;
  fallback;
  renameFile;
  transformFile;
  chunksUploaded;
  withCredentials;
  previewsContainer;
  hiddenInputContainer;
  clickable;
  paramName;
  capture;
  maxFiles;
  maxFilesize;
  filesizeBase;
  acceptedFiles;
  forceFallback;
  addRemoveLinks;
  uploadMultiple;
  parallelUploads;
  resizeWidth;
  resizeHeight;
  resizeMethod;
  resizeQuality;
  resizeMimeType;
  thumbnailWidth;
  thumbnailHeight;
  thumbnailMethod;
  previewTemplate;
  autoQueue;
  autoProcessQueue;
  ignoreHiddenFiles;
  maxThumbnailFilesize;
  createImageThumbnails;
  chunking;
  chunkSize;
  retryChunks;
  forceChunking;
  retryChunksLimit;
  parallelChunkUploads;
  dictFileSizeUnits;
  dictDefaultMessage;
  dictFallbackMessage;
  dictFileTooBig;
  dictResponseError;
  dictInvalidFileType;
  dictRemoveFile;
  dictCancelUpload;
  dictUploadCanceled;
  dictFallbackText;
  dictMaxFilesExceeded;
  dictRemoveFileConfirmation;
  dictCancelUploadConfirmation;
  constructor(config = {}) {
    this.assign(config);
  }
  assign(config = {}, target) {
    target = target || this;
    for (const key in config) {
      if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' && !(config[key] instanceof HTMLElement)) {
        target[key] = {};
        this.assign(config[key], target[key]);
      } else {
        target[key] = config[key];
      }
    }
  }
}
class DropzoneDirective {
  zone;
  renderer;
  elementRef;
  differs;
  platformId;
  defaults;
  instance;
  configDiff = null;
  disabled = false;
  config;
  DZ_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SUCCESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SENDING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_CANCELED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_COMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_PROCESSING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DROP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGENTER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGOVER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGLEAVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_THUMBNAIL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ADDEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ADDEDFILES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_REMOVEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_UPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_MAXFILESREACHED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_MAXFILESEXCEEDED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ERRORMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SUCCESSMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SENDINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_CANCELEDMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_COMPLETEMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_PROCESSINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_RESET = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_QUEUECOMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_TOTALUPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  constructor(zone, renderer, elementRef, differs, platformId, defaults) {
    this.zone = zone;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.differs = differs;
    this.platformId = platformId;
    this.defaults = defaults;
    const dz = dropzone__WEBPACK_IMPORTED_MODULE_0__.Dropzone;
    dz.autoDiscover = false;
  }
  ngOnInit() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      return;
    }
    const params = new DropzoneConfig(this.defaults);
    params.assign(this.config); // Custom configuration
    this.renderer.addClass(this.elementRef.nativeElement, params.maxFiles === 1 ? "dz-single" : "dz-multiple");
    this.renderer.removeClass(this.elementRef.nativeElement, params.maxFiles === 1 ? "dz-multiple" : "dz-single");
    Object.keys(params).forEach(key => params[key] === undefined && delete params[key]);
    this.zone.runOutsideAngular(() => {
      console.log(params);
      this.instance = new dropzone__WEBPACK_IMPORTED_MODULE_0__.Dropzone(this.elementRef.nativeElement, params);
    });
    if (this.disabled) {
      this.instance.disable();
    }
    if (this.DZ_INIT.observers.length) {
      this.zone.run(() => {
        this.DZ_INIT.emit(this.instance);
      });
    }
    // Add auto reset handling for events
    this.instance.on("success", () => {
      if (params.autoReset != null) {
        setTimeout(() => this.reset(), params.autoReset);
      }
    });
    this.instance.on("error", () => {
      if (params.errorReset != null) {
        setTimeout(() => this.reset(), params.errorReset);
      }
    });
    this.instance.on("canceled", () => {
      if (params.cancelReset != null) {
        setTimeout(() => this.reset(), params.cancelReset);
      }
    });
    // Add native Dropzone event handling
    DropzoneEvents.forEach(eventName => {
      this.instance.on(eventName.toLowerCase(), (...args) => {
        args = args.length === 1 ? args[0] : args;
        const output = `DZ_${eventName.toUpperCase()}`;
        const emitter = this[output];
        if (emitter.observers.length > 0) {
          this.zone.run(() => {
            emitter.emit(args);
          });
        }
      });
    });
    if (!this.configDiff) {
      this.configDiff = this.differs.find(this.config || {}).create();
      this.configDiff.diff(this.config || {});
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.zone.runOutsideAngular(() => {
        this.instance.destroy();
      });
      this.instance = null;
    }
  }
  ngDoCheck() {
    if (!this.disabled && this.configDiff) {
      const changes = this.configDiff.diff(this.config || {});
      if (changes && this.instance) {
        this.ngOnDestroy();
        this.ngOnInit();
      }
    }
  }
  ngOnChanges(changes) {
    if (this.instance && changes["disabled"]) {
      if (changes["disabled"].currentValue !== changes["disabled"].previousValue) {
        if (changes["disabled"].currentValue === false) {
          this.zone.runOutsideAngular(() => {
            this.instance.enable();
          });
        } else if (changes["disabled"].currentValue === true) {
          this.zone.runOutsideAngular(() => {
            this.instance.disable();
          });
        }
      }
    }
  }
  dropzone() {
    return this.instance;
  }
  reset(cancel) {
    if (this.instance) {
      this.zone.runOutsideAngular(() => {
        this.instance.removeAllFiles(cancel);
      });
    }
  }
  static ɵfac = function DropzoneDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DropzoneDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DROPZONE_CONFIG, 8));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: DropzoneDirective,
    selectors: [["", "dropzone", ""]],
    inputs: {
      disabled: "disabled",
      config: [0, "dropzone", "config"]
    },
    outputs: {
      DZ_INIT: "init",
      DZ_ERROR: "error",
      DZ_SUCCESS: "success",
      DZ_SENDING: "sending",
      DZ_CANCELED: "canceled",
      DZ_COMPLETE: "complete",
      DZ_PROCESSING: "processing",
      DZ_DROP: "drop",
      DZ_DRAGSTART: "dragStart",
      DZ_DRAGEND: "dragEnd",
      DZ_DRAGENTER: "dragEnter",
      DZ_DRAGOVER: "dragOver",
      DZ_DRAGLEAVE: "dragLeave",
      DZ_THUMBNAIL: "thumbnail",
      DZ_ADDEDFILE: "addedFile",
      DZ_ADDEDFILES: "addedFiles",
      DZ_REMOVEDFILE: "removedFile",
      DZ_UPLOADPROGRESS: "uploadProgress",
      DZ_MAXFILESREACHED: "maxFilesReached",
      DZ_MAXFILESEXCEEDED: "maxFilesExceeded",
      DZ_ERRORMULTIPLE: "errorMultiple",
      DZ_SUCCESSMULTIPLE: "successMultiple",
      DZ_SENDINGMULTIPLE: "sendingMultiple",
      DZ_CANCELEDMULTIPLE: "canceledMultiple",
      DZ_COMPLETEMULTIPLE: "completeMultiple",
      DZ_PROCESSINGMULTIPLE: "processingMultiple",
      DZ_RESET: "reset",
      DZ_QUEUECOMPLETE: "queueComplete",
      DZ_TOTALUPLOADPROGRESS: "totalUploadProgress"
    },
    exportAs: ["ngxDropzone"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropzoneDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: "[dropzone]",
      exportAs: "ngxDropzone"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [DROPZONE_CONFIG]
    }]
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["dropzone"]
    }],
    DZ_INIT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["init"]
    }],
    DZ_ERROR: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["error"]
    }],
    DZ_SUCCESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["success"]
    }],
    DZ_SENDING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["sending"]
    }],
    DZ_CANCELED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["canceled"]
    }],
    DZ_COMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["complete"]
    }],
    DZ_PROCESSING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["processing"]
    }],
    DZ_DROP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["drop"]
    }],
    DZ_DRAGSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["dragStart"]
    }],
    DZ_DRAGEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["dragEnd"]
    }],
    DZ_DRAGENTER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["dragEnter"]
    }],
    DZ_DRAGOVER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["dragOver"]
    }],
    DZ_DRAGLEAVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["dragLeave"]
    }],
    DZ_THUMBNAIL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["thumbnail"]
    }],
    DZ_ADDEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["addedFile"]
    }],
    DZ_ADDEDFILES: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["addedFiles"]
    }],
    DZ_REMOVEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["removedFile"]
    }],
    DZ_UPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["uploadProgress"]
    }],
    DZ_MAXFILESREACHED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["maxFilesReached"]
    }],
    DZ_MAXFILESEXCEEDED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["maxFilesExceeded"]
    }],
    DZ_ERRORMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["errorMultiple"]
    }],
    DZ_SUCCESSMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["successMultiple"]
    }],
    DZ_SENDINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["sendingMultiple"]
    }],
    DZ_CANCELEDMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["canceledMultiple"]
    }],
    DZ_COMPLETEMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["completeMultiple"]
    }],
    DZ_PROCESSINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["processingMultiple"]
    }],
    DZ_RESET: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["reset"]
    }],
    DZ_QUEUECOMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["queueComplete"]
    }],
    DZ_TOTALUPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["totalUploadProgress"]
    }]
  });
})();
class DropzoneComponent {
  platformId;
  disabled = false;
  config;
  message = 'Click or drag files to upload';
  placeholder = '';
  useDropzoneClass = true;
  DZ_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SUCCESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SENDING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_CANCELED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_COMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_PROCESSING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DROP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGENTER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGOVER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_DRAGLEAVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_THUMBNAIL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ADDEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ADDEDFILES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_REMOVEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_UPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_MAXFILESREACHED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_MAXFILESEXCEEDED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_ERRORMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SUCCESSMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_SENDINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_CANCELEDMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_COMPLETEMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_PROCESSINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_RESET = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_QUEUECOMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  DZ_TOTALUPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  directiveRef;
  constructor(platformId) {
    this.platformId = platformId;
  }
  ngOnInit() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      return;
    }
    window.setTimeout(() => {
      DropzoneEvents.forEach(eventName => {
        if (this.directiveRef) {
          const output = `DZ_${eventName.toUpperCase()}`;
          const directiveOutput = output;
          const componentOutput = output;
          this.directiveRef[directiveOutput] = this[componentOutput];
        }
      });
    }, 0);
  }
  getPlaceholder() {
    return 'url(' + encodeURI(this.placeholder) + ')';
  }
  static ɵfac = function DropzoneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DropzoneComponent,
    selectors: [["dropzone"]],
    viewQuery: function DropzoneComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DropzoneDirective, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
      }
    },
    inputs: {
      disabled: "disabled",
      config: "config",
      message: "message",
      placeholder: "placeholder",
      useDropzoneClass: "useDropzoneClass"
    },
    outputs: {
      DZ_INIT: "init",
      DZ_ERROR: "error",
      DZ_SUCCESS: "success",
      DZ_SENDING: "sending",
      DZ_CANCELED: "canceled",
      DZ_COMPLETE: "complete",
      DZ_PROCESSING: "processing",
      DZ_DROP: "drop",
      DZ_DRAGSTART: "dragStart",
      DZ_DRAGEND: "dragEnd",
      DZ_DRAGENTER: "dragEnter",
      DZ_DRAGOVER: "dragOver",
      DZ_DRAGLEAVE: "dragLeave",
      DZ_THUMBNAIL: "thumbnail",
      DZ_ADDEDFILE: "addedFile",
      DZ_ADDEDFILES: "addedFiles",
      DZ_REMOVEDFILE: "removedFile",
      DZ_UPLOADPROGRESS: "uploadProgress",
      DZ_MAXFILESREACHED: "maxFilesReached",
      DZ_MAXFILESEXCEEDED: "maxFilesExceeded",
      DZ_ERRORMULTIPLE: "errorMultiple",
      DZ_SUCCESSMULTIPLE: "successMultiple",
      DZ_SENDINGMULTIPLE: "sendingMultiple",
      DZ_CANCELEDMULTIPLE: "canceledMultiple",
      DZ_COMPLETEMULTIPLE: "completeMultiple",
      DZ_PROCESSINGMULTIPLE: "processingMultiple",
      DZ_RESET: "reset",
      DZ_QUEUECOMPLETE: "queueComplete",
      DZ_TOTALUPLOADPROGRESS: "totalUploadProgress"
    },
    exportAs: ["ngxDropzone"],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 10,
    consts: [[1, "dz-wrapper", 3, "init", "dropzone", "disabled"], [1, "dz-message"], [1, "dz-text", 3, "innerHTML"], ["class", "dz-image", 3, "background-image", 4, "ngIf"], [1, "dz-image"]],
    template: function DropzoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("init", function DropzoneComponent_Template_div_init_0_listener($event) {
          return ctx.DZ_INIT.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DropzoneComponent_div_3_Template, 1, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dropzone", ctx.useDropzoneClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dropzone", ctx.config)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled)("dz-placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", (ctx.config == null ? null : ctx.config.dictDefaultMessage) || ctx.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.placeholder);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, DropzoneDirective],
    styles: ["dropzone{display:block;width:100%;height:auto}dropzone.flex{display:flex;flex-direction:inherit;min-width:0;min-height:0}dropzone.flex>.dropzone.dz-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}dropzone.flex{align-items:inherit;align-content:inherit;justify-content:inherit;-webkit-box-align:inherit;-webkit-box-pack:inherit}dropzone.flex>.dropzone.dz-wrapper.dz-single{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;-webkit-box-align:center;-webkit-box-pack:center}dropzone.flex>.dropzone.dz-wrapper.dz-multiple{display:flex;flex-flow:row wrap;align-items:flex-start;align-content:flex-start;justify-content:space-between;-webkit-box-align:flex-start;-webkit-box-pack:flex-start}dropzone>.dropzone.dz-wrapper{position:relative;overflow:auto;width:100%;min-height:0;max-height:100%;padding:0;border:none;color:#666;background:transparent}dropzone>.dropzone.dz-wrapper .dz-message{position:relative;display:inline-block;overflow:auto;width:calc(100% - 16px);min-width:calc(100% - 16px);min-height:40px;max-width:calc(100% - 16px);max-height:100%;margin:8px;border:2px dashed #aaa;background-color:#eee}dropzone>.dropzone.dz-wrapper .dz-message .dz-text{position:absolute;top:50%;width:100%;padding:8px 16px;text-align:center;transform:translateY(-50%)}dropzone>.dropzone.dz-wrapper .dz-message .dz-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}dropzone>.dropzone.dz-wrapper .dz-message.disabled{cursor:not-allowed}dropzone>.dropzone.dz-wrapper .dz-message.disabled .dz-text{opacity:.5}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder{border-color:rgba(#aaa,0)}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text{position:absolute;z-index:1;top:0;right:10%;left:10%;opacity:0;font-weight:700;background-color:rgba(#fff,.5);transform:translateY(-50%);transition:filter .25s ease-in-out,opacity .25s ease-in-out,border-color .25s ease-in-out}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{filter:blur(8px)}dropzone>.dropzone.dz-wrapper .dz-preview{margin:8px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-details{padding:24px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress{width:80%;margin-left:-40%;border:1px solid #aaa;border-radius:4px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload{background-color:#666}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span{display:block;overflow:hidden;width:100%;max-width:100%;text-overflow:ellipsis}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone>.dropzone.dz-wrapper.dz-single .dz-message{width:100%;height:100%}dropzone>.dropzone.dz-wrapper.dz-single.dz-started .dz-message{display:none}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview{width:calc(100% - 16px);height:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image{width:100%;height:100%;border-radius:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image img{display:block;width:100%;height:auto;margin:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-error-message{top:50%;left:50%;transform:translate(-50%) translateY(100%)}dropzone>.dropzone.dz-wrapper.dz-multiple.dz-started .dz-message{display:inline-block}\n", "@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-message .dz-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:#000000e6;line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:#fffc}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:#fff6;padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\"\";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropzoneComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dropzone',
      exportAs: 'ngxDropzone',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<div class=\"dz-wrapper\" [class.dropzone]=\"useDropzoneClass\" [dropzone]=\"config\" [disabled]=\"disabled\" (init)=\"DZ_INIT.emit($event)\">\n  <div class=\"dz-message\" [class.disabled]=\"disabled\" [class.dz-placeholder]=\"placeholder\">\n    <div class=\"dz-text\" [innerHTML]=\"config?.dictDefaultMessage || message\"></div>\n\n    <div *ngIf=\"placeholder\" class=\"dz-image\" [style.background-image]=\"getPlaceholder()\"></div>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n",
      styles: ["dropzone{display:block;width:100%;height:auto}dropzone.flex{display:flex;flex-direction:inherit;min-width:0;min-height:0}dropzone.flex>.dropzone.dz-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}dropzone.flex{align-items:inherit;align-content:inherit;justify-content:inherit;-webkit-box-align:inherit;-webkit-box-pack:inherit}dropzone.flex>.dropzone.dz-wrapper.dz-single{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;-webkit-box-align:center;-webkit-box-pack:center}dropzone.flex>.dropzone.dz-wrapper.dz-multiple{display:flex;flex-flow:row wrap;align-items:flex-start;align-content:flex-start;justify-content:space-between;-webkit-box-align:flex-start;-webkit-box-pack:flex-start}dropzone>.dropzone.dz-wrapper{position:relative;overflow:auto;width:100%;min-height:0;max-height:100%;padding:0;border:none;color:#666;background:transparent}dropzone>.dropzone.dz-wrapper .dz-message{position:relative;display:inline-block;overflow:auto;width:calc(100% - 16px);min-width:calc(100% - 16px);min-height:40px;max-width:calc(100% - 16px);max-height:100%;margin:8px;border:2px dashed #aaa;background-color:#eee}dropzone>.dropzone.dz-wrapper .dz-message .dz-text{position:absolute;top:50%;width:100%;padding:8px 16px;text-align:center;transform:translateY(-50%)}dropzone>.dropzone.dz-wrapper .dz-message .dz-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}dropzone>.dropzone.dz-wrapper .dz-message.disabled{cursor:not-allowed}dropzone>.dropzone.dz-wrapper .dz-message.disabled .dz-text{opacity:.5}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder{border-color:rgba(#aaa,0)}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text{position:absolute;z-index:1;top:0;right:10%;left:10%;opacity:0;font-weight:700;background-color:rgba(#fff,.5);transform:translateY(-50%);transition:filter .25s ease-in-out,opacity .25s ease-in-out,border-color .25s ease-in-out}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{filter:blur(8px)}dropzone>.dropzone.dz-wrapper .dz-preview{margin:8px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-details{padding:24px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress{width:80%;margin-left:-40%;border:1px solid #aaa;border-radius:4px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload{background-color:#666}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span{display:block;overflow:hidden;width:100%;max-width:100%;text-overflow:ellipsis}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone>.dropzone.dz-wrapper.dz-single .dz-message{width:100%;height:100%}dropzone>.dropzone.dz-wrapper.dz-single.dz-started .dz-message{display:none}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview{width:calc(100% - 16px);height:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image{width:100%;height:100%;border-radius:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image img{display:block;width:100%;height:auto;margin:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-error-message{top:50%;left:50%;transform:translate(-50%) translateY(100%)}dropzone>.dropzone.dz-wrapper.dz-multiple.dz-started .dz-message{display:inline-block}\n", "@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-message .dz-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:#000000e6;line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:#fffc}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:#fff6;padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\"\";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n"]
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
    }]
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    useDropzoneClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    DZ_INIT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['init']
    }],
    DZ_ERROR: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['error']
    }],
    DZ_SUCCESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['success']
    }],
    DZ_SENDING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['sending']
    }],
    DZ_CANCELED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['canceled']
    }],
    DZ_COMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['complete']
    }],
    DZ_PROCESSING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['processing']
    }],
    DZ_DROP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['drop']
    }],
    DZ_DRAGSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragStart']
    }],
    DZ_DRAGEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragEnd']
    }],
    DZ_DRAGENTER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragEnter']
    }],
    DZ_DRAGOVER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragOver']
    }],
    DZ_DRAGLEAVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragLeave']
    }],
    DZ_THUMBNAIL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['thumbnail']
    }],
    DZ_ADDEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['addedFile']
    }],
    DZ_ADDEDFILES: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['addedFiles']
    }],
    DZ_REMOVEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['removedFile']
    }],
    DZ_UPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['uploadProgress']
    }],
    DZ_MAXFILESREACHED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['maxFilesReached']
    }],
    DZ_MAXFILESEXCEEDED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['maxFilesExceeded']
    }],
    DZ_ERRORMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['errorMultiple']
    }],
    DZ_SUCCESSMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['successMultiple']
    }],
    DZ_SENDINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['sendingMultiple']
    }],
    DZ_CANCELEDMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['canceledMultiple']
    }],
    DZ_COMPLETEMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['completeMultiple']
    }],
    DZ_PROCESSINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['processingMultiple']
    }],
    DZ_RESET: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['reset']
    }],
    DZ_QUEUECOMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['queueComplete']
    }],
    DZ_TOTALUPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['totalUploadProgress']
    }],
    directiveRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [DropzoneDirective, {
        static: true
      }]
    }]
  });
})();
class DropzoneModule {
  static ɵfac = function DropzoneModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DropzoneModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DropzoneModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropzoneModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [DropzoneComponent, DropzoneDirective],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, DropzoneComponent, DropzoneDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_chat_service_ts-src_app_shared_ui_loader_loader_component_ts-no-cd042c.js.map