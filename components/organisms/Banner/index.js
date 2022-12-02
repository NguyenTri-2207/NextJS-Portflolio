import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
const Banner = (props) => {
  return (
    <div className="w-full h-[calc(100vh-80px)] pl-[84px]  relative">
      <div className="container h-full">
        <div className="row items-center h-full">
          <div className="lg:col-6 ">
            <p className="text-main lg:text-lg  relative font-poppins font-semibold  before:content-[''] before:h-0.5 before:w-6 before:bg-main before:absolute before:bottom-[14px] before:-left-10">
              HELLO DEAR
            </p>
            <h1 className="text-white text-4xl lg:leading-[120px] lg:text-[60px] font-Playfair font-bold">
              I’m Tri Nguyen
            </h1>
            <h1 className="text-main text-4xl lg:leading-[50px] lg:text-[60px] font-Playfair font-bold">
              Web Developer
            </h1>
            <button></button>
          </div>
          <div className="lg:col-6 m-auto text-center relative">
            <Image
              src="/assets/banner/avt2.png"
              width={243}
              height={243}
              alt="bg"
            />
            <div className="absolute -top-20 -left-20 animate-pulse">
              <Image
                src="/assets/banner/bg-mt.png"
                width={128}
                height={70}
                alt="bg"
              />
            </div>
            <div className="absolute -bottom-20 -left-6 animate-pulse">
              <Image
                src="/assets/banner/bg-m.png"
                width={88}
                height={96}
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2  left-16">
        <Image
          src="/assets/banner/bg-lb.png"
          width={320}
          height={320}
          alt="bg"
        />
      </div>
      <div className="absolute top-0 lg:right-20 right-1">
        <Image
          src="/assets/banner/bg-t.png"
          width={384}
          height={140}
          alt="bg"
        />
      </div>
      <div className="absolute -bottom-2  -right-6 rotate-[268deg]">
        <Image
          src="/assets/banner/bg-lb.png"
          width={320}
          height={320}
          alt="bg"
        />
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
