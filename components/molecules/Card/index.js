import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import Link from "components/molecules/Link";
import { useTranslation } from "next-i18next";

const Card = ({ startYear, title, src, description, href, slug }) => {
  const { t } = useTranslation(["project"]);
  const detailTexts = t("project:detail", { returnObjects: true });
  
  if (!title || !description || !Array.isArray(description)) {
    return null;
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <div className="lg:flex">
        <div className="lg:w-2/5 h-48 lg:h-auto overflow-hidden">
          {slug ? (
            <Link href={`/project/${slug}`}>
              <Image
                alt={title || "Project image"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={src}
                width={500}
                height={300}
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </Link>
          ) : (
            <Image
              alt={title || "Project image"}
              className="w-full h-full object-cover"
              src={src}
              width={500}
              height={300}
              sizes="(max-width: 1024px) 100vw, 40vw"
              loading="lazy"
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
          <div className="flex items-center gap-4 flex-wrap">
            {slug && (
              <Link
                href={`/project/${slug}`}
                className="inline-flex items-center text-sm font-medium text-main hover:text-main/80 dark:text-main dark:hover:text-main/80 transition-colors"
                aria-label={`${detailTexts?.viewDetails || "View Details"}: ${title}`}
              >
                {detailTexts?.viewDetails || "View Details"}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            {href && href !== "/" && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors"
                aria-label={`${detailTexts?.viewWebsite || "View Website"}: ${title}`}
              >
                <FaLocationArrow size={12} className="mr-2" aria-hidden="true" />
                {detailTexts?.viewWebsite || "View Website"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
