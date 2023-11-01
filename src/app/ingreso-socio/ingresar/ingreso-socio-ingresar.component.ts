import { Component } from '@angular/core';

@Component({
	selector    : 'app-ingreso-socio-ingresar',
	templateUrl : './ingreso-socio-ingresar.component.html',
	styleUrls   : ['./ingreso-socio-ingresar.component.scss']
})
export class IngresoSocioIngresarComponent {


	public validarIngreso() : void {
		alert("validando socio")
	}
}
