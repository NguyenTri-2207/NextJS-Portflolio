import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <link rel="icon" type="image/ico" href="/favicon.ico" />
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
            sizes="16x16"
          />

          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <meta name="geo.region" content="VN-SG" />
          <meta name="geo.placename" content="Ho Chi minh" />
          <meta name="geo.position" content="10.7441158;106.6971911" />
          <meta name="ICBM" content="10.7441158;106.6971911" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="box-border font-poppins ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
