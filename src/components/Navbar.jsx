import React, { useState } from 'react';
import '../styles/components/navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    }  
    return(
    <nav className="navbar-container">
                <Link to="/" className="navbar-brand"><img alt="ARI" className='nav-logo'/></Link>
    <div className={`${isOpen ? 'is-active' : 'navbar-menu'}`}>
        <Link to="/"className="navbar-item">Inicio</Link>
        <Link to="/Nosotros"className="navbar-item">Quienes somos</Link>
        <Link to="/Fiscalizacion"className="navbar-item">Fiscalizacion</Link>
        <Link to="/Eventos"className="navbar-item">Eventos</Link>
        <Link to="/Proyecto" className="navbar-item">Proyecto</Link>
    </div>
        <button className="navbar-burger" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
    </nav>)
}

export default Navbar;