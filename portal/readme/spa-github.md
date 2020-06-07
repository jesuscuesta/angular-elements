# Angular elements importando como dependencia

Hemos subido el dist de la aplicación spa-one a un repositorio en gitub. De esta forma podremos descargar como despencian este webcomponent. Lo ideal, sería utilizar un Nexus, Artifactory y/o cualquier otro repositorio de NPM.

El comando que ejecutamos es:

```js
npm install --save https://github.com/jesuscuesta/deploy-angular-element.git
```

Esto nos añadirá en el package.json en dependencias, el webcomponent.

```js
"deploy-angular-element": "git+https://github.com/jesuscuesta/deploy-angular-element.git",
```

Ahora vamos a utilizar dicho webcomponent importado en la opción de menu section-spa-one-github, que estaremos generando con anterioridad. También añadiremos la sección en el menú.

```js
ng g module pages/section-spa-one-github --route section-spa-one-github --module app.module
```

Luego importaremos en el module de la nueva sección el webcomponent de github, y lo añadiremos al html. Podemos hacerlo con las dos opciones anteriormente mostradas.

```js
// section-spa-one-github.module-ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaOneGithubRoutingModule } from './section-spa-one-github-routing.module';
import { SectionSpaOneGithubComponent } from './section-spa-one-github.component';

import "deploy-angular-element/main-es2015";

@NgModule({
  declarations: [SectionSpaOneGithubComponent],
  imports: [
    CommonModule,
    SectionSpaOneGithubRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionSpaOneGithubModule { }
```

```html
<!-- section-spa-one-gitub.component.html -->
<p>section-spa-one-github works!</p>
<spa-one-elements></spa-one-elements>
```
