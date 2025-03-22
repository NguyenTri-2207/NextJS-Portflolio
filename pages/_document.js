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

    return (
      <Html lang={currentLocale} prefix="og: http://ogp.me/ns#">
        <Head>
          <meta charSet="UTF-8" />

          {/* Favicon và Apple Touch Icons */}
          <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
          {/* Preconnect để tăng tốc */}
          <link rel="preconnect" href="https://www.google-analytics.com" />

          {/* Thêm meta description chung cho toàn bộ trang */}
          <meta
            name="description"
            content="Trang cá nhân của Nguyễn Ngọc Trí - Frontend Developer, chia sẻ kiến thức về ReactJS, Next.js và phát triển web."
          />
          <meta
            name="keywords"
            content="Frontend Developer, ReactJS, Next.js, lập trình web"
          />

          {/* Thông tin địa lý */}
          <meta name="geo.region" content="VN-SG" />
          <meta name="geo.placename" content="Ho Chi Minh" />
          <meta name="geo.position" content="10.7441158;106.6971911" />
          <meta name="ICBM" content="10.7441158;106.6971911" />

          {/* Open Graph cơ bản */}
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="Nguyễn Ngọc Trí - Frontend Developer"
          />
          {/* Open Graph cơ bản */}
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="Nguyễn Ngọc Trí - Frontend Developer"
          />
          <meta property="og:locale" content={currentLocale} />
          <meta
            property="og:title"
            content="Nguyễn Ngọc Trí - Frontend Developer"
          />
          <meta
            property="og:description"
            content="Trang cá nhân của Nguyễn Ngọc Trí, nơi chia sẻ kinh nghiệm về phát triển giao diện web với ReactJS, Next.js và công nghệ frontend."
          />
          <meta property="og:url" content="https://tringuyen.vercel.app" />
          <meta
            property="og:image"
            content="https://tringuyen.vercel.app/og-image.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Nguyễn Ngọc Trí - Frontend Developer"
          />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@your_twitter_handle" />
          <meta
            name="twitter:title"
            content="Nguyễn Ngọc Trí - Frontend Developer"
          />
          <meta
            name="twitter:description"
            content="Chia sẻ kiến thức về ReactJS, Next.js và lập trình web."
          />
          <meta
            name="twitter:image"
            content="https://tringuyen.vercel.app/twitter-image.jpg"
          />
          <meta
            name="twitter:image:alt"
            content="Nguyễn Ngọc Trí - Frontend Developer"
          />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Nguyễn Ngọc Trí",
                url: "https://tringuyen.vercel.app",
                jobTitle: "Frontend Developer",
                description:
                  "Chia sẻ kinh nghiệm lập trình web với ReactJS, Next.js.",
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
