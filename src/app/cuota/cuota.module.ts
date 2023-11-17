import { BaseModule } from '../base/base.module';
import { CommonModule } from '@angular/common';
import { CuotaRoutingModule } from './cuota-routing.module';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CuotaAgregarComponent } from './agregar/cuota-agregar.component';
import { CuotaListarComponent } from './listar/cuota-listar.component';
import { CuotaPopupMotivoBajaComponent } from './popup-motivo-baja/cuota-popup-motivo-baja.component';


@NgModule({
	declarations: [
		CuotaAgregarComponent,
		CuotaListarComponent,
  CuotaPopupMotivoBajaComponent
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
