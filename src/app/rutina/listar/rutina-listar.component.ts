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
    this.filtrosDisponibles.push(
			{
				textoFiltro  : "Socio",
				valorFiltro  : "",
				nombreFiltro : "nombresocio"
			}
		);
    this.obtenerListado();

  }

  public async obtenerListado(soloPresets: boolean = false) : Promise<void>{
    this.registrosListado = [];
    if(!soloPresets){
      this.registrosListado = await this.apiService.getData("/rutina/listar" + this.queryParams,);
    }
    if(!this.queryParams || soloPresets){
      this.registrosListado = this.registrosListado.concat(await this.apiService.getData("/rutinaPreset/listar"));
    }

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
	}

  public clickFiltrar() : void {
		this.actualizarQueryParamsDesdeFiltros(this.filtrosDisponibles);
		this.obtenerListado();
	}

  public async clickBotonAgregar() : Promise<void> {
    let esP = ! await this.confirmService.mostrarMensajeConfirmacion(
			"¿Qué tipo de rutina desea agregar?",
      
      "Rutina socio",
      "Rutina preset",
			
		);
    this.router.navigate([`rutina/${esP}/agregar`]);
	}

	public async clickBotonEliminar(fila : Array<any>) : Promise<void> {
    let msjD = "Rutina eliminada con exito"
    let respuesta = await this.confirmService.mostrarMensajeConfirmacion(
			"¿Estás seguro que quieres eliminar la rutina?",
			"Eliminar"	
		);
    let borrado : any;
      if(respuesta){
        if(fila[1] == "----" ){
          ////Es preset///
             borrado=await this.apiService.getData(`/rutinaPreset/${fila[0]}/eliminar`);
            
        }else{
             borrado=await this.apiService.getData(`/rutina/${fila[0]}/eliminar`);
        }
        if(borrado == "ERR-NOAUTORIZADO" ){
          msjD = "Usted no puede borrar la rutina"
        }
        await this.confirmService.mostrarMensajeConfirmacion(
          msjD,
          "Continuar"	
        );
        this.obtenerListado();
        console.log(borrado);
      }
	}

}
