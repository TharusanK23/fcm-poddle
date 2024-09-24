import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'not-found', loadComponent: () => import('./components/not-found/not-found.component').then(n => n.NotFoundComponent), data: { title: 'Page 404' }},
  { path: 'dashboard', loadChildren: () => import('./modules/home/home.module').then(d => d.HomeRoutingModule)},
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' }
];
