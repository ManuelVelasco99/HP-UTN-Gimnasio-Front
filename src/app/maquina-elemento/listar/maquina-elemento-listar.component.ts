import { Component            } from '@angular/core';
import { ListadoBaseComponent } from 'src/app/base/listado-base.component';

@Component({
	selector    : 'app-maquina-elemento-listar',
	templateUrl : './maquina-elemento-listar.component.html',
	styleUrls   : ['./maquina-elemento-listar.component.scss']
})
export class MaquinaElementoListarComponent extends ListadoBaseComponent {

	public registrosListado : Array<any> = [];

	async ngOnInit(): Promise<void> {	
		this.registrosListado = await this.apiService.getData("/maquina-elemento/listar");
	}
}
