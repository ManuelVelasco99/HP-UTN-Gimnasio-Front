import { Component              } from '@angular/core';
import { ListadoBaseComponent   } from 'src/app/base/listado-base.component';

@Component({
  selector: 'app-profesor-listar',
  templateUrl: './profesor-listar.component.html',
  styleUrls: ['./profesor-listar.component.scss']
})
export class ProfesorListarComponent extends ListadoBaseComponent{

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
		this.registrosListado = await this.apiService.getData("/profesor/listar"+this.queryParams);
	}

	public clickFiltrar() : void {
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();

	}

	public clickBotonEditar(id : number) : void {
		this.router.navigate([`profesor/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar al profesor Juan Perez?",
			"Eliminar"
		);

		if(respuesta){
			await this.apiService.getData(`/profesor/${id}/eliminar`);
		}
		this.obtenerListado();
	}

}
