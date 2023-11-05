import { Component    } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input        } from '@angular/core';
import { MatTable     } from '@angular/material/table';
import { Output       } from '@angular/core';
import { ViewChild    } from '@angular/core';

export class Filtro {
	textoFiltro  : string = "";
	valorFiltro  : string = "";
	nombreFiltro : string = "";
}

@Component({
	selector    : 'app-layout-listado',
	templateUrl : './layout-listado.component.html',
	styleUrls   : ['./layout-listado.component.scss']
})
export class LayoutListadoComponent {

	@Input()
	public tituloListado : string = "";

	@Input()
	public urlAgregar : string = "";

	@Input()
	public registrosListado : Array<any> = [];

	@Input()
	public columnasAMostrar: string[] = [];

	@Input()
	public filtrosDisponibles : Filtro[] = [];

	@Output()
    public clickBotonEditar   : EventEmitter<number> = new EventEmitter();

	@Output()
    public clickBotonEditarRutina   : EventEmitter<Array<any>> = new EventEmitter();

	@Output()
    public clickBotonEliminar : EventEmitter<number> = new EventEmitter();
  
	@Output()
    public clickBotonAsignarRutina: EventEmitter<number> = new EventEmitter();
  
  @Output()
    public clickBotonFiltrar  : EventEmitter<any> = new EventEmitter();

	@ViewChild(MatTable)
	public table! : MatTable<any>;

	public esRutina : boolean = false;
	
	
	ngOnInit(): void{
		if (this.urlAgregar == '/rutina/agregar') {
			this.esRutina = true;
		}else{
			this.esRutina = false;
		}
	  }
	
}
