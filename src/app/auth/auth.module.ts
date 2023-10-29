import { AuthLoginComponent } from './login/auth-login.component';
import { AuthRoutingModule  } from './auth-routing.module';
import { BaseModule         } from '../base/base.module';
import { CommonModule       } from '@angular/common'; 
import { NO_ERRORS_SCHEMA   } from '@angular/core';
import { NgModule           } from '@angular/core';


@NgModule({
	declarations: [
    	AuthLoginComponent
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
