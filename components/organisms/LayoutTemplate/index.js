import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, footer, socialLayoutLeft, dataMenu }) {
  return (
    <>
      <Header socialLayoutLeft={socialLayoutLeft} dataMenu={dataMenu} />
      <div className="h-[72px]"></div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl animate-pulse-slow" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl animate-pulse-slower" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl animate-pulse-slowest" />
        </div>
        {children}
      </div>
      {footer ? <Footer /> : ""}
    </>
  );
}
export default Layout;
