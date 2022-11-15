import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiURL = 'http://localhost:5432/api/vehicle/';
  constructor(private http: HttpClient) { }

   getAll(): Observable<HttpResponse<Vehicle[]>>{
      return this.http.get<Vehicle[]>(this.apiURL, {observe: 'response'});
  } 
  getOne(vehicleId: String): Observable<HttpResponse<Vehicle>>{
    return this.http.get<Vehicle>(this.apiURL + vehicleId, {observe: 'response'});
  }
  deleteVehicle(vehicleId: string):Observable<HttpResponse<Vehicle>>{
    return this.http.delete<Vehicle>(this.apiURL+'delete/'+ vehicleId, {observe: 'response'})
  }
  addOne(vehicle: Vehicle):Observable<HttpResponse<Vehicle>>{
    return this.http.post<Vehicle>(this.apiURL+'create/', vehicle, {observe: 'response'})
  }
  updateVehicle(vehicleId: Vehicle):Observable<HttpResponse<Vehicle>>{
    return this.http.post<Vehicle>(this.apiURL+'update/', vehicleId, {observe: 'response'})
  }
  
}