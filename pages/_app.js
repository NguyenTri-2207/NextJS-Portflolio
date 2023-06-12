import { useState } from "react";
import "styles/globals.scss";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
import { ThemContext } from "../common/context";
const dark = "#343a40";
const light = "#f8f9fa";
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);
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
          className="font-poppinss overflow-hidden"
          style={{
            color: `${!theme ? light : dark}`,
            background: `${theme ? light : dark}`,
          }}
        >
          <Component {...pageProps} />
        </div>
      </ThemContext.Provider>
    </>
  );
}

export default MyApp;
