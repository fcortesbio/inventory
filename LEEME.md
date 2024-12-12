# API REST simple con Node.js y Express

Este proyecto demuestra una API REST básica construida con Node.js y Express. Utiliza MongoDB para el almacenamiento de datos e incluye ejemplos de rutas para crear, leer, actualizar y eliminar datos.

## Empezando

1. **Prerrequisitos:** Asegúrate de tener `Node.js` y `npm` instalados en tu máquina. Puedes comprobarlo ejecutando:

   ```bash
   node -v && npm -v
   ```

2. **Configura el proyecto:**

   ```bash
   cd ~/proyecto/  # Navega al directorio de tu proyecto
   git init        # Inicializa un repositorio Git local
   git remote add origin [https://github.com/](https://github.com/){{username}}/{{repository}} # Agrega tu repositorio remoto
   npm init -y     # Inicializa un nuevo proyecto Node.js (la bandera -y acepta todos los valores por defecto)
   ```

3. **Instala las dependencias:**

   ```bash
   npm install express mongoose dotenv cors
   ```

   * **express:** Un framework web rápido y minimalista para Node.js.
   * **mongoose:** Una librería de Modelado de Datos de Objetos (ODM) para MongoDB y Node.js.
   * **dotenv:** Carga variables de entorno desde un archivo `.env`.
   * **cors:** Middleware para habilitar el Intercambio de Recursos de Origen Cruzado (CORS).

4. **Instala las dependencias de desarrollo:**

   ```bash
   npm install --save-dev nodemon 
   ```

   `nodemon` es una utilidad que reinicia automáticamente tu servidor cada vez que realizas cambios en tu código.

5. **Crea los archivos del proyecto:**

   ```bash
   touch index.js .env .README.md .gitignore
   ```

6. **Configura .gitignore y sube al repositorio:**

   Abre tu archivo `.gitignore`:

   ```bash
   code .gitignore 
   ```

   Este archivo le dice a Git qué archivos y carpetas excluir de tu repositorio. Agrega el siguiente contenido a tu `.gitignore`:

   ```
   # Ignora los directorios de dependencias
   /node_modules/

   # Ignora la información sensible
   .env
   *.pem
   *.key
   *.cert

   # Ignora los archivos comunes del editor e IDE
   .vscode/
   *.swp
   *.swo
   *.tmp
   *.bak
   ```

   **Prepara y confirma tus cambios:**

   ```bash
   git add .        # Prepara todos los cambios
   git commit -m "Commit inicial" # Confirma con un mensaje
   git push origin main   # Envía los cambios a tu rama principal
   ```

   **Crea una rama de desarrollo:**

   ```bash
   git branch dev   # Crea una nueva rama llamada 'dev'
   git checkout dev  # Cambia a la rama 'dev' 
   ```

   Es una buena práctica crear una rama separada para el desarrollo para mantener tu rama principal estable.

7. **Configura las bases del backend:**

   Abre tu archivo `index.js`:

   ```bash
   code index.js
   ```

   Agrega el siguiente código:

   ```javascript
   const express = require("express");
   const app = express(); 
   const PORT = 3000;

   app.set("port", PORT); // Establece el puerto (buena práctica para la configuración)

   app.get("/greet", (req, res) => { 
       res.send("Hello, World!");
   });

   app.listen(PORT, () => {
       console.log(`Escuchando en el puerto ${PORT}`);
   });
   ```

   Este código:

   * Importa el módulo Express.js.
   * Crea una instancia de aplicación Express.
   * Establece el puerto en 3000.
   * Define un manejador de rutas para las solicitudes GET a la ruta `/greet`.
   * Inicia el servidor y escucha las solicitudes entrantes.

8. **Crea la estructura del proyecto:**

   ```bash
   mkdir controllers models routes  # Crea directorios para controladores, modelos y rutas
   touch controllers/holaControllers.js routes/holaRoutes.js  # Crea archivos para controladores y rutas
   ```

   Esto crea una estructura básica para tu proyecto, separando las responsabilidades y mejorando la organización.

   **Explicación de la estructura del proyecto:**

   * **controllers:** Este directorio contendrá la lógica para manejar las solicitudes a tu API. Los controladores normalmente interactuarán con los modelos para recuperar o modificar datos y luego enviar respuestas al cliente.
   * **models:** Este directorio definirá la estructura de tus datos y cómo se almacenan en la base de datos (en este caso, MongoDB). Los modelos representan las entidades en tu aplicación (por ejemplo, usuarios, productos, publicaciones).
   * **routes:** Este directorio definirá los endpoints de tu API y los mapeará a funciones específicas del controlador. Las rutas determinan cómo las diferentes solicitudes HTTP (GET, POST, PUT, DELETE) son manejadas por tu aplicación.

   Esta estructura organizada hace que tu código sea más fácil de entender, mantener y escalar a medida que tu proyecto crece.

9. **Implementa el endpoint de la API:**

   Ahora, vamos a crear el endpoint de la API. Empezaremos con un ejemplo simple de "Hola, Mundo!".

   * **`controllers/holaControllers.js`:**

     ```javascript
     // Exporta la función `holaMundo`, haciéndola disponible para su uso en otros módulos (como tu archivo de rutas).
     exports.holaMundo = (req, res) => { 
         console.log("hola desde el controlador"); // Registra un mensaje en la consola.
         res.send("Hola mundo desde el controlador"); // Envía la respuesta "Hola mundo desde el controlador" al cliente.
     };
     ```

   * **`routes/holaRoutes.js`:**

     ```javascript
     // Importa el framework Express.js
     const express = require("express");

     // Crea un nuevo objeto router. Esto te permite definir rutas de forma modular.
     const router = express.Router();

     // Importa el controlador que contiene la lógica para manejar las solicitudes
     const holaController = require("../controllers/holaControllers"); 

     // Define una ruta para las solicitudes GET a la ruta '/test'.
     // Esta ruta es manejada por la función `holaMundo` en el `holaController`.
     router.get("/test", holaController.holaMundo); 

     // Exporta el router para que pueda ser utilizado en otras partes de tu aplicación (como index.js)
     module.exports = router;
     ```

   * **`index.js`:**

     ```javascript
     // Importa el framework Express.js
     const express = require("express");

     // Importa las rutas definidas en holaRoutes.js
     const holaRoutes = require("./routes/holaRoutes"); 

     // Crea una instancia de la aplicación Express
     const app = express(); 

     // Define el número de puerto para el servidor
     const PORT = 3000; 

     // Establece la propiedad 'port' en la configuración de la aplicación Express (bueno para la configuración)
     app.set("port", PORT); 

     // Define una ruta para las solicitudes GET a la ruta '/hola'
     app.get("/hola", (req, res) => {
         res.send("hola mundo"); // Envía la respuesta "hola mundo"
     });

     // Monta el router holaRoutes en la ruta '/api/hola'. 
     // Esto significa que todas las rutas definidas en holaRoutes.js tendrán el prefijo '/api/hola'
     app.use("/api/hola", holaRoutes); 

     // Inicia el servidor y escucha en el puerto especificado
     app.listen(PORT, () => {
         console.log(`Escuchando en el puerto ${PORT}`); // Registra un mensaje en la consola
     });
     ```

**Explicación:**

* Definimos una función de controlador (`holaMundo`) en `holaControllers.js` para manejar la lógica de nuestro endpoint de la API.
* En `holaRoutes.js`, creamos un router y definimos una ruta para las solicitudes GET a `/test`. Esta ruta está vinculada a la función del controlador `holaMundo`.
* En `index.js`, montamos el router `holaRoutes` en la ruta `/api/hola`. Esto significa que la ruta completa para acceder a nuestro endpoint será `/api/hola/test`.

Este ejemplo demuestra un enfoque básico pero bien estructurado para construir endpoints de API en Express.js. Separa las responsabilidades mediante el uso de controladores y rutas, lo que hace que tu código sea más organizado y mantenible.