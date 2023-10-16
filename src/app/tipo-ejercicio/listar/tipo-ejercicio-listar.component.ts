import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-tipo-ejercicio-listar',
	templateUrl : './tipo-ejercicio-listar.component.html',
	styleUrls   : ['./tipo-ejercicio-listar.component.scss']
})
export class TipoEjercicioListarComponent extends ListadoBaseComponent {

	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "descripcion", "editar", "eliminar"];

	ngOnInit() : void {	
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/tipo-ejercicio/listar");
	}


	public clickBotonEditar(id : number) : void {
		this.router.navigate([`tipo-ejercicio/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {

	}

}
