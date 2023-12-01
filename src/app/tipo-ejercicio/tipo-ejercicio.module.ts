import { BaseModule                    } from '../base/base.module';
import { CommonModule                  } from '@angular/common';
import { NgModule                      } from '@angular/core';
import { NO_ERRORS_SCHEMA              } from '@angular/core';
import { TipoEjercicioRoutingModule    } from './tipo-ejercicio-routing.module';
import { TipoEjercicioAgregarComponent } from './agregar/tipo-ejercicio-agregar.component';
import { TipoEjercicioListarComponent  } from './listar/tipo-ejercicio-listar.component';


@NgModule({
	declarations: [
		TipoEjercicioAgregarComponent,
    	TipoEjercicioListarComponent,
  	],
	imports: [
		BaseModule,
		CommonModule,
		TipoEjercicioRoutingModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class TipoEjercicioModule { }
