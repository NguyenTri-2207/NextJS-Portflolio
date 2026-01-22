import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "components/molecules/Link";
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ data }) => {
  return (
    <div className="flex mb-6 lg:mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex flex-wrap items-center gap-2 ">
        <li className="flex items-center">
          <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors">
            <IoHome size={18} />
          </Link>
        </li>
        {data.map((item, index) => {
          return (
            <li key={index} className="flex items-center">
              {item.url ? (
                <Link
                  className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ) : (
                <span className="inline-flex items-center text-xs font-medium text-gray-900 dark:text-white">
                  {item.title}
                </span>
              )}

              {index < data.length - 1 && (
                <FaChevronRight className="ml-2 text-gray-400" size={12} />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const Banner = ({ data }) => {
  return (
    <div className="section-template pt-4 lg:pt-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb data={data.breadcrumb} />
            <h1 className="mb-4 lg:mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              {data.title ? data.title : ""}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg">{data.described}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

