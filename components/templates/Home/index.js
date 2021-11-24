import About from "components/organisms/About";
import Experience from "components/organisms/Experience";
import Skill from "components/organisms/Skill/index";
import Project from "components/organisms/Project";
import data from "./data.json"
export default function Home() {
  return (
    <div>
      <About/>
      <Experience data ={data} />
      <Skill/>
      <Project/>
      
    </div>
  );
}