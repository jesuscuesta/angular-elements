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

[Explicación Spa One Básica](https://github.com/jesuscuesta/angular-elements/blob/doc/portal/portal/readme/spa-one.md)

### Uso de SPA-ONE Extensión

[Explicación Spa One Básica utilizando extensión elements](https://github.com/jesuscuesta/angular-elements/blob/doc/portal/portal/readme/spa-one-ext.md)

### Importar web component con dependencia

[Explicación importando como dependencia un angular element](https://github.com/jesuscuesta/angular-elements/blob/doc/portal/portal/readme/spa-github.md)

### Pasar valores con input y output

- [Explicación SPA con routing básico convertida en Angular elements](https://github.com/jesuscuesta/angular-elements/blob/master/portal/readme/spa-input.md)

### Webcomponent con secciones sin lazy loading

[Explicación SPA con routing básico convertida en Angular elements](https://github.com/jesuscuesta/angular-elements/blob/doc/portal/portal/readme/spa-with-routing.md)

### Importar webcomponent por CDN

- WIP
  
### Selección dinámica de webcomponents por configuración

- WIP
  
### Aplicación webcomponent con Lazy Loading con error

- WIP
  
### Aplicación webcomponent con Lazy loading solucionándolo

- WIP

### Angular Elements compartiendo librerías en común

- WIP
  
### Importar angular elements desde aplicación react

- WIP
