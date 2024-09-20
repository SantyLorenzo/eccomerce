# Somnio React Challenge

Run the development server:

```bash
npm install
```
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Objetivo
El objetivo de este challenge es poder evaluar correctamente tus
conocimientos en React y tu enfoque en la componentización de la solución
propuesta.

Es importante que apliques tus mejores prácticas y, si tomas alguna decisión
que consideres que se aparta de las buenas prácticas, nos expliques el
porqué. Además, valoraremos positivamente la creación de tests unitarios.

## Consigna:
Realizar una tienda de compras en React, utilizando Next JS como framework
para la creación de la misma. https://nextjs.org/

Para los productos a mostrar te proporcionamos la siguiente API:
https://fakestoreapi.com/products

Además te proporcionamos el diseño de las 2 pantallas a implementar,
buscamos que lleves este diseño a la realidad, lo más fiel posible pero sin
entrar en grandes detalles.

## Página Principal
En la pantalla principal (home) encontrarás un header, con su logo, una barra
de búsqueda y un badge e ícono con la cantidad de items agregados al
carrito.

A su vez tendrás tarjetas por cada 1 de los productos, donde cada tarjeta
mostrará título, descripción, precio y tendrá un botón de acción para agregar
este producto al carrito.

Cada vez que se agregue un producto al carrito deberás reflejar su cantidad
al carrito global ubicado en el header y a su vez mantener sincronizados
estos mismos con la vista “Carrito de Compras”.
Además la página principal tiene un buscador, esperamos que este buscador
funcione a modo de filtro sobre los productos que ya fueron cargados en la
página.

También disponemos de un botón “VER MÁS” que permite solicitar más
productos (la idea es implementar un paginado local). Por defecto sólo se
muestran 3 productos (1 fila).

## Carrito de Compras:
El usuario navegará a la vista de carrito de compras haciendo click en el
ícono del carrito
La misma mostrará el detalle de los productos incluido en el mismo (Cantidad,
Titulo, Importe total)
El botón “Seguir Comprando” permitirá volver a visualizar la página principal.

## Consideraciones importantes:
Para realizar la aplicación deberás tomar decisiones técnicas cómo:

● Mantener el estado de la aplicación (productos, carrito, items
agregados, etc).

● Utilizar un framework de estilos (SASS, LESS, Styled Components,
Tailwind, Pure Css, etc).

● Mantener la página principal actualizada con los últimos productos.

● Decidir cómo vas a comunicar al usuario cualquier error ocurrido en la
app.

● Implementar Custom Hooks de ser necesario.

● Implementar Paginado Local.

Hay algunos puntos de UX que han sido dejados de lado dentro de la
experiencia propuesta, pero nos gustaría que al menos identifiques e intentes
implementar alguno.
