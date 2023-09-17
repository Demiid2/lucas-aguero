
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
function Footer() {
    return(
        <footer className="footer fixed-bottom">
            <a href='https://instagram.com/lucas_aguero_de_moreno?igshid=MzRlODBiNWFlZA=='
            target='_blank'
            rel='noreferrer'
            className="icon"><FaInstagram/></a>
            <a href="https://www.facebook.com/profile.php?id=100054907535047&mibextid=ZbWKwL" 
            className="icon"
            target='_blank'
            rel='noreferrer'><FaFacebook/></a>
            <a href="https://twitter.com/LucasAgueroC?t=k82JT_zZgVi2IajUuWanQQ&s=08" 
            className="icon"
            target='_blank'
            rel='noreferrer'
            ><FaTwitter/></a>
        </footer>
    )
}

export default Footer;