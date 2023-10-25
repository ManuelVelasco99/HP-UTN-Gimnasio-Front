import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuotaListarComponent } from './listar/cuota-listar.component';

const routes: Routes = [
  {
		path: 'listar',
		component: CuotaListarComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuotaRoutingModule { }
