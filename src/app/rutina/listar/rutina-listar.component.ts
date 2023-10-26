import { Component } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
  selector: 'app-rutina-listar',
  templateUrl: './rutina-listar.component.html',
  styleUrls: ['./rutina-listar.component.scss']
})
export class RutinaListarComponent extends ListadoBaseComponent {
  public registrosListado : Array<any> = [];
  public columnasAMostrar : Array<string>=[
    "id",
    "nombre_socio",
    "nombre_profesor",
    "fecha_creacion",
    "nombre",
    "editar", "eliminar"
  ];
  ngOnInit(): void{
    this.obtenerListado();
  }
  private async obtenerListado() : Promise<void>{
    this.registrosListado = await this.apiService.getData("/rutina/listar");
    this.registrosListado = this.registrosListado.concat(await this.apiService.getData("/rutinaPreset/listar"));
		console.log(this.registrosListado);
  }



  public clickBotonEditar(id : number) : void {
		this.router.navigate([`rutina/${id}/editar`]);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {

	}
}
