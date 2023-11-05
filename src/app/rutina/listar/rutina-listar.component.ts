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
    "asignar",
    "editar", "eliminar"
  ];

  ngOnInit(): void{
    this.obtenerListado();
  }

  private async obtenerListado() : Promise<void>{
    this.registrosListado = await this.apiService.getData("/rutina/listar");
    this.registrosListado = this.registrosListado.concat(await this.apiService.getData("/rutinaPreset/listar"));
  }


  public clickBotonAsignarRutina( id:number) :void{
    console.log(id);
    this.router.navigate([`rutina/${id}/asignar`]);
  };

  public clickBotonEditar(fila : Array<any>) : void {
    let esP : boolean;
    let id : number = fila[0];
    if(fila[1] == "----"){
      esP = true;
    }else{
      esP = false;
    }
    this.router.navigate([`rutina/${id}/${esP}/editar`]);
    console.log(`rutina/${id}${esP}/editar`);
	}

	public async clickBotonEliminar(id : number) : Promise<void> {

	}
}
