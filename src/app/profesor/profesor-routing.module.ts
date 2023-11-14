import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { ProfesorListarComponent } from './listar/profesor-listar.component';
import { ProfesorAgregarComponent } from './agregar/profesor-agregar.component';
const routes: Routes = [
	{
		path: 'listar',
		component: ProfesorListarComponent,
	},
	{
		path: 'agregar',
		component: ProfesorAgregarComponent,
	},
	{
		path: ':id/editar',
		component: ProfesorAgregarComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfesorRoutingModule { }
