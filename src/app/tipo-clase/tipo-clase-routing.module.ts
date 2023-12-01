import { NgModule                  } from '@angular/core';
import { RouterModule              } from '@angular/router';
import { Routes                    } from '@angular/router';
import { TipoClaseAgregarComponent } from './agregar/tipo-clase-agregar.component';
import { TipoClaseListarComponent  } from './listar/tipo-clase-listar.component';

const routes: Routes = [
	{
		path: 'listar',
		component: TipoClaseListarComponent,
	},
	{
		path: 'agregar',
		component: TipoClaseAgregarComponent,
	},
	{
		path: ':id/editar',
		component: TipoClaseAgregarComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TipoClaseRoutingModule { }
