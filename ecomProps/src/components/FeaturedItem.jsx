import React from 'react'
import Slider from "react-slick"

const FeaturedItem = (props) => {
    console.log(props) // {smartphones}
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 0,
        cssEase: "linear"
      };
  return (
    <div>
       <Slider {...settings}>
            {
                props?.smartPhones?.map((ele,i)=>{
                    return <div className='text-center'>
                        <img className='h-[250px] m-auto' src={ele.thumbnail} alt="" />
                        <h3>{ele.title}</h3>
                    </div>
                })
            }
      </Slider>
    </div>
  )
}

export default FeaturedItem
