import { NgModule           } from '@angular/core';
import { RouterModule       } from '@angular/router';
import { Routes             } from '@angular/router';
import { AuthLoginComponent } from './login/auth-login.component';
import { AuthOlvideMiContraseniaComponent } from './olvide-mi-contrasenia/auth-olvide-mi-contrasenia.component';
import { AuthRestablecerContraseniaComponent } from './restablecer-contrasenia/auth-restablecer-contrasenia.component';

const routes: Routes = [
	{
		path: 'login',
		component: AuthLoginComponent,
	},
	{
		path: 'olvide-mi-contrasenia',
		component: AuthOlvideMiContraseniaComponent,
	},
	{
		path: 'restablecer-contrasenia/:codigo_restablecimiento',
		component: AuthRestablecerContraseniaComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
