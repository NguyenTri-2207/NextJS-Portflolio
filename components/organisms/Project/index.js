import { SiWebmoney } from "react-icons/si";
import { Nav, Tab } from "react-bootstrap";
import Image from "next/image";
import pro4 from "../../../public/pro41.PNG";
import pro1 from "../../../public/pro1.jpg";
import pro2 from "../../../public/pro2.webp";
import pro3 from "../../../public/pro3.jpg";
// const pro4 = require("../../../public/avt2.png");
const Card = ({ startYear, title, src, description }) => {
  return (
    <article className="postcard dark yellow ">
      <a className="postcard__img_link" href="">
        <Image className="postcard__img" src={src} alt="Image Title" />
      </a>
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
          <li className="tag__item">
            <i className="fas fa-tag mr-2" />
            Website
          </li>
          <li className="tag__item">
            <i className="fas fa-clock mr-2" />
            55 mins.
          </li>
          <li className="tag__item play yellow">
            <a href="#">
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
  // const dataExperience = data.experience;
  return (
    <div className="projects mb-5">
      <div className="container" id="resum">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title mb-4">My Projects</h2>
            <div className="tab">
              {/* {dataExperience.map((item, index) => { */}
              {/* return ( */}
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div>
                  <div className="mb-4">
                    <Nav variant="pills" className="nav">
                      <Nav.Item className="navItem">
                        <Nav.Link eventKey="first">Personal Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="navItem">
                        <Nav.Link eventKey="second">Company Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Card
                          src={pro3}
                          // src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
                          title="eCommerce Website"
                          description="Technology Used : ReactJS, Redux Toolkit, React Bootstrap"
                        />
                        <Card
                          title="Portfolio Website"
                          src={pro4}
                          description="Technology Used : NextJS, Atomic Design, React Bootstrap"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Card
                          src={pro2}
                          // src="https://cdn.vietnambiz.vn/thumb_w/685/2019/12/18/photo-1-1576662924387140450795-crop-1576663100041737725104.jpg"
                          title="BBCincorp"
                          description="Technology Used : NextJS, Atomic Design, React Bootstrap"
                        />
                        <Card
                          src={pro1}
                          // src="https://abcland.vn/wp-content/uploads/2020/05/tap-doan-novaland.jpg"
                          title="NovaGroup"
                          description="Technology Used : ReactJS, Redux Toolkit, React Bootstrap"
                        />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>

              {/* );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
