import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
	selector    : 'app-profesor-agregar',
	templateUrl : './profesor-agregar.component.html',
	styleUrls   : ['./profesor-agregar.component.scss']
})
export class ProfesorAgregarComponent extends FormularioBaseComponent {

	public errorDni : string = "";

	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}

	public tituloFormulario : string = this.modoEdicion ? 'Editar profesor': 'Agregar profesor ';
	

	ngOnInit(): void {	
		this.uri = "/profesor"	
		this.crearFormulario();
		let params = this.route.snapshot.params;
		if(this.modoEdicion){
			this.id = params['id'];
			this.cargarParaAsignar();
			
		}
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			nombre                : new FormControl({ value: '', disabled: false }),
			apellido              : new FormControl({ value: '', disabled: false }),
			dni                   : new FormControl({ value: '', disabled: false }),
			fecha_nacimiento      : new FormControl({ value: '', disabled: false }),
			telefono              : new FormControl({ value: '', disabled: false }),
			email                 : new FormControl({ value: '', disabled: false }),
			contrasenia           : new FormControl({ value: '', disabled: false }),
			confirmar_contrasenia : new FormControl({ value: '', disabled: false }),
		});
	}

	public async enviar() : Promise<void> {
		if(this.form.get("dni")?.value){
			let response = await this.apiService.post(`${this.uri}/${this.form.get("dni")?.value}/validar-profesor-dado-de-baja`,{});
			if(response.data.encontrado){
				this.confirmService.mostrarMensajeConfirmacion(
					`Antiguo profesor ${response.data.profesor.nombre + ' ' + response.data.profesor.apellido} dado de alta nuevamente`,
					"",
					"",
					true
				);
				this.router.navigate(["profesor/listar"]);
				return;
			}
		}

		this.form.markAllAsTouched();
		let formValue = this.form.value;

		if(this.form.invalid){
			return;
		} 
		if(this.modoEdicion){
			try {
				formValue.fecha_nacimiento = new Date(formValue.fecha_nacimiento).toISOString().split("T")[0];
				await this.apiService.post(`${this.uri}/actualizar`,{formValue, id: this.id});
				this.router.navigate(["profesor/listar"]);
			} catch (error : any) {
				if(error.status === 409){
					let errorAux = error.error;
					if(errorAux.dni){
						this.form.get("dni")?.setErrors({dni : errorAux.dni});
					}
					if(errorAux.email){
						this.form.get("email")?.setErrors({email : errorAux.email});
					}
				}
			}
		}else{
			try {
				formValue.fecha_nacimiento = new Date(formValue.fecha_nacimiento).toISOString().split("T")[0];
				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.router.navigate(["profesor/listar"]);
			} catch (error : any) {
				if(error.status === 409){
					let errorAux = error.error;
					if(errorAux.dni){
						this.form.get("dni")?.setErrors({dni : errorAux.dni});
					}
					if(errorAux.email){
						this.form.get("email")?.setErrors({email : errorAux.email});
					}
				}
			}
		}

	}

	public clickCancelar() : void {
		this.router.navigate(["profesor/listar"]);
	}


	public paswordChange() {
		if(this.form.get("confirmar_contrasenia")?.touched) {
			if(this.form.get("confirmar_contrasenia")?.value !== this.form.get("contrasenia")?.value){
				this.form.get("confirmar_contrasenia")?.setErrors({password_dont_macht: true});
				this.form.get("contrasenia")?.setErrors({password_dont_macht: true});
			}
			else{
				this.form.get("confirmar_contrasenia")?.setErrors(null);
				this.form.get("contrasenia")?.setErrors(null);
			}
		}
	}

	public paswordConfirmChange() {
		if(this.form.get("contrasenia")?.touched) {
			if(this.form.get("confirmar_contrasenia")?.value !== this.form.get("contrasenia")?.value){
				this.form.get("confirmar_contrasenia")?.setErrors({password_dont_macht: true});
				this.form.get("contrasenia")?.setErrors({password_dont_macht: true});
			}
			else{
				this.form.get("confirmar_contrasenia")?.setErrors(null);
				this.form.get("contrasenia")?.setErrors(null);
			}
		}
	}

  public async cargarParaAsignar(): Promise<void>{
	let profesor = await this.apiService.getData(`/profesor/${this.id}/obtener`);
    this.form.setValue({
      		nombre                	: profesor.nombre,
      		apellido              	: profesor.apellido,
			dni                   	: profesor.dni,
			fecha_nacimiento      	: profesor.fecha_nacimiento,
			telefono              	: profesor.telefono,
			email                 	: profesor.email,
			contrasenia           	: profesor.contrasenia,
			confirmar_contrasenia 	: profesor.contrasenia,
    });
  }
}		
