import lucasaguero from '../images/Lucas.jpeg'
function Inicio() {
    return(
        <>
        <header className='header'>
        <h1>En Moreno, es Lucas Agüero</h1>
        <img className='image' src={lucasaguero} alt="lucas aguero"/>
        </header>
        </>
    )
}
export default Inicio;