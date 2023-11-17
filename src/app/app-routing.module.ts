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
        path : 'auth',
        children : [
            {
                path: '',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
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
    {
        path : 'tipo-clase',
        children : [
            {
                path: '',
                loadChildren: () => import('./tipo-clase/tipo-clase.module').then(m => m.TipoClaseModule),
            },
        ]
    },
    {
        path : 'precio-cuota',
        children : [
            {
                path: '',
                loadChildren: () => import('./precio-cuota/precio-cuota.module').then(m => m.PrecioCuotaModule),
            },
        ]
    },
    {
        path : 'cuota',
        children : [
            {
                path: '',
                loadChildren: () => import('./cuota/cuota.module').then(m => m.CuotaModule),
            },
        ]
    },
    {
        path : 'usuario',
        children : [
            {
                path: '',
                loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
            },
        ]
    },
    {
        path : 'rutina',
        children : [
            {
                path: '',
                loadChildren: () => import('./rutina/rutina.module').then(m => m.RutinaModule),
            },
        ]
    },
    {
        path : 'ingreso-socio',
        children : [
            {
                path: '',
                loadChildren: () => import('./ingreso-socio/ingreso-socio.module').then(m => m.IngresoSocioModule),
            },
        ]
    },
    {
        path : 'clase',
        children : [
            {
                path: '',
                loadChildren: () => import('./clase/clase.module').then(m => m.ClaseModule),
            }
        ]
    },
    {
        path : 'socio',
        children : [
            {
                path: '',
                loadChildren: () => import('./socio/socio.module').then(m => m.SocioModule),
            },
        ]
    },
    {
        path : 'profesor',
        children : [
            {
                path: '',
                loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule),
            },
        ]
    },
    {
        path : 'consulta-rutina',
        children : [
            {
                path: '',
                loadChildren: () => import('./consulta-rutina/consulta-rutina.module').then(m => m.ConsultaRutinaModule),
            },
        ]
    },
    {
        path : 'mis-clases',
        children : [
            {
                path: '',
                loadChildren: () => import('./mis-clases/mis-clases.module').then(m => m.MisClasesModule),
            },
        ]
    },
    {
        path : 'reporte-clase',
        children : [
            {
                path: '',
                loadChildren: () => import('./reporte-clase/reporte-clase.module').then(m => m.RepoirteDeAsistenciaModule),
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
