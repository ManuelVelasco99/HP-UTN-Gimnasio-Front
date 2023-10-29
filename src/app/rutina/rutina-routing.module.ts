import { NgModule                      } from '@angular/core';
import { RouterModule                  } from '@angular/router';
import { Routes                        } from '@angular/router';
import { RutinaListarComponent } from './listar/rutina-listar.component';
import { RutinaAgregarComponent } from './agregar/rutina-agregar.component';

const routes : Routes =[
    {
        path:'listar',
        component: RutinaListarComponent,
    },
    {
        path:'agregar',
        component: RutinaAgregarComponent,
    },
];

@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class RutinaRoutingModule {}