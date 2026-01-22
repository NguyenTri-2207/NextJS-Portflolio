import CardBlog from "components/molecules/CardBlog";
import React, { useState } from "react";
import Banner from "components/templates/blog/Banner";
import { IoMdSearch } from "react-icons/io";

function Blog({ data, dataStaticBlog }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      <Banner data={dataStaticBlog?.banner} />
      <section className="section-template">
        <div className="container">
          <div className="max-w-md mb-8 lg:mb-12">
            <div className="relative flex items-center w-full h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus-within:border-main dark:focus-within:border-main transition-colors overflow-hidden">
              <div className="flex justify-center items-center h-full w-12 text-gray-400 dark:text-gray-500">
                <IoMdSearch size={20} />
              </div>

              <input
                className="h-full w-full border-0 outline-none text-sm text-gray-700 dark:text-gray-300 bg-transparent pr-4 placeholder-gray-400 dark:placeholder-gray-500"
                type="text"
                id="search"
                onChange={(e) => handleSearch(e)}
                placeholder={dataStaticBlog.search}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row items-stretch">
            {filteredData?.map((content, index) => {
              return (
                <CardBlog key={index} item={content} read={dataStaticBlog.read} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
