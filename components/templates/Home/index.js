import About from "components/organisms/About";
import Experience from "components/organisms/experience";
import Skill from "components/organisms/Skill";
import Project from "components/organisms/Project";
import data from "./data.json";
const Home = () => {
  return (
    <div>
      <About />
      <Experience data={data} />
      <Skill />
      <Project />
    </div>
  );
};
export default Home;
