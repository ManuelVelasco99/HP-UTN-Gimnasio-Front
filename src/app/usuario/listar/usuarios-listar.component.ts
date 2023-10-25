import { Component } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.scss']
})
export class UsuariosListarComponent extends ListadoBaseComponent {
  public registrosListado : Array<any> = [];

	public columnasAMostrar : Array<string> = [
		"id",
		"dni", 
		"nombre", 
		"apellido",
		"telefono", 
		"fecha_nacimiento",
		"fecha_comienzo",
		"email", 
		"rol", 
		"editar", "eliminar"];

	ngOnInit() : void {	
		this.obtenerListado();
	}

	private async obtenerListado() : Promise<void> {
		this.registrosListado = await this.apiService.getData("/usuario/listar");
	}


	public clickBotonEditar(id : number) : void {
		this.router.navigate([`usuario/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {

	}


}
