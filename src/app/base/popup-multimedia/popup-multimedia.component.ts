import { Component       } from '@angular/core';
import { Inject          } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef    } from '@angular/material/dialog';

@Component({
	selector    : 'app-popup-multimedia',
	templateUrl : './popup-multimedia.component.html',
	styleUrls   : ['./popup-multimedia.component.scss']
})
export class PopupMultimediaComponent {

  public url : string = "";

  public textoBotonCancelar! : string;

	constructor(
		@Inject(MAT_DIALOG_DATA) data: {url: string},
		public dialogRef: MatDialogRef<PopupMultimediaComponent>
	) {
		this.url = data.url;
	}
}
