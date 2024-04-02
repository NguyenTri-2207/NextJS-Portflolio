import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import HomepageTempalte from "components/templates/home";
import Header from "components/organisms/LayoutTemplate/Header";
import Head from "node_modules/next/head";
import { useDispatch } from "react-redux";
import { getdata } from "lib/slice/dataMenu";

const Homepage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common", "home"]);
  const home = t("home:banner", { returnObjects: true });
  const menu = t("common:menu", { returnObjects: true });
  dispatch(getdata(menu));
  console.log(menu);
  return (
    <>
      <Head>
        <title>Nguyễn Ngọc Trí</title>
        <meta name="description" content="Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <main className=" mt-17">
        <Header />

        <HomepageTempalte data={home} />
      </main>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "home"]);
export { getStaticPaths, getStaticProps };
