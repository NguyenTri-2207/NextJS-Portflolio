import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Index.module.scss";
const Card = ({ startYear, endYear, title, company, description }) => {
  return (
    <div>
      <div className="bg-slate-100 dark:bg-gray-600 py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg dark:border-gray-400 dark:border-2">
        <span className=" text-gray-lite text-sm italic dark:text-white">
          {startYear + " - " + endYear}
        </span>
        <h3 className="text-lg font-semibold text-yellow">{title}</h3>
        <p className="dark:text-gray-100 mb-2 text-sm line-clamp-2">
          {description}
        </p>
        <p className="dark:text-white text-sm italic">{company}</p>
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
  dotsClass: `slick-dots ${styles.dots}`,
};

function SlideScroll({ data }) {
  return (
    <div>
      <div className=" mb-10">
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
