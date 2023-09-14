import React from "react";

function Title({ className, children }) {
  return (
    <h2
      className={`${
        className
          ? className
          : "text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-6"
      } `}
    >
      {children}
    </h2>
  );
}

export default Title;
