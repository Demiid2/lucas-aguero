import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from '../styles/home.module.css'
import imga from '../images/señor.jpeg';
import imga0 from '../images/bustos.jpeg';
import imga1 from '../images/br.jpeg';
import imga2 from '../images/demian.jpeg';
import imga3 from '../images/consuelo.jpeg';

function Home() {
    return(
    <>
    <Navbar/>

    <header className={styles.header}>
        <h1>Lucas Aguero</h1>
        <p>
          El cambio que Moreno Necesita
        </p>
        <div>
        <img src={imga0} alt="moreno"></img>
        <img src={imga2} alt="moreno"></img>
        <br />
        <img src={imga1} alt="moreno"></img>
        <img src={imga} alt="moreno"></img>
        <img src={imga3} alt="moreno"></img>
        </div>
        
    </header>
    <Footer/>
    </>)
}

export default Home;