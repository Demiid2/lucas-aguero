import emailjs from "emailjs-com";
function Formulario() {
    const nuevo = "_blank"
    function enviarEmail(e) {
        e.preventDefault();
        if (document.getElementById('remember').checked) {
            emailjs.sendForm('service_gg51d5r', 'template_jjnih3t', e.target, 'u5dE5Hlbi-5gdVan-').then(res => {
                console.log(res);
                if (res.text === 'OK') {
                    alert('Se envió tu registro, nos pondremos en contacto lo más pronto posible.')
                }
            })
        }
        else {
            alert("Acepta los terminos y condiciones");
        }
    }

    return (
        <>
            <form onSubmit={enviarEmail}>
                <div className="field">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input type="text" name="nombre" id="nombre" />
                </div>
                <div className="field">
                    <label htmlFor="telefono">Numero de Telefono</label>
                    <input type="text" name="telefono" id="telefono" />
                </div>
                <div className="field">
                    <label htmlFor="mail">Correo Electronico</label>
                    <input type="text" name="mail" id="mail" />
                </div>
                <div className="field">
                    <label htmlFor="dni">DNI</label>
                    <input type="number" name="dni" id="dni" />
                </div>
                <div className="field">
                    <label htmlFor="fecha">fecha de nacimiento</label>
                    <input type="date" name="fecha" id="fecha" />
                </div>
                <br />
                <div className="field">
                    <input id="remember" name="remember" type="checkbox" />
                    <label htmlFor="checkbox" name="confirmacion" id="confirmacion">acepto los <a target={nuevo} href="https://drive.google.com/file/d/1iZ_yYPLaQSAB8WWqfPSJnzeksXIspGly/view?usp=sharing">terminos y condiciones</a></label>
                </div>

                <button type="submit" id="button">Envíar formulario</button>
            </form>
        </>)
}

export default Formulario;