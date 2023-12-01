import { AppComponent            } from './app.component';
import { AppRoutingModule        } from './app-routing.module';
import { BaseModule              } from './base/base.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule           } from '@angular/platform-browser';
import { HttpClientModule        } from '@angular/common/http';
import { Injector                } from '@angular/core';
import { LocatorService          } from './base/locator.service';
import { NgModule                } from '@angular/core';

@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		AppRoutingModule,
		BaseModule.forRoot(),
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private injector: Injector) {    // Create global Service Injector.
        LocatorService.injector = this.injector;
    }
}
