import { ActivatedRoute          			} from '@angular/router';
import { Component               			} from '@angular/core';
import { FormControl             			} from '@angular/forms';
import { FormularioBaseComponent 			} from 'src/app/base/formulario-base.component';
import { Dia, DiaAgregarRutinaComponent 	} from './dia/dia-agregar-rutina.component';
import { EjercicioAgregarRutinaComponent 	} from './ejercicio/ejercicio-agregar-rutina.component';
import { TipoEjercicioRoutingModule } from 'src/app/tipo-ejercicio/tipo-ejercicio-routing.module';
import { Socio } from './usuario/usuario-verificar.component';
import { Ejercicio } from './ejercicio/ejercicio-agregar-rutina.component';
import { empty } from 'rxjs';


@Component({
	selector    : 'app-rutina-agregar',
	templateUrl : './rutina-agregar.component.html',
	styleUrls   : ['./rutina-agregar.component.scss']
})


export class RutinaAgregarComponent extends FormularioBaseComponent{
	public esPreset 					: boolean = true;
	public tituloRutina 				: string = this.esPreset ? 'Rutina Preset' : 'Rutina';
	public tituloFormulario  			: string = this.modoEdicion ? 'Editar ' +this.tituloRutina: 'Agregar ' +  this.tituloRutina;
	public registrosRoles 				: Array<any> = [];
	public registrosDias				: Array<any> = []; 
	public idRutinaP 					: number = 0;
	public registroEjercicios 			: Array<any> = [];
	public nombreRutina 				: string ='';
	public camposDeshabilitados			: boolean = !this.esPreset; /// Si es preset que directamente el formulario para agregar dias y ejercicios este habilitado y como el campo en el form es disabled? lo mando como falso
	public cargoEjerAlIniciar			: boolean = true;
	public asignarMode 					= false;
	public dniSocio 					: string = '';
	public socio						: Socio = new Socio();
	public idProfe 						: number = 4;
	constructor(
		private route : ActivatedRoute,
	) {
		super();
	}
  	ngOnInit(): void {
		let params = this.route.snapshot.params;

		this.validarModoAsignar();
		this.validadEdicion();
		
		console.log("this.modoEdicion",this.modoEdicion)
		if(this.asignarMode){
			this.cargoEjerAlIniciar = false;
		}
		if(this.modoEdicion){
			this.cargoEjerAlIniciar = false;
		}

		this.idRutinaP = params['id'];

		if(params['esP']=='true'){
				this.esPreset =true;
				this.uri ="/rutinaPreset"
		}else{
				this.esPreset =false;
				this.uri ="/rutina";
				this.verificarSocio();
			}

		if(this.modoEdicion){
			this.idRutinaP == params['id'];
			this.cargarParaAsignar();
		}
		console.log("RUTINA ID: ", this.idRutinaP )
		this.crearFormulario();		
		this.agregarDia();	
		}

	private crearFormulario() {
		this.form = this.formBuilder.group({
			nombre : new FormControl({ value: '', disabled: false }),
		});
	}
	
	public async verificarSocio(){
		this.socio = new Socio();
		if(this.dniSocio!=''){
			try{
				this.socio = await this.apiService.getData(`/usuario/${this.dniSocio}/obtenerDni`);
				if(this.socio==null){
					this.socio = new Socio();
				}
			}catch(error){
				this.camposDeshabilitados = true;
			}
			//console.log(this.socio);
		}

		if(this.socio.apellido!=''){
			this.camposDeshabilitados = false;
		}else{
			this.camposDeshabilitados = true;
		}				
	}

 	public async enviar() : Promise<void> {
		this.form.markAllAsTouched();
		let formValue = this.form.value;
		let data : any = {};
		let dadata :any;
		////this.nombreRutina = this.form.value.nombre;

		// if(this.form.invalid ){	
		// 	return;
		// }
		if(this.nombreRutina == '' || this.registrosDias.length<=0)
		{
			console.log("Error en el form", this.registrosDias.length);

			return;
		}
		if(this.modoEdicion){
			try {
				await this.apiService.post(`${this.uri}/editar`,{
					ejercicios: this.registrosDias, 
					nombreRutina: this.nombreRutina,
					idRutina: this.idRutinaP
					});
				this.redireccionarAlListado();
			} catch (error) {}
		}
		else{
			try {
				if(!this.camposDeshabilitados){
					if(this.esPreset){
						/////////////////// CARGA DE LA RUTINA PRESET ///////////////////
						await this.apiService.post(`${this.uri}/agregar`,{
							ejercicios: this.registrosDias, 
							nombreRutina: this.nombreRutina
						});	
						this.redireccionarAlListado();
						/////////////////// CARGA DE LA RUTINA PRESET ///////////////////
					}else{
						///////////////// CARGA DE LA RUTINA A UN SOCIO /////////////////
						await this.apiService.post(`${this.uri}/agregar`,{
							ejercicios: this.registrosDias, 
							nombreRutina: this.nombreRutina, 
							usuario:this.socio
						});	
						this.redireccionarAlListado();
						///////////////// CARGA DE LA RUTINA A UN SOCIO /////////////////
					}
				}
			} catch (error) {}
		}		
	}

  	public agregarDia(): void{
		let dia : Array<Dia> = [];
		this.registrosDias.push(dia);

		for(let i=0; i < this.registrosDias.length; i++)
		{
			this.registrosDias[i].numeroDia= i+1;
			for(let j = 0; j<this.registrosDias[i].length; j++)
			{ 
				this.registrosDias[i][j].diaRutina =i+1;
				
			}
			
		}
  	}

	public eliminarDia(diaAEliminar:any ):void{
		let tempDias : Array <Dia>=[];
		if(this.registrosDias.length>1){
			for(let i =0 ; i< this.registrosDias.length; i++){
				if(this.registrosDias[i]!= diaAEliminar){
					tempDias.push(this.registrosDias[i]);
				}
			}
			this.registrosDias=tempDias;
			for(let i =0 ; i< this.registrosDias.length; i++){
				tempDias[i].numeroDia=i+1;
				for(let j = 0; j<this.registrosDias[i].length; j++)
				{
					
					this.registrosDias[i][j].diaRutina =i+1;
				}
				
			}
			
		}
	}

	private async cargarParaAsignar(){
		let ejercicio : Ejercicio;
		let tempRutina : any;
		let cantDias : number = 0;
		let idSocio : number = 0;
		let url = "/rutinaPreset";
		///this.form.value.nombre
		if(this.esPreset || this.asignarMode){
			url = "/rutinaPreset"
		}else{
			url = "/rutina"
		}

		tempRutina = await this.apiService.getData(`${url}/${this.idRutinaP}/obtener`);

		if(this.esPreset || this.asignarMode){
			this.nombreRutina = tempRutina[0].rp_nombre;
		}else{
			this.nombreRutina = tempRutina[0].r_nombre;
			this.socio = new Socio();
			idSocio = tempRutina[0].r_socioId;
			this.socio = await this.apiService.getData(`/usuario/${idSocio}/obtener`);
			this.dniSocio = this.socio.dni;
		}
		
		for(let i =0; i< tempRutina.length; i++){
			if(tempRutina[i].ejercicios_diaRutina>cantDias){
				cantDias = tempRutina[i].ejercicios_diaRutina;
			}
		}

		for(let i=1; i<cantDias; i++){
			let tempDias : Array <Dia>=[];
			this.registrosDias.push(tempDias);
		}

		for(let i=0; i < this.registrosDias.length; i++)
		{
			this.registrosDias[i].numeroDia= i+1;
		}

		for(let j = 0; j < this.registrosDias.length; j++){
			for(let i =0; i< tempRutina.length; i++)
				{
					if(tempRutina[i].ejercicios_diaRutina == this.registrosDias[j].numeroDia)
					{
						ejercicio = new Ejercicio();
						ejercicio.id = tempRutina[i].ejercicios_id
						ejercicio.diaRutina = tempRutina[i].ejercicios_diaRutina ;
						ejercicio.id_tipo_ejercicio = tempRutina[i].ejercicios_tiposEjercicioId;
						ejercicio.series =  tempRutina[i].ejercicios_series;
						ejercicio.repeticiones = tempRutina[i].ejercicios_repeticiones;
						console.log(ejercicio);
						this.registrosDias[j].push(ejercicio);				
					}
				}
		}
		
	}

	private validadEdicion() :void{
		let url = this.router.url;
        let urlArray = url.split("/");
		let params = this.route.snapshot.params;
        if(urlArray[urlArray.length - 1] === "edicion"){
            this.esPreset = false;
            this.textoBoton = "Guardar";
			this.idRutinaP = params['id'];
			this.asignarMode = false;
			this.modoEdicion  = true;
			this.cargarParaAsignar();
        }
	}


	private validarModoAsignar() : void {
        let url = this.router.url;
        let urlArray = url.split("/");
		let params = this.route.snapshot.params;
        if(urlArray[urlArray.length - 1] === "asignar"){
            this.esPreset = false;
            this.textoBoton = "Cargar";
			this.idRutinaP = params['id'];
			this.asignarMode = true;
			this.cargarParaAsignar();
        }
    }

	public addEjercicio(dia:any){
		let newEjer = new EjercicioAgregarRutinaComponent; 
		dia.agregarEjercicio(newEjer);
	}

	public clickCancelar() : void {
		this.redireccionarAlListado();
	}

	private redireccionarAlListado() : void {
		this.router.navigate(["rutina/listar"]);
	}


}
