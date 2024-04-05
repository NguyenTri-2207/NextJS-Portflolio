import Layout from "components/organisms/LayoutTemplate";

import { getI18nProps, getStaticPaths } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";

import React from "react";
import Head from "next/head";
import BlogTemplates from "components/templates/blog";
const Blog = ({ data }) => {
  const { t } = useTranslation(["common", "blog"]);
  const menu = t("common:menu", { returnObjects: true });
  // const dataBanner = t("blog:banner", { returnObjects: true });
  const dataStaticBlog = {
    banner: t("blog:banner", { returnObjects: true }),
    minutes: t("blog:minutes"),
    read: t("blog:read"),
    search: t("blog:search"),
  };
  return (
    <>
      <Head>
        <title>Blog-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Blog Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <BlogTemplates data={data.posts} dataStaticBlog={dataStaticBlog} />
      </Layout>
    </>
  );
};

export default Blog;
export { getStaticPaths };
export const getStaticProps = async (ctx) => {
  const locale = ctx.params.locale;
  try {
    // Fetch data from the first API endpoint for English posts
    const res = await fetch(
      `${process.env.NEXT_API_URL}/api/post-locales/${locale}`
    );
    const data = await res.json();

    // Pass fetched data to serverSideTranslations
    // // const translations = await serverSideTranslations(
    // //   locale,
    // //   ["common", "blog"],
    // //   {
    // //     i18n: {
    // //       defaultLocale: "en",
    // //       locales: ["en", "vi"],
    // //     },
    // //     resources: {
    // //       en: {
    // //         posts: data, // Dữ liệu tiếng Anh
    // //       },
    // //       vi: {
    // //         posts: data, // Dữ liệu tiếng Việt
    // //       },
    // //     },
    // //   }
    // );

    return {
      props: {
        ...(await getI18nProps(ctx, ["common", "blog"])),
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        ...(await getI18nProps(ctx, ["common", "blog"])),
        data: null,
      },
    };
  }
};
