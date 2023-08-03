import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, footer }) {
  return (
    <>
      <Header />
      <main className=" bg-white pt-[80px]">{children}</main>
      {footer ? "" : <Footer />}
    </>
  );
}
export default Layout;
