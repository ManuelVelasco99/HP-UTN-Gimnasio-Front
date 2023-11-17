import { BaseModule            				} from '../base/base.module';
import { CommonModule          				} from '@angular/common';
import { NgModule              				} from '@angular/core';
import { NO_ERRORS_SCHEMA      				} from '@angular/core';
import { ReporteDeAsistenciaRoutingModule 	} from './reporte-clase-routing.module';
import { ConsultaReporteAsistenciaComponent } from './consulta-reporte/consulta-reporte-asistencia.component';
import { ReporteDeAsistenciaComponent 		} from './generar-reporte/reporte-de-asistencia.component';

@NgModule({
	declarations: [
		ConsultaReporteAsistenciaComponent,
		ReporteDeAsistenciaComponent
	],
	imports: [
		BaseModule,
		CommonModule,
		ReporteDeAsistenciaRoutingModule,
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class RepoirteDeAsistenciaModule { }
