import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";

const Card = ({ startYear, title, src, description, href }) => {
  return (
    <div className="mb-10">
      <div className=" group bg-gray-900 text-white shadow-md md:flex  rounded-md  overflow-hidden relative">
        <div className="  md:col-5">
          <Image
            alt="img"
            fill
            className="w-full h-full group-hover:scale-110 transition delay-150 duration-300 ease-in-out"
            src={src}
            width={420}
            sizes="100vw"
            height={300}
          />
        </div>
        <div className="md:col-7 p-6 ">
          <h5 className="text-2xl pb-2 group-hover:text-yellow transition delay-150 duration-300 ease-in-out">
            {title}
          </h5>
          <div className=" text-sm mb-4">
            <time
              className=" border-b border-yellow pb-0.5 italic"
              dateTime="2020-05-25 12:00:00"
            >
              {startYear}
            </time>
          </div>
          <div className="" />
          <div className="mb-4  text-sm lg:text-base">{description}</div>
          <ul className="flex text-sm lg:text-base">
            <li className="">
              <a
                className=" mr-2 cursor-pointer   "
                target="_blank"
                href={href}
                rel="noreferrer"
              >
                Website
              </a>
            </li>
            <li className="">{startYear}</li>
            <li className="">
              <a>Front-End</a>
            </li>
            <button>
              <AiOutlineEye size={20} />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
