import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProposerTrajetPage } from './proposer-trajet.page';
import {Ionic4DatepickerModule} from '@logisticinfotech/ionic4-datepicker';
import {MbscModule} from '@mobiscroll/angular';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {
    path: '',
    component: ProposerTrajetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes),
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [ProposerTrajetPage]
})
export class ProposerTrajetPageModule {}
