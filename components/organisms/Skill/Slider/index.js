import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
function SliderSill({ data }) {
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <div key={index} className="col-auto ">
            <div className="flex justify-center items-center">
              <div className=" mr-2" style={{ color: `${item.color}` }}>
                {item.icon}
              </div>
              <p className="font-semibold uppercase  text-sm  dark:text-white">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default SliderSill;
