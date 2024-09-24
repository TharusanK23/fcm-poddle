import { Routes } from '@angular/router';

export const HomeRoutingModule: Routes = [
  { path: '', loadComponent: () => import('./dashboard/dashboard.component').then(d => d.DashboardComponent)}
];
