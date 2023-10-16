import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-precio-cuota-listar',
	templateUrl : './precio-cuota-listar.component.html',
	styleUrls   : ['./precio-cuota-listar.component.scss']
})
export class PrecioCuotaListarComponent extends ListadoBaseComponent {

  	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "fecha_desde", "monto", "eliminar"];

	ngOnInit() : void {	
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/precio-cuota/listar");
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar el precio de la cuota?",
			"Eliminar"	
		);
	}


}
