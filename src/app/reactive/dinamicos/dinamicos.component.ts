import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  constructor(private fb:FormBuilder){}

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required)
  })

 nuevoFavorito: FormControl = this.fb.control('',[Validators.required, Validators.minLength(3)])

get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
}


campoEsValido(campo: string ){

  if (campo === 'nuevoFavorito'){
    return this.nuevoFavorito.touched && this.nuevoFavorito.errors
  }
  return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched

}


 guardar(){

  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched();
    return
  }
  console.log(this.miFormulario.value);

  this.miFormulario.reset()

 }

 agregarFavorito() {
  if (this.nuevoFavorito.invalid) return;

    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, [Validators.required, Validators.minLength(3)] ));
  this.nuevoFavorito.reset()

 }

 eliminarFavorito(index:number){
  this.favoritosArr.removeAt(index)

 }
}
