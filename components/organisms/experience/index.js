import { SiWebmoney } from "react-icons/si";
const Card = ({startYear,endYear,title,company, description}) => {
  return (
    <div className="timeline">
      <a href="#" className="timeline-content">
        <div className="timeline-icon">
          <SiWebmoney />
        </div>
        <div className="timeline-year"><p>{startYear}</p> <p>-</p> <p>{endYear}</p></div>
        
        <h3 className="title">{title}</h3>
        <p className="company">{company}</p>
        <p className="description">{description}</p>
      </a>
    </div>
    
  );
};
export default function Experience({ data }) {
  const dataExperience = data.experience
  return (
    <div className="experience">
      <div className="container" id="resum">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title">Experience</h2>
            <div className="main-timeline">
              {dataExperience.map((item, index) => {
                return <Card key={index} startYear={item.startYear} endYear={item.endYear} company={item.company} description={item.description} title={item.title}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
