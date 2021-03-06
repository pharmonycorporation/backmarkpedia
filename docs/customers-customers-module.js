(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "4yXv":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-dialog/customer-dialog.component */ "dOi1");
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ "ZokB");
/* harmony import */ var _customers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers */ "H5dq");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "F5nt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.settings */ "/RaO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../theme/pipes/filter-by-id.pipe */ "vBMV");

















function CustomersComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "filterById");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_28_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const customer_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.openCustomerDialog(customer_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_28_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const customer_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.remove(customer_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", customer_r2.firstName, " ", customer_r2.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](9, 7, ctx_r0.stores, customer_r2.storeId)) == null ? null : tmp_3_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$", customer_r2.walletBalance.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$", customer_r2.revenue.toFixed(2), "");
} }
function CustomersComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function CustomersComponent_div_30_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class CustomersComponent {
    constructor(appService, dialog, appSettings) {
        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.customers = [];
        this.stores = [
            { id: 1, name: 'Store 1' },
            { id: 2, name: 'Store 2' }
        ];
        this.countries = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.countries = this.appService.getCountries();
        this.customers = _customers__WEBPACK_IMPORTED_MODULE_3__["customers"];
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    openCustomerDialog(data) {
        const dialogRef = this.dialog.open(_customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_1__["CustomerDialogComponent"], {
            data: {
                customer: data,
                stores: this.stores,
                countries: this.countries
            },
            panelClass: ['theme-dialog'],
            autoFocus: false,
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(customer => {
            if (customer) {
                const index = this.customers.findIndex(x => x.id == customer.id);
                if (index !== -1) {
                    this.customers[index] = customer;
                }
                else {
                    let last_customer = this.customers[this.customers.length - 1];
                    customer.id = last_customer.id + 1;
                    this.customers.push(customer);
                }
            }
        });
    }
    remove(customer) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
                title: "Confirm Action",
                message: "Are you sure you want remove this customer?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.customers.indexOf(customer);
                if (index !== -1) {
                    this.customers.splice(index, 1);
                }
            }
        });
    }
}
CustomersComponent.??fac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"])); };
CustomersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], decls: 31, vars: 8, consts: [[1, "content-body"], [1, "container-fluid"], [1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-table", "admin-table"], [1, "table"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "p-1", "actions"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Customers List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_Template_button_click_7_listener() { return ctx.openCustomerDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Add Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Wallet Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, CustomersComponent_tr_28_Template, 22, 10, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, CustomersComponent_div_30_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](29, 2, ctx.customers, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customers.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginatePipe"], _theme_pipes_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterByIdPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customers',
                templateUrl: './customers.component.html',
                styleUrls: ['./customers.component.scss']
            }]
    }], function () { return [{ type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"] }]; }, null); })();


/***/ }),

/***/ "H5dq":
/*!****************************************!*\
  !*** ./src/app/customers/customers.ts ***!
  \****************************************/
/*! exports provided: customers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customers", function() { return customers; });
const customers = [
    {
        id: 1,
        username: 'bruno.v',
        email: 'bruno@company.com',
        firstName: 'Bruno',
        lastName: 'Vespa',
        middleName: '',
        storeId: 2,
        walletBalance: 5255,
        revenue: 3450,
        billing: {
            firstName: 'Bruno',
            lastName: 'Vespa',
            middleName: '',
            company: 'Company 1',
            email: 'bruno@company.com',
            phone: '(415) 231-0332',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    },
    {
        id: 2,
        username: 'andy.79',
        email: 'warhol@gmail.com',
        firstName: 'Andy',
        lastName: 'Warhol',
        middleName: '',
        storeId: 1,
        walletBalance: 8055,
        revenue: 7200,
        billing: {
            firstName: 'Andy',
            lastName: 'Warhol',
            middleName: '',
            company: 'Company 1',
            email: 'warhol@gmail.com',
            phone: '(212) 457-2308',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    },
    {
        id: 3,
        username: 'pretty',
        email: 'ashley@gmail.com',
        firstName: 'Ashley',
        lastName: 'Ahlberg',
        middleName: '',
        storeId: 1,
        walletBalance: 17200,
        revenue: 2200,
        billing: {
            firstName: 'Ashley',
            lastName: 'Ahlberg',
            middleName: '',
            company: 'Company 5',
            email: 'ashley@gmail.com',
            phone: '(212) 457-2308',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    },
    {
        id: 4,
        username: 'julia.a',
        email: 'julia@gmail.com',
        firstName: 'Julia',
        lastName: 'Aniston',
        middleName: '',
        storeId: 2,
        walletBalance: 9480,
        revenue: 1470,
        billing: {
            firstName: 'Julia',
            lastName: 'Aniston',
            middleName: '',
            company: 'Company 5',
            email: 'julia@gmail.com',
            phone: '(212) 457-2308',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    },
    {
        id: 5,
        username: 'lusia.m',
        email: 'lusia@gmail.com',
        firstName: 'Lusia',
        lastName: 'Manuel',
        middleName: '',
        storeId: 1,
        walletBalance: 6200,
        revenue: 3250,
        billing: {
            firstName: 'Lusia',
            lastName: 'Manuel',
            middleName: '',
            company: 'Company 4',
            email: 'lusia@gmail.com',
            phone: '(212) 457-2308',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    },
    {
        id: 6,
        username: 'adam.s',
        email: 'adam@gmail.com',
        firstName: 'Adam',
        lastName: 'Sandler',
        middleName: '',
        storeId: 2,
        walletBalance: 7580,
        revenue: 2950,
        billing: {
            firstName: 'Adam',
            lastName: 'Sandler',
            middleName: '',
            company: 'Company 1',
            email: 'adam@gmail.com',
            phone: '(212) 457-2308',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    },
    {
        id: 7,
        username: 'tereza.s',
        email: 'tereza@gmail.com',
        firstName: 'Tereza',
        lastName: 'Stiles',
        middleName: '',
        storeId: 2,
        walletBalance: 5240,
        revenue: 1095,
        billing: {
            firstName: 'Tereza',
            lastName: 'Stiles',
            middleName: '',
            company: 'Company 3',
            email: 'tereza@gmail.com',
            phone: '(212) 457-2308',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    },
    {
        id: 8,
        username: 'michael.b',
        email: 'michael@gmail.com',
        firstName: 'Michael',
        lastName: 'Blair',
        middleName: '',
        storeId: 2,
        walletBalance: 7340,
        revenue: 4580,
        billing: {
            firstName: 'Michael',
            lastName: 'Blair',
            middleName: '',
            company: 'Company 3',
            email: 'michael@gmail.com',
            phone: '(212) 457-2308',
            country: { name: 'United States', code: 'US' },
            city: 'Los Angeles',
            state: 'California',
            zip: '90201',
            address: 'Palos Verdes Peninsula'
        }
    }
];


/***/ }),

/***/ "dOi1":
/*!************************************************************************!*\
  !*** ./src/app/customers/customer-dialog/customer-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDialogComponent", function() { return CustomerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function CustomerDialogComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "First name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Last name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const store_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", store_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](store_r13.name);
} }
function CustomerDialogComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "First name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Last name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_option_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const country_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", country_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", country_r14.name, " ");
} }
function CustomerDialogComponent_mat_error_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Zip/Postal Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDialogComponent_mat_error_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class CustomerDialogComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: 0,
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: null,
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middleName: null,
            storeId: null,
            walletBalance: null,
            revenue: null,
            billing: this.fb.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                middleName: '',
                company: '',
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                state: '',
                zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        if (this.data.customer) {
            this.form.patchValue(this.data.customer);
        }
        ;
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
    }
    compareFunction(o1, o2) {
        return (o1.name == o2.name && o1.code == o2.code);
    }
}
CustomerDialogComponent.??fac = function CustomerDialogComponent_Factory(t) { return new (t || CustomerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
CustomerDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomerDialogComponent, selectors: [["app-customer-dialog"]], decls: 127, vars: 15, consts: [["mat-dialog-title", ""], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], [1, "tab-content-wrapped"], ["label", "General Info"], ["fxLayout", "row wrap", 1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "33.3", 1, "px-1"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "First name", "formControlName", "firstName", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Last name", "formControlName", "lastName", "required", ""], ["matInput", "", "placeholder", "Middle Name/Initial", "formControlName", "middleName"], ["matInput", "", "placeholder", "Username", "formControlName", "username", "required", ""], ["matInput", "", "placeholder", "Email", "formControlName", "email"], ["formControlName", "storeId"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "walletBalance"], ["matInput", "", "formControlName", "revenue"], ["label", "Billing", "formGroupName", "billing"], ["matInput", "", "placeholder", "Company", "formControlName", "company"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Phone", "formControlName", "phone", "required", ""], ["fxFlex", "100", "fxFlex.gt-sm", "25", 1, "px-1"], ["placeholder", "Country", "formControlName", "country", "required", "", 3, "compareWith"], ["matInput", "", "placeholder", "City", "formControlName", "city", "required", ""], ["matInput", "", "placeholder", "State/Province", "formControlName", "state"], ["matInput", "", "placeholder", "Zip/Postal Code", "formControlName", "zip", "required", ""], ["fxFlex", "100", 1, "px-1"], ["matInput", "", "placeholder", "Address (street, apartment, suite, unit etc.)", "formControlName", "address", "required", ""], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "warn", "type", "button", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function CustomerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CustomerDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CustomerDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, CustomerDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Middle Name/Initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, CustomerDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, CustomerDialogComponent_mat_option_42_Template, 3, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Wallet Balance ($)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Revenue ($)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, CustomerDialogComponent_mat_error_60_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, CustomerDialogComponent_mat_error_66_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Middle Name/Initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, CustomerDialogComponent_mat_error_82_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, CustomerDialogComponent_mat_error_88_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](96, CustomerDialogComponent_mat_option_96_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](97, CustomerDialogComponent_mat_error_97_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](103, CustomerDialogComponent_mat_error_103_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "State/Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Zip/Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](114, CustomerDialogComponent_mat_error_114_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](120, CustomerDialogComponent_mat_error_120_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls.firstName.errors == null ? null : ctx.form.controls.firstName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls.lastName.errors == null ? null : ctx.form.controls.lastName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.stores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].firstName.errors == null ? null : ctx.form.get("billing")["controls"].firstName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].lastName.errors == null ? null : ctx.form.get("billing")["controls"].lastName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].email.errors == null ? null : ctx.form.get("billing")["controls"].email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].phone.errors == null ? null : ctx.form.get("billing")["controls"].phone.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("compareWith", ctx.compareFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].country.errors == null ? null : ctx.form.get("billing")["controls"].country.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].city.errors == null ? null : ctx.form.get("billing")["controls"].city.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].zip.errors == null ? null : ctx.form.get("billing")["controls"].zip.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("billing")["controls"].address.errors == null ? null : ctx.form.get("billing")["controls"].address.errors.required);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-dialog',
                templateUrl: './customer-dialog.component.html',
                styleUrls: ['./customer-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "vfUp":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: routes, CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers.component */ "4yXv");
/* harmony import */ var _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-dialog/customer-dialog.component */ "dOi1");










const routes = [
    { path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], pathMatch: 'full' }
];
class CustomersModule {
}
CustomersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CustomersModule });
CustomersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CustomersModule_Factory(t) { return new (t || CustomersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CustomersModule, { declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
        _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
                    _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDialogComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map