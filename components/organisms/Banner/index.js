import React, { useCallback, useEffect, useMemo, useState } from "react";

import Image from "next/image";

const TypeWriter = (props) => {
  const { textName } = props;
  const first_text = textName || " Web Developer";
  const [text, settext] = useState("");
  const textState = useMemo(() => ["istyping", "isdeleting"], []);
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const sliceText = useCallback(() => {
    settext(first_text.slice(0, text.length + 1));
  }, [first_text, text.length]);

  useEffect(() => {
    const timeout = setTimeout(sliceText, 100);
    //clear
    return () => clearTimeout(timeout);
  }, [sliceText, text]);

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
  }, [first_text, sliceText, text, textState, typing]);

  return <div className="animate-pulse">{text}</div>;
};

const Banner = () => {
  return (
    <div className="w-screen h-screen  relative overflow-hidden ">
      <div className="container lg:h-full">
        <div className="row items-center justify-center lg:h-full">
          <div className="lg:col-6 pl-10 lg:pl-20 mt-36 lg:mt-0 z-10 mb-10 tracking-wider">
            <p className=" text-main md:text-lg mb-4 relative font-poppins font-semibold  before:content-[''] before:h-0.5 lg:before:w-6 before:w-2 before:bg-main before:absolute before:bottom-3 before:-left-4 lg:before:-left-10">
              HELLO DEAR
            </p>
            <h1 className="text-gray-800 dark:text-white text-3xl  lg:text-5xl font-Playfair font-bold mb-6 ">
              I&#39;m Tri Nguyen
            </h1>
            <h1 className="text-main text-3xl lg:text-4xl  font-bold">
              <TypeWriter textName="Web Developer" />
            </h1>
          </div>
          <div className="lg:col-5 xl:col-4 mx-auto rounded-full  lg:m-auto text-center relative   lg:my-0 z-10 ">
            <Image
              src="/assets/banner/avatar.png"
              className="shadow-2xl rounded-full text-center mx-auto"
              width={400}
              height={400}
              alt="avatar"
            />
            <div className="absolute -top-20 -left-20 dark:animate-pulse hidden lg:block z-0 dark:opacity-100 opacity-0 ">
              <Image
                src="/assets/banner/bg-mt.png"
                width={128}
                height={70}
                alt="background icon mt banner absolute "
              />
            </div>
            <div className="absolute -bottom-20 -left-6 dark:animate-pulse hidden lg:block z-0 dark:opacity-100 opacity-0">
              <Image
                src="/assets/banner/bg-m.png"
                width={88}
                height={96}
                alt="background icon m banner absolute "
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
          alt="background icon left bottom banner absolute"
        />
      </div>
      <div className="absolute top-0 lg:right-20 right-1 z-00 dark:opacity-100 opacity-0">
        <Image
          src="/assets/banner/bg-t.png"
          width={384}
          height={140}
          alt="background icon top bottom banner absolute"
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
