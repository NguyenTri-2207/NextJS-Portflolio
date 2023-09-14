/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import { BsBookmarksFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import Image from "next/image";
import Button from "components/atoms/Button";

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
const About = () => {
  return (
    <div className="container ">
      <div className="" id="about">
        <h2 className="text-3xl lg:text-4xl text-main font-Playfair font-bold mb-6  lg:mb-16 text-center">
          About me
        </h2>
        <div className="row ">
          <div className=" lg:col-4 md:col-8 mx-auto mt-4 mb-10 lg:mb-0">
            <Image
              className="rounded-lg w-full h-full"
              src="/assets/working-at-night.jpg"
              width={300}
              height={231}
              alt="a"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) "
            />

            <div className="lg:flex justify-center hidden mt-10 ">
              <div className="b animate-pulse w-[140px]  h-10 mr-4  flex justify-center items-center">
                <div className="i h-10  w-[140px]  bg-[#3b3f5a]  items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                <a className="text-center  text-yellow font-medium text-sm z-10 pointer-events-none">
                  Download CV
                </a>
              </div>
              <div className="b animate-pulse  h-10 w-[140px] flex justify-center items-center">
                <div className="i h-10 w-[140px] bg-[#3b3f5a] items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                <a className="text-center text-yellow font-medium text-sm z-10 pointer-events-none">
                  Send Messenger
                </a>
              </div>
            </div>
          </div>
          <div className="about-text lg:col-8 col-12  ">
            <div className="text-yellow text-xl leading-9 lg:font-medium">
              Who am i?
            </div>
            <div className=" text-2xl leading-10 lg:font-medium text-gray-300">
              I{`'`}m Tri and
              <span className="text-yellow lg:font-medium">
                {" "}
                Front-End Developer
              </span>
            </div>
            <div className=" pb-7 border-b border-gray-50 text-gray-300">
              <p className="mb-3 leading-7 ">
                I{`'`}m a Web Developer, I am passionate and dedicated to my
                work. With the knowledge I learned in college and self-study at
                home.
              </p>
              <p className="leading-7 ">
                I gained the skills and knowledge needed to create a website
                interface. I am trying every day to improve my skills to become
                a senior front end developer
              </p>
            </div>
            <h3 className="text-xl font-medium mt-7 text-yellow">
              Personal Info
            </h3>
            <div className="block md:flex justify-start m-auto pt-2 lg:pt-4 pb-5 text-gray-300">
              {new Array(2).fill(2).map((_, idx) => {
                const count = data.length / 2;
                return (
                  <div key={idx} className="md:col-6">
                    {data
                      .filter(
                        (_, index) =>
                          index < (idx + 1) * count && index >= idx * count
                      )
                      .map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center mb-2 leading-8"
                        >
                          <div className="block text-lg text-yellow  mr-2">
                            {item.icon}
                          </div>
                          <span>{item.name}</span>
                        </div>
                      ))}
                  </div>
                );
              })}
            </div>

            <div className="flex lg:hidden mt-10">
              {/* <Button title="Download CV" href="https://www.topcv.vn/xem-cv/AQwAUlFQWwcEAQIABVoGAgMLAQgHAQdTAVsBUg9ad5" />
              <Button title=" Send Messenger" /> */}
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};
export default About;
