import { useState } from "react";
import Head from "next/head";
import { ThemContext } from "../common/context";
import "styles/globals.scss";

/*----------- app ----------- */

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemContext.Provider value={{ theme, setTheme }}>
        <div
          className={`"font-poppinss overflow-hidden   ${theme ? "dark" : ""}`}
        >
          <Component {...pageProps} />
        </div>
      </ThemContext.Provider>
    </>
  );
}

export default MyApp;
