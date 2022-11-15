import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { GestorService } from 'src/app/services/gestor.service';
import { Gestor } from 'src/app/interfaces/gestor.interface';

@Component({
  selector: 'app-gestor-profile',
  templateUrl: './gestor-profile.component.html',
  styleUrls: ['./gestor-profile.component.css']
})
export class GestorProfileComponent implements OnInit {
  gestor: Gestor;
  _id: string | null;
  constructor(
    private gestorSrv: GestorService,
    public dialog: MatDialog,
    private router: Router,
    private aRouter: ActivatedRoute
    ) {
      this._id = this.aRouter.snapshot.paramMap.get('_id');
      console.log(this._id);
     }

  ngOnInit(): void {
    this.getGestorInfo();
  }
  async getGestorInfo() {
    if (this._id !==null) {
      this.gestorSrv.getGestorById(this._id).subscribe(resp=>{
        if(resp.status==200){
          this.gestor=resp.body!;
        }
      })
    }

    throw new Error('Method not implemented.');
  }

  updateGestor(gestor:Gestor):void{
    this.router.navigate(['/gestors/'+gestor._id+'/updateGestor'])
  }

  deleteGestor(gestor:Gestor): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {issue: gestor.issue}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.gestorSrv.deleteGestor(gestor._id).subscribe(
          response =>  { 
            if(response.status == 200){
              console.log(response.status);
              this.router.navigate(['/gestors/']);
          }
        });
      }
    });

      
  }
}
