import About from "../../organisms/About";
// import Experience from "../../organisms/Experience";
import Skill from "../../organisms/Skill/index";
import Project from "../../organisms/Project";
// import data from "./data.json";
export default function Home() {
  return (
    <div>
      <About />
      {/* <Experience data={data} /> */}
      <Skill />
      <Project />
    </div>
  );
}
