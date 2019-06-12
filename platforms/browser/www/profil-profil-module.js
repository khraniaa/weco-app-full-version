(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profil-profil-module"],{

/***/ "./src/app/profil/profil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/profil/profil.module.ts ***!
  \*****************************************/
/*! exports provided: ProfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profil.page */ "./src/app/profil/profil.page.ts");







var routes = [
    {
        path: '',
        component: _profil_page__WEBPACK_IMPORTED_MODULE_6__["ProfilPage"]
    }
];
var ProfilPageModule = /** @class */ (function () {
    function ProfilPageModule() {
    }
    ProfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_6__["ProfilPage"]]
        })
    ], ProfilPageModule);
    return ProfilPageModule;
}());



/***/ }),

/***/ "./src/app/profil/profil.page.html":
/*!*****************************************!*\
  !*** ./src/app/profil/profil.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"bleufonce\">\n    <ion-title>Profil</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding style=\"background: none;\">\n<div class=\"main\">\n  <div>\n<img style=\"width: 200px; height: 200px;\"  src=\"/assets/img/pro1.jpeg\">\n  </div>\n  <div style=\"margin-left: 20px\">\n<h1 style=\"color: #D71159\"> Cholé Marcelin</h1>\n    <p><strong>Age: </strong>25ans</p>\n    <p> <strong>Niveau:</strong> Sam Débutante</p>\n    <p><strong>Note:</strong> 4/5 - 3 avis **</p>\n  </div>\n</div>\n  <ion-button style=\"width: 48%;\"size=\"small\"  color=\"bleufonce\">Profil</ion-button>\n  <ion-button style=\"width: 48%;\"size=\"small\" color=\"bleufonce\">Compte</ion-button>\n  <p><strong>Préferences</strong></p>\n  <ion-icon color=\"red\" name=\"logo-no-smoking\"></ion-icon>\n  <ion-icon name=\"musical-notes\"></ion-icon>\n  <p><strong>Musique</strong></p>\n  <ion-button size=\"small\" color=\"bleufonce\">RAP</ion-button>\n  <ion-button size=\"small\" color=\"medium\">FLOK</ion-button>\n  <ion-button size=\"small\" color=\"bleufonce\">JAZZ</ion-button>\n  <ion-button size=\"small\" color=\"bleufonce\">RAI</ion-button>\n  <ion-button size=\"small\" color=\"medium\">ROCK</ion-button>\n  <ion-button size=\"small\" color=\"bleufonce\">DISCO</ion-button>\n  <p><strong>Lieu</strong></p>\n  <ion-button size=\"small\" color=\"bleufonce\">GLAMCLUB</ion-button>\n  <ion-button size=\"small\" color=\"medium\">1810</ion-button>\n  <ion-button size=\"small\" color=\"bleufonce\">LE CUB</ion-button>\n  <ion-button size=\"small\" color=\"bleufonce\">NOTILUS</ion-button>\n  <ion-button size=\"small\" color=\"medium\">LE SUCRE</ion-button>\n  <p><strong>Véhicule</strong></p>\n  <div class=\"main\">\n  <div>\n  <img style=\"width: 150px; height: 150px;\" src=\"/assets/img/voiture.jpg\">\n  </div>\n    <div style=\"margin-left: 20px\">\n      <h1> Fiat 500</h1>\n      <p> 4 Portes</p>\n      <p>Diesel</p>\n    </div>\n  </div>\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n  <ion-tab-button routerLink=\"/home\" tab=\"home\">\n    <ion-label>Accueil</ion-label>\n    <ion-icon name=\"home\" color=\"bleuclair\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button routerLink=\"/profil\" tab=\"person\">\n    <ion-icon name=\"person\" color=\"bleufonce\"></ion-icon>\n    <ion-label>Profil</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"text\">\n    <ion-icon name=\"text\" color=\"violett\"></ion-icon>\n    <ion-label>Message</ion-label>\n    <ion-badge>4</ion-badge>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"filing\">\n    <ion-icon name=\"filing\" color=\"noir\"></ion-icon>\n    <ion-label>Historique</ion-label>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"logout()\" tab=\"log-out\">\n    <ion-icon name=\"log-out\"></ion-icon>\n    <ion-label>Déconnexion</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/profil/profil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/profil/profil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbC9wcm9maWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profil/profil.page.ts":
/*!***************************************!*\
  !*** ./src/app/profil/profil.page.ts ***!
  \***************************************/
/*! exports provided: ProfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPage", function() { return ProfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilPage = /** @class */ (function () {
    function ProfilPage() {
    }
    ProfilPage.prototype.ngOnInit = function () {
    };
    ProfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(/*! ./profil.page.html */ "./src/app/profil/profil.page.html"),
            styles: [__webpack_require__(/*! ./profil.page.scss */ "./src/app/profil/profil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilPage);
    return ProfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=profil-profil-module.js.map