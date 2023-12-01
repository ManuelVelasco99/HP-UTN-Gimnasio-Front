import { BaseModule                    } from '../base/base.module';
import { CommonModule                  } from '@angular/common';
import { IngresoSocioIngresarComponent } from './ingresar/ingreso-socio-ingresar.component';
import { IngresoSocioRoutingModule     } from './ingreso-socio-routing.module';
import { NO_ERRORS_SCHEMA              } from '@angular/core';
import { NgModule                      } from '@angular/core';


@NgModule({
	declarations: [
    IngresoSocioIngresarComponent
  ],
	imports: [
		BaseModule,
		CommonModule,
		IngresoSocioRoutingModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class IngresoSocioModule { }
