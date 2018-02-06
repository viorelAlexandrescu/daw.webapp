import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { CollectionComponent } from '../collection/collection.component';
import { DetailsComponent } from '../details/details.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'collection', component: CollectionComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: '**', component: PagenotfoundComponent }
  ];
