import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuotaListarComponent } from './listar/cuota-listar.component';
import { CuotaAgregarComponent } from './agregar/cuota-agregar.component';

const routes: Routes = [
  {
		path: 'listar',
		component: CuotaListarComponent,
	},
  {
		path: 'agregar',
		component: CuotaAgregarComponent,
	},
    {
		path: ':id/eliminar',
		component: CuotaAgregarComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuotaRoutingModule { }
