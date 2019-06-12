import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublierTrajetPage } from './publier-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: PublierTrajetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PublierTrajetPage]
})
export class PublierTrajetPageModule {}
