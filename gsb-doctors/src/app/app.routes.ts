import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'medecins',
    loadComponent: () => import('./pages/doctors-page/doctors-page').then(m => m.DoctorsPageComponent)
  },
  {
    path: '',
    redirectTo: 'medecins',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'medecins'
  }
];
