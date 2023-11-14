import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import { MatDialogRef            } from '@angular/material/dialog';

@Component({
	selector    : 'app-agregar-nota-ejercicios',
	templateUrl : './agregar-nota-ejercicios.component.html',
	styleUrls   : ['./agregar-nota-ejercicios.component.scss']
})
export class AgregarNotaEjerciciosComponent extends FormularioBaseComponent {

	constructor(
		public dialogRef: MatDialogRef<AgregarNotaEjerciciosComponent>
	){
		super();
	}

	ngOnInit () : void {
        this.crearFormulario();   
    }

    private crearFormulario() {
		this.form = this.formBuilder.group({
			comentario         : new FormControl({ value: '', disabled: false }),
			peso               : new FormControl({ value: '', disabled: false }),
		});
	}

	public agregarNota() {
		this.form.markAllAsTouched();

		if(this.form.invalid){
			return;
		}
		this.dialogRef.close(this.form.value);
	}
}
