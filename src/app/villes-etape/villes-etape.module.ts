import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VillesEtapePage } from './villes-etape.page';

const routes: Routes = [
  {
    path: '',
    component: VillesEtapePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VillesEtapePage]
})
export class VillesEtapePageModule {}
