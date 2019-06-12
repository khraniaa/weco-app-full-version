import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { RechercheTrajetPage } from './recherche-trajet.page';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: RechercheTrajetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    IonicModule,
    RouterModule.forChild(routes),
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [RechercheTrajetPage]
})
export class RechercheTrajetPageModule {}
