//ANGULAR MATERIAL
import { MatButtonModule    } from '@angular/material/button';
import { MatCardModule      } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule      } from '@angular/material/icon';
import { MatInputModule     } from '@angular/material/input';
import { MatToolbarModule   } from '@angular/material/toolbar'

//ANGULAR COMMON
import { CommonModule } from '@angular/common';

//ANGULAR CORE
import { ModuleWithProviders } from '@angular/core';
import { NgModule            } from '@angular/core';
import { NO_ERRORS_SCHEMA    } from '@angular/core';

//ANGULAR FORMS
import { FormsModule         } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { LayoutFormularioComponent } from './layout/formulario/layout-formulario.component';
import { LayoutGeneralComponent    } from './layout/general/layout-general.component';

//MODULES
import { RouterModule } from '@angular/router';

//SERVICES
import { ApiService } from './api.service';


@NgModule({
	declarations: [
		LayoutGeneralComponent,
		LayoutFormularioComponent,
 	],
	imports: [

		//ANGULAR COMMON
		CommonModule,
		

		//ANGULAR MATERIAL
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
		MatIconModule,
        MatInputModule,
        MatToolbarModule,

		//ANGULAR FORMS
		FormsModule,
        ReactiveFormsModule,

		//MODULES
		RouterModule,

		//SERVICES
		ApiService,

	
	],
	exports: [

		//ANGULAR MATERIAL
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
		MatIconModule,
        MatInputModule,
        MatToolbarModule,

		//ANGULAR FORMS
		FormsModule,
        ReactiveFormsModule,

		//COMPONENTS
		LayoutGeneralComponent,
		LayoutFormularioComponent,

		//MODULES
		RouterModule,

		//SERVICES
		ApiService,
	],
	schemas: [
		//ANGULAR CORE
        NO_ERRORS_SCHEMA,
    ]
})
export class BaseModule {
	static forRoot(): ModuleWithProviders<BaseModule> {
        return {
            ngModule: BaseModule,
        }
    }
}
