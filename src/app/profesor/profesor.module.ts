import { BaseModule            		} from '../base/base.module';
import { CommonModule          		} from '@angular/common';
import { NgModule              		} from '@angular/core';
import { NO_ERRORS_SCHEMA      		} from '@angular/core';
import { ProfesorRoutingModule 		} from './profesor-routing.module';
import { ProfesorAgregarComponent 	} from './agregar/profesor-agregar.component';
import { ProfesorListarComponent 	} from './listar/profesor-listar.component';

@NgModule({
	declarations: [
		ProfesorListarComponent,
		ProfesorAgregarComponent
	],
	imports: [
		BaseModule,
		CommonModule,
		ProfesorRoutingModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ProfesorModule { }
