import { useState } from "react";
import Card from "components/molecules/Card";
export default function Experience({ data }) {
  const [tab, setTab] = useState(0);

  const handClickProject = (index) => {
    setTab(index);
  };

  return (
    <div className="container" id="project">
      <div className="row">
        <div className="col-12">
          <h2>My Projects</h2>

          <div className="flex justify-center mb-10">
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

          {tab === 0 && (
            <div>
              {data.project[0].company.map((item, index) => {
                return (
                  <Card
                    even={index % 2 == 0}
                    key={index}
                    startYear={item.startYear}
                    src={item.src}
                    title={item.title}
                    href={item.href}
                    description={item.description}
                  />
                );
              })}
            </div>
          )}
          {tab === 1 && (
            <div>
              {data.project[1].personal.map((item, index) => {
                return (
                  <Card
                    even={index % 2 == 0}
                    key={index}
                    startYear={item.startYear}
                    src={item.src}
                    title={item.title}
                    href={item.href}
                    description={item.description}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
