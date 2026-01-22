import Layout from "components/organisms/LayoutTemplate";
import BlogDetailComponent from "components/templates/blog-detail";
import React from "react";
import { getI18nProps } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";
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
  const locales = ["en", "vi"];
  
  // Import static data to get all posts
  const postsEn = require('../posts-en.json');
  const postsVi = require('../posts-vi.json');
  
  // Use English posts to generate paths (both locales will have same slugs)
  const paths = postsEn.posts.flatMap((item) => {
    let slug = item.url.toString();
    return locales.map((locale) => ({
      params: { slug, locale },
    }));
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const uri = params?.slug;
  const locale = params.locale;

  // Import static data based on locale
  const postsDetail = locale === 'vi' 
    ? require('../posts-detail-vi.json')
    : require('../posts-detail-en.json');
  
  const postsList = locale === 'vi' 
    ? require('../posts-vi.json')
    : require('../posts-en.json');

  // Find the post by slug
  const dataPost = postsDetail.posts.find(post => post.url === uri) || null;
  const dataAllPost = { post: postsList.posts };

  return {
    props: {
      ...(await getI18nProps(ctx, ["common", "blog"])),
      dataPost,
      dataAllPost,
    },
  };
};
