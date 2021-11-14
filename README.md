# iLogicaTechTest

Hola, esta es un pequeño preview de lo que encontrarás en el repositorio, el cual se encuentra en el **branch master** cómo funciona, cuál es la intención y algunas de las herramientas usadas. **Let's go!**. 

# ¿Qué encontrarás?

En este repositorio encontrarás un projecto, enfocado al BackEnd , desarrollado en **NodeJs** (con algunas librerías que iremos viendo) y un frontEnd mayoritariamente en JavaScript puro, html y css (con algo de bootstrap). El cuál busca replicar dos funcionalidades principales en cuanto a la gestión/administración de un sitio web sencillo.
1. Capturar la información suministrada por el usuario mediante un formulario html, para su posterior almacenamiento en una base de datos de MongoDb mediante un servicio que redirecciona dicha información.

2. Extraer esa misma información y desplegarla en el frontEnd mediante otro servicio que la extrae. (en proceso de finalización)

## ¿Qué debo instalar?

- Principalmente NodeJs (en caso de que tu máquina no lo tenga aún)
- El framework que se usó principalmente para este proyecto es **Fastify** ( **fastify.io** ) para el manejo de los request.
- Para la base de datos  se usó MongoDb y Mongoose para la modelación de la data recibida.

Para instalar las dependencias basta con descargar el repositorio y usar el siguiente comando en la terminal:

- npm istall

el cuál installar el node_modules (junto a las dependencias necesarias)

## ¿Qué hace?

Como se mencionó anteriormente el objetivo principal de este proyecto es el almacenamiento de la información del usuario y su administración, a través de dos métodos, principalmente:
1. A través de la interfase gráfica de mongoDB (Mongo Atlas) poder acceder a los registros de los usuarios, poder leer su información y atender a sus preguntas, solicitudes y sugerencias. Esta misma interfase nos permite administrar cada registro de manera que podemos borrarlos una vez resuelta la solicitud del usuario.
2. visualizar la información del usuario através de la interfase propia de la página (una tercera página dedicada) donde podrá obtener dichos registros en la página, y en la misma poder eliminarlos. (aún en desarrollo)

## ¿Cómo lo hace?

La información es enviada desde el **frontEnd**, mediante la combianción de métodos nativos de JavaScript (como **Fetch( )** ) apuntando a la dirección que está preparada desde el backEnd.

Así mismo el **backEnd** está preparado para recibir esta petición junto a la información del formulario, montamos un server en este caso mediante el siguiente comando:

**npm run dev** 
>(si deseas usar un servidor que se resetea de manera automática al detectar cambios, lo cual ejecuta la depenendcia **Nodemon**)

O

**npm run start**
> (si solo deseas correr el server, sin realizar ningún cambio)

Una vez montado el servidor, ahora puede administrar las peticiones desde cuálquier consumidor, en este caso, la página de contacto.

Cuálquier petición será evaluada através del **modelo** creado en **Mongoose**, que está ligado al **controllador**, el cual exporta una función dedicada para cada una de las **rutas** expuestas en la carpeta **routes**, las cuales a su vez envían la información a la **base de datos** que está estipulada, y conectada en el archivo **"db"**

**Base de Datos MongoDb**
La base de datos posee la opción de agregar administradores, pero infortunadamente no pude agregarlos con los correos suministrados, sin embargo creando una cuenta en MongoDB pueden ir al cluster (que está en el archivo **db**) y usarlo. Para métodos prácticos no se usaron variables de entorno por lo que mis credenciales están puestas sobre la url de la base de datos, pero cada uno de ustedes tiene sus propias credenciales, como lo sería en un caso real de uso.

## Mejoras para siguientes iteraciones

1. Como todo sistema en el que se manejan datos, es necesario crear un login que permita a cada administrador,  como por ejemplo la base de datos mencionada anteriormente, usar sus credenciales únicas, para acceder y administrar la información.
2. La intención del proyecto era permitir brillar al backEnd, por lo que se evitó usar frameworks relacionados al Front, pero una manera más eficiente y sencilla de hacer las conexiones entre el front y el back es a través de Angular (que es el que conozco yo) o cuál quier otro, como React o Vue podrían hacer el trabajo perfectamente.
3. Los query de búsqueda podrían personalizarse para que traigan a la página solo las peticiones que tengan una particularidad específica, por ejemplo que tengan más de 24 horas, para que se les pueda dar prioridad de respuesta. esta característica está dada gracias a una característica que nos presta Mongoose, llamada timeStamps (que por el momento no está imprimiendo la fecha de los request)

## Licencia de uso

ISC, si en algún momento este proyecto llegase a ser la base de un desarrollo más grande, me honraría saber que he puesto el primer ladrillo en la construcción de un proyecto que estará algún día en producción.


# Status del proyecto

El proyecto llegó a un status de Alpha, donde algunas de las funcionalidades principales están funcionales y operativas, como la insersión de la información a la base de datos y su respectiva administración desde la interfase gráfica de Mongo Atlas.
Por otro lado, una función está en estado intermedio donde la información requerida llega es enviada, llega al DOM, pero aún no se ha impreso en el frontEnd de manera correcta.

Creo haber expuesto y explicado las principales aristas relacionadas con el proyecto, con gusto estaré al pendiente de una nueva comunicación, muchas gracias por la oportunidad y espero verles pronto.
