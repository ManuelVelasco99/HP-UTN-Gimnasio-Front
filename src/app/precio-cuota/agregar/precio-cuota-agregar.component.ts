import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
	selector    : 'app-precio-cuota-agregar',
	templateUrl : './precio-cuota-agregar.component.html',
	styleUrls   : ['./precio-cuota-agregar.component.scss']
})
export class PrecioCuotaAgregarComponent extends FormularioBaseComponent {

	public          tituloFormulario  : string = this.modoEdicion ? 'Editar Precio cuota' : 'Actualizar Precio cuota';
	public override textoBoton        : string = "Actualizar";

	ngOnInit(): void {	
		this.uri = "/precio-cuota"	
		this.crearFormulario();
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			monto : new FormControl({ value: '', disabled: false }),
			fecha_desde : new FormControl({ value: '', disabled: false }),
		});
	}

	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		if(this.form.invalid){
			return;
		}

		try {
			formValue.fecha_desde = formValue.fecha_desde.toISOString().slice(0, 19).replace('T', ' ');
			await this.apiService.post(`${this.uri}/agregar`,formValue);
			this.redireccionarAlListado();
		} catch (error) {}

	}

	public clickCancelar() : void {
		this.redireccionarAlListado();
	}

	private redireccionarAlListado() : void {
		this.router.navigate(["precio-cuota/listar"]);
	}

}
