import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import { Input        			 } from '@angular/core';
import { Output       			 } from '@angular/core';
import { EventEmitter			 } from '@angular/core';
import { MatSelectModule 		 } from '@angular/material/select';

export class Ejercicio {
	id!: number;
	id_tipo_ejercicio! : number;
	series! : number;
	repeticiones! : string;
	diaRutina!: number;
}

@Component({
  selector: 'app-ejercicio-agregar-rutina',
  templateUrl: './ejercicio-agregar-rutina.component.html',
  styleUrls: ['./ejercicio-agregar-rutina.component.scss']
})
export class EjercicioAgregarRutinaComponent extends FormularioBaseComponent  {
	
	@Input()
 	public numeroDiaEjercicio : number = 1 ;
	@Input()
	public idRutinaPreset : number =0 ;
	@Input()
	public camposDeshabilitados : boolean = true;
	//public tituloFormulario  : string = this.modoEdicion ? 'Editar ejercicio' : 'Agregar Ejercicio';
  	public registrosEjercicios: Array<any> = [];
	
	@Input()
	public ejercicio! : Ejercicio;
	
	constructor(
		//public route : ActivatedRoute,
	) {
		super();
	} 

  	ngOnInit(): void {	
		this.uri = "/ejercicio"	
		this.crearFormulario();
		this.rellenarEjercicios();
	}

  private crearFormulario(){
    this.form = this.formBuilder.group(
      {
		dia : new FormControl({ value: '', disabled: false }),
        series : new FormControl({ value: '', disabled: false }),
		repeticiones : new FormControl({ value: '', disabled: false }),
		rutinaPresetId : new FormControl({ value: '', disabled: false }),
      }
    )
  }

  private async rellenarEjercicios() : Promise <void>{
		this.registrosEjercicios = await this.apiService.getData("/tipo-ejercicio/listar");
	}
	
  public async enviar() : Promise<void> {
		this.form.value.dia = this.numeroDiaEjercicio;
		this.form.value.rutinaPresetId = this.idRutinaPreset;
		this.form.markAllAsTouched();
		let formValue = this.form.value;
		if(this.form.invalid){
			
			return;
		}
		if(this.modoEdicion){
			try {
				///await this.apiService.post(`${this.uri}/${this.id}/editar`,formValue);
				//this.redireccionarAlListado();
			} catch (error) {}
		}
		else{
			try {
				//await this.apiService.post(`${this.uri}/agregar`,formValue);
				//this.redireccionarAlListado();
			} catch (error) {}
		}
		
	}

	public clickCancelar() : void {
			this.redireccionarAlListado();
		}

	

	private redireccionarAlListado() : void {
		this.router.navigate(["usuario/listar"]);
	}
	@Output()
    public clickBotonEliminarEjercicio : EventEmitter<void> = new EventEmitter();
	
}
