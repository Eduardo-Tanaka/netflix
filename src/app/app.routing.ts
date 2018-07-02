import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
