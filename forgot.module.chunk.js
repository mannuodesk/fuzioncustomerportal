webpackJsonp(["forgot.module"],{

/***/ "../../../../../src/app/theme/auth/forgot/forgot-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_component__ = __webpack_require__("../../../../../src/app/theme/auth/forgot/forgot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__forgot_component__["a" /* ForgotComponent */],
        data: {
            title: 'Forgot'
        }
    }
];
var ForgotRoutingModule = (function () {
    function ForgotRoutingModule() {
    }
    ForgotRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ForgotRoutingModule);
    return ForgotRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-cover\">\n  <div id=\"snackbar\">Some text some message..</div>\n  <div class=\"container\">\n    <div class=\"signup-wrapper\">\n      <div class=\"row\">\n        <!--  <div class=\"col-md-4 col-sm-4 col-xs-12 col-lg-4 no-padding\">\n          <div class=\"signup-left\">\n            <img src=\"./../../assets/img/left-logo.png\">\n          </div>\n        </div> -->\n        <div class=\"offset-md-3 offset-sm-2 offset-lg-3 col-md-6 col-sm-8 col-xs-12 col-lg-6 no-padding\">\n          <div class=\"signup-right\" *ngIf=\"partOne\">\n            <div class=\"forgotpassword1\">\n              <div>\n\n                <div class=\"ok-header\">\n                  <div class=\"left-img\">\n                    <img src=\"./../../assets/img/left-logo.png\">\n                  </div>\n                  <div class=\"right-text\">\n                    <h3 class=\"top-big-head\">Forgot password</h3>\n                  </div>\n                </div>\n\n\n\n              </div>\n              <hr class=\"yellow\">\n              <div class=\"clear\"></div>\n              <small class=\"small-text\">Enter your email associated with Fuzion Coin to reset your password</small>\n              <div class=\"signup-fields\">\n\n                <div class=\"form-group\">\n                  <label for=\"email\" class=\"nn-label\">Email</label>\n                  <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control input-feild\" id=\"email\">\n                  <p class=\"errorClass\" *ngIf=\"emailError\">Please Enter Email</p>\n                  <p class=\"errorClass\" *ngIf=\"emailError1\">invalid Email Address</p>\n                </div>\n\n\n              </div>\n              <div *ngIf=\"loaderShow\" class=\"loginLoader\">\n                <i class=\"fas fa-spinner fa-3x fa-spin\"></i>\n              </div>\n              <button type=\"button\" class=\"signup-btn\" *ngIf=\"verifyAccountBtn\" (click)=\"verifyAccount()\">reset password</button>\n              <p class=\"\" id=\"finalCallError\" *ngIf=\"finalCallErrorCheck\" [innerHTML]=\"finalCallError\"></p>\n              <a class=\"my-links\" (click)=\"navigateToLogin()\">Back to login</a>\n\n            </div>\n\n          </div>\n          <!--forgot password second screen-->\n          <div class=\"signup-right2\" *ngIf=\"partTwo\">\n            <div class=\"forgotpassword1\">\n              <div>\n                <h3 class=\"no-margin signup-head\">\n                  update password\n                </h3>\n                <p class=\"p2-below-head\">Enter the verification code sent on your provided email address to update your password.</p>\n              </div>\n              <p class=\"user-email-show\">\n                {{email}}\n              </p>\n              <div class=\"signup-fields\">\n\n                <div class=\"form-group\">\n                  <label for=\"email\" class=\"nn-label\">Verification Code</label>\n                  <input [(ngModel)]=\"verificationCode\" name=\"verificationCode\" type=\"text\" class=\"form-control input-feild\" id=\"verificationCode\">\n                  <p class=\"errorClass\" *ngIf=\"verificationCodeError\">Please enter Verification code</p>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"pass\" class=\"nn-label\">Password</label>\n                  <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control input-feild\" id=\"pass\">\n                  <p class=\"errorClass\" *ngIf=\"passwordError\">Please enter Password</p>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"re-pass\" class=\"nn-label\">Re-type Password</label>\n                  <input [(ngModel)]=\"cpassword\" type=\"password\" class=\"form-control input-feild\" id=\"re-pass\">\n                  <p class=\"errorClass\" *ngIf=\"cpasswordError\">Passwords do not match</p>\n                </div>\n\n              </div>\n              <div *ngIf=\"loaderShow\" class=\"loginLoader\">\n                <i class=\"fas fa-spinner fa-3x fa-spin\"></i>\n              </div>\n                <button type=\"button\" class=\"signup-btn\" *ngIf=\"resetAccountBtn\" (click)=\"resetPassword()\">reset password</button>\n\n\n\n               \n            </div>\n\n          </div>\n          <!--forgot password third screen-->\n          <div class=\"signup-right3\" *ngIf=\"partThree\">\n            <div class=\"forgotpassword1\">\n              <div>\n                <h3 class=\"no-margin signup-head\">\n                  password updated!\n                </h3>\n                <p class=\"p-below-head\">Your password has been updated.\n                  <span class=\"login-span\">Login </span>to access your account.</p>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/auth/forgot/forgot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-cover {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/bg.jpg") + ") !important;\n  height: 100vh;\n  width: 100%;\n  background-size: cover; }\n\n.signup-left {\n  background: rgba(0, 0, 0, 0.8);\n  padding: 153px 5px;\n  text-align: center; }\n\n.top-big-head {\n  text-transform: uppercase;\n  font-size: 19px;\n  color: #283891;\n  text-align: left;\n  padding-top: 10px; }\n\n.right-text {\n  position: relative;\n  float: left;\n  width: 80%; }\n\n.ok-header {\n  height: 60px; }\n\n.clear {\n  clear: both; }\n\n.yellow {\n  border-bottom: 2px solid #f6c801; }\n\n.left-img {\n  position: relative;\n  float: left;\n  margin-top: -25px;\n  width: 20%; }\n\n.left-img img {\n  width: 85px; }\n\n.signup-right {\n  background-color: white;\n  text-align: center;\n  padding: 25px 20px;\n  height: auto;\n  border: 4px solid #f6c801;\n  padding-bottom: 15px !important;\n  border: 4px solid #f6c801; }\n\n.signup-right2 {\n  background-color: white;\n  text-align: center;\n  padding: 45px 60px;\n  height: 532px;\n  border: 4px solid #f6c801; }\n\n.signup-right3 {\n  background-color: white;\n  text-align: center;\n  padding: 203px 60px;\n  border: 4px solid #f6c801; }\n\n.signup-wrapper {\n  padding-top: 45px;\n  padding-bottom: 60px;\n  width: 90%;\n  margin: 0 auto; }\n\n.no-padding {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.no-margin {\n  margin: 0px; }\n\n.signup-head {\n  text-transform: uppercase;\n  color: black !important;\n  font-family: 'Zwizz-Bold';\n  padding-bottom: 20px; }\n\n.small-text {\n  text-align: center;\n  font-size: 11px;\n  color: black;\n  font-weight: 600; }\n\n.signup-fields {\n  text-align: left;\n  margin-top: 20px; }\n\n.input-feild {\n  border: 1px solid #d7d7d7;\n  border-radius: 0px;\n  background-color: white;\n  height: 30px; }\n\n.form-group {\n  margin-bottom: 35px; }\n\n.nn-label {\n  color: black !important;\n  font-family: 'Zwizz-Bold';\n  font-size: 13px; }\n\n.terms-text {\n  color: #1077e0; }\n\n.round {\n  position: relative; }\n\n.round label {\n  background-color: #ccc;\n  border: 1px solid #ccc;\n  border-radius: 30%;\n  cursor: pointer;\n  height: 17px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 17px;\n  margin-top: 4px; }\n\n.round label:after {\n  border: 2px solid #fff;\n  border-top: none;\n  border-right: none;\n  content: \"\";\n  height: 6px;\n  left: 2px;\n  opacity: 0;\n  position: absolute;\n  top: 3px;\n  -webkit-transform: rotate(-30deg);\n          transform: rotate(-30deg);\n  width: 12px; }\n\n.round input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.round input[type=\"checkbox\"]:checked + label {\n  background-color: #66bb6a;\n  border-color: #66bb6a; }\n\n.round input[type=\"checkbox\"]:checked + label:after {\n  opacity: 1; }\n\n.after-checkbox {\n  margin-left: 10px;\n  color: black;\n  font-family: 'Zwizz-Bold';\n  font-size: 12px; }\n\n.signup-btn {\n  font-size: 15px;\n  background-color: #f6c801;\n  top: 555px;\n  width: 100%;\n  height: 35px;\n  border: none;\n  color: black;\n  font-family: 'Zwizz-Bold';\n  margin-bottom: 15px;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.my-links {\n  border-bottom: 1px solid black;\n  font-weight: bold; }\n\n.forgot-pass-span {\n  color: #25a0e7;\n  position: absolute;\n  right: 20px;\n  font-family: 'Zwizz-Bold';\n  font-size: 13px; }\n\n#finalCallError {\n  color: red;\n  text-align: center; }\n\n.p-below-head {\n  color: black;\n  font-family: 'Zwizz-Regular';\n  font-size: 13px;\n  padding-bottom: 40px; }\n\n.p2-below-head {\n  color: black;\n  font-family: 'Zwizz-Regular';\n  font-size: 13px;\n  padding-bottom: 10px; }\n\n.login-span {\n  color: #283891;\n  font-family: 'Zwizz-Regular';\n  font-size: 13px; }\n\n.user-email-show {\n  text-align: left;\n  font-weight: 900;\n  color: #283891; }\n\n@media only screen and (max-width: 640px) {\n  .signup-left {\n    padding: 50px 5px; } }\n\n@media only screen and (min-width: 641px) and (max-width: 767px) {\n  .signup-left {\n    padding: 50px 5px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .signup-right {\n    padding: 103px 60px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/auth/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
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




var ForgotComponent = (function () {
    function ForgotComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.emailError = false;
        this.emailError1 = false;
        this.loaderShow = false;
        this.verifyAccountBtn = true;
        this.resetAccountBtn = true;
        this.partOne = true;
        this.partTwo = false;
        this.partThree = false;
        this.passwordError = false;
        this.cpasswordError = false;
        this.verificationCodeError = false;
    }
    ForgotComponent.prototype.unsetErrors = function () {
        this.emailError = false;
        this.emailError1 = false;
        this.cpasswordError = false;
        this.finalCallErrorCheck = false;
        this.passwordError = false;
    };
    ForgotComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ForgotComponent.prototype.verifyAccount = function () {
        this.unsetErrors();
        this.email = $.trim(this.email);
        var error = false;
        if (this.email == undefined || this.email.length == 0) {
            this.emailError = true;
            error = true;
        }
        if (!this.validateEmail(this.email) && this.email != undefined && this.email.length != 0) {
            this.emailError1 = true;
            error = true;
        }
        if (error) {
        }
        else {
            this.loaderShow = true;
            this.verifyAccountBtn = false;
            // this.userService.forgotPassword(this.email).subscribe(a => {
            //   console.log(a);
            //   if (a.code = 200) {
            //     this.finalCallErrorCheck=false;
            //     $("#snackbar").html(a.message);
            //     this.myFunction();
            //     this.loaderShow = false;
            //     setTimeout(() => {
            //       this.partOne = false;
            //       this.partTwo = true;
            //     }, 1000);
            //   }
            //   else {
            //   }
            // }, err => {
            //   this.loaderShow = false;
            //   this.verifyAccountBtn = true;
            //   var obj = JSON.parse(err._body);
            //   console.log(obj); 
            //   this.finalCallErrorCheck = true;
            //    this.finalCallError = obj.message;
            //   //  $('#finalCallError').html(obj.message);
            // /*   $("#finalCallError").text(obj.message); */
            // })
        }
    };
    ForgotComponent.prototype.navigateToLogin = function () {
        this.router.navigateByUrl('/');
    };
    ForgotComponent.prototype.resetPassword = function () {
        var _this = this;
        this.unsetErrors();
        var error = false;
        if (this.verificationCode == undefined) {
            this.verificationCodeError = true;
            error = true;
        }
        if (this.password == undefined) {
            this.passwordError = true;
            error = true;
        }
        if (this.cpassword == undefined) {
            this.cpasswordError = true;
            error = true;
        }
        if (this.password != this.cpassword) {
            this.cpasswordError = true;
            error = true;
        }
        if (error) {
        }
        else {
            this.loaderShow = true;
            this.resetAccountBtn = false;
            this.userService.verifyForgotPassword(this.email, this.password, this.verificationCode).subscribe(function (a) {
                console.log(a);
                if (a.code = 200) {
                    $("#snackbar").html(a.message);
                    _this.myFunction();
                    _this.loaderShow = false;
                    _this.partOne = false;
                    _this.partTwo = false;
                    _this.partThree = true;
                    setTimeout(function () {
                        _this.router.navigateByUrl('/');
                    }, 2000);
                }
                else {
                }
            }, function (err) {
                _this.loaderShow = false;
                _this.resetAccountBtn = true;
                var obj = JSON.parse(err._body);
                $("#snackbar").html(obj.message);
                _this.myFunction();
            });
        }
    };
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/theme/auth/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/auth/forgot/forgot.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/forgot/forgot.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotModule", function() { return ForgotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_component__ = __webpack_require__("../../../../../src/app/theme/auth/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_routing_module__ = __webpack_require__("../../../../../src/app/theme/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ForgotModule = (function () {
    function ForgotModule() {
    }
    ForgotModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__forgot_routing_module__["a" /* ForgotRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__forgot_component__["a" /* ForgotComponent */]]
        })
    ], ForgotModule);
    return ForgotModule;
}());



/***/ })

});
//# sourceMappingURL=forgot.module.chunk.js.map