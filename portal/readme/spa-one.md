# SPA ONE

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
