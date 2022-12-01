import About from "components/organisms/About";
import Experience from "components/organisms/experience";
import Skill from "components/organisms/Skill";
import Project from "components/organisms/Project";
import data from "./data.json";
const Home = () => {
  return (
    <div>
      <section className="bg-[#272b44] py-10 lg:py-20 relative ">
        <About />
      </section>
      <section className="bg-[#1f2336] py-10 lg:py-20 relative">
        <Experience data={data} />
      </section>

      <section className="bg-[#272b44] py-10 lg:py-20 relative">
        <Skill />
      </section>
      <section className="bg-[#1f2336] py-10 lg:py-20 relative">
        <Project />
      </section>
    </div>
  );
};
export default Home;
