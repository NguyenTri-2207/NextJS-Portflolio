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
    <button className="nextArrow" onClick={onClick}>
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
    <section className="my-10 lg:mb-20">
      <Title>Related</Title>
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
                        <a>
                          <h5 className=" font-bold text-2xl tracking-tight mb-2 line-clamp-2">
                            {item.title}
                          </h5>
                        </a>
                      </Link>
                      <p className="font-normal  mb-3 line-clamp-3 ">
                        {item.body}
                      </p>
                      <Link href={`/blog/${item.id}`}>
                        <a className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                          Read more
                        </a>
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
