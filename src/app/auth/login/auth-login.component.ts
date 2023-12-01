import { AuthService             } from 'src/app/base/auth.service';
import { Component               } from '@angular/core';
import { FormControl             } from '@angular/forms';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';

@Component({
    selector    : 'app-auth-login',
    templateUrl : './auth-login.component.html',
    styleUrls   : ['./auth-login.component.scss']
})
export class AuthLoginComponent extends FormularioBaseComponent {

    constructor(
        private authService : AuthService
    ){
        super();
    }

    public mensajeError : string = "";

    ngOnInit () : void {
        this.crearFormulario();   
    }

    private crearFormulario() {
		this.form = this.formBuilder.group({
			dni         : new FormControl({ value: '', disabled: false }),
			contrasenia : new FormControl({ value: '', disabled: false }),
			recordarme : new FormControl({ value: false, disabled: false }),
		});
	}

    public async ingresar() : Promise<void> {
        if(this.form.invalid){
            return;
        }
        this.mensajeError = "";

        let response;
        try {
            response = await this.apiService.post('/auth/login',this.form.value);
        } catch (error : any) {
            if(error.status === 403){
                this.mensajeError = error.error.data;
            }
            return;
        }
            
        await this.authService.almacenarToken(response.data.token);
        this.router.navigate([""]);

    }

}
