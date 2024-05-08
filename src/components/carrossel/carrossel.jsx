import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/maxresdefault.webp'

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img1} alt="Image 1" />
      </div>
    </Slider>
  );
}

export default Carousel;

