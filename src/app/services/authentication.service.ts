import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from  'firebase';
import {first} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: firebase.User = null;
  constructor(
      private firebaseService: FirebaseService,
      public afAuth: AngularFireAuth,
    //  private loggedIn = false
  ) {}

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(
              res => resolve(res),
              err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
          .then(
              res => resolve(res),
              err => reject(err));
    });
 //   this.loggedIn = true;
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
          .then(() => {
            this.firebaseService.unsubscribeOnLogOut();
            resolve();
          }).catch((error) => {
        console.log(error);
        reject();
      });
    });
    // this.loggedIn = false;
  }
  // authenticated(): boolean {
   //  return this.isLoggedIn ;
  // }
 // isLoggedIn() {
   // return this.loggedIn;
 // }
//  isLoggedIn() {
  //  return this.afAuth.authState.pipe(first()).toPromise();
  //  }
}
