import { useEffect, useState } from "react";
import Head from "next/head";
import { ThemContext } from "../common/context";
import "styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store, persistor } from "lib/store/index";
import { PersistGate } from "redux-persist/integration/react";

/*----------- app ----------- */

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [theme, setTheme] = useState(true);
  const [canonical, setCanonical] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonical(window?.location?.href);
    }
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemContext.Provider value={{ theme, setTheme }}>
            <div className={`"font-poppinss   ${theme ? "dark" : ""}`}>
              {getLayout(<Component {...pageProps} />)}
            </div>
          </ThemContext.Provider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
