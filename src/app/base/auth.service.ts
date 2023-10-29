import { ApiService  } from './api.service';
import { environment } from '../../environments/environment';
import { Injectable  } from '@angular/core';
import { NgModule    } from '@angular/core';


@Injectable({
  	providedIn: 'root'
})
@NgModule()
export class AuthService {

  	constructor(
        private apiService : ApiService
	) { }

    public static datosUsuario : any;

	public url = environment.apiUrl;

    public almacenarToken(token : string) {
        localStorage.setItem("access-token", token);
        this.establecerDatosUsuario();
    }

    public async establecerDatosUsuario() : Promise<void> {
        let datosUsuario = await this.apiService.getData("/auth/mis-datos");
        AuthService.datosUsuario = datosUsuario;
        return AuthService.datosUsuario;
    }

    public async obtenerDatosUsuario() : Promise<any> {
        if(!localStorage.getItem("access-token")){
            return null;
        }
        if(!AuthService.datosUsuario){
            return await this.establecerDatosUsuario();
        }
        return AuthService.datosUsuario;
    }



}
