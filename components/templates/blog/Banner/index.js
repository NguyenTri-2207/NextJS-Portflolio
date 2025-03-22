import React from "react";
import { FiCalendar, FiUser } from "react-icons/fi";
import { FaRegClock, FaChevronRight } from "react-icons/fa";
import Link from "components/molecules/Link";
import lottieData from "./banner.json";
// import LottieAnimation from "components/molecules/LottieAnimation";
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ data }) => {
  return (
    <div className="flex mb-6 lg:mb-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="flex items-center">
          <Link href="/">
            <IoHome />
          </Link>
        </li>
        {data.map((item, index) => {
          return (
            <li key={index} className="flex items-center">
              {item.url ? (
                <Link
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-white"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ) : (
                <p className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-white">
                  {" "}
                  {item.title}
                </p>
              )}

              <div>
                {index < data.length - 1 && (
                  <FaChevronRight className="ml-2" size={10} />
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
const Banner = ({ data, info }) => {
  return (
    <div className="py-10 lg:py-14 bg-background-banner-image dark:bg-bgHome-dark mb-10 lg:mb-20 dark:text-gray-100 shadow border-b-1 border-[#5d616d]">
      <div className="container">
        <div className="md:row justify-between">
          <div className="md:col-8">
            <Breadcrumb data={data.breadcrumb} />
            <h1 className="mb-4 lg:mb-6 text-3xl font-semibold leading-[50px] lg:leading-[70px] tracking-tight text-[#1d3169] md:text-4xl lg:text-5xl dark:text-gray-200">
              {data.title ? data.title : ""}
            </h1>
            <p>{data.described}</p>
            {info && (
              <div className="mt-10 text-xs">
                <div className={"mr-6 hidden items-center lg:inline-flex"}>
                  <FiUser size={20} className="mr-2 p-0.5" />
                  <i className="font-medium">Tri Nguyen</i>
                </div>
                <div className={"mr-6 hidden items-center lg:inline-flex"}>
                  <FaRegClock size={20} className="mr-2 p-0.5" />{" "}
                  <i className="font-medium">{data.minutes}</i>
                </div>
                <div className={"inline-flex items-center lg:mr-6"}>
                  <FiCalendar size={20} className="mr-2 p-0.5" />
                  <i className="font-medium">22/07/2023</i>
                </div>
              </div>
            )}
          </div>
          <div className="md:col-4">
            <div>
              {/* <LottieAnimation animationData={lottieData} loop={true} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
