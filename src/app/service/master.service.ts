import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Distributors } from '../model/class/distributor';
import { Observable } from 'rxjs';
import { VehicleResponse } from '../model/interface/master';
import { Vehicles } from '../model/class/vehicle';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiUrl: string = 'http://192.168.1.13:4090/api/superAdmin/';

  constructor(private http: HttpClient) {}

  getAllDistributor(): Observable<Distributors> {
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
    return this.http.get<Distributors>(this.apiUrl + 'distributors/all', {
      headers,
    });
  }

  createDist(obj: Distributors): Observable<Distributors> {
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
    return this.http.post<Distributors>(
      this.apiUrl + 'distributors/create',
      obj
    );
  }

  // Vehicle API's

  getAllVehicle(): Observable<VehicleResponse> {
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
    return this.http.get<VehicleResponse>(this.apiUrl + 'vehicles/all', {
      headers,
    });
  }

  createNewVehicle(obj: Vehicles): Observable<VehicleResponse> {
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
    return this.http.post<VehicleResponse>(
      this.apiUrl + 'vehicles/create',
      obj,
      { headers }
    );
  }

  deleteVehicle(id: string): Observable<any> {
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
    return this.http.delete<any>(`${this.apiUrl}vehicles/${id}/delete`, {
      headers,
    });
  }

  updateVehicle(obj: Vehicles): Observable<VehicleResponse> {
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
      return this.http.put<VehicleResponse>(`${this.apiUrl}vehicles/${obj.vehicle_id}/update`, obj , {
        headers,
      }); 
  }
}
