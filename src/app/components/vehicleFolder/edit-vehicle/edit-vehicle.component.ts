import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})

export class EditVehicleComponent implements OnInit {
  @Input() vehicle!: Vehicle
  @Output() editUser = new EventEmitter<Vehicle>();
  _id: string | null;
  vehicleForm = new FormGroup({
    model: new FormControl('', Validators.required),
    brand: new FormControl('',Validators.required),
    year: new FormControl('',Validators.required),
    owner: new FormControl('', Validators.required) 
  })

  constructor(private vehSrv:VehicleService, private router: Router, private aRouter:ActivatedRoute) {
    this._id = this.aRouter.snapshot.paramMap.get('_id'); 
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.vehicle=<Vehicle><unknown>this.vehicleForm.value
    this.vehicle._id= this._id!;
    this.vehSrv.updateVehicle(this.vehicle).subscribe(
      response =>  { 
        if(response.status == 200){
          console.log(response.status);
          this.router.navigate(['/vehicles/'+this._id]);
      }
    });
    this.editUser.emit(this.vehicle)
  }
}
