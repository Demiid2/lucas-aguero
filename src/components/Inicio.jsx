import lucasaguero from '../images/lucas2.jpeg'
function Inicio() {
    return(
        <>
        <header className='header'>
        <h1>En Moreno, es Lucas Agüero</h1>
        <img className='image' src={lucasaguero} alt="lucas aguero"/>
        <br /> <br />
        </header>
        </>
    )
}
export default Inicio;