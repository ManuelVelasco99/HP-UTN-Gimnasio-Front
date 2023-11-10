import { Component    } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input        } from '@angular/core';
import { Output       } from '@angular/core';

@Component({
    selector    : 'app-layout-formulario',
    templateUrl : './layout-formulario.component.html',
    styleUrls   : ['./layout-formulario.component.scss']
})
export class LayoutFormularioComponent {

    @Input()
    public tituloFormulario : string = '';

    @Input()
    public textoBotonPrincipal : string = '';

    @Input()
    public botonesDesHabilitados : boolean = false;

    @Output()
    public clickBotonCancelar : EventEmitter<void> = new EventEmitter();

    @Output()
    public clickBotonPrincipal : EventEmitter<void> = new EventEmitter();
}
