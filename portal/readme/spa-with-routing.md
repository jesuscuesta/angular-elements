# Spa with routing

Generamos otro modulo con lazy loading, donde haremos uso de ella.

```js
ng g module pages/section-spa-with-routing --route section-with-routing --module app.module
```

Añadimos la opción al menu

Copiamos el dist de la spa-with-routing a assets

Importamos el webcomponent de alguna de las anteriores formas explicadas

Cuando estemos realizando la prueba con los routing, comprobaremos, que uno de los problemas que nos podemos encontrar, es con las urls de las rutas. Si en nuestra aplicación convertida en angular elements, hemos puesto rutas normales, posiblemente puedan llegar a crear conflictos con nuestra página principal u otros angular elements importados.

Para ello, si el proyecto es creado desde cero, se aconsejaría incluir todas las rutas dentro de un tag, para diferenciarlo del resto de angular elements y/o secciones.
