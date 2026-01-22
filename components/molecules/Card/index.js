/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import Link from "components/molecules/Link";
import { useRouter } from "next/router";

const Card = ({ startYear, title, src, description, href, slug }) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <div className="lg:flex">
        <div className="lg:w-2/5 h-48 lg:h-auto overflow-hidden">
          {slug ? (
            <Link href={`/project/${slug}`}>
              <Image
                alt={title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={src}
                width={500}
                height={300}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Link>
          ) : (
            <Image
              alt={title}
              className="w-full h-full object-cover"
              src={src}
              width={500}
              height={300}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          )}
        </div>
        <div className="lg:w-3/5 p-6">
          <div className="mb-3">
            <time className="text-sm text-gray-500 dark:text-gray-400 italic">
              {startYear}
            </time>
          </div>
          {slug ? (
            <Link href={`/project/${slug}`}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-main dark:hover:text-main transition-colors cursor-pointer">
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {title}
            </h3>
          )}
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
          <div className="flex items-center gap-4">
            {slug && (
              <Link
                href={`/project/${slug}`}
                className="inline-flex items-center text-sm font-medium text-main hover:text-main/80 dark:text-main dark:hover:text-main/80 transition-colors"
              >
                Xem chi tiết
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            {href && href !== "/" && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors"
              >
                <FaLocationArrow size={12} className="mr-2" />
                Xem website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
