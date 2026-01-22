import Banner from "components/organisms/Banner";

const Home = ({ data }) => {
  return (
    <section className="section-tempale min-h-screen flex items-center justify-center py-20">
      <Banner data={data} />
    </section>
  );
};

export default Home;
