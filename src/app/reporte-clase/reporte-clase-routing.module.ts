import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { RepoirteDeAsistenciaModule } from './reporte-clase.module';
import { ConsultaReporteAsistenciaComponent } from './consulta-reporte/consulta-reporte-asistencia.component';
import { ReporteDeAsistenciaComponent } from './generar-reporte/reporte-de-asistencia.component';

const routes: Routes = [
	{
		path: 'reporte-asistencia',
		component: ConsultaReporteAsistenciaComponent,
	},
	{
		path: ':id/:fd/:fa/reporte-generado',
		component: ReporteDeAsistenciaComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ReporteDeAsistenciaRoutingModule { }
