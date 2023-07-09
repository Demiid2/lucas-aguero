import emailjs from "emailjs-com";
function Formulario() {
    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_gg51d5r', 'template_jjnih3t', e.target, 'u5dE5Hlbi-5gdVan-').then(res => {
            console.log(res);
            if(res.text === 'OK'){
                alert('Se envió tu registro, nos pondremos en contacto lo más pronto posible.')
            }})
        }
    return(
    <>
<form onSubmit={enviarEmail}>
            <div className="field">
                <label for="nombre">Nombre Completo</label>
                <input type="text" name="nombre" id="nombre"/>
            </div>
            <div className="field">
                <label for="telefono">Numero de Telefono</label>
                <input type="text" name="telefono" id="telefono"/>
            </div>
            <div className="field">
                <label for="mail">Correo Electronico</label>
                <input type="text" name="mail" id="mail"/>
            </div>
            <div className="field">
                <label for="number">DNI</label>
                <input type="number" name="descripcion" id="descripcion"/>
            </div>
            <div className="field">
                <label for="date">fecha de nacimiento</label>
                <input type="date" name="descripcion" id="descripcion"/>
            </div>
            <br />
            <div className="field">
                <input type="checkbox" name="descripcion" id="descripcion"/>
                <label for="checkbox">ANOTO mi datos con  pleno  conocimiento y autorizo que  esten en un  banco de datos  para fines de fiscalizacion y se me  envie informacion tema fiscalizacion .</label>
            </div>

            <button type="submit" id="button">Envíar formulario</button>
        </form>
    </>)
}

export default Formulario;