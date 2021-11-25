import Image from "next/image";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { FaCss3Alt, FaHtml5, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { DiJavascript, DiPhotoshop } from "react-icons/di";
import { SiNextDotJs } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    img: <SiNextDotJs />,
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
const Card = ({ img, title, color }) => {
  return (
    <div className="cardSkill">
      {/* <Image className="cardSkill_img" src={img} width={100} height={100} /> */}
      <div className="cardSkill_icon" style={{ color: `${color}` }}>
        {img}
      </div>
      <h5 className="cardSkill_title">{title}</h5>
    </div>
  );
};
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
const Skill = () => {
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
          slidesToShow: 3,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="skill">
        <h2 className="skill_title">My Skills</h2>
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
  );
};
export default Skill;
