Repositorio base: 

https://github.com/GabrielAlberini/base-proyecto-react-999198241

Objetivo general

Incorporar nuevas funcionalidades al proyecto base del Clon de WhatsApp aplicando los conocimientos de ruteo, estado global y manejo de componentes en React.
El objetivo es mejorar la experiencia del usuario y consolidar el uso de React Router DOM y Hooks (useState, useEffect, useNavigate).
Descripción general

Partiendo del proyecto existente, se deberán realizar las siguientes tres mejoras funcionales:
1. Rutas protegidas según estado de sesión

El sistema debe permitir el acceso a /chat únicamente si hay un usuario logueado correctamente.
Si no existe sesión activa:

    El usuario debe ser redirigido automáticamente a la pantalla de Login (/).

    Si el usuario ya está logueado, no debe poder volver al Login (ni manualmente por URL, ni utilizando los controles de navegación del navegador).

Indicaciones técnicas:

    Utilizar localStorage para guardar el estado de sesión (isLoggedIn).

    Implementar un componente ProtectedRoute o lógica condicional dentro del router (<Navigate /> de React Router DOM).

2. Ventana emergente (popup) en el botón Settings

Dentro del componente Chat, el botón de configuración deberá abrir un popup o modal con opciones configurables.
El contenido del popup queda a elección del alumno, pero debe incluir al menos dos elementos interactivos (por ejemplo: cambiar el color del fondo, modificar el nombre del usuario o seleccionar un tema claro/oscuro).

Indicaciones técnicas:

    Usar useState para controlar la visibilidad del popup.

    Utilizar position: fixed o un contenedor flotante con fondo semiopaco.

    Incluir un botón o evento para cerrar el popup.

3. Página estática de ayuda o documentación

El botón de ayuda deberá redirigir a una nueva ruta /help, donde el alumno creará una página estática de documentación.
Esta página debe contener texto informativo sobre:

    El funcionamiento general del chat.

    Las tecnologías utilizadas.

    Posibles mejoras futuras.

Indicaciones técnicas:

    Crear un nuevo componente Help.jsx dentro de la carpeta views/.

    Agregar la ruta correspondiente en RouterApp.jsx.

    El contenido debe ser estático (sin hooks ni contexto).

Requisitos técnicos

    Mantener la estructura y componentes actuales.

    Utilizar React Router DOM para la navegación y protección de rutas.

    Usar useState, useEffect y useNavigate.

    Mantener el contexto ChatContext y la persistencia en localStorage.

    Código legible, modular y comentado.


Criterios de evaluación

Criterio
	

Descripción
	

Puntaje

Rutas protegidas
	

Impide acceder a /chat sin login y evita volver al login con sesión activa.
	

30%

Popup funcional
	

Se abre y cierra correctamente desde el botón de configuración y contiene elementos interactivos.
	

30%

Página de ayuda
	

Página accesible desde el botón de ayuda con contenido estático bien presentado.
	

20%

Buenas prácticas
	

Código ordenado, uso correcto de hooks, y persistencia funcional.