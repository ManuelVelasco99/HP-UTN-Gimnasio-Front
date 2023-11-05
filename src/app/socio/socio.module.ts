import { BaseModule            } from '../base/base.module';
import { CommonModule          } from '@angular/common';
import { NgModule              } from '@angular/core';
import { NO_ERRORS_SCHEMA      } from '@angular/core';
import { SocioAgregarComponent } from './agregar/socio-agregar.component';
import { SocioListarComponent  } from './listar/socio-listar.component';
import { SocioRoutingModule    } from './socio-routing.module';


@NgModule({
	declarations: [
		SocioListarComponent,
  		SocioAgregarComponent
	],
	imports: [
		BaseModule,
		CommonModule,
		SocioRoutingModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class SocioModule { }
