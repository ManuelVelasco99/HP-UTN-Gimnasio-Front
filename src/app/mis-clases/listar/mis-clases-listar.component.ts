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
		this.registrosListado = await this.apiService.getData("/mis-clases/listar"+this.queryParams);
	}

	public async clickInscribirseMisClases(idClase : any) : Promise<void> {

		try {
			let inscripcion = await this.apiService.post(`/mis-clases/${idClase}/inscribirse`,{});
			this.confirmService.mostrarMensajeConfirmacion(
			`Usted se ha inscripto a la clase de ${inscripcion.data.clase.tipoClase.descripcion}`,
				"Aceptar",
				"",
				true
			);
			
		} catch (error : any) {
			if(error.status === 409){
				console.log("es un 409")
				this.confirmService.mostrarMensajeConfirmacion(error.error.message,"","",true);
			}
		}
		finally{
			this.obtenerListado();
		}
		
	}

	public async clickCancelarInscripcionMisClases(idClase : any) : Promise<void> {

		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar la inscripción a la clase?",
			"Eliminar"
		);
		if(respuesta){
			try {
				await this.apiService.post(`/mis-clases/${idClase}/cancelar-inscripcion`,{});
				
			} catch (error : any) {
				if(error.status === 409){
					this.confirmService.mostrarMensajeConfirmacion(error.error.message,"","",true);
				}
			}
			finally{
				this.obtenerListado();
			}
		}
	}

	public clickFiltrar(){
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();
	}

}
