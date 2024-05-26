import React from "react";
import Social from "components/atoms/Social";
import Image from "next/image";

import { FaAngleDoubleDown } from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineEmail,
  MdOutlineToday,
  MdPhoneIphone,
} from "react-icons/md";

const CardMe = ({ data }) => {
  const mapIconToComponent = (iconName) => {
    switch (iconName) {
      case "MdPhoneIphone":
        return (
          <div>
            <MdPhoneIphone size="18" className="text-[#E93B81]" />
          </div>
        );
      case "MdOutlineEmail":
        return (
          <div>
            <MdOutlineEmail size="18" className="text-[#6AB5B9]" />
          </div>
        );
      case "MdLocationOn":
        return (
          <div>
            <MdLocationOn size="18" className="text-[#FD7590]" />
          </div>
        );
      case "MdOutlineToday":
        return (
          <div>
            <MdOutlineToday size="18" className="text-[#C17CEB]" />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="col-12 md:col-8 lg:col-4 px-4 lg:px-8  mt-36 lg:mt-10 ">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-black px-8 lg:px-3 xl:px-6 rounded-lg  lg:mt-0">
        <Image
          width={1228}
          height={1228}
          src="/assets/banner/avt3.png"
          className="w-44 absolute left-1/2 transform -translate-x-1/2  drop-shadow-xl -mt-24   "
          alt="about avatar"
          priority
        />
        <div className="pt-16 pb-6">
          <h3 className="mt-6 mb-2 text-2xl font-semibold text-gray-500">
            Tri Nguyen
          </h3>
          <div className="mb-6 d text-gray-500 inline-block bg-slate-100 dark:bg-gray-800 px-4 py-1.5 rounded-lg dark:text-gray-400">
            Web Developer
          </div>

          <Social className="flex justify-center space-x-3" />

          <ul className="p-4 rounded-2xl mt-4 bg-slate-100 dark:bg-gray-900">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex border-b border-gray-300 dark:border-gray-700 py-3"
                >
                  <span className="transition-all duration-300 ease-in-out p-2 rounded-md flex justify-center items-center bg-white dark:bg-black  shadow-md">
                    {mapIconToComponent(item.icon)}
                  </span>
                  <div className="text-left ml-3">
                    <p className="text-xs  dark:text-gray-400">{item.name}</p>
                    <p className="dark:text-gray-300 text-xs">{item.content}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <button className="flex justify-center items-center mx-auto text-sm text-white py-2 px-4 rounded-3xl  bg-gradient-main my-6">
            <FaAngleDoubleDown className="mr-2 animate-bounce" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMe;
