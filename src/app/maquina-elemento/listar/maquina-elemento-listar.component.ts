import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-maquina-elemento-listar',
	templateUrl : './maquina-elemento-listar.component.html',
	styleUrls   : ['./maquina-elemento-listar.component.scss']
})
export class MaquinaElementoListarComponent extends ListadoBaseComponent {

	public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "descripcion", "estado", "editar", "eliminar"];//, "estado"];//id: 1, descripcion: 'Bici', estado: true

	async ngOnInit(): Promise<void> {	
		this.registrosListado = await this.apiService.getData("/maquina-elemento/listar");
	}

	public clickBotonEditar(id : number) : void {
		this.router.navigate([`maquina-elemento/${id}/editar`]);
	}

	public clickBotonEliminar(id : number) : void {
		console.log("eliminar registro con id: ",id)
	}
}
