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

	public ocultarEliminados : boolean = false;

	ngOnInit() : void {	
		this.obtenerListado();
		this.filtrosDisponibles.push(
			{
				textoFiltro  : "Nombre y/o Apellido",
				valorFiltro  : "",
				nombreFiltro : "nombre"
			}
		);
		this.filtrosDisponibles.push(
			{
				textoFiltro  : "Dni",
				valorFiltro  : "",
				nombreFiltro : "dni"
			}
		);
	}

	private async obtenerListado() : Promise<void> {
		let queryParams = this.queryParams;
		if(queryParams){
			if(this.ocultarEliminados){
				queryParams = queryParams + "&ocultar_eliminados=true";
			}
		}
		else{
			if(this.ocultarEliminados){
				queryParams = "?ocultar_eliminados=true";
			}
		}
		let listado = await this.apiService.getData("/cuota/listar"+queryParams);
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

	public clickFiltroPagoCuota($event : any) {
		this.ocultarEliminados = $event;
		this.obtenerListado();
	}

	public clickFiltrar() : void {
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();

	}

}
