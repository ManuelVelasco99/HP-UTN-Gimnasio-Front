import { Component } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
  selector: 'app-cuota-listar',
  templateUrl: './cuota-listar.component.html',
  styleUrls: ['./cuota-listar.component.scss']
})
export class CuotaListarComponent extends ListadoBaseComponent {

  public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = ["id", "dni","nombre","apellido","Mes Abonado","Año Abonado","Fecha Pago", "Motivo Baja", "eliminar"];

	ngOnInit() : void {	
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		let listado = await this.apiService.getData("/cuota/listar");
		for (let index = 0; index < listado.length; index++) {
			const element = listado[index];
			listado[index]["Mes Abonado"]	 = this.parsearMes(element["Mes Abonado"]);
		}
		this.registrosListado = listado;
	}


	public async clickBotonEliminar(id : any) : Promise<void> {
		let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar esta cuota?",
			"Eliminar"
		);
		if(respuesta){
			let ruta="/cuota/"+id+"/eliminar"
			this.router.navigate([ruta]);
		}
	}

	private parsearMes(mes : any) : string {
		if(mes === "December"){
			return "Diciembre";
		}
		if(mes === "November"){
			return "Noviembre";
		}
		if(mes === "October"){
			return "Octubre";
		}
		if(mes === "September"){
			return "Septiembre"
		}
		if(mes === "August"){
			return "Agosto";
		}
		if(mes === "July"){
			return "Julio";
		}
		if(mes === "June"){
			return "Junio";
		}
		if(mes === "May"){
			return "Mayo";
		}
		if(mes === "April"){
			return "Abril";
		}
		if(mes === "March"){
			return "Marzo";
		}
		if(mes === "February"){
			return "Febrero";
		}
		if(mes === "January"){
			return "Enero";
		}
		return mes;
	}

}
