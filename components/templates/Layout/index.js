import Header from "./Header";
import Footer from "./Footer";

function Home({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Home;
