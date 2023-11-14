import { AgregarNotaEjerciciosComponent } from '../agregar-nota-ejercicios/agregar-nota-ejercicios.component';
import { ApiService                     } from 'src/app/base/api.service';
import { Component                      } from '@angular/core';
import { firstValueFrom                 } from 'rxjs';
import { Input                          } from '@angular/core';
import { ListarNotasEjerciciosComponent } from '../listar-notas-ejercicios/listar-notas-ejercicios.component';
import { MatDialog                      } from '@angular/material/dialog';
import { MultimediaService              } from 'src/app/base/multimedia.service';

@Component({
    selector   : 'app-consulta-rutina-dia-listado-ejercicios',
    templateUrl: './consulta-rutina-dia-listado-ejercicios.component.html',
    styleUrls  : ['./consulta-rutina-dia-listado-ejercicios.component.scss']
})
export class ConsultaRutinaDiaListadoEjerciciosComponent {

	@Input()
	public ejercicios : Array<any> = [];

	public ejerciciosParaMostrar : Array<any> = [];

	@Input()
	public diaRutina! : number;

	constructor(
		private apiService        : ApiService,
		public  dialog            : MatDialog,
		private multimediaService : MultimediaService,
	){

	}

	ngOnInit() : void {	
		this.ejercicios.forEach((element: any) => {
			if(this.diaRutina === element.diaRutina)
			this.ejerciciosParaMostrar.push({
				id: element.id,
				ejercicio: element.nombre,
				descripcion: element.descripcion,
				series: element.series,
				mostrarNotas : false,
				repeticiones: element.repeticiones,
				multimedia: element.multimedia,
				notas: element.notas ? element.notas : []
			})
		});
	}

	public async clickAgregarNota($event : any, index : number) {
		$event.stopPropagation();
		let response = await firstValueFrom( 
			this.dialog.open(
				AgregarNotaEjerciciosComponent,
				{
					autoFocus: false,
					width: '100%',
					maxWidth: '600px',
					panelClass : "panel-agregar-nota"
				}
			).beforeClosed()
		)
		if(response){
			let nuevaNota = await this.apiService.post(
				`/rutina-socio/${this.ejerciciosParaMostrar[index].id}/agregar-nota`,
				response
			);
			this.ejerciciosParaMostrar[index].notas.unshift(response);
		}

	}

	public async verNotas($event : any, index : number) {	
		$event.stopPropagation();
		this.dialog.open(
			ListarNotasEjerciciosComponent,
			{
				data : {
					notas : this.ejerciciosParaMostrar[index].notas
				},
				autoFocus: false,
				width: '100%',
				height: 'fit-content',
				maxWidth: '600px',
				panelClass : "panel-agregar-nota",
				maxHeight : "90vh"
			}
		)
	}

	public clickMultimedia($event : any, index : number) {
		$event.stopPropagation();
		this.multimediaService.mostrarPopupMultimedia(this.ejerciciosParaMostrar[index].multimedia);
		console.log(this.ejerciciosParaMostrar[index].multimedia)
	}


}
