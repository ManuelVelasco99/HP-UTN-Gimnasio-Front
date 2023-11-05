import { Component } from '@angular/core';
import { Input } from '@angular/core';

export class Socio{
	id:number = 0 ;
	dni:string='';
	nombre:string='';
	apellido:string='';
}
@Component({
  selector: 'app-usuario-verificar',
  templateUrl: './usuario-verificar.component.html',
  styleUrls: ['./usuario-verificar.component.scss']
})


export class UsuarioVerificarComponent {
@Input()
  public socio: Socio = new Socio();

}
