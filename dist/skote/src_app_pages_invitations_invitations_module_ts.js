"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_invitations_invitations_module_ts"],{

/***/ 9520:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/invitations/invitation-management/invitation-management.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvitationManagementComponent: () => (/* binding */ InvitationManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ui/pagetitle/pagetitle.component */ 56551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/api.service */ 16344);







const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function InvitationManagementComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r1.label);
  }
}
function InvitationManagementComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "div", 34)(2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loading invitations...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function InvitationManagementComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.error, " ");
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const invitation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, invitation_r3.sentAt, "medium"), " ");
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const invitation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", invitation_r3.status === "expired" ? "text-danger" : "text-muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, invitation_r3.expiresAt, "medium"), " ");
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const invitation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, invitation_r3.acceptedAt, "medium"), " ");
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvitationManagementComponent_Conditional_68_For_20_Conditional_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const invitation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.resendInvitation(invitation_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InvitationManagementComponent_Conditional_68_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, InvitationManagementComponent_Conditional_68_For_20_Conditional_12_Template, 2, 4)(13, InvitationManagementComponent_Conditional_68_For_20_Conditional_13_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, InvitationManagementComponent_Conditional_68_For_20_Conditional_15_Template, 3, 5, "span", 44)(16, InvitationManagementComponent_Conditional_68_For_20_Conditional_16_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, InvitationManagementComponent_Conditional_68_For_20_Conditional_18_Template, 2, 4)(19, InvitationManagementComponent_Conditional_68_For_20_Conditional_19_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td")(21, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, InvitationManagementComponent_Conditional_68_For_20_Conditional_22_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const invitation_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invitation_r3.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ID: ", invitation_r3.clientId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invitation_r3.clientEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getInvitationStatusClass(invitation_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getInvitationStatusText(invitation_r3.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](invitation_r3.sentAt ? 12 : 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](invitation_r3.expiresAt ? 15 : 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](invitation_r3.acceptedAt ? 18 : 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.canResendInvitation(invitation_r3) ? 22 : -1);
  }
}
function InvitationManagementComponent_Conditional_68_ForEmpty_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " No invitations found. Start by inviting clients from the client list. ");
  }
}
function InvitationManagementComponent_Conditional_68_ForEmpty_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" No ", ctx_r1.statusFilter, " invitations found. ");
  }
}
function InvitationManagementComponent_Conditional_68_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 51)(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InvitationManagementComponent_Conditional_68_ForEmpty_21_Conditional_4_Template, 1, 0)(5, InvitationManagementComponent_Conditional_68_ForEmpty_21_Conditional_5_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.statusFilter === "all" ? 4 : 5);
  }
}
function InvitationManagementComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "table", 38)(2, "thead", 39)(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sent Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Expires Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Accepted Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](19, InvitationManagementComponent_Conditional_68_For_20_Template, 25, 9, "tr", null, _forTrack1, false, InvitationManagementComponent_Conditional_68_ForEmpty_21_Template, 6, 1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.filteredInvitations);
  }
}
class InvitationManagementComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.invitations = [];
    this.filteredInvitations = [];
    this.searchTerm = '';
    this.loading = false;
    this.error = '';
    // Filter options
    this.statusFilter = 'all';
    this.statusOptions = [{
      value: 'all',
      label: 'All Invitations'
    }, {
      value: 'pending',
      label: 'Pending'
    }, {
      value: 'sent',
      label: 'Sent'
    }, {
      value: 'accepted',
      label: 'Accepted'
    }, {
      value: 'expired',
      label: 'Expired'
    }];
  }
  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Invitations'
    }, {
      label: 'Invitation Management',
      active: true
    }];
    this.loadInvitations();
  }
  /**
   * Load all invitations from the API
   */
  loadInvitations() {
    this.loading = true;
    this.error = '';
    this.apiService.getInvitations().subscribe({
      next: response => {
        console.log('Invitations loaded:', response);
        if (response.success && response.invitations) {
          this.invitations = response.invitations;
          this.applyFilters();
        }
        this.loading = false;
      },
      error: error => {
        console.error('Error loading invitations:', error);
        this.error = 'Failed to load invitations. Please try again.';
        this.loading = false;
        // Handle authentication errors
        if (error.status === 401 || error.status === 403) {
          this.error = 'Authentication failed. Please log in again.';
        }
      }
    });
  }
  /**
   * Apply search and status filters
   */
  applyFilters() {
    let filtered = [...this.invitations];
    // Apply status filter
    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(invitation => invitation.status === this.statusFilter);
    }
    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(invitation => invitation.clientName?.toLowerCase().includes(term) || invitation.clientEmail?.toLowerCase().includes(term));
    }
    this.filteredInvitations = filtered;
  }
  /**
   * Handle search input change
   */
  onSearchChange() {
    this.applyFilters();
  }
  /**
   * Handle status filter change
   */
  onStatusFilterChange() {
    this.applyFilters();
  }
  /**
   * Resend an invitation
   */
  resendInvitation(invitation) {
    if (!invitation.id) return;
    const resendData = {
      message: invitation.message // Use existing message or could be customized
    };
    this.apiService.resendInvitation(invitation.id, resendData).subscribe({
      next: response => {
        console.log('Invitation resent:', response);
        if (response.success) {
          this.loadInvitations(); // Refresh the list
          console.log('Invitation resent successfully!');
        }
      },
      error: error => {
        console.error('Error resending invitation:', error);
        // Handle authentication errors
        if (error.status === 401 || error.status === 403) {
          console.error('Authentication failed. Please log in again.');
        }
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
      default:
        return 'Unknown';
    }
  }
  /**
   * Check if invitation can be resent
   */
  canResendInvitation(invitation) {
    return invitation.status === 'pending' || invitation.status === 'sent' || invitation.status === 'expired';
  }
  /**
   * Get summary statistics
   */
  getInvitationStats() {
    const total = this.invitations.length;
    const pending = this.invitations.filter(inv => inv.status === 'pending').length;
    const sent = this.invitations.filter(inv => inv.status === 'sent').length;
    const accepted = this.invitations.filter(inv => inv.status === 'accepted').length;
    const expired = this.invitations.filter(inv => inv.status === 'expired').length;
    return {
      total,
      pending,
      sent,
      accepted,
      expired
    };
  }
  static {
    this.ɵfac = function InvitationManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvitationManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: InvitationManagementComponent,
      selectors: [["app-invitation-management"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 69,
      vars: 9,
      consts: [[1, "container-fluid"], ["title", "Invitation Management", 3, "breadcrumbItems"], [1, "row", "mb-4"], [1, "col-xl-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "d-flex"], [1, "flex-1", "overflow-hidden"], [1, "text-truncate", "font-size-14", "mb-2"], [1, "mb-0"], [1, "text-primary"], [1, "bx", "bx-mail-send", "font-size-24"], [1, "text-warning"], [1, "bx", "bx-time-five", "font-size-24"], [1, "text-success"], [1, "bx", "bx-check-circle", "font-size-24"], [1, "text-danger"], [1, "bx", "bx-x-circle", "font-size-24"], [1, "row"], [1, "col-lg-12"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "id", "searchTableList", "placeholder", "Search invitations...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-search-alt", "search-icon"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-success", "btn-rounded", "waves-effect", "waves-light", "mb-2", 3, "click", "disabled"], [1, "mdi", "mdi-refresh", "me-1"], [1, "text-center", "py-4"], ["role", "alert", 1, "alert", "alert-danger"], [1, "table-responsive"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "bx", "bx-error-circle", "me-2"], [1, "table", "table-nowrap", "align-middle"], [1, "table-light"], [1, "font-size-14", "mb-1"], [1, "text-muted", "mb-0"], [1, "badge", 3, "ngClass"], [1, "text-muted"], [3, "ngClass"], [1, "d-flex", "gap-2"], ["type", "button", "title", "Resend Invitation", 1, "btn", "btn-sm", "btn-outline-warning"], ["type", "button", "title", "View Details", 1, "btn", "btn-sm", "btn-outline-info"], [1, "bx", "bx-show"], ["type", "button", "title", "Resend Invitation", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "bx", "bx-refresh"], ["colspan", "7", 1, "text-center", "py-4"], [1, "bx", "bx-mail-send", "font-size-48", "text-muted", "d-block", "mb-2"]],
      template: function InvitationManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Total Invitations");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3)(15, "div", 4)(16, "div", 5)(17, "div", 6)(18, "div", 7)(19, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 3)(26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "div", 7)(30, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Accepted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 3)(37, "div", 4)(38, "div", 5)(39, "div", 6)(40, "div", 7)(41, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Expired");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "div", 19)(49, "div", 4)(50, "div", 5)(51, "div", 20)(52, "div", 21)(53, "div", 22)(54, "div", 23)(55, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function InvitationManagementComponent_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InvitationManagementComponent_Template_input_ngModelChange_55_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 21)(58, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function InvitationManagementComponent_Template_select_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.statusFilter, $event) || (ctx.statusFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InvitationManagementComponent_Template_select_ngModelChange_58_listener() {
            return ctx.onStatusFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](59, InvitationManagementComponent_For_60_Template, 2, 2, "option", 27, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 21)(62, "div", 28)(63, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvitationManagementComponent_Template_button_click_63_listener() {
            return ctx.loadInvitations();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Refresh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, InvitationManagementComponent_Conditional_66_Template, 6, 0, "div", 31)(67, InvitationManagementComponent_Conditional_67_Template, 3, 1, "div", 32)(68, InvitationManagementComponent_Conditional_68_Template, 22, 1, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getInvitationStats().total);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getInvitationStats().pending);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getInvitationStats().accepted);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getInvitationStats().expired);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.loading ? 66 : ctx.error ? 67 : 68);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, src_app_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent],
      styles: [".search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n  color: #74788d;\n  font-size: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n  border: 1px solid #eff2f7;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  border-top: none;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-color: #eff2f7;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n.badge.bg-warning[_ngcontent-%COMP%] {\n  color: #212529;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n\n.font-size-14[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.font-size-24[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n\n.font-size-48[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n}\n\n.text-truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (max-width: 768px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .btn-sm[_ngcontent-%COMP%] {\n    padding: 0.2rem 0.4rem;\n    font-size: 0.8rem;\n  }\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  transition: transform 0.2s ease-in-out;\n  box-shadow: 0 1rem 2rem rgba(18, 38, 63, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaW52aXRhdGlvbnMvaW52aXRhdGlvbi1tYW5hZ2VtZW50L2ludml0YXRpb24tbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRSxtREFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7QUFGSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFORjtBQVFFO0VBQ0UsY0FBQTtBQU5KOztBQVVBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsMEJBQUE7QUFQRjs7QUFVQTtFQUNFLDBCQUFBO0FBUEY7O0FBVUE7RUFDRSwwQkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBV0E7RUFDRTtJQUNFLG1CQUFBO0VBUkY7RUFXQTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUFURjtBQUNGO0FBYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWVBO0VBQ0UsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDZDQUFBO0FBWkYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnZpdGF0aW9uIE1hbmFnZW1lbnQgQ29tcG9uZW50IFN0eWxlc1xuXG4uc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5zZWFyY2gtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBjb2xvcjogIzc0Nzg4ZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4wMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmYyZjc7XG4gIFxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbn1cblxuLnRhYmxlIHtcbiAgdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuICBcbiAgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWZmMmY3O1xuICB9XG59XG5cbi5iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgcGFkZGluZzogMC4zNWVtIDAuNjVlbTtcbiAgXG4gICYuYmctd2FybmluZyB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gIH1cbn1cblxuLmJ0bi1zbSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4uZm9udC1zaXplLTE0IHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LXNpemUtMjQge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtc2l6ZS00OCB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10cnVuY2F0ZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbiAgXG4gIC5idG4tc20ge1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cblxuLy8gTG9hZGluZyBzcGlubmVyXG4uc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4vLyBTdGF0aXN0aWNzIGNhcmRzIGhvdmVyIGVmZmVjdFxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 55019:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invitations/invitations-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvitationsRoutingModule: () => (/* binding */ InvitationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _invitation_management_invitation_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitation-management/invitation-management.component */ 9520);
/* harmony import */ var _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-registration/client-registration.component */ 70964);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/guards/role.guard */ 80400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _invitation_management_invitation_management_component__WEBPACK_IMPORTED_MODULE_0__.InvitationManagementComponent,
  canActivate: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.RoleGuard],
  data: {
    role: 'ACCOUNTANT'
  }
}, {
  path: 'register/:token',
  component: _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_1__.ClientRegistrationComponent
}];
class InvitationsRoutingModule {
  static {
    this.ɵfac = function InvitationsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvitationsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: InvitationsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InvitationsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7882:
/*!*********************************************************!*\
  !*** ./src/app/pages/invitations/invitations.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvitationsModule: () => (/* binding */ InvitationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _invitations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitations-routing.module */ 55019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class InvitationsModule {
  static {
    this.ɵfac = function InvitationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvitationsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InvitationsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _invitations_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvitationsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InvitationsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _invitations_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvitationsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invitations_invitations_module_ts.js.map