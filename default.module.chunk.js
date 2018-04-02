webpackJsonp(["default.module"],{

/***/ "../../../../../src/app/theme/dashboard/default/default-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__default_component__["a" /* DefaultComponent */],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var DefaultRoutingModule = (function () {
    function DefaultRoutingModule() {
    }
    DefaultRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], DefaultRoutingModule);
    return DefaultRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nndashboard-div-wrapper\">\n  <!-- //toaster-container -->\n  <div id=\"snackbar\"></div>\n  <div class=\"nn-dashboard-head\">\n    <h3 class=\"nn-main-heading\" style=\"text-align:center\">\n      Your Fuzion Coin Dashboard\n    </h3>\n    <p class=\"spaced-text\">Contribute Today and Get your {{bonus}}% Pre-ico token bonus!</p>\n    <!--   <p class=\"after-heading-text\">\n      If you have any queries feel free to contact\n      <a class=\"nn-que-link\">support@smartstartuptoken.tech</a>\n    </p> -->\n  </div>\n  <div class=\"nn-dashboard-content\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Your Details\n            <!--  <a class=\"leftpanel-link\" style=\"cursor: pointer;\" *ngIf=\"updateBtnStatus == true\" (click)=\"updateKYC()\">Verify your Account</a>\n           -->\n          </div>\n          <div class=\"panel-body\">\n            <p class=\"panelbody-bold-text\">\n              First Name:\n            </p>\n            <p class=\"panelbody-normal-text\">\n              {{signedInUser.user.firstName}}\n            </p>\n            <br>\n            <p class=\"panelbody-bold-text\">\n              Last Name:\n            </p>\n            <p class=\"panelbody-normal-text\">\n              {{signedInUser.user.lastName}}\n            </p>\n            <br>\n            <p class=\"panelbody-bold-text\">\n              KYC Status:\n            </p>\n            <p class=\"panelbody-normal-text\">\n              {{kyc_status}}\n            </p>\n            <br>\n            <p class=\"panelbody-bold-text\">\n              Email:\n            </p>\n            <p class=\"panelbody-normal-text\">\n              {{signedInUser.user.Email}}\n            </p>\n            <br>\n            <p class=\"panelbody-bold-text\">\n              ETH Address:\n            </p>\n            <p class=\"panelbody-normal-text address\">\n              {{signedInUser.user.EthAddress}}\n            </p>\n            <br>\n            <p class=\"panelbody-bold-text\">\n              IFC Balance:\n            </p>\n            <p class=\"panelbody-normal-text address\">\n              {{signedInUser.user.Tokens}}\n            </p>\n            <br>\n            <a class=\"panelbody-bold-text panel-link\" (click)=\"myModal.open()\">\n              Change Password\n            </a>\n            <a class=\"panelbody-bold-text panel-link contactbtn\" (click)=\"myModal2.open();getDetail()\">\n              Update Profile\n            </a>\n\n\n            <modal #myModal (onClose)=\"clearPasswords()\">\n              <modal-header>\n                <h1 style=\"text-align:center;\">Change Password</h1>\n\n              </modal-header>\n\n\n              <modal-content class=\"nn-modal\">\n                <div class=\"modal-input-wrap\">\n                  <div class=\"input-group\">\n                    <input type=\"password\" [(ngModel)]=\"oldPassword\" class=\"form-control modal-input\" placeholder=\" Old Password\">\n\n                  </div>\n                  <p class=\"errorClass\" *ngIf=\"oldPasswordError\">Please enter Old-Password</p>\n                  <div class=\"input-group\">\n                    <input type=\"password\" [(ngModel)]=\"newPassword\" class=\"form-control modal-input\" placeholder=\"New Password\">\n\n                  </div>\n                  <p class=\"errorClass\" *ngIf=\"newPasswordError\">Please enter new-Password</p>\n                  <div class=\"input-group\">\n                    <input type=\"password\" [(ngModel)]=\"reNewPassword\" class=\"form-control modal-input\" placeholder=\"Re-type  Password\">\n                    <!-- <p class=\"errorClass\" *ngIf=\"reNewPasswordError\">Please Re-enter new-Password</p> -->\n\n\n                  </div>\n                  <p class=\"errorClass\" *ngIf=\"passwordMatchError\">Password does not match</p>\n                  <button (click)=\"changePassword()\" class=\"signup-btn updateBtn\">UPDATE</button>\n                  <div class=\"updateLoader\">\n                    <i class=\"fas fa-spinner fa-spin fa-3x\"></i>\n                  </div>\n                </div>\n\n              </modal-content>\n              <modal-footer>\n\n                <button class=\"btn btn-primary\" (click)=\"myModal.close()\">close</button>\n              </modal-footer>\n            </modal>\n\n\n            <modal #myModal1 (onClose)=\"clearPasswords()\">\n              <modal-header>\n                <h1 style=\"text-align:center;\">Contact Us</h1>\n\n              </modal-header>\n\n\n              <modal-content class=\"nn-modal\">\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-body\">\n                    <p class=\"panelbody-normal-text\">\n                      <input class=\"subject\" type=\"text\" placeholder=\"Subject\" [(ngModel)]=\"Subject\">\n                    </p>\n\n\n                    <p class=\"panelbody-normal-text\">\n                      <textarea class=\"msg\" rows=\"5\" placeholder=\"Message\" [(ngModel)]=\"Message\"></textarea>\n                    </p>\n\n                    <p class=\"panelbody-bold-text\">\n                      <button (click)=\"contact()\" class=\"send-btn\">Send</button>\n                    </p>\n                    <div class=\"updateLoader\">\n                      <i class=\"fas fa-spinner fa-spin fa-3x\"></i>\n                    </div>\n\n\n                    <modal-footer>\n\n                      <button class=\"btn btn-primary\" (click)=\"myModal1.close()\">close</button>\n                    </modal-footer>\n                  </div>\n                </div>\n\n              </modal-content>\n\n            </modal>\n\n\n            <modal #myModal2 (onClose)=\"unsetErrors()\">\n              <modal-header>\n                <h1 style=\"text-align:center;\">Update Profile</h1>\n              </modal-header>\n              <modal-content class=\"nn-modal\">\n                <div class=\"modal-input-wrap\">\n\n                  <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                    <label for=\"fname\" class=\"nn-label\">First Name</label>\n                    <input [(ngModel)]=\"firstName\" pattern=\"[a-zA-Z]\" type=\"fname\" class=\"form-control modal-input\" id=\"fname\">\n                    <p class=\"errorClass\" *ngIf=\"fnameError\">Please enter First Name</p>\n                  </div>\n                  <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                    <label for=\"lname\" class=\"nn-label\">Last Name</label>\n                    <input [(ngModel)]=\"lastName\" pattern=\"[a-zA-Z]\" type=\"lname\" class=\"form-control modal-input\" id=\"lname\">\n                    <p class=\"errorClass\" *ngIf=\"lnameError\">Please enter Last Name</p>\n                  </div>\n                  <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                    <label for=\"fname\" class=\"nn-label\">KYC Status</label>\n                    <input type=\"text\" class=\"form-control modal-input\" [(ngModel)]=\"kyc_status\" readonly=\"readonly\" placeholder=\"KYC Status\">\n\n                  </div>\n\n                  <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                    <label for=\"fname\" class=\"nn-label\">Email</label>\n                    <input type=\"email\" class=\"form-control modal-input\" [(ngModel)]=\"signedInUser.user.Email\" readonly=\"readonly\" placeholder=\"Email\">\n                    <!-- <p class=\"errorClass\" *ngIf=\"reNewPasswordError\">Please Re-enter new-Password</p> -->\n                  </div>\n\n\n                  <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                    <label for=\"fname\" class=\"nn-label\">ETH Address</label>\n                    <input type=\"text\" [(ngModel)]=\"EthAddress\" class=\"form-control modal-input\" placeholder=\"ETH Address\">\n                    <!-- <p class=\"errorClass\" *ngIf=\"reNewPasswordError\">Please Re-enter new-Password</p> -->\n                  </div>\n                  <p class=\"errorClass\" *ngIf=\"ethError\">Please enter ETH Address</p>\n\n                  <div class=\"form-group\" style=\"font-size:15px; text-align:left; \">\n                    <label for=\"fname\" class=\"nn-label\">Tokens</label>\n                    <input type=\"number\" [(ngModel)]=\"signedInUser.user.Tokens\" class=\"form-control modal-input\" readonly=\"readonly\" placeholder=\"Fuzion Balance\">\n                    <!-- <p class=\"errorClass\" *ngIf=\"reNewPasswordError\">Please Re-enter new-Password</p> -->\n\n\n                  </div>\n\n                  <button (click)=\"updateProfileuser(signedInUser)\" class=\"signup-btn updateBtn\">UPDATE</button>\n                  <div class=\"updateLoader\">\n                    <i class=\"fas fa-spinner fa-spin fa-3x\"></i>\n                  </div>\n                </div>\n\n              </modal-content>\n              <modal-footer>\n\n                <button class=\"btn btn-primary\" (click)=\"myModal2.close()\">close</button>\n              </modal-footer>\n            </modal>\n\n\n\n\n\n\n          </div>\n        </div>\n\n        <div class=\"rate-div-wrap\">\n          <h4 class=\"rate-head\">Current Fuzion Exchange Rate\n            <span class=\"smrtprice\"> 1 IFC = ${{oneBnz}}</span>\n          </h4>\n          <ul class=\"rate-ul\">\n            <li class=\"rate-li\">BTC-{{bnz_to_btc}}</li>\n            <li class=\"rate-li\">ETH-{{bnz_to_eth}}</li>\n            <li class=\"rate-li\">LTC-{{bnz_to_ltc}}</li>\n            <li class=\"rate-li lastlist\">BCH-{{bnz_to_bch}}</li>\n          </ul>\n          <small class=\"smallparagraph\">Based on data from {{api_name}} as of {{api_date}} {{api_time}}</small>\n        </div>\n\n        <p class=\"panelbody-bold-text\">\n          <button class=\"updateProfile2\" target=\"blank\">How to Contribute</button>\n        </p>\n        <p class=\"panelbody-bold-text\">\n          <button class=\"updateProfile\" style=\"cursor: pointer;\" (click)=\"myModal1.open()\">Contact Us</button>\n        </p>\n\n\n      </div>\n\n      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n\n\n        <!-- Calculator-->\n\n\n\n        <div class=\"container-fluid\">\n          <div class=\"padd-left-buy\">\n            <div class=\"row\">\n\n              <div class=\"col-md-12 col-sm-12 col-xs-12 no-padding\">\n\n\n\n                <div class=\"calc-div-wrap clearfix\">\n                  <h4 class=\"calc-head\">Fuzion Calculator -\n                    <span class=\"priceheading\"> Select your payment method to calculate how many IFC you will receive:</span>\n                  </h4>\n\n                  <div class=\"two-portions-wrap\">\n                    <div class=\"portion-left\">\n                      \n                    </div>\n                    <div class=\"portion-right\">\n                      <ul class=\"payment-ul\">\n                        <li class=\"payment-li active\" id=\"btc-li\" (click)=\"changeTypeOfCoin('BTC')\">\n                          <img src=\"assets/images/icon1.png\">BTC</li>\n                        <li id=\"eth-li\" class=\"payment-li\" (click)=\"changeTypeOfCoin('ETH')\">\n                          <img src=\"assets/images/icon2.png\">ETH</li>\n                        <li id=\"ltc-li\" class=\"payment-li\" (click)=\"changeTypeOfCoin('LTC')\">\n                          <img src=\"assets/images/icon3.png\">LTC</li>\n                        <li id=\"bch-li\" class=\"payment-li\" (click)=\"changeTypeOfCoin('BCH')\">\n                          <img src=\"assets/images/icon4.png\">BCH</li>\n                        <li id=\"usd-li\" class=\"payment-li\" (click)=\"changeTypeOfCoin('USD')\">\n                          <img style=\"width:30px\" src=\"assets/images/icon5.png\">USD</li>\n\n                      </ul>\n                    </div>\n\n\n\n\n\n\n\n\n                  </div>\n\n                </div>\n                <div class=\"textdiv\">\n                  <ul class=\"ultextbox \">\n                    <li class=\"textbox list1\">\n                      <div class=\"first-box\">\n                        <input class=\"red-input-box\" min=\"0\" (change)=\"calculate_now()\" (keyup)=\"calculate_now()\" id=\"val_input\" maxlength=\"14\" value=\"1\"\n                          type=\"number\">\n                        <span class=\"abslut-span\">\n                          <span id=\"left-currency\">BTC</span>\n                        </span>\n                      </div>\n                    </li>\n                    <li class=\"textbox list2\">\n                      <div class=\"first-box equal-sign\">\n                        <span class=\"eq-sign-style\">=</span>\n                      </div>\n                    </li>\n                    <li class=\"textbox list3\">\n                      <div class=\"first-box\">\n                        <input class=\"red-input-box\" min=\"0\" (change)=\"calculate_reverse()\" (keyup)=\"calculate_reverse()\" id=\"bnz_value\" value=\"0\"\n                          type=\"number\">\n                        <span class=\"abslut-span\">\n                          <span id=\"left-currency-2\">IFC</span>\n                        </span>\n                      </div>\n                    </li>\n                  </ul>\n                  <!-- <p class=\"priceheading\" style=\"padding-left: 20px;padding-top: 12px;\">Bonus {{bonus}}% : {{helped}}</p> -->\n                  <p class=\"smallp_tag\">Please note your rate may vary slightly based on when the transaction is confirmed.</p>\n                </div>\n                <hr class=\"borders\">\n                <!-- <div class=\"borders\">\n                          </div> -->\n                <p class=\"p_tag\" *ngIf=\"signedInUser?.user.iskycVerified=='1'||signedInUser?.user.iskycVerified=='0'  \">Please send your funds using your preferred currency to the corresponding address.</p>\n\n\n\n                <!--       <div class=\"price-div-wrap clearfix\">\n                  <p class=\"price-p\">Regular Price\n                    <span class=\"no-span\">{{EnteredValue}}</span>\n                  </p>\n                  <hr class=\"cust-hr2\">\n                  <p class=\"price-p\">Discount Price\n                    <span class=\"no-span\">0.000</span>\n                  </p>\n\n                </div> -->\n\n\n\n              </div>\n\n\n              <!--end col1-->\n\n              <!-- <div class=\"col-md-4 col-sm-12 col-xs-12\">\n                        <div class=\"qr-code-wrap\">\n                            <div style=\"text-align: center;margin:20px 0;margin-right:30px;\">\n                               <qr-code [value]=\"rec_address\" [size]=\"150\"></qr-code> \n                            </div>\n        \n        \n                            <label class=\"btc-lbl\">{{coinSelectionForBuy}} Address</label>\n                            <div class=\"input-copy\">\n                                <input id=\"foo\" type=\"text\" [(ngModel)]=\"rec_address\" class=\"red-box2\">\n                                <button class=\"copy-btn\" data-clipboard-target=\"#foo\">Copy</button>\n                            </div>\n                            <label class=\"btc-lbl hexa_data\">Hexa Data</label>\n                            <div class=\"input-copy hexa_data\">\n                                <input id=\"bar\" type=\"text\" [(ngModel)]=\"hexa_data\" class=\"red-box2\">\n                                <button class=\"copy-btn\" data-clipboard-target=\"#bar\">Copy</button>\n                            </div>\n                        </div>\n                    </div> -->\n            </div>\n            <!--end row-->\n          </div>\n        </div>\n\n\n\n        <!-- Calculator -->\n\n        <div class=\"panel panel-default\" *ngIf=\"signedInUser?.user.iskycVerified=='2'\">\n          <div class=\"panel-heading\">\n            <img class=\"headingicon\" src=\"assets/images/icon1.png\">Token Sale BTC Address</div>\n          <div class=\"panel-body\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control nn-control\" id=\"BTCAddress\" readonly value=\"{{signedInUser.user.BTCWalletRecieverAddress}}\"\n                placeholder=\"\" aria-describedby=\"basic-addon1\">\n              <span class=\"input-group-addon nn-control-btn\" data-clipboard-target=\"#BTCAddress\" id=\"basic-addon1\">COPY</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\" *ngIf=\"signedInUser?.user.iskycVerified=='2'\">\n          <div class=\"panel-heading\">\n            <img class=\"headingicon\" src=\"assets/images/icon3.png\">Token Sale LTC Address</div>\n          <div class=\"panel-body\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control nn-control\" id=\"LTCAddress\" readonly value=\"{{signedInUser.user.LTCWalletRecieverAddress}}\"\n                placeholder=\"\" aria-describedby=\"basic-addon1\">\n              <span class=\"input-group-addon nn-control-btn\" data-clipboard-target=\"#LTCAddress\" id=\"basic-addon1\">COPY</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\" *ngIf=\"signedInUser?.user.iskycVerified=='2'\">\n          <div class=\"panel-heading\">\n            <img class=\"headingicon\" src=\"assets/images/icon2.png\">Token Sale ETH</div>\n          <div class=\"panel-body\">\n            <label class=\"nn-last-lbl\">Ethereum Address</label>\n            <div class=\"input-group\">\n\n              <input type=\"text\" class=\"form-control nn-control\" id=\"ETHAddress\" readonly value=\"{{signedInUser.user.ETHWalletFundRecieverAddress}}\"\n                placeholder=\"\" aria-describedby=\"basic-addon1\">\n              <span class=\"input-group-addon nn-control-btn\" data-clipboard-target=\"#ETHAddress\" id=\"basic-addon1\">COPY</span>\n            </div>\n            <label class=\"nn-last-lbl\">Hexa Data</label>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control nn-control\" id=\"HexaData\" readonly value=\"{{signedInUser.user.ETHWalleRecieverData}}\"\n                placeholder=\"\" aria-describedby=\"basic-addon1\">\n              <span class=\"input-group-addon nn-control-btn\" data-clipboard-target=\"#HexaData\" id=\"basic-addon1\">COPY</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"panel panel-default\" *ngIf=\"signedInUser?.user.iskycVerified=='2'\">\n          <div class=\"panel-heading\">\n            <img class=\"headingicon\" src=\"assets/images/icon4.png\">Token Sale BCH Address</div>\n          <div class=\"panel-body\">\n            <label class=\"nn-last-lbl\" style=\"color:red;font-size:12px\">Please note this is Bitcoin Cash and do not send Bitcoin funds to this address.</label>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control nn-control\" id=\"BCHAddress\" placeholder=\"\" readonly value=\"  {{signedInUser.user.BCHWalletRecieverAddress}}\"\n                aria-describedby=\"basic-addon1\">\n              <span class=\"input-group-addon nn-control-btn\" data-clipboard-target=\"#BCHAddress\" id=\"basic-addon1\">COPY</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"submission\" *ngIf=\"signedInUser?.user.iskycVerified=='1'||signedInUser?.user.iskycVerified=='0'  \">\n          <div class=\"padded-inside\">\n            <h1 class=\"red-text\">\n              <a class=\"red-text\" (click)=\"routeToKyc()\">Click here to verify your account.</a>\n            </h1>\n            <p class=\"lil-large\">\n              All accounts require verification in order to make contributions as part of our KYC screening. This information is required\n              for third-party verification, which checks a database to make sure you're not a terrorist and deters against\n              illicit activity. We do not store this information on our servers.\n            </p>\n            <p class=\"lil-small\">\n              In some rare cases account verification can take up to 2 hours. If you have already submitted your details and still see\n              this message feel free to\n              <a class=\"nn-que-link\">contact</a> us .\n            </p>\n          </div>\n        </div>\n        <div *ngIf=\"signedInUser?.user.iskycVerified=='2'\">\n          <ul class=\"nn-dashboard-ul\">\n            <li class=\"nn-dashboard-li\">\n              <p class=\"li-bold-text\">\n                {{bch_amount.toFixed(6)}}\n              </p>\n              <p class=\"li-normal-text\">\n                BCH Received\n              </p>\n            </li>\n            <li class=\"nn-dashboard-li\">\n              <p class=\"li-bold-text\">\n                {{ltc_amount.toFixed(6)}}\n              </p>\n              <p class=\"li-normal-text\">\n                LTC Received\n              </p>\n            </li>\n            <li class=\"nn-dashboard-li\">\n              <p class=\"li-bold-text\">\n                {{btc_amount.toFixed(6)}}\n              </p>\n              <p class=\"li-normal-text\">\n                BTC Received\n              </p>\n            </li>\n            <li class=\"nn-dashboard-li\">\n              <p class=\"li-bold-text\">\n                {{eth_amount.toFixed(6)}}\n              </p>\n              <p class=\"li-normal-text\">\n                ETH Received\n              </p>\n            </li>\n            <li class=\"nn-dashboard-li\">\n              <p class=\"li-bold-text\">\n                {{smrt_amount.toFixed(6)}}\n              </p>\n              <p class=\"li-normal-text\">\n                IFC Purchased\n              </p>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- \n<button #verificationBtn id=\"openVerificationModal\" style=\"display:none;\" (click)=\"verificationModal.open()\">open my modal</button>\n<button #closeBtn id=\"openVerificationModal\" style=\"display:none;\" (click)=\"verificationModal.close()\">close my modal</button>\n<modal [hideCloseButton]=\"false\" [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\" #verificationModal\n  cancelButtonLabel=\"cancel\" submitButtonLabel=\"submit\" modalClass=\"modal-lg modal-sm verificationModal\">\n\n\n\n  <modal-content>\n    <div class=\"verificationForm\">\n      <h1 class=\"heading-verification\">\n        Profile Verification\n      </h1>\n\n      <div class=\"fields\">\n\n        <div class=\"form-group\">\n\n          <input [(ngModel)]=\"idCardNumber\" placeholder=\"Identity Card Number\" name=\"idCardNumber\" type=\"text\" class=\"form-control verification-fields\"\n            id=\"idCardNumber\">\n          <p class=\"errorClass\" *ngIf=\"idCardNumberError\">Invalid Id Card Number</p>\n          <p *ngIf=\"idNumberError\" class=\"errorClass\">ID Number is required</p>\n          <p *ngIf=\"IDNumbervalidError\" class=\"errorClass\">ID Number not valid</p>\n        </div>\n        <div class=\"form-group\">\n\n          <input [(ngModel)]=\"passportNumber\" placeholder=\"Passport Number\" name=\"passportNumber\" type=\"text\" class=\"form-control verification-fields\"\n            id=\"passportNumber\">\n          <p *ngIf=\"PassportNumberValidError\" class=\"errorClass\">Passport Number not valid</p>\n          <p *ngIf=\"passportNumberError\" class=\"errorClass\">Passport Number is required</p>\n        </div>\n        <div class=\"form-group centered-buttons clearfix\">\n          <div class=\"left-name\">\n            <p class=\"blue-left\">{{idMsg}}</p>\n          </div>\n          <input #IdCardPhoto type=\"file\" style=\"display:none\" (change)=fileChooseChangeID($event)>\n          <div (click)=\"getIdPhoto()\" class=\"right-iamge\">\n            <img src=\"assets/img/cam.png\">\n          </div>\n          <p *ngIf=\"idNumberPhotoError\" class=\"errorClass\">Image is required</p>\n        </div>\n\n\n        <div class=\"form-group centered-buttons clearfix\">\n          <div class=\"left-name\">\n            <p class=\"blue-left\">{{passMsg}}</p>\n          </div>\n          <input #passportPhoto type=\"file\" style=\"display:none\" (change)=fileChoosePassport($event)>\n          <div (click)=\"getPassportPhoto()\" class=\"right-iamge\">\n            <img src=\"assets/img/cam.png\">\n          </div>\n          <p *ngIf=\"passportPhotoError\" class=\"errorClass\">Image is required</p>\n        </div>\n\n\n        <div class=\"form-group centered-buttons clearfix\">\n          <div class=\"left-name\">\n            <p class=\"blue-left\">{{passSelfiMsg}}</p>\n          </div>\n          <input #selfiPassportPhoto type=\"file\" style=\"display:none\" (change)=fileChooseSelfiPassport($event)>\n          <div (click)=\"getPassportSelfiPhoto()\" class=\"right-iamge\">\n            <img src=\"assets/img/cam.png\">\n          </div>\n          <p *ngIf=\"passportSelfiPhotoError\" class=\"errorClass\">Image is required</p>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"round\" style=\"text-align:center;    margin-bottom: 35px;\">\n      </div>\n    <div *ngIf=\"loaderShow\" class=\"loginLoader\">\n      <i class=\"fas fa-spinner fa-3x fa-spin\"></i>\n    </div>\n    <div class=\"verificationForm\">\n      <button *ngIf=\"updateBtn\" class=\"update-profile\" (click)=\"uploadProfile()\">Update Profile</button>\n    </div>\n\n    <div class=\"verificationForm\">\n      <p class=\"come-back\" (click)=\"verificationModal.close()\">I will come back later</p>\n    </div>\n  </modal-content>\n\n\n\n</modal> -->"

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subject {\n  width: 100%;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: 5px;\n  border: 1px solid #d7d7d7; }\n\n.subject::-webkit-input-placeholder {\n  color: #d7d7d7; }\n\n.subject:-ms-input-placeholder {\n  color: #d7d7d7; }\n\n.subject::placeholder {\n  color: #d7d7d7; }\n\n.msg {\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n  border: 1px solid #d7d7d7;\n  margin-bottom: 10px; }\n\n.send-btn {\n  background-color: #23338f;\n  color: white;\n  text-align: center;\n  width: 100%;\n  padding: 10px 0px;\n  border: none; }\n\n.msg::-webkit-input-placeholder {\n  color: #d7d7d7; }\n\n.msg:-ms-input-placeholder {\n  color: #d7d7d7; }\n\n.msg::placeholder {\n  color: #d7d7d7; }\n\n.nndashboard-div-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px; }\n\n.modal-input {\n  background-color: white;\n  border: 1px solid #23338f;\n  border-left: 1px solid #23338f !important;\n  border-right: 1px solid #23338f !important;\n  border-radius: 20px !important; }\n\n.modal-input-wrap {\n  text-align: center;\n  width: 60%;\n  margin: 0 auto; }\n\n.nn-main-heading {\n  color: black;\n  font-family: 'Zwizz-Regular';\n  text-align: center; }\n\n.nn-last-lbl {\n  font-size: 12px; }\n\n.panel-heading {\n  font-size: 13px !important; }\n\n.updateLoader {\n  display: none;\n  margin: 20px auto;\n  width: 50px; }\n\n.contactbtn {\n  position: relative;\n  float: right; }\n\n.updateProfile2 {\n  background-color: red;\n  color: white;\n  text-align: center;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  border: none;\n  padding: 10px 0px; }\n\n.updateProfile {\n  background-color: #23338f;\n  color: white;\n  text-align: center;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  border: none;\n  padding: 10px 0px; }\n\n.navbar .navbar-nav > li > a.btn-primary, .btn-primary {\n  background-color: #f6c801 !important;\n  border: none !important;\n  color: black !important;\n  font-family: 'Zwizz-Bold' !important;\n  position: relative;\n  float: right;\n  margin-top: 14px; }\n\n.signup-btn {\n  background-color: #f6c801;\n  top: 555px;\n  width: 159px;\n  height: 35px;\n  border: none;\n  color: black;\n  font-family: 'Zwizz-Bold';\n  border-radius: 20px !important;\n  font-size: 15px; }\n\n#basic-addon1 {\n  cursor: pointer; }\n\n.after-heading-text {\n  color: black;\n  font-family: 'Zwizz-Regular';\n  text-align: center;\n  font-size: 12px; }\n\n.nn-que-link {\n  color: #4d93e9;\n  font-family: 'Zwizz-Regular'; }\n\n.nn-dashboard-head {\n  margin-bottom: 40px; }\n\n.leftpanel-link {\n  color: #4d93e9;\n  position: absolute;\n  right: 22px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-family: 'Zwizz-Regular'; }\n\n.panelbody-bold-text {\n  font-family: 'Zwizz-Regular';\n  font-size: 12px;\n  font-weight: 900;\n  margin: 0;\n  cursor: pointer; }\n\n.panelbody-normal-text {\n  font-family: 'Zwizz-Regular';\n  font-size: 12px; }\n\n.nn-control {\n  background-color: white !important;\n  border: 1px solid #eeeeee; }\n\n.modal-header .close {\n  display: none; }\n\n.panel-link {\n  color: #23338f  !important; }\n\n.modal-content {\n  margin-top: 200px !important; }\n\n.nn-control-btn {\n  background-color: #23338f !important;\n  color: white;\n  padding: 8px 64px;\n  width: 27%;\n  margin: 0 auto;\n  font-size: 15px;\n  width: 165px;\n  text-align: left; }\n\n.loginLoader {\n  text-align: center; }\n\n.nn-dashboard-ul {\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  /* Default */\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  background: #fff;\n  margin: 0;\n  padding: 0; }\n\n.errorClass {\n  padding-bottom: 15px;\n  text-align: right;\n  font-size: 11px;\n  color: red;\n  float: right;\n  margin-bottom: 10px; }\n\n.nn-dashboard-li {\n  display: block;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  /* Default */\n  list-style-type: none;\n  text-align: center;\n  padding: 15px; }\n\n.address {\n  width: 190px;\n  overflow: hidden; }\n\n.li-bold-text {\n  font-family: 'Zwizz-Regular';\n  font-size: 15px;\n  font-weight: 900;\n  text-overflow: ellipsis; }\n\n.li-normal-text {\n  font-family: 'Zwizz-Regular';\n  font-size: 15px; }\n\n.nn-dashboard-li:hover {\n  background-color: #d7d7d7; }\n\n.verificationModal .modal-content {\n  border-radius: 20px; }\n\n.verificationModal .modal-header, .verificationModal .modal-footer {\n  display: none; }\n\n.verificationModal .modal-content {\n  margin-top: 250px !important; }\n\n.verificationModal .modal-open .modal {\n  background: #00002d; }\n\n.heading-verification {\n  color: black !important;\n  font-family: 'Zwizz-Bold';\n  font-size: 22px;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.come-back {\n  text-align: center;\n  font-family: \"Zwizz-Regular\";\n  line-height: 1.2;\n  font-size: 13px;\n  color: #23338f;\n  margin-top: 20px;\n  margin-bottom: 0;\n  cursor: pointer; }\n\n.verification-fields {\n  border: none;\n  border-bottom: 1px solid #d2d2d2;\n  width: 100%;\n  border-radius: 0;\n  color: #787878; }\n\n.left-name {\n  position: relative;\n  float: left;\n  width: 200px;\n  overflow: hidden; }\n\n.right-iamge {\n  position: relative;\n  float: left;\n  width: 120px;\n  margin-bottom: 10px; }\n\n.blue-left {\n  font-size: 13px;\n  font-family: 'Zwizz-Regular';\n  color: #23338f;\n  line-height: 1.2;\n  padding-top: 10px; }\n\n.verificationForm {\n  width: 40%;\n  margin: 0 auto; }\n\n.centered-buttons {\n  text-align: center;\n  width: 320PX;\n  margin: 30px auto; }\n\n.black {\n  font-size: 13px;\n  font-family: 'Zwizz-Regular';\n  color: black; }\n\n.terms-text {\n  color: #23338f; }\n\n.update-profile {\n  font-size: 15px;\n  border-width: 1px;\n  border-color: #23338f;\n  border-style: solid;\n  height: 35px;\n  width: 100%;\n  border-radius: 20px;\n  color: black;\n  transition: all 0.4s; }\n\n.update-profile:hover {\n  color: #fff;\n  background: #23338f;\n  border: 1px solid white; }\n\n/*Calculator*/\n/* .padd-left-buy{\r\n  min-height: 500px;\r\n} */\n.equal-sign {\n  width: 12px !important;\n  margin: 0 auto !important; }\n\n.buy-token-wrap {\n  background-color: #cd4c4c;\n  margin-top: -20px; }\n\n.container-cust {\n  width: 1398px; }\n\n.cust-hr1 {\n  width: 90%;\n  margin: 0 auto;\n  color: white !important; }\n\n.hexa_data {\n  display: none; }\n\n.buy-token-head {\n  font-family: 'Zwizz-Bold';\n  color: white;\n  padding-top: 10px; }\n\n.buy-token-p {\n  font-family: 'Zwizz-Regular';\n  color: white;\n  font-size: 18px;\n  padding-bottom: 20px; }\n\n.rate-div-wrap {\n  background-color: white;\n  margin-top: 30px;\n  padding-bottom: 13px;\n  box-shadow: 0 5px 2px -2px lightgray; }\n\n.borders {\n  background-color: #151616; }\n\n/* .borders {\r\n  background-color: rgb(21, 22, 22);\r\n  left: 849px;\r\n  top: 329px;\r\n  width: 895px;\r\n  height: 1px;\r\n  z-index: 63;\r\n} */\n.smallp_tag {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 20px;\n  font-size: 11px;\n  color: #3f3f40; }\n\n.p_tag {\n  color: #2e2e2f;\n  font-size: 14px;\n  padding-top: 12px;\n  font-weight: 900; }\n\n.list1 {\n  width: 45%; }\n\n.list2 {\n  width: 5%; }\n\n.list3 {\n  width: 45%; }\n\n.calc-div-wrap {\n  background-color: #efefef;\n  padding-bottom: 20px;\n  margin-bottom: -30px;\n  box-shadow: 0 5px 2px -2px lightgray; }\n\n.red-text {\n  cursor: pointer !important;\n  font-size: 24px;\n  color: red;\n  text-decoration: underline;\n  line-height: 1.2;\n  text-align: left;\n  margin-bottom: 30px; }\n\n.lil-large {\n  margin: 15px 0;\n  font-size: 16px;\n  color: black;\n  text-decoration: none;\n  line-height: 1.2;\n  text-align: left; }\n\n.submission {\n  background: white;\n  padding: 20px; }\n\n.lil-large {\n  margin: 0 0 15px 0;\n  font-size: 16px;\n  color: black;\n  text-decoration: none;\n  line-height: 1.2;\n  text-align: left; }\n\n.lastlist {\n  border-right: none !important; }\n\n.priceheading {\n  font-size: 11px;\n  font-weight: 100; }\n\n.smallparagraph {\n  padding-left: 23px;\n  font-family: 'Zwizz-Regular';\n  font-size: 9px; }\n\n.smrtprice {\n  float: right;\n  position: relative;\n  padding-right: 16px; }\n\n.rate-head {\n  font-family: 'Zwizz-Regular';\n  padding-top: 15px;\n  padding-left: 20px;\n  padding-bottom: 10px;\n  font-size: 11px; }\n\n.calc-head {\n  font-family: 'Zwizz-Regular';\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-bottom: 5px; }\n\n.rate-ul {\n  list-style-type: none;\n  padding-left: 22px !important;\n  padding-bottom: 10px; }\n\n.rate-li {\n  font-family: 'Zwizz-Regular';\n  display: inline-block;\n  border-right: 1px solid black;\n  padding-right: 6px;\n  margin-right: 5px;\n  font-size: 9px;\n  font-weight: 600; }\n\n.last-li-child-border {\n  border-right: none;\n  padding-right: 0px;\n  margin-right: 0px; }\n\n.two-portions-wrap {\n  position: relative; }\n\n.portion-left {\n  float: left;\n  width: 40%; }\n\n.portion-right {\n  float: left;\n  width: 80%; }\n\n.payment-p {\n  font-family: 'Zwizz-Regular';\n  padding-left: 20px; }\n\n.payment-ul {\n  list-style-type: none;\n  padding-left: 22px !important; }\n\n.ultextbox .textbox {\n  display: inline-block;\n  padding-left: 20px; }\n\n.spaced-text {\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  margin: 15px; }\n\n.payment-li img {\n  padding-right: 5px; }\n\n.calc-boxes-wrap .first-box1 {\n  display: inline-block; }\n\n.headingicon {\n  padding-right: 5px; }\n\n.payment-li.active {\n  background-color: #ffde17; }\n\n.textdiv {\n  background-color: #efefef;\n  margin-top: 30px;\n  box-shadow: 0 5px 2px -2px lightgrey; }\n\n.no-padding {\n  padding: 0; }\n\n.payment-li {\n  height: 38px;\n  font-family: 'Zwizz-Regular';\n  font-size: 15px;\n  cursor: pointer;\n  background-color: #cccccc;\n  font-weight: 600;\n  padding: 9px;\n  padding-top: 7px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.calc-boxes-wrap {\n  position: relative;\n  width: 65%;\n  margin-top: 30px; }\n\n.first-box {\n  position: relative; }\n\n#left-currency {\n  font-size: 16px; }\n\n#left-currency-2 {\n  font-size: 16px; }\n\n.abslut-span {\n  position: absolute;\n  right: 30px;\n  top: 7px;\n  background: white; }\n\n.red-input-box {\n  width: 100%;\n  padding: 7px;\n  border: 1px solid #23338f;\n  text-align: center;\n  font-size: 14px; }\n\n.eq-sign-style {\n  color: #23338f;\n  font-size: 20px; }\n\n.price-div-wrap {\n  background-color: #efefef;\n  margin-top: 30px;\n  box-shadow: 0 5px 2px -2px lightgray;\n  padding: 10px 20px;\n  padding-bottom: 3px; }\n\n.price-p {\n  text-align: left; }\n\n.no-span {\n  float: right; }\n\n.cust-hr2 {\n  width: 100%;\n  margin: 10px auto;\n  border-top: 1px solid black !important; }\n\n.buy-btn1 {\n  margin-top: 30px;\n  width: 557px;\n  background-color: #23338f;\n  padding: 10px;\n  padding-left: 100px;\n  padding-right: 100px;\n  border: none;\n  color: white;\n  text-align: center;\n  font-family: 'Zwizz-Bold';\n  margin-bottom: 30px;\n  transition: all 0.6s; }\n\n.buy-btn1:hover {\n  color: #23338f;\n  border: 1px solid #23338f;\n  background: transparent; }\n\n.red-box2 {\n  border: 1px solid #23338f;\n  float: left;\n  padding: 5px;\n  padding-right: 15px;\n  color: black; }\n\n.btc-lbl {\n  font-family: 'Zwizz-Regular';\n  font-weight: 400;\n  font-size: 14px; }\n\n.input-copy {\n  position: relative; }\n\n.copy-btn {\n  background-color: #23338f;\n  margin-left: -10px;\n  border: none;\n  padding: 6.2px;\n  text-align: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: white;\n  font-family: 'Zwizz-Regular'; }\n\n.qr-code-wrap {\n  margin-top: 225px; }\n\n@media (min-width: 319px) and (max-width: 360px) {\n  .padd-left-buy[_ngcontent-c2] {\n    padding-left: 5px; }\n  .rate-li[_ngcontent-c2] {\n    border-right: none; }\n  .rate-div-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .calc-div-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .portion-left[_ngcontent-c2] {\n    width: 100%; }\n  .portion-right[_ngcontent-c2] {\n    width: 100%; }\n  .calc-boxes-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .red-input-box[_ngcontent-c2] {\n    width: 100%; }\n  .first-box[_ngcontent-c2] {\n    text-align: center;\n    display: block; }\n  .buy-btn1[_ngcontent-c2] {\n    width: 97%;\n    padding-left: 60px;\n    padding-right: 60px; }\n  .red-box2[_ngcontent-c2] {\n    width: 82%; }\n  .input-copy[_ngcontent-c2] {\n    margin-bottom: 20px; } }\n\n@media (min-width: 361px) and (max-width: 767px) {\n  .qr-code-wrap {\n    margin-top: 100px; }\n  .padd-left-buy[_ngcontent-c2] {\n    padding-left: 5px; }\n  .rate-li[_ngcontent-c2] {\n    border-right: none; }\n  .rate-div-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .calc-div-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .portion-left[_ngcontent-c2] {\n    width: 100%; }\n  .portion-right[_ngcontent-c2] {\n    width: 100%; }\n  .calc-boxes-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .red-input-box[_ngcontent-c2] {\n    width: 100%; }\n  .first-box[_ngcontent-c2] {\n    text-align: center;\n    display: block; }\n  .buy-btn1[_ngcontent-c2] {\n    width: 97%;\n    padding-left: 60px;\n    padding-right: 60px; }\n  .red-box2[_ngcontent-c2] {\n    width: 85%; }\n  .input-copy[_ngcontent-c2] {\n    margin-bottom: 20px; }\n  .abslut-span[_ngcontent-c2] {\n    left: 170px; } }\n\n@media (min-width: 641px) and (max-width: 767px) {\n  .abslut-span[_ngcontent-c2][_ngcontent-c2] {\n    left: 320px; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .padd-left-buy[_ngcontent-c2] {\n    padding-left: 25px; }\n  .rate-li[_ngcontent-c2] {\n    padding-right: 10px;\n    margin-right: 10px; }\n  .rate-div-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .calc-div-wrap[_ngcontent-c2] {\n    width: 97%; }\n  .calc-boxes-wrap[_ngcontent-c2] {\n    width: 90%; }\n  .buy-btn1[_ngcontent-c2] {\n    width: 560px; }\n  .input-copy[_ngcontent-c2] {\n    margin-bottom: 20px; } }\n\n@media (min-width: 992px) and (max-width: 1496px) {\n  .calc-boxes-wrap[_ngcontent-c2] {\n    width: 100%; }\n  .red-box2[_ngcontent-c2] {\n    width: 230px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_userService__ = __webpack_require__("../../../../../src/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_amcharts_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_amcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_amcharts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_gauge_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_gauge_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_gauge_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_pie_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/pie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_pie_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_pie_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_serial_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_light_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/light.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_light_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_light_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_charts_amchart_ammap_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_charts_amchart_ammap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_charts_amchart_ammap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_charts_amchart_worldLow_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_charts_amchart_worldLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_charts_amchart_worldLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_charts_amchart_continentsLow_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/continentsLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_charts_amchart_continentsLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__assets_charts_amchart_continentsLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_calculator_Model__ = __webpack_require__("../../../../../src/models/calculator.Model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_calculator__ = __webpack_require__("../../../../../src/services/calculator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DefaultComponent = (function () {
    function DefaultComponent(router, elementref, userService, _calculatorService) {
        this.router = router;
        this.elementref = elementref;
        this.userService = userService;
        this._calculatorService = _calculatorService;
        this.oldPasswordError = false;
        this.newPasswordError = false;
        this.reNewPasswordError = false;
        this.passwordMatchError = false;
        this.fnameError = false;
        this.lnameError = false;
        this.ethError = false;
        this.idNumberPhoto = null;
        this.passportNumberPhoto = null;
        this.passportSelfiPhoto = null;
        this.checkBoxValue = false;
        this.hexa_data = "";
        this.loginBtn = true;
        //Error 
        this.idNumberError = false;
        this.passportNumberError = false;
        this.IDNumbervalidError = false;
        this.readyToCallService = false;
        this.PassportNumberValidError = false;
        this.idNumberPhotoError = false;
        this.passportPhotoError = false;
        this.passportSelfiPhotoError = false;
        this.termsConditionCheckError = false;
        this.loaderShow = false;
        this.updateBtn = true;
        this.kyc_status = "";
        this.btc_amount = 0;
        this.eth_amount = 0;
        this.bch_amount = 0;
        this.ltc_amount = 0;
        this.smrt_amount = 0;
        // Pictures Name
        this.bonus = 0;
        this.idMsg = '*Take a picture of Identity Card';
        this.passMsg = '*Take a picture of your Passport';
        this.passSelfiMsg = '*Take a selfie with your Passport';
        this.EthAddress = "";
        this.firstName = "";
        this.lastName = "";
        this.EnteredValue = 1;
        this.bnz_to_btc = 0;
        this.bnz_to_eth = 0;
        this.bnz_to_bch = 0;
        this.bnz_to_ltc = 0;
        this.token_rate = 0;
        this.rec_address = "";
        this.Name = "";
        this.updateBtnStatus = false;
        this.api_date = "";
        this.api_name = "";
        this.api_time = "";
        this.helped = 0;
        this.signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
        console.log('this.signedInUser', this.signedInUser);
        if (this.signedInUser == null || this.signedInUser == undefined) {
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
        else {
            if (this.signedInUser.user.iskycVerified == "0") {
                this.kyc_status = "Not Submitted";
            }
            else if (this.signedInUser.user.iskycVerified == "1") {
                this.kyc_status = "Submitted";
            }
            else if (this.signedInUser.user.iskycVerified == "2") {
                this.kyc_status = "Verified";
            }
            else if (this.signedInUser.user.iskycVerified == "-1") {
                this.kyc_status = "Blocked";
            }
            for (var i = 0; i < this.signedInUser.user.allIncomingTransactions.length; i++) {
                if (this.signedInUser.user.allIncomingTransactions[i].transactionType == 'BTC') {
                    this.btc_amount = this.btc_amount + this.signedInUser.user.allIncomingTransactions[i].amountRecieve;
                }
                else if (this.signedInUser.user.allIncomingTransactions[i].transactionType == 'LTC') {
                    this.ltc_amount = this.ltc_amount + this.signedInUser.user.allIncomingTransactions[i].amountRecieve;
                }
                else if (this.signedInUser.user.allIncomingTransactions[i].transactionType == 'BCH') {
                    this.bch_amount = this.bch_amount + this.signedInUser.user.allIncomingTransactions[i].amountRecieve;
                }
                else if (this.signedInUser.user.allIncomingTransactions[i].transactionType == 'ETH') {
                    this.eth_amount = this.eth_amount + this.signedInUser.user.allIncomingTransactions[i].amountRecieve;
                }
                this.smrt_amount = this.smrt_amount + this.signedInUser.user.allIncomingTransactions[i].totalCoins;
            }
        }
    }
    DefaultComponent.prototype.routeToKyc = function () {
        this.router.navigate(['admin/kyc']);
    };
    DefaultComponent.prototype.getDetail = function () {
        // this.Name = this.signedInUser.user.Name;
        this.firstName = this.signedInUser.user.firstName;
        this.lastName = this.signedInUser.user.lastName;
        this.EthAddress = this.signedInUser.user.EthAddress;
    };
    DefaultComponent.prototype.contribute = function () {
        var win = window.open('https://smartstartuptoken.tech/smrt-contributions.pdf', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        }
        else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    };
    DefaultComponent.prototype.contact = function () {
        if (this.Subject == null || this.Message == null || this.Subject == undefined || this.Message == undefined || this.Subject == "" || this.Message == "") {
            $("#snackbar").html("Please Enter Empty Fields");
            this.myFunction();
        }
        else {
            $(".updateLoader").show();
            $(".send-btn").hide();
            // this.userService.ContactUs(this.signedInUser.user._id, this.Subject, this.Message).subscribe(a => {
            //   $("#snackbar").html(a.message);
            //   this.myFunction();
            //   this.signedInUser.user._id = undefined;
            //   this.Subject = undefined;
            //   this.Message = undefined;
            //   $(".updateLoader").hide();
            //   $(".send-btn").show();
            // });
        }
    };
    DefaultComponent.prototype.updateProfileuser = function (signedInUser) {
        this.unsetErrors();
        var error = false;
        if (this.firstName == undefined || this.firstName == "" || this.firstName == null) {
            this.fnameError = true;
            error = true;
        }
        if (this.lastName == undefined || this.lastName == "") {
            this.lnameError = true;
            error = true;
        }
        if (this.EthAddress == undefined || this.EthAddress == "" || this.EthAddress == "" /* || !this.validateName(this.name) */) {
            this.ethError = true;
            error = true;
        }
        if (error) {
        }
        else {
            $(".updateLoader").show();
            $(".updateBtn").hide();
            // this.userService.UpdateProfile(signedInUser.user._id, this.firstName, this.lastName, this.EthAddress).subscribe(a => {
            //   if (a.code == 200) {
            //     $("#snackbar").html("Profile Updated Successfully");
            //     this.myFunction();
            //     this.signedInUser.user.firstName = this.firstName;
            //     this.signedInUser.user.lastName = this.lastName;
            //     this.signedInUser.user.EthAddress = this.EthAddress;
            //     localStorage.setItem('signedInUser', JSON.stringify(this.signedInUser));
            //   }
            //   $("#snackbar").html(a.message);
            //   this.myFunction();
            //   $(".updateLoader").hide();
            //   $(".updateBtn").show();
            // }, err => {
            //   console.log(err);
            //   this.updateBtn = true;
            //   var obj = JSON.parse(err._body);
            //   $("#snackbar").html(obj.message);
            //   this.myFunction();
            //   $(".updateLoader").hide();
            //   $(".updateBtn").show();
            // });
        }
    };
    DefaultComponent.prototype.clearPasswords = function () {
        this.oldPassword = undefined;
        this.newPassword = undefined;
        this.reNewPassword = undefined;
    };
    DefaultComponent.prototype.unsetErrors = function () {
        this.fnameError = false;
        this.lnameError = false;
        this.oldPasswordError = false;
        this.newPasswordError = false;
        this.reNewPasswordError = false;
        this.passwordMatchError = false;
    };
    DefaultComponent.prototype.changePassword = function () {
        this.unsetErrors();
        var error = false;
        if (this.oldPassword == undefined) {
            this.oldPasswordError = true;
            error = true;
        }
        if (this.newPassword == undefined) {
            this.newPasswordError = true;
            error = true;
        }
        if (this.reNewPassword == undefined || this.newPassword != this.reNewPassword) {
            this.passwordMatchError = true;
            error = true;
        }
        if (error) {
        }
        else {
            $(".updateLoader").show();
            $(".updateBtn").hide();
            console.log(this.oldPassword, this.newPassword, this.signedInUser.user._id);
            // this.userService.changePassword(this.oldPassword, this.newPassword, this.signedInUser.user._id).subscribe(a => {
            //   console.log(a);
            //   if (a.code == 200) {
            //     $("#snackbar").html(a.message);
            //     this.myFunction();
            //     $(".updateLoader").hide();
            //     $(".updateBtn").show();
            //   }
            // }, err => {
            //   this.updateBtn = true;
            //   var obj = JSON.parse(err._body);
            //   $("#snackbar").html(obj.message);
            //   this.myFunction();
            //   $(".updateLoader").hide();
            //   $(".updateBtn").show();
            // })
        }
    };
    DefaultComponent.prototype.updateKYC = function () {
        this.verificationBtn.nativeElement.click();
    };
    DefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
        if ((localStorage.getItem("signedInUser") == null || (localStorage.getItem("signedInUser") == undefined))) {
            localStorage.clear();
            this.router.navigate(['/']);
        }
        else {
        }
        if (this.signedInUser == null) {
            $('#header-above').removeClass('header-hide');
            $('#header-above').addClass('header-show');
            $('#header-bottom').addClass('header-hide');
            $('#header-bottom').removeClass('header-show');
        }
        else {
            $('#header-above').addClass('header-hide');
            $('#header-above').removeClass('header-show');
            $('#header-bottom').removeClass('header-hide');
            $('#header-bottom').addClass('header-show');
        }
        new ClipboardJS('.copy-btn');
        this.coinSelectionForBuy = "BTC";
        /*     var self = this;
            $(".payment-li").click(function () {
              $(".payment-li").removeClass("active");
              $(this).addClass("active");
              self.coinSelectionForBuy = $(this).text();
              console.log(self.coinSelectionForBuy);
              $("#left-currency").text(self.coinSelectionForBuy);
              self.calculate_now();
        
            }) */
        this.rates = new __WEBPACK_IMPORTED_MODULE_12__models_calculator_Model__["a" /* CalculatorModel */]();
        this._calculatorService.getConversionRate().subscribe(function (a) {
            console.log(a);
            _this.rates = a.message;
            _this.oneBnz = _this.rates.smrt;
            _this.api_date = _this.rates.api_date;
            var date = new Date(_this.api_date);
            _this.api_date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            _this.api_name = _this.rates.api_name;
            _this.api_time = date.getHours() + ":" + date.getMinutes();
            _this.bonus = _this.rates.bonus;
            _this.bnz_to_btc = (_this.rates.smrt / _this.rates.btc).toFixed(5);
            _this.bnz_to_eth = (_this.rates.smrt / _this.rates.eth).toFixed(5);
            _this.bnz_to_ltc = (_this.rates.smrt / _this.rates.ltc).toFixed(5);
            _this.bnz_to_bch = (_this.rates.smrt / _this.rates.bch).toFixed(5);
            _this.calculate_now();
        });
        this.changeTypeOfCoin('BTC');
        if (this.signedInUser.user.iskycVerified != "0") {
            this.updateBtnStatus = false;
        }
        else {
            this.updateBtnStatus = true;
            /* this.verificationBtn.nativeElement.click(); */
        }
        new ClipboardJS('#basic-addon1');
        var self = this;
        setInterval(function () {
            self.changeInRates();
        }, 30000);
    };
    DefaultComponent.prototype.changeInRates = function () {
        var _this = this;
        this.rates = new __WEBPACK_IMPORTED_MODULE_12__models_calculator_Model__["a" /* CalculatorModel */]();
        this._calculatorService.getConversionRate().subscribe(function (a) {
            console.log(a);
            _this.rates = a.message;
            _this.oneBnz = _this.rates.smrt;
            _this.api_date = _this.rates.api_date;
            var date = new Date(_this.api_date);
            _this.api_date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            _this.api_name = _this.rates.api_name;
            _this.api_time = date.getHours() + ":" + date.getMinutes();
            _this.bnz_to_btc = (_this.rates.smrt / _this.rates.btc).toFixed(5);
            _this.bnz_to_eth = (_this.rates.smrt / _this.rates.eth).toFixed(5);
            _this.bnz_to_ltc = (_this.rates.smrt / _this.rates.ltc).toFixed(5);
            _this.bnz_to_bch = (_this.rates.smrt / _this.rates.bch).toFixed(5);
            // this.calculate_now();
        });
    };
    DefaultComponent.prototype.resetValidations = function () {
        this.idNumberError = false;
        this.passportNumberError = false;
        this.IDNumbervalidError = false;
        this.readyToCallService = false;
        this.PassportNumberValidError = false;
        this.idNumberPhotoError = false;
        this.passportPhotoError = false;
        this.passportSelfiPhotoError = false;
        this.termsConditionCheckError = false;
    };
    DefaultComponent.prototype.calculate_reverse = function () {
        if ($("#bnz_value").val() < 0) {
            $("#bnz_value").val("0");
        }
        var enteredValue = $("#bnz_value").val();
        if (this.coinSelectionForBuy == "BTC") {
            var answer = enteredValue * (this.rates.smrt / this.rates.btc);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#val_input").val(answer.toFixed(5));
        }
        else if (this.coinSelectionForBuy == "LTC") {
            var answer = enteredValue * (this.rates.smrt / this.rates.ltc);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#val_input").val(answer.toFixed(5));
        }
        else if (this.coinSelectionForBuy == "BCH") {
            var answer = enteredValue * (this.rates.smrt / this.rates.bch);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#val_input").val(answer.toFixed(5));
        }
        else if (this.coinSelectionForBuy == "ETH") {
            var answer = enteredValue * (this.rates.smrt / this.rates.eth);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#val_input").val(answer.toFixed(5));
        }
        else if (this.coinSelectionForBuy == "USD") {
            var answer = enteredValue * (this.rates.smrt);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#bnz_value").val(answer.toFixed(5));
        }
    };
    DefaultComponent.prototype.calculate_now = function () {
        console.log(this.coinSelectionForBuy);
        if ($("#val_input").val() < 0) {
            $("#val_input").val("0");
        }
        var valter_value = parseFloat($("#val_input").val());
        if (valter_value > 99999999999999) {
            $("#val_input").val("0");
        }
        var enteredValue = $("#val_input").val();
        this.EnteredValue = enteredValue;
        if (this.coinSelectionForBuy == "BTC") {
            var answer = enteredValue * (this.rates.btc / this.rates.smrt);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#bnz_value").val(answer.toFixed(5));
            console.log(answer);
        }
        else if (this.coinSelectionForBuy == "LTC") {
            var answer = enteredValue * (this.rates.ltc / this.rates.smrt);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#bnz_value").val(answer.toFixed(5));
        }
        else if (this.coinSelectionForBuy == "BCH") {
            var answer = enteredValue * (this.rates.bch / this.rates.smrt);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#bnz_value").val(answer.toFixed(5));
        }
        else if (this.coinSelectionForBuy == "ETH") {
            var answer = enteredValue * (this.rates.eth / this.rates.smrt);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#bnz_value").val(answer.toFixed(5));
        }
        else if (this.coinSelectionForBuy == "USD") {
            var answer = enteredValue / (this.rates.smrt);
            var answer_bonus = (answer * this.bonus) / 100;
            this.helped = answer_bonus;
            answer = answer + answer_bonus;
            $("#bnz_value").val(answer.toFixed(5));
        }
    };
    DefaultComponent.prototype.changeTypeOfCoin = function (value) {
        $('.hexa_data').hide();
        $(".payment-li").removeClass("active");
        $("#left-currency").text(value);
        this.coinSelectionForBuy = value;
        if (value == 'BTC') {
            this.rec_address = this.signedInUser.user.BTCWalletRecieverAddress;
            $("#btc-li").addClass("active");
        }
        else if (value == 'LTC') {
            this.rec_address = this.signedInUser.user.LTCWalletRecieverAddress;
            $("#ltc-li").addClass("active");
        }
        else if (value == 'BCH') {
            this.rec_address = this.signedInUser.user.BCHWalletRecieverAddress;
            $("#bch-li").addClass("active");
        }
        else if (value == 'ETH') {
            $('.hexa_data').show();
            this.rec_address = this.signedInUser.user.ETHWalletFundRecieverAddress;
            this.hexa_data = this.signedInUser.user.ETHWalleRecieverData;
            $("#eth-li").addClass("active");
        }
        else if (value == 'USD') {
            $("#usd-li").addClass("active");
        }
        this.calculate_now();
    };
    //Method for file chooser
    DefaultComponent.prototype.getIdPhoto = function () {
        this.IdCardPhoto.nativeElement.click();
    };
    DefaultComponent.prototype.getPassportPhoto = function () {
        this.passportPhoto.nativeElement.click();
    };
    DefaultComponent.prototype.getPassportSelfiPhoto = function () {
        this.selfiPassportPhoto.nativeElement.click();
    };
    DefaultComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    //Mehtod to Change the help msgs into picture name
    DefaultComponent.prototype.fileChooseChangeID = function (event) {
        console.log(event);
        this.idMsg = event.target.files[0].name;
        this.idNumberPhoto = event.target.files[0];
    };
    DefaultComponent.prototype.fileChoosePassport = function (event) {
        this.passMsg = event.target.files[0].name;
        this.passportNumberPhoto = event.target.files[0];
    };
    DefaultComponent.prototype.fileChooseSelfiPassport = function (event) {
        this.passSelfiMsg = event.target.files[0].name;
        this.passportSelfiPhoto = event.target.files[0];
    };
    //validate IDNumber & PassportNumber
    DefaultComponent.prototype.validateNumber = function (value) {
        var numberPattern = /[^0-9\.]+/;
        var test = numberPattern.test(String(value).toLowerCase());
        return test;
    };
    DefaultComponent.prototype.uploadProfile = function () {
        $(".loginLoader").show();
        this.resetValidations();
        if (this.idCardNumber == "" || this.idCardNumber == null || this.idCardNumber === undefined) {
            this.idNumberError = true;
            this.readyToCallService = true;
        }
        if (this.idCardNumber != undefined && this.idCardNumber != "") {
            if (this.validateNumber(this.idCardNumber)) {
                this.IDNumbervalidError = true;
                this.readyToCallService = true;
            }
        }
        if (this.passportNumber == "" || this.passportNumber == null || this.passportNumber === undefined || this.passportNumber.trim() == "") {
            this.passportNumberError = true;
            this.readyToCallService = true;
        }
        if (this.passportNumber != undefined && this.passportNumber != "") {
            if (this.validateNumber(this.passportNumber)) {
                this.PassportNumberValidError = true;
                this.readyToCallService = true;
            }
        }
        //Photo Validations
        if (this.idNumberPhoto == null) {
            this.idNumberPhotoError = true;
            this.readyToCallService = true;
        }
        if (this.passportNumberPhoto == null) {
            this.passportPhotoError = true;
            this.readyToCallService = true;
        }
        if (this.passportSelfiPhoto == null) {
            this.passportSelfiPhotoError = true;
            this.readyToCallService = true;
        }
        // if (this.checkBoxValue == false) {
        //   this.termsConditionCheckError = true;
        //   this.readyToCallService = true;
        // }
        /*     if (this.readyToCallService == false) {
              this.loaderShow = true;
              this.updateBtn = false;
              this.userService.updateProfile(this.idCardNumber, this.passportNumber, this.signedInUser.user._id, this.passportSelfiPhoto, this.passportNumberPhoto, this.idNumberPhoto).subscribe(a => {
                this.closeBtn.nativeElement.click();
                this.signedInUser.user.iskycVerified = "1";
                this.kyc_status = "Submitted";
                this.updateBtnStatus = false;
                localStorage.setItem('signedInUser', JSON.stringify(this.signedInUser));
                $("#snackbar").html(a.message);
                this.myFunction();
        
              }, err => {
                this.loaderShow = false;
                this.updateBtn = true;
                console.log(err);
                $("#snackbar").html(err.message);
                this.myFunction();
              });
            } */
        /*  else{
           this.loaderShow = true;
             this.updateBtn = false;
         } */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('verificationBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "verificationBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('IdCardPhoto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "IdCardPhoto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passportPhoto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "passportPhoto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selfiPassportPhoto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "selfiPassportPhoto", void 0);
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-default',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__services_calculator__["a" /* CalculatorService */]],
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_3__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__services_calculator__["a" /* CalculatorService */]])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_routing_module__ = __webpack_require__("../../../../../src/app/theme/dashboard/default/default-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DefaultModule = (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_3__default_routing_module__["a" /* DefaultRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__default_component__["a" /* DefaultComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__default_component__["a" /* DefaultComponent */]]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "../../../../../src/models/calculator.Model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorModel; });
var CalculatorModel = (function () {
    function CalculatorModel() {
    }
    return CalculatorModel;
}());



/***/ }),

/***/ "../../../../../src/services/calculator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serviceUrl__ = __webpack_require__("../../../../../src/services/serviceUrl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculatorService = (function () {
    function CalculatorService(http) {
        this.http = http;
        this.serviceUrl = new __WEBPACK_IMPORTED_MODULE_3__serviceUrl__["a" /* ServiceUrl */]();
    }
    CalculatorService.prototype.getConversionRate = function () {
        var data;
        data = {};
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this.http.get(this.serviceUrl.baseUrl + "user/getConversionRates", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CalculatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CalculatorService);
    return CalculatorService;
}());



/***/ }),

/***/ "../../../../angular2-qrcode/lib/angular2-qrcode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QRCodeComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qrious__ = __webpack_require__("../../../../qrious/dist/umd/qrious.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qrious___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qrious__);



var QRCodeComponent = (function () {
    /**
     * @param {?} elementRef
     */
    function QRCodeComponent(elementRef) {
        this.elementRef = elementRef;
        this.background = 'white';
        this.backgroundAlpha = 1.0;
        this.foreground = 'black';
        this.foregroundAlpha = 1.0;
        this.level = 'L';
        this.mime = 'image/png';
        this.padding = null;
        this.size = 100;
        this.value = '';
        this.canvas = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if ('background' in changes ||
            'backgroundAlpha' in changes ||
            'foreground' in changes ||
            'foregroundAlpha' in changes ||
            'level' in changes ||
            'mime' in changes ||
            'padding' in changes ||
            'size' in changes ||
            'value' in changes ||
            'canvas' in changes) {
            this.generate();
        }
    };
    /**
     * @return {?}
     */
    QRCodeComponent.prototype.generate = function () {
        try {
            var /** @type {?} */ el = this.elementRef.nativeElement;
            el.innerHTML = '';
            var /** @type {?} */ qr = new __WEBPACK_IMPORTED_MODULE_1_qrious___default.a({
                background: this.background,
                backgroundAlpha: this.backgroundAlpha,
                foreground: this.foreground,
                foregroundAlpha: this.foregroundAlpha,
                level: this.level,
                mime: this.mime,
                padding: this.padding,
                size: this.size,
                value: this.value
            });
            if (this.canvas) {
                el.appendChild(qr.canvas);
            }
            else {
                el.appendChild(qr.image);
            }
        }
        catch (e) {
            console.error("Could not generate QR Code: " + e.message);
        }
    };
    return QRCodeComponent;
}());
QRCodeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                moduleId: 'module.id',
                selector: 'qr-code',
                template: ""
            },] },
];
/**
 * @nocollapse
 */
QRCodeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
QRCodeComponent.propDecorators = {
    'background': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'backgroundAlpha': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'foreground': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'foregroundAlpha': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'level': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'mime': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'padding': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'canvas': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var QRCodeModule = (function () {
    function QRCodeModule() {
    }
    return QRCodeModule;
}());
QRCodeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                exports: [QRCodeComponent],
                declarations: [QRCodeComponent]
            },] },
];
/**
 * @nocollapse
 */
QRCodeModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "../../../../qrious/dist/umd/qrious.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 * QRious v2.3.0
 * Copyright (C) 2017 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('qrious', factory) :
	(global.QRious = factory());
}(this, (function () { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function(it){
	  return Object(_defined(it));
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	});

	var SHARED = '__core-js_shared__';
	var store  = _global[SHARED] || (_global[SHARED] = {});
	var _shared = function(key){
	  return store[key] || (store[key] = {});
	};

	var id = 0;
	var px = Math.random();
	var _uid = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var shared = _shared('keys');
	var _sharedKey = function(key){
	  return shared[key] || (shared[key] = _uid(key));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var IE_PROTO    = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function(O){
	  O = _toObject(O);
	  if(_has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	});

	var _aFunction = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function(fn, that, length){
	  _aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function(it){
	  if(!_isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

	var document$1 = _global.document;
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function(it){
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function(){
	  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function(it, S){
	  if(!_isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP             = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if(_ie8DomDefine)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

	var _hide = _descriptors ? function(object, key, value){
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

	var PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? _core : _core[name] || (_core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])_hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	var _export = $export;

	// most Object methods by ES6 should accept primitives

	var _objectSap = function(KEY, exec){
	  var fn  = (_core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function(){ fn(1); }), 'Object', exp);
	};

	// 19.1.2.9 Object.getPrototypeOf(O)


	_objectSap('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return _objectGpo(_toObject(it));
	  };
	});

	var getPrototypeOf$1 = _core.Object.getPrototypeOf;

	var getPrototypeOf = createCommonjsModule(function (module) {
	module.exports = { "default": getPrototypeOf$1, __esModule: true };
	});

	var _Object$getPrototypeOf = unwrapExports(getPrototypeOf);

	var classCallCheck = createCommonjsModule(function (module, exports) {
	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export(_export.S + _export.F * !_descriptors, 'Object', {defineProperty: _objectDp.f});

	var $Object = _core.Object;
	var defineProperty$2 = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

	var defineProperty = createCommonjsModule(function (module) {
	module.exports = { "default": defineProperty$2, __esModule: true };
	});

	var createClass = createCommonjsModule(function (module, exports) {
	"use strict";

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	});

	var _createClass = unwrapExports(createClass);

	// 7.1.4 ToInteger
	var ceil  = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function(TO_STRING){
	  return function(that, pos){
	    var s = String(_defined(that))
	      , i = _toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _library = true;

	var _redefine = _hide;

	var _iterators = {};

	var toString = {}.toString;

	var _cof = function(it){
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings

	var _toIobject = function(it){
	  return _iobject(_defined(it));
	};

	// 7.1.15 ToLength
	var min       = Math.min;
	var _toLength = function(it){
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max       = Math.max;
	var min$1       = Math.min;
	var _toIndex = function(index, length){
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes

	var _arrayIncludes = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = _toIobject($this)
	      , length = _toLength(O.length)
	      , index  = _toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO$2     = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function(object, names){
	  var O      = _toIobject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO$2)_has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(_has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)


	var _objectKeys = Object.keys || function keys(O){
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
	  _anObject(O);
	  var keys   = _objectKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)_objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var _html = _global.document && document.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var IE_PROTO$1    = _sharedKey('IE_PROTO');
	var Empty       = function(){ /* empty */ };
	var PROTOTYPE$1   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe')
	    , i      = _enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var _wks = createCommonjsModule(function (module) {
	var store      = _shared('wks')
	  , Symbol     = _global.Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;
	var TAG = _wks('toStringTag');

	var _setToStringTag = function(it, tag, stat){
	  if(it && !_has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

	var _iterCreate = function(Constructor, NAME, next){
	  Constructor.prototype = _objectCreate(IteratorPrototype, {next: _propertyDesc(1, next)});
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	var ITERATOR       = _wks('iterator');
	var BUGGY          = !([].keys && 'next' in [].keys());
	var FF_ITERATOR    = '@@iterator';
	var KEYS           = 'keys';
	var VALUES         = 'values';

	var returnThis = function(){ return this; };

	var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = _objectGpo($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!_library && !_has(IteratorPrototype, ITERATOR))_hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))_redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at  = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

	var _addToUnscopables = function(){ /* empty */ };

	var _iterStep = function(done, value){
	  return {value: value, done: !!done};
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if(kind == 'keys'  )return _iterStep(0, index);
	  if(kind == 'values')return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var TO_STRING_TAG = _wks('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = _global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])_hide(proto, TO_STRING_TAG, NAME);
	  _iterators[NAME] = _iterators.Array;
	}

	var f$1 = _wks;

	var _wksExt = {
		f: f$1
	};

	var iterator$2 = _wksExt.f('iterator');

	var iterator = createCommonjsModule(function (module) {
	module.exports = { "default": iterator$2, __esModule: true };
	});

	var _meta = createCommonjsModule(function (module) {
	var META     = _uid('meta')
	  , setDesc  = _objectDp.f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !_fails(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!_isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!_has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!_has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !_has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};
	});

	var defineProperty$4 = _objectDp.f;
	var _wksDefine = function(name){
	  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty$4($Symbol, name, {value: _wksExt.f(name)});
	};

	var _keyof = function(object, el){
	  var O      = _toIobject(object)
	    , keys   = _objectKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	// all enumerable object keys, includes symbols

	var _enumKeys = function(it){
	  var result     = _objectKeys(it)
	    , getSymbols = _objectGops.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = _objectPie.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg){
	  return _cof(arg) == 'Array';
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$5
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var gOPN$1      = _objectGopn.f;
	var toString$1  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN$1(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	var f$4 = function getOwnPropertyNames(it){
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$4
	};

	var gOPD$1           = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P){
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if(_ie8DomDefine)try {
	    return gOPD$1(O, P);
	  } catch(e){ /* empty */ }
	  if(_has(O, P))return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim
	var META           = _meta.KEY;
	var gOPD           = _objectGopd.f;
	var dP$1             = _objectDp.f;
	var gOPN           = _objectGopnExt.f;
	var $Symbol        = _global.Symbol;
	var $JSON          = _global.JSON;
	var _stringify     = $JSON && $JSON.stringify;
	var PROTOTYPE$2      = 'prototype';
	var HIDDEN         = _wks('_hidden');
	var TO_PRIMITIVE   = _wks('toPrimitive');
	var isEnum         = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols     = _shared('symbols');
	var OPSymbols      = _shared('op-symbols');
	var ObjectProto$1    = Object[PROTOTYPE$2];
	var USE_NATIVE     = typeof $Symbol == 'function';
	var QObject        = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function(){
	  return _objectCreate(dP$1({}, 'a', {
	    get: function(){ return dP$1(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto$1, key);
	  if(protoDesc)delete ObjectProto$1[key];
	  dP$1(it, key, D);
	  if(protoDesc && it !== ObjectProto$1)dP$1(ObjectProto$1, key, protoDesc);
	} : dP$1;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto$1)$defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if(_has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!_has(it, HIDDEN))dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(_has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _objectCreate(D, {enumerable: _propertyDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if(this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if(it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(_toIobject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto$1
	    , names  = gOPN(IS_OP ? OPSymbols : _toIobject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto$1)$set.call(OPSymbols, value);
	      if(_has(this, HIDDEN) && _has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if(_descriptors && setter)setSymbolDesc(ObjectProto$1, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString(){
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f   = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f  = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if(_descriptors && !_library){
	    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function(name){
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i$1 = 0; symbols.length > i$1; )_wks(symbols[i$1++]);

	for(var symbols = _objectKeys(_wks.store), i$1 = 0; symbols.length > i$1; )_wksDefine(symbols[i$1++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return _keyof(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !_isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	_wksDefine('asyncIterator');

	_wksDefine('observable');

	var index = _core.Symbol;

	var symbol = createCommonjsModule(function (module) {
	module.exports = { "default": index, __esModule: true };
	});

	var _typeof_1 = createCommonjsModule(function (module, exports) {
	"use strict";

	exports.__esModule = true;



	var _iterator2 = _interopRequireDefault(iterator);



	var _symbol2 = _interopRequireDefault(symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};
	});

	var possibleConstructorReturn = createCommonjsModule(function (module, exports) {
	"use strict";

	exports.__esModule = true;



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */

	var check = function(O, proto){
	  _anObject(O);
	  if(!_isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	_export(_export.S, 'Object', {setPrototypeOf: _setProto.set});

	var setPrototypeOf$2 = _core.Object.setPrototypeOf;

	var setPrototypeOf = createCommonjsModule(function (module) {
	module.exports = { "default": setPrototypeOf$2, __esModule: true };
	});

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', {create: _objectCreate});

	var $Object$1 = _core.Object;
	var create$2 = function create(P, D){
	  return $Object$1.create(P, D);
	};

	var create = createCommonjsModule(function (module) {
	module.exports = { "default": create$2, __esModule: true };
	});

	var inherits = createCommonjsModule(function (module, exports) {
	"use strict";

	exports.__esModule = true;



	var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



	var _create2 = _interopRequireDefault(create);



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	});

	var _inherits = unwrapExports(inherits);

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Contains utility methods that are useful throughout the library.
	 *
	 * @public
	 */
	var Utilities = function () {
	  function Utilities() {
	    _classCallCheck(this, Utilities);
	  }

	  _createClass(Utilities, null, [{
	    key: "abs",


	    /**
	     * Returns the absolute value of a given number.
	     *
	     * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
	     * <code>null</code> instead of zero.
	     *
	     * @param {number} value - the number whose absolute value is to be returned
	     * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
	     * <code>null</code>.
	     * @public
	     * @static
	     */
	    value: function abs(value) {
	      return value != null ? Math.abs(value) : null;
	    }

	    /**
	     * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
	     * (not inherited) property.
	     *
	     * @param {Object} object - the object on which the property is to be checked
	     * @param {string} name - the name of the property to be checked
	     * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
	     * @public
	     * @static
	     */

	  }, {
	    key: "hasOwn",
	    value: function hasOwn(object, name) {
	      return Object.prototype.hasOwnProperty.call(object, name);
	    }

	    /**
	     * Throws an error indicating that the a given method on a specific class has not been implemented.
	     *
	     * @param {string} className - the name of the class on which the method has not been implemented
	     * @param {string} methodName - the name of the method which has not been implemented
	     * @return {void}
	     * @throws {Error} The error describing the class method which has not been implemented.
	     * @public
	     * @static
	     */

	  }, {
	    key: "throwUnimplemented",
	    value: function throwUnimplemented(className, methodName) {
	      throw new Error("\"" + methodName + "\" method must be implemented on the " + className + " class");
	    }

	    /**
	     * Transforms the specified <code>string</code> to upper case while remaining null-safe.
	     *
	     * @param {string} string - the string to be transformed to upper case
	     * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
	     * @public
	     * @static
	     */

	  }, {
	    key: "toUpperCase",
	    value: function toUpperCase(string) {
	      return string != null ? string.toUpperCase() : null;
	    }
	  }]);

	  return Utilities;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Defines a service contract that must be met by all implementations.
	 *
	 * @public
	 */

	var Service = function () {
	  function Service() {
	    _classCallCheck(this, Service);
	  }

	  _createClass(Service, [{
	    key: 'getName',


	    /**
	     * Returns the name of this {@link Service}.
	     *
	     * @return {string} The service name.
	     * @public
	     */
	    value: function getName() {
	      Utilities.throwUnimplemented('Service', 'getName');
	    }
	  }]);

	  return Service;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * A service for working with elements.
	 *
	 * @public
	 * @extends Service
	 */

	var ElementService = function (_Service) {
	  _inherits(ElementService, _Service);

	  function ElementService() {
	    _classCallCheck(this, ElementService);

	    return _possibleConstructorReturn(this, (ElementService.__proto__ || _Object$getPrototypeOf(ElementService)).apply(this, arguments));
	  }

	  _createClass(ElementService, [{
	    key: 'createCanvas',


	    /**
	     * Creates an instance of a canvas element.
	     *
	     * @return {*} The newly created canvas element.
	     * @public
	     */
	    value: function createCanvas() {
	      Utilities.throwUnimplemented('ElementService', 'createCanvas');
	    }

	    /**
	     * Creates an instance of a image element.
	     *
	     * @return {*} The newly created image element.
	     * @public
	     */

	  }, {
	    key: 'createImage',
	    value: function createImage() {
	      Utilities.throwUnimplemented('ElementService', 'createImage');
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'getName',
	    value: function getName() {
	      return 'element';
	    }

	    /**
	     * Returns whether the specified <code>element</code> is a canvas.
	     *
	     * @param {*} element - the element to be checked
	     * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
	     * @public
	     */

	  }, {
	    key: 'isCanvas',
	    value: function isCanvas(element) {
	      Utilities.throwUnimplemented('ElementService', 'isCanvas');
	    }

	    /**
	     * Returns whether the specified <code>element</code> is an image.
	     *
	     * @param {*} element - the element to be checked
	     * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
	     * @public
	     */

	  }, {
	    key: 'isImage',
	    value: function isImage(element) {
	      Utilities.throwUnimplemented('ElementService', 'isImage');
	    }
	  }]);

	  return ElementService;
	}(Service);

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * An implementation of {@link ElementService} intended for use within a browser environment.
	 *
	 * @public
	 * @extends ElementService
	 */

	var BrowserElementService = function (_ElementService) {
	  _inherits(BrowserElementService, _ElementService);

	  function BrowserElementService() {
	    _classCallCheck(this, BrowserElementService);

	    return _possibleConstructorReturn(this, (BrowserElementService.__proto__ || _Object$getPrototypeOf(BrowserElementService)).apply(this, arguments));
	  }

	  _createClass(BrowserElementService, [{
	    key: 'createCanvas',


	    /**
	     * @override
	     */
	    value: function createCanvas() {
	      return document.createElement('canvas');
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'createImage',
	    value: function createImage() {
	      return document.createElement('img');
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'isCanvas',
	    value: function isCanvas(element) {
	      return element instanceof HTMLCanvasElement;
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'isImage',
	    value: function isImage(element) {
	      return element instanceof HTMLImageElement;
	    }
	  }]);

	  return BrowserElementService;
	}(ElementService);

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Responsible for rendering a QR code {@link Frame} on a specific type of element.
	 *
	 * A renderer may be dependant on the rendering of another element, so the ordering of their execution is important.
	 *
	 * The rendering of a element can be deferred by disabling the renderer initially, however, any attempt get the element
	 * from the renderer will result in it being immediately enabled and the element being rendered.
	 *
	 * @public
	 */

	var Renderer = function () {

	  /**
	   * Creates a new instance of {@link Renderer} for the <code>qrious</code> instance and <code>element</code> provided.
	   *
	   * @param {QRious} qrious - the {@link QRious} instance to be used
	   * @param {*} element - the element onto which the QR code is to be rendered
	   * @param {boolean} [enabled] - <code>true</code> this {@link Renderer} is enabled; otherwise <code>false</code>.
	   * @public
	   */
	  function Renderer(qrious, element, enabled) {
	    _classCallCheck(this, Renderer);

	    /**
	     * The {@link QRious} instance.
	     *
	     * @protected
	     * @type {QRious}
	     */
	    this.qrious = qrious;

	    /**
	     * The element onto which this {@link Renderer} is rendering the QR code.
	     *
	     * @protected
	     * @type {*}
	     */
	    this.element = element;
	    this.element.qrious = qrious;

	    /**
	     * Whether this {@link Renderer} is enabled.
	     *
	     * @protected
	     * @type {boolean}
	     */
	    this.enabled = Boolean(enabled);
	  }

	  /**
	   * Draws the specified QR code <code>frame</code> on the underlying element.
	   *
	   * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
	   *
	   * @param {Frame} frame - the {@link Frame} to be drawn
	   * @return {void}
	   * @protected
	   */


	  _createClass(Renderer, [{
	    key: 'draw',
	    value: function draw(frame) {
	      Utilities.throwUnimplemented('Renderer', 'draw');
	    }

	    /**
	     * Returns the element onto which this {@link Renderer} is rendering the QR code.
	     *
	     * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
	     * before the element is returned.
	     *
	     * @return {*} The element.
	     * @public
	     */

	  }, {
	    key: 'getElement',
	    value: function getElement() {
	      if (!this.enabled) {
	        this.enabled = true;
	        this.render();
	      }

	      return this.element;
	    }

	    /**
	     * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
	     * <code>frame</code> provided.
	     *
	     * Any configured padding will be excluded from the returned size.
	     *
	     * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
	     * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
	     * displayed instead of just a blank space filled by the background color.
	     *
	     * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
	     * @return {number} The pixel size for each module in the QR code which will be no less than one.
	     * @protected
	     */

	  }, {
	    key: 'getModuleSize',
	    value: function getModuleSize(frame) {
	      var qrious = this.qrious;
	      var padding = qrious.padding || 0;
	      var pixels = Math.floor((qrious.size - padding * 2) / frame.width);

	      return Math.max(1, pixels);
	    }

	    /**
	     * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
	     * provided.
	     *
	     * The returned value will be zero if there is no available offset or if the size of the QR code does not fit its
	     * contents. It will never be a negative value. This is done so that the inevitable clipping appears more naturally
	     * and it is not clipped from all directions.
	     *
	     * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
	     * @return {number} The pixel offset for the QR code which will be no less than zero.
	     * @protected
	     */

	  }, {
	    key: 'getOffset',
	    value: function getOffset(frame) {
	      var qrious = this.qrious;
	      var padding = qrious.padding;

	      if (padding != null) {
	        return padding;
	      }

	      var moduleSize = this.getModuleSize(frame);
	      var offset = Math.floor((qrious.size - moduleSize * frame.width) / 2);

	      return Math.max(0, offset);
	    }

	    /**
	     * Renders a QR code on the underlying element based on the <code>frame</code> provided.
	     *
	     * @param {Frame} frame - the {@link Frame} to be rendered
	     * @return {void}
	     * @public
	     */

	  }, {
	    key: 'render',
	    value: function render(frame) {
	      if (this.enabled) {
	        this.resize();
	        this.reset();
	        this.draw(frame);
	      }
	    }

	    /**
	     * Resets the underlying element, effectively clearing any previously rendered QR code.
	     *
	     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
	     *
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      Utilities.throwUnimplemented('Renderer', 'reset');
	    }

	    /**
	     * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
	     *
	     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
	     *
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: 'resize',
	    value: function resize() {
	      Utilities.throwUnimplemented('Renderer', 'resize');
	    }
	  }]);

	  return Renderer;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * An implementation of {@link Renderer} for working with <code>canvas</code> elements.
	 *
	 * @public
	 * @extends Renderer
	 */

	var CanvasRenderer = function (_Renderer) {
	  _inherits(CanvasRenderer, _Renderer);

	  function CanvasRenderer() {
	    _classCallCheck(this, CanvasRenderer);

	    return _possibleConstructorReturn(this, (CanvasRenderer.__proto__ || _Object$getPrototypeOf(CanvasRenderer)).apply(this, arguments));
	  }

	  _createClass(CanvasRenderer, [{
	    key: 'draw',


	    /**
	     * @override
	     */
	    value: function draw(frame) {
	      var qrious = this.qrious;
	      var moduleSize = this.getModuleSize(frame);
	      var offset = this.getOffset(frame);
	      var context = this.element.getContext('2d');

	      context.fillStyle = qrious.foreground;
	      context.globalAlpha = qrious.foregroundAlpha;

	      for (var i = 0; i < frame.width; i++) {
	        for (var j = 0; j < frame.width; j++) {
	          if (frame.buffer[j * frame.width + i]) {
	            context.fillRect(moduleSize * i + offset, moduleSize * j + offset, moduleSize, moduleSize);
	          }
	        }
	      }
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      var qrious = this.qrious;
	      var context = this.element.getContext('2d');
	      var size = qrious.size;

	      context.lineWidth = 1;
	      context.clearRect(0, 0, size, size);
	      context.fillStyle = qrious.background;
	      context.globalAlpha = qrious.backgroundAlpha;
	      context.fillRect(0, 0, size, size);
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.element.width = this.element.height = this.qrious.size;
	    }
	  }]);

	  return CanvasRenderer;
	}(Renderer);

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/* eslint no-multi-spaces: "off" */

	/**
	 * Contains alignment pattern information.
	 *
	 * @public
	 */
	var Alignment = function () {
	  function Alignment() {
	    _classCallCheck(this, Alignment);
	  }

	  _createClass(Alignment, null, [{
	    key: "BLOCK",


	    /**
	     * Returns the alignment pattern block.
	     *
	     * @return {number[]} The alignment pattern block.
	     * @public
	     * @static
	     */
	    get: function get() {
	      return [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28];
	    }
	  }]);

	  return Alignment;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/* eslint no-multi-spaces: "off" */

	/**
	 * Contains error correction information.
	 *
	 * @public
	 */
	var ErrorCorrection = function () {
	  function ErrorCorrection() {
	    _classCallCheck(this, ErrorCorrection);
	  }

	  _createClass(ErrorCorrection, null, [{
	    key: "BLOCKS",


	    /**
	     * Returns the error correction blocks.
	     *
	     * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
	     * the ECC width.
	     *
	     * @return {number[]} The ECC blocks.
	     * @public
	     * @static
	     */
	    get: function get() {
	      return [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30];
	    }

	    /**
	     * Returns the final format bits with mask (level << 3 | mask).
	     *
	     * @return {number[]} The final format bits.
	     * @public
	     * @static
	     */

	  }, {
	    key: "FINAL_FORMAT",
	    get: function get() {
	      return [
	      // L
	      0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
	      // M
	      0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
	      // Q
	      0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
	      // H
	      0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b];
	    }

	    /**
	     * Returns a map of human-readable ECC levels.
	     *
	     * @return {Object<string, number>} A ECC level mapping.
	     * @public
	     * @static
	     */

	  }, {
	    key: "LEVELS",
	    get: function get() {
	      return {
	        L: 1,
	        M: 2,
	        Q: 3,
	        H: 4
	      };
	    }
	  }]);

	  return ErrorCorrection;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Contains Galois field information.
	 *
	 * @public
	 */
	var Galois = function () {
	  function Galois() {
	    _classCallCheck(this, Galois);
	  }

	  _createClass(Galois, null, [{
	    key: "EXPONENT",


	    /**
	     * Returns the Galois field exponent table.
	     *
	     * @return {number[]} The Galois field exponent table.
	     * @public
	     * @static
	     */
	    get: function get() {
	      return [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26, 0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23, 0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1, 0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0, 0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2, 0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce, 0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc, 0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54, 0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73, 0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff, 0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41, 0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6, 0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09, 0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16, 0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00];
	    }

	    /**
	     * Returns the Galois field log table.
	     *
	     * @return {number[]} The Galois field log table.
	     * @public
	     * @static
	     */

	  }, {
	    key: "LOG",
	    get: function get() {
	      return [0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b, 0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71, 0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45, 0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6, 0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88, 0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40, 0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d, 0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57, 0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18, 0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e, 0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61, 0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2, 0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6, 0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a, 0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7, 0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf];
	    }
	  }]);

	  return Galois;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Contains version pattern information.
	 *
	 * @public
	 */
	var Version = function () {
	  function Version() {
	    _classCallCheck(this, Version);
	  }

	  _createClass(Version, null, [{
	    key: "BLOCK",


	    /**
	     * Returns the version pattern block.
	     *
	     * @return {number[]} The version pattern block.
	     * @public
	     * @static
	     */
	    get: function get() {
	      return [0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69];
	    }
	  }]);

	  return Version;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Generates information for a QR code frame based on a specific value to be encoded.
	 *
	 * @public
	 */

	var Frame = function () {
	  _createClass(Frame, null, [{
	    key: '_createArray',
	    value: function _createArray(length) {
	      var array = [];

	      for (var i = 0; i < length; i++) {
	        array[i] = 0;
	      }

	      return array;
	    }
	  }, {
	    key: '_getMaskBit',
	    value: function _getMaskBit(x, y) {
	      var bit = void 0;

	      if (x > y) {
	        bit = x;
	        x = y;
	        y = bit;
	      }

	      bit = y;
	      bit += y * y;
	      bit >>= 1;
	      bit += x;

	      return bit;
	    }
	  }, {
	    key: '_modN',
	    value: function _modN(x) {
	      while (x >= 255) {
	        x -= 255;
	        x = (x >> 8) + (x & 255);
	      }

	      return x;
	    }

	    // *Badness* coefficients.

	  }, {
	    key: 'N1',
	    get: function get() {
	      return 3;
	    }
	  }, {
	    key: 'N2',
	    get: function get() {
	      return 3;
	    }
	  }, {
	    key: 'N3',
	    get: function get() {
	      return 40;
	    }
	  }, {
	    key: 'N4',
	    get: function get() {
	      return 10;
	    }

	    /**
	     * Creates an instance of {@link Frame} based on the <code>options</code> provided.
	     *
	     * @param {Frame~Options} options - the options to be used
	     * @public
	     */

	  }]);

	  function Frame(options) {
	    _classCallCheck(this, Frame);

	    this._badness = [];
	    this._level = ErrorCorrection.LEVELS[options.level];
	    this._polynomial = [];
	    this._value = options.value;
	    this._valueLength = this._value.length;
	    this._version = 0;
	    this._stringBuffer = [];

	    var dataBlock = void 0;
	    var eccBlock = void 0;
	    var neccBlock1 = void 0;
	    var neccBlock2 = void 0;

	    while (this._version < 40) {
	      this._version++;

	      var index = (this._level - 1) * 4 + (this._version - 1) * 16;

	      neccBlock1 = ErrorCorrection.BLOCKS[index++];
	      neccBlock2 = ErrorCorrection.BLOCKS[index++];
	      dataBlock = ErrorCorrection.BLOCKS[index++];
	      eccBlock = ErrorCorrection.BLOCKS[index];

	      index = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2 - 3 + (this._version <= 9);

	      if (this._valueLength <= index) {
	        break;
	      }
	    }

	    this._dataBlock = dataBlock;
	    this._eccBlock = eccBlock;
	    this._neccBlock1 = neccBlock1;
	    this._neccBlock2 = neccBlock2;

	    /**
	     * The data width is based on version.
	     *
	     * @public
	     * @type {number}
	     */
	    // FIXME: Ensure that it fits instead of being truncated.
	    this.width = 17 + 4 * this._version;

	    /**
	     * The image buffer.
	     *
	     * @public
	     * @type {number[]}
	     */
	    this.buffer = Frame._createArray(this.width * this.width);

	    this._ecc = Frame._createArray(this._dataBlock + (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2);
	    this._mask = Frame._createArray((this.width * (this.width + 1) + 1) / 2);

	    this._insertFinders();
	    this._insertAlignments();

	    // Insert single foreground cell.
	    this.buffer[8 + this.width * (this.width - 8)] = 1;

	    this._insertTimingGap();
	    this._reverseMask();
	    this._insertTimingRowAndColumn();
	    this._insertVersion();
	    this._syncMask();
	    this._convertBitStream(this._value.length);
	    this._calculatePolynomial();
	    this._appendEccToData();
	    this._interleaveBlocks();
	    this._pack();
	    this._finish();
	  }

	  _createClass(Frame, [{
	    key: '_addAlignment',
	    value: function _addAlignment(x, y) {
	      this.buffer[x + this.width * y] = 1;

	      for (var i = -2; i < 2; i++) {
	        this.buffer[x + i + this.width * (y - 2)] = 1;
	        this.buffer[x - 2 + this.width * (y + i + 1)] = 1;
	        this.buffer[x + 2 + this.width * (y + i)] = 1;
	        this.buffer[x + i + 1 + this.width * (y + 2)] = 1;
	      }

	      for (var _i = 0; _i < 2; _i++) {
	        this._setMask(x - 1, y + _i);
	        this._setMask(x + 1, y - _i);
	        this._setMask(x - _i, y - 1);
	        this._setMask(x + _i, y + 1);
	      }
	    }
	  }, {
	    key: '_appendData',
	    value: function _appendData(data, dataLength, ecc, eccLength) {
	      for (var i = 0; i < eccLength; i++) {
	        this._stringBuffer[ecc + i] = 0;
	      }

	      for (var _i2 = 0; _i2 < dataLength; _i2++) {
	        var bit = Galois.LOG[this._stringBuffer[data + _i2] ^ this._stringBuffer[ecc]];

	        if (bit !== 255) {
	          for (var j = 1; j < eccLength; j++) {
	            this._stringBuffer[ecc + j - 1] = this._stringBuffer[ecc + j] ^ Galois.EXPONENT[Frame._modN(bit + this._polynomial[eccLength - j])];
	          }
	        } else {
	          for (var _j = ecc; _j < ecc + eccLength; _j++) {
	            this._stringBuffer[_j] = this._stringBuffer[_j + 1];
	          }
	        }

	        this._stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois.EXPONENT[Frame._modN(bit + this._polynomial[0])];
	      }
	    }
	  }, {
	    key: '_appendEccToData',
	    value: function _appendEccToData() {
	      var data = 0;
	      var ecc = this._calculateMaxLength();

	      for (var i = 0; i < this._neccBlock1; i++) {
	        this._appendData(data, this._dataBlock, ecc, this._eccBlock);

	        data += this._dataBlock;
	        ecc += this._eccBlock;
	      }

	      for (var _i3 = 0; _i3 < this._neccBlock2; _i3++) {
	        this._appendData(data, this._dataBlock + 1, ecc, this._eccBlock);

	        data += this._dataBlock + 1;
	        ecc += this._eccBlock;
	      }
	    }
	  }, {
	    key: '_applyMask',
	    value: function _applyMask(mask) {
	      var width = this.width;

	      switch (mask) {
	        case 0:
	          for (var y = 0; y < width; y++) {
	            for (var x = 0; x < width; x++) {
	              if (!(x + y & 1) && !this._isMasked(x, y)) {
	                this.buffer[x + y * width] ^= 1;
	              }
	            }
	          }

	          break;
	        case 1:
	          for (var _y = 0; _y < width; _y++) {
	            for (var _x = 0; _x < width; _x++) {
	              if (!(_y & 1) && !this._isMasked(_x, _y)) {
	                this.buffer[_x + _y * width] ^= 1;
	              }
	            }
	          }

	          break;
	        case 2:
	          for (var _y2 = 0; _y2 < width; _y2++) {
	            for (var r3x = 0, _x2 = 0; _x2 < width; _x2++, r3x++) {
	              if (r3x === 3) {
	                r3x = 0;
	              }

	              if (!r3x && !this._isMasked(_x2, _y2)) {
	                this.buffer[_x2 + _y2 * width] ^= 1;
	              }
	            }
	          }

	          break;
	        case 3:
	          for (var r3y = 0, _y3 = 0; _y3 < width; _y3++, r3y++) {
	            if (r3y === 3) {
	              r3y = 0;
	            }

	            for (var _r3x = r3y, _x3 = 0; _x3 < width; _x3++, _r3x++) {
	              if (_r3x === 3) {
	                _r3x = 0;
	              }

	              if (!_r3x && !this._isMasked(_x3, _y3)) {
	                this.buffer[_x3 + _y3 * width] ^= 1;
	              }
	            }
	          }

	          break;
	        case 4:
	          for (var _y4 = 0; _y4 < width; _y4++) {
	            for (var _r3x2 = 0, _r3y = _y4 >> 1 & 1, _x4 = 0; _x4 < width; _x4++, _r3x2++) {
	              if (_r3x2 === 3) {
	                _r3x2 = 0;
	                _r3y = !_r3y;
	              }

	              if (!_r3y && !this._isMasked(_x4, _y4)) {
	                this.buffer[_x4 + _y4 * width] ^= 1;
	              }
	            }
	          }

	          break;
	        case 5:
	          for (var _r3y2 = 0, _y5 = 0; _y5 < width; _y5++, _r3y2++) {
	            if (_r3y2 === 3) {
	              _r3y2 = 0;
	            }

	            for (var _r3x3 = 0, _x5 = 0; _x5 < width; _x5++, _r3x3++) {
	              if (_r3x3 === 3) {
	                _r3x3 = 0;
	              }

	              if (!((_x5 & _y5 & 1) + !(!_r3x3 | !_r3y2)) && !this._isMasked(_x5, _y5)) {
	                this.buffer[_x5 + _y5 * width] ^= 1;
	              }
	            }
	          }

	          break;
	        case 6:
	          for (var _r3y3 = 0, _y6 = 0; _y6 < width; _y6++, _r3y3++) {
	            if (_r3y3 === 3) {
	              _r3y3 = 0;
	            }

	            for (var _r3x4 = 0, _x6 = 0; _x6 < width; _x6++, _r3x4++) {
	              if (_r3x4 === 3) {
	                _r3x4 = 0;
	              }

	              if (!((_x6 & _y6 & 1) + (_r3x4 && _r3x4 === _r3y3) & 1) && !this._isMasked(_x6, _y6)) {
	                this.buffer[_x6 + _y6 * width] ^= 1;
	              }
	            }
	          }

	          break;
	        case 7:
	          for (var _r3y4 = 0, _y7 = 0; _y7 < width; _y7++, _r3y4++) {
	            if (_r3y4 === 3) {
	              _r3y4 = 0;
	            }

	            for (var _r3x5 = 0, _x7 = 0; _x7 < width; _x7++, _r3x5++) {
	              if (_r3x5 === 3) {
	                _r3x5 = 0;
	              }

	              if (!((_r3x5 && _r3x5 === _r3y4) + (_x7 + _y7 & 1) & 1) && !this._isMasked(_x7, _y7)) {
	                this.buffer[_x7 + _y7 * width] ^= 1;
	              }
	            }
	          }

	          break;
	      }
	    }
	  }, {
	    key: '_calculateMaxLength',
	    value: function _calculateMaxLength() {
	      return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
	    }
	  }, {
	    key: '_calculatePolynomial',
	    value: function _calculatePolynomial() {
	      this._polynomial[0] = 1;

	      for (var i = 0; i < this._eccBlock; i++) {
	        this._polynomial[i + 1] = 1;

	        for (var j = i; j > 0; j--) {
	          this._polynomial[j] = this._polynomial[j] ? this._polynomial[j - 1] ^ Galois.EXPONENT[Frame._modN(Galois.LOG[this._polynomial[j]] + i)] : this._polynomial[j - 1];
	        }

	        this._polynomial[0] = Galois.EXPONENT[Frame._modN(Galois.LOG[this._polynomial[0]] + i)];
	      }

	      // Use logs for generator polynomial to save calculation step.
	      for (var _i4 = 0; _i4 <= this._eccBlock; _i4++) {
	        this._polynomial[_i4] = Galois.LOG[this._polynomial[_i4]];
	      }
	    }
	  }, {
	    key: '_checkBadness',
	    value: function _checkBadness() {
	      var bad = 0;
	      var width = this.width;

	      // Blocks of same colour.
	      for (var y = 0; y < width - 1; y++) {
	        for (var x = 0; x < width - 1; x++) {
	          // All foreground colour.
	          if (this.buffer[x + width * y] && this.buffer[x + 1 + width * y] && this.buffer[x + width * (y + 1)] && this.buffer[x + 1 + width * (y + 1)] ||
	          // All background colour.
	          !(this.buffer[x + width * y] || this.buffer[x + 1 + width * y] || this.buffer[x + width * (y + 1)] || this.buffer[x + 1 + width * (y + 1)])) {
	            bad += Frame.N2;
	          }
	        }
	      }

	      var bw = 0;

	      // X runs.
	      for (var _y8 = 0; _y8 < width; _y8++) {
	        var h = 0;

	        this._badness[0] = 0;

	        for (var b = 0, _x8 = 0; _x8 < width; _x8++) {
	          var b1 = this.buffer[_x8 + width * _y8];

	          if (b === b1) {
	            this._badness[h]++;
	          } else {
	            this._badness[++h] = 1;
	          }

	          b = b1;
	          bw += b ? 1 : -1;
	        }

	        bad += this._getBadness(h);
	      }

	      if (bw < 0) {
	        bw = -bw;
	      }

	      var count = 0;
	      var big = bw;
	      big += big << 2;
	      big <<= 1;

	      while (big > width * width) {
	        big -= width * width;
	        count++;
	      }

	      bad += count * Frame.N4;

	      // Y runs.
	      for (var _x9 = 0; _x9 < width; _x9++) {
	        var _h = 0;

	        this._badness[0] = 0;

	        for (var _b = 0, _y9 = 0; _y9 < width; _y9++) {
	          var _b2 = this.buffer[_x9 + width * _y9];

	          if (_b === _b2) {
	            this._badness[_h]++;
	          } else {
	            this._badness[++_h] = 1;
	          }

	          _b = _b2;
	        }

	        bad += this._getBadness(_h);
	      }

	      return bad;
	    }
	  }, {
	    key: '_convertBitStream',
	    value: function _convertBitStream(length) {
	      // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanumeric, or kanji not supported).
	      for (var i = 0; i < length; i++) {
	        this._ecc[i] = this._value.charCodeAt(i);
	      }

	      this._stringBuffer = this._ecc.slice(0);

	      var maxLength = this._calculateMaxLength();

	      if (length >= maxLength - 2) {
	        length = maxLength - 2;

	        if (this._version > 9) {
	          length--;
	        }
	      }

	      // Shift and re-pack to insert length prefix.
	      var index = length;

	      if (this._version > 9) {
	        this._stringBuffer[index + 2] = 0;
	        this._stringBuffer[index + 3] = 0;

	        while (index--) {
	          var bit = this._stringBuffer[index];

	          this._stringBuffer[index + 3] |= 255 & bit << 4;
	          this._stringBuffer[index + 2] = bit >> 4;
	        }

	        this._stringBuffer[2] |= 255 & length << 4;
	        this._stringBuffer[1] = length >> 4;
	        this._stringBuffer[0] = 0x40 | length >> 12;
	      } else {
	        this._stringBuffer[index + 1] = 0;
	        this._stringBuffer[index + 2] = 0;

	        while (index--) {
	          var _bit = this._stringBuffer[index];

	          this._stringBuffer[index + 2] |= 255 & _bit << 4;
	          this._stringBuffer[index + 1] = _bit >> 4;
	        }

	        this._stringBuffer[1] |= 255 & length << 4;
	        this._stringBuffer[0] = 0x40 | length >> 4;
	      }

	      // Fill to end with pad pattern.
	      index = length + 3 - (this._version < 10);

	      while (index < maxLength) {
	        this._stringBuffer[index++] = 0xec;
	        this._stringBuffer[index++] = 0x11;
	      }
	    }
	  }, {
	    key: '_getBadness',
	    value: function _getBadness(length) {
	      var badRuns = 0;

	      for (var i = 0; i <= length; i++) {
	        if (this._badness[i] >= 5) {
	          badRuns += Frame.N1 + this._badness[i] - 5;
	        }
	      }

	      // FBFFFBF as in finder.
	      for (var _i5 = 3; _i5 < length - 1; _i5 += 2) {
	        if (this._badness[_i5 - 2] === this._badness[_i5 + 2] && this._badness[_i5 + 2] === this._badness[_i5 - 1] && this._badness[_i5 - 1] === this._badness[_i5 + 1] && this._badness[_i5 - 1] * 3 === this._badness[_i5] && (
	        // Background around the foreground pattern? Not part of the specs.
	        this._badness[_i5 - 3] === 0 || _i5 + 3 > length || this._badness[_i5 - 3] * 3 >= this._badness[_i5] * 4 || this._badness[_i5 + 3] * 3 >= this._badness[_i5] * 4)) {
	          badRuns += Frame.N3;
	        }
	      }

	      return badRuns;
	    }
	  }, {
	    key: '_finish',
	    value: function _finish() {
	      // Save pre-mask copy of frame.
	      this._stringBuffer = this.buffer.slice(0);

	      var bit = 0;
	      var i = void 0;
	      var mask = 30000;

	      /*
	       * Using for instead of while since in original Arduino code if an early mask was "good enough" it wouldn't try for
	       * a better one since they get more complex and take longer.
	       */
	      for (i = 0; i < 8; i++) {
	        // Returns foreground-background imbalance.
	        this._applyMask(i);

	        var currentMask = this._checkBadness();

	        // Is current mask better than previous best?
	        if (currentMask < mask) {
	          mask = currentMask;
	          bit = i;
	        }

	        // Don't increment "i" to a void redoing mask.
	        if (bit === 7) {
	          break;
	        }

	        // Reset for next pass.
	        this.buffer = this._stringBuffer.slice(0);
	      }

	      // Redo best mask as none were "good enough" (i.e. last wasn't bit).
	      if (bit !== i) {
	        this._applyMask(bit);
	      }

	      // Add in final mask/ECC level bytes.
	      mask = ErrorCorrection.FINAL_FORMAT[bit + (this._level - 1 << 3)];

	      // Low byte.
	      for (i = 0; i < 8; i++, mask >>= 1) {
	        if (mask & 1) {
	          this.buffer[this.width - 1 - i + this.width * 8] = 1;

	          if (i < 6) {
	            this.buffer[8 + this.width * i] = 1;
	          } else {
	            this.buffer[8 + this.width * (i + 1)] = 1;
	          }
	        }
	      }

	      // High byte.
	      for (i = 0; i < 7; i++, mask >>= 1) {
	        if (mask & 1) {
	          this.buffer[8 + this.width * (this.width - 7 + i)] = 1;

	          if (i) {
	            this.buffer[6 - i + this.width * 8] = 1;
	          } else {
	            this.buffer[7 + this.width * 8] = 1;
	          }
	        }
	      }
	    }
	  }, {
	    key: '_interleaveBlocks',
	    value: function _interleaveBlocks() {
	      var maxLength = this._calculateMaxLength();
	      var i = void 0;
	      var k = 0;

	      for (i = 0; i < this._dataBlock; i++) {
	        for (var j = 0; j < this._neccBlock1; j++) {
	          this._ecc[k++] = this._stringBuffer[i + j * this._dataBlock];
	        }

	        for (var _j2 = 0; _j2 < this._neccBlock2; _j2++) {
	          this._ecc[k++] = this._stringBuffer[this._neccBlock1 * this._dataBlock + i + _j2 * (this._dataBlock + 1)];
	        }
	      }

	      for (var _j3 = 0; _j3 < this._neccBlock2; _j3++) {
	        this._ecc[k++] = this._stringBuffer[this._neccBlock1 * this._dataBlock + i + _j3 * (this._dataBlock + 1)];
	      }

	      for (i = 0; i < this._eccBlock; i++) {
	        for (var _j4 = 0; _j4 < this._neccBlock1 + this._neccBlock2; _j4++) {
	          this._ecc[k++] = this._stringBuffer[maxLength + i + _j4 * this._eccBlock];
	        }
	      }

	      this._stringBuffer = this._ecc;
	    }
	  }, {
	    key: '_insertAlignments',
	    value: function _insertAlignments() {
	      var width = this.width;

	      if (this._version > 1) {
	        var i = Alignment.BLOCK[this._version];
	        var y = width - 7;

	        for (;;) {
	          var x = width - 7;

	          while (x > i - 3) {
	            this._addAlignment(x, y);

	            if (x < i) {
	              break;
	            }

	            x -= i;
	          }

	          if (y <= i + 9) {
	            break;
	          }

	          y -= i;

	          this._addAlignment(6, y);
	          this._addAlignment(y, 6);
	        }
	      }
	    }
	  }, {
	    key: '_insertFinders',
	    value: function _insertFinders() {
	      var width = this.width;

	      for (var i = 0; i < 3; i++) {
	        var j = 0;
	        var y = 0;

	        if (i === 1) {
	          j = width - 7;
	        }
	        if (i === 2) {
	          y = width - 7;
	        }

	        this.buffer[y + 3 + width * (j + 3)] = 1;

	        for (var x = 0; x < 6; x++) {
	          this.buffer[y + x + width * j] = 1;
	          this.buffer[y + width * (j + x + 1)] = 1;
	          this.buffer[y + 6 + width * (j + x)] = 1;
	          this.buffer[y + x + 1 + width * (j + 6)] = 1;
	        }

	        for (var _x10 = 1; _x10 < 5; _x10++) {
	          this._setMask(y + _x10, j + 1);
	          this._setMask(y + 1, j + _x10 + 1);
	          this._setMask(y + 5, j + _x10);
	          this._setMask(y + _x10 + 1, j + 5);
	        }

	        for (var _x11 = 2; _x11 < 4; _x11++) {
	          this.buffer[y + _x11 + width * (j + 2)] = 1;
	          this.buffer[y + 2 + width * (j + _x11 + 1)] = 1;
	          this.buffer[y + 4 + width * (j + _x11)] = 1;
	          this.buffer[y + _x11 + 1 + width * (j + 4)] = 1;
	        }
	      }
	    }
	  }, {
	    key: '_insertTimingGap',
	    value: function _insertTimingGap() {
	      var width = this.width;

	      for (var y = 0; y < 7; y++) {
	        this._setMask(7, y);
	        this._setMask(width - 8, y);
	        this._setMask(7, y + width - 7);
	      }

	      for (var x = 0; x < 8; x++) {
	        this._setMask(x, 7);
	        this._setMask(x + width - 8, 7);
	        this._setMask(x, width - 8);
	      }
	    }
	  }, {
	    key: '_insertTimingRowAndColumn',
	    value: function _insertTimingRowAndColumn() {
	      var width = this.width;

	      for (var x = 0; x < width - 14; x++) {
	        if (x & 1) {
	          this._setMask(8 + x, 6);
	          this._setMask(6, 8 + x);
	        } else {
	          this.buffer[8 + x + width * 6] = 1;
	          this.buffer[6 + width * (8 + x)] = 1;
	        }
	      }
	    }
	  }, {
	    key: '_insertVersion',
	    value: function _insertVersion() {
	      var width = this.width;

	      if (this._version > 6) {
	        var i = Version.BLOCK[this._version - 7];
	        var j = 17;

	        for (var x = 0; x < 6; x++) {
	          for (var y = 0; y < 3; y++, j--) {
	            if (1 & (j > 11 ? this._version >> j - 12 : i >> j)) {
	              this.buffer[5 - x + width * (2 - y + width - 11)] = 1;
	              this.buffer[2 - y + width - 11 + width * (5 - x)] = 1;
	            } else {
	              this._setMask(5 - x, 2 - y + width - 11);
	              this._setMask(2 - y + width - 11, 5 - x);
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: '_isMasked',
	    value: function _isMasked(x, y) {
	      var bit = Frame._getMaskBit(x, y);

	      return this._mask[bit] === 1;
	    }
	  }, {
	    key: '_pack',
	    value: function _pack() {
	      var x = this.width - 1;
	      var y = this.width - 1;
	      var k = 1;
	      var v = 1;

	      // Interleaved data and ECC codes.
	      var length = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;

	      for (var i = 0; i < length; i++) {
	        var bit = this._stringBuffer[i];

	        for (var j = 0; j < 8; j++, bit <<= 1) {
	          if (0x80 & bit) {
	            this.buffer[x + this.width * y] = 1;
	          }

	          // Find next fill position.
	          do {
	            if (v) {
	              x--;
	            } else {
	              x++;

	              if (k) {
	                if (y !== 0) {
	                  y--;
	                } else {
	                  x -= 2;
	                  k = !k;

	                  if (x === 6) {
	                    x--;
	                    y = 9;
	                  }
	                }
	              } else if (y !== this.width - 1) {
	                y++;
	              } else {
	                x -= 2;
	                k = !k;

	                if (x === 6) {
	                  x--;
	                  y -= 8;
	                }
	              }
	            }

	            v = !v;
	          } while (this._isMasked(x, y));
	        }
	      }
	    }
	  }, {
	    key: '_reverseMask',
	    value: function _reverseMask() {
	      var width = this.width;

	      for (var x = 0; x < 9; x++) {
	        this._setMask(x, 8);
	      }

	      for (var _x12 = 0; _x12 < 8; _x12++) {
	        this._setMask(_x12 + width - 8, 8);
	        this._setMask(8, _x12);
	      }

	      for (var y = 0; y < 7; y++) {
	        this._setMask(8, y + width - 7);
	      }
	    }
	  }, {
	    key: '_setMask',
	    value: function _setMask(x, y) {
	      var bit = Frame._getMaskBit(x, y);

	      this._mask[bit] = 1;
	    }
	  }, {
	    key: '_syncMask',
	    value: function _syncMask() {
	      var width = this.width;

	      for (var y = 0; y < width; y++) {
	        for (var x = 0; x <= y; x++) {
	          if (this.buffer[x + width * y]) {
	            this._setMask(x, y);
	          }
	        }
	      }
	    }
	  }]);

	  return Frame;
	}();



	/**
	 * The options used by {@link Frame}.
	 *
	 * @typedef {Object} Frame~Options
	 * @property {string} level - The ECC level to be used.
	 * @property {string} value - The value to be encoded.
	 */

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * An implementation of {@link Renderer} for working with <code>img</code> elements.
	 *
	 * This depends on {@link CanvasRenderer} being executed first as this implementation simply applies the data URL from
	 * the rendered <code>canvas</code> element as the <code>src</code> for the <code>img</code> element being rendered.
	 *
	 * @public
	 * @extends Renderer
	 */

	var ImageRenderer = function (_Renderer) {
	  _inherits(ImageRenderer, _Renderer);

	  function ImageRenderer() {
	    _classCallCheck(this, ImageRenderer);

	    return _possibleConstructorReturn(this, (ImageRenderer.__proto__ || _Object$getPrototypeOf(ImageRenderer)).apply(this, arguments));
	  }

	  _createClass(ImageRenderer, [{
	    key: 'draw',


	    /**
	     * @override
	     */
	    value: function draw() {
	      this.element.src = this.qrious.toDataURL();
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.element.src = '';
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.element.width = this.element.height = this.qrious.size;
	    }
	  }]);

	  return ImageRenderer;
	}(Renderer);

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Defines an available option while also configuring how values are applied to the target object.
	 *
	 * While a value associated with an option can be changed on the target object, the option definition itself is
	 * immutable.
	 *
	 * @public
	 */
	var Option = function () {

	  /**
	   * Creates a new instance of {@link Option} based on the <code>name</code> provided.
	   *
	   * Optionally, a <code>defaultValue</code> can be specified as well a <code>valueTransformer</code> and
	   * <code>fieldNameResolver</code> for greater control over how the option value is applied.
	   *
	   * If no <code>valueTransformer</code> is specified, then any specified option will be applied directly.
	   *
	   * If no <code>fieldNameResolver</code> is specified, then the field name will be resolved to <code>name</code>
	   * prefixed with a single underscore when the option is applied.
	   *
	   * @param {string} name - the name to be used
	   * @param {*} [defaultValue] - the default value to be used
	   * @param {Option~ValueTransformer} [valueTransformer] - the value transformer to be used
	   * @param {Option~FieldNameResolver} [fieldNameResolver] - the field name resolver to be used
	   * @public
	   */
	  function Option(name, defaultValue, valueTransformer, fieldNameResolver) {
	    _classCallCheck(this, Option);

	    this._name = name;
	    this._defaultValue = defaultValue;
	    this._valueTransformer = valueTransformer;
	    this._fieldName = typeof fieldNameResolver === 'function' ? fieldNameResolver(this) : '_' + name;
	  }

	  /**
	   * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
	   *
	   * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
	   * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
	   *
	   * @param {*} value - the value to be transformed
	   * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
	   * @public
	   */


	  _createClass(Option, [{
	    key: 'transform',
	    value: function transform(value) {
	      var transformer = this._valueTransformer;
	      if (typeof transformer === 'function') {
	        return transformer(value, this);
	      }

	      return value;
	    }

	    /**
	     * Returns the field name for this {@link Option}.
	     *
	     * @return {string} The field name.
	     * @public
	     */

	  }, {
	    key: 'fieldName',
	    get: function get() {
	      return this._fieldName;
	    }

	    /**
	     * Returns the name for this {@link Option}.
	     *
	     * @return {string} The name.
	     * @public
	     */

	  }, {
	    key: 'name',
	    get: function get() {
	      return this._name;
	    }

	    /**
	     * Returns the default value for this {@link Option}.
	     *
	     * @return {*} The default value.
	     * @public
	     */

	  }, {
	    key: 'defaultValue',
	    get: function get() {
	      return this._defaultValue;
	    }
	  }]);

	  return Option;
	}();



	/**
	 * Returns the field name to which the specified <code>option</code> is associated on the target object.
	 *
	 * The resolved name will be used to identify the field that values for <code>option</code> are to be read from and
	 * written to.
	 *
	 * This function will only called once for <code>option</code>, upon initialization.
	 *
	 * @callback Option~FieldNameResolver
	 * @param {Option} option - the {@link Option} whose field name is to be resolved
	 * @return {string} The resolved field name for <code>option</code>.
	 */

	/**
	 * Returns a transformed value for the specified <code>value</code> to be applied for the <code>option</code> provided.
	 *
	 * @callback Option~ValueTransformer
	 * @param {*} value - the value to be transformed
	 * @param {Option} option - the {@link Option} for which <code>value</code> is being transformed
	 * @return {*} The transform value.
	 */

	var isEnum$1    = _objectPie.f;
	var _objectToArray = function(isEntries){
	  return function(it){
	    var O      = _toIobject(it)
	      , keys   = _objectKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum$1.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

	// https://github.com/tc39/proposal-object-values-entries
	var $values = _objectToArray(false);

	_export(_export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

	var values$1 = _core.Object.values;

	var values = createCommonjsModule(function (module) {
	module.exports = { "default": values$1, __esModule: true };
	});

	var _Object$values = unwrapExports(values);

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * Manages multiple {@link Option} instances that are intended to be used by multiple implementations.
	 *
	 * Although the option definitions are shared between targets, the values are maintained on the targets themselves.
	 *
	 * While a value associated with each option can be changed on the target objects, the manager and the option
	 * definitions themselves are immutable.
	 *
	 * @public
	 */

	var OptionManager = function () {
	  _createClass(OptionManager, null, [{
	    key: '_get',
	    value: function _get(option, target) {
	      return target[option.fieldName];
	    }
	  }, {
	    key: '_set',
	    value: function _set(option, value, target) {
	      var fieldName = option.fieldName;
	      var oldValue = target[fieldName];
	      var newValue = option.transform(value != null ? value : option.defaultValue);

	      target[fieldName] = newValue;

	      return newValue !== oldValue;
	    }

	    /**
	     * Creates a new instance of {@link OptionManager} for the specified available <code>options</code>.
	     *
	     * @param {Option[]} options - the options to be used
	     * @public
	     */

	  }]);

	  function OptionManager(options) {
	    var _this = this;

	    _classCallCheck(this, OptionManager);

	    this._options = {};

	    options.forEach(function (option) {
	      _this._options[option.name] = option;
	    });
	  }

	  /**
	   * Sets the default values for all of the available options on the <code>target</code> object provided.
	   *
	   * @param {Object} target - the object on which the default values are to be set for each available option
	   * @return {void}
	   * @public
	   */


	  _createClass(OptionManager, [{
	    key: 'applyDefaults',
	    value: function applyDefaults(target) {
	      var options = this._options;

	      for (var name in options) {
	        if (Utilities.hasOwn(options, name)) {
	          var option = options[name];

	          OptionManager._set(option, option.defaultValue, target);
	        }
	      }
	    }

	    /**
	     * Returns whether an option with the specified <code>name</code> is available.
	     *
	     * @param {string} name - the name of the {@link Option} whose existence is to be checked
	     * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
	     * <code>false</code>.
	     * @public
	     */

	  }, {
	    key: 'exists',
	    value: function exists(name) {
	      return this._options[name] != null;
	    }

	    /**
	     * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
	     *
	     * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
	     * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
	     * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
	     * @public
	     */

	  }, {
	    key: 'get',
	    value: function get(name, target) {
	      return OptionManager._get(this._options[name], target);
	    }

	    /**
	     * Returns a copy of all of the available options on the <code>target</code> object provided.
	     *
	     * @param {Object} target - the object from which the option name/value pairs are to be returned
	     * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
	     * @public
	     */

	  }, {
	    key: 'getAll',
	    value: function getAll(target) {
	      var options = this._options;
	      var result = {};

	      for (var name in options) {
	        if (Utilities.hasOwn(options, name)) {
	          result[name] = OptionManager._get(options[name], target);
	        }
	      }

	      return result;
	    }

	    /**
	     * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
	     * <code>value</code>.
	     *
	     * This method will throw an error if <code>name</code> does not match an available option.
	     *
	     * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
	     * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
	     * transform whichever value was determined to be used.
	     *
	     * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
	     *
	     * @param {string} name - the name of the {@link Option} whose value is to be set
	     * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
	     * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
	     * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
	     * <code>false</code>.
	     * @throws {Error} If no {@link Option} is being managed with <code>name</code>.
	     * @public
	     */

	  }, {
	    key: 'set',
	    value: function set(name, value, target) {
	      var option = this._options[name];
	      if (!option) {
	        throw new Error('Invalid option: ' + name);
	      }

	      return OptionManager._set(option, value, target);
	    }

	    /**
	     * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
	     * values.
	     *
	     * This method will throw an error if any of the names within <code>options</code> does not match an available option.
	     *
	     * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
	     * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
	     * configured, it will be used to transform whichever value was determined to be used.
	     *
	     * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
	     * result.
	     *
	     * @param {Object.<string, *>} options - the name/value pairs of options to be set
	     * @param {Object} target - the object on which the options are to be set
	     * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
	     * <code>false</code>.
	     * @throws {Error} If no {@link Option} is being managed with for any of the names within <code>options</code>.
	     * @public
	     */

	  }, {
	    key: 'setAll',
	    value: function setAll(options, target) {
	      if (!options) {
	        return false;
	      }

	      var changed = false;

	      for (var name in options) {
	        if (Utilities.hasOwn(options, name) && this.set(name, options[name], target)) {
	          changed = true;
	        }
	      }

	      return changed;
	    }

	    /**
	     * Returns a copy of the available options for this {@link OptionManager}.
	     *
	     * @return {Option[]} The available options.
	     * @public
	     */

	  }, {
	    key: 'options',
	    get: function get() {
	      return _Object$values(this._options);
	    }
	  }]);

	  return OptionManager;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	/**
	 * A basic manager for {@link Service} implementations that are mapped to simple names.
	 *
	 * @public
	 */
	var ServiceManager = function () {

	  /**
	   * Creates a new instance of {@link ServiceManager}.
	   *
	   * @public
	   */
	  function ServiceManager() {
	    _classCallCheck(this, ServiceManager);

	    this._services = {};
	  }

	  /**
	   * Returns the {@link Service} being managed with the specified <code>name</code>.
	   *
	   * @param {string} name - the name of the {@link Service} to be returned
	   * @return {Service} The {@link Service} is being managed with <code>name</code>.
	   * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
	   * @public
	   */


	  _createClass(ServiceManager, [{
	    key: "getService",
	    value: function getService(name) {
	      var service = this._services[name];
	      if (!service) {
	        throw new Error("Service is not being managed with name: " + name);
	      }

	      return service;
	    }

	    /**
	     * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
	     * <code>service</code> provided.
	     *
	     * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
	     * @param {Service} service - the {@link Service} implementation to be managed
	     * @return {void}
	     * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
	     * @public
	     */

	  }, {
	    key: "setService",
	    value: function setService(name, service) {
	      if (this._services[name]) {
	        throw new Error("Service is already managed with name: " + name);
	      }

	      if (service) {
	        this._services[name] = service;
	      }
	    }
	  }]);

	  return ServiceManager;
	}();

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	var optionManager = new OptionManager([new Option('background', 'white'), new Option('backgroundAlpha', 1, Utilities.abs), new Option('element'), new Option('foreground', 'black'), new Option('foregroundAlpha', 1, Utilities.abs), new Option('level', 'L', Utilities.toUpperCase), new Option('mime', 'image/png'), new Option('padding', null, Utilities.abs), new Option('size', 100, Utilities.abs), new Option('value', '')]);
	var serviceManager = new ServiceManager();

	/**
	 * Enables configuration of a QR code generator which uses HTML5 <code>canvas</code> for rendering.
	 *
	 * @public
	 */

	var QRious$1 = function () {
	  _createClass(QRious, null, [{
	    key: 'use',


	    /**
	     * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
	     *
	     * @param {Service} service - the {@link Service} to be configured
	     * @return {void}
	     * @throws {Error} If a {@link Service} has already been configured with the same name.
	     * @public
	     * @static
	     */
	    value: function use(service) {
	      serviceManager.setService(service.getName(), service);
	    }

	    /**
	     * Creates a new instance of {@link QRious} based on the <code>options</code> provided.
	     *
	     * @param {QRious~Options} [options] - the options to be used
	     * @throws {Error} If any <code>options</code> are invalid.
	     * @public
	     */

	  }, {
	    key: 'DEFAULTS',


	    /**
	     * Returns the default options for {@link QRious}.
	     *
	     * @return {QRious~Options} The default options.
	     * @deprecated Since 2.3.0
	     * @public
	     * @static
	     */
	    get: function get() {
	      var result = {};

	      optionManager.options.forEach(function (option) {
	        result[option.name] = option.defaultValue;
	      });

	      return result;
	    }

	    /**
	     * Returns the current version of {@link QRious}.
	     *
	     * @return {string} The current version.
	     * @public
	     * @static
	     */

	  }, {
	    key: 'VERSION',
	    get: function get() {
	      return '2.3.0';
	    }
	  }]);

	  function QRious(options) {
	    _classCallCheck(this, QRious);

	    optionManager.applyDefaults(this);
	    optionManager.setAll(options, this);

	    var element = optionManager.get('element', this);
	    var elementService = serviceManager.getService('element');
	    var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
	    var image = element && elementService.isImage(element) ? element : elementService.createImage();

	    this._canvasRenderer = new CanvasRenderer(this, canvas, true);
	    this._imageRenderer = new ImageRenderer(this, image, image === element);

	    this.update();
	  }

	  /**
	   * Returns all of the options configured for this {@link QRious}.
	   *
	   * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
	   * underlying fields.
	   *
	   * @return {Object.<string, *>} A copy of the applied options.
	   * @public
	   */


	  _createClass(QRious, [{
	    key: 'get',
	    value: function get() {
	      return optionManager.getAll(this);
	    }

	    /**
	     * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
	     * underlying fields are changed as a result.
	     *
	     * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
	     * changes.
	     *
	     * @param {QRious~Options} options - the options to be set
	     * @return {void}
	     * @throws {Error} If any <code>options</code> are invalid.
	     * @public
	     */

	  }, {
	    key: 'set',
	    value: function set(options) {
	      if (optionManager.setAll(options, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
	     *
	     * @param {string} [mime] - the MIME type for the image
	     * @return {string} The image data URI for the QR code.
	     * @public
	     */

	  }, {
	    key: 'toDataURL',
	    value: function toDataURL(mime) {
	      return this.canvas.toDataURL(mime || this.mime);
	    }

	    /**
	     * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
	     *
	     * @return {void}
	     * @protected
	     */

	  }, {
	    key: 'update',
	    value: function update() {
	      var frame = new Frame({
	        level: this.level,
	        value: this.value
	      });

	      this._canvasRenderer.render(frame);
	      this._imageRenderer.render(frame);
	    }

	    /**
	     * Returns the background color for the QR code.
	     *
	     * @return {string} The background color.
	     * @public
	     */

	  }, {
	    key: 'background',
	    get: function get() {
	      return optionManager.get('background', this);
	    }

	    /**
	     * Sets the background color for the QR code to <code>background</code> and automatically updates this {@link QRious}
	     * if the underlying field is changed as a result.
	     *
	     * @param {string} [background="white"] - the background color to be set
	     * @public
	     */
	    ,
	    set: function set(background) {
	      if (optionManager.set('background', background, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the background alpha for the QR code.
	     *
	     * @return {number} The background alpha.
	     * @public
	     */

	  }, {
	    key: 'backgroundAlpha',
	    get: function get() {
	      return optionManager.get('backgroundAlpha', this);
	    }

	    /**
	     * Sets the background alpha for the QR code to <code>backgroundAlpha</code> and automatically updates this
	     * {@link QRious} if the underlying field is changed as a result.
	     *
	     * @param {number} [backgroundAlpha=1] - the background alpha to be set
	     * @public
	     */
	    ,
	    set: function set(backgroundAlpha) {
	      if (optionManager.set('backgroundAlpha', backgroundAlpha, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
	     *
	     * @return {*} The <code>canvas</code> element.
	     * @public
	     */

	  }, {
	    key: 'canvas',
	    get: function get() {
	      return this._canvasRenderer.getElement();
	    }

	    /**
	     * Returns the foreground color for the QR code.
	     *
	     * @return {string} The foreground color.
	     * @public
	     */

	  }, {
	    key: 'foreground',
	    get: function get() {
	      return optionManager.get('foreground', this);
	    }

	    /**
	     * Sets the foreground color for the QR code to <code>foreground</code> and automatically updates this {@link QRious}
	     * if the underlying field is changed as a result.
	     *
	     * @param {string} [foreground="black"] - the foreground color to be set
	     * @public
	     */
	    ,
	    set: function set(foreground) {
	      if (optionManager.set('foreground', foreground, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the foreground alpha for the QR code.
	     *
	     * @return {number} The foreground alpha.
	     * @public
	     */

	  }, {
	    key: 'foregroundAlpha',
	    get: function get() {
	      return optionManager.get('foregroundAlpha', this);
	    }

	    /**
	     * Sets the foreground alpha for the QR code to <code>foregroundAlpha</code> and automatically updates this
	     * {@link QRious} if the underlying field is changed as a result.
	     *
	     * @param {number} [foregroundAlpha=1] - the foreground alpha to be set
	     * @public
	     */
	    ,
	    set: function set(foregroundAlpha) {
	      if (optionManager.set('foregroundAlpha', foregroundAlpha, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
	     *
	     * @return {*} The <code>img</code> element.
	     * @public
	     */

	  }, {
	    key: 'image',
	    get: function get() {
	      return this._imageRenderer.getElement();
	    }

	    /**
	     * Returns the error correction level for the QR code.
	     *
	     * @return {string} The ECC level.
	     * @public
	     */

	  }, {
	    key: 'level',
	    get: function get() {
	      return optionManager.get('level', this);
	    }

	    /**
	     * Sets the error correction level for the QR code to <code>level</code> and automatically updates this {@link QRious}
	     * if the underlying field is changed as a result.
	     *
	     * <code>level</code> will be transformed to upper case to aid mapping to known ECC level blocks.
	     *
	     * @param {string} [level="L"] - the ECC level to be set
	     * @public
	     */
	    ,
	    set: function set(level) {
	      if (optionManager.set('level', level, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the MIME type for the image rendered for the QR code.
	     *
	     * @return {string} The image MIME type.
	     * @public
	     */

	  }, {
	    key: 'mime',
	    get: function get() {
	      return optionManager.get('mime', this);
	    }

	    /**
	     * Sets the MIME type for the image rendered for the QR code to <code>mime</code> and automatically updates this
	     * {@link QRious} if the underlying field is changed as a result.
	     *
	     * @param {string} [mime="image/png"] - the image MIME type to be set
	     * @public
	     */
	    ,
	    set: function set(mime) {
	      if (optionManager.set('mime', mime, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the padding for the QR code.
	     *
	     * @return {number} The padding in pixels.
	     * @public
	     */

	  }, {
	    key: 'padding',
	    get: function get() {
	      return optionManager.get('padding', this);
	    }

	    /**
	     * Sets the padding for the QR code to <code>padding</code> and automatically updates this {@link QRious} if the
	     * underlying field is changed as a result.
	     *
	     * <code>padding</code> will be transformed to ensure that it is always an absolute positive numbers (e.g.
	     * <code>-10</code> would become <code>10</code>).
	     *
	     * @param {number} [padding] - the padding in pixels to be set
	     * @public
	     */
	    ,
	    set: function set(padding) {
	      if (optionManager.set('padding', padding, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the size of the QR code.
	     *
	     * @return {number} The size in pixels.
	     * @public
	     */

	  }, {
	    key: 'size',
	    get: function get() {
	      return optionManager.get('size', this);
	    }

	    /**
	     * Sets the size of the QR code to <code>size</code> and automatically updates this {@link QRious} if the underlying
	     * field is changed as a result.
	     *
	     * <code>size</code> will be transformed to ensure that it is always an absolute positive numbers (e.g.
	     * <code>-100</code> would become <code>100</code>).
	     *
	     * @param {number} [size=100] - the size in pixels to be set
	     * @public
	     */
	    ,
	    set: function set(size) {
	      if (optionManager.set('size', size, this)) {
	        this.update();
	      }
	    }

	    /**
	     * Returns the value of the QR code.
	     *
	     * @return {string} The value.
	     * @public
	     */

	  }, {
	    key: 'value',
	    get: function get() {
	      return optionManager.get('value', this);
	    }

	    /**
	     * Sets the value of the QR code to <code>value</code> and automatically updates this {@link QRious} if the underlying
	     * field is changed as a result.
	     *
	     * @param {string} [value=""] - the value to be set
	     * @public
	     */
	    ,
	    set: function set(value) {
	      if (optionManager.set('value', value, this)) {
	        this.update();
	      }
	    }
	  }]);

	  return QRious;
	}();



	/**
	 * The options used by {@link QRious}.
	 *
	 * @typedef {Object} QRious~Options
	 * @property {string} [background="white"] - The background color to be applied to the QR code.
	 * @property {number} [backgroundAlpha=1] - The background alpha to be applied to the QR code.
	 * @property {*} [element] - The element to be used to render the QR code which may either be an <code>canvas</code> or
	 * <code>img</code>. The element(s) will be created if needed.
	 * @property {string} [foreground="black"] - The foreground color to be applied to the QR code.
	 * @property {number} [foregroundAlpha=1] - The foreground alpha to be applied to the QR code.
	 * @property {string} [level="L"] - The error correction level to be applied to the QR code.
	 * @property {string} [mime="image/png"] - The MIME type to be used to render the image for the QR code.
	 * @property {number} [padding] - The padding for the QR code in pixels.
	 * @property {number} [size=100] - The size of the QR code in pixels.
	 * @property {string} [value=""] - The value to be encoded within the QR code.
	 */

	/*
	 * QRious
	 * Copyright (C) 2017 Alasdair Mercer
	 * Copyright (C) 2010 Tom Zerucha
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU General Public License for more details.
	 *
	 * You should have received a copy of the GNU General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */

	QRious$1.use(new BrowserElementService());

	return QRious$1;

})));

//# sourceMappingURL=qrious.js.map

/***/ })

});
//# sourceMappingURL=default.module.chunk.js.map