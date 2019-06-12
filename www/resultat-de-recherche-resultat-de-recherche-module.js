(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultat-de-recherche-resultat-de-recherche-module"],{

/***/ "./src/app/resultat-de-recherche/resultat-de-recherche.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resultat-de-recherche/resultat-de-recherche.module.ts ***!
  \***********************************************************************/
/*! exports provided: ResultatDeRecherchePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultatDeRecherchePageModule", function() { return ResultatDeRecherchePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resultat_de_recherche_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resultat-de-recherche.page */ "./src/app/resultat-de-recherche/resultat-de-recherche.page.ts");








var routes = [
    {
        path: '',
        component: _resultat_de_recherche_page__WEBPACK_IMPORTED_MODULE_7__["ResultatDeRecherchePage"]
    }
];
var ResultatDeRecherchePageModule = /** @class */ (function () {
    function ResultatDeRecherchePageModule() {
    }
    ResultatDeRecherchePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__["NgCalendarModule"]
            ],
            declarations: [_resultat_de_recherche_page__WEBPACK_IMPORTED_MODULE_7__["ResultatDeRecherchePage"]]
        })
    ], ResultatDeRecherchePageModule);
    return ResultatDeRecherchePageModule;
}());



/***/ }),

/***/ "./src/app/resultat-de-recherche/resultat-de-recherche.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/resultat-de-recherche/resultat-de-recherche.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"violett\">\n    <ion-title> Resultat de la recherche</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recherche-trajet\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background: none;\" padding>\n  <calendar\n          [eventSource]=\"eventSource\"\n          [calendarMode]=\"calendar.mode\"\n          [currentDate]=\"calendar.currentDate\"\n          (onEventSelected)=\"onEventSelected($event)\"\n          (onTitleChanged)=\"onViewTitleChanged($event)\"\n          (onTimeSelected)=\"onTimeSelected($event)\"\n          startHour=\"6\"\n          endHour=\"20\"\n          step=\"30\"\n          startingDayWeek=\"1\">\n  </calendar>\n\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n  <ion-tab-button routerLink=\"/home\" tab=\"home\">\n    <ion-label>Accueil</ion-label>\n    <ion-icon name=\"home\" color=\"bleuclair\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button routerLink=\"/profil\" tab=\"person\">\n    <ion-icon name=\"person\" color=\"bleufonce\"></ion-icon>\n    <ion-label>Profil</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"text\">\n    <ion-icon name=\"text\" color=\"violett\"></ion-icon>\n    <ion-label>Message</ion-label>\n    <ion-badge>4</ion-badge>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"filing\">\n    <ion-icon name=\"filing\" color=\"noir\"></ion-icon>\n    <ion-label>Historique</ion-label>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"logout()\" tab=\"log-out\">\n    <ion-icon name=\"log-out\"></ion-icon>\n    <ion-label>Déconnexion</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/resultat-de-recherche/resultat-de-recherche.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/resultat-de-recherche/resultat-de-recherche.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGF0LWRlLXJlY2hlcmNoZS9yZXN1bHRhdC1kZS1yZWNoZXJjaGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/resultat-de-recherche/resultat-de-recherche.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/resultat-de-recherche/resultat-de-recherche.page.ts ***!
  \*********************************************************************/
/*! exports provided: ResultatDeRecherchePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultatDeRecherchePage", function() { return ResultatDeRecherchePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ResultatDeRecherchePage = /** @class */ (function () {
    function ResultatDeRecherchePage(alertCtrl, locale) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    ResultatDeRecherchePage.prototype.ngOnInit = function () {
        this.resetEvent();
    };
    ResultatDeRecherchePage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    };
    // Create the right event format and reload source
    ResultatDeRecherchePage.prototype.addEvent = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    // Change current month/week/day
    ResultatDeRecherchePage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    ResultatDeRecherchePage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    // Change between month/week/day
    ResultatDeRecherchePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    // Focus today
    ResultatDeRecherchePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    // Selected date reange and hence title changed
    ResultatDeRecherchePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    // Calendar event was clicked
    ResultatDeRecherchePage.prototype.onEventSelected = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var start, end, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.startTime, 'medium', this.locale);
                        end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.endTime, 'medium', this.locale);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: event.desc,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Time slot was clicked
    ResultatDeRecherchePage.prototype.onTimeSelected = function (ev) {
        var selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"])
    ], ResultatDeRecherchePage.prototype, "myCal", void 0);
    ResultatDeRecherchePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-resultat-de-recherche',
            template: __webpack_require__(/*! ./resultat-de-recherche.page.html */ "./src/app/resultat-de-recherche/resultat-de-recherche.page.html"),
            styles: [__webpack_require__(/*! ./resultat-de-recherche.page.scss */ "./src/app/resultat-de-recherche/resultat-de-recherche.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], String])
    ], ResultatDeRecherchePage);
    return ResultatDeRecherchePage;
}());



/***/ })

}]);
//# sourceMappingURL=resultat-de-recherche-resultat-de-recherche-module.js.map