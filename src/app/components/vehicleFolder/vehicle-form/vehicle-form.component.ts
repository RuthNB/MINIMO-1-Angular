import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  selectedValue!: String;
  vehicle!: Vehicle;

  constructor(private vehicleSrv: VehicleService, private router: Router ) { }

  vehicleForm = new FormGroup({
    model: new FormControl('', Validators.required),
    brand: new FormControl('',Validators.required),
    year: new FormControl('',Validators.required),
    owner: new FormControl('', Validators.required) 
  })

  ngOnInit(): void {
    
  }
  onSubmit(){
    const newVehicle: Vehicle = <Vehicle><unknown>this.vehicleForm.value
    this.vehicleSrv.addOne(newVehicle).subscribe(res=>{
      if(res.status == 200){
        this.router.navigate(['/vehicle/']);
      }
    })
    
  }
}

