import Homepage from "components/templates/HomeTemplate";
import Layout from "components/templates/LayoutTemplate";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Nguyễn Ngọc Trí</title>
        <meta name="description" content="Home Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout socialLayoutLeft={true} footer={false}>
        <Homepage />
      </Layout>
    </>
  );
};
export default Home;
