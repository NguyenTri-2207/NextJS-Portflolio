import Head from "next/head";
import Link from "components/molecules/Link";

const Custom404 = () => {
  return (
    <div>
      <Head>
        <title>Trang không tồn tại </title>
      </Head>
      <div className="relative h-screen overflow-hidden">
        <div className=" container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="m-auto text-center lg:col-10">
            <div>
              <h1 className={"mb-4"}>Trang không tồn tại</h1>
              <div className="mb-8 lg:mb-4">Vui lòng quay lại Trang chủ</div>
            </div>
            <Link href="/">Trang chủ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
