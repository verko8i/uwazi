Los tipos de documentos te permiten atribuir metadata estructurada a tus documentos. Para cada plantilla de documento, puedes asignar propiedades del tipo:
* texto 
* numérico
* selección ([necesita de un tesauro](https://github.com/huridocs/uwazi/wiki/Crear-tesauros)) 
* selección múltiple ([necesita de un tesauro](https://github.com/huridocs/uwazi/wiki/Crear-tesauros)) 
* fecha, rango de fechas, múltiples fechas, rango de múltiples fechas
* texto enriquecido
* geolocalización

Por ejemplo, es posible que desees crear un tipo de documento llamado "Informes de ONG" que contendrá propiedades como el título, la fecha de publicación, el autor de la ONG, etc. Crearás una plantilla de documento para cada tipo de documento que tenga una serie particular de propiedades.

En la opción _Tipos de Documentos_, puedes ver, editar, y eliminar los tipos de documentos existentes.

## Sigue estas instrucciones:

1. Haz clic en el ícono de engranaje en la esquina superior derecha del sitio. 

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Ve a la opción _Tipos de Documentos_.
3. Da clic en _Agregar tipo de Documento_ bajo _Tipo de Documentos_.
4. Verás dos propiedades ya por default: _Título_, y _Fecha en que se agregó_. 
5. Agrega las propiedades arrastrándolas hacia el espacio designado. 
6. Edita el Nombre de la propiedad que estás agregando.
7. Da clic en _Guardar_.

![New template](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/new_document_entity.jpg)

Al agregar una nueva propiedad a un documento o tipo de entidad, puedes elegir si deseas que esa propiedad: sea obligatoria, se muestre en las tarjetas de la biblioteca y/o se incluya en la lista de filtros a los que los usuarios tienen acceso. 

![property options](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/document_properties.jpg)

Nota: cuando agregas una **propiedad de selección múltiple** a un tipo de documento, verás un campo titulado _Tesauro_ en el que puedes seleccionar un _Diccionario_ o un tipo de entidad_ que ya hayas creado. Consulta la sección sobre [Crear y administrar sus tesauros](https://github.com/huridocs/uwazi/wiki/Crear-tesauros) para más información sobre cómo trabajar con diccionarios. 

## Thumbnails de los documentos 
Para mostrar las pequeñas previsualizaciones del documento en sus tarjetas y en el panel lateral para la vista previa del documento, debes activar el campo "Vista previa" para esa plantilla en particular.

![Preview field](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/thumbnails-field.png)

Dado que se comporta como un campo regular, los administradores pueden elegir dónde se debe mostrar en la tarjeta, al arrastrar el campo a la posición deseada. Este campo viene con una opción "Ancho de relleno" que eliminará los márgenes con el lado de las tarjetas, lo que permite obtener una mejor visualización.

También incluye dos opciones de presentación, "Rellenar" que centra la imagen para que ocupe más espacio en la pantalla, y "Ajustar", que se asegura de que se mostrará toda la imagen.

Este es el resultado activando todas las opciones "Sin etiquetas", "Mostrar en tarjetas", "Ancho completo" y "Ajustar":

![Document list with previews](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/thumbnails-preview.png)