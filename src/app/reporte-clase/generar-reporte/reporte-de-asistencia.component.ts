import { Component, Input    } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartType    } from 'chart.js';

@Component({
	selector    : 'app-reporte-de-asistencia',
	templateUrl : './reporte-de-asistencia.component.html',
	styleUrls   : ['./reporte-de-asistencia.component.scss']
})
export class ReporteDeAsistenciaComponent {
	@Input()
	public cupoTotal : number =0;
	@Input()
	public cantidadClases : number =0;
	@Input()
	public porAsistenciaTotal : number =0;

	@Input()
	public barChartLabels: Array<any>= [];
	@Input()
	public barChartData: ChartDataset[] = [
		{ xAxisID:"Clases"  , yAxisID:"Porcentaje de asistencia", data:[]}
	];
	@Input()
	public valoresBusqueda : any = {
		fechaDesde : "2023-11-12",
		fechaHasta : "2023-12-12",
		tipoClase: "Zumba",
	}

	barChartOptions: ChartOptions = {
		responsive: true,
		backgroundColor : '#3f51b5',
	};

	
	barChartType: ChartType = 'bar';
	barChartLegend = false;
	barChartPlugins = [];
	
	public imprimir():void{
		window.print();
	  }
	
}

