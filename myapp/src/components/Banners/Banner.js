import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import Typewriter from 'typewriter-effect';


function Banner() {
  return (
    <div className='banner'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="img_banner d-block w-100 "
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <Typewriter
              options={{
                strings: ('ADVERTISEMENT'),
                autoStart: true,
                loop: true,
              }}
            />
            <p className='caption'>Empower Your Team With Sales and Market Intelligence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img_banner d-block w-100"
            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption>
          <Typewriter
              options={{
                strings: ('BUSINESS DEALING'),
                autoStart: true,
                loop: true,
              }}
            />
            <p className='caption' >Empower Your Team With business dealing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img_banner d-block w-100"
            src="https://thecodest.co/images/uploaded/2019/08/what-are-the-differences-between-a-software-house-and-an-it-staffing-agency/cover-image.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <Typewriter
              options={{
                strings: ('End to End Development'),
                autoStart: true,
                loop: true,
              }}
            />
            <p className='caption'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner