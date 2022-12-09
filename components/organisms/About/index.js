/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import { BsBookmarksFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import Image from "next/image";

const About = () => {
  return (
    <div className="container ">
      <div className="" id="about">
        <h2>About Us</h2>
        <div className="row ">
          <div className=" lg:col-4 col-12 mt-4 mb-10 lg:mb-0">
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
          <div className="about-text lg:col-8 col-12 ">
            <div className="about-text1  mt-lg-0">Who am i?</div>
            <div className="about-text2">
              I{`'`}m Tri and
              <span className="text-yellow"> Front-End Developer</span>
            </div>
            <div className="about-text4 ">
              I{`'`}m a Web Developer, I am passionate and dedicated to my work.
              With the knowledge I learned in college and self-study at home, I
              gained the skills and knowledge needed to create a website
              interface. I am trying every day to improve my skills to become a
              senior front end developer
            </div>
            <div className="about-icon">
              <div className="about-icon-left">
                <div className="info-item">
                  <i>
                    <FaBirthdayCake />
                  </i>
                  <label>Birth day:</label>
                  <span className="pl-2">22/07/1996</span>
                </div>
                <div className="info-item">
                  <i>
                    <BiMale />
                  </i>
                  <label>Age:</label>
                  <span className="pl-2">25</span>
                </div>
                <div className="info-item">
                  <i>
                    <MdLocationOn />
                  </i>
                  <label>Location:</label>
                  <span className="pl-2">3/2 St, 10Dist,HCM</span>
                </div>
              </div>
              <div className="about-icon-reight pl-0 lg:pl-10  mr-0 mr-md-3">
                <div className="info-item">
                  <i>
                    <BsBookmarksFill />
                  </i>
                  <label>Degree:</label>
                  <span className="pl-2">Junior</span>
                </div>
                <div className="info-item">
                  <i>
                    <HiOutlineMail />
                  </i>
                  <label>Mail:</label>
                  <a className="pl-2" href="mailto:ngoctri2207@gmail.com">
                    ngoctri2207@gmail.com
                  </a>
                </div>
                <div className="info-item">
                  <i>
                    <ImPhone />
                  </i>
                  <label>Phone:</label>

                  <a className="pl-2" href="tel:(+84)337.368.371">
                    (+84)337.368.371
                  </a>
                </div>
              </div>
            </div>

            <div className="flex lg:hidden mt-10">
              <div className="b animate-pulse mr-2 lg:mr-10 h-10 w-[130px]  lg:w-40 flex justify-center items-center">
                <div className="i h-10 lg:w-40 w-[130px] bg-yellow items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                <a className="text-center text-white font-medium text-sm z-10 pointer-events-none">
                  Download CV
                </a>
              </div>
              <div className="b animate-pulse  h-10 w-[130px]  lg:w-40 flex justify-center items-center">
                <div className="i h-10  w-[130px]  lg:w-40 bg-yellow items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                <a className="text-center text-white font-medium text-sm z-10 pointer-events-none">
                  Send Messenger
                </a>
              </div>
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
