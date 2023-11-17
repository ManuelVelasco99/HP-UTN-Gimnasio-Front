import { Component } from '@angular/core';
import { GenerarReporteCuotaComponent } from '../generar-reporte-cuota/generar-reporte-cuota.component';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import { FormControl, Validators } from '@angular/forms';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-consultar-reporte-cuota',
  templateUrl: './consultar-reporte-cuota.component.html',
  styleUrls: ['./consultar-reporte-cuota.component.scss']
})
export class ConsultarReporteCuotaComponent extends FormularioBaseComponent {
    public tituloFormulario : string = this.modoEdicion ? 'Editar socio': 'Agregar socio ';
    public listadoCuota: Array <any> =[];
    public reporteGenerado : boolean = true;
    public nombreBarras: Array<any> = [];
    public datosNumericos: ChartDataset[] = [
      { xAxisID:"Cuotas"  , yAxisID:"Cantidad de cuotas", data:[]}
    ];
    ngOnInit():void{
      this.crearFormulario()
    }
    private crearFormulario() {
      this.form = this.formBuilder.group({
        fecha_desde               : new FormControl({ value: '', disabled: false } , Validators.required),
        fecha_hasta               : new FormControl({ value: '', disabled: false } , Validators.required),
      }); 
    }

    public async clickGenerarReporte(){
      let formValue = this.form.value;
      if(this.form.invalid){
        return;
      }
      if(this.form.value.fecha_desde >= this.form.value.fecha_hasta){
        await this.confirmService.mostrarMensajeConfirmacion("Ingrese un rango de fechas valido", 'Aceptar', '123', true);
        return;
      }
      console.log("Form:", formValue)
      try {
				await this.apiService.post(`${this.uri}`,formValue);
				this.redireccionarAlReporte();
			} catch (error) {}

      ///  CON LA DATA QUE VENGA DEL SERVDIOR AGREGAR LA VALIDACION  DE QUE SI NO TRAE NINGUN ELEMENTO EN LA CONSULTA NO HAGA EL REPORTE E INORME ///

      /// SI LA DATA QUE TE TRAES DEL BACK LA PODES MOSTRAR ACORDATE DE CAMBIAR LA VARIABLE reporteGenerado A TRUE Y PASAR LOS PARAMETROS NOMBRE BARRAS Y DATOS NUMERICOS

      /// AGREGAR LOS INPUTS DE LOS RESUMEN
    }

    private redireccionarAlReporte() : void {
      this.router.navigate(["reporte-pago/reporte-cuota"]);
    }
}
