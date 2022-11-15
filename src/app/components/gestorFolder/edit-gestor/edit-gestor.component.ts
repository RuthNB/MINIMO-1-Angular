import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { Gestor } from 'src/app/interfaces/gestor.interface';
import { GestorService } from 'src/app/services/gestor.service';
@Component({
  selector: 'app-edit-gestor',
  templateUrl: './edit-gestor.component.html',
  styleUrls: ['./edit-gestor.component.css']
})
export class EditGestorComponent implements OnInit {
    @Input() gestor!: Gestor
    @Output() updateGestor = new EventEmitter<Gestor>();
    _id: string | null;
    gestorForm = /* FormGroup; */
    new FormGroup({
      issue: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    date: new FormControl('',[Validators.required, Validators.min(10)])
    })
    constructor(private gestorSrv:GestorService, private router: Router, private aRouter:ActivatedRoute) {
      this._id = this.aRouter.snapshot.paramMap.get('_id'); 
    }
  
    ngOnInit(): void {
    }
    onSubmit(){
      this.gestor=<Gestor><unknown>this.gestorForm.value
      this.gestor._id= this._id!;
      this.gestorSrv.updateGestor(this.gestor).subscribe(
        response =>  { 
          if(response.status == 200){
            console.log(response.status);
            this.router.navigate(['/gestors/'+this._id]);
        }
      });
      this.updateGestor.emit(this.gestor)
    }
  }
  