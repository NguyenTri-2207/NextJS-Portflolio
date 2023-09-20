import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BiSolidChevronDown } from 'react-icons/bi'
import { BsCheckLg } from 'react-icons/bs';
import { FaAccusoft } from 'react-icons/fa';
export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [tokenAndUser, setTokenAndUser] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {

            // localStorage.setItem("login", tokenAndUser);
        }
    }, []);
    return (
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} placement="bottom-end" className='ml-4'>


            <button className="flex items-center gap-1 rounded-full  lg:ml-auto"
            >
                <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-8 border border-blue-500 p-0.5 h-8 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="User dropdown" />

                <BiSolidChevronDown
                    size={2.5}
                    className={`h-3 w-3 dark:text-white transition-transform ${isMenuOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            {isMenuOpen && <div id="userDropdown" className="z-10 text-sm absolute right-2 lg:right-10 top-20  block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">

                    <div className="font-medium truncate text-xs ">name@flowbite.com</div>
                </div>

                <div className="py-1">
                    <button
                        onClick={() => { localStorage.setItem("login", false); window.location.reload() }} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                </div>
            </div>}


        </div >
    );
}