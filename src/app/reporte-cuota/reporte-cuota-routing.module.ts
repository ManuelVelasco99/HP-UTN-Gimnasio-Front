import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { ReporteDeCuotaModule } from './reporte-cuota.module';
import { ConsultarReporteCuotaComponent } from './consultar-reporte-cuota/consultar-reporte-cuota.component';

const routes: Routes = [
	{
		path: 'reporte-cuota',
		component: ConsultarReporteCuotaComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ReporteDeCuotaRoutingModule { }
