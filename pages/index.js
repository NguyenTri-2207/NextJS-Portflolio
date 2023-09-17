import Homepage from "components/templates/home";
import Layout from "components/templates/layout";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Nguyễn Ngọc Trí</title>
      </Head>
      <Layout socialLayoutLeft={true} footer={false}>
        <Homepage />
      </Layout>
    </>
  );
};
export default Home;
