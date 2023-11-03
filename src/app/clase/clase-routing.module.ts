import { ClaseListarComponent  } from './listar/clase-listar.component';
import { NgModule                        } from '@angular/core';
import { RouterModule                    } from '@angular/router';
import { Routes                          } from '@angular/router';

const routes: Routes = [
	{
		path: 'listar',
		component: ClaseListarComponent,
	},
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaseRoutingModule { }
