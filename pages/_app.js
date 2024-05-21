import { useEffect, useState } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { DarkModeContext } from "common/context";
import "styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [canonical, setCanonical] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonical(window?.location?.href);
    }
  }, []);
  const darkModeClass = darkMode ? "dark" : "";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical.toString()} />
      </Head>

      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={darkModeClass}>
          <Component {...pageProps} />
        </div>
      </DarkModeContext.Provider>
    </>
  );
};

export default appWithTranslation(App);
