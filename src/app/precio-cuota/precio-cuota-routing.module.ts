import { NgModule                    } from '@angular/core';
import { PrecioCuotaAgregarComponent } from './agregar/precio-cuota-agregar.component';
import { PrecioCuotaListarComponent  } from './listar/precio-cuota-listar.component';
import { RouterModule                } from '@angular/router';
import { Routes                      } from '@angular/router';

const routes: Routes = [
	{
		path: 'listar',
		component: PrecioCuotaListarComponent,
	},
	{
		path: 'agregar',
		component: PrecioCuotaAgregarComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PrecioCuotaRoutingModule { }
