import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'ngDuka',
        loadComponent: () => import('./pages/home/home')
    },
    {
        path: 'products/:category',
        loadComponent: () => import('./pages/products/products')
    }
];
