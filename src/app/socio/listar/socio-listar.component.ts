import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-socio-listar',
	templateUrl : './socio-listar.component.html',
	styleUrls   : ['./socio-listar.component.scss']
})
export class SocioListarComponent extends ListadoBaseComponent {

	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "nombre", "apellido", "dni", "telefono", "fecha_nacimiento", "fecha_comienzo", "editar", "eliminar"];

	ngOnInit() : void {	
		this.filtrosDisponibles.push(
			{
				textoFiltro  : "Nombre y/o apellido",
				valorFiltro  : "",
				nombreFiltro : "nombre_apellido"
			}
		);
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/socio/listar"+this.queryParams);
	}

	public clickFiltrar() : void {
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();

	}

	public clickBotonEditar(id : number) : void {
		this.router.navigate([`socio/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar al socio Juan Perez?",
			"Eliminar"
		);
		if(respuesta){
			await this.apiService.getData(`/socio/${id}/eliminar`);
		}
		this.obtenerListado();
	}

}
