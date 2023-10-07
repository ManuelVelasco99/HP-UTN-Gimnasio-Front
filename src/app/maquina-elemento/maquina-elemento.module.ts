import { BaseModule                      } from '../base/base.module';
import { CommonModule                    } from '@angular/common';
import { NgModule                        } from '@angular/core';
import { NO_ERRORS_SCHEMA                } from '@angular/core';
import { MaquinaElementoAgregarComponent } from './agregar/maquina-elemento-agregar.component';
import { MaquinaElementoRoutingModule    } from './maquina-elemento-routing.module';


@NgModule({
	declarations: [
		MaquinaElementoAgregarComponent
	],
	imports: [
		BaseModule,
		CommonModule,
		MaquinaElementoRoutingModule,
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class MaquinaElementoModule { }
