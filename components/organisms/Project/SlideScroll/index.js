import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "components/molecules/Card";

var settings = {
  autoplay: true,
  speed: 700,
  dots: true,
  dotPosition: "left",
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        fade: false,
        vertical: false,
        verticalSwiping: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SlideScroll({ data }) {
  return (
    <div>
      <div>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <Card
                even={index % 2 == 0}
                key={index}
                startYear={item.startYear}
                src={item.src}
                title={item.title}
                href={item.href}
                description={item.description}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SlideScroll;
