import Layout from "components/organisms/LayoutTemplate";
import BlogDetailComponent from "components/templates/blog-detail";
import React from "react";
import { getI18nProps } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";
import dataStatic from "../data.json";
import Head from "next/head";
import LinkComponent from "components/molecules/Link";

const Slug = ({ dataPost, dataAllPost }) => {
  const { t } = useTranslation(["common"]);
  const menu = t("common:menu", { returnObjects: true });
  console.log(dataPost);
  console.log(dataAllPost);
  return (
    <>
      <Layout dataMenu={menu} socialLayoutLeft>
        <div className="mt-20 container ml-20"> {dataPost?.content}</div>
        <div className="mt-20 container ml-20">
          <div className="font-bold mt-10">All Post</div>
          <div>
            {dataAllPost.posts.map((item) => (
              <div key={item._id}>
                <LinkComponent href={`/blog-test/${item.url}`}>
                  <h2>{item.content}</h2>
                </LinkComponent>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  try {
    const locales = ["en", "vi"];
    const resPost = await fetch("http://localhost:4000/api/post-locales/en");
    if (!resPost.ok) {
      throw new Error("Failed to fetch post slugs");
    }
    const posts = await resPost.json();
    console.log("posts", posts.posts);
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
  console.log(params);

  try {
    const [resDataPost, resDataAllPost] = await Promise.all([
      fetch(`http://localhost:4000/api/post-locales/${locale}/${uri}`),
      fetch(`http://localhost:4000/api/post-locales/${locale}`),
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
        ...(await getI18nProps(ctx, ["common"])),
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
