import { Component } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
  selector: 'app-clase-listar',
  templateUrl: './clase-listar.component.html',
  styleUrls: ['./clase-listar.component.scss']
})
export class ClaseListarComponent extends ListadoBaseComponent{

  public registrosListado : Array<any> = [];

  public columnasAMostrar : Array<string> = ["id", "clase", "fecha","horario_inicio", "horario_fin","cupo","profesor", "editar", "eliminar"];

  	ngOnInit() : void {	
		this.filtrosDisponibles.push(
			{
				textoFiltro  : "Clase",
				valorFiltro  : "",
				nombreFiltro : "clase"
			},
			{
				textoFiltro  : "Profesor",
				valorFiltro  : "",
				nombreFiltro : "profesor"
			}
		);
		this.obtenerListado();
	}

	private async obtenerListado(): Promise<void> {
		const queryParams = `?clase=${this.filtrosDisponibles[0].valorFiltro}&profesor=${this.filtrosDisponibles[1].valorFiltro}`;
		this.registrosListado = await this.apiService.getData("/clase/listar" + queryParams);
	  }

	public clickFiltrar() : void {
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();
	}

  	public async clickBotonEditar(id : number) : Promise<void> {
		try {
			await this.apiService.getData(`/clase/${id}/validar-edicion`);
			this.router.navigate([`clase/${id}/editar`]);
			
		} catch (error : any) {
			this.confirmService.mostrarMensajeConfirmacion(error.error.message, "", "", true);
		}
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		try {
			await this.apiService.getData(`/clase/${id}/validar-edicion`);
			
		} catch (error : any) {
			this.confirmService.mostrarMensajeConfirmacion("No puede eliminar una clase que no le pertenece", "", "", true);
			return;
		}
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar esta clase?",
			"Eliminar"
		);
		
		try {
			if(respuesta){
				await this.apiService.getData(`/clase/${id}/eliminar`);
			}
			
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
