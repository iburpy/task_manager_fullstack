## Sistema de Gestión de Tareas

### Objetivo

- Aplicar los conceptos aprendidos sobre microservicios y MVC en un proyecto práctico.
- Desarrollar un sistema de gestión de tareas que permita a los usuarios crear, leer, actualizar y eliminar tareas.

### Descripción

En este proyecto, trabajarán en equipos de 3 estudiantes para desarrollar un sistema de gestión de tareas utilizando microservicios y siguiendo el patrón Modelo-Vista-Controlador (MVC). El sistema permitirá a los usuarios registrarse, iniciar sesión y gestionar sus tareas pendientes.

El proyecto se dividirá en tres microservicios principales, cada uno encargado de una parte específica del sistema:

- **Microservicio de Autenticación:** Este microservicio manejará el registro de usuarios, la autenticación y la generación de tokens de acceso para los usuarios autenticados.
- **Microservicio de Tareas:** Se encargará de gestionar las tareas de los usuarios, incluyendo operaciones CRUD sobre las tareas (Crear, Leer, Actualizar, Eliminar).
- **Microservicio de Interfaz de Usuario (UI):** Proporcionará la interfaz de usuario para que los usuarios interactúen con el sistema. Se encargará de mostrar las tareas del usuario, permitir la creación, edición y eliminación de tareas, y gestionar la autenticación de usuarios.

Cada microservicio seguirá el patrón Modelo-Vista-Controlador (MVC) para una mejor organización del código y separación de responsabilidades.

### Funcionalidades del sistema

- Registro de usuarios y autenticación.
- Inicio de sesión de usuarios.
- Visualización de la lista de tareas del usuario.
- Creación de nuevas tareas.
- Edición de tareas existentes.
- Eliminación de tareas.
- Cierre de sesión de usuarios.

### Entregables

- Código fuente de los tres microservicios implementados, siguiendo el patrón MVC.
- Documentación que describa cómo ejecutar cada microservicio localmente y cómo interactúan entre sí.
- Colecciones de solicitudes en Postman que cubran todas las funcionalidades del sistema.
- Una interfaz de usuario funcional para interactuar con el sistema (puede ser una aplicación web o una aplicación de consola, según la preferencia del equipo).
- Un informe detallado que describa el diseño del sistema, las tecnologías utilizadas, los desafíos encontrados y las lecciones aprendidas durante el desarrollo del proyecto.

  ## Sistema de Gestión de Tareas

Este proyecto es una aplicación CRUD (Create, Read, Update, Delete) con autenticación. Está dividido en dos partes principales: el servidor backend y la interfaz de usuario frontend.

## Backend

El backend está construido con Node.js y Express. Utiliza MongoDB como base de datos y Mongoose para modelar los datos de la aplicación. La autenticación se maneja a través de JSON Web Tokens.

### Librerías y dependencias

- bcrypt: Para cifrar las contraseñas de los usuarios.
- bcryptjs: Una versión en JavaScript puro de bcrypt.
- cookie-parser: Middleware para manejar cookies.
- cors: Middleware para habilitar CORS.
- express: Framework web para Node.js.
- jsonwebtoken: Para crear tokens de acceso.
- mongoose: ODM para MongoDB.
- morgan: Middleware para registrar solicitudes HTTP.
- zod: Biblioteca para la validación de datos.
- nodemon: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

### Instalación y ejecución del backend

1. Clona el repositorio:git clone <https://github.com/gJethro/proyecto_parcial.git>.
2. Navega al directorio del backend: Nombre el proyecto, ingresa al directorio SRC y en la terminal ejecuta el comando npm run dev para iniciar el servidor backend.


## Frontend

El frontend está construido con React y utiliza Vite como herramienta de construcción. También utiliza Tailwind CSS para el diseño y Axios para las solicitudes HTTP.

### Librerías y dependencias

- axios: Para hacer solicitudes HTTP al servidor.
- dayjs: Biblioteca para manipular fechas.
- flowbite-react: Biblioteca de componentes de React basada en Tailwind CSS.
- js-cookie: Biblioteca para manejar cookies en el navegador.
- react: Para construir interfaces de usuario.
- react-dom: Para renderizar componentes de React en el DOM.
- react-hook-form: Para manejar formularios en React.
- react-icons: Biblioteca de iconos para React.
- react-router-dom: Para manejar el enrutamiento en aplicaciones de React.
- zod: Biblioteca para la validación de datos.
- vite: Herramienta de construcción y desarrollo para aplicaciones de frontend modernas.

### Instalación y ejecución del frontend

1. Navega al directorio del frontend:





¡Este proyecto ofrece una gran oportunidad para aplicar tus conocimientos prácticos y desarrollar habilidades en el diseño y desarrollo de sistemas de software!
