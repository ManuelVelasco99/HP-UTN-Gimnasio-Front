import { AuthService } from '../../auth.service';
import { Component   } from '@angular/core';

@Component({
    selector    : 'app-layout-general',
    templateUrl : './layout-general.component.html',
    styleUrls   : ['./layout-general.component.scss']
})
export class LayoutGeneralComponent {

    public accesos : Array<any> = [
        {
            nombre          : "Maquina/elemento",
            route           : "/maquina-elemento/listar",
            rolesPermitidos : [1]
        },
        {
            nombre          : "Tipo clase",
            route           : "/tipo-clase/listar",
            rolesPermitidos : [1]
        },
        {
            nombre          : "Tipo ejercicio",
            route           : "/tipo-ejercicio/listar",
            rolesPermitidos : []
        },
        {
            nombre          : "Precio cuota",
            route           : "/precio-cuota/listar",
            rolesPermitidos : []
        },
        {
            nombre          : "Usuarios",
            route           : "/usuario/listar",
            rolesPermitidos : []
        },
        {
            nombre          : "Rutinas",
            route           : "/rutina/listar",
            rolesPermitidos : []
        },
        {
            nombre          : "Socios",
            route           : "/socio/listar",
            rolesPermitidos : [1]
        },
        {
            nombre          : "Ingreso Socios",
            route           : "/ingreso-socio",
            rolesPermitidos : [1,3]
        },
        {
            nombre          : "Clase",
            route           : "/clase/listar",
            rolesPermitidos : [1,2]
        }
    ];

    public nombreUsuario! : string;

    public rol_id : number | null = null;

    constructor(
        private authService : AuthService,
    ){

    }

    async ngOnInit() : Promise<void> {
        let datosUsuario = await this.authService.obtenerDatosUsuario();
        if(datosUsuario){
            this.nombreUsuario = datosUsuario.nombre + " " + datosUsuario.apellido;
            this.rol_id        = datosUsuario.rol.id;
            console.log("this.rol_id: ",this.rol_id);
        }
        
    }

    public clickLogout() : void {
        this.authService.logout();
    }

}
