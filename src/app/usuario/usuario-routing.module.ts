import { NgModule                      } from '@angular/core';
import { Router, RouterModule                  } from '@angular/router';
import { Routes } from '@angular/router';
import { UsuariosListarComponent } from './listar/usuarios-listar.component';
import { UsuariosAgregarComponent } from './agregar/usuarios-agregar.component';
const routes: Routes = [
    {
		path: 'listar',
		component: UsuariosListarComponent,
	},
	{
		path: 'agregar',
		component: UsuariosAgregarComponent,
	},
	{
		path: ':id/editar',
		component: UsuariosAgregarComponent,
	},

];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsuarioRoutingModule{}