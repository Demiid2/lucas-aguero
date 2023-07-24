import { Image } from 'react-bootstrap';
import img1 from '../images/proyecto/1.jpeg'
import img2 from '../images/proyecto/2.jpeg'
import img3 from '../images/proyecto/3.jpeg'
import img4 from '../images/proyecto/4.jpeg'
import img5 from '../images/proyecto/5.jpeg'
import img6 from '../images/proyecto/6.jpeg'
function Proyecto() {
        return(
            <main className='Main'>
            <Image src={img1}/>
            <Image src={img2}/>
            <Image src={img3}/>
            <Image src={img4}/>
            <Image src={img5}/>
            <Image src={img6}/>
            <br /> <br />
            </main>
        )
};

export default Proyecto;