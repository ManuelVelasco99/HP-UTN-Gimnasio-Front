import { NgModule             } from '@angular/core';
import { RouterModule         } from '@angular/router';
import { Routes               } from '@angular/router';
import { SocioListarComponent } from './listar/socio-listar.component';

const routes: Routes = [
	{
		path: 'listar',
		component: SocioListarComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SocioRoutingModule { }
