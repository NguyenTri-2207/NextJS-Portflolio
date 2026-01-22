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
  const canonicalUrl = "https://tringuyen.vercel.app/blog";
  
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
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
  
  // Import static data based on locale
  const postsData = locale === 'vi' 
    ? require('./posts-vi.json')
    : require('./posts-en.json');

  return {
    props: {
      ...(await getI18nProps(ctx, ["common", "blog"])),
      data: postsData,
    },
  };
};
