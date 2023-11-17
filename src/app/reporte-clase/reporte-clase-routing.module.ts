import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { RepoirteDeAsistenciaModule } from './reporte-clase.module';
import { ConsultaReporteAsistenciaComponent } from './consulta-reporte/consulta-reporte-asistencia.component';

const routes: Routes = [
	{
		path: 'reporte-asistencia',
		component: ConsultaReporteAsistenciaComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ReporteDeAsistenciaRoutingModule { }
