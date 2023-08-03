import React from "react";
import Social from "components/atoms/Social";

import { FaAngleDoubleDown } from "react-icons/fa";
import {
  MdPhoneIphone,
  MdOutlineEmail,
  MdLocationOn,
  MdOutlineToday,
} from "react-icons/md";
function index(props) {
  const dataSocial = [
    {
      icon: <MdPhoneIphone className="text-[#E93B81]" />,
      name: "Phone",
      content: "0337368371",
    },
    {
      icon: <MdOutlineEmail className="text-[#6AB5B9]" />,
      name: "Email",
      content: "ngoctri2207@gmail.com",
    },
    {
      icon: <MdLocationOn className="text-[#FD7590]" />,
      name: "Location",
      content: "District 2, Ho Chi Minh City",
    },
    {
      icon: <MdOutlineToday className="text-[#C17CEB]" />,
      name: "Birthday",
      content: "July 22, 1996",
    },
  ];
  return (
    <div className="col-12 md:col-8 mx-auto lg:col-4 ">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-8 lg:px-3 xl:px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <img
          src="/assets/banner/avt4.png"
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-24"
          alt="about avatar"
        />
        <div className="pt-36 pb-6">
          <h1 className="mt-6 mb-1 text-2xl font-semibold text-gray-500">
            Tri Nguyen
          </h1>
          <h3 className="mb-4 d text-gray-500 inline-block bg-slate-100 dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
            Web Developer
          </h3>

          <Social className="flex justify-center space-x-3" />

          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            {dataSocial.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2"
                >
                  <span className="transition-all duration-300 ease-in-out p-3 rounded-md flex justify-center items-center bg-white dark:bg-black  shadow-md">
                    {item.icon}
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                      {item.name}
                    </p>
                    <p className="dark:text-white text-xs xl:text-sm">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center">
            <button className="flex justify-center items-center text-sm text-white  py-2 px-4 rounded-3xl  bg-gradient-main mt-6">
              <FaAngleDoubleDown className="mr-2 animate-bounce" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

index.propTypes = {};

export default index;
