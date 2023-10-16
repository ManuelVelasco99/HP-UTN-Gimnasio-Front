import { NgModule                      } from '@angular/core';
import { RouterModule                  } from '@angular/router';
import { Routes                        } from '@angular/router';
import { TipoEjercicioAgregarComponent } from './agregar/tipo-ejercicio-agregar.component';
import { TipoEjercicioListarComponent  } from './listar/tipo-ejercicio-listar.component';

const routes: Routes = [
	{
		path: 'listar',
		component: TipoEjercicioListarComponent,
	},
	{
		path: 'agregar',
		component: TipoEjercicioAgregarComponent,
	},
	{
		path: ':id/editar',
		component: TipoEjercicioAgregarComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TipoEjercicioRoutingModule { }
