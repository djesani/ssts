import { Routes } from '@angular/router';

export const EVENTS_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./events-list.component').then(c => c.EventsListComponent) },
    { path: 'add', loadComponent: () => import('./events-form.component').then(c => c.EventsFormComponent) },
    { path: 'edit/:id', loadComponent: () => import('./events-form.component').then(c => c.EventsFormComponent) }
];
