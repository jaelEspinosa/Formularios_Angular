import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favoritos[]
}

interface Favoritos {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'jaelEspinosa',
    favoritos:[
      {id:1, nombre: 'Metal Gear'},
      {id:2, nombre: 'Deathstanding'}
    ]
  }
  nuevoJuego: string = '';

  @ViewChild('miFormulario') miFormulario!:NgForm;

  guardar() {
    console.log('guardando....');
    console.log(this.miFormulario.value);


  }

  eliminar(index:number){
     this.persona.favoritos.splice(index, 1)
  }

  agregarJuego(){
    this.persona.favoritos.push({id:this.persona.favoritos.length + 1 , nombre:this.nuevoJuego});
    this.nuevoJuego = '';
  }

  nombreValido ():boolean{

    return this.miFormulario?.controls['nombre']?.touched
       &&  this.miFormulario?.controls['nombre']?.invalid

  }

}
