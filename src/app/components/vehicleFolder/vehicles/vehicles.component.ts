import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Router } from '@angular/router';
import { ColDef,CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles!: Vehicle[];
  constructor(private vehicleSrv: VehicleService,private router: Router) { }

  rowData$!: any;

  colDef: ColDef[] = [
    {field: '_id'},
    {field: 'model'},
    {field: 'brand'},
    {field: 'year'},
    {field: 'seats'}
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  onCellClicked( e: CellClickedEvent): void {
    this.router.navigate(['/vehicles/', e.data._id]);
  }
  ngOnInit(): void {
    this.vehicleSrv.getAll().subscribe(
      resp => {
        if(resp.status == 200){
          this.vehicles = resp.body!
          this.rowData$ = this.vehicles.map(({_id,model,brand,year,seats }) => ({ _id,model,brand,year,seats }))
        }
      }
    );
  } 
}
