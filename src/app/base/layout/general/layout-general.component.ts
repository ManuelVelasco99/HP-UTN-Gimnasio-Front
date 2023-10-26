import { Component } from '@angular/core';

@Component({
    selector    : 'app-layout-general',
    templateUrl : './layout-general.component.html',
    styleUrls   : ['./layout-general.component.scss']
})
export class LayoutGeneralComponent {

    public accesos : Array<any> = [
        {
            nombre : "Maquina/elemento",
            route  : "/maquina-elemento/listar"
        },
        {
            nombre : "Tipo ejercicio",
            route  : "/tipo-ejercicio/listar"
        },
        {
            nombre : "Precio cuota",
            route  : "/precio-cuota/listar"
        },
        {
            nombre : "Usuarios",
            route  : "/usuario/listar"
        },
        {
            nombre : "Rutinas",
            route  : "/rutina/listar"
        }
    ];
}
