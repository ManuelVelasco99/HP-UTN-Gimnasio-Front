import { ApiService  } from './api.service';
import { environment } from '../../environments/environment';
import { Injectable  } from '@angular/core';
import { NgModule    } from '@angular/core';
import { Router      } from '@angular/router';


@Injectable({
  	providedIn: 'root'
})
@NgModule()
export class AuthService {

  	constructor(
        private apiService : ApiService,
        private router     : Router
	) { }

    public static datosUsuario : any;

	public url = environment.apiUrl;

    public async  almacenarToken(token : string) : Promise<void> {
        localStorage.setItem("access-token", token);
        await this.establecerDatosUsuario();
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

    public logout() : void {
        AuthService.removeToken();
        if(this.router.url === "/"){
            window.location.reload();
        }
        this.router.navigate([""]);
    }

    public static removeToken() : void {
        localStorage.removeItem("access-token");
    }

}
