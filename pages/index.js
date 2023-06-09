import Homepage from "components/templates/Home";
import Layout from "components/templates/Layout";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </>
  );
};
export default Home;
