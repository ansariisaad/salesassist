import { Distributors  } from "../class/distributor";
import { Vehicles } from "../class/vehicle";

export interface IApiResponse{
    totalDists : number;
    totalPages : number; 
    currentPage: number;
    distributor: Distributors;
}

export interface VehicleResponse{
    totalVehicles : number;
    totalPages : number;
    currentPage : number;
    vehicle : Vehicles[];
}

 