import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import {AuthService} from './services/authentication.service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    user = null;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        public afAuth: AngularFireAuth,
        private nativeStorage: NativeStorage
    ) {
        this.initializeApp();
    }
    initializeApp() {
         this.platform.ready().then(() => {
             this.nativeStorage.getItem('google_user')
                 .then( data => {
                     this.router.navigate(['/user']);
                     this.splashScreen.hide();
                     }, err => {
                     this.router.navigate(['/login']);
                     this.splashScreen.hide();
                 })
             this.afAuth.user.subscribe(user => {
                 if (user) {
                    this.router.navigate(['/home']);
                } else {
                    this.router.navigate(['/login']);
                }
           }, err => {
                this.router.navigate(['/login']);
            }, () => {
                this.splashScreen.hide();
            })
             this.statusBar.styleDefault();
       });

        }
    }

