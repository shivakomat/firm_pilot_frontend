"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_tax-consultant_tax-consultant_module_ts"],{

/***/ 82915:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tax-consultant/client-documents/client-documents.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientDocumentsComponent: () => (/* binding */ ClientDocumentsComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




function ClientDocumentsComponent_option_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", client_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.name);
  }
}
function ClientDocumentsComponent_tr_128_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 1, doc_r3.notes, 0, 50), "... ");
  }
}
function ClientDocumentsComponent_tr_128_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r3.reviewedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, doc_r3.reviewDate, "short"));
  }
}
function ClientDocumentsComponent_tr_128_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Not reviewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientDocumentsComponent_tr_128_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_button_55_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.updateStatus(doc_r3, "approved"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientDocumentsComponent_tr_128_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_button_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.updateStatus(doc_r3, "rejected"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientDocumentsComponent_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ClientDocumentsComponent_tr_128_p_7_Template, 4, 5, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td")(9, "div")(10, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td")(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "div")(19, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td")(27, "div", 62)(28, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 64)(32, "li")(33, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_Template_a_click_33_listener() {
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.updateStatus(doc_r3, "pending"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_Template_a_click_36_listener() {
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.updateStatus(doc_r3, "reviewed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Reviewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_Template_a_click_39_listener() {
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.updateStatus(doc_r3, "approved"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_Template_a_click_42_listener() {
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.updateStatus(doc_r3, "rejected"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ClientDocumentsComponent_tr_128_div_45_Template, 6, 5, "div", 55)(46, ClientDocumentsComponent_tr_128_span_46_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td")(48, "div", 67)(49, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_Template_button_click_49_listener() {
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.viewDocument(doc_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_Template_button_click_51_listener() {
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.downloadDocument(doc_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_tr_128_Template_button_click_53_listener() {
      const doc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.addNotes(doc_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ClientDocumentsComponent_tr_128_button_55_Template, 2, 0, "button", 74)(56, ClientDocumentsComponent_tr_128_button_56_Template, 2, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r3.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", doc_r3.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r3.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r3.clientEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.getCategoryClass(doc_r3.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getCategoryDisplay(doc_r3.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r3.documentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 17, doc_r3.uploadDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.getStatusClass(doc_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 20, doc_r3.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", doc_r3.reviewedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !doc_r3.reviewedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", doc_r3.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", doc_r3.status === "pending" || doc_r3.status === "reviewed");
  }
}
function ClientDocumentsComponent_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No documents found matching your criteria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ClientDocumentsComponent {
  constructor() {
    this.documents = [];
    this.filteredDocuments = [];
    this.selectedStatus = 'all';
    this.selectedCategory = 'all';
    this.selectedClient = 'all';
    this.searchTerm = '';
    // Statistics
    this.stats = {
      total: 0,
      pending: 0,
      reviewed: 0,
      approved: 0,
      rejected: 0
    };
    // Unique clients for filter
    this.clients = [];
  }
  ngOnInit() {
    this.loadDocuments();
    this.calculateStats();
    this.extractClients();
  }
  loadDocuments() {
    // Mock data - in real app, this would come from API
    this.documents = [{
      id: 1,
      clientId: 101,
      clientName: 'John Smith',
      clientEmail: 'john.smith@email.com',
      documentName: 'W2_2024.pdf',
      documentType: 'PDF',
      category: 'tax-documents',
      size: '245 KB',
      uploadDate: '2024-02-15T10:30:00Z',
      status: 'pending'
    }, {
      id: 2,
      clientId: 102,
      clientName: 'Sarah Johnson',
      clientEmail: 'sarah.johnson@email.com',
      documentName: 'Bank_Statement_Jan2024.pdf',
      documentType: 'PDF',
      category: 'financial-statements',
      size: '1.2 MB',
      uploadDate: '2024-02-14T14:20:00Z',
      status: 'reviewed',
      reviewedBy: 'Tax Consultant',
      reviewDate: '2024-02-16T09:15:00Z'
    }, {
      id: 3,
      clientId: 103,
      clientName: 'Michael Brown',
      clientEmail: 'michael.brown@email.com',
      documentName: 'Receipt_Office_Supplies.jpg',
      documentType: 'Image',
      category: 'receipts',
      size: '890 KB',
      uploadDate: '2024-02-13T16:45:00Z',
      status: 'approved',
      reviewedBy: 'Tax Consultant',
      reviewDate: '2024-02-17T11:30:00Z'
    }, {
      id: 4,
      clientId: 104,
      clientName: 'Emily Davis',
      clientEmail: 'emily.davis@email.com',
      documentName: '1099_Form.pdf',
      documentType: 'PDF',
      category: 'tax-documents',
      size: '156 KB',
      uploadDate: '2024-02-12T09:10:00Z',
      status: 'rejected',
      reviewedBy: 'Tax Consultant',
      reviewDate: '2024-02-16T15:20:00Z',
      notes: 'Document is unclear, please re-upload with better quality'
    }, {
      id: 5,
      clientId: 105,
      clientName: 'Robert Wilson',
      clientEmail: 'robert.wilson@email.com',
      documentName: 'Business_Expenses_Q1.xlsx',
      documentType: 'Spreadsheet',
      category: 'financial-statements',
      size: '2.1 MB',
      uploadDate: '2024-02-11T13:25:00Z',
      status: 'pending'
    }, {
      id: 6,
      clientId: 101,
      clientName: 'John Smith',
      clientEmail: 'john.smith@email.com',
      documentName: 'Property_Tax_Statement.pdf',
      documentType: 'PDF',
      category: 'tax-documents',
      size: '340 KB',
      uploadDate: '2024-02-10T11:15:00Z',
      status: 'approved',
      reviewedBy: 'Tax Consultant',
      reviewDate: '2024-02-15T14:45:00Z'
    }];
    this.filteredDocuments = [...this.documents];
  }
  calculateStats() {
    this.stats.total = this.documents.length;
    this.stats.pending = this.documents.filter(doc => doc.status === 'pending').length;
    this.stats.reviewed = this.documents.filter(doc => doc.status === 'reviewed').length;
    this.stats.approved = this.documents.filter(doc => doc.status === 'approved').length;
    this.stats.rejected = this.documents.filter(doc => doc.status === 'rejected').length;
  }
  extractClients() {
    const uniqueClients = new Map();
    this.documents.forEach(doc => {
      if (!uniqueClients.has(doc.clientId)) {
        uniqueClients.set(doc.clientId, {
          id: doc.clientId,
          name: doc.clientName
        });
      }
    });
    this.clients = Array.from(uniqueClients.values());
  }
  filterDocuments() {
    this.filteredDocuments = this.documents.filter(doc => {
      const matchesStatus = this.selectedStatus === 'all' || doc.status === this.selectedStatus;
      const matchesCategory = this.selectedCategory === 'all' || doc.category === this.selectedCategory;
      const matchesClient = this.selectedClient === 'all' || doc.clientId.toString() === this.selectedClient;
      const matchesSearch = doc.documentName.toLowerCase().includes(this.searchTerm.toLowerCase()) || doc.clientName.toLowerCase().includes(this.searchTerm.toLowerCase()) || doc.clientEmail.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesCategory && matchesClient && matchesSearch;
    });
  }
  onStatusChange() {
    this.filterDocuments();
  }
  onCategoryChange() {
    this.filterDocuments();
  }
  onClientChange() {
    this.filterDocuments();
  }
  onSearchChange() {
    this.filterDocuments();
  }
  getStatusClass(status) {
    switch (status) {
      case 'approved':
        return 'badge bg-success';
      case 'reviewed':
        return 'badge bg-info';
      case 'pending':
        return 'badge bg-warning';
      case 'rejected':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
  getCategoryDisplay(category) {
    switch (category) {
      case 'tax-documents':
        return 'Tax Documents';
      case 'financial-statements':
        return 'Financial Statements';
      case 'receipts':
        return 'Receipts';
      case 'other':
        return 'Other';
      default:
        return category;
    }
  }
  getCategoryClass(category) {
    switch (category) {
      case 'tax-documents':
        return 'badge bg-primary-subtle text-primary';
      case 'financial-statements':
        return 'badge bg-success-subtle text-success';
      case 'receipts':
        return 'badge bg-warning-subtle text-warning';
      case 'other':
        return 'badge bg-info-subtle text-info';
      default:
        return 'badge bg-secondary';
    }
  }
  viewDocument(doc) {
    // In real app, this would open document viewer or download
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'View Document',
      text: `Opening ${doc.documentName} for ${doc.clientName}`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
  downloadDocument(doc) {
    // In real app, this would trigger actual download
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Download Started',
      text: `Downloading ${doc.documentName}...`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
  updateStatus(doc, newStatus) {
    const oldStatus = doc.status;
    doc.status = newStatus;
    doc.reviewedBy = 'Tax Consultant';
    doc.reviewDate = new Date().toISOString();
    this.calculateStats();
    this.filterDocuments();
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Status Updated',
      text: `Document status changed from ${oldStatus} to ${newStatus}`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }
  addNotes(doc) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Add Notes',
      input: 'textarea',
      inputLabel: 'Review Notes',
      inputPlaceholder: 'Enter your notes about this document...',
      inputValue: doc.notes || '',
      showCancelButton: true,
      confirmButtonText: 'Save Notes',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        doc.notes = result.value;
        doc.reviewedBy = 'Tax Consultant';
        doc.reviewDate = new Date().toISOString();
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Notes Saved',
          text: 'Review notes have been added to the document',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }
  exportDocuments() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Export Started',
      text: 'Preparing documents export...',
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
  static {
    this.ɵfac = function ClientDocumentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientDocumentsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ClientDocumentsComponent,
      selectors: [["app-client-documents"]],
      decls: 130,
      vars: 11,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "page-title-right"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "ri-download-line", "me-1"], [1, "col-xl-3", "col-md-6"], [1, "card", "card-h-100"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "text-muted", "mb-3", "lh-1", "d-block", "text-truncate"], [1, "mb-3"], [1, "flex-shrink-0"], [1, "avatar-sm", "rounded-circle", "bg-primary-subtle"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary"], [1, "ri-file-text-line", "font-size-24"], [1, "avatar-sm", "rounded-circle", "bg-warning-subtle"], [1, "avatar-title", "rounded-circle", "bg-warning-subtle", "text-warning"], [1, "ri-time-line", "font-size-24"], [1, "avatar-sm", "rounded-circle", "bg-success-subtle"], [1, "avatar-title", "rounded-circle", "bg-success-subtle", "text-success"], [1, "ri-check-line", "font-size-24"], [1, "avatar-sm", "rounded-circle", "bg-danger-subtle"], [1, "avatar-title", "rounded-circle", "bg-danger-subtle", "text-danger"], [1, "ri-close-line", "font-size-24"], [1, "card"], [1, "row", "mb-4"], [1, "col-md-2"], ["for", "statusFilter", 1, "form-label"], ["id", "statusFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "pending"], ["value", "reviewed"], ["value", "approved"], ["value", "rejected"], ["for", "categoryFilter", 1, "form-label"], ["id", "categoryFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "tax-documents"], ["value", "financial-statements"], ["value", "receipts"], ["value", "other"], [1, "col-md-3"], ["for", "clientFilter", 1, "form-label"], ["id", "clientFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-5"], ["for", "searchInput", 1, "form-label"], ["type", "text", "id", "searchInput", "placeholder", "Search by document name, client name, or email...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "ri-file-text-line", "me-2", "text-muted"], [1, "mb-1"], ["class", "text-muted mb-0 font-size-12", 4, "ngIf"], [1, "text-muted", "mb-0", "font-size-12"], [1, "badge", "bg-light", "text-dark"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "dropdown-toggle", 2, "cursor", "pointer"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["class", "text-muted font-size-12", 4, "ngIf"], [1, "d-flex", "gap-1"], ["type", "button", "title", "View Document", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "ri-eye-line"], ["type", "button", "title", "Download", 1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "ri-download-line"], ["type", "button", "title", "Add Notes", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "ri-sticky-note-line"], ["type", "button", "class", "btn btn-sm btn-outline-success", "title", "Approve", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-danger", "title", "Reject", 3, "click", 4, "ngIf"], [1, "ri-sticky-note-line", "me-1"], [1, "font-size-12"], [1, "text-muted", "mb-0", "font-size-11"], [1, "text-muted", "font-size-12"], ["type", "button", "title", "Approve", 1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "ri-check-line"], ["type", "button", "title", "Reject", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "ri-close-line"], ["colspan", "8", 1, "text-center", "text-muted", "py-4"]],
      template: function ClientDocumentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Client Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientDocumentsComponent_Template_button_click_7_listener() {
            return ctx.exportDocuments();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Export Documents ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Total Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8)(25, "div", 9)(26, "div", 10)(27, "div", 11)(28, "div", 12)(29, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Pending Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15)(34, "div", 19)(35, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8)(38, "div", 9)(39, "div", 10)(40, "div", 11)(41, "div", 12)(42, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Approved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 15)(47, "div", 22)(48, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 8)(51, "div", 9)(52, "div", 10)(53, "div", 11)(54, "div", 12)(55, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Rejected");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 15)(60, "div", 25)(61, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 1)(64, "div", 2)(65, "div", 28)(66, "div", 10)(67, "div", 29)(68, "div", 30)(69, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ClientDocumentsComponent_Template_select_ngModelChange_71_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ClientDocumentsComponent_Template_select_change_71_listener() {
            return ctx.onStatusChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "All Statuses");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Reviewed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Approved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Rejected");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 30)(83, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ClientDocumentsComponent_Template_select_ngModelChange_85_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ClientDocumentsComponent_Template_select_change_85_listener() {
            return ctx.onCategoryChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Tax Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Financial Statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Receipts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Other");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 44)(97, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Client");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "select", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ClientDocumentsComponent_Template_select_ngModelChange_99_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedClient, $event) || (ctx.selectedClient = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ClientDocumentsComponent_Template_select_change_99_listener() {
            return ctx.onClientChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "All Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, ClientDocumentsComponent_option_102_Template, 2, 2, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 48)(104, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Search Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ClientDocumentsComponent_Template_input_ngModelChange_106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ClientDocumentsComponent_Template_input_input_106_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 51)(108, "table", 52)(109, "thead", 53)(110, "tr")(111, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Document");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Client");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Type & Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Upload Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Reviewed By");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, ClientDocumentsComponent_tr_128_Template, 57, 22, "tr", 54)(129, ClientDocumentsComponent_tr_129_Template, 3, 0, "tr", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.total);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.pending);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.approved);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.rejected);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedClient);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clients);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredDocuments);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredDocuments.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".card-h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.avatar-sm[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 2rem;\n}\n\n.avatar-title[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #556ee6;\n  color: #fff;\n  display: flex;\n  font-weight: 500;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n\n.bg-primary-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(85, 110, 230, 0.1) !important;\n}\n\n.bg-success-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(52, 195, 143, 0.1) !important;\n}\n\n.bg-warning-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(252, 185, 44, 0.1) !important;\n}\n\n.bg-danger-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(244, 106, 106, 0.1) !important;\n}\n\n.bg-info-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(80, 165, 241, 0.1) !important;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-top: none;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.font-size-11[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n}\n\n.font-size-12[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGF4LWNvbnN1bHRhbnQvY2xpZW50LWRvY3VtZW50cy9jbGllbnQtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usb0RBQUE7QUFDRjs7QUFFQTtFQUNFLG9EQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvREFBQTtBQUNGOztBQUVBO0VBQ0UscURBQUE7QUFDRjs7QUFFQTtFQUNFLG9EQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oLTEwMCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF2YXRhci1zbSB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5hdmF0YXItdGl0bGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2ZWU2O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZy1wcmltYXJ5LXN1YnRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDExMCwgMjMwLCAwLjEpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzLXN1YnRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE5NSwgMTQzLCAwLjEpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nLXN1YnRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxODUsIDQ0LCAwLjEpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXItc3VidGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDEwNiwgMTA2LCAwLjEpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvLXN1YnRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDE2NSwgMjQxLCAwLjEpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uZm9udC1zaXplLTExIHtcbiAgZm9udC1zaXplOiAwLjY4NzVyZW07XG59XG5cbi5mb250LXNpemUtMTIge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbi5idG4tc20ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50743:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tax-consultant/intake-forms/intake-forms.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntakeFormsComponent: () => (/* binding */ IntakeFormsComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




function IntakeFormsComponent_tr_114_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_tr_114_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.updateStatus(form_r2, "reviewed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function IntakeFormsComponent_tr_114_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_tr_114_button_45_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.updateStatus(form_r2, "needs-revision"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function IntakeFormsComponent_tr_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div")(3, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "div", 52)(15, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 54)(19, "li")(20, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_tr_114_Template_a_click_20_listener() {
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.updateStatus(form_r2, "pending"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_tr_114_Template_a_click_23_listener() {
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.updateStatus(form_r2, "reviewed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Reviewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_tr_114_Template_a_click_26_listener() {
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.updateStatus(form_r2, "approved"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_tr_114_Template_a_click_29_listener() {
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.updateStatus(form_r2, "needs-revision"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Needs Revision");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td")(32, "div", 11)(33, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td")(41, "div", 59)(42, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_tr_114_Template_button_click_42_listener() {
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.viewForm(form_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, IntakeFormsComponent_tr_114_button_44_Template, 2, 0, "button", 62)(45, IntakeFormsComponent_tr_114_button_45_Template, 2, 0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const form_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_r2.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_r2.clientEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getFormTypeDisplay(form_r2.formType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 15, form_r2.submissionDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.getStatusClass(form_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, form_r2.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](form_r2.completionPercentage === 100 ? "bg-success" : "bg-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", form_r2.completionPercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", form_r2.completionPercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](39, 20, form_r2.lastModified, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_r2.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_r2.status === "reviewed");
  }
}
function IntakeFormsComponent_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No intake forms found matching your criteria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class IntakeFormsComponent {
  constructor() {
    this.intakeForms = [];
    this.filteredForms = [];
    this.selectedStatus = 'all';
    this.selectedFormType = 'all';
    this.searchTerm = '';
    // Statistics
    this.stats = {
      total: 0,
      pending: 0,
      reviewed: 0,
      approved: 0,
      needsRevision: 0
    };
  }
  ngOnInit() {
    this.loadIntakeForms();
    this.calculateStats();
  }
  loadIntakeForms() {
    // Mock data - in real app, this would come from API
    this.intakeForms = [{
      id: 1,
      clientId: 101,
      clientName: 'John Smith',
      clientEmail: 'john.smith@email.com',
      submissionDate: '2024-02-15T10:30:00Z',
      status: 'pending',
      formType: 'tax-intake',
      completionPercentage: 100,
      lastModified: '2024-02-15T10:30:00Z'
    }, {
      id: 2,
      clientId: 102,
      clientName: 'Sarah Johnson',
      clientEmail: 'sarah.johnson@email.com',
      submissionDate: '2024-02-14T14:20:00Z',
      status: 'reviewed',
      formType: 'tax-intake',
      completionPercentage: 100,
      lastModified: '2024-02-16T09:15:00Z'
    }, {
      id: 3,
      clientId: 103,
      clientName: 'Michael Brown',
      clientEmail: 'michael.brown@email.com',
      submissionDate: '2024-02-13T16:45:00Z',
      status: 'approved',
      formType: 'tax-intake',
      completionPercentage: 100,
      lastModified: '2024-02-17T11:30:00Z'
    }, {
      id: 4,
      clientId: 104,
      clientName: 'Emily Davis',
      clientEmail: 'emily.davis@email.com',
      submissionDate: '2024-02-12T09:10:00Z',
      status: 'needs-revision',
      formType: 'tax-intake',
      completionPercentage: 85,
      lastModified: '2024-02-16T15:20:00Z'
    }, {
      id: 5,
      clientId: 105,
      clientName: 'Robert Wilson',
      clientEmail: 'robert.wilson@email.com',
      submissionDate: '2024-02-11T13:25:00Z',
      status: 'pending',
      formType: 'business-intake',
      completionPercentage: 92,
      lastModified: '2024-02-11T13:25:00Z'
    }];
    this.filteredForms = [...this.intakeForms];
  }
  calculateStats() {
    this.stats.total = this.intakeForms.length;
    this.stats.pending = this.intakeForms.filter(form => form.status === 'pending').length;
    this.stats.reviewed = this.intakeForms.filter(form => form.status === 'reviewed').length;
    this.stats.approved = this.intakeForms.filter(form => form.status === 'approved').length;
    this.stats.needsRevision = this.intakeForms.filter(form => form.status === 'needs-revision').length;
  }
  filterForms() {
    this.filteredForms = this.intakeForms.filter(form => {
      const matchesStatus = this.selectedStatus === 'all' || form.status === this.selectedStatus;
      const matchesFormType = this.selectedFormType === 'all' || form.formType === this.selectedFormType;
      const matchesSearch = form.clientName.toLowerCase().includes(this.searchTerm.toLowerCase()) || form.clientEmail.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesFormType && matchesSearch;
    });
  }
  onStatusChange() {
    this.filterForms();
  }
  onFormTypeChange() {
    this.filterForms();
  }
  onSearchChange() {
    this.filterForms();
  }
  getStatusClass(status) {
    switch (status) {
      case 'approved':
        return 'badge bg-success';
      case 'reviewed':
        return 'badge bg-info';
      case 'pending':
        return 'badge bg-warning';
      case 'needs-revision':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
  getFormTypeDisplay(formType) {
    switch (formType) {
      case 'tax-intake':
        return 'Tax Intake';
      case 'business-intake':
        return 'Business Intake';
      default:
        return formType;
    }
  }
  viewForm(form) {
    // In real app, this would navigate to form details or open modal
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'View Intake Form',
      text: `Opening ${form.formType} form for ${form.clientName}`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
  updateStatus(form, newStatus) {
    const oldStatus = form.status;
    form.status = newStatus;
    form.lastModified = new Date().toISOString();
    this.calculateStats();
    this.filterForms();
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Status Updated',
      text: `Form status changed from ${oldStatus} to ${newStatus}`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }
  exportForms() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Export Started',
      text: 'Preparing intake forms export...',
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
  static {
    this.ɵfac = function IntakeFormsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IntakeFormsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IntakeFormsComponent,
      selectors: [["app-intake-forms"]],
      decls: 116,
      vars: 9,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "page-title-right"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "ri-download-line", "me-1"], [1, "col-xl-3", "col-md-6"], [1, "card", "card-h-100"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "text-muted", "mb-3", "lh-1", "d-block", "text-truncate"], [1, "mb-3"], [1, "flex-shrink-0"], ["id", "mini-chart1", "data-colors", "[\"#5156be\"]"], [1, "counter-value"], [1, "avatar-sm", "rounded-circle", "bg-warning-subtle"], [1, "avatar-title", "rounded-circle", "bg-warning-subtle", "text-warning"], [1, "ri-time-line", "font-size-24"], [1, "avatar-sm", "rounded-circle", "bg-success-subtle"], [1, "avatar-title", "rounded-circle", "bg-success-subtle", "text-success"], [1, "ri-check-line", "font-size-24"], [1, "avatar-sm", "rounded-circle", "bg-danger-subtle"], [1, "avatar-title", "rounded-circle", "bg-danger-subtle", "text-danger"], [1, "ri-error-warning-line", "font-size-24"], [1, "card"], [1, "row", "mb-4"], [1, "col-md-3"], ["for", "statusFilter", 1, "form-label"], ["id", "statusFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "pending"], ["value", "reviewed"], ["value", "approved"], ["value", "needs-revision"], ["for", "formTypeFilter", 1, "form-label"], ["id", "formTypeFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "tax-intake"], ["value", "business-intake"], [1, "col-md-6"], ["for", "searchInput", 1, "form-label"], ["type", "text", "id", "searchInput", "placeholder", "Search by client name or email...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mb-1"], [1, "text-muted", "mb-0", "font-size-12"], [1, "badge", "bg-primary-subtle", "text-primary"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "dropdown-toggle", 2, "cursor", "pointer"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "progress", "flex-grow-1", "me-2", 2, "height", "6px"], [1, "progress-bar"], [1, "text-muted", "font-size-12"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "ri-eye-line"], ["type", "button", "class", "btn btn-sm btn-outline-success", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-warning", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "ri-check-line"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "ri-edit-line"], ["colspan", "7", 1, "text-center", "text-muted", "py-4"]],
      template: function IntakeFormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Client Intake Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntakeFormsComponent_Template_button_click_7_listener() {
            return ctx.exportForms();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Export Forms ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Total Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8)(23, "div", 9)(24, "div", 10)(25, "div", 11)(26, "div", 12)(27, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Pending Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4", 14)(30, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15)(33, "div", 18)(34, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8)(37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Approved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15)(46, "div", 21)(47, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8)(50, "div", 9)(51, "div", 10)(52, "div", 11)(53, "div", 12)(54, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Needs Revision");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 15)(59, "div", 24)(60, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 1)(63, "div", 2)(64, "div", 27)(65, "div", 10)(66, "div", 28)(67, "div", 29)(68, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Filter by Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "select", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function IntakeFormsComponent_Template_select_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IntakeFormsComponent_Template_select_change_70_listener() {
            return ctx.onStatusChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "All Statuses");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Reviewed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Approved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Needs Revision");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 29)(82, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Filter by Form Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function IntakeFormsComponent_Template_select_ngModelChange_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedFormType, $event) || (ctx.selectedFormType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IntakeFormsComponent_Template_select_change_84_listener() {
            return ctx.onFormTypeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "All Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Tax Intake");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Business Intake");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 41)(92, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Search Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function IntakeFormsComponent_Template_input_ngModelChange_94_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function IntakeFormsComponent_Template_input_input_94_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 44)(96, "table", 45)(97, "thead", 46)(98, "tr")(99, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Client");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Form Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Submission Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Completion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Last Modified");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, IntakeFormsComponent_tr_114_Template, 46, 23, "tr", 47)(115, IntakeFormsComponent_tr_115_Template, 3, 0, "tr", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.total);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.pending);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.approved);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.needsRevision);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedFormType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredForms);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredForms.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".card-h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.avatar-sm[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 2rem;\n}\n\n.avatar-title[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #556ee6;\n  color: #fff;\n  display: flex;\n  font-weight: 500;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n\n.bg-primary-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(85, 110, 230, 0.1) !important;\n}\n\n.bg-success-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(52, 195, 143, 0.1) !important;\n}\n\n.bg-warning-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(252, 185, 44, 0.1) !important;\n}\n\n.bg-danger-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(244, 106, 106, 0.1) !important;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 6px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-top: none;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGF4LWNvbnN1bHRhbnQvaW50YWtlLWZvcm1zL2ludGFrZS1mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG9EQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvREFBQTtBQUNGOztBQUVBO0VBQ0Usb0RBQUE7QUFDRjs7QUFFQTtFQUNFLHFEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaC0xMDAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hdmF0YXItc20ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uYXZhdGFyLXRpdGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NmVlNjtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmctcHJpbWFyeS1zdWJ0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCAxMTAsIDIzMCwgMC4xKSAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2Vzcy1zdWJ0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxOTUsIDE0MywgMC4xKSAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZy1zdWJ0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMTg1LCA0NCwgMC4xKSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyLXN1YnRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCAxMDYsIDEwNiwgMC4xKSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDZweDtcbn1cblxuLnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmFkZ2Uge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 75271:
/*!***********************************************************************!*\
  !*** ./src/app/pages/tax-consultant/tax-consultant-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaxConsultantRoutingModule: () => (/* binding */ TaxConsultantRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _intake_forms_intake_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intake-forms/intake-forms.component */ 50743);
/* harmony import */ var _client_documents_client_documents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-documents/client-documents.component */ 82915);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/guards/role.guard */ 80400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: 'intake-forms',
  component: _intake_forms_intake_forms_component__WEBPACK_IMPORTED_MODULE_0__.IntakeFormsComponent,
  canActivate: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.RoleGuard],
  data: {
    role: 'ACCOUNTANT'
  }
}, {
  path: 'client-documents',
  component: _client_documents_client_documents_component__WEBPACK_IMPORTED_MODULE_1__.ClientDocumentsComponent,
  canActivate: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.RoleGuard],
  data: {
    role: 'ACCOUNTANT'
  }
}];
class TaxConsultantRoutingModule {
  static {
    this.ɵfac = function TaxConsultantRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaxConsultantRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: TaxConsultantRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TaxConsultantRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 28982:
/*!***************************************************************!*\
  !*** ./src/app/pages/tax-consultant/tax-consultant.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaxConsultantModule: () => (/* binding */ TaxConsultantModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _tax_consultant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-consultant-routing.module */ 75271);
/* harmony import */ var _intake_forms_intake_forms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intake-forms/intake-forms.component */ 50743);
/* harmony import */ var _client_documents_client_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-documents/client-documents.component */ 82915);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/pagetitle/pagetitle.component */ 56551);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ 69295);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 54195);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 2457);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 75119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);





// UI Components


// Bootstrap modules




class TaxConsultantModule {
  static {
    this.ɵfac = function TaxConsultantModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaxConsultantModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: TaxConsultantModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _tax_consultant_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaxConsultantRoutingModule, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__.TabsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TaxConsultantModule, {
    declarations: [_intake_forms_intake_forms_component__WEBPACK_IMPORTED_MODULE_1__.IntakeFormsComponent, _client_documents_client_documents_component__WEBPACK_IMPORTED_MODULE_2__.ClientDocumentsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _tax_consultant_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaxConsultantRoutingModule, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__.TabsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tax-consultant_tax-consultant_module_ts.js.map