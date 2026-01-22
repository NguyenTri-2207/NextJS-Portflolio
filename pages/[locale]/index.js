import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "lib/getStatic";
import HomepageTempalte from "components/templates/home";
import Head from "next/head";
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
          Nguyễn Ngọc Trí - Cloud / DevOps Engineer (AWS) | Software Engineer
        </title>
        <meta
          name="description"
          content="Cloud / DevOps Engineer với 1+ năm kinh nghiệm vận hành hệ thống production trên AWS và 4+ năm làm Software Engineer (Frontend & Fullstack). Chuyên về AWS, CI/CD, và automation."
        />
        <meta
          name="keywords"
          content="Cloud Engineer, DevOps Engineer, AWS, Software Engineer, Frontend Developer, Next.js, React.js"
        />
        <meta
          property="og:title"
          content="Nguyễn Ngọc Trí - Cloud / DevOps Engineer (AWS)"
        />
        <meta
          property="og:description"
          content="Cloud / DevOps Engineer với kinh nghiệm vận hành hệ thống production trên AWS và phát triển phần mềm."
        />
        <meta
          property="og:image"
          content="https://tringuyen.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://tringuyen.vercel.app" />
        {/* Twitter Card (giống OG nhưng dành riêng cho Twitter) */}
        <meta
          name="twitter:title"
          content="Nguyễn Ngọc Trí - Cloud / DevOps Engineer (AWS)"
        />
        <meta
          name="twitter:description"
          content="Cloud / DevOps Engineer với kinh nghiệm vận hành hệ thống production trên AWS và phát triển phần mềm."
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
                "url": "https://tringuyen.vercel.app",
                "description": "Cloud / DevOps Engineer (AWS) – Software Engineer Background"
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
