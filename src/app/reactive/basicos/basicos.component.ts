import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit{

/*   miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    stock : new FormControl(18),

  }) */

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '',[Validators.required, Validators.minLength(3)]],
    precio: [ null, [Validators.required, Validators.min(1)]],
    stock : [ null,  [Validators.required, Validators.min(1)]]
  })

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
     this.miFormulario.setValue({
      nombre:'RTX 4080ti',
      precio: 1800,
      stock: 12
     })
  }


  campoEsValido(campo:string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if ( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched(); // ponemos todos los campos como tocados para que se muestren los errores
      return
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }
}
