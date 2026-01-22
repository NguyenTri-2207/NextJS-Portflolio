/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const Card = ({ startYear, title, src, description, href }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="lg:flex">
        <div className="lg:w-2/5 h-48 lg:h-auto overflow-hidden">
          <Image
            alt={title}
            className="w-full h-full object-cover"
            src={src}
            width={500}
            height={300}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
        <div className="lg:w-3/5 p-6">
          <div className="mb-3">
            <time className="text-sm text-gray-500 dark:text-gray-400 italic">
              {startYear}
            </time>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          <div className="mb-4 space-y-2">
            {description.map((item, index) => (
              <p
                key={index}
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {item}
              </p>
            ))}
          </div>
          {href && href !== "/" && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FaLocationArrow size={12} className="mr-2" />
              Xem website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
