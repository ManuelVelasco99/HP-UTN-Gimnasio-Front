import { BaseModule                  } from '../base/base.module';
import { CommonModule                } from '@angular/common';
import { NgModule                    } from '@angular/core';
import { NO_ERRORS_SCHEMA            } from '@angular/core';
import { PrecioCuotaAgregarComponent } from './agregar/precio-cuota-agregar.component';
import { PrecioCuotaListarComponent  } from './listar/precio-cuota-listar.component';
import { PrecioCuotaRoutingModule    } from './precio-cuota-routing.module';


@NgModule({
	declarations: [
    PrecioCuotaListarComponent,
    PrecioCuotaAgregarComponent
  ],
	imports: [
		BaseModule,
		CommonModule,
		PrecioCuotaRoutingModule
  	],
	  schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class PrecioCuotaModule { }
