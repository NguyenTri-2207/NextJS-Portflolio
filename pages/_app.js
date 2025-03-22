import { useState } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import localFont from "next/font/local";
import { DarkModeContext } from "common/context";
import "styles/globals.scss";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  preload: true,
  display: "swap",
});

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(true);
  const darkModeClass = darkMode ? "dark" : "";
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <meta name="robots" content="index, follow" /> */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        {/* chỉnh lại url cho khớp từng page */}
        <link rel="canonical" href="https://tringuyen.vercel.app" />
      </Head>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <main className={`${roboto.className} ${darkModeClass}`}>
          <Component {...pageProps} />
        </main>
      </DarkModeContext.Provider>
    </>
  );
};

export default appWithTranslation(App);
