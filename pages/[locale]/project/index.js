import React from "react";
import { useTranslation } from "next-i18next";

import Layout from "components/organisms/LayoutTemplate";
import ProjectTemplate from "components/templates/project";
import { getStaticPaths, getI18nProps } from "lib/getStatic.js";

import Head from "next/head";

const Project = ({ data }) => {
  const { t } = useTranslation(["common", "project"]);

  const menu = t("common:menu", { returnObjects: true });
  const dataBanner = t("project:banner", { returnObjects: true });
  
  return (
    <>
      <Head>
        <title>Project-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Project Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <ProjectTemplate data={data.projects} dataBanner={dataBanner} />
      </Layout>
    </>
  );
};

export default Project;

export { getStaticPaths };
export const getStaticProps = async (ctx) => {
  const locale = ctx.params.locale;
  
  // Import static data based on locale
  const projectsData = locale === 'vi' 
    ? require('./projects-vi.json')
    : require('./projects-en.json');

  return {
    props: {
      ...(await getI18nProps(ctx, ["common", "project"])),
      data: projectsData,
    },
  };
};
