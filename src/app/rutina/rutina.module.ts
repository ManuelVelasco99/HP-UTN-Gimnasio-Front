import { BaseModule                         } from '../base/base.module';
import { CommonModule                       } from '@angular/common';
import { NgModule                           } from '@angular/core';
import { NO_ERRORS_SCHEMA                   } from '@angular/core';
import { RutinaListarComponent              } from './listar/rutina-listar.component';
import { RutinaRoutingModule                } from './rutina-routing.module';
//import { EjercicioAgregarRutinaComponent    } from './agregar/ejercicio/ejercicio-agregar-rutina.component';
//import { DiaAgregarComponent } from './agregar/dia/dia-agregar.component';
import { RutinaAgregarComponent } from './agregar/rutina-agregar.component';
import { EjercicioAgregarRutinaComponent } from './agregar/ejercicio/ejercicio-agregar-rutina.component';
import { DiaAgregarRutinaComponent } from './agregar/dia/dia-agregar-rutina.component';

@NgModule(
    {
        declarations:[
            RutinaListarComponent,
            RutinaAgregarComponent,
           // DiaAgregarComponent,
            EjercicioAgregarRutinaComponent,
            DiaAgregarRutinaComponent,
        ],
        imports: [
            BaseModule,
            CommonModule,
            RutinaRoutingModule,
        ],
        schemas:[
            NO_ERRORS_SCHEMA
        ]


    }
)
export class RutinaModule {}