import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import { MatDialog               } from '@angular/material/dialog';
import { PopupAlertComponent     } from 'src/app/base/popup-alert/popup-alert.component';

@Component({
	selector    : 'app-ingreso-socio-ingresar',
	templateUrl : './ingreso-socio-ingresar.component.html',
	styleUrls   : ['./ingreso-socio-ingresar.component.scss']
})
export class IngresoSocioIngresarComponent extends FormularioBaseComponent {
	public dni :string =""; 


	constructor(
		public dialog: MatDialog 
	)
	{
			super();
		}
	ngOnInit(): void {	
		this.crearFormulario();
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			dni: new FormControl({ value: '', disabled: false}) ,
		});
	}

	public async validarIngreso() : Promise <void> {
		
		if(!this.form.value.dni){
			return;
		}
		this.dni = this.form.value.dni
		
		let respuesta = await this.apiService.getData(`/socio/${this.dni}/validar-ingreso`);
		this.dialog.open(
			PopupAlertComponent,
			{
				data : {
					tipoAlerta     : respuesta[1],
					textoNASocio  : respuesta[0] ,
				},
				autoFocus: false,
				disableClose: true
			}
		)

		setTimeout(() => {
			this.dialog.closeAll();
			this.form.reset();
		}, 5000);
		
	}
}
