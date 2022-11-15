import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestorService } from 'src/app/services/gestor.service';
import { Gestor } from 'src/app/interfaces/gestor.interface';
@Component({
  selector: 'app-add-gestor',
  templateUrl: './add-gestor.component.html',
  styleUrls: ['./add-gestor.component.css']
})
export class AddGestorComponent implements OnInit {
  constructor(private gestorSrv: GestorService, private router: Router) { }

  ngOnInit(): void {
  }
  addGestor(gestor: Gestor): void{
    this.gestorSrv.addOne(gestor).subscribe(
      response => {
        if(response.status == 200){
          console.log("bien :)")
          this.router.navigate(['/gestors']);
      }}
    )
}
}
