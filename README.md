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


### Estructura de Carpetas y Archivos:

•	Carpeta ‘frontend’: Contiene todo el código relacionado con el frontend.

•	Componentes React: Se encuentran en subcarpetas dentro de ‘src’.

•	Archivos de Estilo: Utiliza Tailwind CSS para el diseño.

•	Carpeta ‘pages’: Contiene las páginas principales de la aplicación.

•	Carpeta ‘components’: Contiene los componentes reutilizables de la interfaz de usuario.

•	Carpeta ‘API’: Contiene archivos para las peticiones al backend.


### Dependencias Utilizadas
•	React: Biblioteca para construir interfaces de usuario.

•	Vite: Herramienta de construcción y desarrollo para aplicaciones de frontend modernas.

•	React Hook Form: Módulo utilizado para gestionar formularios de manera eficiente en React.

•	Axios: Biblioteca para realizar peticiones HTTP.

### Instalación y Ejecución
1.	Navegar al directorio del frontend.
2.	Instalar las dependencias utilizando el comando ‘npm install’.
3.	Iniciar el servidor de desarrollo utilizando el comando ‘npm run dev’.

### Pruebas y Depuración
•	Utilizar herramientas como Postman para probar las diferentes funcionalidades de la API.

•	Utilizar las herramientas de desarrollo del navegador para depurar el frontend.

### Contexto de Usuario
El contexto de usuario se establece utilizando un proveedor de contexto llamado AuthProvider, que envuelve toda la aplicación. Esto permite que los componentes accedan y utilicen los datos del usuario en toda la aplicación.

### Uso del Contexto de Usuario
•	Para acceder a los datos del usuario y las funciones relacionadas, se utiliza el ‘hook useAuth’. Este hook proporciona acceso al estado del usuario y a las funciones como ‘register’ para registrar nuevos usuarios.

•	Para mantener un seguimiento del estado de autenticación del usuario, se utiliza el estado ‘isAuthenticated’. Este estado se establece en ‘true’ una vez que el usuario se registra correctamente o inicia sesión, y se establece en ‘false’ si hay algún error durante el proceso.

•	Para manejar la redirección una vez que el usuario se autentica correctamente, se utiliza el hook ‘useNavigate’ de React Router. Esto permite redirigir al usuario a la página deseada después del registro o inicio de sesión.


### Manejo de Errores en el Frontend

### Respuestas del Backend
El frontend espera respuestas del backend en un formato específico para manejar adecuadamente los errores. Es crucial que el backend responda con un arreglo de errores en lugar de un objeto para evitar fallos en el código del frontend al intentar ejecutar el método ‘map()’ en un objeto.

### Solución de Problemas
Si se produce un error debido a la estructura incorrecta de la respuesta del backend, se deben realizar ajustes en el backend para garantizar que las respuestas estén en el formato adecuado. Es fundamental que el backend envíe un arreglo de errores para que el frontend pueda manejarlos correctamente.
Una vez que el backend responda con un arreglo de errores, el código del frontend debería poder manejar las respuestas sin problemas y gestionar los errores de manera eficiente.

### Manejo de Errores en el Frontend
•	Respuestas del Backend: El frontend espera respuestas del backend en un formato específico para manejar adecuadamente los errores. Es crucial que el backend responda con un arreglo de errores en lugar de un objeto para evitar fallos en el código del frontend al intentar ejecutar el método ‘map()’ en un objeto.
•	Solución de Problemas: Si se produce un error debido a la estructura incorrecta de la respuesta del backend, se deben realizar ajustes en el backend para garantizar que las respuestas estén en el formato adecuado. Es fundamental que el backend envíe un arreglo de errores para que el frontend pueda manejarlos correctamente. Una vez que el backend responda con un arreglo de errores, el código del frontend debería poder manejar las respuestas sin problemas y gestionar los errores de manera eficiente.


### Implementación de la Autenticación y Redireccionamiento

Para habilitar la autenticación de usuarios y gestionar el redireccionamiento en la aplicación frontend, se implementaron las siguientes funcionalidades:

•	Contexto de Autenticación: Se creó un contexto de autenticación utilizando React Context API para proporcionar acceso global al estado de autenticación en toda la aplicación.

•	Componente de Registro: Se implementó un formulario de registro que permite a los usuarios crear nuevas cuentas.

•	Redireccionamiento Después del Registro: Se implementó el redireccionamiento automático después de que un usuario se registra correctamente en la aplicación, llevándolos al panel de control.

### Página de Inicio de Sesión
•	Implementación del Formulario: Se ha creado un formulario de inicio de sesión en la página de login utilizando React y Formik. El formulario solicita al usuario su correo electrónico y contraseña para iniciar sesión en la aplicación.

•	Manejo de Errores: Se han realizado correcciones en el manejo de errores para mostrar mensajes claros al usuario en caso de errores de autenticación. Ahora, en caso de que ocurra un error durante el inicio de sesión, se muestra un mensaje específico para guiar al usuario sobre cómo resolver el problema.


### Integración con Backend
•	Conexión con la API: Se ha establecido una conexión con la API backend para enviar los datos del formulario de inicio de sesión y recibir las respuestas del servidor. Ahora, cuando un usuario intenta iniciar sesión, el frontend envía una solicitud al backend y procesa la respuesta recibida para mostrar al usuario el resultado de la autenticación.

•	Gestión de Respuestas del Backend: Además de esperar respuestas en un formato específico, es importante manejar los códigos de estado HTTP para determinar el éxito o fracaso de las solicitudes al backend. Se pueden implementar mensajes de error personalizados para mejorar la experiencia del usuario.

### Seguridad y Autenticación
•	Detallar más sobre las prácticas recomendadas de seguridad, como el almacenamiento seguro de tokens de acceso y la protección contra ataques de CSRF (Cross-Site Request Forgery).

•	Explicar cómo se manejan las sesiones de usuario y cómo se asegura la comunicación entre el frontend y el backend.

### Pruebas y Optimización
•	Mencionar herramientas específicas que se utilizan para realizar pruebas de rendimiento, como Lighthouse o WebPageTest.

•	Describir estrategias para optimizar la carga inicial de la aplicación, como la división de código y el lazy loading de recursos.

### Mejoras de Usabilidad
•	Explorar más a fondo las técnicas de accesibilidad web para garantizar que la aplicación sea utilizada de manera efectiva por personas con discapacidades.

•	Considerar la implementación de una interfaz de usuario adaptable (responsive) para mejorar la experiencia del usuario en dispositivos móviles.

### Documentación del Código
•	Añadir ejemplos de código comentado que ilustren cómo se implementan ciertas funcionalidades o cómo se utilizan ciertas bibliotecas.

•	Incluir un archivo README.md en el repositorio del proyecto que proporcione una visión general del proyecto, instrucciones de instalación y ejemplos de uso.

### Soporte Multilingüe
•	Si es relevante para tu aplicación, detallar cómo se puede agregar soporte para múltiples idiomas utilizando bibliotecas como react-i18next o react-intl.

### Conclusiones
El frontend, desarrollado con React y Vite, ofrece una interfaz segura e intuitiva para nuestros usuarios. Con una estructura organizada y tecnologías modernas como Tailwind CSS, garantizamos una experiencia óptima. Nuestro enfoque en la integración, manejo de errores y optimización asegura un funcionamiento fluido. Estamos comprometidos a ofrecer una experiencia excepcional y continuaremos mejorando para satisfacer las necesidades de nuestros usuarios.


