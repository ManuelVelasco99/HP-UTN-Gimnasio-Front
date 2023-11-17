import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
  selector: 'app-auth-olvide-mi-contrasenia',
  templateUrl: './auth-olvide-mi-contrasenia.component.html',
  styleUrls: ['./auth-olvide-mi-contrasenia.component.scss']
})
export class AuthOlvideMiContraseniaComponent extends FormularioBaseComponent {

	public mensaje : string = "";

  	ngOnInit () : void {
        this.crearFormulario();   
    }

    private crearFormulario() {
		this.form = this.formBuilder.group({
			email : new FormControl({ value: '', disabled: false }),
		});
	}

	public async submit(){
		if(this.form.invalid){
			return;
		}
		await this.apiService.post("/auth/olvide-mi-contrasenia",this.form.value);
		this.mensaje = "Si el email ingresado es correcto recibirá un link para restablecer su contraseña";
	}

}
