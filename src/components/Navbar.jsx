import styles from '../styles/components/navbar.module.css'
function Navbar() {
    return(
    <nav>
        <ul className={styles.nav}>
            <li>Quienes somos</li>
            <li>Proyecto</li>
            <li>Eventos</li>
            <li>Fiscalizacion</li>
        </ul>
    </nav>)
}

export default Navbar;