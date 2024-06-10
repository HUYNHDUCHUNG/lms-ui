"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntructorItem from './intructor-item'
import Slider from "react-slick";

const Intructors = () => {
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='px-32 pt-8'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold'>Intructors</h1>
      </div>
      <div >
        <Slider {...settings}>
        <IntructorItem />
        <IntructorItem />
        <IntructorItem />
        <IntructorItem />

        </Slider>
      </div>
    </div>
  )
}

export default Intructors
