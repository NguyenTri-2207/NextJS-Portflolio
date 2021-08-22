import About from "components/organisms/About";
import Experience from "components/organisms/Experience";
import data from "./data.json"
export default function Home() {
  return (
    <div>
      <About/>
      <Experience data ={data} />
      
    </div>
  );
}