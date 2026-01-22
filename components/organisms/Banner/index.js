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
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {buttons.map((button, index) => {
                const iconMap = {
                  about: <FaUser size={12} />,
                  project: <FaFolder size={12} />,
                };
                const iconKey = button.href?.replace("/", "") || button.icon;
                const icon = iconMap[iconKey] || null;
                
                return (
                  <LinkComponent
                    key={index}
                    href={button.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 shadow-sm backdrop-blur dark:bg-white/10 transition-all hover:bg-white/90 dark:hover:bg-white/20 hover:shadow-md hover:scale-105"
                  >
                    {icon && (
                      <span className="text-main">{icon}</span>
                    )}
                    {button.label}
                  </LinkComponent>
                );
              })}
            </div>
          )}
        </div>
        <div className="lg:col-6 text-center">
          <picture>
            {/* WebP format for modern browsers - better compression (~70% smaller than PNG) */}
            <source
              srcSet="/assets/banner/avatar-175w.webp 175w, /assets/banner/avatar-350w.webp 350w, /assets/banner/avatar-700w.webp 700w"
              sizes="(max-width: 640px) 175px, 350px"
              type="image/webp"
            />
            {/* Fallback PNG for older browsers */}
            <source
              srcSet="/assets/banner/avatar-175w.png 175w, /assets/banner/avatar-optimized.png 350w, /assets/banner/avatar-700w.png 700w"
              sizes="(max-width: 640px) 175px, 350px"
              type="image/png"
            />
            <img
              src="/assets/banner/avatar-optimized.png"
              srcSet="/assets/banner/avatar-175w.png 175w, /assets/banner/avatar-optimized.png 350w, /assets/banner/avatar-700w.png 700w"
              sizes="(max-width: 640px) 175px, 350px"
              className="rounded-full mx-auto"
              width={350}
              height={350}
              alt="avatar"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Banner;
