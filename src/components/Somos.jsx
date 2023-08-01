import { Image } from 'react-bootstrap';
import imag from '../images/precan1.jpeg'
import imag1 from '../images/precan2.jpeg'
function Somos() {
    return(
        <div className='text-center'>
        <Image src={imag} className="mx-auto p-5 img-fluid" />
        <Image src={imag1} className="mx-auto p-5 img-fluid" />
        </div>
    )
}
export default Somos;