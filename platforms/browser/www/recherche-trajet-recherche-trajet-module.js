(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recherche-trajet-recherche-trajet-module"],{

/***/ "./src/app/recherche-trajet/recherche-trajet.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/recherche-trajet/recherche-trajet.module.ts ***!
  \*************************************************************/
/*! exports provided: RechercheTrajetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheTrajetPageModule", function() { return RechercheTrajetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _recherche_trajet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recherche-trajet.page */ "./src/app/recherche-trajet/recherche-trajet.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var routes = [
    {
        path: '',
        component: _recherche_trajet_page__WEBPACK_IMPORTED_MODULE_5__["RechercheTrajetPage"]
    }
];
var RechercheTrajetPageModule = /** @class */ (function () {
    function RechercheTrajetPageModule() {
    }
    RechercheTrajetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                // BrowserModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_4__["MbscModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"]
            ],
            declarations: [_recherche_trajet_page__WEBPACK_IMPORTED_MODULE_5__["RechercheTrajetPage"]]
        })
    ], RechercheTrajetPageModule);
    return RechercheTrajetPageModule;
}());



/***/ }),

/***/ "./src/app/recherche-trajet/recherche-trajet.page.html":
/*!*************************************************************!*\
  !*** ./src/app/recherche-trajet/recherche-trajet.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"violett\">\n        <ion-title>Rechercher un trajet</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    Lieu de départ: <ion-searchbar placeholder=\"Exemple: Lyon-Part Dieu, Gare-perrache\"></ion-searchbar>\n    Lieu d'arrivé: <ion-searchbar animated placeholder=\"Exemple: Lyon-Part Dieu, Gare-perrache\"></ion-searchbar>\n        <mbsc-form-group  style=\"background: white;\">\n            <mbsc-calendar [(ngModel)]=\"calendarCenter\" [options]=\"calendarCenterSettings\" placeholder=\"Choisiez votre date\">Date</mbsc-calendar>\n        </mbsc-form-group>\n       Départ à <ion-datetime style=\" border-bottom: 1px solid #6d6d6d;\" placeholder=\"Choisiez votre heure de départ\" display-format=\"HH : mm \"></ion-datetime>\n    <br>\nNombre des personnes: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n    <ion-icon (click)=\"decrement()\" style=\"\" name=\"remove-circle\" color=\"violett\"></ion-icon> {{currentNumber}}\n    <ion-icon (click)=\"increment()\"  style=\"\" name=\"add-circle\" color=\"violett\"></ion-icon><br><br>\nAller simple &nbsp; <ion-checkbox color=\"violett\"></ion-checkbox>&nbsp; &nbsp;\n    Aller-retour &nbsp; <ion-checkbox color=\"violett\"></ion-checkbox><br>\nMaximum 2 à l'arrière &nbsp; <ion-checkbox color=\"violett\"></ion-checkbox><br>\nVoyager entre femmes &nbsp; <ion-checkbox color=\"violett\"></ion-checkbox><br>\n<ion-button size=\"small\" style=\"float: right; \" routerLink=\"/villes-etape\" color=\"violett\"> Suivant</ion-button>\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button routerLink=\"/home\" tab=\"home\">\n        <ion-label>Accueil</ion-label>\n        <ion-icon name=\"home\" color=\"bleuclair\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/profil\" tab=\"person\">\n        <ion-icon name=\"person\" color=\"bleufonce\"></ion-icon>\n        <ion-label>Profil</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"text\">\n        <ion-icon name=\"text\" color=\"violett\"></ion-icon>\n        <ion-label>Message</ion-label>\n        <ion-badge>4</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"filing\">\n        <ion-icon name=\"filing\" color=\"noir\"></ion-icon>\n        <ion-label>Historique</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\" tab=\"log-out\">\n        <ion-icon name=\"log-out\"></ion-icon>\n        <ion-label>Déconnexion</ion-label>\n    </ion-tab-button>\n</ion-tab-bar>\n\n"

/***/ }),

/***/ "./src/app/recherche-trajet/recherche-trajet.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/recherche-trajet/recherche-trajet.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2hlcmNoZS10cmFqZXQvcmVjaGVyY2hlLXRyYWpldC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recherche-trajet/recherche-trajet.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/recherche-trajet/recherche-trajet.page.ts ***!
  \***********************************************************/
/*! exports provided: RechercheTrajetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheTrajetPage", function() { return RechercheTrajetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");



_mobiscroll_angular__WEBPACK_IMPORTED_MODULE_2__["mobiscroll"].settings = {
    lang: 'fr',
    theme: 'material',
    display: 'bubble'
};
var now = new Date();
var RechercheTrajetPage = /** @class */ (function () {
    function RechercheTrajetPage() {
        this.calendarBottomSettings = {
            display: 'bottom'
        };
        this.calendarTopSettings = {
            display: 'top'
        };
        this.calendarCenterSettings = {
            display: 'center'
        };
        this.calendarBubbleSettings = {
            display: 'bubble'
        };
        this.calendarFullscreenSettings = {
            display: 'center',
            layout: 'liquid'
        };
        this.calendarInlineSettings = {
            display: 'inline'
        };
        this.currentNumber = 0;
    }
    RechercheTrajetPage.prototype.increment = function () {
        this.currentNumber++;
    };
    RechercheTrajetPage.prototype.decrement = function () {
        this.currentNumber--;
    };
    RechercheTrajetPage.prototype.ngOnInit = function () {
    };
    RechercheTrajetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recherche-trajet',
            template: __webpack_require__(/*! ./recherche-trajet.page.html */ "./src/app/recherche-trajet/recherche-trajet.page.html"),
            styles: [__webpack_require__(/*! ./recherche-trajet.page.scss */ "./src/app/recherche-trajet/recherche-trajet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RechercheTrajetPage);
    return RechercheTrajetPage;
}());



/***/ })

}]);
//# sourceMappingURL=recherche-trajet-recherche-trajet-module.js.map