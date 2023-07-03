import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { dataMenu } from "common/data";
export default function Header({ socialLayoutLeft }) {
  console.log(dataMenu);

  const router = useRouter();
  const routerAsPath = () => {
    let result;
    if (router.asPath.length > 2 && router.asPath.endsWith("/")) {
      result = router.asPath.slice(0, -1);
    } else {
      result = router.asPath;
    }
    return result;
  };
  return (
    <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <ul className="flex">
          {dataMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href}>
                  <a
                    className={`${
                      routerAsPath() === item.href
                        ? "ml-2 mr-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center text-xs font-medium transition-all duration-300"
                        : "text-white "
                    } 
                    ml-2 mr-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center text-xs font-medium transition-all duration-300 bg-gradient-main
                     `}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
