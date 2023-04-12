# Selectores por Template y Reactivos

Este proyecto está creado con  [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0. como documentación
de como implementar los siguientes ejemplos.

## Descripcion:

En este ejercicio desarrollamos una app con Lazy-Load en la cual tenemos ejemplos de formularios por Template y Reactivos.
Tambien tenemos un ejemplo de lo que seria un login con formulario reactivo

- Validaciones predeterminadas con Validators
- Validaciones personalizadas 
- Validaciones por Pattern

  

## ejecutar: 
 
 Para poner en marcha la app hace falta levantar un JsonServer con un archivo db.json
- install  : npm install -g json-server
- run      : json-server --watch db.json

- Ejemplo de db.json
```
{
    "usuarios": [
        {
            "id": 1,
            "email": "test1@test.com",
            "username": "test1"
        },
        {
            "id": 2,
            "email": "test2@test.com",
            "username": "test2"
        },
        {
            "id": 3,
            "email": "test3@test.com",
            "username": "test3"
        }
    ]
}

