import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { emailPattern, noPuedeSerStrider, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  get emailErrorMsg(): string{
     const errors = this.miFormulario.get('email')?.errors;
     if (errors?.['required']){
      return 'Email obligatorio'
     }
     if (errors?.['pattern']){
      return 'Formato de email no válido'
     }

     return 'Email ya en uso'

   }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Jose Antonio',
      email:'jaelespinosa@gmail.com',
      username:'pepe'

    })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username : ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    password2 : ['', [Validators.required,]]
  },{
    validators: [this.validatorService.camposIguales('password', 'password2')]
  })

  // se crea el servicio validatorService pero tambien esta el archivo validaciones.ts que tiene los metodos pasados a funciones
  // y las variables exportadas que se podrian exportar como funciones y variables normales sin estar dentro del servicio.

  constructor(private fb:FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService){}


  campoNoValido(campo:string) {

    return this.miFormulario.get(campo)?.invalid
      &&   this.miFormulario.get(campo)?.touched
  }

  submitForm() {

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched()

 }


}
