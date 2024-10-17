import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { DealerComponent } from './pages/dealer/dealer.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'Dashboard',
        component: DashboardComponent
    },
    { path: 'Admin', component:OverviewComponent,children: [    
        {path:'overview',component:OverviewComponent},  
        {path:'dashboard',component:DashboardComponent}, 
        {path:'users' , component:UsersComponent},
        {path:'dealers', component: DealerComponent},
        {path: 'customers', component: CustomersComponent}
      ]
    } 
    
];
