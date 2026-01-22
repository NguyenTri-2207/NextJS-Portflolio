import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Layout from "components/organisms/LayoutTemplate";
import ProjectTemplate from "components/templates/project";
import { getStaticPaths, getI18nProps } from "lib/getStatic.js";

const Project = ({ data }) => {
  const { t } = useTranslation(["common", "project"]);
  const menu = t("common:menu", { returnObjects: true });
  const dataBanner = t("project:banner", { returnObjects: true });
  const projects = data?.projects || [];
  
  return (
    <>
      <Head>
        <title>{String(t("project:banner.title") || dataBanner?.title || "Projects")} - Nguyễn Ngọc Trí</title>
        <meta 
          name="description" 
          content={dataBanner?.described || "Explore my portfolio of web development and cloud infrastructure projects."} 
        />
        <meta name="keywords" content="projects, portfolio, web development, cloud infrastructure, AWS, Next.js" />
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <ProjectTemplate data={projects} dataBanner={dataBanner} />
      </Layout>
    </>
  );
};

export default Project;

export { getStaticPaths };

export const getStaticProps = async (ctx) => {
  const locale = ctx.params?.locale || "en";
  
  try {
    // Import static data based on locale
    const projectsData = locale === "vi" 
      ? require("./projects-vi.json")
      : require("./projects-en.json");

    // Validate data structure
    if (!projectsData?.projects || !Array.isArray(projectsData.projects)) {
      throw new Error("Invalid projects data structure");
    }

    return {
      props: {
        ...(await getI18nProps(ctx, ["common", "project"])),
        data: projectsData,
      },
    };
  } catch (error) {
    console.error("Error loading project data:", error);
    return {
      props: {
        ...(await getI18nProps(ctx, ["common", "project"])),
        data: { projects: [] },
      },
    };
  }
};
