import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ startYear, endYear, title, company, description }) => {
  return (
    <div>
      <div className="bg-[#fff4f4] dark:bg-gray-600 py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite text-xs italic dark:text-[#b7b7b7]">
          {startYear + " - " + endYear}
        </span>
        <h3 className="text-lg dark:text-white">{title}</h3>
        <p className="dark:text-[#b7b7b7] mb-2 text-sm line-clamp-2">
          {description}
        </p>
        <p className="dark:text-white text-xs italic">{company}</p>
      </div>
    </div>
  );
};
var settings = {
  autoplay: true,
  dots: true,
  dotPosition: "left",
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  adaptiveHeight: true,
  variableHeight: false,
};

function SlideScroll({ data }) {
  return (
    <div>
      <div className=" my-10">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                startYear={item.startYear}
                endYear={item.endYear}
                company={item.company}
                description={item.description}
                title={item.title}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SlideScroll;
