# SpaInput

Esta aplicación, será una aplicación básica con angular elements, donde expondremos:

- Una propiedad con el decorador Input para pasarle información
- Una función con el decorador Output, para una comunicación mediante eventos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Guía paso a paso

Para la configuración, se aconseja seguir alguna de las guías anteriores.

Las dependencias y sus versiones importantes que deberemos tener en cuenta:

```js

"@angular/elements": "^9.1.9",

"ngx-build-plus": "^9.0.6",

```

En el caso de que instálasemos otras, podría ser que no funcionase nuestro ejemplo. Sobre todo ngx-build-plus, que siempre se actualiza con cada versión de angular.

## Configuración input y output

### Input

Para añadir un campo input para pasar la información será muy sencillo. Solo deberemos modificar el componente de typescript y el html.

```js
// app.component.ts
import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'spa-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() nombre = 'test';
}

```

En el componente hemos creado una propiedad llamada nombre y le hemos asignado por defecto una valor, para en el caso de que no nos pasasen ningún valor, obtener algún resultado.

Posteriormente añadiríamos dicho valor en el html.

```js
// app.component.html
<p>Ejemplo SPA Input</p>

<div>
  Valor del input {{nombre}}
</div>
```

Ahora para ver los resultados, solo deberíamos generar el angular elements, con el comando que debíamos haber añadido al package.json con anterioridad `"build:ele": "ng build --prod --output-hashing none --single-bundle true",`, con lo que ejecutando en la terminal `npm run build:ele`, generaríamos el build de nuestro componente.

Para probarlo, solo deberíamos ir a la carpeta dist/spa-input, y modificar el index.html para añadir el webcomponent y añadirle el input.

```js
// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>SpaOne</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <spa-one-elements nombre="Jesus Cuesta"></spa-one-elements>
    <script src="polyfills-es5.js" nomodule defer></script>
    <script src="polyfills-es2015.js" type="module"></script>
    <script src="main-es2015.js" type="module"></script>
    <script src="main-es5.js" nomodule defer></script>
  </body>
</html>

```

Estamos añadiendo el webcomponente y además, le pasamos un valor por el campo input que habíamos asignado. En este caso solo es un string, pero podríamos pasar objetos más complicados.

Para ver el resultado en un navegador, solo deberíamos ir a la carpeta dis/spa-input y ejecutar el siguiente comando `npx static-server -o`.

### Output

Para añadir un evento, para la comunicación con el padre, deberemos como en el caso anterior, modificar el component.ts y el html, donde deseemos incluirlo.

```js
import { Component, ViewEncapsulation, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'spa-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() nombre = 'test';

  propagar = new EventEmitter<string>();

  public activate() {
    console.log('Esta funcionando');
    this.propagar.emit('Este dato viajará hacia el padre');
  }
}
```

Hemos añadido el decorador de output que utilizaremos a través del EventEmitter. Nos permitirá además de comunicarnos con el padre mediante un evento, enviar los datos que deseemos. Además, hemos incluido un disparador en el html, para que cuando hagamos click en el párrafo, se ejecute el evento.

```js
<p>Ejemplo SPA Input</p>

<div>
  Valor del input {{nombre}}
</div>

<div (click)="activate()">
  Pulsa para activar
</div>

```

Una vez generador el proyecto, el index.html nos quedaría así:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>SpaOne</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <spa-one-elements
      nombre="Jesus Cuesta"
      (propagar)="procesaPropagar($event)"
    ></spa-one-elements>
    <script src="polyfills-es5.js" nomodule defer></script>
    <script src="polyfills-es2015.js" type="module"></script>
    <script src="main-es2015.js" type="module"></script>
    <script src="main-es5.js" nomodule defer></script>

    <script>
      function procesaPropagar(evento) {
        console.log('prueba');
        console.log(evento);
      }
    </script>
  </body>
</html>

```

En este caso, si intentamos utilizar el evento en un html básico sin angular, no nos funcionará.

