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

Nos tememos dentro del proyecto

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
