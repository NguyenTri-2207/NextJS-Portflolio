import React from "react";
import Image from "next/image";

const Banner = ({ data }) => {
  return (
    <div className="container">
      <div className="row items-center justify-center ">
        <div className="lg:col-7 pl-10 lg:pl-20 mt-36 lg:mt-0 z-10 mb-10 tracking-wider">
          <p className=" text-main md:text-lg mb-4 lg:mb-10 relative font-semibold  before:content-[''] before:h-0.5 lg:before:w-6 before:w-2 before:bg-main before:absolute before:bottom-3 before:-left-4 lg:before:-left-10">
            {data.first}
          </p>
          <h1 className="text-gray-800 font-Playfair dark:text-white text-3xl lg:text-5xl font-bold mb-6 lg:mb-10 ">
            {data.name}
          </h1>
          <div className="text-main text-3xl lg:text-4xl  font-bold">
            {data.position}
          </div>
        </div>
        <div className="lg:col-5 xl:col-4 mx-auto lg:m-auto text-center relative m-6 lg:my-0 z-10 ">
          <Image
            src="/assets/banner/avatar.png"
            className="shadow-2xl rounded-full text-center mx-auto"
            width={400}
            height={400}
            alt="avatar"
          />

          <Image
            className="absolute -top-20 -left-20 dark:animate-pulse hidden lg:block z-0 dark:opacity-100 opacity-0 "
            src="/assets/banner/bg-mt.png"
            width={128}
            height={70}
            alt="background icon mt banner absolute "
          />
          <Image
            className="absolute -bottom-20 -left-6 dark:animate-pulse hidden lg:block z-0 dark:opacity-100 opacity-0"
            src="/assets/banner/bg-m.png"
            width={88}
            height={96}
            alt="background icon m banner absolute "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
