# Spa with routing

Vamos a integrar una aplicación con Angular Elements con Routing pero sin Lazy Loading.

La aplicación, la podemos encontrar completa dentro del [repositorio global de Angular Elements](https://github.com/jesuscuesta/angular-elements/tree/doc/portal/spa-with-routing), creado para estos artículos.

## Pasos

### Adaptamos el Portal

Primero, dentro de la aplicación Portal, generamos otro modulo con lazy loading, donde haremos uso de ella.

```js
ng g module pages/section-spa-with-routing --route section-with-routing --module app.module
```

Luego añadimos la opción al menu, para poder llegar con los enlaces.

```js
<li><a routerLink="section-with-routing">section-with-routing</a></li>
```

Luego añadimos dicha ruta en el fichero routing. En este caso, añadimos lazy loading, para tener una aplicación general más escalada. Aunque no sería necesario, sino quisiésemos.

```js
const routes: Routes = [
{
    path: 'section-with-routing',
    loadChildren: () =>
      import(
        './pages/section-spa-with-routing/section-spa-with-routing.module'
      ).then((m) => m.SectionSpaWithRoutingModule),
  }
]
```

Dentro del módulo y componente creados, deberemos actualizar su contenido:

```js
// section-spa-with-routing.module.ts
// Es utilizando la importación básica. Se aconsejaría utilizar la extendida.
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaWithRoutingRoutingModule } from './section-spa-with-routing-routing.module';
import { SectionSpaWithRoutingComponent } from './section-spa-with-routing.component';

import '../../../assets/spa-with-routing/main-es2015';
@NgModule({
  declarations: [SectionSpaWithRoutingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SectionSpaWithRoutingRoutingModule
  ]
})
export class SectionSpaWithRoutingModule { }
```

Añadimos posteriormente en el html, el tag de nuestro angular element generado:

```js
// section-spa-with-routing.component.html
<spa-with-routing-elements></spa-with-routing-elements>
```

### A tener en cuenta

Cuando estemos realizando la prueba con los routing, comprobaremos, que uno de los problemas que nos podemos encontrar, es con las urls de las rutas. Si en nuestra aplicación convertida en angular elements, hemos puesto rutas normales, posiblemente puedan llegar a crear conflictos con nuestra página principal u otros angular elements importados.

Para ello, si el proyecto es creado desde cero, se aconsejaría incluir todas las rutas dentro de un tag, para diferenciarlo del resto de angular elements y/o secciones.

### Generando aplicación con routing

[Continuación](https://github.com/jesuscuesta/angular-elements/tree/doc/portal/spa-with-routing)
