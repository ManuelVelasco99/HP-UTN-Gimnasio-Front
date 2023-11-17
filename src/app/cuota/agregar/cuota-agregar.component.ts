import { ActivatedRoute          } from '@angular/router';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
  selector: 'app-cuota-agregar',
  templateUrl: './cuota-agregar.component.html',
  styleUrls: ['./cuota-agregar.component.scss']
})
export class CuotaAgregarComponent extends FormularioBaseComponent {
	public tituloFormulario  : string = 'Agregar Cuota';

	public deshabilitarBotonPrincipal : boolean = true;
	public eliminacion : boolean=false;

	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}


	ngOnInit(): void {	
		this.uri = "/cuota"	
		this.crearFormulario();
		let params = this.route.snapshot.params;
		
		this.validarModoEliminacion();
	}

	private async validarModoEliminacion() : Promise<void> {
        let url = this.router.url;
        let urlArray = url.split("/");
        if(urlArray[urlArray.length - 1] == "eliminar"){
			let cuotaEliminar : any= await this.apiService.get(`${this.uri}/${this.id}/obtenerDatos`);
			console.log(cuotaEliminar)
			this.form.get("dni")?.setValue(cuotaEliminar.dni)
			this.tituloFormulario="Eliminar Cuota"
            this.eliminacion = true;
			this.form.get('dni')?.disable();
            this.textoBoton = "Dar de baja el pago";

        }
    }

	private crearFormulario() {
		this.form = this.formBuilder.group({
			dni: new FormControl({ value: '', disabled: false }),
			nombre: new FormControl({ value: '', disabled: true }),
			apellido: new FormControl({ value: '', disabled: true }),
			fecha_nacimiento: new FormControl({ value: '', disabled: true }),
			telefono: new FormControl({ value: '', disabled: true }),
			fecha_periodo: new FormControl({ value: '', disabled: true }),
			monto: new FormControl({ value: '', disabled: true }),
			motivo_baja:new FormControl({ value: '', disabled: false }),
		});
	}

	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;

		console.log("formValue: ", formValue);
		if(this.form.invalid){
			return;
		}
		if(this.eliminacion){
			try {
				await this.apiService.post(`${this.uri}/${this.id}/eliminar`,formValue);
				this.router.navigate(["cuota/listar"]);
			} catch (error) {}
		}
		else{
			try {
				await this.apiService.post(`${this.uri}/agregar`,formValue);
				this.router.navigate(["cuota/listar"]);
			} catch (error) {}
		}

	}

	public clickCancelar() : void {
		this.router.navigate(["cuota/listar"]);
	}

	public async clickValidarDniSocio() : Promise<void> {
		this.deshabilitarBotonPrincipal = false;
		try {
			let response = (await this.apiService.post("/cuota/validar-pago",{dni:this.form.get("dni")?.value})).data;

			let socio= response.socio
			let precio_cuota=response.precio_cuota
			let periodoPago=response.periodoPago

			Object.keys(socio).forEach((element: any) => {
				this.form.get(element)?.setValue(socio[element]);
			});
			Object.keys(precio_cuota).forEach((element: any) => {
				this.form.get(element)?.setValue(precio_cuota[element]);
			});
			this.form.get("fecha_periodo")?.setValue(periodoPago);
			
			this.deshabilitarBotonPrincipal = false;
			
		} catch (error) {
			console.log(error)
		}

	}
}
