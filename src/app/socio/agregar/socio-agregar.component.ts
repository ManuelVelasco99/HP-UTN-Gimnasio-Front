import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
	selector    : 'app-socio-agregar',
	templateUrl : './socio-agregar.component.html',
	styleUrls   : ['./socio-agregar.component.scss']
})
export class SocioAgregarComponent extends FormularioBaseComponent {

	public tituloFormulario : string = "Agregar socio";

	ngOnInit(): void {	
		this.uri = "/socio"	
		this.crearFormulario();
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			nombre                : new FormControl({ value: '', disabled: false }),
			apellido              : new FormControl({ value: '', disabled: false }),
			descripcion           : new FormControl({ value: '', disabled: false }),
			dni                   : new FormControl({ value: '', disabled: false }),
			fecha_nacimiento      : new FormControl({ value: '', disabled: false }),
			telefono              : new FormControl({ value: '', disabled: false }),
			email                 : new FormControl({ value: '', disabled: false }),
			contrasenia           : new FormControl({ value: '', disabled: false }),
			confirmar_contrasenia : new FormControl({ value: '', disabled: false }),
		});
	}

	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		if(this.form.invalid){
			return;
		}

		//TODO: Agregar el modo edicion
		try {
			formValue.fecha_nacimiento = new Date(formValue.fecha_nacimiento).toISOString().split("T")[0];
			await this.apiService.post(`${this.uri}/agregar`,formValue);
			this.router.navigate(["socio/listar"]);
		} catch (error) {

		}

	}

	public clickCancelar() : void {
		this.router.navigate(["socio/listar"]);
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
}		
