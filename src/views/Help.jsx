import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main className="help-main">
      <section className="help-box">
        <h1>Pagina de ayuda</h1>
        <div className="help-text">
          <div className="help-genFunct">
            <h2>Funcionamiento general</h2>
            <p>Esta aplicacion es un mockup funcional de la interfaz de usuario de un cliente de chat similar a WhatsApp, contando con una pagina de vista Login, componente desde el cual se valida una contraseña (a fines practicos almacenada en el mismo como <span>pepe123</span>) y se indica al resto de la aplicacion mediante el uso de un context y persistencia de datos en localStorage que el usuario esta efectivamente logeado</p>
            <p>Luego de ser validada la contraseña se concede acceso a la aplicacion, la pagina de vista Messages, la cual consta de dos componentes:</p>
            <p><span>Sidebar</span>, donde se renderiza la informacion de los usuarios almacenados en context, actualizandose cada vez que estos datos se modifican, y brindando tambien una funcion para filtrarlos por su nombre.</p>
            <p><span>Chat</span>,el cual muestra un header donde mediante context se le brinda la informacion del usuario seleccionado en Sidebar y una botonera con opciones para habilitar la camara, mostrar una galeria de imagenes, modificar configuraciones, acceso a la pagina de ayuda y cerrar sesion. Tambien una ventana principal donde se visualizan los mensajes enviados y recibidos, la cual con ayuda del hook useState como tambien de un custom hook obtiene del context esta informacion, almacenada y persistida en localStorage. Por ultimo tambien contiene un footer que maneja un input donde se ingresan los mensajes a enviar</p>
            <p>Todas las rutas se encuentran protegidas en funcion de la validacion del logeo del usuario o redirigidas a una pagina de vista Not Found en caso de que se le indique una ruta no determinada en el enrutamiento.</p>
          </div>
          <div className="help-utTech">
            <h2>Tecnologias utilizadas</h2>
            <p>Esta aplicacion fue creada con React+Vite y maneja la navegacion usando la libreria react-router-dom</p>
          </div>
          <div className="help-possFeatures">
            <h2>Posibles mejoras futuras</h2>
            <ul className="help-possFeatures-list">
              <li>Implementacion de backend con persistencia de datos externa a la aplicacion</li>
              <li>Completa funcionalidad de los botones de camara y galeria de imagenes en el header del componente Chat</li>
              <li>Funcionalidad para enviar y recibir mensajes con archivos en distintos formatos de media (principalmente imagen, sonido y video)</li>
            </ul>
          </div>
          <div className="help-howToApp">
            <h2>Para utilizar la aplicacion:</h2>
            <div className="help-howToApp-listCont">
              <ul>
                <li>Clonar codigo desde el <Link to="https://github.com/nilocrespi/proyecto-final-react-chat-ui" target="_blank">repositorio</Link></li>
                <li>Instalar dependencias desde la terminal utilizando <span>npm install</span></li>
                <li>Ejecutar aplicacion en la misma terminal con el comando <span>npm run dev</span></li>
                <li>Recordar que a fines practicos el acceso desde el login se concede con la contraseña <span>"pepe123"</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="back-cont">
          <Link className="back-link" to="/chat">Ir a Chat</Link>
        </div>
      </section>
    </main>
  )
}

export default Help