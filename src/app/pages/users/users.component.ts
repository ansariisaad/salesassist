import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'; 
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';

@Component({
  selector: 'app-dealer',
  standalone: true,
  imports: [CommonModule , SharedModule ,   DataTablesModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
openModal() {
throw new Error('Method not implemented.');
} 
  

  // openModal(vehicle?: Vehicles) {
  //   this.isModalVisible = true;
  //   this.vehicleObj = vehicle
  //     ? { ...vehicle }
  //     : {
  //         YOM: '',
  //         vehicle_name: '',
  //         type: '',
  //         VIN: '',
  //         vehicle_id: '',
  //         created_at: '',
  //         updated_at: '',
  //         corporate_id: '',
  //       };
  // }

  dtOptions: Config = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  } 
  
   
}

