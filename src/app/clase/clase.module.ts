import { BaseModule                      } from '../base/base.module';
import { CommonModule                    } from '@angular/common';
import { NgModule                        } from '@angular/core';
import { NO_ERRORS_SCHEMA                } from '@angular/core';
import { ClaseListarComponent  } from './listar/clase-listar.component';
import { ClaseRoutingModule    } from './clase-routing.module';
import { ClaseAgregarComponent } from './agregar/clase-agregar.component';


@NgModule({
	declarations: [
		ClaseListarComponent,
  		ClaseAgregarComponent
	],
	imports: [
		BaseModule,
		CommonModule,
		ClaseRoutingModule,
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ClaseModule { }
