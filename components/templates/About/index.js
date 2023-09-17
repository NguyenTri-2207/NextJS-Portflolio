/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import { BsBookmarksFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import Image from "next/image";
import { ThemContext } from "common/context";
import CardMe from "components/molecules/CardMe";
import data1 from "components/templates/home/data.json";

const data = [
  {
    icon: <FaBirthdayCake />,
    name: "Birth day: 22/07/1996",
  },
  {
    icon: <BiMale />,
    name: "25",
  },
  {
    icon: <MdLocationOn />,
    name: "Location: 2Dist, HCM",
  },
  {
    icon: <BsBookmarksFill />,
    name: "Degree: Junior",
  },
  {
    icon: <HiOutlineMail />,
    name: "Mail: ngoctri2207@gmail.com",
  },
  {
    icon: <ImPhone />,
    name: " Phone: (+84)337.368.371",
  },
];
const Card = ({ startYear, endYear, title, company, description }) => {
  return (
    <div className="timeline">
      <div className="bg-[#fff4f4] dark:bg-gray-600 py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite text-xs italic dark:text-[#b7b7b7]">
          {startYear + " - " + endYear}
        </span>
        <h3 className="text-lg dark:text-white">{title}</h3>
        <p className="dark:text-[#b7b7b7] mb-2 text-sm">{description}</p>
        <p className="dark:text-white text-xs italic">{company}</p>
      </div>
    </div>
  );
};
const About = () => {
  const { theme } = useContext(ThemContext);
  return (
    <div className="container ">
      <div className="row ">
        <CardMe />
        <div className="about-text lg:col-8 col-12 lg:-mt-4 ">
          <div className="dark:text-yellow  text-xl leading-9 lg:font-medium">
            Who am i?
          </div>
          <div className=" text-2xl leading-10 lg:font-medium dark:text-gray-300">
            I{`'`}m Tri and
            <span className="dark:text-yellow lg:font-medium">
              {" "}
              Front-End Developer
            </span>
          </div>
          <div className=" pb-7 border-b border-gray-700 dark:border-gray-50 dark:text-gray-300">
            <p className="mb-3 leading-7 ">
              I{`'`}m a Web Developer, I am passionate and dedicated to my work.
              With the knowledge I learned in college and self-study at home.
            </p>
            <p className="leading-7 ">
              I gained the skills and knowledge needed to create a website
              interface. I am trying every day to improve my skills to become a
              senior front end developer
            </p>
          </div>
          <h3 className="text-2xl font-medium mt-6 mb-4 dark:text-white">
            {" "}
            What I do!
          </h3>
          <div className="lg:grid grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-2 mt-[30px]">
            {data1.experience.map((item, index) => {
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
          </div>
        </div>
      </div>
      {theme && (
        <>
          <img
            className="absolute left-20 top-20 z-0 lg:block hidden animate-pulse"
            src="/assets/bg-about-tl.png"
            width={130}
            height={163}
            alt="a"
          />
          <img
            className="absolute right-0 top-0 z-0 lg:block hidden  "
            src="/assets/bg-about-tr.png"
            width={206}
            height={313}
            alt="a"
          />
        </>
      )}
    </div>
  );
};
export default About;
