import React from "react";
import Image from "next/image";
import { FiCalendar, FiUser } from "react-icons/fi";
import { FaRegClock, FaRegComments } from "react-icons/fa";
import Link from "next/link";
const Breadcrumb = () => {
  return (
    <nav className="flex mb-6 lg:mb-20" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-white">
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <p className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-200 dark:hover:text-white">
              Blog
            </p>
          </div>
        </li>
      </ol>
    </nav>
  );
};
function Banner({ title, described }) {
  return (
    <div className="py-[72px]  bg-background-banner-image dark:bg-bgHome-dark mb-10 lg:mb-20 dark:text-gray-100 shadow border-b-1 border-[#5d616d]">
      <div className="container">
        <div className="md:row pt-10 justify-between">
          <div className="md:col-8">
            <Breadcrumb />
            <h1 className="mb-4 lg:mb-6 text-3xl font-semibold leading-none tracking-tight text-[#1d3169] md:text-4xl lg:text-5xl dark:text-gray-200">
              {title}
            </h1>
            <p>{described}</p>
            <div className="mt-10 text-xs">
              <div className={"mr-6 hidden items-center lg:inline-flex"}>
                <FiUser size={20} className="mr-2 p-0.5" />
                <i className="font-medium">Tri Nguyen</i>
              </div>
              <div className={"mr-6 hidden items-center lg:inline-flex"}>
                <FaRegClock size={20} className="mr-2 p-0.5" />{" "}
                <i className="font-medium">6 minutes read</i>
              </div>
              <div className={"inline-flex items-center lg:mr-6"}>
                <FiCalendar size={20} className="mr-2 p-0.5" />
                <i className="font-medium">22/07/2023</i>
              </div>
            </div>
          </div>
          <div className="md:col-4">
            <Image
              className="w-full h-full"
              src="/assets/banner-blog-1.png"
              alt="bg"
              width={640}
              height={640}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
