import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ThemContext } from "common/context";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiArrowUpSLine } from "react-icons/ri";
import SliderSill from "./Slider/index";
import styles from "./index.module.scss";

const CardYear = ({ props, index }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setOpen(true);
    }
  }, [index]);
  const { year, title, des, company, companyLink } = props;

  return (
    <div className="lg:mb-10 mb-6 overflow-hidden last:mb-0 ">
      <button
        className="flex justify-between  w-full"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center mb-2 ">
          <p className="font-bold xl:text-xl text-[#08d565] mr-4 ">{year}</p>
          <p className="xl:text-2xl  font-medium dark:text-white">{title}</p>
        </div>

        <div
          className={`ml-5 transition-all duration-200 ease-in-out ${
            open ? "rotate-0 " : "rotate-180"
          }`}
        >
          <RiArrowUpSLine size={30} color="#08d565" />
        </div>
      </button>

      <div
        className={`overflow-hidden ml-10 lg:ml-16  ${
          !open
            ? "  -translate-y-10 opacity-0 h-0"
            : "translate-y-2 opacity-1 block max-h-40"
        } transition-all duration-700 ease-in-out `}
      >
        <ul className="mb-3 ">
          {des.map((item, index) => {
            return (
              <li
                className="text-sm  leading-6 dark:text-white"
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </ul>
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 cursor-pointer text-sm  "
        >
          {company}
        </a>
      </div>
      <div>
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className={`ml-[60px] lg:ml-[90px] text-sm  ${
            open ? " opacity-0 " : "text-[#a0a0a0]  opacity-1  block"
          } transition-all duration-300 ease-in-out cursor-pointer `}
        >
          {company}
        </a>
      </div>
    </div>
  );
};

const Skill = ({ data }) => {
  const { theme } = useContext(ThemContext);
  return (
    <div className="flex items-center h-full">
      <div className="container ">
        <div className="row items-center justify-center lg:justify-between overflow-hidden py-10">
          <div className={styles.skill}>
            <div className={styles.faReact}>
              <FaReact className="text-3xl lg:text-5xl " color="#61dafb" />
            </div>
            <div className={styles.diJavascript}>
              <DiJavascript className="text-2xl lg:text-4xl" color="white" />
            </div>
            <div className={styles.faHtml5}>
              <FaHtml5 size={30} color="#FF6600" />
            </div>
            <div className={styles.faCss3Alt}>
              <FaCss3Alt size={30} color="#FF3333" />
            </div>
            <Image
              className={styles.background}
              src="/assets/bg-skill.png"
              width={414}
              height={415}
              alt="background"
            />
          </div>
          <div className="lg:col-6">
            {data.dataCardYear.map((item, index) => {
              return <CardYear key={index} props={item} index={index} />;
            })}
          </div>
        </div>
        <div className="mt-10 col-8 mx-auto z-10 relative  md:block hidden mb-10">
          <SliderSill data={data.dataSkill} />
        </div>

        {theme && (
          <>
            <Image
              className="absolute left-0 bottom-0 z-0 lg:block hidden "
              src="/assets/bg-bot-skill.png"
              width={200}
              height={200}
              alt="a"
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Skill;
