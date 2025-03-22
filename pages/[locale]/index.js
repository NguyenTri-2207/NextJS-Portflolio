import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "lib/getStatic";
import HomepageTempalte from "components/templates/home";
import Head from "node_modules/next/head";
import Layout from "components/organisms/LayoutTemplate";

const Home = () => {
  const { t } = useTranslation(["common", "home"]);
  const home = t("home:banner", { returnObjects: true });
  const menu = t("common:menu", { returnObjects: true });
  return (
    <>
      <Head>
        {/* Meta title và description (rất quan trọng cho SEO) */}
        <title>
          Nguyễn Ngọc Trí - Frontend Developer | Next.js, React.js & SEO
        </title>
        <meta
          name="description"
          content="Trang cá nhân của Nguyễn Ngọc Trí, nơi chia sẻ kinh nghiệm lập trình web với ReactJS, Next.js, tối ưu SEO website, cải thiện Core Web Vitals và tăng tốc độ tải trang."
        />
        {/* Keywords (không quá quan trọng với SEO hiện đại nhưng vẫn có lợi) */}
        <meta
          name="keywords"
          content="Frontend Developer, ReactJS, Next.js, lập trình web"
        />
        {/* Open Graph (OG) dành riêng cho từng page */}
        <meta
          property="og:title"
          content="Nguyễn Ngọc Trí - Frontend Developer"
        />
        <meta
          property="og:description"
          content="Hành trình của Trí trở thành một Frontend Developer, chia sẻ kinh nghiệm về ReactJS và Next.js."
        />
        <meta
          property="og:image"
          content="https://tringuyen.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://tringuyen.vercel.app" />
        {/* Twitter Card (giống OG nhưng dành riêng cho Twitter) */}
        <meta
          name="twitter:title"
          content="Nguyễn Ngọc Trí - Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Hành trình của Trí trở thành một Frontend Developer, chia sẻ kiến thức về ReactJS và Next.js."
        />
        <meta
          name="twitter:image"
          content="https://tringuyen.vercel.app/twitter-image.jpg"
        />

        {/* Structured Data riêng cho page (có thể khác nhau giữa các trang) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Nguyễn Ngọc Trí",
                "url": "https://yourwebsite.com/home",
                "description": "Hành trình của Trí trở thành 1 frontend developer"
              }`,
          }}
        />
      </Head>

      <Layout dataMenu={menu} socialLayoutLeft>
        <HomepageTempalte data={home} />
      </Layout>
    </>
  );
};

export default Home;

const getStaticProps = makeStaticProps(["common", "home"]);
export { getStaticPaths, getStaticProps };
