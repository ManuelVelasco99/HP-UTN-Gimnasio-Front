import { MaquinaElementoAgregarComponent } from './agregar/maquina-elemento-agregar.component';
import { MaquinaElementoListarComponent  } from './listar/maquina-elemento-listar.component';
import { NgModule                        } from '@angular/core';
import { RouterModule                    } from '@angular/router';
import { Routes                          } from '@angular/router';

const routes: Routes = [
	{
		path: 'listar',
		component: MaquinaElementoListarComponent,
	},
    {
		path: 'agregar',
		component: MaquinaElementoAgregarComponent,
	},
    {
		path: ':id/editar',
		component: MaquinaElementoAgregarComponent,
	},
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaquinaElementoRoutingModule { }
