import { ApiService     } from './api.service';
import { FormBuilder    } from '@angular/forms';
import { FormGroup      } from '@angular/forms';
import { LocatorService } from './locator.service';
import { ActivatedRoute, Router         } from '@angular/router';

export abstract class FormularioBaseComponent {

    public    form!       : FormGroup;
    protected formBuilder : FormBuilder = new FormBuilder();
    public    id!         : number;
    public    modoEdicion : boolean = false;
    public    textoBoton  : string = "Agregar";
    public    uri         : string = "";

    public    apiService = LocatorService.injector.get(ApiService    );
    public    router     = LocatorService.injector.get(Router        );

    constructor(
    ) {
        this.validarModoEdicion();
    }

    private validarModoEdicion() : void {
        let url = this.router.url;
        let urlArray = url.split("/");
        if(urlArray[urlArray.length - 1] === "editar"){
            this.modoEdicion = true;
            this.textoBoton = "Guardar";
        }
    }

    public async obtenerYCompletar() : Promise<void> {
        let response = await this.apiService.getData(`${this.uri}/${this.id}/obtener`);
        console.log("response: ", Object.keys(response));
        Object.keys(response).forEach((element: any) => {
            console.log(response[element]);
            this.form.get(element)?.setValue(response[element]);
        });
    }

}
