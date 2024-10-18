import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { DealerComponent } from './pages/dealer/dealer.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { Component } from '@angular/core';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }, 
    { path: 'Admin', component:OverviewComponent,children: [    
        {path:'overview',component:OverviewComponent, canActivate : [authGuard]},  
        {path:'dashboard',component:DashboardComponent , canActivate : [authGuard]}, 
        {path:'users' , component:UsersComponent , canActivate : [authGuard]},
        {path:'dealers', component: DealerComponent , canActivate : [authGuard]},
        {path: 'customers', component: CustomersComponent , canActivate : [authGuard]}
      ]
    } 
    // {
    //     path : '',
    //     redirectTo : 'login',
    //     pathMatch  : 'full'
    // },
    // {
    //     path: 'login',
    //     component : LoginComponent
    // },
    // {
    //     path: '',
    //     component
    // }
];
