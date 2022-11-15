import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle.interface';
import {Gestor} from '../interfaces/gestor.interface';



@Injectable({
  providedIn: 'root'
})
export class GestorService {

  private apiURL = 'http://localhost:5432/api/gestor/';
  constructor(private http: HttpClient) { }

   getAll(): Observable<HttpResponse<Gestor[]>>{
      return this.http.get<Gestor[]>(this.apiURL, {observe: 'response'});
  } 
  getOne(gestorId: String): Observable<HttpResponse<Gestor>>{
    return this.http.get<Gestor>(this.apiURL + gestorId, {observe: 'response'});
  }
  deleteGestor(gestorId: string):Observable<HttpResponse<Gestor>>{
    return this.http.delete<Gestor>(this.apiURL+'delete/'+ gestorId, {observe: 'response'});
  }
  addOne(gestor: Gestor):Observable<HttpResponse<Gestor>>{
    return this.http.post<Gestor>(this.apiURL+'add/',gestor, {observe: 'response'});
  }
  updateGestor(gestorId: Gestor):Observable<HttpResponse<Gestor>>{
    return this.http.post<Gestor>(this.apiURL+'update/', gestorId, {observe: 'response'});
  }
  getGestorById(gestorId:string): Observable<HttpResponse<Gestor>>{
    return this.http.get<Gestor>(this.apiURL+'/'+gestorId, {observe: 'response'});
} 
  
}