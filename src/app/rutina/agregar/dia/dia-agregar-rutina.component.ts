import { Component } from '@angular/core';
import { Input        } from '@angular/core';
import { Output       } from '@angular/core';

@Component({
  selector: 'app-dia-agregar-rutina',
  templateUrl: './dia-agregar-rutina.component.html',
  styleUrls: ['./dia-agregar-rutina.component.scss']
})
export class DiaAgregarRutinaComponent {
  public registroEjercicios : Array<any> = [1];
  @Input()
  public numeroDia : number = 1;
  public agregarEjercicio() :void{
    let nuevoEjer : number = this.registroEjercicios.length + 1;
    this.registroEjercicios.push(nuevoEjer);
  }
}
