webpackJsonp(["signup.module"],{

/***/ "../../../../../src/app/theme/auth/login/signup/signup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/theme/auth/login/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignUpComponent */],
        data: {
            title: 'Simple SignUp'
        }
    }
];
var SignUpRoutingModule = (function () {
    function SignUpRoutingModule() {
    }
    SignUpRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], SignUpRoutingModule);
    return SignUpRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/login/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-cover\">\n  <div class=\"container\">\n    <div id=\"snackbar\">Some text some message..</div>\n    <div class=\"signup-wrapper\">\n      <div class=\"row\">\n        <!-- <div class=\"col-md-4 col-sm-4 col-xs-12 col-lg-4 no-padding\">\n          <div class=\"signup-left\">\n            <img src=\"./../../assets/img/left-logo.png\">\n          </div>\n        </div> -->\n        <div class=\"offset-md-3 offset-sm-2 offset-lg-3 col-md-6 col-sm-8 col-xs-12 col-lg-6 no-padding\">\n          <div class=\"signup-right\">\n            <div>\n              \n                <div class=\"ok-header\">\n                  <div class=\"left-img\">\n                    <img src=\"./../../assets/img/left-logo.png\">\n                  </div>\n                  <div class=\"right-text\">\n                    <h3 class=\"top-big-head\">signup for the Fuzion Coin pre-ico</h3>\n                  </div>\n                </div>\n            \n            </div>\n            <hr class=\"yellow\">\n            <div class=\"clear\"></div>\n            <div class=\"signup-fields\">\n              <div class=\"form-group\">\n                <label for=\"fname\" class=\"nn-label\">First Name</label>\n                <input [(ngModel)]=\"fname\" pattern=\"[a-zA-Z]\" type=\"fname\" class=\"form-control input-feild\" id=\"fname\">\n                <p class=\"errorClass\" *ngIf=\"fnameError\">Please enter First Name</p>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lname\" class=\"nn-label\">Last Name</label>\n                <input [(ngModel)]=\"lname\" pattern=\"[a-zA-Z]\" type=\"lname\" class=\"form-control input-feild\" id=\"lname\">\n                <p class=\"errorClass\" *ngIf=\"lnameError\">Please enter Last Name</p>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"nn-label\">Email</label>\n                <input [(ngModel)]=\"email\" type=\"email\" class=\"form-control input-feild\" id=\"email\">\n                <p class=\"errorClass\" *ngIf=\"emailError\">Please enter Email</p>\n                <p class=\"errorClass\" *ngIf=\"emailError1\">invalid Email Address</p>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"ethAddress\" class=\"nn-label\">Eth Address <span class=\"added-text\" style=\"color:red\">to recieve your Fuzion Coin tokens.Please ensure that this is an <a href=\"https://tokenmarket.net/what-is/ethereum-token-wallets/\" target=\"_blank\" class=\"rc-compliance\" style=\"color:red\">ERC-20 compatible wallet</a></span></label>\n                <input [(ngModel)]=\"ethAddress\" type=\"text\" class=\"form-control input-feild\" id=\"ethAddress\">\n                <p class=\"errorClass\" *ngIf=\"ethError\">please enter an eth address</p>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"pass\" class=\"nn-label\">Password</label>\n                <input (keydown)=\"signUpWithEnter($event)\" [(ngModel)]=\"password\" type=\"password\" class=\"form-control input-feild\" id=\"pass\">\n                <p class=\"errorClass\" *ngIf=\"passwordError\">Please enter Password</p>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"re-pass\" class=\"nn-label\">Re-type Password</label>\n                <input (keydown)=\"signUpWithEnter($event)\" [(ngModel)]=\"cpassword\" type=\"password\" class=\"form-control input-feild\" id=\"re-pass\">\n                <p class=\"errorClass\" *ngIf=\"cpasswordError\">Passwords do not match</p>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"round\">\n                  <input [(ngModel)]=\"checkBoxValue\" (click)=\"SignupAgreementChange($event)\" type=\"checkbox\" id=\"SignupAgreement\" />\n                  <label for=\"SignupAgreement\"></label>\n                  <span class=\"after-checkbox\">I agree to the\n                    <a target=\"blank\" class=\"terms-text\">Pre-Sale Terms & Conditions</a></span>\n                </div>\n                <p class=\"errorClass\" *ngIf=\"checkboxError\">Please agree to our terms </p>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"round\">\n                  <input [(ngModel)]=\"checkBoxValue2\" (click)=\"RiskFactor($event)\" type=\"checkbox\" id=\"SignupAgreement2\" />\n                  <label for=\"SignupAgreement2\"></label>\n                  <span class=\"after-checkbox\">I have read and understood the Risk Factors on the</span>\n                  <a\n                    target=\"blank\" class=\"terms-text\"> Fuzion Coin Whitepaper</a>\n                </div>\n                <p class=\"errorClass\" *ngIf=\"checkboxError2\">Please agree to the Risk Factors of Fuzion Coin Whitepaper </p>\n              </div>\n\n            </div>\n            <div *ngIf=\"loaderShow\" class=\"loginLoader\">\n              <i class=\"fas fa-spinner fa-spin fa-3x\"></i>\n            </div>\n            <button *ngIf=\"loginBtn\" type=\"button\" (click)=\"signup()\" class=\"signup-btn\">SIGNUP</button>\n            <hr>\n\n            <a class=\"my-links\" (click)=\"navigateToLogin()\">Already Registered? Login</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/auth/login/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-cover {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/bg.jpg") + ") !important;\n  min-height: 100vh;\n  width: 100%;\n  background-size: cover; }\n\n.signup-left {\n  background: rgba(0, 0, 0, 0.8);\n  padding: 296px 5px;\n  text-align: center;\n  height: 820px; }\n\n.signup-right {\n  background-color: white;\n  text-align: center;\n  padding: 45px 20px;\n  height: auto;\n  border: 4px solid #f6c801;\n  padding-bottom: 15px !important;\n  border: 4px solid #f6c801; }\n\n.signup-wrapper {\n  padding-top: 35px;\n  padding-bottom: 37px;\n  width: 90%;\n  margin: 0 auto; }\n\n.no-padding {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.no-margin {\n  margin: 0px; }\n\n.signup-head {\n  text-transform: uppercase;\n  color: black !important;\n  font-family: 'Zwizz-Bold';\n  margin-bottom: 15px; }\n\n.top-big-head {\n  text-transform: uppercase;\n  font-size: 19px;\n  color: #283891;\n  text-align: left;\n  padding-top: 10px; }\n\n.right-text {\n  position: relative;\n  float: left;\n  width: 80%; }\n\n.ok-header {\n  height: 50px; }\n\n.clear {\n  clear: both; }\n\n.rc-compliance {\n  opacity: 0.7;\n  font-weight: 300;\n  font-size: 10px;\n  color: black;\n  text-decoration: underline;\n  font-family: 'Zwizz-Regular'; }\n\n.added-text {\n  opacity: 0.7;\n  color: black;\n  font-weight: 300;\n  font-size: 10px;\n  font-family: 'Zwizz-Regular'; }\n\n.yellow {\n  border-bottom: 2px solid #f6c801;\n  margin-bottom: 25px; }\n\n.left-img {\n  position: relative;\n  float: left;\n  margin-top: -25px;\n  width: 20%; }\n\n.left-img img {\n  width: 85px; }\n\n.signup-fields {\n  text-align: left; }\n\n.input-feild {\n  border: 1px solid #d7d7d7;\n  border-radius: 0px;\n  background-color: white;\n  height: 35px; }\n\n/* .form-group {\n    margin-bottom: 35px;\n} */\n.nn-label {\n  color: black !important;\n  font-family: 'Zwizz-Bold';\n  font-size: 13px; }\n\n.terms-text {\n  color: #1077e0; }\n\n.round {\n  position: relative; }\n\n.round label {\n  background-color: #ccc;\n  border: 1px solid #ccc;\n  border-radius: 30%;\n  cursor: pointer;\n  height: 17px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 17px;\n  margin-top: 4px; }\n\n.round label:after {\n  border: 2px solid #fff;\n  border-top: none;\n  border-right: none;\n  content: \"\";\n  height: 6px;\n  left: 2px;\n  opacity: 0;\n  position: absolute;\n  top: 3px;\n  -webkit-transform: rotate(-30deg);\n          transform: rotate(-30deg);\n  width: 12px; }\n\n.round input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.round input[type=\"checkbox\"]:checked + label {\n  background-color: #66bb6a;\n  border-color: #66bb6a; }\n\n.round input[type=\"checkbox\"]:checked + label:after {\n  opacity: 1; }\n\n.after-checkbox {\n  margin-left: 10px;\n  color: black;\n  font-family: 'Zwizz-regular';\n  font-weight: 500;\n  font-size: 12px; }\n\n.my-links {\n  color: black !important;\n  border-bottom: 1px solid black !important; }\n\n.signup-btn {\n  font-size: 15px;\n  background-color: #f6c801;\n  top: 555px;\n  width: 100%;\n  height: 35px;\n  border: none;\n  color: black;\n  font-family: 'Zwizz-Bold';\n  margin-bottom: 15px;\n  font-weight: bold; }\n\n@media only screen and (max-width: 640px) {\n  .signup-left {\n    padding: 50px 5px; } }\n\n@media only screen and (min-width: 641px) and (max-width: 767px) {\n  .signup-left {\n    padding: 50px 5px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .signup-right {\n    padding: 21px 60px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/auth/login/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
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




var SignUpComponent = (function () {
    function SignUpComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.checkBox = false;
        this.checkBox2 = false;
        this.fnameError = false;
        this.lnameError = false;
        this.passwordError = false;
        this.cpasswordError = false;
        this.emailError = false;
        this.emailError1 = false;
        this.SignupAgreement = false;
        this.checkboxError = false;
        this.checkboxError2 = false;
        this.loaderShow = false;
        this.loginBtn = true;
        this.ethError = false;
    }
    SignUpComponent.prototype.signUpWithEnter = function (event) {
        if (event.keyCode == 13) {
            this.signup();
        }
    };
    SignUpComponent.prototype.navigateToLogin = function () {
        this.router.navigateByUrl('/');
    };
    SignUpComponent.prototype.SignupAgreementChange = function (e) {
        console.log('event', e);
        if (e.target.checked) {
            this.checkBox = true;
        }
        else {
            this.checkBox = false;
        }
        /*
            if($("#SignupAgreement").is(':checked')){
              this.SignupAgreement = true;
            }else{
              this.SignupAgreement = false;
            } */
    };
    SignUpComponent.prototype.RiskFactor = function (e) {
        console.log('event', e);
        if (e.target.checked) {
            this.checkBox2 = true;
        }
        else {
            this.checkBox2 = false;
        }
        /*
            if($("#SignupAgreement").is(':checked')){
              this.SignupAgreement = true;
            }else{
              this.SignupAgreement = false;
            } */
    };
    SignUpComponent.prototype.unsetErrors = function () {
        this.fnameError = false;
        this.lnameError = false;
        this.passwordError = false;
        this.emailError = false;
        this.emailError1 = false;
        this.checkboxError = false;
        this.cpasswordError = false;
        this.emailError1 = false;
        this.ethError = false;
        this.checkboxError2 = false;
    };
    SignUpComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    /*   validateName(name){
        var rn=/^[a-zA-Z]+$/;
        return rn.test(String(name).toLowerCase());
      } */
    SignUpComponent.prototype.signup = function () {
        $(".loginLoader").show();
        this.unsetErrors();
        this.email = $.trim(this.email);
        /*  this.name = $.trim(this.name); */
        var error = false;
        this.ethAddress = $.trim(this.ethAddress);
        if (!this.checkBox) {
            console.log('NOt checkd');
            this.checkBox = false;
            this.checkboxError = true;
            error = true;
        }
        if (!this.checkBox2) {
            console.log('NOt checkd');
            this.checkBox2 = false;
            this.checkboxError2 = true;
            error = true;
        }
        if (this.ethAddress == undefined || this.ethAddress.length == 0) {
            this.ethError = true;
            error = true;
        }
        if (this.fname == undefined /* || !this.validateName(this.name) */) {
            this.fnameError = true;
            error = true;
        }
        if (this.lname == undefined /* || !this.validateName(this.name) */) {
            this.lnameError = true;
            error = true;
        }
        if (this.email == undefined || this.email.length == 0) {
            this.emailError = true;
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
        if (!this.validateEmail(this.email) && this.email != undefined && this.email.length != 0) {
            this.emailError1 = true;
            error = true;
        }
        if (error) {
        }
        else {
            this.loaderShow = true;
            this.loginBtn = false;
            this.router.navigateByUrl('/admin/dashboard/default');
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
                    "iskycVerified": "2",
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
            localStorage.setItem('userId', JSON.stringify(obj.user._id));
            localStorage.setItem('signedInUser', JSON.stringify(obj));
            // this.userService.signup(this.email, this.password, this.fname ,this.lname,this.ethAddress).subscribe(a => {
            //   localStorage.setItem('signedInUser', JSON.stringify(a.data));
            //   this.signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
            //   console.log(this.signedInUser);
            //   if (a.code = 200) {
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
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-signup',
            template: __webpack_require__("../../../../../src/app/theme/auth/login/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/auth/login/signup/signup.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/login/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/theme/auth/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_routing_module__ = __webpack_require__("../../../../../src/app/theme/auth/login/signup/signup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SignUpModule = (function () {
    function SignUpModule() {
    }
    SignUpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__signup_routing_module__["a" /* SignUpRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignUpComponent */]]
        })
    ], SignUpModule);
    return SignUpModule;
}());



/***/ })

});
//# sourceMappingURL=signup.module.chunk.js.map