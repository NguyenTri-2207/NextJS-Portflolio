import Layout from "components/organisms/LayoutTemplate";

import { getI18nProps, getStaticPaths } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";

import React from "react";
import Head from "next/head";
import LinkComponent from "components/molecules/Link";
const Blog = ({ data }) => {
  const { t } = useTranslation(["common", "blog", "posts"]);
  const menu = t("common:menu", { returnObjects: true });
  console.log(menu);

  console.log(data);
  return (
    <>
      <Head>
        <title>Blog-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Blog Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <div className="mt-20 container ml-20">
          {/* Render English posts */}
          {data?.posts?.map((item, key) => (
            <div key={key}>
              <LinkComponent href={`/blog-test/${item.url}`}>
                <h2>{item.content}</h2>
              </LinkComponent>
            </div>
          ))}
        </div>
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
    const res = await fetch(`http://localhost:4000/api/post-locales/${locale}`);
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
