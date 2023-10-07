import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
    selector    : 'app-maquina-elemento-agregar',
    templateUrl : './maquina-elemento-agregar.component.html',
    styleUrls   : ['./maquina-elemento-agregar.component.scss']
})
export class MaquinaElementoAgregarComponent extends FormularioBaseComponent {
	
    public tituloFormulario  : string = this.modoEdicion ? 'Editar Máquina Elemento' : 'Agregar Máquina elemento';

	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}


	ngOnInit(): void {	
		this.uri = "/maquina-elemento"	
		this.crearFormulario();
		let params = this.route.snapshot.params;
		if(this.modoEdicion) {
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			descripcion: new FormControl({ value: '', disabled: false }),
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
				this.router.navigate(["maquina-elemento/listar"]);
			} catch (error) {}
		}
		else{
			try {
				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.router.navigate(["maquina-elemento/listar"]);
			} catch (error) {}
		}

	}

	public clickCancelar() : void {
		this.router.navigate(["maquina-elemento/listar"]);
	}

}
