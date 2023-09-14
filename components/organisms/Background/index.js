import React, { Children } from "react";
import Image from "next/image";
function background({ children }) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen relative">
      <Image
        src="/background.jpg"
        className="w-full h-full absolute left-0 top-0 z-0"
        alt="background"
        width={640}
        height={320}
      />
      {children}
    </section>
  );
}

export default background;
