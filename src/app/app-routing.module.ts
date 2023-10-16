import { NgModule     } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes       } from '@angular/router';

const routes: Routes = [
	{
		path : '',
		children : [
			{
				path: '',
				loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
			},
		]
	},
	{
        path : 'maquina-elemento',
        children : [
            {
                path: '',
                loadChildren: () => import('./maquina-elemento/maquina-elemento.module').then(m => m.MaquinaElementoModule),
            },
        ]
    },
    {
        path : 'tipo-ejercicio',
        children : [
            {
                path: '',
                loadChildren: () => import('./tipo-ejercicio/tipo-ejercicio.module').then(m => m.TipoEjercicioModule),
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
