import { BaseModule                    } from '../base/base.module';
import { CommonModule                  } from '@angular/common';
import { NgModule                      } from '@angular/core';
import { NO_ERRORS_SCHEMA              } from '@angular/core';

import { UsuarioRoutingModule } from './usuario-routing.module';

import { UsuariosListarComponent } from './listar/usuarios-listar.component';
import { UsuariosAgregarComponent } from './agregar/usuarios-agregar.component';




@NgModule(
    {
        declarations:
            [
                UsuariosListarComponent,
                UsuariosAgregarComponent,
            ],
        imports:
            [
                BaseModule,
                CommonModule,
                UsuarioRoutingModule,
            ],
        schemas:
            [
                NO_ERRORS_SCHEMA
            ]
    }
)
export class UsuarioModule {}