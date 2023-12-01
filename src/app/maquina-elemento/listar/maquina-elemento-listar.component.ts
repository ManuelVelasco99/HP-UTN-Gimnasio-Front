import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-maquina-elemento-listar',
	templateUrl : './maquina-elemento-listar.component.html',
	styleUrls   : ['./maquina-elemento-listar.component.scss']
})
export class MaquinaElementoListarComponent extends ListadoBaseComponent {

	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "descripcion", "editar", "eliminar"];

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
		let resback : string = ''
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar esta máquina/elemento?",
			"Eliminar"
		);
		if(respuesta){
			resback = await this.apiService.getData(`/maquina-elemento/${id}/eliminar`, {});
			await this.confirmService.mostrarMensajeConfirmacion(resback, 'Aceptar', '123', true);
			this.obtenerListado();
		}
	}
}
