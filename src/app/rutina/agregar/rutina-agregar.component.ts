import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
  selector: 'app-rutina-agregar',
  templateUrl: './rutina-agregar.component.html',
  styleUrls: ['./rutina-agregar.component.scss']
})
export class RutinaAgregarComponent extends FormularioBaseComponent{
  public tituloFormulario  : string = this.modoEdicion ? 'Editar Rutina' : 'Agregar Rutina';
  public registrosRoles: Array<any> = [];
  public registrosDias: Array<any> = [1];
	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}
  ngOnInit(): void {	
		this.uri = "/usuario"	
		this.crearFormulario();
		//this.rellenarRoles();
		let params = this.route.snapshot.params;
		if(this.modoEdicion) {
			this.id = params['id'];
			this.obtenerYCompletar();
		}
	}
  private crearFormulario() {
		this.form = this.formBuilder.group({
			nombre : new FormControl({ value: '', disabled: false }),
		});
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
  public agregarDia() :void{
    let nuevoDia : number = this.registrosDias.length + 1;
    this.registrosDias.push(nuevoDia);
  }

	public clickCancelar() : void {
		this.redireccionarAlListado();
	}

	private redireccionarAlListado() : void {
		this.router.navigate(["rutina/listar"]);
	}
}
