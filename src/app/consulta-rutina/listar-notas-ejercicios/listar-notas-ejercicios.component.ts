import { Component       } from '@angular/core';
import { Inject          } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef    } from '@angular/material/dialog';

@Component({
	selector    : 'app-listar-notas-ejercicios',
	templateUrl : './listar-notas-ejercicios.component.html',
	styleUrls   : ['./listar-notas-ejercicios.component.scss']
})
export class ListarNotasEjerciciosComponent {

	public notas : Array<any> = [];

	constructor(
		@Inject(MAT_DIALOG_DATA) data: {notas: Array<any>},
		public dialogRef: MatDialogRef<ListarNotasEjerciciosComponent>
	){
		this.notas = data.notas;
	}
}
