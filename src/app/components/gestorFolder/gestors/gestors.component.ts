import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GestorService } from 'src/app/services/gestor.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { CellClickedEvent } from 'ag-grid-community';
import { Gestor } from 'src/app/interfaces/gestor.interface';

@Component({
  selector: 'app-gestors',
  templateUrl: './gestors.component.html',
  styleUrls: ['./gestors.component.css']
})
export class GestorsComponent implements OnInit {
    gestors: Gestor[]= [];
    colDef: ColDef[]=[
      {field: '_id'},
      {field: 'issue'},
      {field: 'description'},
      {field: 'date'}
    
    ]
    public defaultColDef: ColDef = {
      sortable: true,
      filter: true,
    };
    
    constructor(private gestorSrv: GestorService,public dialog: MatDialog,private router: Router) { }
    rowData$!:any;
  
    ngOnInit(): void {
      this.gestorSrv.getAll().subscribe(
        resp => {
          if(resp.status == 200){ 
        
        this.gestors = resp.body!;
        this.rowData$=resp.body!.map(({_id,issue,description,date})=>({_id,issue,description,date}));
        console.log(this.rowData$);
          }
      })
    }
    onCellClicked( e: CellClickedEvent): void {
      console.log(e.data);
      this.router.navigate(['/gestors/',e.data._id]);
    }
    
    }
  
  