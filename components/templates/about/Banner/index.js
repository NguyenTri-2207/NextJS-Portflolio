import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "components/molecules/Link";
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <nav className="flex mb-6 lg:mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-3">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="text-gray-600 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors"
            aria-label="Home"
          >
            <IoHome size={18} aria-hidden="true" />
          </Link>
        </li>
        {data.map((item, index) => {
          if (!item?.title) return null;
          
          return (
            <li key={`${item.title}-${index}`} className="flex items-center">
              {item.url ? (
                <Link
                  className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ) : (
                <span className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  {item.title}
                </span>
              )}

              {index < data.length - 1 && (
                <FaChevronRight className="ml-2 text-gray-400" size={12} aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

const Banner = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="section-template pt-4 lg:pt-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {data.breadcrumb && <Breadcrumb data={data.breadcrumb} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

