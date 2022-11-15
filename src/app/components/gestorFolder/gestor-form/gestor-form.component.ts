import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gestor } from 'src/app/interfaces/gestor.interface';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-gestor-form',
  templateUrl: './gestor-form.component.html',
  styleUrls: ['./gestor-form.component.css']
})
export class GestorFormComponent implements OnInit {
  @Input() gestor!: Gestor
  @Output() addGestor = new EventEmitter<Gestor>();
  id: string | null;
  gestorForm = /* FormGroup; */
  new FormGroup({
    issue: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    date: new FormControl('',[Validators.required, Validators.min(10)])
  })
  constructor(router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.gestor=<Gestor><unknown>this.gestorForm.value
    this.addGestor.emit(this.gestor)
  }
}