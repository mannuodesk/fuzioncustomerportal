webpackJsonp(["basic-login.module"],{

/***/ "../../../../../src/app/theme/auth/login/basic-login/basic-login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_login_component__ = __webpack_require__("../../../../../src/app/theme/auth/login/basic-login/basic-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_login_component__["a" /* BasicLoginComponent */],
        data: {
            title: 'Simple Login'
        }
    }
];
var BasicLoginRoutingModule = (function () {
    function BasicLoginRoutingModule() {
    }
    BasicLoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], BasicLoginRoutingModule);
    return BasicLoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/login/basic-login/basic-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-cover\">\n  <div id=\"snackbar\">Some text some message..</div>\n  <div class=\"container\">\n    <div class=\"signup-wrapper\">\n      <div class=\"row\">\n    <!--     <div class=\"col-md-4 col-sm-4 col-xs-12 col-lg-4 no-padding\">\n          <div class=\"signup-left\">\n            <img src=\"./../../assets/img/left-logo.png\">\n          </div>\n        </div> -->\n        <div class=\"offset-md-3 offset-sm-2 offset-lg-3 col-md-6 col-sm-8 col-xs-12 col-lg-6 no-padding\">\n          <div class=\"signup-right\">\n            <div>\n              <h3 class=\"no-margin signup-head\">\n                <div class=\"ok-header\">\n                  <div class=\"left-img\">\n                    <img src=\"./../../assets/img/left-logo.png\">\n                  </div>\n                  <div class=\"right-text\">\n                    <h3 class=\"top-big-head\">Login to your Fuzion Coin dashboard</h3>\n                  </div>\n                </div>\n              </h3>\n\n\n            </div>\n            <hr class=\"yellow\">\n            <div class=\"clear\"></div>\n\n            <div class=\"signup-fields\">\n\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"nn-label\">Email</label>\n                <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control input-feild\" id=\"email\">\n                <p class=\"errorClass\" *ngIf=\"usernameError\">Invalid email input</p>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"pass\" class=\"nn-label\">Password</label>\n                <span>\n                  <a class=\"forgot-pass-span\" (click)=\"navigateToForgotPassword()\">Forgot Password?</a>\n                </span>\n                <input (keydown)=\"loginWithEnter($event)\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control input-feild\"\n                  id=\"pass\">\n                <p class=\"errorClass\" *ngIf=\"passwordError\">Invalid password input</p>\n              </div>\n            </div>\n            <div *ngIf=\"loaderShow\" class=\"loginLoader\">\n              <i class=\"fas fa-spinner fa-3x fa-spin\"></i>\n            </div>\n            <button *ngIf=\"loginBtn\" type=\"button\" class=\"signup-btn\" (click)=\"login()\">LOGIN</button>\n\n<!--             <hr> -->\n\n            <a class=\"my-links\" (click)=\"navigateToSignup()\">Don't have an account? SignUp</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/auth/login/basic-login/basic-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-cover {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/bg.jpg") + ") !important;\n  min-height: 100vh;\n  width: 100%;\n  background-size: cover; }\n\n.signup-left {\n  background: rgba(0, 0, 0, 0.8);\n  padding: 141px 5px;\n  text-align: center; }\n\n.signup-right {\n  background-color: white;\n  text-align: center;\n  padding: 45px 20px;\n  height: auto;\n  border: 4px solid #f6c801;\n  padding-bottom: 15px !important;\n  border: 4px solid #f6c801; }\n\n.signup-wrapper {\n  padding-top: 60px;\n  padding-bottom: 112px;\n  width: 90%;\n  margin: 0 auto; }\n\n.no-padding {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.top-big-head {\n  text-transform: uppercase;\n  font-size: 19px;\n  color: #283891;\n  text-align: left;\n  padding-top: 10px; }\n\n.right-text {\n  position: relative;\n  float: left;\n  width: 80%; }\n\n.ok-header {\n  height: 60px; }\n\n.clear {\n  clear: both; }\n\n.yellow {\n  border-bottom: 2px solid #f6c801;\n  margin-bottom: 25px; }\n\n.left-img {\n  position: relative;\n  float: left;\n  margin-top: -25px;\n  width: 20%; }\n\n.left-img img {\n  width: 85px; }\n\n.no-margin {\n  margin: 0px; }\n\n.signup-head {\n  text-transform: uppercase;\n  color: black !important;\n  font-family: 'Zwizz-Bold'; }\n\n.signup-fields {\n  text-align: left; }\n\n.input-feild {\n  border: 1px solid #d7d7d7;\n  border-radius: 0px;\n  background-color: white;\n  height: 35px; }\n\n.form-group {\n  margin-bottom: 35px; }\n\n.nn-label {\n  color: black !important;\n  font-family: 'Zwizz-Bold';\n  font-size: 13px; }\n\n.terms-text {\n  color: #1077e0; }\n\n.round {\n  position: relative; }\n\n.round label {\n  background-color: #ccc;\n  border: 1px solid #ccc;\n  border-radius: 30%;\n  cursor: pointer;\n  height: 17px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 17px;\n  margin-top: 4px; }\n\n.round label:after {\n  border: 2px solid #fff;\n  border-top: none;\n  border-right: none;\n  content: \"\";\n  height: 6px;\n  left: 2px;\n  opacity: 0;\n  position: absolute;\n  top: 3px;\n  -webkit-transform: rotate(-30deg);\n          transform: rotate(-30deg);\n  width: 12px; }\n\n.round input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.round input[type=\"checkbox\"]:checked + label {\n  background-color: #66bb6a;\n  border-color: #66bb6a; }\n\n.round input[type=\"checkbox\"]:checked + label:after {\n  opacity: 1; }\n\n.after-checkbox {\n  margin-left: 10px;\n  color: black;\n  font-family: 'Zwizz-Bold';\n  font-size: 12px; }\n\n.my-links {\n  color: #1077e0;\n  border-bottom: 1px solid #1077e0;\n  margin-top: 20px; }\n\n.signup-btn {\n  font-size: 15px;\n  background-color: #f6c801;\n  top: 555px;\n  width: 100%;\n  height: 35px;\n  border: none;\n  color: black;\n  font-family: 'Zwizz-Bold';\n  margin-bottom: 15px;\n  font-weight: bold; }\n\n.forgot-pass-span {\n  color: #25a0e7 !important;\n  position: absolute;\n  right: 20px;\n  font-family: 'Zwizz-Bold';\n  font-size: 13px;\n  cursor: pointer; }\n\n@media only screen and (max-width: 640px) {\n  .signup-left {\n    padding: 50px 5px; }\n  .left-img, .right-text {\n    width: 100%;\n    float: none; }\n  .ok-header {\n    height: auto; } }\n\n@media only screen and (min-width: 641px) and (max-width: 767px) {\n  .signup-left {\n    padding: 50px 5px; }\n  .left-img, .right-text {\n    width: 100%;\n    float: none; }\n  .ok-header {\n    height: auto; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .signup-right {\n    padding: 20px 20px; }\n  .left-img {\n    margin-top: 0;\n    width: 30%; }\n  .ok-header {\n    height: 90px; }\n  .right-text {\n    width: 70%;\n    padding-top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/auth/login/basic-login/basic-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userService__ = __webpack_require__("../../../../../src/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasicLoginComponent = (function () {
    function BasicLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this._alive = true;
        this.passwordError = false;
        this.usernameError = false;
        this.loaderShow = false;
        this.loginBtn = true;
    }
    BasicLoginComponent.prototype.loginWithEnter = function (event) {
        if (event.keyCode == 13) {
            this.login();
        }
    };
    BasicLoginComponent.prototype.unsetErrors = function () {
        this.usernameError = false;
        this.passwordError = false;
    };
    BasicLoginComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    BasicLoginComponent.prototype.navigateToSignup = function () {
        this.router.navigateByUrl('/signup');
    };
    BasicLoginComponent.prototype.navigateToForgotPassword = function () {
        this.router.navigateByUrl('/forgotpassword');
    };
    BasicLoginComponent.prototype.login = function () {
        var obj = {
            "user": {
                "_id": "5ab8afb1c5f0fd0136d3023b",
                "ETHWalleRecieverData": "0x492cc769000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000183561623861666231633566306664303133366433303233620000000000000000",
                "ETHWalletFundRecieverAddress": "0xff0eb1aedd3faceb2af3750c2b5d46a5ee586600",
                "EthAddress": "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
                "BCHWalletRecieverAddress": "1AmbU4B26ER6eR9u76Nx55497gGvLjDfkQ",
                "LTCWalletRecieverAddress": "LTwxkWgz87UjKkQD1Hkw6C2zRLzKx5nU8K",
                "BTCWalletRecieverAddress": "19BT9TSEqg8Hcdjw6UKsUg6VTEtbrXySx4",
                "Password": "$2a$10$y7qtipMd12VLM/9dMDA7NuF/iFmUnHQDuOT7ZgW.FtQi3qL7Pdr0.",
                "__v": 0,
                "allIncomingTransactions": [],
                "UpdatedOnUTC": "2018-03-26T08:30:41.497Z",
                "CreatedOnUTC": "2018-03-26T08:30:41.497Z",
                "isTokenSent": false,
                "Tokens": 0,
                "AmountInvested": 0,
                "selfieUrl": "",
                "passportNumberUrl": "",
                "passportNumber": "",
                "identityCardNumberUrl": "",
                "identityCardNumber": "",
                "iskycVerified": "0",
                "isEmailVerified": false,
                "Role": 2,
                "PhoneNumber": "",
                "dob": "",
                "lastName": "Smith",
                "firstName": "Steve",
                "countryCode": "",
                "ip": "",
                "countryName": "",
                "address": "",
                "Email": "stevesmith@hotmail.com"
            }, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlhaWxtYXNAaG90bWFpbC5jb20iLCJ1c2VySUQiOiI1YWI4YWZiMWM1ZjBmZDAxMzZkMzAyM2IiLCJyb2xlIjoyLCJpYXQiOjE1MjI2NjU3MDR9.M8691WlxznLnTomFefveQJnjTw9OLTecnazHQA2oX9E"
        };
        $(".loginLoader").show();
        this.unsetErrors();
        this.email = $.trim(this.email);
        var error = false;
        if (this.email == undefined || this.email.length == 0) {
            this.usernameError = true;
            error = true;
        }
        if (this.password == undefined || this.password.length == 0) {
            this.passwordError = true;
            error = true;
        }
        if (!this.validateEmail(this.email)) {
            this.usernameError = true;
            error = true;
        }
        localStorage.setItem('userId', JSON.stringify(obj.user._id));
        localStorage.setItem('signedInUser', JSON.stringify(obj));
        if (error) {
        }
        else {
            this.loaderShow = true;
            this.loginBtn = false;
            this.loaderShow = false;
            this.router.navigateByUrl('/admin/dashboard/default');
            // this.userService.login(this.email, this.password).subscribe(a => {
            //   /*  console.log('login data',a.data.user._id); */
            //   localStorage.setItem('userId', JSON.stringify(a.data.user._id));
            //   localStorage.setItem('signedInUser', JSON.stringify(a.data));
            //   this.signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
            //   if (a.code = 200) {
            //     this.loaderShow = false;
            //     this.router.navigateByUrl('/admin/dashboard/default');
            //   }
            //   else {
            //   }
            // }, err => {
            //   this.loaderShow = false;
            //   this.loginBtn = true;
            //   var obj = JSON.parse(err._body)
            //   $("#snackbar").html(obj.message);
            //   this.myFunction();
            // })
        }
    };
    BasicLoginComponent.prototype.ngOnInit = function () {
    };
    BasicLoginComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    BasicLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-login',
            template: __webpack_require__("../../../../../src/app/theme/auth/login/basic-login/basic-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/auth/login/basic-login/basic-login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], BasicLoginComponent);
    return BasicLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/login/basic-login/basic-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function() { return BasicLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_login_component__ = __webpack_require__("../../../../../src/app/theme/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_login_routing_module__ = __webpack_require__("../../../../../src/app/theme/auth/login/basic-login/basic-login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BasicLoginModule = (function () {
    function BasicLoginModule() {
    }
    BasicLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_login_routing_module__["a" /* BasicLoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_login_component__["a" /* BasicLoginComponent */]]
        })
    ], BasicLoginModule);
    return BasicLoginModule;
}());



/***/ })

});
//# sourceMappingURL=basic-login.module.chunk.js.map