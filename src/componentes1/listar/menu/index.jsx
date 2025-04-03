import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-menu">
          <Link to="/">Listar</Link>
          <Link to="/original">Capturados</Link>
          <Link to="/aleatorios">Aleatorio</Link>
          <Link to="/usuario">Usuarios</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/detalle">Detalle</Link>
        </nav>
    )
  }
 
  export default Menu

