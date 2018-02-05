import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', component: PagenotfoundComponent }
  ];