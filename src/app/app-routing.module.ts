import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  // {path: 'members', canActivate: [AuthGuardService], loadChildren: './members/member-routing.module#MemberRoutingModule'},
  { path: 'recherche-trajet', loadChildren: './recherche-trajet/recherche-trajet.module#RechercheTrajetPageModule' },
  { path: 'datepicker-button', loadChildren: './datepicker-button/datepicker-button.module#DatepickerButtonPageModule' },
  { path: 'resultat-de-recherche', loadChildren: './resultat-de-recherche/resultat-de-recherche.module#ResultatDeRecherchePageModule' },
  { path: 'agenda-de-sortie', loadChildren: './agenda-de-sortie/agenda-de-sortie.module#AgendaDeSortiePageModule' },
  { path: 'proposer-trajet', loadChildren: './proposer-trajet/proposer-trajet.module#ProposerTrajetPageModule' },
  { path: 'villes-etape', loadChildren: './villes-etape/villes-etape.module#VillesEtapePageModule' },
  { path: 'publier-trajet', loadChildren: './publier-trajet/publier-trajet.module#PublierTrajetPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'recherche-trajet', loadChildren: './recherche-trajet/recherche-trajet.module#RechercheTrajetPageModule' },
  { path: 'user', loadChildren: './public/user/user.module#UserPageModule' },
  { path: 'location-select', loadChildren: './location-select/location-select.module#LocationSelectPageModule' },
 // { path: 'google-places', loadChildren: './google-places/google-places.module#GooglePlacesPageModule' },
  // {path: 'dashboard', loadChildren: './members/dashboard/dashboard.module#DashboardPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
