import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
	selector    : 'app-tipo-ejercicio-agregar',
	templateUrl : './tipo-ejercicio-agregar.component.html',
	styleUrls   : ['./tipo-ejercicio-agregar.component.scss']
})
export class TipoEjercicioAgregarComponent extends FormularioBaseComponent {

	public tituloFormulario  : string = this.modoEdicion ? 'Editar Tipo ejercicio' : 'Agregar Tipo ejercicio';

	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}

	ngOnInit(): void {	
		this.uri = "/tipo-ejercicio"	
		this.crearFormulario();
		let params = this.route.snapshot.params;
		if(this.modoEdicion) {
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			descripcion : new FormControl({ value: '', disabled: false }),
			multimedia  : new FormControl({ value: '', disabled: false }),
		});
	}

	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

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
				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.redireccionarAlListado();
			} catch (error) {}
		}
		
	}

	public clickCancelar() : void {
		this.redireccionarAlListado();
	}

	private redireccionarAlListado() : void {
		this.router.navigate(["tipo-ejercicio/listar"]);
	}

}
