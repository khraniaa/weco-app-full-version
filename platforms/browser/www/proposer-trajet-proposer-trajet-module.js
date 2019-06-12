(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proposer-trajet-proposer-trajet-module"],{

/***/ "./src/app/proposer-trajet/proposer-trajet.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/proposer-trajet/proposer-trajet.module.ts ***!
  \***********************************************************/
/*! exports provided: ProposerTrajetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposerTrajetPageModule", function() { return ProposerTrajetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _proposer_trajet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proposer-trajet.page */ "./src/app/proposer-trajet/proposer-trajet.page.ts");
/* harmony import */ var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @logisticinfotech/ionic4-datepicker */ "./node_modules/@logisticinfotech/ionic4-datepicker/fesm5/logisticinfotech-ionic4-datepicker.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var routes = [
    {
        path: '',
        component: _proposer_trajet_page__WEBPACK_IMPORTED_MODULE_6__["ProposerTrajetPage"]
    }
];
var ProposerTrajetPageModule = /** @class */ (function () {
    function ProposerTrajetPageModule() {
    }
    ProposerTrajetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__["Ionic4DatepickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_8__["MbscModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientJsonpModule"]
            ],
            declarations: [_proposer_trajet_page__WEBPACK_IMPORTED_MODULE_6__["ProposerTrajetPage"]]
        })
    ], ProposerTrajetPageModule);
    return ProposerTrajetPageModule;
}());



/***/ }),

/***/ "./src/app/proposer-trajet/proposer-trajet.page.html":
/*!***********************************************************!*\
  !*** ./src/app/proposer-trajet/proposer-trajet.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"bleuclair\">\n    <ion-title>Proposer un trajet</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content padding style=\"background: white;\">\n     Lieu de départ: <ion-searchbar placeholder=\"Exemple: Lyon-Part Dieu, Gare-perrache\"></ion-searchbar>\n    Lieu d'arrivé: <ion-searchbar animated placeholder=\"Exemple: Lyon-Part Dieu, Gare-perrache\"></ion-searchbar>\n    <mbsc-form-group  style=\"background: white;\">\n   Date <mbsc-calendar [(ngModel)]=\"calendarCenter\" [options]=\"calendarCenterSettings\" placeholder=\"Choisiez votre date\"></mbsc-calendar>\n    </mbsc-form-group>\n    Départ à <ion-datetime style=\" border-bottom: 1px solid #6d6d6d;width: 98.5%;\" placeholder=\"Choisiez votre heure de départ\" display-format=\"HH : mm \"></ion-datetime>\n    <br>\n    Nombre des personnes: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n    <ion-icon (click)=\"decrement()\" style=\"\" name=\"remove-circle\" color=\"bleuclair\"></ion-icon> {{currentNumber}}\n    <ion-icon (click)=\"increment()\"  style=\"\" name=\"add-circle\" color=\"bleuclair\"></ion-icon><br><br>\n    Aller simple &nbsp; <ion-checkbox color=\"bleuclair\"></ion-checkbox>&nbsp; &nbsp;\n      Aller-retour &nbsp; <ion-checkbox color=\"bleuclair\"></ion-checkbox><br>\n    Maximum 2 à l'arrière &nbsp; <ion-checkbox color=\"bleuclair\"></ion-checkbox><br>\n    Voyager entre femmes &nbsp; <ion-checkbox color=\"bleuclair\"></ion-checkbox><br>\n    <ion-button size=\"small\" style=\"float: right; \" routerLink=\"/villes-etape\" color=\"bleuclair\"> Suivant</ion-button>\n  </ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n  <ion-tab-button routerLink=\"/home\" tab=\"home\">\n    <ion-label>Accueil</ion-label>\n    <ion-icon name=\"home\" color=\"bleuclair\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button routerLink=\"/profil\" tab=\"person\">\n    <ion-icon name=\"person\" color=\"bleufonce\"></ion-icon>\n    <ion-label>Profil</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"text\">\n    <ion-icon name=\"text\" color=\"violett\"></ion-icon>\n    <ion-label>Message</ion-label>\n    <ion-badge>4</ion-badge>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"filing\">\n    <ion-icon name=\"filing\" color=\"noir\"></ion-icon>\n    <ion-label>Historique</ion-label>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"logout()\" tab=\"log-out\">\n    <ion-icon name=\"log-out\"></ion-icon>\n    <ion-label>Déconnexion</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/proposer-trajet/proposer-trajet.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/proposer-trajet/proposer-trajet.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3Bvc2VyLXRyYWpldC9wcm9wb3Nlci10cmFqZXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/proposer-trajet/proposer-trajet.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/proposer-trajet/proposer-trajet.page.ts ***!
  \*********************************************************/
/*! exports provided: ProposerTrajetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposerTrajetPage", function() { return ProposerTrajetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProposerTrajetPage = /** @class */ (function () {
    function ProposerTrajetPage() {
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
    ProposerTrajetPage.prototype.increment = function () {
        this.currentNumber++;
    };
    ProposerTrajetPage.prototype.decrement = function () {
        this.currentNumber--;
    };
    ProposerTrajetPage.prototype.ngOnInit = function () {
    };
    ProposerTrajetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proposer-trajet',
            template: __webpack_require__(/*! ./proposer-trajet.page.html */ "./src/app/proposer-trajet/proposer-trajet.page.html"),
            styles: [__webpack_require__(/*! ./proposer-trajet.page.scss */ "./src/app/proposer-trajet/proposer-trajet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProposerTrajetPage);
    return ProposerTrajetPage;
}());



/***/ })

}]);
//# sourceMappingURL=proposer-trajet-proposer-trajet-module.js.map