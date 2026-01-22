import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, footer, socialLayoutLeft, dataMenu }) {
  return (
    <>
      <Header socialLayoutLeft={socialLayoutLeft} dataMenu={dataMenu} />
      <div className="h-[72px]"></div>
      {children}
      {footer ? <Footer /> : ""}
    </>
  );
}
export default Layout;
