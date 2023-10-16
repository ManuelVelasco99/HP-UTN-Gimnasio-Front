import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-maquina-elemento-listar',
	templateUrl : './maquina-elemento-listar.component.html',
	styleUrls   : ['./maquina-elemento-listar.component.scss']
})
export class MaquinaElementoListarComponent extends ListadoBaseComponent {

	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "descripcion", "estado", "editar", "eliminar"];

	ngOnInit() : void {	
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/maquina-elemento/listar");
	}

	public clickBotonEditar(id : number) : void {
		this.router.navigate([`maquina-elemento/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar esta máquina/elemento?",
			"Eliminar"
		);
		if(respuesta){
			await this.apiService.post(`/maquina-elemento/${id}/eliminar`, {});
			this.obtenerListado();
		}
	}
}
