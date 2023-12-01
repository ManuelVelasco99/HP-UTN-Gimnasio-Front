import { Component } from '@angular/core';
///import { ReporteDeAsistenciaComponent } from '../generar-reporte/reporte-de-asistencia.component';
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
  public listadoClases: Array <any> =[];
  public reporteGenerado : boolean = false;
  public nombreBarras: Array<any> = [];
  public cantidadClases : number =0;
  public clase:any;
  public porAsistenciaTotal : number =0;
  public valoresBusqueda : any = {nombre:"clase", fecha_desde:'', fecha_hasta:''}
  public cantCuotasTot : any = {cTotal: 0, monto:0 }
  public cantCuotasPagas : any = {cTotal: 0, monto:0 }
  public cantCuotasImpagas : any = {cTotal: 0, monto:0 }
  public preciosPorMes : Array<any> = []
  public datosNumericos: ChartDataset[] = [
		{ data:[] , label: 'Pagas' },
    { data:[] , label: 'Impagas' }
	];
  ngOnInit():void{
    this.uri = "/cuota-mensual" 
    this.crearFormulario()
    this.rellenarTipoClase()
  }
  private crearFormulario() {
		this.form = this.formBuilder.group({
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
    if(this.form.invalid || this.form.value.fecha_desde >= this.form.value.fecha_hasta || fechaHoy < this.form.value.fecha_hasta ){
      await this.confirmService.mostrarMensajeConfirmacion("Ingrese un rango de fechas valido", 'Aceptar', '123', true);
      return;
    }
    let respuesta = await this.apiService.post(`${this.uri}/reportePagosCuota`, formValue);	
    console.log("respuesta: ", respuesta.resultados);
    console.log("totalPagadas: ", respuesta.totalPagadas);
    console.log("totalRegistros: ", respuesta.totalRegistros);
    //console.log("respuesta.data.length", respuesta.data[0].horario)
    if(respuesta.resultados.length == 0){
      await this.confirmService.mostrarMensajeConfirmacion("No se encontraron registros para el rango de fechas ingresado", 'Aceptar', '123', true);
      return;
    }else{
      for(let i=0; i< respuesta.resultados.length; i++){
        this.nombreBarras.push(respuesta.resultados[i].mes)
        this.datosNumericos[0].data.push(respuesta.resultados[i].totalPagadas)

       

        let x : number =+  respuesta.resultados[i].totalRegistros
        let y : number =+  respuesta.resultados[i].totalMontosBrutos
        let j : number =+  respuesta.resultados[i].totalPagadas
        let z : number =+  respuesta.resultados[i].totalMontosReal

        this.datosNumericos[1].data.push((x - j))
        console.log("cantidad de cuotas totales: ", x)
        console.log("cantidad de cuotas pagas: ", j)
        this.cantCuotasTot.cTotal +=x
        this.cantCuotasTot.monto +=y
        this.cantCuotasPagas.cTotal +=j
        this.cantCuotasPagas.monto +=z
        this.cantCuotasImpagas.cTotal = this.cantCuotasTot.cTotal - this.cantCuotasPagas.cTotal
        this.cantCuotasImpagas.monto = this.cantCuotasTot.monto - this.cantCuotasPagas.monto
        this.preciosPorMes.push({mes : respuesta.resultados[i].mes, monto: (z/j)})
      }
      console.log("this.preciosPorMes", this.preciosPorMes)
      ///this.clase = await this.apiService.getData(`${this.uri}/${this.form.value.clase_id}/obtener`);    
      this.valoresBusqueda.fecha_desde = new Date(this.form.value.fecha_desde).toLocaleString()
      this.valoresBusqueda.fecha_hasta = new Date(this.form.value.fecha_hasta).toLocaleString()
      this.reporteGenerado = true;
      console.log("respuesta.resultados.length", respuesta.resultados.length)
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
      { data:[] , label: 'Pagas' },
      { data:[] , label: 'Impagas' }
    ];
    this.nombreBarras = []
  }
}
