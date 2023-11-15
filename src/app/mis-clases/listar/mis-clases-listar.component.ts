import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-mis-clases-listar',
	templateUrl : './mis-clases-listar.component.html',
	styleUrls   : ['./mis-clases-listar.component.scss']
})
export class MisClasesListarComponent extends ListadoBaseComponent {

  	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "clase", "fecha", "horario", "cupo", "profesor", "accion_mis_clases"];

	ngOnInit() : void {
		this.filtrosDisponibles.push(
			{
				textoFiltro  : "Clase",
				valorFiltro  : "",
				nombreFiltro : "clase"
			}
		);
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/mis-clases/listar");
	}

	public async clickInscribirseMisClases(idClase : any) : Promise<void> {

		try {
			let inscripcion = await this.apiService.post(`/mis-clases/${idClase}/inscribirse`,{});
			console.log("inscripcion ",inscripcion);
			let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			`Usted se ha inscripto a la clase de ${inscripcion.data.clase.tipoClase.descripcion}`,
				"Aceptar",
				"",
				true
			);
			
		} catch (error) {
			
		}

	}

	public async clickCancelarInscripcionMisClases(idClase : any) : Promise<void> {
		console.log("idClase: ",idClase);

		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar la inscripción a la clase?",
			"Eliminar"
		);
		if(respuesta){
			//postcancelarinscripcion
		}
	}

}
