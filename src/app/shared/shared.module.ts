import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { HeaderComponent } from '../layout/header/header.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent, 
    NgApexchartsModule ,
     

  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,  // Export standalone component 
    NgApexchartsModule 
  ]
})
export class SharedModule { }
