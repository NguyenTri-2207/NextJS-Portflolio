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
    <section className="dark:bg-bgHome-dark bg-white pt-[72px]">
      <Banner data={dataStaticBlog?.banner} />
      <div className="container">
        <div className="max-w-md mb-10">
          <div className="relative flex items-center w-full h-12 rounded-lg shadow-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="flex justify-center items-center h-full w-10 text-gray-300">
              <IoMdSearch size={20} />
            </div>

            <input
              className=" h-full w-full  border-0 outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              onChange={(e) => handleSearch(e)}
              placeholder={dataStaticBlog.search}
            />
          </div>
        </div>
      </div>
      <div className=" container  ">
        <div className="row items-stretch">
          {filteredData?.map((content, index) => {
            return (
              <CardBlog key={index} item={content} read={dataStaticBlog.read} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
