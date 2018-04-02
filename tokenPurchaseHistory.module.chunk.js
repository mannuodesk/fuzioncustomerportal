webpackJsonp(["tokenPurchaseHistory.module"],{

/***/ "../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenPurchaseHistoryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokenPurchaseHistory_component__ = __webpack_require__("../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__tokenPurchaseHistory_component__["a" /* TokenPurchaseHistoryComponent */],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var TokenPurchaseHistoryRoutingModule = (function () {
    function TokenPurchaseHistoryRoutingModule() {
    }
    TokenPurchaseHistoryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], TokenPurchaseHistoryRoutingModule);
    return TokenPurchaseHistoryRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nn-div-wrapper\">\n    <div id=\"snackbar\">Some text some message..</div>\n    <div>\n        <h3 class=\"nn-main-heading\">\n            Token Purchase History\n        </h3>\n    </div>\n    <div>\n        <table class=\"table nn-table\">\n            <thead>\n                <tr>\n                    <th class=\"table-head\">Tx Hash</th>\n                    <th class=\"table-head\">IFC Purchased</th>\n                    <th class=\"table-head\">Bonus IFC</th>\n                    <th class=\"table-head\">Total IFC Acquired</th>\n                    <th class=\"table-head\">Currency Sent</th>\n                    <th class=\"table-head\">Amount Sent</th>\n                    <th class=\"table-head\">Date</th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- <tr *ngFor=\"let transactions of transactionsList; let i = index\">\n                    <td class=\"txID\" style=\"width: 135px;display: block;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin: 0;\">\n                        <a href=\"{{transactions.txDetailURL}}\" target=\"blank\">{{transactions.txHash}}</a>\n                    </td>\n                    <td>{{transactions.coins.toFixed(2)}}</td>\n                    <td>{{transactions.bonusCoins.toFixed(2)}}</td>\n                    <td class=\"txID\">{{transactions.totalCoins.toFixed(2)}}</td>\n                    <td class=\"txID\">{{transactions.transactionType}}</td>\n                    <td>{{transactions.amountRecieve.toFixed(2)}}</td>\n                    <td class=\"date\">{{transactions.CreatedOnUTC}}</td>\n                </tr>\n                <tr *ngIf=\"signedInUser.user.allIncomingTransactions.length == 0\">\n                    <td colspan=\"8\">No Transactions Received</td>\n                </tr> -->\n                <tr>\n                    <td class=\"txID\" style=\"width: 135px;display: block;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin: 0;\">\n                        <a href=\"https://etherscan.io/tx/0xe8394b41c97075f04d0496d9a965f3dcde36ac30997fccb75116732a2d73a113\" target=\"blank\">0xe8394b41c97075f04d0496d9a965f3dcde36ac30997fccb75116732a2d73a113</a>\n                    </td>\n                    <td>268</td>\n                    <td>34</td>\n                    <td class=\"txID\">302</td>\n                    <td class=\"txID\">ETH</td>\n                    <td>0.5</td>\n                    <td class=\"date\">25-3-2018</td>\n                </tr>\n                <tr>\n                    <td class=\"txID\" style=\"width: 135px;display: block;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin: 0;\">\n                        <a href=\"https://blockexplorer.com/tx/6ff53ce2bb3c3cedf89502f1a93e17523763c15ad2801c559010390fcc7c8687\" target=\"blank\">6ff53ce2bb3c3cedf89502f1a93e17523763c15ad2801c559010390fcc7c8687</a>\n                    </td>\n                    <td>492</td>\n                    <td>58</td>\n                    <td class=\"txID\">550</td>\n                    <td class=\"txID\">BTC</td>\n                    <td>0.05</td>\n                    <td class=\"date\">28-3-2018</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nn-main-heading {\n  color: black;\n  font-family: 'Zwizz-Regular';\n  text-align: left;\n  font-weight: 600; }\n\n.nn-div-wrapper {\n  width: 90%;\n  margin: 0 auto;\n  margin-bottom: 50px; }\n\n.nn-table {\n  background-color: white;\n  padding: 10px;\n  table-layout: collapse; }\n\n.table-head {\n  font-family: 'Zwizz-Regular';\n  text-align: left;\n  font-weight: bold !important;\n  font-size: 14px !important; }\n\ntable tr td {\n  font-size: 16px; }\n\n.table-data {\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenPurchaseHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_userService__ = __webpack_require__("../../../../../src/services/userService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenPurchaseHistoryComponent = (function () {
    function TokenPurchaseHistoryComponent(_userService, router) {
        var _this = this;
        this._userService = _userService;
        this.router = router;
        this.transactionsList = [];
        this.month_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
        if (this.signedInUser == null || this.signedInUser === undefined) {
            this.router.navigateByUrl('/');
        }
        else {
            debugger;
            this._userService.transaction(this.signedInUser.user._id).subscribe(function (response) {
                _this.transactionsList = response.message;
            });
        }
    }
    TokenPurchaseHistoryComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    TokenPurchaseHistoryComponent.prototype.ngOnInit = function () {
    };
    TokenPurchaseHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tokenPurchaseHistory',
            template: __webpack_require__("../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_userService__["a" /* UserService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], TokenPurchaseHistoryComponent);
    return TokenPurchaseHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPurchaseHistoryModule", function() { return TokenPurchaseHistoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokenPurchaseHistory_component__ = __webpack_require__("../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tokenPurchaseHistory_routing_module__ = __webpack_require__("../../../../../src/app/theme/tokenPurchaseHistory/tokenPurchaseHistory-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TokenPurchaseHistoryModule = (function () {
    function TokenPurchaseHistoryModule() {
    }
    TokenPurchaseHistoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_3__tokenPurchaseHistory_routing_module__["a" /* TokenPurchaseHistoryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tokenPurchaseHistory_component__["a" /* TokenPurchaseHistoryComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__tokenPurchaseHistory_component__["a" /* TokenPurchaseHistoryComponent */]]
        })
    ], TokenPurchaseHistoryModule);
    return TokenPurchaseHistoryModule;
}());



/***/ })

});
//# sourceMappingURL=tokenPurchaseHistory.module.chunk.js.map