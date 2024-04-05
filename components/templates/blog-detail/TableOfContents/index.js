import React, { useEffect, useState } from "react";

function TableOfContents({ data }) {
  const [scrollbarHeight, setScrollbarHeight] = useState(false);
  const [dataTableOfContents, setDataTableOfContents] = useState([]);

  useEffect(() => {
    let h2Ids = [];
    // Lấy tất cả các phần tử div có class là "mb-6"
    let divs = document.querySelectorAll("div.content");
    // Lặp qua mỗi phần tử div
    divs.forEach((div) => {
      // Lấy tất cả các thẻ h2 bên trong div hiện tại
      let h2Elements = div.querySelectorAll("h2");

      // Lặp qua mỗi thẻ h2
      h2Elements.forEach((h2) => {
        // Lấy ID của thẻ h2 và thêm vào mảng h2Ids
        h2Ids.push(h2.textContent.trim());
      });
      setDataTableOfContents(h2Ids);
    });
  }, [data]);

  // In ra mảng chứa tất cả các ID của thẻ h2

  useEffect(() => {
    window.onscroll = function () {
      const scrollHight = document.documentElement.scrollTop;
      if (scrollHight > 300) {
        setScrollbarHeight(true);
      } else {
        setScrollbarHeight(false);
      }
    };
  }, []);
  const ScrollToTitles = (e, id) => {
    const scrollToTable = document.getElementById(id);
    window.scrollTo({
      top: scrollToTable.getBoundingClientRect().top + window.pageYOffset - 100,
      behavior: "smooth",
    });
    e.preventDefault();
  };
  return (
    <div className="lg:col-4 px-4 hidden lg:block ">
      <div className=" top-[120px]  mb-10 lg:sticky lg:mb-0 ">
        <div
          id="tableOfContents"
          className={`  group rounded-xl  top-20  px-4 cursor-pointer dark:bg-transparent bg-white lg:py-2 shadow-xl `}
        >
          <div className="flex items-center justify-between group-hover:text-blue-500">
            <h3 className="font-medium py-2  ">Table Of Contents</h3>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="float-right hidden align-middle lg:inline-block "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          </div>
          <div
            id="post"
            className={`${
              scrollbarHeight ? "h-0" : "h-full "
            } mt-2 group-hover:h-full hidden overflow-y-auto scroll-smooth pr-8 lg:block transition-all duration-300 ease-in-out overflow-hidden`}
          >
            {dataTableOfContents.map((item, index) => {
              const slug = item
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");

              return (
                <div key={index} className="mb-2 hover:text-blue-500 ">
                  <a href={`#${slug}`} onClick={(e) => ScrollToTitles(e, slug)}>
                    {item}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableOfContents;
