import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
const Banner = (props) => {
  return (
    <div className="w-full lg:h-[calc(100vh-80px)] lg:pl-[84px]  relative">
      <div className="container lg:h-full">
        <div className="row items-center lg:h-full">
          <div className="lg:col-6 pl-10 mt-[160px] lg:mt-0">
            <p className="text-main lg:text-lg  relative font-poppins font-semibold  before:content-[''] before:h-0.5 lg:before:w-6 before:w-2 before:bg-main before:absolute before:bottom-[14px] before:-left-4 lg:before:-left-10">
              HELLO DEAR
            </p>
            <h1 className="text-white text-4xl leading-[80px] lg:leading-[120px] lg:text-[60px] font-Playfair font-bold">
              I’m Tri Nguyen
            </h1>
            <h1 className="text-main text-4xl leading-[30px] lg:leading-[50px] lg:text-[60px] font-Playfair font-bold">
              Web Developer
            </h1>
            <button></button>
          </div>
          <div className="lg:col-6 lg:m-auto text-center relative mt-6 mb-16 lg:my-0">
            <Image
              src="/assets/banner/avt2.png"
              width={243}
              height={243}
              alt="bg"
            />
            <div className="absolute -top-20 -left-20 animate-pulse hidden lg:block">
              <Image
                src="/assets/banner/bg-mt.png"
                width={128}
                height={70}
                alt="bg"
              />
            </div>
            <div className="absolute -bottom-20 -left-6 animate-pulse hidden lg:block">
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

      <div className="absolute -bottom-2  left-16 hidden lg:block">
        <Image
          src="/assets/banner/bg-lb.png"
          width={320}
          height={320}
          alt="bg"
        />
      </div>
      <div className="absolute top-0 lg:right-20 right-1 ">
        <Image
          src="/assets/banner/bg-t.png"
          width={384}
          height={140}
          alt="bg"
        />
      </div>
      <div className="absolute -bottom-2  -right-6 rotate-[268deg] hidden lg:block">
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
