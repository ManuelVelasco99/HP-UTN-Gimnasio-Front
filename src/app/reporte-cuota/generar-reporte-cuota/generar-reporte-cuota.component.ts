import { Component    } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartType    } from 'chart.js';

@Component({
  selector: 'app-generar-reporte-cuota',
  templateUrl: './generar-reporte-cuota.component.html',
  styleUrls: ['./generar-reporte-cuota.component.scss']
})
export class GenerarReporteCuotaComponent {
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
