import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Gestor } from 'src/app/interfaces/gestor.interface';
@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})

export class GestorComponent implements OnInit {
  @Input() gestor!: Gestor
  @Output() deleteGestor = new EventEmitter<Gestor>();
  @Output() updateGestor=new EventEmitter<Gestor>();
  constructor() { }

  ngOnInit(): void {
  }
  delete():void{
    this.deleteGestor.emit(this.gestor)
  }
  update():void{
    this.updateGestor.emit(this.gestor);
  }
}
