import { Component, Input    } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartType    } from 'chart.js';
import { ActivatedRoute          } from '@angular/router';

@Component({
  selector: 'app-generar-reporte-cuota',
  templateUrl: './generar-reporte-cuota.component.html',
  styleUrls: ['./generar-reporte-cuota.component.scss']
})
export class GenerarReporteCuotaComponent {
  constructor(
		private route : ActivatedRoute,
	) {
		
	}  
  
  ngOnInit(): void {	
      let params = this.route.snapshot.params;
      let fd = params['fd'];
      let fa = params['fa'];
      console.log("params: ",params);
    }

    @Input()
    public cantCuotasTotal : number =0;
    @Input()
    public cantCuotasPagas : number =0;
    @Input()
    public cantCuotasImpagas : number =0;

    @Input()
    public barChartLabels: Array<any>= [];
    @Input()
    public barChartData: ChartDataset[] = [
      { xAxisID:"Cuotas"  , yAxisID:"Cant de cuotas", data:[]}
    ];
    @Input()
    public valoresBusqueda : any = {
      fechaDesde : "2023-11-12",
      fechaHasta : "2023-12-12",
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
