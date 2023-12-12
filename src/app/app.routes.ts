import { Routes } from '@angular/router';
import { HomeComponent } from './simpsons/home/home.component';
import { ListComponent } from './simpsons/list/list.component';

export const routes: Routes = [
    {
        path: 'home',
        title:'Simpsons',
        component: HomeComponent,
    },
    {
        path: 'list',
        title:'Simpsons List',
        component: ListComponent,
    },
    {
        path: '**',
        title:'Simpsons',
        redirectTo: '/home'
    },

];
