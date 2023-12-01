import { NgModule     } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes       } from '@angular/router';
import { MisClasesListarComponent } from './listar/mis-clases-listar.component';

const routes: Routes = [
	{
		path: '',
		component: MisClasesListarComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MisClasesRoutingModule { }
