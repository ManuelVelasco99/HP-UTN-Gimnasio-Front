import { MaquinaElementoAgregarComponent } from './agregar/maquina-elemento-agregar.component';
import { NgModule                        } from '@angular/core';
import { RouterModule                    } from '@angular/router';
import { Routes                          } from '@angular/router';

const routes: Routes = [
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
