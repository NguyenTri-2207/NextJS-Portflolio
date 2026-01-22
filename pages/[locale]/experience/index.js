import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { getI18nProps, getStaticPaths } from "lib/getStatic.js";

import Layout from "components/organisms/LayoutTemplate";
import ExperienceTemplate from "components/templates/experience";

const ExperiencePage = () => {
  const { t } = useTranslation(["common", "about"]);
  const dataExperience = t("about:experience", { returnObjects: true });
  const menu = t("common:menu", { returnObjects: true });

  return (
    <>
      <Head>
        <title>Experience - Nguyễn Ngọc Trí</title>
        <meta name="description" content="Experience Page Nguyễn Ngọc Trí"></meta>
      </Head>

      <Layout dataMenu={menu} socialLayoutLeft>
        <ExperienceTemplate dataExperience={dataExperience} />
      </Layout>
    </>
  );
};

export default ExperiencePage;

export { getStaticPaths };
export const getStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ["common", "about"])),
    },
  };
};

