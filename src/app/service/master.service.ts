import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {   Distributors } from '../model/class/distributor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  distributorUrl : string = 'https://dinosaur-cute-lightly.ngrok-free.app/api/superAdmin/distributors/'
  constructor(private http : HttpClient) { }

  getAllDistributor():Observable<Distributors>{
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
    return this.http.get<Distributors>(this.distributorUrl + "all" , {headers}) 
  }

  createDist(obj : Distributors):Observable<Distributors>{
    const token = sessionStorage.getItem('adminToken');
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('accept', 'application/json');
    return this.http.post<Distributors>(this.distributorUrl + 'create' , obj)
  }

  // getEmp():Observable<Employee[]>{
  //   return this.http.get<Employee[]>(this.apiUrl + "GetAllEmployees" )
  // }
 
   
}
