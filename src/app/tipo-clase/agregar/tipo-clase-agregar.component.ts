import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
	selector    : 'app-tipo-clase-agregar',
	templateUrl : './tipo-clase-agregar.component.html',
	styleUrls   : ['./tipo-clase-agregar.component.scss']
})
export class TipoClaseAgregarComponent extends FormularioBaseComponent {

	public tituloFormulario : string = this.modoEdicion ? 'Editar Tipo clase' : 'Agregar Tipo clase';

	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}

	ngOnInit(): void {	
		this.uri = "/tipo-clase"	
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
			cupo        : new FormControl({ value: '', disabled: false }),
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
		this.router.navigate(["tipo-clase/listar"]);
	}

}
