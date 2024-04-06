import { useEffect, useState } from "react";
import Head from "next/head";
import { ThemContext } from "../common/context";
import "styles/globals.scss";
import { appWithTranslation } from "next-i18next";

/*----------- app ----------- */

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);
  const [canonical, setCanonical] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonical(window?.location?.href);
    }
    const savedTheme = localStorage.getItem("them");
    setTheme(savedTheme !== null ? JSON.parse(savedTheme) : true);
  }, []);

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

      <ThemContext.Provider value={{ theme, setTheme }}>
        <div className={` font-poppins   ${theme ? "dark" : ""}`}>
          <Component {...pageProps} />
        </div>
      </ThemContext.Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
