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

	public enviar() : void {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		console.log("formValue: ", formValue);

		this.apiService.post(`${this.uri}/agregar`,formValue);
	}

	public clickCancelar() : void {
		console.log("se canceló");
	}

}
