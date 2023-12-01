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
  public reporteGenerado : boolean = false;
  public nombreBarras: Array<any> = [];
  public cantidadClases : number =0;
  public clase:any;
  public porAsistenciaTotal : number =0;
  public valoresBusqueda : any = {nombre:"clase", fecha_desde:'', fecha_hasta:''}
  public datosNumericos: ChartDataset[] = [
		{ xAxisID:"Clases"  , yAxisID:"Porcentaje de asistencia", data:[]}
	];
  ngOnInit():void{
    this.uri = "/tipo-clase" 
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
    let fechaHoy = new Date();
    let porSuma =0;
		if(this.form.invalid){
			return;
		}
    if(this.form.value.fecha_desde >= this.form.value.fecha_hasta || fechaHoy < this.form.value.fecha_hasta ){
      await this.confirmService.mostrarMensajeConfirmacion("Ingrese un rango de fechas valido", 'Aceptar', '123', true);
      return;
    }
    let respuesta = await this.apiService.post(`${this.uri}/reporte`, formValue);	
    console.log("respuesta: ", respuesta);
    //console.log("respuesta.data.length", respuesta.data[0].horario)
    if(respuesta.data.length ==0){
      await this.confirmService.mostrarMensajeConfirmacion("No se encontraron registros para el rango de fechas ingresado", 'Aceptar', '123', true);
      return;
    }else{
      for(let i=0; i< respuesta.data.length; i++){
        
        this.nombreBarras.push(respuesta.data[i].horario)
        this.datosNumericos[0].data.push(respuesta.data[i].porcentaje)
        let x : number =+  respuesta.data[i].porcentaje
        porSuma += x
      }
      for(let i =0; i < this.listadoClases.length; i++){
        if(this.listadoClases[i].id == this.form.value.clase_id ){
          this.valoresBusqueda.nombre = this.listadoClases[i].descripcion
          break
        }
      }
      this.clase = await this.apiService.getData(`${this.uri}/${this.form.value.clase_id}/obtener`);    
      this.cantidadClases = respuesta.data.length;
      this.porAsistenciaTotal = porSuma / this.cantidadClases;
      this.valoresBusqueda.fecha_desde = new Date(this.form.value.fecha_desde).toLocaleString()
      this.valoresBusqueda.fecha_hasta = new Date(this.form.value.fecha_hasta).toLocaleString()
      this.reporteGenerado = true;

    }
    
    ///  CON LA DATA QUE VENGA DEL SERVDIOR AGREGAR LA VALIDACION  DE QUE SI NO TRAE NINGUN ELEMENTO EN LA CONSULTA NO HAGA EL REPORTE E INORME ///

    /// SI LA DATA QUE TE TRAES DEL BACK LA PODES MOSTRAR ACORDATE DE CAMBIAR LA VARIABLE reporteGenerado A TRUE Y PASAR LOS PARAMETROS NOMBRE BARRAS Y DATOS NUMERICOS

    /// AGREGAR LOS INPUTS DE LOS RESUMEN
  }
  public clickCerrarReporte():void{
    this.reporteGenerado = false;
    this.form.reset();
    this.porAsistenciaTotal=0;
    this.cantidadClases=0;
    this.datosNumericos = [
      { xAxisID:"Clases"  , yAxisID:"Porcentaje de asistencia", data:[]},
    ];
    this.nombreBarras = []
  }
}


// select cl.*, cl.horario_inicio 'horario' , avg(ifnull(sc.asistencia, 0)*100) 'porcentaje' from clase cl
// left join socio_clase sc  on cl.id = sc.claseId
// where cl.tipoClaseId = 4
// group by cl.horario_inicio; 