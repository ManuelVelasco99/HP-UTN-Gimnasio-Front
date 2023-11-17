import { Component } from '@angular/core';
import { ReporteDeAsistenciaComponent } from '../generar-reporte/reporte-de-asistencia.component';
import { FormularioBaseComponent } from 'src/app/base/formulario-base.component';
import { FormControl, Validators } from '@angular/forms';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-consulta-reporte-asistencia',
  templateUrl: './consulta-reporte-asistencia.component.html',
  styleUrls: ['./consulta-reporte-asistencia.component.scss']
})
export class ConsultaReporteAsistenciaComponent extends FormularioBaseComponent {
  public tituloFormulario : string = this.modoEdicion ? 'Editar socio': 'Agregar socio ';
  public listadoClases: Array <any> =[];
  public reporteGenerado : boolean = true;
  public nombreBarras: Array<any> = [];
  public datosNumericos: ChartDataset[] = [
		{ xAxisID:"Clases"  , yAxisID:"Porcentaje de asistencia", data:[]}
	];
  ngOnInit():void{
    this.crearFormulario()
    this.rellenarTipoClase()
  }
  private crearFormulario() {
		this.form = this.formBuilder.group({
			clase_id                  : new FormControl({ value: '', disabled: false } , Validators.required),
			fecha_desde               : new FormControl({ value: '', disabled: false } , Validators.required),
			fecha_hasta               : new FormControl({ value: '', disabled: false } , Validators.required),
		}); 
	}
  private async rellenarTipoClase() : Promise <void>{
		this.listadoClases = await this.apiService.getData(`/tipo-clase/listar`);
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

    ///  CON LA DATA QUE VENGA DEL SERVDIOR AGREGAR LA VALIDACION  DE QUE SI NO TRAE NINGUN ELEMENTO EN LA CONSULTA NO HAGA EL REPORTE E INORME ///

    /// SI LA DATA QUE TE TRAES DEL BACK LA PODES MOSTRAR ACORDATE DE CAMBIAR LA VARIABLE reporteGenerado A TRUE Y PASAR LOS PARAMETROS NOMBRE BARRAS Y DATOS NUMERICOS

    /// AGREGAR LOS INPUTS DE LOS RESUMEN
  }
}

// select cl.*, cl.horario_inicio 'horario' , avg(ifnull(sc.asistencia, 0)*100) 'porcentaje' from clase cl
// left join socio_clase sc  on cl.id = sc.claseId
// where cl.tipoClaseId = 4
// group by cl.horario_inicio; 