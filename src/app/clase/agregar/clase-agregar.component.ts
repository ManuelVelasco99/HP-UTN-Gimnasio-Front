import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import * as moment from 'moment';

@Component({
	selector    : 'app-clase-agregar',
	templateUrl : './clase-agregar.component.html',
	styleUrls   : ['./clase-agregar.component.scss']
})
export class ClaseAgregarComponent extends FormularioBaseComponent{
  
  	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}

	public tituloFormulario : string = this.modoEdicion ? 'Editar clase': 'Agregar clase ';

	public tiposClase: Array<any> = [];
	public profesores: Array<any> = [];

	ngOnInit(): void {	
		this.uri = "/clase";
		this.crearFormulario();
		this.rellenarTipoEjercicioYProfesor()
		let params = this.route.snapshot.params;
		if(this.modoEdicion){
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}

  	private crearFormulario() {
		this.form = this.formBuilder.group({
			horario_inicio : new FormControl({ value: '', disabled: false }),
			horario_fin    : new FormControl({ value: '', disabled: false }),
			fecha          : new FormControl({ value: '', disabled: false }),
      		tipoClase      : new FormControl({ value: '', disabled: false }),
			profesor       : new FormControl({ value: '', disabled: false }),
		});
	}

  	private async rellenarTipoEjercicioYProfesor() : Promise <void>{
		this.tiposClase = await this.apiService.getData(`/tipo-clase/listar`);
		this.profesores = await this.apiService.getData(`/profesor/listar`);
	}

  	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		if(this.form.invalid){
			return;
		}
		if(this.modoEdicion){
			try {
				
				formValue.fecha = new Date(formValue.fecha).toISOString().split("T")[0];
				formValue.horario_inicio = moment(`1970-01-01 ${formValue.horario_inicio}`).format('HH:mm:ss');
				formValue.horario_fin = moment(`1970-01-01 ${formValue.horario_fin}`).format('HH:mm:ss');
				formValue.profesor = parseInt(formValue.profesor, 10);

				await this.apiService.post(`${this.uri}/${this.id}/editar`,formValue);
						this.router.navigate(["clase/listar"]);
			} catch (error : any) {
				if(error.status === 409){
					this.confirmService.mostrarMensajeConfirmacion(error.error.message,"","",true);
				}
			}
		}else{
			try {
				formValue.fecha = new Date(formValue.fecha).toISOString().split("T")[0];
				formValue.horario_inicio = moment(`1970-01-01 ${formValue.horario_inicio}`).format('HH:mm:ss');
				formValue.horario_fin = moment(`1970-01-01 ${formValue.horario_fin}`).format('HH:mm:ss');
				formValue.profesor = parseInt(formValue.profesor, 10);
				
				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.router.navigate(["clase/listar"]);
			} catch (error : any) {
				if(error.status === 409){
					this.confirmService.mostrarMensajeConfirmacion(error.error.message,"","",true);
				}
			}
		}

	}

	public clickCancelar() : void {
		this.router.navigate(["clase/listar"]);
	}

}
