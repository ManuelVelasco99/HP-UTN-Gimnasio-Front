import { Component    } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input        } from '@angular/core';
import { Output       } from '@angular/core';
import { Ejercicio, EjercicioAgregarRutinaComponent } from '../ejercicio/ejercicio-agregar-rutina.component';
import { ConfirmService } from 'src/app/base/confirm.service';
import { LocatorService } from 'src/app/base/locator.service';


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

	public confirmService = LocatorService.injector.get(ConfirmService);
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


	public async eliminarEjercicio(index:number): Promise<void>{
		if(this.ejercicios.length>1){
			let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
				"¿Estás seguro que quieres eliminar el ejercicio?",
				"Eliminar"	
			);
	
			if(respuesta){
				this.ejercicios.splice(index,1);
			}
		}
		else{
			await this.confirmService.mostrarMensajeConfirmacion(
				"No puede dejar un día sin ejercicios, si no quiere más ejercicios u otro día en su rutina, borre el día"
			);
		}
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
