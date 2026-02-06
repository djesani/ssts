import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout-secure.component').then(c => c.LayoutSecureComponent),
        children: [
            { path: '', redirectTo: 'events', pathMatch: 'full' },
            {
                path: 'events',
                loadChildren: () => import('./secure/events/events.routes').then(c => c.EVENTS_ROUTES)
            }
        ]
    },
    {
        path: 'public',
        loadComponent: () => import('./layout/layout-public.component').then(c => c.LayoutPublicComponent),
        children: [
            { path: 'login', loadComponent: () => import('./public/login.component').then(c => c.LoginComponent) }
        ]
    },
    { path: '**', redirectTo: 'public/login' }
];
