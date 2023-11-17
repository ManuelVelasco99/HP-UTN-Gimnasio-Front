import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/base/auth.service';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
	selector: 'app-auth-restablecer-contrasenia',
	templateUrl: './auth-restablecer-contrasenia.component.html',
	styleUrls: ['./auth-restablecer-contrasenia.component.scss']
})
export class AuthRestablecerContraseniaComponent extends FormularioBaseComponent {

	public mensajeError : string = "";
	
	public codigo_restablecimiento : string = "";

	constructor(
		private authService : AuthService,
		private route : ActivatedRoute
	){
		super();
	}

  	ngOnInit () : void {
		this.codigo_restablecimiento = this.route.snapshot.params['codigo_restablecimiento'];
        this.crearFormulario();   
    }

    private crearFormulario() {
		this.form = this.formBuilder.group({
			contrasenia : new FormControl({ value: '', disabled: false }),
			confirmar_contrasenia : new FormControl({ value: '', disabled: false }),
		});
	}

	public async submit() : Promise<void>{
		if(this.form.invalid){
			return;
		}
		let response = await this.apiService.post(
			"/auth/restablecer-contrasenia",
			{
				contrasenia : this.form.get("contrasenia")?.value,
				codigo_restablecimiento : this.codigo_restablecimiento,
			}
		);
		await this.authService.almacenarToken(response.data.token);
		this.router.navigate([""]);
	
		
	}
				
}
