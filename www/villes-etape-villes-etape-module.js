(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["villes-etape-villes-etape-module"],{

/***/ "./src/app/villes-etape/villes-etape.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/villes-etape/villes-etape.module.ts ***!
  \*****************************************************/
/*! exports provided: VillesEtapePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillesEtapePageModule", function() { return VillesEtapePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _villes_etape_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./villes-etape.page */ "./src/app/villes-etape/villes-etape.page.ts");







var routes = [
    {
        path: '',
        component: _villes_etape_page__WEBPACK_IMPORTED_MODULE_6__["VillesEtapePage"]
    }
];
var VillesEtapePageModule = /** @class */ (function () {
    function VillesEtapePageModule() {
    }
    VillesEtapePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_villes_etape_page__WEBPACK_IMPORTED_MODULE_6__["VillesEtapePage"]]
        })
    ], VillesEtapePageModule);
    return VillesEtapePageModule;
}());



/***/ }),

/***/ "./src/app/villes-etape/villes-etape.page.html":
/*!*****************************************************!*\
  !*** ./src/app/villes-etape/villes-etape.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"bleuclair\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/proposer-trajet\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Villes étape</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding style=\"background: none;\">\n  <div style=\"display: inline-block\">\n  <ion-input type=\"text\" placeholder=\"Ajouter une ville\"></ion-input>\n  <ion-button color=\"bleuclair\" size=\"small\"> Ajouter </ion-button>\n  </div>\n  <p><strong>Options</strong></p>\n  <p>Eviter les autoroutes &nbsp;<ion-checkbox color=\"bleuclair\"></ion-checkbox></p>\n  <p>Eviter les péages &nbsp;<ion-checkbox color=\"bleuclair\"></ion-checkbox></p>\n  <p>Eviter les les péripheriques &nbsp;<ion-checkbox color=\"bleuclair\"></ion-checkbox></p>\n  <ion-button size =\"small\" style=\"float: right; \" routerLink=\"/publier-trajet\" color=\"bleuclair\"> Suivant</ion-button>\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n  <ion-tab-button routerLink=\"/home\" tab=\"home\">\n    <ion-label>Accueil</ion-label>\n    <ion-icon name=\"home\" color=\"bleuclair\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button routerLink=\"/profil\" tab=\"person\">\n    <ion-icon name=\"person\" color=\"bleufonce\"></ion-icon>\n    <ion-label>Profil</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"text\">\n    <ion-icon name=\"text\" color=\"violett\"></ion-icon>\n    <ion-label>Message</ion-label>\n    <ion-badge>4</ion-badge>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"filing\">\n    <ion-icon name=\"filing\" color=\"noir\"></ion-icon>\n    <ion-label>Historique</ion-label>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"logout()\" tab=\"log-out\">\n    <ion-icon name=\"log-out\"></ion-icon>\n    <ion-label>Déconnexion</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/villes-etape/villes-etape.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/villes-etape/villes-etape.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpbGxlcy1ldGFwZS92aWxsZXMtZXRhcGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/villes-etape/villes-etape.page.ts":
/*!***************************************************!*\
  !*** ./src/app/villes-etape/villes-etape.page.ts ***!
  \***************************************************/
/*! exports provided: VillesEtapePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillesEtapePage", function() { return VillesEtapePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VillesEtapePage = /** @class */ (function () {
    function VillesEtapePage() {
    }
    VillesEtapePage.prototype.ngOnInit = function () {
    };
    VillesEtapePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-villes-etape',
            template: __webpack_require__(/*! ./villes-etape.page.html */ "./src/app/villes-etape/villes-etape.page.html"),
            styles: [__webpack_require__(/*! ./villes-etape.page.scss */ "./src/app/villes-etape/villes-etape.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VillesEtapePage);
    return VillesEtapePage;
}());



/***/ })

}]);
//# sourceMappingURL=villes-etape-villes-etape-module.js.map