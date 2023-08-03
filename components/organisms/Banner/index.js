/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Image from "next/image";

const TypeWriter = (props) => {
  const { textName } = props;
  const first_text = textName || " Web Developer";
  const [text, settext] = useState("");
  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const sliceText = () => {
    settext(first_text.slice(0, text.length + 1));
  };
  useEffect(() => {
    const timeout = setTimeout(sliceText, 100);
    //clear
    return () => clearTimeout(timeout);
  }, [text]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text !== first_text) {
        sliceText();
      } else if (text === first_text && typing === "istyping") {
        sleep(1000).then(() => {
          setTyping(textState[1]);
        });
      } else if (
        (text === first_text && typing === "isdeleting") ||
        typing === "isdeleting"
      ) {
        settext(first_text.slice(0, text.length - 1));
        if (text.length <= 2) {
          setTyping(textState[0]);
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [text, typing]);

  return <div className="animate-pulse">{text}</div>;
};

const Banner = () => {
  return (
    <div className="w-full h-screen lg:pl-[84px]  relative">
      <div className="container lg:h-full">
        <div className="row items-center justify-center lg:h-full">
          <div className="lg:col-6 pl-10 mt-[160px] lg:mt-0 z-10">
            <div></div>
            <p className=" text-main lg:text-lg  relative font-poppins font-semibold  before:content-[''] before:h-0.5 lg:before:w-6 before:w-2 before:bg-main before:absolute before:bottom-[14px] before:-left-4 lg:before:-left-10">
              HELLO DEAR
            </p>
            <h1 className="text-gray-800 dark:text-white text-3xl leading-[80px] lg:leading-[120px] xl:text-[60px] font-Playfair font-bold">
              I’m Tri Nguyen
            </h1>
            <h1 className="text-main text-3xl leading-[30px] lg:leading-[50px] xl:text-[60px] font-Playfair font-bold">
              <TypeWriter textName="Web Developer" />
            </h1>
            <button></button>
          </div>
          <div className="lg:col-6 w-[300px] md:w-full lg:m-auto text-center relative mt-6 mb-16 lg:my-0 z-10 ">
            <Image
              src="/assets/banner/avt4.png"
              className="shadow-2xl"
              width={400}
              height={400}
              alt="bg"
            />
            <div className="absolute -top-20 -left-20 animate-pulse hidden lg:block z-0">
              <Image
                src="/assets/banner/bg-mt.png"
                width={128}
                height={70}
                alt="bg"
              />
            </div>
            <div className="absolute -bottom-20 -left-6 animate-pulse hidden lg:block z-0">
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

      <div className="absolute -bottom-2  left-16 hidden lg:block z-0 dark:opacity-100 opacity-0 ">
        <Image
          src="/assets/banner/bg-lb.png"
          width={320}
          height={320}
          alt="bg"
        />
      </div>
      <div className="absolute top-0 lg:right-20 right-1 z-00 dark:opacity-100 opacity-0">
        <Image
          src="/assets/banner/bg-t.png"
          width={384}
          height={140}
          alt="bg"
        />
      </div>
      <div className="absolute -bottom-2  -right-6 rotate-[268deg] hidden lg:block dark:opacity-100 opacity-0">
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
