import { AuthLoginComponent } from './login/auth-login.component';
import { AuthRoutingModule  } from './auth-routing.module';
import { BaseModule         } from '../base/base.module';
import { CommonModule       } from '@angular/common'; 
import { NO_ERRORS_SCHEMA   } from '@angular/core';
import { NgModule           } from '@angular/core';
import { AuthOlvideMiContraseniaComponent } from './olvide-mi-contrasenia/auth-olvide-mi-contrasenia.component';
import { AuthRestablecerContraseniaComponent } from './restablecer-contrasenia/auth-restablecer-contrasenia.component';


@NgModule({
	declarations: [
    	AuthLoginComponent,
     AuthOlvideMiContraseniaComponent,
     AuthRestablecerContraseniaComponent
  	],
	imports: [
		BaseModule,
		CommonModule,
		AuthRoutingModule
	],
	schemas: [
        NO_ERRORS_SCHEMA,
    ]
})
export class AuthModule { }
