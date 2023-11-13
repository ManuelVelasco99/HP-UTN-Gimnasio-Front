import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { SocioAgregarComponent } from './agregar/socio-agregar.component';
import { SocioListarComponent  } from './listar/socio-listar.component';

const routes: Routes = [
	{
		path: 'listar',
		component: SocioListarComponent,
	},
	{
		path: 'agregar',
		component: SocioAgregarComponent,
	},
	{
		path: ':id/editar',
		component: SocioAgregarComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SocioRoutingModule { }
