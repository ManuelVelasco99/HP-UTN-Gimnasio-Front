import { Component    		} from '@angular/core';
import { EventEmitter 		} from '@angular/core';
import { Input        		} from '@angular/core';
import { MatTable     		} from '@angular/material/table';
import { Output       		} from '@angular/core';
import { ViewChild    		} from '@angular/core';

import { LocatorService 	} from '../../locator.service';
import { ConfirmService 	} from '../../confirm.service';


import { MatCheckboxModule	} from '@angular/material/checkbox';

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

	@Input()
	public esRutina : boolean = false;

	@Output()
    public clickBotonEditar   : EventEmitter<number> = new EventEmitter();

	@Output()
    public clickBotonEditarRutina   : EventEmitter<Array<any>> = new EventEmitter();

	@Output()
    public clickBotonEliminar : EventEmitter<number> = new EventEmitter();

	@Output()
    public clickBotonEliminarRutina : EventEmitter<any> = new EventEmitter();
  
	@Output()
    public clickBotonAsignarRutina: EventEmitter<number> = new EventEmitter();
  
 	@Output()
    public clickBotonFiltrar  : EventEmitter<any> = new EventEmitter();

	@Output()
	public clickBotonAgregar :EventEmitter<any> = new EventEmitter();

	@Output()
	public clickFiltroPreset : EventEmitter<boolean> = new EventEmitter();

	@ViewChild(MatTable)
	public table! : MatTable<any>;
	
	public confirmService = LocatorService.injector.get(ConfirmService);	  
	
	public soloPresets : boolean =false;

	public cambioCheck(){
		console.log("solo presets", this.soloPresets)
	}
}
