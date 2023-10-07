import { HomePageComponent } from './home-page/home-page.component';
import { NgModule          } from '@angular/core';
import { RouterModule      } from '@angular/router';
import { Routes            } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
