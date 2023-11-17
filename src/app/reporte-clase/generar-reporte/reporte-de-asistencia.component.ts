import { Component    } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartType    } from 'chart.js';

@Component({
	selector    : 'app-reporte-de-asistencia',
	templateUrl : './reporte-de-asistencia.component.html',
	styleUrls   : ['./reporte-de-asistencia.component.scss']
})
export class ReporteDeAsistenciaComponent {

	barChartOptions: ChartOptions = {
		responsive: true,
	};
	barChartLabels: Array<any>= ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
	barChartType: ChartType = 'bar';
	barChartLegend = true;
	barChartPlugins = [];
	
	barChartData: ChartDataset[] = [
		{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
	];
}
