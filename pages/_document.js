import Document, { Html, Head, Main, NextScript } from "next/document";
import nextI18nextConfig from "../next-i18next.config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale ||
      nextI18nextConfig.i18n.defaultLocale;

    const siteUrl = "https://tringuyen.vercel.app";
    const siteName =
      "Nguyễn Ngọc Trí - Frontend Developer | Next.js, React.js & SEO";
    const description =
      "Trang cá nhân của Nguyễn Ngọc Trí, nơi chia sẻ kinh nghiệm lập trình web với ReactJS, Next.js, tối ưu SEO website, cải thiện Core Web Vitals và tăng tốc độ tải trang.";
    const image = `${siteUrl}/og-image.png`;
    return (
      <Html lang={currentLocale} prefix="og: http://ogp.me/ns#">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          {/* <link rel="manifest" href="/site.webmanifest" /> */}
          <meta name="theme-color" content="#1f2334" />

          {/* Meta SEO */}
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="Frontend Developer, ReactJS, Next.js, SEO website, tối ưu tốc độ web, lập trình web, Core Web Vitals, tối ưu Google PageSpeed"
          />
          <meta name="author" content="Nguyễn Ngọc Trí" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:locale" content={currentLocale} />
          <meta property="og:title" content={siteName} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:image" content={image} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={siteName} />

          {/* Open Graph nâng cao (Facebook, LinkedIn) */}
          <meta
            property="og:see_also"
            content="https://github.com/NguyenTri-2207"
          />
          <meta
            property="og:see_also"
            content="https://www.linkedin.com/in/tri-nguyen"
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@your_twitter_handle" />
          <meta name="twitter:title" content={siteName} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={siteName} />

          {/* JSON-LD Structured Data (Google AI & SEO) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Nguyễn Ngọc Trí",
                url: siteUrl,
                jobTitle: "Frontend Developer",
                description:
                  "Chia sẻ kinh nghiệm lập trình web với ReactJS, Next.js, tối ưu SEO website và Google PageSpeed.",
                sameAs: [
                  "https://www.linkedin.com/in/tri-nguyen",
                  "https://github.com/NguyenTri-2207",
                  // "https://twitter.com/your-twitter",
                ],
                knowsAbout: [
                  "React.js",
                  "Next.js",
                  "SEO website",
                  "Google Core Web Vitals",
                  "Tối ưu tốc độ web",
                  "PageSpeed Insights",
                ],
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": siteUrl,
                },
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
