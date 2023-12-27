import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BiSolidChevronDown } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { FaAccusoft } from "react-icons/fa";
export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [tokenAndUser, setTokenAndUser] = useState("");
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      //   localStorage.setItem("login", JSON.stringify(true));
      setUser(JSON.parse(localStorage.getItem("tokenAndUser")));
    }
  }, []);
  return (
    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-6 relative">
      <button className="flex items-center gap-1 rounded-full  lg:ml-auto">
        <img
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-9 border border-blue-500 p-0.5 h-9 rounded-full cursor-pointer"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="User dropdown"
        />

        <BiSolidChevronDown
          size={2.5}
          className={`h-3 w-3 dark:text-white transition-transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isMenuOpen && (
        <div
          id="userDropdown"
          className="z-10 text-sm absolute right-0  top-10  block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          {user?.email && (
            <div className=" py-3 text-sm w-full text-gray-900 text-center dark:text-white">
              <div className="font-medium text-left truncate text-xs pl-3 pr-1 ">
                {user?.email}
              </div>
            </div>
          )}
          {user?.username && (
            <div className=" py-3 text-sm w-full text-gray-900 text-center dark:text-white">
              <div className="font-medium text-left truncate text-xs pl-3 pr-1 ">
                name: {user?.username}
              </div>
            </div>
          )}

          <div className="py-1">
            <button
              onClick={() => {
                localStorage.setItem("login", false);
                window.location.reload();
              }}
              className="block font-medium  text-left w-full px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
