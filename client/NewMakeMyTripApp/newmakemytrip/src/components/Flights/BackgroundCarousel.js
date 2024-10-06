import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../images/b1.jpg';
import img2 from '../images/b2.png';
import img3 from '../images/b3.jpg';
import img4 from '../images/b4.jpg';
import img5 from '../images/b5.jpg';
import img6 from '../images/b6.jpeg';

function BackgroundCarousel() {
  return (
    <Carousel fade={true} controls={false} indicators={false} interval={3000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ objectFit: 'cover', height: '100vh' }}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '100vh' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '100vh' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Fourth slide"
          style={{ objectFit: 'cover', height: '100vh' }}
        />
        <Carousel.Caption>
          {/* <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Fifth slide"
          style={{ objectFit: 'cover', height: '100vh' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Sixth slide"
          style={{ objectFit: 'cover', height: '100vh' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BackgroundCarousel;
