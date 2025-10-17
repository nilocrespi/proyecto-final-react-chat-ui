<!-- markdown -->
# Chat-UI: Documentación del proyecto

## Desarrollo web frontend - Centro de e-Learning UTN

Aplicacion desarrollada como parte del curso de desarrollo web frontend, diseñado como mockup funcional de la interfaz de usuario de un cliente de chat similar a WhatsApp utilizando como herramienta principal React y Vite.

## Arquitectura del Proyecto

```
react-chat-ui/
├── frontend/          # Cliente React con Vite
└── README.md    # Este archivo
```

## Cómo funciona

La aplicacion muestra de manera inicial la vista **Login**, componente desde el cual se valida una contraseña *(a fines practicos almacenada en el mismo como **pepe123**)* y se indica al resto de la aplicacion mediante el uso de un context y persistencia de datos en localStorage que el usuario esta efectivamente logeado

Luego de ser validada la contraseña se concede acceso a la aplicacion, la pagina de vista **Messages**, la cual consta de dos componentes:

- **Sidebar**, donde se renderiza la informacion de los usuarios almacenados en context, actualizandose cada vez que estos datos se modifican, y brindando tambien una funcion para filtrarlos por su nombre.

- **Chat** ,el cual muestra un header donde mediante context se le brinda la informacion del usuario seleccionado en Sidebar y una botonera con opciones para habilitar la camara, mostrar una galeria de imagenes, modificar configuraciones, acceso a la pagina de ayuda y cerrar sesion. Tambien una ventana principal donde se visualizan los mensajes enviados y recibidos, la cual con ayuda del hook useState como tambien de un custom hook obtiene del context esta informacion, almacenada y persistida en localStorage. Por ultimo tambien contiene un footer que maneja un input donde se ingresan los mensajes a enviar

Todas las rutas se encuentran protegidas en funcion de la validacion del logeo del usuario o redirigidas a una pagina de vista Not Found en caso de que se le indique una ruta no determinada en el enrutamiento.

## Instalación y ejecucion

### Prerrequisitos
- **Node.js**
- **npm**

### Instalacion
```bash
# Clonar el repositorio
git clone https://github.com/nilocrespi/proyecto-final-react-chat-ui.git
cd proyecto-final-react-chat-ui

# Instalacion de dependencias
npm install

# Ejecucion
npm run dev
```


