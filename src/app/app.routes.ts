import { Routes } from '@angular/router'; 
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { DealerComponent } from './pages/dealer/dealer.component';
import { CustomersComponent } from './pages/customers/customers.component'; 
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './pages/profile-page/profile-page.component';
import { VehicalComponent } from './pages/vehical/vehical.component';

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
        {path:'overview',component:OverviewComponent, canActivate : [AuthGuard]},  
        {path:'dashboard',component:DashboardComponent , canActivate : [AuthGuard]}, 
        {path:'users' , component:UsersComponent , canActivate : [AuthGuard]},
        {path:'dealers', component: DealerComponent , canActivate : [AuthGuard]},
        {path: 'customers', component: CustomersComponent , canActivate : [AuthGuard]},
        {path: 'profile', component: ProfileComponent , canActivate : [AuthGuard]},
        {path: 'vehicles', component: VehicalComponent   , canActivate : [AuthGuard]}
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
