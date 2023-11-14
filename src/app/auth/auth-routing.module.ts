import { NgModule           } from '@angular/core';
import { RouterModule       } from '@angular/router';
import { Routes             } from '@angular/router';
import { AuthLoginComponent } from './login/auth-login.component';

const routes: Routes = [
	{
		path: 'login',
		component: AuthLoginComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
