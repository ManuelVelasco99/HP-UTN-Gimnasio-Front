import { firstValueFrom             } from 'rxjs';
import { Injectable                 } from '@angular/core';
import { MatDialog                  } from '@angular/material/dialog';
import { PopupConfirmacionComponent } from './popup-confirmacion/popup-confirmacion.component';

@Injectable({
  	providedIn: 'root'
})
export class ConfirmService {

  	constructor(
		public dialog: MatDialog
	) { }

	public async mostrarMensajeConfirmacion(
		textoPrincipal : string     = "",
		textoBotonAceptar : string  = "",
		textoBotonCancelar : string = "",
		ocultarBotonCancelar : boolean = false,

	) : Promise<boolean> {
		let resposne = await firstValueFrom( 
			this.dialog.open(
				PopupConfirmacionComponent,
				{
					data : {
						textoPrincipal     : textoPrincipal,
						textoBotonAceptar  : textoBotonAceptar,
						textoBotonCancelar : textoBotonCancelar,
						ocultarBotonCancelar : ocultarBotonCancelar,
					},
					autoFocus: false
				}
			).beforeClosed()
		)
		if(resposne){
			return true;
		}
		return false;
	}
}
