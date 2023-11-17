import { Component, Input    } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartType    } from 'chart.js';

@Component({
  selector: 'app-generar-reporte-cuota',
  templateUrl: './generar-reporte-cuota.component.html',
  styleUrls: ['./generar-reporte-cuota.component.scss']
})
export class GenerarReporteCuotaComponent {
 	@Input()
  	public cantCuotasTot : any = {cTotal: 0, monto:0 }
 	@Input()
  	public cantCuotasPagas : any = {cTotal: 0, monto:0 }
 	@Input()
  	public cantCuotasImpagas : any = {cTotal: 0, monto:0 }
	@Input()
	public cantidadClases : number =0;
	@Input()
	public porAsistenciaTotal : number =0;

	@Input()
	public preciosPorMes: Array<any>= [];

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
	ngOnInit():void{
		console.log("barChartLabels", this.barChartLabels)
		console.log("barChartData", this.barChartData)
		console.log("this.valoresBusqueda", this.valoresBusqueda)
	}
	
	barChartType: ChartType = 'bar';
	barChartLegend = false;
	barChartPlugins = [];
	
	public imprimir():void{
		window.print();
	  }

	public calculoResumen():void{
		
	}
	
}
