import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';
import { MultimediaService } from 'src/app/base/multimedia.service';

@Component({
	selector    : 'app-tipo-ejercicio-listar',
	templateUrl : './tipo-ejercicio-listar.component.html',
	styleUrls   : ['./tipo-ejercicio-listar.component.scss']
})
export class TipoEjercicioListarComponent extends ListadoBaseComponent {

	constructor(

		private multimediaService : MultimediaService,
	){
		super();
	}
	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id","nombre", "multimedia", "editar", "eliminar"];

	ngOnInit() : void {	
		this.filtrosDisponibles.push(
			{
				textoFiltro  : "Nombre",
				valorFiltro  : "",
				nombreFiltro : "nombre"
			}
		);
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/tipo-ejercicio/listar"+this.queryParams);
	}

	public clickFiltrar() : void {
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();
	}

	public clickBotonEditar(id : number) : void {
		this.router.navigate([`tipo-ejercicio/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let elementoABorrar = {id:0,nombre:'',descripcion:'', multimedia:''}
		let resback : string = '';
		for(let i=0; i< this.registrosListado.length; i++){
			if(id == this.registrosListado[i].id){
				 elementoABorrar = this.registrosListado[i];
				 break;
			}
		}
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quiere eliminar el tipo de ejercicio "+ elementoABorrar.nombre +" ?",
			"Eliminar"
		);

		 if(respuesta){
			resback = await this.apiService.getData(`/tipo-ejercicio/${id}/eliminar`);
			await this.confirmService.mostrarMensajeConfirmacion(resback, 'Aceptar', '123', true);
		 }
		 
		 this.obtenerListado();

		
		 
	}
	public clickMultimedia($event : any) {
		///$event.stopPropagation();
		this.multimediaService.mostrarPopupMultimedia($event);
		console.log($event)
	}


}
