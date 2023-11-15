import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmService } from 'src/app/base/confirm.service';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import { LocatorService } from 'src/app/base/locator.service';
import { PopupAlertComponent } from 'src/app/base/popup-alert/popup-alert.component';

@Component({
	selector    : 'app-ingreso-socio-ingresar',
	templateUrl : './ingreso-socio-ingresar.component.html',
	styleUrls   : ['./ingreso-socio-ingresar.component.scss']
})
export class IngresoSocioIngresarComponent extends FormularioBaseComponent {
	public confirmService = LocatorService.injector.get(ConfirmService);	
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
			dni: new FormControl({ value: '', disabled: false }),
		});
	}

	public async validarIngreso() : Promise <void> {

		///await this.apiService.getData(`/profesor/${this.dni}/eliminar`);
		/// /:dni/validar-ingreso'
		if(this.form.invalid){
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
				autoFocus: false
			}
		)

		setTimeout(() => {
			this.dialog.closeAll();
			this.form.setValue(
				{
					dni:''
				}
			)
		}, 5000);

			

		
	}
}
