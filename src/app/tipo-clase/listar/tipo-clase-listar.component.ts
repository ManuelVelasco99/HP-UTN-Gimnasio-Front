import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-tipo-clase-listar',
	templateUrl : './tipo-clase-listar.component.html',
	styleUrls   : ['./tipo-clase-listar.component.scss']
})
export class TipoClaseListarComponent extends ListadoBaseComponent {

	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "descripcion", "cupo", "editar", "eliminar"];

	ngOnInit() : void {	
		this.filtrosDisponibles.push(
			{
				textoFiltro  : "Descripcion",
				valorFiltro  : "",
				nombreFiltro : "descripcion"
			}
		);
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/tipo-clase/listar" + this.queryParams,);
	}

	public clickFiltrar() : void {
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();

	}

	public clickBotonEditar(id : number) : void {
		this.router.navigate([`tipo-clase/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar este tipo de clase?",
			"Eliminar"	
		);
		if(respuesta){
			try {
				let response = await this.apiService.post(`/tipo-clase/${id}/eliminar`, {});
				this.confirmService.mostrarMensajeConfirmacion(
					"Tipo de clase eliminado con éxito",
					'Aceptar',
					'',
					true
				);
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

}
