(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datepicker-button-datepicker-button-module"],{

/***/ "./src/app/datepicker-button/datepicker-button.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/datepicker-button/datepicker-button.module.ts ***!
  \***************************************************************/
/*! exports provided: DatepickerButtonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerButtonPageModule", function() { return DatepickerButtonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _datepicker_button_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-button.page */ "./src/app/datepicker-button/datepicker-button.page.ts");
/* harmony import */ var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @logisticinfotech/ionic4-datepicker */ "./node_modules/@logisticinfotech/ionic4-datepicker/fesm5/logisticinfotech-ionic4-datepicker.js");








var routes = [
    {
        path: '',
        component: _datepicker_button_page__WEBPACK_IMPORTED_MODULE_6__["DatepickerButtonPage"]
    }
];
var DatepickerButtonPageModule = /** @class */ (function () {
    function DatepickerButtonPageModule() {
    }
    DatepickerButtonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__["Ionic4DatepickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_datepicker_button_page__WEBPACK_IMPORTED_MODULE_6__["DatepickerButtonPage"]]
        })
    ], DatepickerButtonPageModule);
    return DatepickerButtonPageModule;
}());



/***/ }),

/***/ "./src/app/datepicker-button/datepicker-button.page.html":
/*!***************************************************************!*\
  !*** ./src/app/datepicker-button/datepicker-button.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>DatePicker using Button</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-col size=\"10\">\n          <ion-input readonly [(ngModel)]=\"selectedDate\"></ion-input>\n        </ion-col>\n      </ion-item>\n      <ion-col size=\"2\">\n        <ion-button (click)=\"openDatePicker()\">Date</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/datepicker-button/datepicker-button.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/datepicker-button/datepicker-button.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-width: 0;\n  --inner-border-width: 0;\n  --show-full-highlight: 0;\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbmlhL21vbnByb2pldGlvbmljL3NyYy9hcHAvZGF0ZXBpY2tlci1idXR0b24vZGF0ZXBpY2tlci1idXR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWU7RUFDZix1QkFBcUI7RUFDckIsd0JBQXNCO0VBQ3RCLGtCQUFnQjtFQUNoQixzQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RhdGVwaWNrZXItYnV0dG9uL2RhdGVwaWNrZXItYnV0dG9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/datepicker-button/datepicker-button.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/datepicker-button/datepicker-button.page.ts ***!
  \*************************************************************/
/*! exports provided: DatepickerButtonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerButtonPage", function() { return DatepickerButtonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @logisticinfotech/ionic4-datepicker */ "./node_modules/@logisticinfotech/ionic4-datepicker/fesm5/logisticinfotech-ionic4-datepicker.js");




var DatepickerButtonPage = /** @class */ (function () {
    function DatepickerButtonPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.datePickerObj = {};
        this.monthsList = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this.weeksList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
    DatepickerButtonPage.prototype.ngOnInit = function () {
        var disabledDates = [
            new Date(1545911005644),
            new Date(),
            new Date(2018, 12, 12),
            new Date('Wednesday, December 26, 2018'),
            new Date('12-14-2018') // Short format
        ];
        this.datePickerObj = {
            // inputDate: new Date('12'), // If you want to set month in dateObject of date-picker
            // inputDate: new Date('2018'), // If you want to set year in dateObject of date-picker
            // inputDate: new Date('2018-12'), // If you want to set year & month in dateObject of date-picker
            // inputDate: new Date('2018-12-01'), // If you want to set date in dateObject of date-picker
            // inputDate: '12', // If you want to set date as a string in date-picker
            // inputDate: '2018', // If you want to set date as a string in date-picker
            // inputDate: '2018-12', // If you want to set date as a string in date-picker
            // inputDate: '2018-12-12', // If you want to set date as a string in date-picker
            // inputDate: moment(new Date('12')), // If you want to set date as a moment object in date-picker
            // inputDate: moment(new Date('2018')), // If you want to set date as a moment object in date-picker
            // inputDate: moment(new Date('2018-12')), // If you want to set date as a moment object in date-picker
            // inputDate: moment(new Date('2018-12-12')), // If you want to set date as a moment object in date-picker
            // fromDate: new Date('2019-03-05'), // need this in order to have toDate
            // toDate: new Date('2019-03-28'),
            // showTodayButton: false,
            // closeOnSelect: true,
            // disableWeekDays: [],
            // mondayFirst: true,
            // setLabel: 'Select a Date',
            // todayLabel: 'Today',
            // closeLabel: 'Close',
            // disabledDates: [],
            // titleLabel: 'Select a Date',
            // monthsList: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            // weeksList: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
            dateFormat: 'YYYY-MM-DD',
            // clearButton: false,
            // momentLocale: 'pt-BR',
            // yearInAscending: true,
            // btnCloseSetInReverse: true,
            btnProperties: {
                expand: 'block',
                fill: '',
                size: '',
                disabled: '',
                strong: '',
                color: ''
                // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
            }
        };
    };
    DatepickerButtonPage.prototype.openDatePicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var datePickerModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_3__["Ionic4DatepickerModalComponent"],
                            cssClass: 'li-ionic4-datePicker',
                            componentProps: { objConfig: this.datePickerObj }
                        })];
                    case 1:
                        datePickerModal = _a.sent();
                        return [4 /*yield*/, datePickerModal.present()];
                    case 2:
                        _a.sent();
                        datePickerModal.onDidDismiss().then(function (data) {
                            // this.isModalOpen = false;
                            console.log(data);
                            _this.selectedDate = data.data.date;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DatepickerButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker-button',
            template: __webpack_require__(/*! ./datepicker-button.page.html */ "./src/app/datepicker-button/datepicker-button.page.html"),
            styles: [__webpack_require__(/*! ./datepicker-button.page.scss */ "./src/app/datepicker-button/datepicker-button.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], DatepickerButtonPage);
    return DatepickerButtonPage;
}());



/***/ })

}]);
//# sourceMappingURL=datepicker-button-datepicker-button-module.js.map