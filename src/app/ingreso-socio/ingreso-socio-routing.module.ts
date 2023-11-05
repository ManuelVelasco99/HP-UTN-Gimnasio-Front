import { IngresoSocioIngresarComponent } from './ingresar/ingreso-socio-ingresar.component';
import { NgModule                      } from '@angular/core';
import { RouterModule                  } from '@angular/router';
import { Routes                        } from '@angular/router';

const routes: Routes = [
  	{
		path: '',
		component: IngresoSocioIngresarComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoSocioRoutingModule { }
