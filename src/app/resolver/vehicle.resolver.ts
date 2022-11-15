import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VehicleService } from '../services/vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleResolver implements Resolve<boolean> {
  constructor(private vehicleServ: VehicleService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.vehicleServ.getOne(route.paramMap.get('id')!)
  }
}