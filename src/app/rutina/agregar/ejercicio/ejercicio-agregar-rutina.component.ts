import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-ejercicio-agregar-rutina',
  templateUrl: './ejercicio-agregar-rutina.component.html',
  styleUrls: ['./ejercicio-agregar-rutina.component.scss']
})
export class EjercicioAgregarRutinaComponent extends FormularioBaseComponent {
  public tituloFormulario  : string = this.modoEdicion ? 'Editar Usuario' : 'Agregar Usuario';
  public registrosEjercicios: Array<any> = [];
	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}

  ngOnInit(): void {	
		this.uri = "/usuario"	
		this.crearFormulario();
		this.rellenarEjercicios();
		let params = this.route.snapshot.params;
		if(this.modoEdicion) {
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}

  private crearFormulario(){
    this.form = this.formBuilder.group(
      {
        series : new FormControl({ value: '', disabled: false }),
      }
    )
  }
  private async rellenarEjercicios() : Promise <void>{
		this.registrosEjercicios = await this.apiService.getData("/tipo-ejercicio/listar");
	}

  public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		if(this.form.invalid){
			return;
		}
		if(this.modoEdicion){
			try {
				await this.apiService.post(`${this.uri}/${this.id}/editar`,formValue);
				this.redireccionarAlListado();
			} catch (error) {}
		}
		else{
			try {
				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.redireccionarAlListado();
			} catch (error) {}
		}
		
	}

  public clickCancelar() : void {
		this.redireccionarAlListado();
	}

	private redireccionarAlListado() : void {
		this.router.navigate(["usuario/listar"]);
	}
}
