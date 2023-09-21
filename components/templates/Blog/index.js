import CardBlog from "components/molecules/CardBlog";
import React, { useContext, useEffect, useState } from "react";
import { ThemContext } from "common/context";
import Banner from "components/templates/Blog/Banner";

function Blog({ data }) {
  const { theme } = useContext(ThemContext);
  return (
    <section className="dark:bg-bgHome-dark bg-white pt-[72px]">
      <Banner
        title="From Concept to Code: My Web Development Odyssey"
        described="Join me on a journey into the world of web development as I share insights, tips, and techniques for creating engaging and efficient websites."
      />
      <div className="container">
        {" "}
        <div className="max-w-md mb-10">
          <div className="relative flex items-center w-full h-12 rounded-lg shadow-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full shadow border-0 outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Enter your keyword"
            />
          </div>
        </div>
      </div>
      <div className=" container  ">
        <div className="row items-stretch">
          {data
            .filter((item) => item.title.length > 70)
            .map((content, index) => {
              return <CardBlog key={index} item={content} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
