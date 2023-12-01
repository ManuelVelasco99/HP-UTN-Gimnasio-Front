import { BaseModule } from '../base/base.module';
import { CommonModule } from '@angular/common';
import { CuotaRoutingModule } from './cuota-routing.module';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CuotaAgregarComponent } from './agregar/cuota-agregar.component';
import { CuotaListarComponent } from './listar/cuota-listar.component';

@NgModule({
	declarations: [
		CuotaAgregarComponent,
		CuotaListarComponent,
  ],
	imports: [
		BaseModule,
		CommonModule,
		CuotaRoutingModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class CuotaModule { }
