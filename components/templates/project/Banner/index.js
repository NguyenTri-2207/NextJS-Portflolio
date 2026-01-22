import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "components/molecules/Link";
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  const lastItem = data[data.length - 1];
  const middleItems = data.slice(0, -1);

  return (
    <nav className="flex mb-6 lg:mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-3 overflow-hidden">
        <li className="flex items-center flex-shrink-0">
          <Link 
            href="/" 
            className="text-gray-600 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors"
            aria-label="Home"
          >
            <IoHome size={18} aria-hidden="true" />
          </Link>
        </li>
        
        {/* Mobile: Show ellipsis */}
        {middleItems.length > 0 && (
          <>
            <li className="hidden md:flex items-center">
              <FaChevronRight className="ml-2 text-gray-400" size={12} aria-hidden="true" />
            </li>
            <li className="md:hidden flex items-center">
              <span className="ml-2 text-gray-400 text-sm">...</span>
            </li>
          </>
        )}

        {/* Desktop: Show all middle items */}
        {middleItems.map((item, index) => {
          if (!item?.title) return null;
          
          return (
            <li key={`${item.title}-${index}`} className="hidden md:flex items-center">
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

              {index < middleItems.length - 1 && (
                <FaChevronRight className="ml-2 text-gray-400" size={12} aria-hidden="true" />
              )}
            </li>
          );
        })}

        {/* Last item (current page) - always visible */}
        {lastItem && (
          <li className="flex items-center flex-shrink-0 min-w-0">
            {middleItems.length > 0 && (
              <FaChevronRight className="hidden md:block ml-2 text-gray-400" size={12} aria-hidden="true" />
            )}
            <span className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white truncate">
              {lastItem.title}
            </span>
          </li>
        )}
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
            {data.title && (
              <h1 className="mb-4 lg:mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                {data.title}
              </h1>
            )}
            {data.described && (
              <p className="text-gray-700 dark:text-gray-300 text-lg">{data.described}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

