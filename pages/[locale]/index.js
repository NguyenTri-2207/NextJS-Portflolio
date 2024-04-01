import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import HomepageTempalte from "components/templates/home";

// import { Header } from 'components/molecules/Header'
import Header from "components/organisms/LayoutTemplate/Header";

const Homepage = () => {
  const { t } = useTranslation(["common", "home", "footer"]);
  const menu = t("menu", { returnObjects: true });
  const home = t("banner", { returnObjects: true });
  console.log(home);
  return (
    <>
      <main className=" mt-17">
        <Header dataMenu={menu} />

        <HomepageTempalte />
      </main>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "home", "footer"]);
export { getStaticPaths, getStaticProps };
