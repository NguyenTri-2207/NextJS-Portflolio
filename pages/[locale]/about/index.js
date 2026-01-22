import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { getI18nProps, getStaticPaths } from "lib/getStatic.js";

import Layout from "components/organisms/LayoutTemplate";
import AboutTempalte from "components/templates/about";
const Homepage = () => {
  const { t } = useTranslation(["common", "about", "skill"]);
  const dataInfo = t("about:info", { returnObjects: true });
  const dataExperience = t("about:experience", { returnObjects: true });
  const dataSocial = t("about:dataSocial", { returnObjects: true });
  const dataSkill = t("skill:dataSkills", { returnObjects: true });
  const dataBanner = t("about:banner", { returnObjects: true });
  const menu = t("common:menu", { returnObjects: true });

  const canonicalUrl = "https://tringuyen.vercel.app/about";
  
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <title>About-Nguyễn Ngọc Trí</title>
        <meta name="description" content="About Page Nguyễn Ngọc Trí"></meta>
      </Head>

      <Layout dataMenu={menu} socialLayoutLeft>
        <AboutTempalte
          dataInfo={dataInfo}
          dataExperience={dataExperience}
          dataSocial={dataSocial}
          dataSkill={dataSkill}
          dataBanner={dataBanner}
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
  return {
    props: {
      ...(await getI18nProps(ctx, ["common", "about", "skill"])),
    },
  };
};
