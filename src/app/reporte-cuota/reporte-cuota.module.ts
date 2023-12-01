import { BaseModule            				} from '../base/base.module';
import { CommonModule          				} from '@angular/common';
import { NgModule              				} from '@angular/core';
import { NO_ERRORS_SCHEMA      				} from '@angular/core';
import { ReporteDeCuotaRoutingModule 	} from './reporte-cuota-routing.module';
import { ConsultarReporteCuotaComponent } from './consultar-reporte-cuota/consultar-reporte-cuota.component';
import { GenerarReporteCuotaComponent 		} from './generar-reporte-cuota/generar-reporte-cuota.component';

@NgModule({
	declarations: [
		ConsultarReporteCuotaComponent,
		GenerarReporteCuotaComponent
	],
	imports: [
		BaseModule,
		CommonModule,
		ReporteDeCuotaRoutingModule,
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ReporteDeCuotaModule { }
