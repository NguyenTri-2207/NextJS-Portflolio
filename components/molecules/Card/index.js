/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { FaLocationArrow, FaGithub } from "react-icons/fa";
const Card = ({ startYear, title, src, description, href, even, github }) => {

  return (
    <div className="mb-10">
      <div
        className={`${even ? "lg:flex" : " lg:flex lg:flex-row-reverse "
          } group bg-gray-900 text-white shadow-lg  rounded-lg  overflow-hidden relative `}
      >
        <div className="  lg:col-5 overflow-hidden">
          <img
            alt="img"
            fill
            className="w-full h-full group-hover:scale-110 transition delay-150 duration-300 ease-in-out"
            src={src}
            width={420}
            sizes="100vw"
            height={300}
          />
        </div>
        <div className="lg:col-7 p-6 relative z-10">
          <div
            className={`${even
                ? "top-0 -left-5 rotate-[4deg] "
                : " top-0 -right-5 -rotate-[4deg]"
              } w-10 h-[110%] bg-gray-900 absolute -z-10`}
          ></div>
          <h5 className="text-2xl pb-2 text-yellow group-hover:text-yellow transition delay-150 duration-300 ease-in-out">
            {title}
          </h5>
          <div className=" text-sm mb-4">
            <time className=" pb-0.5 italic" dateTime="2020-05-25 12:00:00">
              {startYear}
            </time>
            <div className="border-b border-yellow w-10 group-hover:w-[100px] transition delay-300 duration-300 ease-in-out"></div>
          </div>
          <div className="" />
          <div className="mb-4  text-sm ">
            {description.map((item, index) => (
              <li
                className=" relative list-none before:w-1 before:h-1 before:bg-yellow before:absolute before:rounded-full pl-3 before:top-2 before:left-0 mb-1 last:mb-0"
                key={index}
              >
                {item}
              </li>
            ))}
          </div>
          <ul className="flex text-sm ">
            <li className=" mr-4">
              <a
                className=" mr-2 cursor-pointer flex items-center hover:text-yellow"
                target="_blank"
                href={href}
                rel="noreferrer"
              >
                <FaLocationArrow
                  size={10}
                  className="mr-2 lg:mr-4 text-yellow"
                />
                Website
              </a>
            </li>
            <li className=" mr-4">
              <a
                className=" cursor-pointer flex items-center hover:text-yellow"
                target="_blank"
                href={href}
                rel="noreferrer"
              >
                <FaGithub size={16} className="mr-2 text-yellow" /> Github
              </a>
            </li>
            <li>
              <button className="flex items-center hover:text-yellow">
                <AiOutlineEye size={18} className="mr-1  text-yellow" /> Read
                more
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
