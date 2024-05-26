import Banner from "components/organisms/Banner";
import Image from "next/image";
const Home = ({ data }) => {
  return (
    <section className="section-tempale min-h-screen flex items-center justify-center relative">
      <Banner data={data} />
      <Image
        className="w-40 absolute top-14 lg:top-0 right-0 dark:opacity-100 opacity-0 lg:w-auto h-auto"
        src="/assets/banner/curve-icon.png"
        width={498}
        height={182}
        alt="curve-icon"
      />
    </section>
  );
};
export default Home;
