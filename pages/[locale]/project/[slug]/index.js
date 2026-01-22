import Layout from "components/organisms/LayoutTemplate";
import React from "react";
import { getI18nProps } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import Link from "components/molecules/Link";
import { FaLocationArrow } from "react-icons/fa";
import Banner from "components/templates/project/Banner";

const ProjectDetail = ({ dataProject, dataAllProjects }) => {
  const { t } = useTranslation(["common", "project"]);
  const menu = t("common:menu", { returnObjects: true });
  const detailTexts = t("project:detail", { returnObjects: true });

  if (!dataProject) {
    return (
      <Layout dataMenu={menu} socialLayoutLeft>
        <div className="section-template">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center py-20">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {detailTexts?.notFound || "Project not found"}
                </h1>
                <Link href="/project" className="text-main hover:text-main/80 transition-colors">
                  {detailTexts?.backToProjects || "Back to Projects"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const menuItems = t("common:menu", { returnObjects: true });
  const homeMenu = menuItems.find(m => m.href === "/");
  const projectMenu = menuItems.find(m => m.href === "/project");
  
  const dataBanner = {
    breadcrumb: [
      { title: homeMenu?.name || "Home", url: "/" },
      { title: projectMenu?.name || "Project", url: "/project" },
      { title: dataProject.title }
    ],
    title: dataProject.title,
    described: Array.isArray(dataProject.description) 
      ? dataProject.description.join(" ") 
      : dataProject.description || ""
  };

  const description = Array.isArray(dataProject.description) 
    ? dataProject.description.join(" ") 
    : dataProject.description || "";

  const otherProjects = dataAllProjects?.projects
    ?.filter((p) => p.id !== dataProject.id)
    .slice(0, 3) || [];

  return (
    <>
      <Head>
        <title>{String(dataProject.title || "Project")} - Nguyễn Ngọc Trí</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${dataProject.title}, project, portfolio, ${dataProject.category || ""}`} />
        <link rel="canonical" href={`https://tringuyen.vercel.app/project/${dataProject.slug}`} />
        <meta property="og:title" content={dataProject.title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tringuyen.vercel.app/project/${dataProject.slug}`} />
        {dataProject.src && (
          <meta property="og:image" content={`https://tringuyen.vercel.app${dataProject.src}`} />
        )}
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <Banner data={dataBanner} />
        <div className="section-template">
          <div className="container">
            <div className="row">
              <div className="col-12 lg:col-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="w-full h-64 lg:h-96 overflow-hidden">
                    <Image
                      alt={dataProject.title}
                      className="w-full h-full object-cover"
                      src={dataProject.src}
                      width={1200}
                      height={600}
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      priority
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="mb-4">
                      <time className="text-sm text-gray-500 dark:text-gray-400 italic">
                        {dataProject.startYear}
                      </time>
                    </div>
                    {dataProject.content && (
                      <div className="mb-6 space-y-8">
                        {Array.isArray(dataProject.content) ? (
                          // New structure: array of content objects
                          dataProject.content.map((section, index) => (
                            <div key={index} className="space-y-4">
                              {section.title && (
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                  {section.title}
                                </h2>
                              )}
                              {section.image && (
                                <div className="w-full overflow-hidden rounded-lg">
                                  <Image
                                    src={section.image}
                                    alt={section.title || `Section ${index + 1}`}
                                    width={800}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                  />
                                </div>
                              )}
                              {section.description && (
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {section.description}
                                </p>
                              )}
                              {section.list && Array.isArray(section.list) && (
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                  {section.list.map((item, itemIndex) => (
                                    <li key={itemIndex} className="leading-relaxed">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))
                        ) : (
                          // Old structure: HTML string (backward compatibility)
                          <div
                            className="prose prose-lg dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: dataProject.content }}
                          />
                        )}
                      </div>
                    )}
                    {dataProject.href && dataProject.href !== "/" && (
                      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <a
                          href={dataProject.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center px-6 py-3 bg-main text-white rounded-lg hover:bg-main/90 transition-colors font-medium"
                          aria-label={`${detailTexts?.visitWebsite || "Visit Website"}: ${dataProject.title}`}
                        >
                          <FaLocationArrow size={16} className="mr-2" aria-hidden="true" />
                          {detailTexts?.visitWebsite || "Visit Website"}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {otherProjects.length > 0 && (
                <div className="col-12 lg:col-4 mt-8 lg:mt-0">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {detailTexts?.otherProjects || "Other Projects"}
                    </h3>
                    <div className="space-y-4">
                      {otherProjects.map((project) => (
                        <Link
                          key={project.id}
                          href={`/project/${project.slug}`}
                          className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-main dark:hover:border-main transition-colors"
                        >
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {project.title}
                          </h4>
                          {project.startYear && (
                            <time className="text-xs text-gray-500 dark:text-gray-400">
                              {project.startYear}
                            </time>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProjectDetail;

export const getStaticPaths = async () => {
  const locales = ["en", "vi"];

  try {
    // Import static data to get all projects
    const projectsEn = require("../projects-en.json");

    if (!projectsEn?.projects || !Array.isArray(projectsEn.projects)) {
      return { paths: [], fallback: false };
    }

    // Use English projects to generate paths (both locales will have same slugs)
    const paths = projectsEn.projects
      .filter((item) => item.slug) // Only include items with slug
      .flatMap((item) => {
        const slug = String(item.slug);
        return locales.map((locale) => ({
          params: { slug, locale },
        }));
      });

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error generating static paths:", error);
    return { paths: [], fallback: false };
  }
};

// Helper function to load project detail file
const loadProjectDetail = (slug, locale) => {
  const detailFiles = {
    "bbcincorp": {
      en: () => require("../details/bbcincorp-en.json"),
      vi: () => require("../details/bbcincorp-vi.json"),
    },
    "cloudhire": {
      en: () => require("../details/cloudhire-en.json"),
      vi: () => require("../details/cloudhire-vi.json"),
    },
    "ielts-academy-ops": {
      en: () => require("../details/ielts-academy-ops-en.json"),
      vi: () => require("../details/ielts-academy-ops-vi.json"),
    },
  };

  if (detailFiles[slug] && detailFiles[slug][locale]) {
    return detailFiles[slug][locale]();
  }
  return null;
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const uri = params?.slug;
  const locale = params?.locale || "en";

  try {
    // Load project detail from individual file
    const dataProject = loadProjectDetail(uri, locale);

    // Load projects list for sidebar
    const projectsList = locale === "vi"
      ? require("../projects-vi.json")
      : require("../projects-en.json");

    // Validate data structure
    if (!projectsList?.projects || !Array.isArray(projectsList.projects)) {
      throw new Error("Invalid projects list data structure");
    }

    const dataAllProjects = { projects: projectsList.projects };

    return {
      props: {
        ...(await getI18nProps(ctx, ["common", "project"])),
        dataProject,
        dataAllProjects,
      },
    };
  } catch (error) {
    console.error("Error loading project detail:", error);
    return {
      props: {
        ...(await getI18nProps(ctx, ["common", "project"])),
        dataProject: null,
        dataAllProjects: { projects: [] },
      },
    };
  }
};

