import { useState } from "react";
import "styles/globals.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import { ThemContext } from "../common/context";
const dark = "#343a40";
const light = "#f8f9fa";
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);
  return (
    <ThemContext.Provider value={{ theme, setTheme }}>
      <div
        className="font-poppinss"
        style={{
          color: `${!theme ? light : dark}`,
          background: `${theme ? light : dark}`,
        }}
      >
        <Component {...pageProps} />
      </div>
    </ThemContext.Provider>
  );
}

export default MyApp;
