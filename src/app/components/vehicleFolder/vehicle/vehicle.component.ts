import { Component, OnInit } from '@angular/core';
import { VehiclesComponent } from '../vehicles/vehicles.component';
import { VehicleService } from 'src/app/services/vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})export class VehicleComponent implements OnInit {

  vehicle!: Vehicle;
  constructor(private vehicleSrv: VehicleService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    const data: any = this.route.snapshot.data;
    if (data.bookingData.status == 200) {
      this.vehicle = data.bookingData.body.booking;
      console.log(data);
    }

  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { _id: this.vehicle._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vehicleSrv.deleteVehicle(this.vehicle._id).subscribe(
          response => {
            if (response.status == 200) {
              this.router.navigate(['/vehicle/']);
            }
          });
      }
    });

  }
}
