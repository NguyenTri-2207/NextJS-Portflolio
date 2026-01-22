import { useState } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { DarkModeContext } from "common/context";
import "styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(true);
  const darkModeClass = darkMode ? "dark bg-bgHome-dark" : "bg-bgHome-white";
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <link rel="canonical" href="https://tringuyen.vercel.app" />
      </Head>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <main className={`font-sans ${darkModeClass} min-h-screen`}>
          <Component {...pageProps} />
        </main>
      </DarkModeContext.Provider>
    </>
  );
};

export default appWithTranslation(App);
