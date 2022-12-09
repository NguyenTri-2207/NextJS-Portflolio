import { SiWebmoney } from "react-icons/si";
import Image from "next/image";
import { useState } from "react";
// const pro4 = require("../../../public/avt2.png");
const Card = ({ startYear, title, src, description, href }) => {
  return (
    <article className="postcard dark yellow ">
      <div className=" contents ">
        <div className="postcard__img w-full h-[300px] ">
          <Image
            alt="img"
            className="w-full h-full"
            src={src}
            width={420}
            height={300}
          />
        </div>
      </div>
      <div className="postcard__text">
        <h1 className="postcard__title yellow">
          <a href="#">{title}</a>
        </h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className="fas fa-calendar-alt mr-2" />
            {startYear}
          </time>
        </div>
        <div className="postcard__bar" />
        <div className="postcard__preview-txt">{description}</div>
        <ul className="postcard__tagbox">
          <li className="tag__item yellow">
            <a
              className="fas fa-tag mr-2 cursor-pointer  "
              target="_blank"
              href={href}
              rel="noreferrer"
            >
              Website
            </a>
          </li>
          <li className="tag__item">
            <i className="fas fa-clock mr-2" />
            55 mins.
          </li>
          <li className="tag__item play">
            <a>
              <i className="fas fa-play mr-2" />
              Front-End
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default function Experience({ data }) {
  const [tab, setTab] = useState(0);
  const handClickCompany = () => {
    setTab(0);
  };
  const handClickPersonal = () => {
    setTab(1);
  };

  return (
    <div className="projects mb-5">
      <div className="container" id="project">
        <div className="row">
          <div className="col-12">
            <h2>My Projects</h2>
            <div className="tab">
              <div>
                <div className="flex justify-center mb-10">
                  <div className="inline-block bg-white rounded-full">
                    <button
                      onClick={handClickCompany}
                      className={`${
                        tab === 0 && "bg-main"
                      } " py-3 px-6 rounded-full text-black font-medium`}
                    >
                      Company
                    </button>
                    <button
                      onClick={handClickPersonal}
                      className={`${
                        tab === 1 && "bg-main"
                      } " py-3 px-6 rounded-full text-black font-medium`}
                    >
                      Personal
                    </button>
                  </div>
                </div>

                <div>
                  {tab === 0 && (
                    <div eventKey="second">
                      <Card
                        src="/assets/bbc.jpg"
                        title="BBCincorp"
                        href="https://bbcincorp.com/hk"
                        description="Technology Used : NextJS, Atomic Design, React Bootstrap"
                      />
                      <Card
                        src="/assets/nova.jpg"
                        title="NovaGroup"
                        href="https://www.novagroup.vn/"
                        description="Technology Used : ReactJS, Redux Toolkit, React Bootstrap"
                      />
                      <Card
                        src="/assets/g.png"
                        title="Gleads"
                        href="https://gleads.vn/vi"
                        description="Technology Used : NextJS, Atomic Design, React Bootstrap"
                      />
                    </div>
                  )}
                  {tab === 1 && (
                    <div eventKey="first">
                      <Card
                        href="https://tringuyen.vercel.app/"
                        src="/assets/ecommerce-website-design.png"
                        title="eCommerce Website"
                        description="Technology Used : ReactJS, Redux Toolkit, React Bootstrap"
                      />
                      <Card
                        href="https://tringuyen.vercel.app/"
                        title="Portfolio Website"
                        src="/assets/a.jpg.webp"
                        description="Technology Used : NextJS, Atomic Design, React Bootstrap"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
