import Banner from "components/organisms/Banner";
const Home = ({ data }) => {
  return (
    <section className="section-tempale pb-10 md:h-screen overflow-hidden">
      <Banner data={data} />
    </section>
  );
};
export default Home;
