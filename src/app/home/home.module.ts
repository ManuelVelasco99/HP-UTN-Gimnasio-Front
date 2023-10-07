import { BaseModule        } from '../base/base.module';
import { CommonModule      } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule          } from '@angular/core';
import { NO_ERRORS_SCHEMA  } from '@angular/core';


@NgModule({
	declarations: [
		HomePageComponent
  	],
    imports: [
		CommonModule,
		HomeRoutingModule,
		BaseModule
    ],
	schemas: [
        NO_ERRORS_SCHEMA,
    ]
})
export class HomeModule { }
