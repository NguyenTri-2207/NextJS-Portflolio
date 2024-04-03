import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { getI18nProps, getStaticPaths } from "lib/getStatic.js";

import Layout from "components/organisms/LayoutTemplate";
import AboutTempalte from "components/templates/about";
const Homepage = () => {
  const { t } = useTranslation(["common", "about"]);
  const dataInfo = t("about:info", { returnObjects: true });
  const dataExperience = t("about:experience", { returnObjects: true });
  const dataSocial = t("about:dataSocial", { returnObjects: true });
  const menu = t("common:menu", { returnObjects: true });

  return (
    <>
      <Head>
        <title>About-Nguyễn Ngọc Trí</title>
        <meta name="description" content="About Page Nguyễn Ngọc Trí"></meta>
      </Head>

      <Layout dataMenu={menu} socialLayoutLeft>
        <AboutTempalte
          dataExperience={dataExperience}
          dataInfo={dataInfo}
          dataSocial={dataSocial}
        />
      </Layout>
    </>
  );
};

export default Homepage;

// const getStaticProps = makeStaticProps(["common", "about"]);
// export { getStaticPaths, getStaticProps };
export { getStaticPaths };
export const getStaticProps = async (ctx) => {
  // some data fetched from anywhere...
  const someOtherData = "hello world";
  return {
    props: {
      ...(await getI18nProps(ctx, ["common", "about"])),
      someOtherData,
    },
  };
};
