import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomMinDirective } from '../directivas/custom-min.directive';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initform = {
    producto:'',
    precio: 10,
    stock:10
  }

  nombreValido(): boolean{

  return this.miFormulario?.controls["producto"]?.touched
     &&  this.miFormulario?.controls["producto"]?.invalid;

  }

  numeroValido(): boolean{

    return this.miFormulario?.controls["precio"]?.touched
        && this.miFormulario?.controls["precio"]?.value < 0
  }

  customDirective () {
    return this.miFormulario?.controls['stock']?.errors
  }



  guardar() {
    console.log('Valor...',this.miFormulario.form.value)
    this.miFormulario.resetForm({
      producto:'',
      precio: 10,
      stock: 10
    })
  }
}

