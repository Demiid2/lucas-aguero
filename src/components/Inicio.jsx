import lucasaguero from '../images/lucasaguero.jpeg'
import '../styles/components/Inicio.css'
import lista from '../images/Lista.jpeg'
function Inicio() {
    return(
        <>
        <img className='image' src={lucasaguero} alt="lucas aguero"/>
        <img className='image' src={lista} alt="lista"/>
        </>
    )
}
export default Inicio;