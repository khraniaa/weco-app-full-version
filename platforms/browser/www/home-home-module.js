(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.resolver */ "./src/app/home/home.resolver.ts");








var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
        resolve: {
            data: _home_resolver__WEBPACK_IMPORTED_MODULE_7__["HomeResolver"]
        }
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            providers: [
                _home_resolver__WEBPACK_IMPORTED_MODULE_7__["HomeResolver"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header xmlns=\"http://www.w3.org/1999/html\" style=\"background-color: white; height: 95px;\">\n  <div padding style=\"display: flex; flex-direction: row;\">\n    <div style=\"float:left;\" >\n  <img src=\"/assets/img/logo.png\" style=\"height: 80px;padding-bottom: 10px;\"/>\n    </div>\n    <div style=\"text-align: center; padding-left: 15px; padding-top: 5px;\">\n    <strong>L'alcool s'élimine <strong style=\"color: #BD1550;\">lentement</strong>,<br> mais au volant il peut vous<br> éliminer\n      <strong style=\"color: #BD1550;\">trés vite !</strong>\n    </strong>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content style =\"background-image: url('/assets/img/page-daccueil.jpg');\">\n  <div *ngIf=\"\" >\n  <ion-button  routerLink=\"/login\" size=\"small\" color=\"bleufonce\" >Connexion</ion-button>\n  <ion-button  routerLink=\"/register\" size=\"small\" color=\"bleufonce\" >Inscription</ion-button>\n  </div>\n<div style=\"display: flex; flex-direction: row; justify-content:center; padding-top: 190px\">\n  <ul style=\"position: fixed;\">\n    <p><ion-button routerLink=\"/recherche-trajet\" size=\"small\"  padding color=\"violett\">Chercher un trajet</ion-button></p>\n    <p><ion-button routerLink=\"/proposer-trajet\" size=\"small\" [disabled]=\"\" padding color=\"bleuclair\">Proposer un trajet</ion-button></p>\n    <p><ion-button routerLink=\"/agenda-de-sortie\" size=\"small\" padding color=\"noir\">Agenda des sorties</ion-button></p>\n    <p><ion-button size=\"small\" padding color=\"bleufonce\">Demander un trajet</ion-button></p>\n  </ul>\n</div>\n</ion-content>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button routerLink=\"/home\" tab=\"home\">\n      <ion-label>Accueil</ion-label>\n      <ion-icon name=\"home\" color=\"bleuclair\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/profil\" tab=\"person\">\n      <ion-icon name=\"person\" color=\"bleufonce\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"text\">\n      <ion-icon name=\"text\" color=\"violett\"></ion-icon>\n      <ion-label>Message</ion-label>\n      <ion-badge>4</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"filing\">\n      <ion-icon name=\"filing\" color=\"noir\"></ion-icon>\n      <ion-label>Historique</ion-label>\n    </ion-tab-button>\n      <ion-tab-button (click)=\"logout()\" tab=\"log-out\">\n      <ion-icon name=\"log-out\"></ion-icon>\n          <ion-label>Déconnexion</ion-label>\n      </ion-tab-button>\n  </ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-list {\n  font-size: 22px;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 40px;\n  color: var(--ion-color-medium); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbmlhL21vbnByb2pldGlvbmljL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktbGlzdCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(loadingCtrl, authService, router, route, auth) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.auth = auth;
    }
    HomePage.prototype.ngOnInit = function () {
        //   if (this.route && this.route.data) {
        //   this.getData();
        // }
    };
    // async getData() {
    // const loading = await this.loadingCtrl.create({
    // message: 'Please wait...'
    // });
    // this.presentLoading(loading);
    // this.route.data.subscribe(routeData => {
    // routeData['data'].subscribe(data => {
    // loading.dismiss();
    // this.items = data;
    // });
    // });
    // }
    HomePage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate(['login']);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/home.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/home/home.resolver.ts ***!
  \***************************************/
/*! exports provided: HomeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolver", function() { return HomeResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var HomeResolver = /** @class */ (function () {
    function HomeResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    HomeResolver.prototype.resolve = function () {
        return this.firebaseService.getTasks();
    };
    HomeResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], HomeResolver);
    return HomeResolver;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map