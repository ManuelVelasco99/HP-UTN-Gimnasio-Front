import { BaseModule                    } from '../base/base.module';
import { CommonModule                  } from '@angular/common';
import { NgModule                      } from '@angular/core';
import { NO_ERRORS_SCHEMA              } from '@angular/core';
import { RutinaListarComponent } from './listar/rutina-listar.component';
import { RutinaRoutingModule } from './rutina-routing.module';

@NgModule(
    {
        declarations:[
            RutinaListarComponent,
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