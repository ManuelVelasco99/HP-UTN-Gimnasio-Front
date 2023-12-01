import { ClaseListarComponent  } from './listar/clase-listar.component';
import { ClaseAgregarComponent } from './agregar/clase-agregar.component';
import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';

const routes: Routes = [
	{
		path: 'listar',
		component: ClaseListarComponent,
	},
	{
		path: 'agregar',
		component: ClaseAgregarComponent,
	},
	{
		path: ':id/editar',
		component: ClaseAgregarComponent,
	},
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaseRoutingModule { }
