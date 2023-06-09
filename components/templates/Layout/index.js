import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, footer }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {footer ? "" : <Footer />}
    </>
  );
}
export default Layout;
