import React from "react";
import Image from "next/image";
import LinkComponent from "components/molecules/Link";
import { FaUser, FaFolder } from "react-icons/fa";

const Banner = ({ data: { greeting, name, position, description, buttons } }) => {
  return (
    <div className="container">
      <div className="row items-center justify-center">
        <div className="lg:col-6 lg:pr-12 mt-12 lg:mt-0 mb-10 lg:mb-0">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wider">
            {greeting}
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {name}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
            {position}
          </p>
          {description && (
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mb-8">
              {description}
            </p>
          )}
          {buttons && (
            <div className="flex flex-wrap gap-3 mt-8">
              {buttons.map((button, index) => {
                const iconMap = {
                  about: <FaUser size={14} />,
                  project: <FaFolder size={14} />,
                };
                const iconKey = button.href?.replace("/", "") || button.icon;
                const icon = iconMap[iconKey] || null;
                
                return (
                  <LinkComponent
                    key={index}
                    href={button.href}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:border-main dark:hover:border-main transition-colors"
                  >
                    {icon && (
                      <span className="mr-2 text-main">{icon}</span>
                    )}
                    {button.label}
                  </LinkComponent>
                );
              })}
            </div>
          )}
        </div>
        <div className="lg:col-6 text-center">
          <Image
            src="/assets/banner/avatar.png"
            className="rounded-full mx-auto"
            width={350}
            height={350}
            alt="avatar"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
