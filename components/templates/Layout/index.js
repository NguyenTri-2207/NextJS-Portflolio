import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, footer, socialLayoutLeft }) {
  return (
    <>
      <Header socialLayoutLeft={socialLayoutLeft} />
      <main>{children}</main>
      {footer ? <Footer /> : ""}
    </>
  );
}
export default Layout;
