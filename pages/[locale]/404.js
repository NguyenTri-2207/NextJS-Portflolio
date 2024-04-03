import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "lib/getStatic";

import Link from "components/molecules/Link";
import Layout from "components/organisms/LayoutTemplate";

const Homepage = () => {
  const { t } = useTranslation(["common"]);
  const menu = t("common:menu", { returnObjects: true });
  return (
    <>
      <main>
        <Layout dataMenu={menu} socialLayoutLeft>
          <div>
            <Link href="/">
              <button type="button">a</button>
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
