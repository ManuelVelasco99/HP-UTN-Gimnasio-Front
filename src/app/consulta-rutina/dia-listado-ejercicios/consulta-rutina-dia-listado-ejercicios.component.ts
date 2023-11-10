import { Component } from '@angular/core';

@Component({
	selector   : 'app-consulta-rutina-dia-listado-ejercicios',
	templateUrl: './consulta-rutina-dia-listado-ejercicios.component.html',
	styleUrls  : ['./consulta-rutina-dia-listado-ejercicios.component.scss']
})
export class ConsultaRutinaDiaListadoEjerciciosComponent {


  public eLEMENT_DATA: Array<any> = [
    {ejercicio: 'Pres de hombro' , series: 1, mostrarNotas : false, repeticiones: 'H'},
    {ejercicio: 'Pres Plano'     , series: 1, mostrarNotas : false, repeticiones: 'He'},
    {ejercicio: 'Abdominales'    , series: 1, mostrarNotas : false, repeticiones: 'Li'},
    {ejercicio: 'Jumping Jack'   , series: 1, mostrarNotas : false, repeticiones: 'Be'},
    {ejercicio: 'Salto a la soga', series: 1, mostrarNotas : false, repeticiones: 'B'},
    {ejercicio: 'Bicileta fija'  , series: 1, mostrarNotas : false, repeticiones: 'C'},
    {ejercicio: 'Nitrogen'       , series: 1, mostrarNotas : false, repeticiones: 'N'},
    {ejercicio: 'Oxygen'         , series: 1, mostrarNotas : false, repeticiones: 'O'},
    {ejercicio: 'Fluorine'       , series: 1, mostrarNotas : false, repeticiones: 'F'},
    {ejercicio: 'Neon'           , series: 1, mostrarNotas : false, repeticiones: 'Ne'},
  ];
  

}
