import { BaseModule                  } from '../base/base.module';
import { CommonModule                } from '@angular/common';
import { ConsultaRutinaComponent     } from './consulta-rutina.component';
import { ConsultaRutinaRoutingModule } from './consulta-rutina-routing.module';
import { NgModule                    } from '@angular/core';
import { NO_ERRORS_SCHEMA            } from '@angular/core';

import { ConsultaRutinaDiaListadoEjerciciosComponent } from './dia-listado-ejercicios/consulta-rutina-dia-listado-ejercicios.component';


@NgModule({
	declarations: [
		ConsultaRutinaComponent,
  ConsultaRutinaDiaListadoEjerciciosComponent
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
