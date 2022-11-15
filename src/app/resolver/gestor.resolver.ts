import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GestorService } from '../services/gestor.service';

@Injectable({
  providedIn: 'root'
})
export class GestorResolver implements Resolve<boolean> {
  constructor(private gestorServ: GestorService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.gestorServ.getOne(route.paramMap.get('id')!)
  }
}