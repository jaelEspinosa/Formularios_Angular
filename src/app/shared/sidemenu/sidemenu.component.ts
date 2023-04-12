import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles:[
    `
     .plegada{
      border:1px solid black;
      overflow-y: hidden;
      height: 0px;
     }

     .desplegada{
      height:125px;
      overflow-y:hidden;
      animation-name: despliegue;
      animation-duration:1s;
     }

     @keyframes despliegue{
      0%{
        height:0px;
      }
      100%{
        height:125px
      }
     }
    `

  ]
})



export class SidemenuComponent {

plegado1: boolean = true
plegado2: boolean = true
plegado3: boolean = true


toggle1() {
  this.plegado1 = !this.plegado1
  }
toggle2() {
    this.plegado2 = !this.plegado2
    }
toggle3() {
      this.plegado3 = !this.plegado3
      }

menuTemplate: MenuItem[] = [
  {
    texto: 'Básicos',
    ruta: './template/basicos'
  },
  {
    texto: 'Dinámicos',
    ruta: './template/dinamicos'
  },
  {
    texto: 'Switches',
    ruta: './template/switches'
  },
]
menuReactive: MenuItem[] = [
  {
    texto: 'Básicos',
    ruta: './reactive/basicos'
  },
  {
    texto: 'Dinámicos',
    ruta: './reactive/dinamicos'
  },
  {
    texto: 'Switches',
    ruta: './reactive/switches'
  },

]

menuAuth: MenuItem[] = [
  {
    texto:'login',
    ruta :'./auth/login'
  },
  {
    texto:'register',
    ruta :'./auth/register'
  },

]

}
