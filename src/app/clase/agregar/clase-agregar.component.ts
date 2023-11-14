import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { ActivatedRoute          } from '@angular/router';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
  selector: 'app-clase-agregar',
  templateUrl: './clase-agregar.component.html',
  styleUrls: ['./clase-agregar.component.scss']
})
export class ClaseAgregarComponent extends FormularioBaseComponent{
  
  constructor(
		private route : ActivatedRoute,
	) {
		super();
	}

  public tituloFormulario : string = this.modoEdicion ? 'Editar clase': 'Agregar clase ';

  public tiposClase: Array<any> = [];
  public profesores: Array<any> = [];

  ngOnInit(): void {	
    this.uri = "/clase"	
    this.crearFormulario();
    this.cargarParaAsignar()
    let params = this.route.snapshot.params;
    if(this.modoEdicion){
      this.id = params['id'];
      this.obtenerYCompletar();
      
    }
	}

  private crearFormulario() {
		this.form = this.formBuilder.group({
			horario_inicio : new FormControl({ value: '', disabled: false }),
			horario_fin    : new FormControl({ value: '', disabled: false }),
			fecha          : new FormControl({ value: '', disabled: false }),
      tipoClase      : new FormControl({ value: '', disabled: false }),
			profesor       : new FormControl({ value: '', disabled: false }),
		});
	}

  private async rellenarTipoEjercicioYProfesor() : Promise <void>{
    this.tiposClase = await this.apiService.getData(`/tipoClase/listar`);
    console.log(this.tiposClase)
    this.profesores = await this.apiService.getData(`/profesor/listar`);
	}

  public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		if(this.form.invalid){
			return;
		}
		if(this.modoEdicion){
			try {
				
        formValue.fecha = new Date(formValue.fecha).toISOString().split("T")[0];
        formValue.horario_inicio = new Date(`1970-01-01T${formValue.horario_inicio}`).toISOString().split("T")[1];
        formValue.horario_fin = new Date(`1970-01-01T${formValue.horario_fin}`).toISOString().split("T")[1];
				
        await this.apiService.post(`${this.uri}/${this.id}/editar`,formValue);
				this.router.navigate(["clase/listar"]);
			} catch (error) {
	
			}
		}else{
			try {
				formValue.fecha = new Date(formValue.fecha).toISOString().split("T")[0];
        formValue.horario_inicio = new Date(`1970-01-01T${formValue.horario_inicio}`).toISOString().split("T")[1];
        formValue.horario_fin = new Date(`1970-01-01T${formValue.horario_fin}`).toISOString().split("T")[1];

				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.router.navigate(["clase/listar"]);
			} catch (error) {
	
			}
		}

	}

	public clickCancelar() : void {
		this.router.navigate(["clase/listar"]);
	}

  public async cargarParaAsignar(): Promise<void>{
    let clase = await this.apiService.getData(`/clase/${this.id}/obtener`);
      this.form.setValue({
        fecha          : clase.fecha,
        horario_inicio : clase.horario_inicio,
        horario_fin    : clase.horario_fin,
        tipoClase      : clase.tipoClase.id,
        profesor       : clase.usuario.id,
        /*
        tipoClase      : clase.tipoClase,
        profesor       : clase.profesor,
         */
      });

      this.rellenarTipoEjercicioYProfesor();
  }
}
