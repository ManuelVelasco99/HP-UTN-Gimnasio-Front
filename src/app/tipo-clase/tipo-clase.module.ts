import { BaseModule                } from '../base/base.module';
import { CommonModule              } from '@angular/common';
import { NgModule                  } from '@angular/core';
import { NO_ERRORS_SCHEMA          } from '@angular/core';
import { TipoClaseAgregarComponent } from './agregar/tipo-clase-agregar.component';
import { TipoClaseListarComponent  } from './listar/tipo-clase-listar.component';
import { TipoClaseRoutingModule    } from './tipo-clase-routing.module';


@NgModule({
	declarations: [
    TipoClaseListarComponent,
    TipoClaseAgregarComponent
  ],
	imports: [
		BaseModule,
		CommonModule,
		TipoClaseRoutingModule
	],
	schemas: [
	  NO_ERRORS_SCHEMA
  ]
})
export class TipoClaseModule { }
