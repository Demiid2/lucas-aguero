import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';
function Navegacion() {
  return (
    <Navbar expand="lg" className='navbar-style sticky-top'>
      <Navbar.Brand><Link to="/">Inicio</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/Nosotros">Nosotros</Link></Nav.Link>
          <Nav.Link ><Link to="/Fiscalizacion">Fiscalizacion</Link></Nav.Link>
          <Nav.Link><Link to="/Proyecto">Proyecto</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navegacion;