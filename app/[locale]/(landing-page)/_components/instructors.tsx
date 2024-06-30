"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstructorItem from "./instructor-item";
const responsive = [
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
 
]

const Instructors = () => {
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive
    
  };
  return (
    <div className='px-4 lg:px-32 pt-4 lg:pt-8 mt-8 lg:mt-16'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold drop-shadow-custom bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96] bg-clip-text text-transparent'>Intructors</h1>
      </div>
      <div className="pt-4 mt-2">
        <Slider {...settings}>
        <InstructorItem />
        <InstructorItem />
        <InstructorItem />
        <InstructorItem />

        </Slider>
      </div>
    </div>
  )
}

export default Instructors
