import { useEffect, useState } from "react";
import Head from "next/head";
import { ThemContext } from "../common/context";
import "styles/globals.scss";

/*----------- app ----------- */

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);
  const [canonical, setCanonical] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonical(window?.location?.href)
    }
  }, [])
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
      </Head>
      <ThemContext.Provider value={{ theme, setTheme }}>
        <div className={`"font-poppinss   ${theme ? "dark" : ""}`}>
          <Component {...pageProps} />
        </div>
      </ThemContext.Provider>
    </>
  );
}

export default MyApp;
