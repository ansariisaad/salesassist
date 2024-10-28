import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { Vehicles } from '../../model/class/vehicle';
import { VehicleResponse } from '../../model/interface/master';
import { error } from 'console';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [CommonModule, SharedModule, DataTablesModule, FormsModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css',
})
export class VehicleComponent implements OnInit {
  // vehicles = inject(Vehicles);
  // vehicleSrv = inject(Vehicles);
  // vehicleObj : Vehicles = new Vehicles;
  vehicleList = signal<Vehicles[]>([]);
  masterSrv = inject(MasterService);
  vehicleObj: Vehicles = new Vehicles();

  dtOptions: Config = {};
  items: any;

  ngOnInit(): void {
    this.displayAllVehicle();
  }

  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  // The users that will be displayed
  // Method to update the displayed users when the dropdown changes

  displayAllVehicle() {
    this.masterSrv.getAllVehicle().subscribe((res: VehicleResponse) => {
      this.vehicleList.set(res.vehicle);
    });
  }

  createVehicle() {
    this.masterSrv.createNewVehicle(this.vehicleObj).subscribe(
      (res: VehicleResponse) => {
        alert('new employe created');
        this.displayAllVehicle();
        this.vehicleObj = new Vehicles();
      },
      (error) => {
        alert('something was wrong');
      }
    );
  }

  deleteVehicleId(id: string) {
    console.log(id);
    this.masterSrv.deleteVehicle(id).subscribe(
      (res: VehicleResponse) => {
        alert('this vehicle was deleted successful');
        this.displayAllVehicle();
      },
      (error) => {
        alert('error come from backend team');
      }
    );
  }

  onUpdate(){
    this.displayAllVehicle();
    this.masterSrv.updateVehicle(this.vehicleObj).subscribe((res: VehicleResponse)=>{
      alert('update successfully')
     this.displayAllVehicle();
    },(error) => {
      alert('something happn ')
    })
  }
}
