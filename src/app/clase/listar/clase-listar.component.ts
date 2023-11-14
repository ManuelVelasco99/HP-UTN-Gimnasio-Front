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
		this.obtenerListado();
	}

  private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/clase/listar");
	}

  public clickBotonEditar(id : number) : void {
		this.router.navigate([`clase/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar esta clase?",
			"Eliminar"
		);
		if(respuesta){
			await this.apiService.getData(`/clase/${id}/eliminar`);
		}
		this.obtenerListado();
	}
}
