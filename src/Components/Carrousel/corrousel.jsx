import Carousel from 'react-bootstrap/Carousel';
import './carrousel.css';

function carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        className='carousel-image'
        src='/src/assets/images/Dorita.jpg'
        alt='Intendente' />
        
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='carousel-image'
        src='/src/assets/images/ChamicalCartel.jpg'
        alt='Cartel Chamical' />
              </Carousel.Item>
      <Carousel.Item>
      <img
        className='carousel-image'
        src='/src/assets/images/EdiMuni1.jpg'
        alt='Cartel' />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default carrousel;