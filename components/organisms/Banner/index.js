import React from "react";
import Image from "next/image";

const Banner = ({ data: { greeting, name, position } }) => {
  return (
    <div className="container ">
      <div className="row items-center justify-center">
        <div className="lg:col-7 pl-10 lg:pl-20 mt-12 lg:mt-0 z-10 mb-10 tracking-wider">
          <p className=" text-main md:text-lg mb-4 lg:mb-10 relative font-semibold  before:content-[''] before:h-0.5 lg:before:w-6 before:w-2 before:bg-main before:absolute before:bottom-3 before:-left-4 lg:before:-left-10">
            {greeting}
          </p>
          <h1 className="text-gray-800  dark:text-white text-3xl lg:text-5xl font-bold mb-4 lg:mb-10 ">
            {name}
          </h1>
          <p className="text-main text-2xl lg:text-4xl  font-bold">
            {position}
          </p>
        </div>
        <div className="lg:col-5 xl:col-4  text-center relative my-6 lg:my-0 z-10 ">
          <Image
            src="/assets/banner/avatar.png"
            className="shadow-2xl rounded-full mx-auto "
            width={400}
            height={400}
            alt="avatar"
            priority
          />

          <Image
            className="w-20 lg:w-auto h-auto absolute -top-10 -left-3 lg:-top-20 lg:-left-20 dark:animate-pulse  lg:block  dark:opacity-100 opacity-0 "
            src="/assets/banner/circle-icon.png"
            width={128}
            height={70}
            alt="circle-icon"
          />
          <Image
            className="w-10 absolute -bottom-4 lg:-bottom-20 lg:-left-6 dark:animate-pulse  dark:opacity-100 opacity-0"
            src="/assets/banner/diamond-icon.png"
            width={59}
            height={64}
            alt="diamond-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
