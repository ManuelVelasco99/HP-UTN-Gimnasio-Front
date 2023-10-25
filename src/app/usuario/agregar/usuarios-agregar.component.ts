import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-usuarios-agregar',
  templateUrl: './usuarios-agregar.component.html',
  styleUrls: ['./usuarios-agregar.component.scss']
  
  
})
export class UsuariosAgregarComponent extends FormularioBaseComponent{

  public tituloFormulario  : string = this.modoEdicion ? 'Editar Usuario' : 'Agregar Usuario';
  public registrosRoles: Array<any> = [];
	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}
  
	ngOnInit(): void {	
		this.uri = "/usuario"	
		this.crearFormulario();
		this.rellenarRoles();
		let params = this.route.snapshot.params;
		if(this.modoEdicion) {
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			dni : new FormControl({ value: '', disabled: false }),
			nombre  : new FormControl({ value: '', disabled: false }),
			apellido  : new FormControl({ value: '', disabled: false }),
			fecha_nacimiento : new FormControl({ value: '', disabled: false }),
			email : new FormControl({value:'',disabled:false}),
			estado : new FormControl({value:'',disabled:false}),
			idRol : new FormControl({value:'',disabled:false}),
			nombreRol : new FormControl({value:'',disabled:false}),
			contrasenia:new FormControl({value:'',disabled:false}),
		});
	}
	private async rellenarRoles() : Promise <void>{
		this.registrosRoles = await this.apiService.getData("/rol/listar");
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
