import Layout from "components/organisms/LayoutTemplate";
import BlogDetailComponent from "components/templates/blog-detail";
import React from "react";
import { getI18nProps } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";
import dataStatic from "../data.json";
import Head from "next/head";

const Slug = ({ repo, posts }) => {
  const { t } = useTranslation(["common"]);
  const menu = t("common:menu", { returnObjects: true });
  console.log(repo);
  return (
    <>
      <Head>
        <title>{repo?.title}</title>
        <meta name="description" content={repo?.desc} />
        <meta name="keywords" content="từ khóa1, từ khóa2, từ khóa3" />

        <meta property="og:title" content={repo?.title} />
        <meta property="og:description" content={repo?.description} />
        <meta name="twitter:title" content={repo?.title} />
        <meta name="twitter:description" content={repo?.description} />
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <BlogDetailComponent
          data={repo}
          dataStatic={dataStatic}
          repoPost={posts}
        />
      </Layout>
    </>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  try {
    const locales = ["en", "vi"];
    const resPost = await fetch("https://crm-nodejs.vercel.app/api/post");
    if (!resPost.ok) {
      throw new Error("Failed to fetch post slugs");
    }
    const posts = await resPost.json();
    const paths = posts.flatMap((item) => {
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

  try {
    const [res, resPost] = await Promise.all([
      fetch(`https://crm-nodejs.vercel.app/api/post/${uri}`),
      fetch("https://crm-nodejs.vercel.app/api/post"),
    ]);

    if (!res.ok || !resPost.ok) {
      throw new Error(`Failed to fetch data with slug ${uri}`);
    }

    const [repo, posts] = await Promise.all([res.json(), resPost.json()]);

    return {
      props: {
        ...(await getI18nProps(ctx, ["common"])),
        repo,
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        ...(await getI18nProps(ctx, ["common"])),
        repo: null,
        posts: [],
      },
    };
  }
};
