import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';


@Component({
	selector    : 'app-consulta-rutina',
	templateUrl : './consulta-rutina.component.html',
	styleUrls   : ['./consulta-rutina.component.scss'],
})
export class ConsultaRutinaComponent extends ListadoBaseComponent{

	public registrosListado : Array<any> = [];
	public mostrarMensaje   : boolean = false;

	ngOnInit() : void {	
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/rutina-socio/listar");
		this.mostrarMensaje = true;
	}

	public obtenerCantidadDeDias(ejercicios : Array<any>) : Array<number> {
		let cantidadDeDias : Array<number> = [];
		ejercicios.forEach((element : any) => {
			if(!cantidadDeDias.includes(element.diaRutina)){
				cantidadDeDias.push(element.diaRutina);
			}
		});
		return cantidadDeDias;
	}

}
