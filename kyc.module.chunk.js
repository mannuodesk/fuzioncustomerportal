webpackJsonp(["kyc.module"],{

/***/ "../../../../../src/app/theme/kyc/kyc-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kyc_component__ = __webpack_require__("../../../../../src/app/theme/kyc/kyc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__kyc_component__["a" /* KycComponent */],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var KycRoutingModule = (function () {
    function KycRoutingModule() {
    }
    KycRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], KycRoutingModule);
    return KycRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/kyc/kyc.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"signedInUser?.user.iskycVerified=='0'\">\n    <div id=\"snackbar\"></div>\n    <div>\n\n        <h1 class=\"heading-verification\">\n            Profile Verification\n        </h1>\n        <div class=\"form-wrap\">\n\n            <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                <label for=\"fname\" class=\"block-label\">Select your ID Type</label>\n\n                <select class=\"my-select\" (change)=\"getVerificationSelection($event.target.value)\">\n                    <option selected disabled>Choose here</option>\n                    <option value=\"passport\">Passport</option>\n                    <option value=\"nic\">Identity Card</option>\n\n                </select>\n                <p *ngIf=\"selectError\" class=\"errorClass2\">Please select a value</p>\n                <br>\n            </div>\n\n\n\n            <div *ngIf=\"idCardNumberIf\">\n                <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                    <label for=\"fname\" class=\"block-label\">Enter Identity Card Number</label>\n\n                    <input [(ngModel)]=\"idCardNumber\" placeholder=\"Identity Card Number\" name=\"idCardNumber\" type=\"text\" class=\"form-control verification-fieldss\"\n                        id=\"idCardNumber\">\n                    <p class=\"errorClass2\" *ngIf=\"idCardNumberError\">Invalid Id Card Number</p>\n                    <p *ngIf=\"idNumberError\" class=\"errorClass2\">ID Number is required</p>\n                    <p *ngIf=\"IDNumbervalidError\" class=\"errorClass2\">ID Number not valid</p>\n                </div>\n\n                <div class=\"form-group centered-buttons clearfix\">\n                    <div class=\"left-name\">\n                        <p class=\"blue-left\">{{idMsg}}</p>\n                    </div>\n                    <input #IdCardPhoto type=\"file\" accept=\"image/*\" style=\"display:none\" (change)=fileChooseChangeID($event)>\n                    <div (click)=\"getIdPhoto()\" class=\"right-iamge\">\n                        <img src=\"assets/img/cam.png\">\n                    </div>\n                    <p *ngIf=\"idNumberPhotoError\" class=\"errorClass2\">Image is required</p>\n                </div>\n            </div>\n            <div *ngIf=\"passportNumberIf\">\n                <div class=\"form-group\">\n\n                    <input [(ngModel)]=\"passportNumber\" placeholder=\"Passport Number\" name=\"passportNumber\" type=\"text\" class=\"form-control verification-fieldss\"\n                        id=\"passportNumber\">\n                    <p *ngIf=\"PassportNumberValidError\" class=\"errorClass2\">Passport Number not valid</p>\n                    <p *ngIf=\"passportNumberError\" class=\"errorClass2\">Passport Number is required</p>\n                </div>\n                <div class=\"form-group centered-buttons clearfix\">\n                    <div class=\"left-name\">\n                        <p class=\"blue-left\">{{passMsg}}</p>\n                    </div>\n                    <input #passportPhoto accept=\"image/*\" id=\"passportPhoto\" type=\"file\" style=\"display:none\" (change)=fileChoosePassport($event)>\n                    <div (click)=\"getPassportPhoto()\" class=\"right-iamge\">\n                        <img src=\"assets/img/cam.png\">\n                    </div>\n                    <p *ngIf=\"passportPhotoError\" class=\"errorClass2\">Image is required</p>\n                </div>\n            </div>\n\n            <!-- <div class=\"form-group centered-buttons clearfix\">\n                <div class=\"left-name\">\n                    <p class=\"blue-left\">{{passSelfiMsg}}</p>\n                </div>\n                <input #selfiPassportPhoto type=\"file\" accept=\"image/*\" style=\"display:none\" (change)=fileChooseSelfiPassport($event)>\n                <div (click)=\"getPassportSelfiPhoto()\" class=\"right-iamge\">\n                    <img src=\"assets/img/cam.png\">\n                </div>\n                <p *ngIf=\"passportSelfiPhotoError\" class=\"errorClass2\">Image is required</p>\n\n            </div> -->\n\n\n            <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                <label for=\"fname\" class=\"block-label\">Select your Country</label>\n\n                <select class=\"my-select\" (change)=\"getCountrySelected($event.target.value)\">\n                    <option selected disabled>Please Select</option>\n                    <option *ngFor=\"let country of countries\" value=\"{{country.alpha2Code}}\">{{country.name}}</option>\n                </select>\n                <p *ngIf=\"selectCountry\" class=\"errorClass2\">Select a country</p>\n            </div>\n\n           <!--  <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                <label for=\"fname\" class=\"block-label\">Enter your address</label>\n                <input [(ngModel)]=\"address\" placeholder=\"Address\" name=\"address\" type=\"text\" class=\" verification-fieldss\" id=\"address\">\n                <p *ngIf=\"addressError\" class=\"errorClass2\">Address is required</p>\n            </div> -->\n            <div class=\"form-group\">\n                <input type=\"date\" class=\"verification-fieldss\" [(ngModel)]=\"dob\" placeholder=\"Enter your Date of Birth\" >\n                <p *ngIf=\"dobCheck\" class=\"errorClass2\">Enter date of birth</p>\n              </div>\n            <div class=\"verificationForm\">\n                <button *ngIf=\"updateBtn\" class=\"update-profile updateBtn\" (click)=\"uploadProfile()\">Submit</button>\n            </div>\n            <div class=\"updateLoader\">\n                <i class=\"fas fa-spinner fa-spin fa-3x\"></i>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"kycVerified\" *ngIf=\"signedInUser?.user.iskycVerified=='1'\">\n\n    <p class=\"success\">Your details have been submitted and are in the process of verification</p>\n\n</section>\n\n<section class=\"kycVerified\" *ngIf=\"signedInUser?.user.iskycVerified=='2'\">\n\n    <p class=\"success\">Your KYC has been verified</p>\n\n</section>\n<section class=\"kycVerified\" *ngIf=\"signedInUser?.user.iskycVerified=='3'\">\n\n    <p class=\"success\">Your account has been verified successfully</p>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/theme/kyc/kyc.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading-verification {\n  color: black !important;\n  font-family: 'Zwizz-Bold';\n  font-size: 22px;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.updateLoader {\n  display: none;\n  margin: 20px auto;\n  width: 50px; }\n\n.verification-fieldss {\n  border: none;\n  border-bottom: 1px solid #d2d2d2;\n  width: 100% !important;\n  border-radius: 0;\n  color: #787878;\n  border: 1px solid #23338f;\n  font-size: 11px;\n  width: 30%;\n  height: 39px;\n  margin: 0 auto; }\n\n.block-label {\n  margin-bottom: 10px;\n  display: block; }\n\n.form-wrap {\n  text-align: center;\n  width: 320PX;\n  margin: 30px auto; }\n\n.left-name {\n  position: relative;\n  float: left;\n  width: 200px;\n  overflow: hidden; }\n\n.right-iamge {\n  position: relative;\n  float: left;\n  width: 120px;\n  margin-bottom: 10px; }\n\n.blue-left {\n  font-size: 13px;\n  font-family: 'Zwizz-Regular';\n  color: #23338f;\n  line-height: 1.2;\n  padding-top: 10px; }\n\n.update-profile {\n  margin-top: 20px;\n  font-size: 15px;\n  border-width: 1px;\n  border-color: #23338f;\n  border-style: solid;\n  height: 35px;\n  width: 100%;\n  border-radius: 20px;\n  color: black;\n  transition: all 0.4s; }\n\n.verificationForm {\n  width: 40%;\n  margin: 0 auto; }\n\n.my-select {\n  font-size: 11px;\n  width: 100%;\n  height: 39px;\n  color: #23338f;\n  border: 1px solid #23338f; }\n\n.form-wrap {\n  text-align: center; }\n\n.kycVerified {\n  width: 75%;\n  margin: 100px auto; }\n\n.success {\n  text-align: center;\n  font-size: 22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/kyc/kyc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userService__ = __webpack_require__("../../../../../src/services/userService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KycComponent = (function () {
    function KycComponent(_userService) {
        this._userService = _userService;
        this.idNumberPhoto = null;
        this.passportNumberPhoto = null;
        this.passportSelfiPhoto = null;
        this.idCardNumberIf = false;
        this.passportNumberIf = false;
        this.idNumberError = false;
        this.addressError = false;
        this.passportNumberError = false;
        this.IDNumbervalidError = false;
        this.readyToCallService = false;
        this.idNumberPhotoError = false;
        this.passportPhotoError = false;
        this.selectError = false;
        this.passportSelfiPhotoError = false;
        this.PassportNumberValidError = false;
        this.countries = [];
        this.updateBtn = true;
        this.idMsg = '*Take a picture of Identity Card';
        this.passMsg = '*Take a picture of your Passport';
        this.passSelfiMsg = '*Take a selfie with your card';
        this.selectCountry = false;
        this.SelectValue = "";
        this.passportOrId = false;
        this.dobCheck = false;
        this.signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
    }
    KycComponent.prototype.getVerificationSelection = function (event) {
        console.log(event);
        this.resetValidations();
        this.emptyValues();
        if (event == "passport") {
            this.passportNumberIf = true;
            this.idCardNumberIf = false;
            this.idNumberError = false;
        }
        else {
            this.idCardNumberIf = true;
            this.passportNumberIf = false;
            this.PassportNumberValidError = false;
        }
    };
    KycComponent.prototype.validateNumber = function (value) {
        var numberPattern = /^[a-z A-z]$/;
        var test = numberPattern.test(String(value).toLowerCase());
        return test;
    };
    KycComponent.prototype.resetValidations = function () {
        this.idNumberError = false;
        this.passportNumberError = false;
        this.IDNumbervalidError = false;
        this.readyToCallService = false;
        this.passportNumberError = false;
        this.IDNumbervalidError = false;
        this.idNumberPhotoError = false;
        this.passportPhotoError = false;
        this.addressError = false;
        this.passportSelfiPhotoError = false;
        this.selectCountry = false;
        this.selectError = false;
        this.PassportNumberValidError = false;
        this.IDNumbervalidError = false;
        this.dobCheck = false;
    };
    KycComponent.prototype.emptyValues = function () {
        this.idCardNumber = "";
        this.idNumberPhoto = null;
        this.passportNumber = "";
        this.passportNumberPhoto = "";
        this.passMsg = '*Take a picture of your Passport';
        /*    $("#passportPhoto").val('').clone(true);
           */
    };
    KycComponent.prototype.getIdPhoto = function () {
        this.IdCardPhoto.nativeElement.click();
    };
    KycComponent.prototype.getPassportPhoto = function () {
        this.passportPhoto.nativeElement.click();
    };
    KycComponent.prototype.getPassportSelfiPhoto = function () {
        this.selfiPassportPhoto.nativeElement.click();
    };
    KycComponent.prototype.fileChooseChangeID = function (event) {
        if (!event.target.files[0].name.match(/.(jpeg|png|jpg)$/i)) {
            $("#snackbar").html('The selected file format is not supported, Please select a JPEG or PNG file');
            this.myFunction();
        }
        else {
            this.idMsg = event.target.files[0].name;
            this.idNumberPhoto = event.target.files[0];
        }
    };
    KycComponent.prototype.fileChoosePassport = function (event) {
        if (!event.target.files[0].name.match(/.(jpeg|png|jpg)$/i)) {
            $("#snackbar").html('The selected file format is not supported, Please select a JPEG or PNG file');
            this.myFunction();
        }
        else {
            this.passMsg = event.target.files[0].name;
            this.passportNumberPhoto = event.target.files[0];
        }
    };
    KycComponent.prototype.fileChooseSelfiPassport = function (event) {
        if (!event.target.files[0].name.match(/.(jpeg|png|jpg)$/i)) {
            $("#snackbar").html('The selected file format is not supported, Please select a JPEG or PNG file');
            this.myFunction();
        }
        else {
            this.passSelfiMsg = event.target.files[0].name;
            this.passportSelfiPhoto = event.target.files[0];
        }
    };
    KycComponent.prototype.uploadProfile = function () {
        this.resetValidations();
        console.log(this.dob);
        if (this.idCardNumberIf == false && this.passportNumberIf === false) {
            this.selectError = true;
            this.readyToCallService = true;
        }
        if (this.passportNumberIf == true) {
            this.passportOrId = true;
            //assigning passport value to a common variable 
            this.passOrCninValue = this.passportNumber;
            this.passOrCninPhoto = this.passportNumberPhoto;
        }
        else {
            //assigning CNIC value to a common variable 
            this.passOrCninValue = this.idCardNumber;
            this.passOrCninPhoto = this.idNumberPhoto;
        }
        //passport & ID changes on basis of selection
        if (this.passportNumberIf == true) {
            if (this.passportNumber == "" || this.passportNumber == null || this.passportNumber === undefined) {
                this.passportNumberError = true;
                this.readyToCallService = true;
            }
            if (this.passportNumberPhoto == null || this.passportNumberPhoto == "") {
                this.passportPhotoError = true;
                this.readyToCallService = true;
            }
        }
        else {
            if (this.idNumberPhoto == null || this.idNumberPhoto == "") {
                this.idNumberPhotoError = true;
                this.readyToCallService = true;
            }
            if (this.idCardNumber == "" || this.idCardNumber == null || this.idCardNumber === undefined) {
                this.idNumberError = true;
                this.readyToCallService = true;
            }
        }
        if (this.dob == undefined || this.dob == "") {
            this.dobCheck = true;
            this.readyToCallService = true;
        }
        //passport & ID changes on basis of selection
        /*  if (this.address == undefined || this.address == "") {
     
           this.addressError = true;
           this.readyToCallService = true;
         } */
        // if (this.passportSelfiPhoto == null) {
        //   this.passportSelfiPhotoError = true;
        //   this.readyToCallService = true;
        // }
        if (this.countryNumericCode == null || this.countryNumericCode == undefined) {
            this.selectCountry = true;
            this.readyToCallService = true;
        }
        if (this.readyToCallService == false) {
            $(".updateLoader").show();
            $(".updateBtn").hide();
            $.getJSON('https://jsonip.com/?callback=', function (data) {
                this.UserIpAddress = data.ip;
                localStorage.setItem("userIp", this.UserIpAddress);
            });
            this.signedInUser.user.iskycVerified = "2";
            localStorage.setItem('signedInUser', JSON.stringify(this.signedInUser));
            debugger;
            // this._userService.updateProfile(this.passportOrId, this.passOrCninValue, this.signedInUser.user._id, this.passOrCninPhoto, this.passportSelfiPhoto, this.dob, this.countryNumericCode, this.country, localStorage.getItem("userIp")).subscribe(a => {
            //   this.signedInUser.user.iskycVerified = "1";
            //   if (a.code == 200) {
            //     $("#snackbar").html(a.message);
            //     this.myFunction();
            //     $(".updateLoader").hide();
            //     $(".updateBtn").show();
            //     localStorage.setItem('signedInUser', JSON.stringify(this.signedInUser));
            //   }
            // }, err => {
            //   /*  this.loaderShow = false;
            //    this.updateBtn = true; */
            //   $(".updateLoader").hide();
            //   $(".updateBtn").show();
            //   var obj = JSON.parse(err._body)
            //   $("#snackbar").html(obj.message);
            //   this.myFunction();
            // });
        }
    };
    KycComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    KycComponent.prototype.getCountrySelected = function (elem) {
        var _this = this;
        this.countryNumericCode = elem;
        var obj = this.countries.find(function (x) { return x.alpha2Code == _this.countryNumericCode; });
        this.country = obj.name;
    };
    KycComponent.prototype.ngOnInit = function () {
        /*     this.signedInUser = JSON.parse(localStorage.getItem("signedInUser")); */
        //set status servic call
        var _this = this;
        if (this.signedInUser == null || this.signedInUser == undefined) {
        }
        else {
            /*this._userService.getstatus(this.signedInUser.user._id).subscribe(a => {
      
              if (a.code == 200) {
                console.log(a);
      
                this.signedInUser.user = a.message;
                localStorage.setItem('signedInUser', JSON.stringify(this.signedInUser));
      
      
              }
            }, err => {
      
      
              var obj = JSON.parse(err._body)
              $("#snackbar").html(obj.message);
              this.myFunction();
      
      
            });
      */
        }
        //set status servic call
        this._userService.getAllCountries().subscribe(function (a) {
            /*      console.log(a); */
            for (var i = 0; i < a.length; i++) {
                if (a[i].name == "China" || a[i].name == "United States Minor Outlying Islands" || a[i].name == "United States of America") {
                }
                else {
                    _this.countries.push(a[i]);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('IdCardPhoto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], KycComponent.prototype, "IdCardPhoto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passportPhoto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], KycComponent.prototype, "passportPhoto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selfiPassportPhoto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], KycComponent.prototype, "selfiPassportPhoto", void 0);
    KycComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'kyc',
            template: __webpack_require__("../../../../../src/app/theme/kyc/kyc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/kyc/kyc.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_userService__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_userService__["a" /* UserService */]])
    ], KycComponent);
    return KycComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/kyc/kyc.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycModule", function() { return KycModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kyc_component__ = __webpack_require__("../../../../../src/app/theme/kyc/kyc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kyc_routing_module__ = __webpack_require__("../../../../../src/app/theme/kyc/kyc-routing.module.ts");
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









var KycModule = (function () {
    function KycModule() {
    }
    KycModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_3__kyc_routing_module__["a" /* KycRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__kyc_component__["a" /* KycComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__kyc_component__["a" /* KycComponent */]]
        })
    ], KycModule);
    return KycModule;
}());



/***/ })

});
//# sourceMappingURL=kyc.module.chunk.js.map