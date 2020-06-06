# Portal

Esta web contendrá todos los webcomponents que se vayan generando con angular elements.

## Importando ejemplo MicroFrontends

Existen muchas formas de utilización de angular elements en un proyecto. En este caso, para hacerlo más sencillo, vamos a copiar las carpetas ```dist``` de cada proyecto spa-numero en la carpeta assets de nuestro proyecto portal, y los imporemos de ahí. Algunas de las otras posibilidades serían mediante dependencias de package.json, CDN, por configuración, etc...

Vamos a crear un menú con lazy loading para ir añadiendo las diferentes SPA de webcomponents que vayamos generando.

Desde la aplicación portal, lanzamos el siguiente comando:

```js
ng g module pages/section-spa-one --route section-spa-one --module app.module
```

Luego en de app.component.html, añadimos el menú.

### Uso de SPA-ONE Básico

La forma básica de añadir un webcomponent en nuestra aplicación, será importándolo en el componente de nuestra aplicación donde queramos mostrarlo y añadir la etiqueta html.

```js
// section-spa-one.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaOneRoutingModule } from './section-spa-one-routing.module';
import { SectionSpaOneComponent } from './section-spa-one.component';

import '../../../assets/spa-one/main-es2015';

@NgModule({
  declarations: [SectionSpaOneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SectionSpaOneRoutingModule],
})
export class SectionSpaOneModule {}

```

```js
// section-spa-one.component.html
<p>section-spa-one works!</p>
<spa-one-elements></spa-one-elements>
```

Ventajas:

- Fácil de aplicar
- Rápido

Desventajas

- No podemos controlar si hay algún error en el webcomponent
- No podemos gestionar su carga
- No podemos generarlo dinámicamente

### Uso de SPA-ONE Extensión

Instalamos una librería que nos permitirá utilizar de otra forma los angular elements.

```js
npm i --save @angular-extensions/elements
```

Generamos otro modulo con lazy loading, donde haremos uso de ella.

```js
ng g module pages/section-spa-two --route section-spa-two --module app.module
```

Actualizamos el section-spa-two.module.ts importando la nueva dependencia.

```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaTwoRoutingModule } from './section-spa-two-routing.module';
import { SectionSpaTwoComponent } from './section-spa-two.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [SectionSpaTwoComponent],
  imports: [
    CommonModule,
    SectionSpaTwoRoutingModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionSpaTwoModule { }
```

Actualizamos section-spa-two.component.ts para indicar la url donde estará el webcomponent a importar. Aunque aquí lo estemos importando desde la carpeta assets, podríamos obtenerlo desde un CDN y/o de forma dinámica desde una configuración de servidor o servicio.

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portal-section-spa-two',
  templateUrl: './section-spa-two.component.html',
  styleUrls: ['./section-spa-two.component.scss']
})
export class SectionSpaTwoComponent implements OnInit {

  elementUrl = '../../../assets/spa-one/main-es2015';

  constructor() { }

  ngOnInit(): void {
  }

}

```

Actualizamos el html, donde lo mostraremos.

```html
<p>section-spa-two works!</p>
<spa-one-elements
  *axLazyElement="elementUrl"
>
</spa-one-elements>

```

- WIP

### Pasar valores con input y output

- WIP
  
### Importar web component con dependencia

- WIP
  
### Importar webcomponent por CDN

- WIP
  
### Selección dinámica de webcomponents por configuración

- WIP
  
### Aplicación webcomponent con Lazy Loading con error

- WIP
  
### Aplicación webcomponent con Lazy loading solucionándolo

- WIP
  
### Importar angular elements desde aplicación react

- WIP
