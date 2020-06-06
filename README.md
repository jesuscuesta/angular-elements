# Artículo Angular Elements Completo

¿Qué es Angular Elements?

```html
Angular elements are Angular components packaged as custom elements, a web standard for defining new HTML elements in a framework-agnostic way
```

Resumiendo, es para crear componentes reutilizables aplicando Shadow Dom. Aunque hoy en día, también se utiliza para conseguir proyectos aislados para importar en otros proyectos. Algo desaconsejado por la documentación, pero una alternativa para no utilizar iframes.

En estos proyectos vamos a analizar todas las casuísticas posibles con Angular Elements, partiendo de la versión de Angular 9.

Tendremos diferentes proyectos, aunque partiremos siempre del proyecto portal, que será el proyecto principal.

Antes de entrar a trabajar con Angular Elements, es aconsejable que leais un poco de documentación de que son los webcomponents.

## Versiones

![versiones](./imgs/version.png)

## Pasos que vamos a realizar

### Generar estructura proyecto

```js
mkdir angular-elements-9
cd angular-elements-9
```

Inicializamos el git

```js
git init
```

Creamos nuestra aplicación de angular y elegimos sass => scss

```js
ng new portal ---routing --prefix=portal
```

![versiones](./imgs/generando-proyecto.png)

Nos metemos dentro del proyecto

```js
cd portal
```

Instalamos las dependencias, con npm o yarn

```js
yarn install
// o
npm install
```

Probamos que la aplicación funciona correctamente

```js
npm run start
```

Abrimos el navegador, y ponemos la ruta que nos indica la terminal: [http://localhost:4200/](http://localhost:4200/)

Podemos ver la aplicación de angular ejecutada.

![versiones](./imgs/localhost.png)

### Añadimos la dependencia de Angular Elements

```js
ng add @angular/elements
```

Esto nos añadirá algunas modificaciones en el proyecto, además de la dependencia en el package.json

```js
"@angular/elements": "^9.1.9",
```

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

## Generamos SPA-ONE

La documentación de dicha aplicación, y como generarla, está en su propio readme.

## Documentación

- https://angular.io/guide/elements: Documentación oficial de Angular para los Angular Elements. Bastante mala la documentación, no os resolverá ninguna duda.

- https://www.angulararchitects.io/aktuelles/your-options-for-building-angular-elements/
  