import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, footer, socialLayoutLeft, dataMenu }) {
  return (
    <>
      <Header socialLayoutLeft={socialLayoutLeft} dataMenu={dataMenu} />
      {children}
      {footer ? <Footer /> : ""}
    </>
  );
}
export default Layout;
