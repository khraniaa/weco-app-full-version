(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publier-trajet-publier-trajet-module"],{

/***/ "./src/app/publier-trajet/publier-trajet.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/publier-trajet/publier-trajet.module.ts ***!
  \*********************************************************/
/*! exports provided: PublierTrajetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublierTrajetPageModule", function() { return PublierTrajetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _publier_trajet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publier-trajet.page */ "./src/app/publier-trajet/publier-trajet.page.ts");







var routes = [
    {
        path: '',
        component: _publier_trajet_page__WEBPACK_IMPORTED_MODULE_6__["PublierTrajetPage"]
    }
];
var PublierTrajetPageModule = /** @class */ (function () {
    function PublierTrajetPageModule() {
    }
    PublierTrajetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_publier_trajet_page__WEBPACK_IMPORTED_MODULE_6__["PublierTrajetPage"]]
        })
    ], PublierTrajetPageModule);
    return PublierTrajetPageModule;
}());



/***/ }),

/***/ "./src/app/publier-trajet/publier-trajet.page.html":
/*!*********************************************************!*\
  !*** ./src/app/publier-trajet/publier-trajet.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-header>\n  <ion-toolbar color=\"bleuclair\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"//villes-etape\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Publier le trajet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding style=\"background: none;\">\n<h1> Bilan de trajet</h1>\n  <p>Départ à: </p>\n  <p>Arrivé prévue: </p>\n  <p>Durée: </p>\n  <p> Distance: </p>\n  <p>Péage: 0 € </p>\n  <p>Prix: <ion-icon (click)=\"decrement()\" style=\"\" name=\"remove-circle\" color=\"bleuclair\"></ion-icon> {{currentNumber}} € </p>\n  <ion-button size=\"small\" style=\"float: right;\" routerLink=\"/resultat-de-recherche\" color=\"bleuclair\"> Publier</ion-button>\n</ion-content>\n\n <ion-tab-bar slot=\"bottom\">\n   <ion-tab-button routerLink=\"/home\" tab=\"home\">\n     <ion-label>Accueil</ion-label>\n     <ion-icon name=\"home\" color=\"bleuclair\"></ion-icon>\n   </ion-tab-button>\n\n   <ion-tab-button routerLink=\"/profil\" tab=\"person\">\n     <ion-icon name=\"person\" color=\"bleufonce\"></ion-icon>\n     <ion-label>Profil</ion-label>\n   </ion-tab-button>\n\n   <ion-tab-button tab=\"text\">\n     <ion-icon name=\"text\" color=\"violett\"></ion-icon>\n     <ion-label>Message</ion-label>\n     <ion-badge>4</ion-badge>\n   </ion-tab-button>\n\n   <ion-tab-button tab=\"filing\">\n     <ion-icon name=\"filing\" color=\"noir\"></ion-icon>\n     <ion-label>Historique</ion-label>\n   </ion-tab-button>\n   <ion-tab-button (click)=\"logout()\" tab=\"log-out\">\n     <ion-icon name=\"log-out\"></ion-icon>\n     <ion-label>Déconnexion</ion-label>\n   </ion-tab-button>\n </ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/publier-trajet/publier-trajet.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/publier-trajet/publier-trajet.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpZXItdHJhamV0L3B1YmxpZXItdHJhamV0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/publier-trajet/publier-trajet.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/publier-trajet/publier-trajet.page.ts ***!
  \*******************************************************/
/*! exports provided: PublierTrajetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublierTrajetPage", function() { return PublierTrajetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublierTrajetPage = /** @class */ (function () {
    function PublierTrajetPage() {
        this.currentNumber = 5;
    }
    PublierTrajetPage.prototype.decrement = function () {
        this.currentNumber--;
    };
    PublierTrajetPage.prototype.ngOnInit = function () {
    };
    PublierTrajetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publier-trajet',
            template: __webpack_require__(/*! ./publier-trajet.page.html */ "./src/app/publier-trajet/publier-trajet.page.html"),
            styles: [__webpack_require__(/*! ./publier-trajet.page.scss */ "./src/app/publier-trajet/publier-trajet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublierTrajetPage);
    return PublierTrajetPage;
}());



/***/ })

}]);
//# sourceMappingURL=publier-trajet-publier-trajet-module.js.map