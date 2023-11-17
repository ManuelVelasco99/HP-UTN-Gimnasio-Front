//ANGULAR MATERIAL
import { MatButtonModule     } from '@angular/material/button';
import { MatCardModule       } from '@angular/material/card';
import { MAT_DATE_LOCALE     } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule     } from '@angular/material/dialog';
import { MatDividerModule    } from '@angular/material/divider';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatIconModule       } from '@angular/material/icon';
import { MatInputModule      } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule      } from '@angular/material/table';
import { MatTabsModule       } from '@angular/material/tabs';
import { MatToolbarModule    } from '@angular/material/toolbar';
////seba adss//
import { MatSelectModule	 } from '@angular/material/select';
import { MatCheckboxModule	 } from '@angular/material/checkbox';


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
import { LayoutFormularioComponent  } from './layout/formulario/layout-formulario.component';
import { LayoutGeneralComponent     } from './layout/general/layout-general.component';
import { LayoutListadoComponent     } from './layout/listado/layout-listado.component';
import { PopupConfirmacionComponent } from './popup-confirmacion/popup-confirmacion.component';
import { PopupMultimediaComponent   } from './popup-multimedia/popup-multimedia.component';
import { PopupAlertComponent } from './popup-alert/popup-alert.component';
//MODULES
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

//SERVICES
import { ApiService        } from './api.service';
import { AuthService       } from './auth.service';
import { DeviceService     } from './device.service';
import { MultimediaService } from './multimedia.service';

//PIPES
import { SafePipe } from './pipe';


@NgModule({
	declarations: [
		LayoutGeneralComponent,
		LayoutFormularioComponent,
		LayoutListadoComponent,
  		PopupConfirmacionComponent,
		PopupMultimediaComponent,
		PopupAlertComponent,
		SafePipe,
 	],
	imports: [

		//ANGULAR COMMON
		CommonModule,
		

		//ANGULAR MATERIAL
        MatButtonModule,
        MatCardModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
        MatFormFieldModule,
		MatIconModule,
        MatInputModule,
		MatNativeDateModule,
		MatTableModule,
		MatTabsModule,
        MatToolbarModule,
		/////////sebaads/////
		MatSelectModule,
		MatCheckboxModule,

		//ANGULAR FORMS
		FormsModule,
        ReactiveFormsModule,

		//MODULES
		RouterModule,

		//SERVICES
		ApiService,

		NgChartsModule,

	
	],
	exports: [

		//ANGULAR MATERIAL
        MatButtonModule,
        MatCardModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
        MatFormFieldModule,
		MatIconModule,
        MatInputModule,
		MatNativeDateModule,
		MatTableModule,
        MatToolbarModule,
		MatTabsModule,
		/////////sebaads/////
		MatSelectModule,
		

		//ANGULAR FORMS
		FormsModule,
        ReactiveFormsModule,

		//COMPONENTS
		LayoutGeneralComponent,
		LayoutFormularioComponent,
		LayoutListadoComponent,

		//MODULES
		RouterModule,

		//SERVICES
		ApiService,
		AuthService,
		DeviceService,
		MultimediaService,

		//PIPES
		SafePipe,

		NgChartsModule,
	],
	schemas: [
		//ANGULAR CORE
        NO_ERRORS_SCHEMA,
    ],
	providers: [
		MatNativeDateModule,
		AuthService,
		{
			provide: MAT_DATE_LOCALE,
			useValue: 'en-GB' 
		}
	]
})
export class BaseModule {
	static forRoot(): ModuleWithProviders<BaseModule> {
        return {
            ngModule: BaseModule,
        }
    }
}
