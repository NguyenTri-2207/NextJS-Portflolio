import { useState } from "react";
import SlideScroll from "./SlideScroll/index";
export default function Experience({ data }) {
  const [tab, setTab] = useState(0);

  const handClickProject = (index) => {
    setTab(index);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 h-screen relative overflow-hidden">
          <div className="flex justify-center mb-10 mt-16 lg:mt-10">
            <div className="inline-block bg-white rounded-full relative">
              <div
                className={`${
                  tab === 0 ? " left-0" : " left-1/2"
                } absolute bg-main transition-all duration-200 ease-in-out top-0 z-10 w-1/2 h-full rounded-full`}
              ></div>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handClickProject(index)}
                    className={` py-3 px-6 rounded-full text-black font-medium transition-all duration-500 relative z-30`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`${
              tab === 0
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-96 pointer-events-none"
            } transition-transform duration-500 ease-in-out absolute top-32 w-[92%]  sm:w-full`}
          >
            <SlideScroll data={data[0].company} />
          </div>
          <div
            className={`${
              tab === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-96 pointer-events-none"
            } transition-transform duration-500 ease-in-out top-32 absolute w-[92%]  sm:w-full`}
          >
            <SlideScroll data={data[1].personal} />
          </div>
        </div>
      </div>
    </div>
  );
}
