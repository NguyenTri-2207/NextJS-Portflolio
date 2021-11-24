import { SiWebmoney } from "react-icons/si";
const Card = ({ startYear, title, company, description }) => {
  return (
    <article className="postcard dark yellow">
      <a className="postcard__img_link" href="#">
        <img
          className="postcard__img"
          src="https://picsum.photos/501/501"
          alt="Image Title"
        />
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
        <div className="postcard__preview-txt">
         {description}
        </div>
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
              Play Episode
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
    <div className="experience">
      <div className="container" id="resum">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title">Experience</h2>
            <div className="main-timeline">
              {/* {dataExperience.map((item, index) => { */}
                {/* return ( */}
                  <Card
                  />
                  <Card
                  />
                {/* );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
