import Header from "./Header";
import Footer from "./Footer/index";
export default function Home({children}) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}