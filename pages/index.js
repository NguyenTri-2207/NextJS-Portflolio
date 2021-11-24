import Homepage from "components/templates/Home";
import Layout from "components/templates/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nguyễn Ngọc Trí</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://unpkg.com/transition-style"></link>
        <link
          rel="icon"
          href="https://seolenart.com/wp-content/uploads/2017/11/icon-web.jpg"
        />
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
