/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { ThemContext } from "common/context";

import { FaCss3Alt, FaHtml5, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { DiJavascript, DiPhotoshop } from "react-icons/di";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowUpSLine } from "react-icons/ri";
const dataSkill = [
  {
    title: "html5",
    img: <FaHtml5 />,
    color: "#FF6600",
  },
  {
    title: "css3",
    img: <FaCss3Alt />,
    color: "#FF3333",
  },
  {
    title: "javascript",
    img: <DiJavascript />,
    color: "#FFCC00",
  },
  {
    title: "reactJS",
    img: <FaReact />,
    color: "#00CCCC",
  },
  {
    title: "nextjs",
    img: <DiJavascript />,
    color: "#111111",
  },
  {
    title: "github",
    img: <FaGithub />,
    color: "#000000",
  },
  {
    title: "figma",
    img: <FaFigma />,
    color: "#FF4500",
  },
  {
    title: "photoshop",
    img: <DiPhotoshop />,
    color: "#000099",
  },
];
const dataCardYear = [
  {
    year: "2022",
    title: "Middle Front-End Developer",
    des: [
      "- Build source Nextjs and tailwindcss",
      "- Working with AWS CodeBuild and Amazon S3",
    ],
    company: "Gleads Vietnam",
    companyLink: "https://gleads.vn",
  },
  {
    year: "2021",
    title: "Junior Front-End Developer",
    des: [
      "- Build source Nextjs and bootstrap",
      "- Convert website <a target='_blank' href='https://bbcincorp.com'>BBCIncorp</a>   from GulpJs to NextJs",
      "- Visually Breaking Down UI Components using Atomic Design",
    ],
    company: "Gleads Vietnam",
    companyLink: "https://bbcincorp.com",
  },
  {
    year: "2020",
    title: "Fresher Front-End Developer",
    des: [
      "- Build interactive and responsive websites like Novaland, Gumac, Adco websites, based on Javascript style technology, like React Js",
      "- Works with Typescript, ReactJs, HTML5 , SCSS...",
    ],
    company: "3Forcom",
    companyLink: "https://www.3forcom.com/",
  },
  {
    year: "2019",
    title: "Intern Front-End Developer",
    des: [
      "- Cut PSD files to HTML",
      "- Responsive web design with HTML5, CSS3 and Javascript.",
    ],
    company: "3i Infotech",
    companyLink: "https://www.3i-infotech.com/",
  },
];
const CardYear = ({ props, index }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setOpen(true);
    }
  }, []);
  const { year, title, des, company, companyLink } = props;

  return (
    <div className=" mt-5">
      <button
        className="flex justify-between items-center w-full"
        onClick={() => setOpen(!open)}
      >
        <div className="flex">
          {" "}
          <p className="font-bold lg:text-xl text-[#08d565] mr-6 lg:mr-10 mt-1">
            {year}
          </p>{" "}
          <h5 className="lg:text-2xl mb-2 font-Playfair font-medium dark:text-white">
            {title}
          </h5>
        </div>

        <div
          className={`ml-5 transition-all duration-200 ease-in-out ${
            open ? "rotate-0 " : "rotate-180"
          }`}
        >
          {" "}
          <RiArrowUpSLine size={30} color="#08d565" />
        </div>
      </button>

      <div
        className={`overflow-hidden ml-[60px] lg:ml-[96px]  ${
          !open
            ? "  -translate-y-10 opacity-0 h-0"
            : "translate-y-2 opacity-1 block max-h-40"
        } transition-all duration-700 ease-in-out `}
      >
        <ul className="mb-3 ">
          {des.map((item, index) => {
            return (
              <li
                className="text-sm  leading-6 dark:text-white"
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </ul>
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className="text-[#a0a0a0] cursor-pointer "
        >
          {company}
        </a>
      </div>
      <a
        href={companyLink}
        target="_blank"
        rel="noreferrer"
        className={`ml-[60px] lg:ml-[96px] ${
          open
            ? " -translate-y-10 opacity-0 "
            : "text-[#a0a0a0]  opacity-1  block"
        } transition-all duration-100 ease-in-out cursor-pointer translate-y-3`}
      >
        {company}
      </a>
    </div>
  );
};
const Card = ({ img, title, color }) => {
  return (
    <div className="p-4 flex flex-col justify-center items-center mx-6 my-4 rounded-sm">
      <div className="text-4xl" style={{ color: `${color}` }}>
        {img}
      </div>
      <h5 className="font-semibold uppercase mt-6 tracking-[2px] dark:text-white">
        {title}
      </h5>
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nextArrow" onClick={onClick}>
      {/* <IoIosArrowForward /> */}
    </button>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="prevArrow" onClick={onClick}>
      {/* <IoIosArrowBack /> */}
    </button>
  );
};
var settings = {
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
        arrows: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        arrows: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
  ],
};
const Skill = () => {
  const { theme } = useContext(ThemContext);
  return (
    <div className="container">
      <div className=" " id="skill">
        <div className="row items-start justify-center lg:justify-between mb-10">
          <div className="lg:col-5 md:col-8 col-12 skill_img">
            <div className="skill__item0">
              <FaReact className="text-3xl lg:text-[60px] " color="#61dafb" />
            </div>
            <div className="skill__item1">
              <DiJavascript className="text-2xl lg:text-[50px]" color="white" />
              ,
            </div>
            <div className="skill__item2">
              <FaHtml5 size={40} color="#FF6600" />,
            </div>
            <div className="skill__item3">
              <FaCss3Alt className="text-xl lg:text-[40px]" color="#FF3333" />
            </div>
            <img
              className="skill_img"
              src="/assets/bg-skill.png"
              width={414}
              height={415}
              alt="a"
            />
          </div>
          <div className="lg:col-7 mt-10 lg:mt-0 lg:pl-20">
            {dataCardYear.map((item, index) => {
              return <CardYear key={index} props={item} index={index} />;
            })}
          </div>
        </div>
        <div className="mt-20 relative z-10 lg:block hidden">
          <Slider {...settings}>
            {dataSkill.map((item, index) => {
              return (
                <Card
                  key={index}
                  img={item.img}
                  color={item.color}
                  title={item.title}
                />
              );
            })}
          </Slider>
        </div>
      </div>
      {theme && (
        <>
          <img
            className="absolute left-0 bottom-0 z-0 lg:block hidden"
            src="/assets/bg-bot-skill.png"
            width={300}
            height={200}
            alt="a"
          />
          <img
            className="absolute right-10 top-10 z-0 animate-pulse "
            src="/assets/bg-top-skill.png"
            width={32}
            height={103}
            alt="a"
          />
        </>
      )}
    </div>
  );
};
export default Skill;
