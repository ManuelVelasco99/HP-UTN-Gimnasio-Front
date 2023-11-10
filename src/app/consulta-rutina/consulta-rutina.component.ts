import { Component } from '@angular/core';


@Component({
	selector    : 'app-consulta-rutina',
	templateUrl : './consulta-rutina.component.html',
	styleUrls   : ['./consulta-rutina.component.scss'],
})
export class ConsultaRutinaComponent {
  lotsOfTabs = new Array(5).fill(0).map((_, index) => `Dia ${index+1}`);
}
