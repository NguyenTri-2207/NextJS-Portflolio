import Banner from "components/organisms/Banner";
import Image from "next/image";
const Home = ({ data }) => {
  return (
    <section className="section-tempale min-h-screen flex items-center justify-center">
      <Banner data={data} />

      <div className="absolute top-0 lg:right-0 right-1 z-00 dark:opacity-100 opacity-0">
        <Image
          src="/assets/banner/bg-t.png"
          width={498}
          height={182}
          alt="background icon top bottom banner absolute"
        />
      </div>
      <div className="absolute bottom-2  right-6 rotate-[268deg] hidden lg:block dark:opacity-100 opacity-0">
        <Image
          src="/assets/banner/bg-lb.png"
          width={320}
          height={320}
          alt="bg"
        />
      </div>
    </section>
  );
};
export default Home;
