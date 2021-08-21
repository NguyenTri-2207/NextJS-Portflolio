import Experience from "components/organisms/experience";
import data from "./data.json"
export default function Home() {
  return (
    <div>
      <Experience data ={data} />
    </div>
  );
}