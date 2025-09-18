"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_clients_clients_module_ts"],{

/***/ 5636:
/*!******************************************************************!*\
  !*** ./src/app/pages/clients/clientlist/clientlist.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientlistComponent: () => (/* binding */ ClientlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ui/pagetitle/pagetitle.component */ 56551);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 2457);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ 16344);










const _c0 = ["newClientModal"];
const _c1 = ["editClientModal"];
const _c2 = ["inviteClientModal"];
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function ClientlistComponent_For_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r2.label);
  }
}
function ClientlistComponent_For_94_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, client_r5.lastInvitedAt, "short"));
  }
}
function ClientlistComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ClientlistComponent_For_94_Conditional_18_Template, 3, 4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td")(23, "div", 114)(24, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_For_94_Template_button_click_24_listener() {
      const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.openInviteModal(client_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_For_94_Template_button_click_26_listener() {
      const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.openEditModal(client_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const client_r5 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r5.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r5.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r5.email || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.formatPhoneForDisplay(client_r5.phone));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", client_r5.entityType === "INDIVIDUAL" ? "bg-primary" : "bg-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", client_r5.entityType || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r5.getClientStatusClass(client_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.getClientStatusText(client_r5.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r5.getInvitationStatusClass(client_r5.invitationStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.getInvitationStatusText(client_r5.invitationStatus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](client_r5.lastInvitedAt ? 18 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 13, client_r5.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", client_r5.invitationStatus === "accepted");
  }
}
function ClientlistComponent_ForEmpty_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 121)(2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No clients found. Click \"New Client\" to add your first client. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ClientlistComponent_Conditional_112_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " First name is required. ");
  }
}
function ClientlistComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_112_Conditional_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_4_0 = ctx_r5.createClientForm.get("firstName")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) ? 1 : -1);
  }
}
function ClientlistComponent_Conditional_118_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Last name is required. ");
  }
}
function ClientlistComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_118_Conditional_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_4_0 = ctx_r5.createClientForm.get("lastName")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) ? 1 : -1);
  }
}
function ClientlistComponent_Conditional_126_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Email is required. ");
  }
}
function ClientlistComponent_Conditional_126_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Please enter a valid email address. ");
  }
}
function ClientlistComponent_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_126_Conditional_1_Template, 1, 0)(2, ClientlistComponent_Conditional_126_Conditional_2_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_4_0 = ctx_r5.createClientForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_5_0 = ctx_r5.createClientForm.get("email")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["email"]) ? 2 : -1);
  }
}
function ClientlistComponent_Conditional_151_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Entity type is required. ");
  }
}
function ClientlistComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_151_Conditional_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_4_0 = ctx_r5.createClientForm.get("entityType")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) ? 1 : -1);
  }
}
function ClientlistComponent_Conditional_171_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Status is required. ");
  }
}
function ClientlistComponent_Conditional_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_171_Conditional_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_4_0 = ctx_r5.createClientForm.get("status")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) ? 1 : -1);
  }
}
function ClientlistComponent_Conditional_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Creating... ");
  }
}
function ClientlistComponent_Conditional_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Add Client ");
  }
}
function ClientlistComponent_Conditional_197_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " First name is required. ");
  }
}
function ClientlistComponent_Conditional_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_197_Conditional_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx_r5.ef["firstName"].errors == null ? null : ctx_r5.ef["firstName"].errors["required"]) ? 1 : -1);
  }
}
function ClientlistComponent_Conditional_205_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Last name is required. ");
  }
}
function ClientlistComponent_Conditional_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_205_Conditional_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx_r5.ef["lastName"].errors == null ? null : ctx_r5.ef["lastName"].errors["required"]) ? 1 : -1);
  }
}
function ClientlistComponent_Conditional_211_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Please enter a valid email address. ");
  }
}
function ClientlistComponent_Conditional_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_211_Conditional_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx_r5.ef["email"].errors == null ? null : ctx_r5.ef["email"].errors["email"]) ? 1 : -1);
  }
}
function ClientlistComponent_Conditional_256_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Updating... ");
  }
}
function ClientlistComponent_Conditional_257_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Update Client ");
  }
}
function ClientlistComponent_Conditional_303_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Last sent: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r5.selectedClient == null ? null : ctx_r5.selectedClient.lastInvitedAt, "medium"), "");
  }
}
function ClientlistComponent_Conditional_318_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Resending... ");
  }
}
function ClientlistComponent_Conditional_318_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Resend Invitation ");
  }
}
function ClientlistComponent_Conditional_318_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_318_Conditional_1_Template, 2, 0)(2, ClientlistComponent_Conditional_318_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r5.inviteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r5.inviteLoading ? 1 : 2);
  }
}
function ClientlistComponent_Conditional_319_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sending... ");
  }
}
function ClientlistComponent_Conditional_319_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Send Invitation ");
  }
}
function ClientlistComponent_Conditional_319_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientlistComponent_Conditional_319_Conditional_1_Template, 2, 0)(2, ClientlistComponent_Conditional_319_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r5.inviteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r5.inviteLoading ? 1 : 2);
  }
}
class ClientlistComponent {
  constructor(apiService, formBuilder) {
    this.apiService = apiService;
    this.formBuilder = formBuilder;
    this.clients = [];
    this.filteredClients = [];
    this.searchTerm = '';
    // Filter options
    this.statusFilter = 'all';
    this.statusOptions = [{
      value: 'all',
      label: 'All Clients'
    }, {
      value: 'lead',
      label: 'Lead'
    }, {
      value: 'invited',
      label: 'Invited'
    }, {
      value: 'active',
      label: 'Active'
    }, {
      value: 'complete',
      label: 'Complete'
    }];
    this.submitted = false;
    this.loading = false;
    this.error = '';
    this.editSubmitted = false;
    this.editLoading = false;
    this.selectedClient = null;
    this.inviteSubmitted = false;
    this.inviteLoading = false;
  }
  /**
   * Apply search and status filters
   */
  applyFilters() {
    let filtered = [...this.clients];
    // Apply status filter
    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(client => client.status === this.statusFilter);
    }
    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(client => client.firstName?.toLowerCase().includes(term) || client.lastName?.toLowerCase().includes(term) || client.email?.toLowerCase().includes(term));
    }
    this.filteredClients = filtered;
  }
  /**
   * Handle search input change
   */
  searchClients() {
    this.applyFilters();
  }
  /**
   * Handle status filter change
   */
  onStatusFilterChange() {
    this.applyFilters();
  }
  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Clients'
    }, {
      label: 'Clients List',
      active: true
    }];
    // Initialize the form for your backend API with all required fields
    this.createClientForm = this.formBuilder.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phoneNumber: [''],
      // Optional field
      entityType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      status: ['lead', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]] // Default to 'lead'
    });
    // Initialize the edit form with all editable fields
    this.editClientForm = this.formBuilder.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phoneNumber: [''],
      // Optional field
      entityType: [''],
      status: ['']
    });
    // Initialize the invitation form
    this.inviteClientForm = this.formBuilder.group({
      emailTemplate: [this.getDefaultEmailTemplate()]
    });
    // Load initial clients data
    this.loadClients();
  }
  // Save Client
  saveClient() {
    this.submitted = true;
    if (this.createClientForm.valid) {
      this.loading = true;
      this.error = '';
      // Debug token status before making request
      this.apiService.debugTokenStatus();
      // Build the client data object with required fields
      const clientData = {
        email: this.createClientForm.value.email,
        firstName: this.createClientForm.value.firstName,
        lastName: this.createClientForm.value.lastName
      };
      // Only add optional fields if they have values
      if (this.createClientForm.value.phoneNumber && this.createClientForm.value.phoneNumber.trim()) {
        clientData.phone = this.cleanPhoneNumber(this.createClientForm.value.phoneNumber);
      }
      if (this.createClientForm.value.entityType) {
        clientData.entityType = this.createClientForm.value.entityType;
      }
      if (this.createClientForm.value.status) {
        clientData.status = this.createClientForm.value.status;
      }
      this.apiService.createClient(clientData).subscribe({
        next: response => {
          this.loading = false;
          if (response.success) {
            // Show success message
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'Success!',
              text: 'Client has been created successfully.',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });
            // Reset form and close modal
            this.createClientForm.reset();
            this.createClientForm.patchValue({
              entityType: 'INDIVIDUAL',
              status: 'lead'
            });
            this.submitted = false;
            // Reload clients list
            this.loadClients();
            // Close modal
            this.newClientModal?.hide();
          } else {
            this.error = response.message || 'Failed to create client';
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'Error!',
              text: this.error,
              icon: 'error',
              confirmButtonColor: '#d33',
              confirmButtonText: 'OK'
            });
          }
        },
        error: error => {
          this.loading = false;
          console.error('Error creating client:', error);
          let errorMessage = 'Failed to create client. Please try again.';
          // Check if it's an authentication error
          if (error.status === 401 || error.status === 403) {
            errorMessage = 'Authentication failed. Please log in again.';
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
          this.error = errorMessage;
          // Show error modal
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      console.log('Form is invalid');
      // Mark all fields as touched to show validation errors
      Object.keys(this.createClientForm.controls).forEach(key => {
        this.createClientForm.get(key)?.markAsTouched();
      });
    }
  }
  // Load clients data
  loadClients() {
    this.apiService.getClients().subscribe({
      next: response => {
        console.log('Clients response:', response);
        if (response.success && response.clients) {
          this.clients = response.clients;
          this.applyFilters();
        } else {
          console.warn('No clients found in response');
          this.clients = [];
          this.filteredClients = [];
        }
      },
      error: error => {
        console.error('Error loading clients:', error);
        this.clients = [];
        this.filteredClients = [];
      }
    });
  }
  // Convenience getters for easy access to form fields
  get f() {
    return this.createClientForm.controls;
  }
  get ef() {
    return this.editClientForm.controls;
  }
  // Format phone number as user types
  formatPhoneNumber(event) {
    let value = event.target.value.replace(/\D/g, ''); // Remove all non-digits
    if (value.length >= 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    // Limit to 14 characters: (XXX) XXX-XXXX
    if (value.length > 14) {
      value = value.slice(0, 14);
    }
    event.target.value = value;
    // Update form control with formatted value
    if (event.target.id === 'client-phone-input') {
      this.createClientForm.patchValue({
        phoneNumber: value
      });
    } else if (event.target.id === 'editPhoneNumber') {
      this.editClientForm.patchValue({
        phoneNumber: value
      });
    }
  }
  // Clean phone number for API (remove formatting)
  cleanPhoneNumber(phone) {
    return phone ? phone.replace(/\D/g, '') : '';
  }
  // Format phone number for display in forms and table
  formatPhoneForDisplay(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  }
  // Open edit modal and populate form with client data
  openEditModal(client) {
    this.selectedClient = client;
    // Format phone number for display
    const formattedPhone = this.formatPhoneForDisplay(client.phone || '');
    this.editClientForm.patchValue({
      firstName: client.firstName || '',
      lastName: client.lastName || '',
      email: client.email || '',
      phoneNumber: formattedPhone,
      // Backend uses 'phone' field name
      entityType: client.entityType || '',
      status: client.status || ''
    });
    this.editSubmitted = false;
    this.editClientModal?.show();
  }
  // Update existing client
  updateClient() {
    this.editSubmitted = true;
    if (this.editClientForm.invalid) {
      return;
    }
    this.editLoading = true;
    const clientData = {
      firstName: this.ef['firstName'].value,
      lastName: this.ef['lastName'].value,
      email: this.ef['email'].value || undefined,
      phone: this.ef['phoneNumber'].value ? this.cleanPhoneNumber(this.ef['phoneNumber'].value) : undefined,
      entityType: this.ef['entityType'].value || undefined,
      status: this.ef['status'].value || undefined
    };
    this.apiService.updateClient(this.selectedClient.id, clientData).subscribe({
      next: response => {
        console.log('Client updated:', response);
        if (response.success) {
          // Show success message
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Success!',
            text: 'Client has been updated successfully.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
          this.editClientModal?.hide();
          this.loadClients(); // Refresh the client list
          this.editClientForm.reset();
          this.selectedClient = null;
        } else {
          // Show error message
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Error!',
            text: response.message || 'Failed to update client.',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
        this.editLoading = false;
      },
      error: error => {
        console.error('Error updating client:', error);
        this.editLoading = false;
        let errorMessage = 'Failed to update client. Please try again.';
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        // Show error modal
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      }
    });
  }
  // Invitation-related methods
  /**
   * Get default email template for invitations
   */
  getDefaultEmailTemplate() {
    return `Dear {clientName},

You have been invited to access your client portal for Firm Pilot.

As a valued client, you now have secure access to:
• View your account information
• Upload and manage documents
• Track the progress of your services
• Communicate directly with our team

To get started, please click the link below to set up your account:
{invitationLink}

This invitation will expire on {expiryDate}. If you have any questions, please don't hesitate to contact us.

Best regards,
{firmName}`;
  }
  /**
   * Open invitation modal for a client
   */
  openInviteModal(client) {
    this.selectedClient = client;
    // Reset form with default values
    this.inviteClientForm.patchValue({
      emailTemplate: this.getDefaultEmailTemplate()
    });
    this.inviteSubmitted = false;
    this.inviteClientModal?.show();
  }
  /**
   * Send invitation to client
   */
  sendInvitation() {
    this.inviteSubmitted = true;
    if (this.inviteClientForm.invalid || !this.selectedClient?.id) {
      return;
    }
    this.inviteLoading = true;
    const inviteData = {
      message: this.inviteClientForm.value.emailTemplate || undefined
    };
    this.apiService.inviteClient(this.selectedClient.id, inviteData).subscribe({
      next: response => {
        console.log('Invitation sent:', response);
        if (response.success) {
          // Show success message
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Success!',
            text: 'Invitation has been sent successfully.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
          this.inviteClientModal?.hide();
          this.loadClients(); // Refresh the client list to update invitation status
          this.inviteClientForm.reset();
          this.selectedClient = null;
        } else {
          // Show error message
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Error!',
            text: response.message || 'Failed to send invitation.',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
        this.inviteLoading = false;
      },
      error: error => {
        console.error('Error sending invitation:', error);
        this.inviteLoading = false;
        let errorMessage = 'Failed to send invitation. Please try again.';
        // Handle authentication errors
        if (error.status === 401 || error.status === 403) {
          errorMessage = 'Authentication failed. Please log in again.';
        } else if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        // Show error modal
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      }
    });
  }
  /**
   * Get CSS class for invitation status badge
   */
  getInvitationStatusClass(status) {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'sent':
        return 'bg-info';
      case 'accepted':
        return 'bg-success';
      case 'expired':
        return 'bg-danger';
      case 'not_invited':
      default:
        return 'bg-secondary';
    }
  }
  /**
   * Get display text for invitation status
   */
  getInvitationStatusText(status) {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'sent':
        return 'Sent';
      case 'accepted':
        return 'Accepted';
      case 'expired':
        return 'Expired';
      case 'not_invited':
        return 'Not Invited';
      default:
        return 'Not Invited';
    }
  }
  /**
   * Get form controls for invitation form (convenience getter)
   */
  get if() {
    return this.inviteClientForm.controls;
  }
  /**
   * Get summary statistics for clients
   */
  getClientStats() {
    const total = this.clients.length;
    const lead = this.clients.filter(client => client.status === 'lead').length;
    const invited = this.clients.filter(client => client.status === 'invited').length;
    const active = this.clients.filter(client => client.status === 'active').length;
    const complete = this.clients.filter(client => client.status === 'complete').length;
    return {
      total,
      lead,
      invited,
      active,
      complete
    };
  }
  /**
   * Get CSS class for client status badge
   */
  getClientStatusClass(status) {
    switch (status) {
      case 'lead':
        return 'bg-warning';
      case 'invited':
        return 'bg-info';
      case 'active':
        return 'bg-success';
      case 'complete':
        return 'bg-primary';
      default:
        return 'bg-secondary';
    }
  }
  /**
   * Get display text for client status
   */
  getClientStatusText(status) {
    switch (status) {
      case 'lead':
        return 'Lead';
      case 'invited':
        return 'Invited';
      case 'active':
        return 'Active';
      case 'complete':
        return 'Complete';
      default:
        return 'Unknown';
    }
  }
  static {
    this.ɵfac = function ClientlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ClientlistComponent,
      selectors: [["app-clientlist"]],
      viewQuery: function ClientlistComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.newClientModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editClientModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inviteClientModal = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 320,
      vars: 60,
      consts: [["newClientModal", "bs-modal"], ["editClientModal", "bs-modal"], ["inviteClientModal", "bs-modal"], [1, "container-fluid"], [1, "mt-5", "pt-4"], ["title", "Clients List", 3, "breadcrumbItems"], [1, "row", "mb-4"], [1, "col-xl-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "d-flex"], [1, "flex-1", "overflow-hidden"], [1, "text-truncate", "font-size-14", "mb-2"], [1, "mb-0"], [1, "text-primary"], [1, "bx", "bx-user", "font-size-24"], [1, "text-warning"], [1, "bx", "bx-user-plus", "font-size-24"], [1, "text-success"], [1, "bx", "bx-check-circle", "font-size-24"], [1, "bx", "bx-check-double", "font-size-24"], [1, "row"], [1, "col-lg-12"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "id", "searchTableList", "placeholder", "Search clients...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-search-alt", "search-icon"], [1, "form-select", "form-select-primary", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-info", "btn-rounded", "waves-effect", "waves-light", "mb-2", "me-2", 3, "click"], [1, "mdi", "mdi-refresh", "me-1"], ["type", "button", "data-bs-toggle", "modal", 1, "btn", "btn-success", "btn-rounded", "waves-effect", "waves-light", "addClient-modal", "mb-2", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], [1, "table-responsive"], [1, "table", "table-nowrap", "align-middle"], [1, "table-light"], ["bsModal", "", "id", "newClientModal", "tabindex", "-1", "aria-labelledby", "newClientModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "newClientModalLabel", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["autocomplete", "off", "id", "createClient-form", "novalidate", "", 1, "needs-validation", "createClient-form", 3, "ngSubmit", "formGroup"], [1, "col-lg-6"], [1, "mb-3"], ["for", "client-firstName-input", 1, "form-label"], ["type", "text", "id", "client-firstName-input", "placeholder", "Enter first name", "formControlName", "firstName", "required", "", 1, "form-control"], [1, "invalid-feedback"], ["for", "client-lastName-input", 1, "form-label"], ["type", "text", "id", "client-lastName-input", "placeholder", "Enter last name", "formControlName", "lastName", "required", "", 1, "form-control"], ["for", "client-email-input", 1, "form-label"], [1, "text-danger"], ["type", "email", "id", "client-email-input", "placeholder", "Enter email address", "formControlName", "email", "required", "", 1, "form-control"], ["for", "client-phone-input", 1, "form-label"], ["type", "tel", "id", "client-phone-input", "placeholder", "(XXX) XXX-XXXX", "formControlName", "phoneNumber", "maxlength", "14", 1, "form-control", 3, "input"], ["for", "client-entityType-input", 1, "form-label"], ["id", "client-entityType-input", "formControlName", "entityType", "required", "", 1, "form-select"], ["value", ""], ["value", "INDIVIDUAL"], ["value", "BUSINESS"], ["value", "CORPORATION"], ["value", "PARTNERSHIP"], ["value", "LLC"], ["for", "client-status-input", 1, "form-label"], ["id", "client-status-input", "formControlName", "status", "required", "", 1, "form-select"], ["value", "lead"], ["value", "invited"], ["value", "active"], ["value", "inactive"], ["value", "suspended"], [1, "text-end"], ["type", "button", 1, "btn", "btn-outline-secondary", "me-2", 3, "click", "disabled"], ["type", "submit", "id", "addClient-btn", 1, "btn", "btn-success", 3, "disabled"], ["bsModal", "", "id", "editClientModal", "tabindex", "-1", "aria-labelledby", "editClientModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "editClientModalLabel", 1, "modal-title"], [3, "ngSubmit", "formGroup"], ["for", "editFirstName", 1, "form-label"], ["type", "text", "id", "editFirstName", "formControlName", "firstName", 1, "form-control"], ["for", "editLastName", 1, "form-label"], ["type", "text", "id", "editLastName", "formControlName", "lastName", 1, "form-control"], ["for", "editEmail", 1, "form-label"], ["type", "email", "id", "editEmail", "formControlName", "email", 1, "form-control"], ["for", "editPhoneNumber", 1, "form-label"], ["type", "tel", "id", "editPhoneNumber", "formControlName", "phoneNumber", "placeholder", "(XXX) XXX-XXXX", "maxlength", "14", 1, "form-control", 3, "input"], ["for", "editEntityType", 1, "form-label"], ["id", "editEntityType", "formControlName", "entityType", 1, "form-select"], ["for", "editStatus", 1, "form-label"], ["id", "editStatus", "formControlName", "status", 1, "form-select"], ["type", "submit", "id", "updateClient-btn", 1, "btn", "btn-primary", 3, "disabled"], ["bsModal", "", "id", "inviteClientModal", "tabindex", "-1", "aria-labelledby", "inviteClientModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], ["id", "inviteClientModalLabel", 1, "modal-title"], [1, "bx", "bx-mail-send", "me-2"], ["autocomplete", "off", "id", "inviteClient-form", "novalidate", "", 1, "needs-validation", "inviteClient-form", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "card", "bg-light"], [1, "card-body", "p-3"], [1, "card-title", "mb-2"], [1, "col-md-6"], [1, "mb-1"], [1, "badge", 3, "ngClass"], [1, "form-label"], [1, "mt-2"], [1, "text-muted", "small", "mt-1"], ["for", "invite-template-input", 1, "form-label"], ["id", "invite-template-input", "rows", "8", "formControlName", "emailTemplate", "placeholder", "Customize the invitation email...", 1, "form-control"], [1, "form-text"], [1, "text-muted"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "d-flex", "gap-2"], ["type", "button", "title", "Invite Client", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "disabled"], [1, "bx", "bx-mail-send"], ["type", "button", "title", "Edit", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bx", "bx-pencil"], ["type", "button", "title", "Delete", 1, "btn", "btn-sm", "btn-outline-danger"], [1, "bx", "bx-trash"], ["colspan", "9", 1, "text-center", "py-4"], [1, "bx", "bx-user-plus", "font-size-48", "text-muted", "d-block", "mb-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bx", "bx-refresh", "me-1"], [1, "bx", "bx-mail-send", "me-1"]],
      template: function ClientlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-page-title", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Total Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h4", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "div", 8)(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Leads");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h4", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7)(27, "div", 8)(28, "div", 9)(29, "div", 10)(30, "div", 11)(31, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h4", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 7)(38, "div", 8)(39, "div", 9)(40, "div", 10)(41, "div", 11)(42, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Complete");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h4", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 21)(49, "div", 22)(50, "div", 8)(51, "div", 9)(52, "div", 23)(53, "div", 24)(54, "div", 25)(55, "div", 26)(56, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ClientlistComponent_Template_input_ngModelChange_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientlistComponent_Template_input_ngModelChange_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.searchClients());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 24)(59, "select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ClientlistComponent_Template_select_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.statusFilter, $event) || (ctx.statusFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientlistComponent_Template_select_ngModelChange_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onStatusFilterChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](60, ClientlistComponent_For_61_Template, 2, 2, "option", 30, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 24)(63, "div", 31)(64, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.loadClients());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Refresh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const newClientModal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](97);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](newClientModal_r3.show());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " New Client");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 36)(71, "table", 37)(72, "thead", 38)(73, "tr")(74, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Entity Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Invitation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Created Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](93, ClientlistComponent_For_94_Template, 30, 16, "tr", null, _forTrack1, false, ClientlistComponent_ForEmpty_95_Template, 5, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 39, 0)(98, "div", 40)(99, "div", 41)(100, "div", 42)(101, "h5", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Add New Client");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_103_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const newClientModal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](97);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](newClientModal_r3.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 45)(105, "form", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ClientlistComponent_Template_form_ngSubmit_105_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.saveClient());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 21)(107, "div", 47)(108, "div", 48)(109, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](112, ClientlistComponent_Conditional_112_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 47)(114, "div", 48)(115, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, ClientlistComponent_Conditional_118_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 47)(120, "div", 48)(121, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](126, ClientlistComponent_Conditional_126_Template, 3, 2, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 47)(128, "div", 48)(129, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ClientlistComponent_Template_input_input_131_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.formatPhoneNumber($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 47)(133, "div", 48)(134, "label", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Entity Type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "select", 60)(139, "option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Select Entity Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Individual");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Corporation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "option", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Partnership");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "option", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "LLC");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](151, ClientlistComponent_Conditional_151_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 47)(153, "div", 48)(154, "label", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Status ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "select", 68)(159, "option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Select Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "option", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Lead");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "option", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Invited");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "option", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "option", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "option", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Suspended");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](171, ClientlistComponent_Conditional_171_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 22)(173, "div", 74)(174, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_174_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const newClientModal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](97);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](newClientModal_r3.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "button", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](177, ClientlistComponent_Conditional_177_Template, 2, 0)(178, ClientlistComponent_Conditional_178_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 77, 1)(181, "div", 40)(182, "div", 41)(183, "div", 42)(184, "h5", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Edit Client");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_186_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const editClientModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](180);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](editClientModal_r7.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 45)(188, "form", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ClientlistComponent_Template_form_ngSubmit_188_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.updateClient());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 21)(190, "div", 47)(191, "div", 48)(192, "label", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "First Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](197, ClientlistComponent_Conditional_197_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 47)(199, "div", 48)(200, "label", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Last Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "input", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](205, ClientlistComponent_Conditional_205_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 47)(207, "div", 48)(208, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](210, "input", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](211, ClientlistComponent_Conditional_211_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 47)(213, "div", 48)(214, "label", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ClientlistComponent_Template_input_input_216_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.formatPhoneNumber($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 47)(218, "div", 48)(219, "label", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "Entity Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "select", 89)(222, "option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Select Entity Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Individual");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Corporation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "option", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "Partnership");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "option", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "LLC");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 47)(235, "div", 48)(236, "label", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "select", 91)(239, "option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Select Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "option", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Lead");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "option", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Invited");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "option", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "option", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "option", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Suspended");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 22)(252, "div", 74)(253, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_253_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const editClientModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](180);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](editClientModal_r7.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "button", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](256, ClientlistComponent_Conditional_256_Template, 2, 0)(257, ClientlistComponent_Conditional_257_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 93, 2)(260, "div", 94)(261, "div", 41)(262, "div", 42)(263, "h5", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](264, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "Send Client Invitation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_266_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const inviteClientModal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](259);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](inviteClientModal_r8.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "div", 45)(268, "form", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ClientlistComponent_Template_form_ngSubmit_268_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.sendInvitation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "div", 6)(270, "div", 98)(271, "div", 99)(272, "div", 100)(273, "h6", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "Client Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "div", 21)(276, "div", 102)(277, "p", 103)(278, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "p", 103)(282, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "div", 102)(286, "p", 103)(287, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "Entity Type:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "p", 103)(291, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Status:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "span", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 21)(296, "div", 98)(297, "div", 48)(298, "label", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Current Invitation Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 106)(301, "span", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](303, ClientlistComponent_Conditional_303_Template, 3, 4, "div", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "div", 21)(305, "div", 98)(306, "div", 48)(307, "label", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "Email Template");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](309, "textarea", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 110)(311, "small", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "div", 21)(314, "div", 98)(315, "div", 74)(316, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientlistComponent_Template_button_click_316_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const inviteClientModal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](259);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](inviteClientModal_r8.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](318, ClientlistComponent_Conditional_318_Template, 3, 2, "button", 112)(319, ClientlistComponent_Conditional_319_Template, 3, 2, "button", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          let tmp_13_0;
          let tmp_14_0;
          let tmp_15_0;
          let tmp_16_0;
          let tmp_17_0;
          let tmp_18_0;
          let tmp_19_0;
          let tmp_20_0;
          let tmp_21_0;
          let tmp_22_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getClientStats().total);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getClientStats().lead);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getClientStats().active);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getClientStats().complete);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.filteredClients);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.createClientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_13_0 = ctx.createClientForm.get("firstName")) == null ? null : tmp_13_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.submitted && ((tmp_14_0 = ctx.createClientForm.get("firstName")) == null ? null : tmp_14_0.errors) ? 112 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_15_0 = ctx.createClientForm.get("lastName")) == null ? null : tmp_15_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.submitted && ((tmp_16_0 = ctx.createClientForm.get("lastName")) == null ? null : tmp_16_0.errors) ? 118 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_17_0 = ctx.createClientForm.get("email")) == null ? null : tmp_17_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.submitted && ((tmp_18_0 = ctx.createClientForm.get("email")) == null ? null : tmp_18_0.errors) ? 126 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_19_0 = ctx.createClientForm.get("entityType")) == null ? null : tmp_19_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.submitted && ((tmp_20_0 = ctx.createClientForm.get("entityType")) == null ? null : tmp_20_0.errors) ? 151 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_21_0 = ctx.createClientForm.get("status")) == null ? null : tmp_21_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.submitted && ((tmp_22_0 = ctx.createClientForm.get("status")) == null ? null : tmp_22_0.errors) ? 171 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.loading ? 177 : 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.editClientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.editSubmitted && ctx.ef["firstName"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.editSubmitted && ctx.ef["firstName"].errors ? 197 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.editSubmitted && ctx.ef["lastName"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.editSubmitted && ctx.ef["lastName"].errors ? 205 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.editSubmitted && ctx.ef["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.editSubmitted && ctx.ef["email"].errors ? 211 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.editLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.editLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.editLoading ? 256 : 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.inviteClientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.selectedClient == null ? null : ctx.selectedClient.firstName, " ", ctx.selectedClient == null ? null : ctx.selectedClient.lastName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.selectedClient == null ? null : ctx.selectedClient.email, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx.selectedClient == null ? null : ctx.selectedClient.entityType) || "N/A", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", (ctx.selectedClient == null ? null : ctx.selectedClient.status) === "lead" ? "bg-info" : (ctx.selectedClient == null ? null : ctx.selectedClient.status) === "active" ? "bg-success" : "bg-secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx.selectedClient == null ? null : ctx.selectedClient.status) || "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.getInvitationStatusClass(ctx.selectedClient == null ? null : ctx.selectedClient.invitationStatus));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getInvitationStatusText(ctx.selectedClient == null ? null : ctx.selectedClient.invitationStatus), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx.selectedClient == null ? null : ctx.selectedClient.lastInvitedAt) ? 303 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate8"](" Available variables: ", "{", "clientName", "}", ", ", "{", "firmName", "}", ", ", "{", "invitationLink", "}", ", ", "{", "expiryDate", "}", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.inviteLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx.selectedClient == null ? null : ctx.selectedClient.invitationStatus) === "pending" || (ctx.selectedClient == null ? null : ctx.selectedClient.invitationStatus) === "sent" ? 318 : 319);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 66899:
/*!*********************************************************!*\
  !*** ./src/app/pages/clients/clients-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsRoutingModule: () => (/* binding */ ClientsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _clientlist_clientlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientlist/clientlist.component */ 5636);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/guards/role.guard */ 80400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





// Later you can create dedicated Client components
const routes = [{
  path: 'list',
  component: _clientlist_clientlist_component__WEBPACK_IMPORTED_MODULE_0__.ClientlistComponent,
  canActivate: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
  data: {
    role: 'ACCOUNTANT'
  }
}];
class ClientsRoutingModule {
  static {
    this.ɵfac = function ClientsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ClientsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClientsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 58194:
/*!*************************************************!*\
  !*** ./src/app/pages/clients/clients.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsModule: () => (/* binding */ ClientsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-routing.module */ 66899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class ClientsModule {
  static {
    this.ɵfac = function ClientsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ClientsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_clients_clients_module_ts.js.map