import { ApiService     } from './api.service';
import { ConfirmService } from './confirm.service';
import { Filtro         } from './layout/listado/layout-listado.component';
import { LocatorService } from './locator.service';
import { Router         } from '@angular/router';

export abstract class ListadoBaseComponent {

    public apiService     = LocatorService.injector.get(ApiService    );
    public confirmService = LocatorService.injector.get(ConfirmService);
    public router         = LocatorService.injector.get(Router        );

    public filtrosDisponibles : Array<Filtro> = [];
    public queryParams : string = "";

    public actualizarQueryParamsDesdeFiltros(filtros :Array<Filtro>) : void {
        this.queryParams = "";
        let first = true;
        this.filtrosDisponibles.forEach((filtro)=>{
            if(filtro.valorFiltro){
                if(first){
                    this.queryParams = "?";
                    first=false;
                }
                else{
                    this.queryParams = this.queryParams + "&";
                }
                this.queryParams = this.queryParams + filtro.nombreFiltro + "=" + filtro.valorFiltro;
            }
        })
       
        console.log("this.queryParams:",this.queryParams)
    }

}
