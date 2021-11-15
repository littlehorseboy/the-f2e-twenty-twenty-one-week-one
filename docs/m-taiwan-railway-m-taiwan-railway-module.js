(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["m-taiwan-railway-m-taiwan-railway-module"],{

/***/ "Gdp6":
/*!*********************************************************************!*\
  !*** ./src/app/m-taiwan-railway/m-taiwan-railway-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MTaiwanRailwayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTaiwanRailwayRoutingModule", function() { return MTaiwanRailwayRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _m_taiwan_railway_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m-taiwan-railway.component */ "zki5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _m_taiwan_railway_component__WEBPACK_IMPORTED_MODULE_1__["MTaiwanRailwayComponent"] }];
class MTaiwanRailwayRoutingModule {
}
MTaiwanRailwayRoutingModule.ɵfac = function MTaiwanRailwayRoutingModule_Factory(t) { return new (t || MTaiwanRailwayRoutingModule)(); };
MTaiwanRailwayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MTaiwanRailwayRoutingModule });
MTaiwanRailwayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MTaiwanRailwayRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "n064":
/*!*************************************************************!*\
  !*** ./src/app/m-taiwan-railway/m-taiwan-railway.module.ts ***!
  \*************************************************************/
/*! exports provided: MTaiwanRailwayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTaiwanRailwayModule", function() { return MTaiwanRailwayModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _m_taiwan_railway_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m-taiwan-railway-routing.module */ "Gdp6");
/* harmony import */ var _m_taiwan_railway_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./m-taiwan-railway.component */ "zki5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MTaiwanRailwayModule {
}
MTaiwanRailwayModule.ɵfac = function MTaiwanRailwayModule_Factory(t) { return new (t || MTaiwanRailwayModule)(); };
MTaiwanRailwayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MTaiwanRailwayModule });
MTaiwanRailwayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _m_taiwan_railway_routing_module__WEBPACK_IMPORTED_MODULE_1__["MTaiwanRailwayRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MTaiwanRailwayModule, { declarations: [_m_taiwan_railway_component__WEBPACK_IMPORTED_MODULE_2__["MTaiwanRailwayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _m_taiwan_railway_routing_module__WEBPACK_IMPORTED_MODULE_1__["MTaiwanRailwayRoutingModule"]] }); })();


/***/ }),

/***/ "zki5":
/*!****************************************************************!*\
  !*** ./src/app/m-taiwan-railway/m-taiwan-railway.component.ts ***!
  \****************************************************************/
/*! exports provided: MTaiwanRailwayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTaiwanRailwayComponent", function() { return MTaiwanRailwayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MTaiwanRailwayComponent {
    constructor() { }
    ngOnInit() {
    }
}
MTaiwanRailwayComponent.ɵfac = function MTaiwanRailwayComponent_Factory(t) { return new (t || MTaiwanRailwayComponent)(); };
MTaiwanRailwayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MTaiwanRailwayComponent, selectors: [["app-m-taiwan-railway"]], decls: 2, vars: 0, template: function MTaiwanRailwayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "m-taiwan-railway works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtLXRhaXdhbi1yYWlsd2F5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=m-taiwan-railway-m-taiwan-railway-module.js.map