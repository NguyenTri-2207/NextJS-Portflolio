import Layout from "components/organisms/LayoutTemplate";
import BlogDetailComponent from "components/templates/blog-detail";
import React from "react";
import { getI18nProps } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";
import dataStatic from "../data.json";
import Head from "next/head";

const Slug = ({ dataPost, dataAllPost }) => {
  const { t } = useTranslation(["common", "blog"]);
  const menu = t("common:menu", { returnObjects: true });
  const dataStaticBlog = {
    banner: t("blog:banner", { returnObjects: true }),
  };
  return (
    <>
      <Head>
        <title>{dataPost?.title}</title>
        <meta name="description" content={dataPost?.desc} />
        <meta name="keywords" content="từ khóa1, từ khóa2, từ khóa3" />

        <meta property="og:title" content={dataPost?.title} />
        <meta property="og:description" content={dataPost?.description} />
        <meta name="twitter:title" content={dataPost?.title} />
        <meta name="twitter:description" content={dataPost?.description} />
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <BlogDetailComponent
          data={dataPost}
          dataStaticBlog={dataStaticBlog}
          repoPost={dataAllPost.post}
        />
      </Layout>
    </>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  try {
    const locales = ["en", "vi"];
    const resPost = await fetch(
      `${process.env.NEXT_API_URL}/api/post-locales/en`
    );
    if (!resPost.ok) {
      throw new Error("Failed to fetch post slugs");
    }
    const posts = await resPost.json();
    if (!Array.isArray(posts.posts)) {
      throw new Error("posts is not an array");
    }
    const paths = posts.posts.flatMap((item) => {
      let slug = item.url.toString();
      return locales.map((locale) => ({
        params: { slug, locale },
      }));
    });

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const uri = params?.slug;
  const locale = params.locale;

  try {
    const [resDataPost, resDataAllPost] = await Promise.all([
      fetch(`${process.env.NEXT_API_URL}/api/post-locales/${locale}/${uri}`),
      fetch(`${process.env.NEXT_API_URL}/api/post-locales/${locale}`),
    ]);

    if (!resDataAllPost.ok && !resDataPost.ok) {
      throw new Error(`Failed to fetch data with slug ${uri}`);
    }

    const [dataPost, dataAllPost] = await Promise.all([
      resDataPost.json(),
      resDataAllPost.json(),
    ]);

    return {
      props: {
        ...(await getI18nProps(ctx, ["common", "blog"])),
        dataPost,
        dataAllPost,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        ...(await getI18nProps(ctx, ["common"])),
        dataPost: null,
        dataAllPost: null,
      },
    };
  }
};
