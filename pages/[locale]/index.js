import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "lib/getStatic";
import HomepageTempalte from "components/templates/home";
import Head from "node_modules/next/head";
import Layout from "components/organisms/LayoutTemplate";

const Homepage = () => {
  const { t } = useTranslation(["common", "home"]);
  const home = t("home:banner", { returnObjects: true });
  const menu = t("common:menu", { returnObjects: true });
  return (
    <>
      <Head>
        <title>Nguyễn Ngọc Trí</title>
        <meta name="description" content="Page Nguyễn Ngọc Trí"></meta>
      </Head>

      <Layout dataMenu={menu} socialLayoutLeft>
        <HomepageTempalte data={home} />
      </Layout>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "home"]);
export { getStaticPaths, getStaticProps };
