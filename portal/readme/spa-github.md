# Angular elements importando como dependencia

Hemos subido el dist de la aplicación spa-one a un repositorio en gitub. De esta forma podremos descargar como dependencia este webcomponent. Lo ideal, sería utilizar un Nexus, Artifactory y/o cualquier otro repositorio de NPM.

El comando que ejecutamos es:

```js
npm install --save https://github.com/jesuscuesta/deploy-angular-element.git
```

En el caso de que quisiésemos importar otro proyecto, solo deberíamos cambiar la url por el seleccionado. No hay que olvidar, que en ese repositorio está el buil de un proyecto.

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

## Sistema de seguridad

En algunos casos, nos podremos encontrar en la situación que el github, gitlab... o el sistema donde tengamos el proyecto, este protegido con usuario y password o con un sistema de credenciales. En estos casos, podremos solventar esta situación de diferentes formas:

### Añadiendo el usuario y password

Este sistema es el menos recomendable, dado que estaremos dejando visible nuestro usuario y password dentro de repositorio, para cualquier persona que entre. Aunque en algunos casos nos podrá salvar de algún apuro.

```js
npm install --save https://TU_USUARIO:TU_PASSWORD@github.com/jesuscuesta/deploy-angular-element.git
```

### SSH

Cuando estamos clonando un proyecto, nos permite realizar dicha acción mediante https o SSH. Para poder hacer un clone por el segundo sistema, deberemos tener permisos de admin en nuestro github y crear unas credenciales y luego añadirlas a nuestro ordenador ([guía](https://help.github.com/es/github/authenticating-to-github/connecting-to-github-with-ssh)). De esta forma, nos garantizará la descarga sin tener que añadir el usuario y el password.

Hay que tener en cuenta en este sistema, que aquellos usuarios que intenten descargarse la dependencia con este sistema, sin tenerlo configurado, les dará error. Por lo que es aconsejable, incluir esta información y procedimiento en el readme del proyecto principal.

```js
npm install --save https://github.com/jesuscuesta/deploy-angular-element.git
```

## Repositorio Binarios

Esta sería la mejor solución. En el caso de que nuestro sistema tenga instalado y configurado un [Nexus](https://www.sonatype.com/product-nexus-repository), [Artifactory](https://jfrog.com/artifactor) o similares (importante la versión de estos software, las antiguas no disponían de esta integración), podremos configurar un NPM Privado que nos permitirá subir dicha dependencia para posteriormente gestionarla como el resto de librerías de terceros.

Antes de descargar la dependencia, deberemos configurar nuestro `.npmrc` global de nuestro usuario o dentro de nuestro proyecto, añadiendo la ruta de nuestro nexus.

```js
// Ejemplo como setear la ruta desde la terminal

npm config set registry http://localhost:8081/repository/npm-all/
```

O podemos crear el fichero desde nuestro IDE y añadirlo manualmente.

```js
registry = http://localhost:8081/repository/npm-all/
```

En algunos casos, para poder acceder a este Nexus para descargarnos las dependencias, deberemos anteriormente logarnos. Dado que hay que hacer diferentes pasos, os dejo la [guía oficial](https://help.sonatype.com/repomanager3/formats/npm-registry) para realizarlo con Nexus.

Al final, posiblemente os quede en el .npmrc algo parecido a:

```js
registry = http://localhost:8081/repository/npm-all/
email=you@example.com
always-auth=true
_auth=YWRtaW46YWRtaW4xMjM= 
```

Para instalar la libería, despues de la configuración, nos bastará con un npm install de defecto con el nombre de la librería.

```js
npm install --save NOMBRE_LIBRERÍA
```
