#  Proyecto Cognitiva (Frontend)

Este proyecto fue desarrollado con [Angular CLI](https://github.com/angular/angular-cli) versión 1.7.4.

## Dependencias

Este es un proyecto de que usa Node por lo que sigue el procedimiento estandar para instalado de dependencias pero se requiere de la dependencia global [Angular CLI](https://github.com/angular/angular-cli) para poder hacer uso del comando ng en la terminal.

Ya que se cuente con el CLI de Angular entonces se puede hacer npm install para que se instalen todas las dependencias locales del proyecto.

## Servidor de desarrollo 

Usar el comando `ng serve` para poder correr el servidor de desarrollo. Se podrá visualizar en la ruta `http://localhost:4200/`. 



## Documentación

Esta aplicación es una Single Page Application que hace uso de un router para que parezca tener multiples páginas y navegación similar a la de los sitios tradicionales.

Solo se cuenta con dos rutas:

* /Home
* /Cuestionario

En Home se tiene el landing del sitio unicamente mientras que el cuestionario tiene el formulario que se va a enviar al backend para obtener las variables predichas.

Se tiene un servicio llamado `cuestionario.service.ts` que sirve para la comunicación con el backend por medio del protocolo HTTP, se hace una petición del tipo POST.

Se puede leer todo acerca del API en [Cognitiva-Backend](https://github.com/richyst/Cognitiva-Backend) 