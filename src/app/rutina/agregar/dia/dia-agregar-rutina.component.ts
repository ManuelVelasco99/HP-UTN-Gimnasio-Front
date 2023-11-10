import { Component    } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input        } from '@angular/core';
import { Output       } from '@angular/core';
import { Ejercicio, EjercicioAgregarRutinaComponent } from '../ejercicio/ejercicio-agregar-rutina.component';

export class Dia {
	idTipoEjercicio! : number;
	series! : number;
	repeticiones! : string;
	diaRutina!: number;
	numeroDia!:number;

}
@Component({
	selector    : 'app-dia-agregar-rutina',
	templateUrl : './dia-agregar-rutina.component.html',
	styleUrls   : ['./dia-agregar-rutina.component.scss']
})
export class DiaAgregarRutinaComponent {


	@Input()
	public numeroDia : number = 1;

	@Input()
	public ejercicios : Array<any> = [];

	@Input()
	public cargoEjerAlIniciar : boolean = false;

	@Input()
	public camposDeshabilitados : boolean = false;

	public registroEjercicios : Array<any> = [];

	ngOnInit(){

		if(this.cargoEjerAlIniciar){
			this.agregarEjercicio();
		}
	}


	public eliminarEjercicio(index:number): void{
		this.ejercicios.splice(index,1);
	}

	public agregarEjercicio() :void {
		let ejercicio : Ejercicio = new Ejercicio();
		ejercicio.diaRutina = this.numeroDia;
		this.ejercicios.push(ejercicio);
	}

	@Output()
	public clickBotonAgregarEjercicio : EventEmitter <void> = new EventEmitter();
	@Output()
	public clickBotonEliminarDia : EventEmitter<void> = new EventEmitter();
}
