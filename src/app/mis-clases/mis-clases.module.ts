import { NO_ERRORS_SCHEMA         } from '@angular/core';
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { MisClasesRoutingModule   } from './mis-clases-routing.module';
import { MisClasesListarComponent } from './listar/mis-clases-listar.component';
import { BaseModule               } from '../base/base.module';


@NgModule({
	declarations: [
    	MisClasesListarComponent
  	],
  	imports: [
		BaseModule,
		CommonModule,
		MisClasesRoutingModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class MisClasesModule { }
