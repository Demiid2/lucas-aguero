import styles from '../styles/components/navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return(
    <nav>
        <ul className={styles.nav}>
            <li><Link to="/">Inicio</Link></li>
            <li> <Link to="/Nosotros" className="navbar-item">Quienes somos</Link></li>
            <li>Proyecto</li>
            <li>Eventos</li>
            <li>Fiscalizacion</li>
        </ul>
    </nav>)
}

export default Navbar;