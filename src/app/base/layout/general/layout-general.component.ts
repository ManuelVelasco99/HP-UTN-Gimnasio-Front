import { AuthService   } from '../../auth.service';
import { Component     } from '@angular/core';
import { DeviceService } from '../../device.service';
import { Input         } from '@angular/core';

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
            nombre : "Precio cuota",
            route  : "/precio-cuota/listar",
            rolesPermitidos : [1]
        },
        {
            nombre : "Pago cuota",
            route  : "/cuota/listar",
            rolesPermitidos : [1]
        },
        {
            nombre          : "Tipo ejercicio",
            route           : "/tipo-ejercicio/listar",
            rolesPermitidos : [1]
        },
        {
            nombre          : "Precio cuota",
            route           : "/precio-cuota/listar",
            rolesPermitidos : [1]
        },
        /*{ Se comenta por el momento, se debe agregar individual para profesores
            nombre          : "Usuarios",
            route           : "/usuario/listar",
            rolesPermitidos : [1]
        },*/
        {
            nombre          : "Rutinas",
            route           : "/rutina/listar",
            rolesPermitidos : [2]
        },
        {
            nombre          : "Socios",
            route           : "/socio/listar",
            rolesPermitidos : [1]
        },
        {
            nombre          : "Reporte clases",
            route           : "/reporte-clase/reporte-asistencia",
            rolesPermitidos : [1]
        },
        {
            nombre          : "Profesores",
            route           : "/profesor/listar",
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
        },
        {
            nombre          : "Sus rutinas",
            route           : "/consulta-rutina",
            rolesPermitidos : [4]
        },
        {
            nombre          : "Mis clases",
            route           : "/mis-clases",
            rolesPermitidos : [4]
        }
    ];

    public nombreUsuario! : string;

    public rol_id : number = 5;

    @Input()
	public enElHome : boolean = false;

    constructor(
        private authService   : AuthService,
        public  deviceService : DeviceService,
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

    public obtenerAccesosPorRol(id_rol : number = 5) : Array<any> {
        let rolesFiltrados : Array<any>= [];
        this.accesos.forEach(element => {
            if(element.rolesPermitidos.includes(id_rol)){
                rolesFiltrados.push(element);
            }
        });
        return rolesFiltrados;
    }

}
