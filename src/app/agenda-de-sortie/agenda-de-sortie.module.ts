import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgendaDeSortiePage } from './agenda-de-sortie.page';
import { NgCalendarModule  } from 'ionic2-calendar';
const routes: Routes = [
  {
    path: '',
    component: AgendaDeSortiePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [AgendaDeSortiePage]
})
export class AgendaDeSortiePageModule {}
