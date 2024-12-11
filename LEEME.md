# API REST simple con Node.js y Express

Este proyecto demuestra una API REST básica construida con Node.js y Express. Utiliza MongoDB para el almacenamiento de datos e incluye ejemplos de rutas para crear, leer, actualizar y eliminar datos.

## Introducción

Este proyecto te ayudará a comprender los fundamentos de la creación de una API REST con Node.js y Express. Aprenderás a:

* Configurar un servidor Express.
* Definir rutas para manejar solicitudes HTTP (GET, POST, PUT, DELETE).
* Conectar a una base de datos MongoDB usando Mongoose.
* Implementar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en recursos.

## Empezando

1. **Prerrequisitos:** Asegúrate de tener `Node.js` y `npm` instalados en tu máquina. Puedes verificarlo ejecutando:

   ```bash
   node -v && npm -v
   ```

2. **Configura el proyecto:**

   ```bash
   cd ~/proyecto/  # Navega al directorio de tu proyecto
   git init        # Inicializa un repositorio Git local
   git remote add origin [https://github.com/](https://github.com/){{username}}/{{repository}} # Agrega tu repositorio remoto
   npm init -y     # Inicializa un nuevo proyecto Node.js (la bandera -y acepta todos los valores predeterminados)
   ```

3. **Instala las dependencias:**

   ```bash
   npm install express mongoose dotenv cors
   ```

   * **express:** Un framework web rápido y minimalista para Node.js.
   * **mongoose:** Una biblioteca de Modelado de Datos de Objetos (ODM) para MongoDB y Node.js.
   * **dotenv:** Carga variables de entorno desde un archivo `.env`.
   * **cors:** Middleware para habilitar el Intercambio de Recursos de Origen Cruzado (CORS).

4. **Instala las dependencias de desarrollo:**

   ```bash
   npm install --save-dev nodemon 
   ```

   `nodemon` es una utilidad que reinicia automáticamente tu servidor cada vez que realizas cambios en tu código.

5. **Crea los archivos del proyecto:**

   ```bash
   mkdir controllers models routes
   touch index.js .env .README.md .gitignore controllers/helloControllers.js routes/helloRoutes.js
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
   # Ignora archivos comunes del editor e IDE
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

7. **Configura los fundamentos del backend:**

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
       res.send("¡Hola, Mundo!");
   });
   app.listen(PORT, () => {
       console.log(`Escuchando en el puerto ${PORT}`);
   });
   ```

   Este código:

   * Importa el módulo Express.js.
   * Crea una instancia de aplicación Express.
   * Establece el puerto en 3000.
   * Define un manejador de rutas para solicitudes GET a la ruta `/greet`.
   * Inicia el servidor y escucha las solicitudes entrantes.

## Estructura del proyecto

```
├── controllers
│   └── helloControllers.js
├── routes
│   └── helloRoutes.js
├── index.js
├── .env
├── .gitignore
└── README.md

```

* **controllers:** Contiene la lógica para manejar las solicitudes a las rutas.
* **models:** Define los esquemas de Mongoose para tus datos.
* **routes:** Define las rutas de tu API y las asocia a los controladores.
* **index.js:** Punto de entrada principal de tu aplicación.
* **.env:** Almacena variables de entorno (como la cadena de conexión de la base de datos).
* **.gitignore:** Especifica qué archivos ignorar al subir al repositorio.


## Próximos pasos

* Implementar la lógica para conectar a la base de datos MongoDB.
* Definir modelos de datos con Mongoose.
* Crear rutas para las operaciones CRUD.
* Escribir pruebas para asegurar la calidad del código.
* Implementar autenticación y autorización si es necesario.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, crea un "fork" del repositorio, realiza tus cambios y envía una solicitud de extracción ("pull request").


## Licencia

Este proyecto está bajo la Licencia MIT.