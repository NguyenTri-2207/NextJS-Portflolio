import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Title from "components/atoms/Title";
import Link from "next/link";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nextArrows" onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="prevArrow" onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );
};
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
};
function RelatedPost({ repoPost }) {
  return (
    <section className="py-10 lg:pb-20 overflow-hidden lg:overflow-auto">
      <Title className="text-center text-xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-10">
        {" "}
        Related
      </Title>
      <div className=" relative z-10 ">
        <Slider {...settings}>
          {repoPost
            .filter((item) => item.title.length > 60)
            .map((item, index) => {
              return (
                <div key={index} className=" px-4 overflow-hidden ">
                  <div className=" shadow-xl bg-white dark:bg-[#272b44] h-full rounded-l g  ">
                    <a href="">
                      <img
                        className="rounded-t-lg"
                        src="https://flowbite.com/docs/images/blog/image-1.jpg"
                        alt=""
                      />
                    </a>
                    <div className="p-5  ">
                      <Link href={`/blog/${item.id}`}>
                        <h5 className=" font-bold text-2xl tracking-tight mb-2 line-clamp-2">
                          {item.title}
                        </h5>
                      </Link>
                      <p className="font-normal  mb-3 line-clamp-3 ">
                        {item.body}
                      </p>
                      <Link
                        href={`/blog/${item.id}`}
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
}

export default RelatedPost;
