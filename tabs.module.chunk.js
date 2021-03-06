webpackJsonp(["tabs.module"],{

/***/ "../../../../../src/app/theme/ui-elements/basic/tabs/tabs-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_component__ = __webpack_require__("../../../../../src/app/theme/ui-elements/basic/tabs/tabs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__tabs_component__["a" /* TabsComponent */],
        data: {
            title: 'Tabs',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tabs',
            status: true
        }
    }
];
var TabsRoutingModule = (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Bootstrap tab card start -->\n    <app-card [title]=\"'Bootstrap tab'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-xl-6\">\n          <div class=\"sub-title\">Default</div>\n          <ngb-tabset>\n            <ngb-tab title=\"Home\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Profile\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Messages\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Settings\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n        <div class=\"col-md-12 col-xl-6\">\n          <div class=\"sub-title\">Below Tabs</div>\n          <div class=\"below-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Home\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Profile\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Messages\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Settings\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Bootstrap tab card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Material tab card start -->\n    <app-card [title]=\"'Material tab'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row m-b-30\">\n        <div class=\"col-md-12 col-xl-6\">\n          <div class=\"sub-title\">Default</div>\n          <div class=\"md-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Home\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Profile\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Messages\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Settings\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n        <div class=\"col-md-12 col-xl-6\">\n          <div class=\"sub-title\">BELOW TAB</div>\n          <div class=\"md-tabs md-below-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Home\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Profile\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Messages\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Settings\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 col-xl-6\">\n          <div class=\"sub-title\">LEFT TAB</div>\n          <div class=\"md-tabs md-left-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Home\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Profile\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Messages\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Settings\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n        <div class=\"col-md-12 col-xl-6\">\n          <div class=\"sub-title\">Right TAB</div>\n          <div class=\"md-tabs md-right-tabs\">\n            <ngb-tabset>\n              <ngb-tab title=\"Home\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Profile\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Messages\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab title=\"Settings\">\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Material tab card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Tab variant tab card start -->\n    <app-card [title]=\"'Tab variant'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'tab-icon'\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <div class=\"sub-title\">Tab With Icon</div>\n          <div class=\"md-tabs\">\n            <ngb-tabset>\n              <ngb-tab>\n                <ng-template ngbTabTitle><i class=\"icofont icofont-home\"></i>Home</ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab>\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-user \"></i>Profile</ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab>\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-message\"></i>Messages</ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab>\n                <ng-template ngbTabTitle><i class=\"icofont icofont-ui-settings\"></i>Settings</ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <div class=\"sub-title\">Tab With Images</div>\n          <div class=\"md-tabs md-image-tab\">\n            <ngb-tabset>\n              <ngb-tab>\n                <ng-template ngbTabTitle>\n                  <img src=\"assets/images/avatar-5.jpg\" class=\"img-fluid img-circle\" alt=\"\">\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\n                </ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab>\n                <ng-template ngbTabTitle>\n                  <img src=\"assets/images/avatar-2.jpg\" class=\"img-fluid img-circle\" alt=\"\">\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\n                </ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">2. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab>\n                <ng-template ngbTabTitle>\n                  <img src=\"assets/images/avatar-3.jpg\" class=\"img-fluid img-circle\" alt=\"\">\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\n                </ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab>\n                <ng-template ngbTabTitle>\n                  <img src=\"assets/images/avatar-2.jpg\" class=\"img-fluid img-circle\" alt=\"\">\n                  <span class=\"quote\"><i class=\"icofont icofont-quote-left bg-primary\"></i></span>\n                </ng-template>\n                <ng-template ngbTabContent>\n                  <div [@fadeInOutTranslate] class=\"m-t-15\">\n                    <p class=\"m-4\">4. Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>\n                  </div>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Tab variant tab card start -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__("../../../../../src/app/theme/ui-elements/basic/tabs/tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/ui-elements/basic/tabs/tabs.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
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
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/tabs/tabs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_component__ = __webpack_require__("../../../../../src/app/theme/ui-elements/basic/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_routing_module__ = __webpack_require__("../../../../../src/app/theme/ui-elements/basic/tabs/tabs-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__tabs_routing_module__["a" /* TabsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs_component__["a" /* TabsComponent */]]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ })

});
//# sourceMappingURL=tabs.module.chunk.js.map