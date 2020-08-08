# SPA INPUT

Añadiendo los decoradores @Input y @Output a un webcomponent.

Podemos pasar valores al webcomponent y recibir eventos y datos de él.

```js
// section-spa-input.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaOneRoutingModule } from './section-spa-input-routing.module';
import { SectionSpaOneComponent } from './section-spa-input.component';

import '../../../assets/spa-input/main-es2015';

@NgModule({
  declarations: [SectionSpaOneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SectionSpaOneRoutingModule],
})
export class SectionSpaOneModule {}

```

```js
// section-spa-input.component.html
<p>section-spa-input works!</p>
<spa-input-elements nombre="el nombre que queramos" (propagar)="procesaPropagar($event)"></spa-input-elements>
```
