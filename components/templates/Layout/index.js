import Header from "./Header";
import Footer from "./Footer";

export default function Home({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
