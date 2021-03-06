# copi-returnsmarketplaceui
# Descripción General:
Interfaz gráfica para servicio de reportes de Devolución en entorno VTEX. 

La interfaz permite la búsqueda de decoluciones a partir de los siguientes parámetros: 

1. Fecha Inicial: Rango inicial de fecha  donde fue registrada la soliditud (OBLIGATORIO)
2. Fecha Final: Rango final de fecha donde fue registrada la solicitud 
(OBLIGATORIO)
3. Cédula de Cliente: Cédula del cliente que solicitó la orden de devolución
4. Número de órden: Número de orden en VTEX a la cual pertenece la devolución. 
5. Estado: Estado ACTUAL del proceso de devolución. Por defecto, buscará 'todos' los estados 
6. Seller: Identificador del Seller asociado al proceso de devolución. Por defecto mostrará 'TODOS' los sellers, si la APP está instalada en el MarketPlace. En caso de que se esté realizando la solicitud en un WhiteLabel, no se mostrará la opción de filtrar por sellers y el sistema buscará únicamente en el seller actual @TODO

La búsqueda la realizará tomando en cuenta TODAS LAS COINCIDENCIAS (no exclusivas) asociadas a los parámetros dados. Si por ejemplo, se ingresa como cédula 'abcded' y como orderid. 'nkooo' se mostrarán todos los registros asociados a esos 2 datos, en los rangos de fechas y estado filtrado. 

## Arquitectura:
La aplicación maneja una arquitectura estándar, en las siguientes carpetas: 
### Components

#### Filter: 
    Contiene la estructura visual general de la APP

#### UserFrom: 
    Se encarga de renderizar el filtro y los cambios de estado asociados al mismo

#### Results: 
    Se encarga de procesar el filtro, y hacer la solicitud GRAPHql para obetner los datos 

#### DisplayData: 
    Se encarga de rendierizar la información asociada al reporte y la comunicación con el usuario para las peticiones al backend. 

#### DisplayDetails: 
    Se encarga de renderizar los detalles de una orden de devolución. 

### Redux
    Se usa redux para mantener como estados globales los siguientes elementos: 
        1. Filtro 
        2. Datos (items para mostrar)
        3. Estado de loading 

    Estos elementos son manejados con estados globales que son modificados y recibidos a través de dispatchers en los componentes que los solicitan. 

### GrahpQl
En esta carpeta están los archivos .gql que definen los schemas para las consultas asociadas a: 

1. Devoluciones, con los siguientes parámetros: 
      initialDate: $initialDate,
      finalDate:$finalDate,
      status:$status,
      cc:$cc,
      orderformid:$orderformid, 
      sellerId:$sellerId,
      page:$page,
      offset:$offset

2. Históricos, con los siguientes parámetros: 
    id:$id

### Archivos Adicionales
styles.global.css define algunos estilos adicionales a la guía de estilo de vtex.

### Conexión: 

La conexión se maneja vía GRAPHQL. En caso de requerir cambiar los endpoints a los que se dirige, deberá modificarse el manifest.json y alterar las definiciones del contexto en los archivos graphql. 