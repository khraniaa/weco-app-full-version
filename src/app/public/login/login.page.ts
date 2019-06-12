import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
// import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
 import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
      private authService: AuthService,
      private formBuilder: FormBuilder,
      private googlePlus: GooglePlus,
      private nativeStorage: NativeStorage,
      public loadingController: LoadingController,
      private router: Router,
      private platform: Platform,
      public alertController: AlertController,

  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  tryLogin(value) {
    this.authService.doLogin (value)
        .then(res => {
          // this.router.navigate(['/home']);
          console.log('You are logged in.');
          this.errorMessage = '';
        }, err => {
          this.errorMessage = err.message;
          console.log(err);
        });
    // this.router.navigate(['/home']);
  }

  goRegisterPage() {
    this.router.navigate(['/register']);
  }
}

