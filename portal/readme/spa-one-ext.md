# SPA ONE con Extension

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

Ventajas

- Utilizando las propiedades avanzadas de la librería, podemos gestionar cuando esta cargando o terminando de cargar el webcomponent
- Si hay un error en el webcomponente que colapsase el navegador, con este sistema podemos cambiar de sección o cerrarlo sin tener que recurrir al administrador de tareas
- Admitir importaciones dinámicas y más avanzadas

Desventajas

- Debemos importar una nueva librería
