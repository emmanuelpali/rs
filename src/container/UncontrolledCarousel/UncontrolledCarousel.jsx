import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import "./UncontrolledCarousel.css";
import { images } from '../../constants';
const UncontrolledCarousel = () => {
  const businessName = "RS CUISINE"
  return (
    <div className="carousel-container">
      <Carousel className='UncontrolledCarousel'>
      <CarouselItem>
      <img src={images.welcome} alt="header_img" />
        <CarouselCaption>
        <h3>{businessName}</h3>
          <p>Meticulous Preparation, a Testament To Our Dedication</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
      <img src={images.masaBg} alt="header_img" />
        <CarouselCaption>
          <h3>{businessName}</h3>
          <p>Incredients Chosen With Care, Meals MAde With Pride</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
      <img src={images.welcome} alt="header_img" />
        <CarouselCaption>
        <h3>{businessName}</h3>
          <p>Crafted With Patience, Infused With Passion</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
      <img src={images.masaBg} alt="header_img" />
        <CarouselCaption>
          <h3>{businessName}</h3>
          <p>Incredients Chosen With Care, Meals MAde With Pride</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
    </div>
  );
}

export default UncontrolledCarousel;