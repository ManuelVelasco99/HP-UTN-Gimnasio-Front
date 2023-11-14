import { Injectable } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { NgModule   } from '@angular/core';
import { PopupMultimediaComponent } from './popup-multimedia/popup-multimedia.component';

@Injectable({
  	providedIn: 'root'
})
@NgModule()
export class MultimediaService {

    constructor(
		public  dialog : MatDialog,
	) { }
	
	public mostrarPopupMultimedia(url : string) : void {
		this.dialog.open(
			PopupMultimediaComponent,
			{
				data : {
					url : url
				},
				autoFocus: false,
				width: '100%',
				panelClass : "panel-multimedia",
			}
		)
	}
}
