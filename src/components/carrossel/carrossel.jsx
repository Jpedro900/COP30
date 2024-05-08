import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/carrossel1.webp'
import img2 from '../../assets/carrossel2.webp'

function Carousel() {
  const settings = {
    centerPadding: '0',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings} className=' bg-slate-400 mb-2 max-w-[1280px] mx-auto bg-transparent'>
      <div>
        <img src={img1} alt="Image 1" className=''/>
      </div>
      <div>
        <img src={img2} alt="Image 1" className=''/>
      </div>
    </Slider>
  );
}

export default Carousel;

