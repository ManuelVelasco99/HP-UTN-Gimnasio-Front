import { ConsultaRutinaComponent } from './consulta-rutina.component';
import { NgModule                } from '@angular/core';
import { RouterModule            } from '@angular/router';
import { Routes                  } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ConsultaRutinaComponent,
	},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultaRutinaRoutingModule { }
