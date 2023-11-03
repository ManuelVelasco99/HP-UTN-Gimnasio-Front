import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import { Dia, DiaAgregarRutinaComponent } from './dia/dia-agregar-rutina.component';
import { EjercicioAgregarRutinaComponent } from './ejercicio/ejercicio-agregar-rutina.component';



@Component({
	selector    : 'app-rutina-agregar',
	templateUrl : './rutina-agregar.component.html',
	styleUrls   : ['./rutina-agregar.component.scss']
})



export class RutinaAgregarComponent extends FormularioBaseComponent{

	public tituloFormulario  : string = this.modoEdicion ? 'Editar Rutina' : 'Agregar Rutina';
	public registrosRoles: Array<any> = [];
	public registrosDias: Array<any> = []; 
	public idRutinaP :number = 0;
	public registroEjercicios : Array<any> = [];
	public nombreRutina :string ='nombre rutina cargado';

	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}
  	ngOnInit(): void {	
		this.uri = "/rutinaPreset"	
		this.crearFormulario();
		let params = this.route.snapshot.params;
		this.agregarDia();
		if(this.modoEdicion) {
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			nombre : new FormControl({ value: '', disabled: false }),
		});
	}
  

 	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;
		let data : any = {};
		let dadata :any;
		this.nombreRutina = this.form.value.nombre;
		if(this.form.invalid){
			return;
		}

		if(this.modoEdicion){
			try {
				await this.apiService.post(`${this.uri}/${this.id}/editar`,formValue);
				this.redireccionarAlListado();
			} catch (error) {}
		}
		else{
			try {
				await this.apiService.post(`${this.uri}/agregar`,{ejercicios: this.registrosDias, nombreRutina: this.nombreRutina});
				//dadata = Object.values(data);
				// this.idRutinaP = dadata[0].id;
				// this.redireccionarAlListado();
				this.cargoEjer();
			
			} catch (error) {}
		}		
		
	}

	public cargoEjer():void{

		console.log("this.registrosDias: ",this.registrosDias);
	}

  	public agregarDia(): void{
		let dia : Array<Dia> = [];
		this.registrosDias.push(dia);

		for(let i=0; i < this.registrosDias.length; i++)
		{
			this.registrosDias[i].numeroDia= i+1;
			for(let j = 0; j<this.registrosDias[i].length; j++)
			{
				this.registrosDias[i][j].diaRutina =i+1;
			}
			
		}
  	}

	public eliminarDia(diaAEliminar:any ):void{
		let tempDias : Array <Dia>=[];
		console.log("Eliminrar dia en rutina");
		console.log(diaAEliminar.numeroDia);

		if(this.registrosDias.length>1){
			for(let i =0 ; i< this.registrosDias.length; i++){
				if(this.registrosDias[i]!= diaAEliminar){
					tempDias.push(this.registrosDias[i]);
				}
			}
			
			for(let i =0 ; i< tempDias.length; i++){
				tempDias[i].numeroDia=i+1;
				for(let j = 0; j<this.registrosDias[i].length; j++)
				{
					this.registrosDias[i][j].diaRutina =i+1;
				}
				
			}
			this.registrosDias=tempDias;
		}
				

	}
	public addEjercicio(dia:any){
		let newEjer = new EjercicioAgregarRutinaComponent; 
		dia.agregarEjercicio(newEjer);
	}

	public clickCancelar() : void {
		this.redireccionarAlListado();
	}

	private redireccionarAlListado() : void {
		this.router.navigate(["rutina/listar"]);
	}

}
