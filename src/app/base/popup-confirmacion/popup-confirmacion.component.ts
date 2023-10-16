import { Component       } from '@angular/core';
import { Inject          } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef    } from '@angular/material/dialog';


@Component({
    selector    : 'app-popup-confirmacion',
    templateUrl : './popup-confirmacion.component.html',
    styleUrls   : ['./popup-confirmacion.component.scss']
})
export class PopupConfirmacionComponent {

	public textoPrincipal!     : string;
	public textoBotonAceptar!  : string;
	public textoBotonCancelar! : string;

	constructor(
		@Inject(MAT_DIALOG_DATA) data: {name: string},
		public dialogRef: MatDialogRef<PopupConfirmacionComponent>
	) {
		this.validarMatDialogData(data);
	}

	private validarMatDialogData(data : any) : void {

		this.textoPrincipal = data?.textoPrincipal ? data.textoPrincipal : "";

		this.textoBotonAceptar = data?.textoBotonAceptar ? data.textoBotonAceptar : "Aceptar";

		this.textoBotonCancelar = data?.textoBotonCancelar ? data.textoBotonCancelar : "Cancelar";

	}
	
}