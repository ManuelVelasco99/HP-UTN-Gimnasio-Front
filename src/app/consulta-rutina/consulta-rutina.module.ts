import { BaseModule                  } from '../base/base.module';
import { CommonModule                } from '@angular/common';
import { ConsultaRutinaComponent     } from './consulta-rutina.component';
import { ConsultaRutinaRoutingModule } from './consulta-rutina-routing.module';
import { NgModule                    } from '@angular/core';
import { NO_ERRORS_SCHEMA            } from '@angular/core';

import { AgregarNotaEjerciciosComponent              } from './agregar-nota-ejercicios/agregar-nota-ejercicios.component';
import { ConsultaRutinaDiaListadoEjerciciosComponent } from './dia-listado-ejercicios/consulta-rutina-dia-listado-ejercicios.component';
import { ListarNotasEjerciciosComponent              } from './listar-notas-ejercicios/listar-notas-ejercicios.component';


@NgModule({
	declarations: [
		ConsultaRutinaComponent,
  		ConsultaRutinaDiaListadoEjerciciosComponent,
		AgregarNotaEjerciciosComponent,
		ListarNotasEjerciciosComponent
	],
	imports: [
		BaseModule,
		CommonModule,
		ConsultaRutinaRoutingModule
	]
	,
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ConsultaRutinaModule { }
