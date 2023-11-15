import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
  selector: 'app-cuota-agregar',
  templateUrl: './cuota-agregar.component.html',
  styleUrls: ['./cuota-agregar.component.scss']
})
export class CuotaAgregarComponent extends FormularioBaseComponent {
	public tituloFormulario  : string = this.modoEdicion ? 'Editar Cuota' : 'Agregar Cuota';

	public deshabilitarBotonPrincipal : boolean = true;

	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}


	ngOnInit(): void {	
		this.uri = "/cuota"	
		this.crearFormulario();
		let params = this.route.snapshot.params;
		if(this.modoEdicion) {
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			dni: new FormControl({ value: '', disabled: false }),
			nombre: new FormControl({ value: '', disabled: true }),
			apellido: new FormControl({ value: '', disabled: true }),
			fecha_nacimiento: new FormControl({ value: '', disabled: true }),
			telefono: new FormControl({ value: '', disabled: true }),
			fecha_desde: new FormControl({ value: '', disabled: true }),
			monto: new FormControl({ value: '', disabled: true }),
		});
	}

	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		console.log("formValue: ", formValue);
		if(this.form.invalid){
			return;
		}
		if(this.modoEdicion){
			try {
				await this.apiService.post(`${this.uri}/${this.id}/editar`,formValue);
				this.router.navigate(["cuota/listar"]);
			} catch (error) {}
		}
		else{
			try {
				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.router.navigate(["cuota/listar"]);
			} catch (error) {}
		}

	}

	public clickCancelar() : void {
		this.router.navigate(["cuota/listar"]);
	}

	public async clickValidarDniSocio() : Promise<void> {
		this.deshabilitarBotonPrincipal = false;
		try {
			let response = (await this.apiService.post("/cuota-mensual/validar-pago",{dni:this.form.get("dni")?.value})).data;

			let socio= response.socio
			let precio_cuota=response.precio_cuota

			Object.keys(socio).forEach((element: any) => {
				this.form.get(element)?.setValue(socio[element]);
			});
			Object.keys(precio_cuota).forEach((element: any) => {
				this.form.get(element)?.setValue(precio_cuota[element]);
			});
			this.deshabilitarBotonPrincipal = false;
			
		} catch (error) {
			console.log(error)
		}

	}
}
