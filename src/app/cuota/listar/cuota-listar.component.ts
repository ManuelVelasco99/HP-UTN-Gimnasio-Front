import { Component } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
  selector: 'app-cuota-listar',
  templateUrl: './cuota-listar.component.html',
  styleUrls: ['./cuota-listar.component.scss']
})
export class CuotaListarComponent extends ListadoBaseComponent {

  public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "fecha_periodo","fecha_pago", "motivo_baja", "editar", "eliminar"];

	ngOnInit() : void {	
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/cuota/listar");
	}

	public clickBotonEditar(id : number) : void {
		this.router.navigate([`cuota/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar esta cuota?",
			"Eliminar"
		);
		if(respuesta){
			await this.apiService.post(`/cuota/${id}/eliminar`, {});
			this.obtenerListado();
		}
	}

}
