webpackJsonp(["table-edit.module"],{

/***/ "../../../../../src/app/theme/table/data-table/table-edit/table-edit-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableEditRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_edit_component__ = __webpack_require__("../../../../../src/app/theme/table/data-table/table-edit/table-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__table_edit_component__["a" /* TableEditComponent */],
        data: {
            title: 'Editable Data Table',
            icon: 'icon-widgetized',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - editable',
            status: true
        }
    }
];
var TableEditRoutingModule = (function () {
    function TableEditRoutingModule() {
    }
    TableEditRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], TableEditRoutingModule);
    return TableEditRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/table/data-table/table-edit/table-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Ng-X Editable'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use class <code>material</code> and <code>data-table</code> inside ngx-datatable element with <code>ngx-datatable-column</code> elements</span>\n\n      <ngx-datatable\n        #mydatatable\n        class=\"material data-table\"\n        [headerHeight]=\"50\"\n        [limit]=\"10\"\n        [columnMode]=\"'force'\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\"\n        [rows]=\"rows\">\n        <ngx-datatable-column name=\"Name\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <span\n              title=\"Double click to edit\"\n              (dblclick)=\"editing[rowIndex + '-name'] = true\"\n              *ngIf=\"!editing[rowIndex + '-name']\">\n              {{value}}\n            </span>\n            <input\n              autofocus\n              (blur)=\"updateValue($event, 'name', rowIndex)\"\n              *ngIf=\"editing[rowIndex+ '-name']\"\n              type=\"text\"\n              [value]=\"value\"\n              class=\"form-control\"\n            />\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Gender\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n             <span\n               title=\"Double click to edit\"\n               (dblclick)=\"editing[rowIndex + '-gender'] = true\"\n               *ngIf=\"!editing[rowIndex + '-gender']\">\n              {{value}}\n            </span>\n            <select\n              *ngIf=\"editing[rowIndex + '-gender']\"\n              (change)=\"updateValue($event, 'gender', rowIndex)\"\n              [value]=\"value\"\n              class=\"form-control\">\n              <option value=\"male\">Male</option>\n              <option value=\"female\">Female</option>\n            </select>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Age\">\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/table/data-table/table-edit/table-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/table/data-table/table-edit/table-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableEditComponent = (function () {
    function TableEditComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableEditComponent.prototype.ngOnInit = function () {
    };
    TableEditComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableEditComponent.prototype.updateValue = function (event, cell, row) {
        this.editing[row + '-' + cell] = false;
        this.rows[row][cell] = event.target.value;
    };
    TableEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-edit',
            template: __webpack_require__("../../../../../src/app/theme/table/data-table/table-edit/table-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/table/data-table/table-edit/table-edit.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableEditComponent);
    return TableEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/table/data-table/table-edit/table-edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditModule", function() { return TableEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_edit_component__ = __webpack_require__("../../../../../src/app/theme/table/data-table/table-edit/table-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_edit_routing_module__ = __webpack_require__("../../../../../src/app/theme/table/data-table/table-edit/table-edit-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TableEditModule = (function () {
    function TableEditModule() {
    }
    TableEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__table_edit_routing_module__["a" /* TableEditRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__table_edit_component__["a" /* TableEditComponent */]]
        })
    ], TableEditModule);
    return TableEditModule;
}());



/***/ })

});
//# sourceMappingURL=table-edit.module.chunk.js.map