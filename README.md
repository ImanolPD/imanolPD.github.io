# Proyecto "Zapatillas to' guapas"

Este es un proyecto de una tienda de zapatillas en línea. Los productos se muestran de forma paginada, y el usuario puede añadir productos a su carrito de compras. También es posible cambiar la moneda en la que se ven los precios (EUR, USD, GBP).

## Instrucciones de uso

1. **Estructura del proyecto**:
   - El proyecto está basado en **Vue.js 3**.
   - La interfaz permite ver una lista de zapatillas, cambiar la moneda de los precios, ver el carrito de compras y navegar por las páginas de productos.

2. **Funcionalidad**:
   - Al cargar la página, se muestra la lista de productos con su precio y una imagen.
   - El usuario puede cambiar la moneda con el selector de monedas.
   - Para agregar productos al carrito, se debe hacer clic en "Añadir al carrito" y especificar la cantidad deseada.
   - Se pueden visualizar las páginas de productos (con paginación).
   - El carrito se muestra al hacer clic en "Ver carrito", donde se muestran los productos añadidos y el total acumulado. El carrito se puede vaciar completamente.

3. **Pasos para poner en marcha el proyecto**:
   - Clonar el repositorio o descargar los archivos en tu máquina local.
   - Abrir el archivo `index.html` en un navegador para ver el proyecto en acción.

   No es necesario instalar dependencias adicionales ya que el proyecto utiliza Vue.js a través de un CDN.

4. **Interfaz**:
   - El diseño se adapta a dispositivos de distintos tamaños gracias a los estilos responsivos, ajustando el número de productos visibles por página.

## Tecnologías utilizadas

- **HTML5** para la estructura de la página.
- **CSS3** para los estilos. Se utilizaron propiedades modernas de layout, como **grid** y **flexbox**.
- **JavaScript** para la interactividad mediante **Vue.js 3**.
- La **API de tasas de cambio** (`exchangerate-api.com`) para convertir los precios a otras monedas.

## Detalles sobre el código

- Se utilizan datos de productos de ejemplo, con información como `id`, `nombre`, `precio`, `imagen`, `cantidad`, entre otros.
- Se utiliza el modelo **v-model** de Vue.js para enlazar los valores de las cantidades en el carrito y el selector de moneda.
- La paginación se implementa usando **computed properties** de Vue.js para dividir los productos en páginas.

## Problemas posibles y soluciones

1. **Problema: API de tasas de cambio no responde a veces**:
   - Durante el desarrollo, experimenté algunos fallos de respuesta en la API de tasas de cambio, lo que hizo que el cambio de moneda no funcionara correctamente.
   - **Solución**: Modifiqué el método que obtiene las tasas de conversión para incluir un manejo de errores más robusto. Ahora, si la API falla, los precios seguirán apareciendo en EUR como valor predeterminado, y se muestra un mensaje en la consola de error para avisar del problema.

2. **Problema: La paginación no siempre muestra todos los productos**:
   - Hubo un momento en que la paginación no funcionaba correctamente al intentar cargar más de 10 productos. El cálculo de las páginas no estaba actualizado después de que se añadieran productos dinámicamente.
   - **Solución**: Implementé una propiedad computada (`totalPages`) para actualizar de manera automática la cantidad total de páginas cuando se modifiquen los productos. Además, incluí un ajuste en los botones de "Siguiente" y "Anterior" para asegurar que no se intentara ir más allá del rango de las páginas.

3. **Problema: El carrito no mantiene la cantidad de productos**:
   - Al añadir productos al carrito, en algunas ocasiones la cantidad no se actualizaba correctamente cuando se incrementaba en el selector de cantidad.
   - **Solución**: Ajusté el evento `@click` de los botones "Añadir al carrito" para manejar el control de la cantidad, y luego actualicé la lógica de `addToCart` para corregir este comportamiento y asegurarme de que las cantidades de productos se mantuvieran bien al ser modificadas.

4. **Problema: Estilo visual incoherente en móviles**:
   - En la vista móvil, los botones de paginación y el carrito no se alineaban de forma adecuada, lo que generaba una experiencia de usuario inestable y dificultaba la navegación.
   - **Solución**: Ajusté los estilos con un enfoque más flexible utilizando unidades relativas en lugar de fijas para el tamaño de los elementos. También implementé un mejor uso de `flexbox` para asegurar que la paginación y el carrito se ajusten correctamente en dispositivos móviles.

5. **Problema: La lista de productos se veía desordenada al cargar la página**:
   - Después de añadir productos y al cambiar la moneda, la lista de productos aparecía distorsionada y con un retraso en la actualización de la interfaz.
   - **Solución**: Añadí una función de actualización de los productos más eficiente dentro del ciclo de vida `mounted()`, que se asegura de que el componente se renderice completamente antes de aplicar cualquier cambio de datos dinámicos, como las tasas de cambio.

6. **Problema: Algunos productos no se cargaban correctamente en la vista previa**:
   - Me di cuenta de que al hacer click sobre un producto, en ciertos navegadores no se cargaban sus imágenes. Esto ocurría principalmente debido a las rutas relativas de las imágenes.
   - **Solución**: Reemplazamos las rutas relativas con rutas absolutas o nos aseguramos de que las imágenes estén correctamente organizadas en una carpeta `img/`. Esto garantiza que los navegadores siempre puedan acceder a ellas sin problema.

## Cómo modificar el proyecto

1. **Añadir más productos**:
   - Los productos están definidos dentro del array `products`. Puedes agregar más objetos de productos allí siguiendo el mismo formato.

2. **Añadir más monedas**:
   - Puedes añadir más monedas al select de monedas modificando el array `currencies`. También asegúrate de que las tasas de conversión para esas monedas estén disponibles en la API de cambio.

3. **Cambiar el diseño**:
   - El CSS está modificado de manera simple. Puedes cambiar los colores, márgenes y tamaños de los elementos desde la sección de estilos.

## Autor

Este proyecto fue creado por Imanol Pérez.  

