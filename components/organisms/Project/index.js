import { useState } from "react";
import SlideScroll from "./SlideScroll/index";
export default function Experience({ data }) {
  const [tab, setTab] = useState(0);

  const handClickProject = (index) => {
    setTab(index);
  };
  console.log(tab);
  return (
    <div className="container" id="project">
      <div className="row">
        <div className="col-12 relative">
          <div className="flex justify-center mb-10 mt-16 lg:mt-10">
            <div className="inline-block bg-white rounded-full">
              {data.project.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handClickProject(index)}
                    className={`${
                      tab === index && "bg-main"
                    } " py-3 px-6 rounded-full text-black font-medium`}
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
                : "opacity-0 translate-x-[1500px]"
            } transition-all duration-500 ease-in-out absolute`}
          >
            <SlideScroll data={data.project[0].company} />
          </div>
          <div
            className={`${
              tab === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[1500px]"
            } transition-all duration-500 ease-in-out absolute`}
          >
            <SlideScroll data={data.project[1].personal} />
          </div>

          {/* {tab === 1 && <SlideScroll data={data.project[1].personal} />} */}
        </div>
      </div>
    </div>
  );
}
