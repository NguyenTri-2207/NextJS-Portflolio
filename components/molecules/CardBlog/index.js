import React from "react";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const formatDate = (date) => {
  const inputDate = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return inputDate.toLocaleDateString("en-US", options);
};

function CardBlog({ item }) {
  console.log(item.desc);
  return (
    <div className="col-12 md:col-6 lg:col-4 mb-5  ">
      <div className=" shadow-md  bg-white h-full border-gray-200 border rounded-lg  ">
        <Image
          className="rounded-t-lg w-full"
          src={item.image}
          width={300}
          height={200}
          alt={item.title}
        />

        <div className="p-5  ">
          <Link href={`/blog/${item.url}`}>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-2">
              {item.title}
            </h5>
          </Link>
          <p className="font-normal text-gray-700 mb-3 line-clamp-3 ">
            {item.desc}
          </p>

          <div className="flex flex-wrap justify-between">
            <div className="mt-6 inline-flex items-center rounded-md bg-blue-800 hover:bg-blue-500  px-2 py-0.5">
              <Link
                href={`/blog/${item.url}`}
                className="text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs p-2 text-center inline-flex items-center"
              >
                Read more
              </Link>
            </div>
            <div className="mt-6 inline-flex items-center">
              <FiCalendar size={18} />
              <span className="inline-block pl-2 text-sm">
                {formatDate(item?.updatedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
