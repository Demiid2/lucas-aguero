import { Image } from 'react-bootstrap';
import imag from '../images/precan1.jpeg'
import imag1 from '../images/precan2.jpeg'
import imag2 from '../images/precan3.jpeg'
import imag3 from '../images/precan4.jpeg'
import imag4 from '../images/precan5.jpeg'
import imag5 from '../images/precan6.jpeg'
function Somos() {
    return(
        <div className='text-center'>
        <Image src={imag} className="mx-auto p-5 img-fluid" />
        <Image src={imag1} className="mx-auto p-5 img-fluid" />
        <Image src={imag2} className="mx-auto p-5 img-fluid" />
        <Image src={imag3} className="mx-auto p-5 img-fluid" />
        <Image src={imag4} className="mx-auto p-5 img-fluid" />
        <Image src={imag5} className="mx-auto p-5 img-fluid" />
        </div>
    )
}
export default Somos;