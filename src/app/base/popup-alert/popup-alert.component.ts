import { Component       } from '@angular/core';
import { Inject          } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef    } from '@angular/material/dialog';



@Component({
    selector    : 'app-popup-confirmacion',
    templateUrl : './popup-alert.component.html',
    styleUrls   : ['./popup-alert.component.scss']
})
export class PopupAlertComponent {
	public tipoAlerta 			:number =1;
	public textoNASocio!     : string;

	constructor(
		@Inject(MAT_DIALOG_DATA) data: {name: string},
		public dialogRef: MatDialogRef<PopupAlertComponent>
	) {
		this.validarMatDialogData(data);
	}

	private validarMatDialogData(data : any) : void {

		this.tipoAlerta = data?.tipoAlerta ? data?.tipoAlerta : 1;
		this.textoNASocio = data?.textoNASocio ? data.textoNASocio : "";

	}
	
}