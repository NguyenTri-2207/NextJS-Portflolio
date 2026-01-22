import Head from "next/head";
import Link from "components/molecules/Link";
import Layout from "components/organisms/LayoutTemplate";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const Custom404 = () => {
  // Default menu items (fallback when i18n is not available)
  const defaultMenu = [
    { name: "Home", href: "/en" },
    { name: "About", href: "/about" },
    { name: "Project", href: "/project" },
    { name: "Blog", href: "/blog" },
  ];

  const canonicalUrl = "https://tringuyen.vercel.app/404";

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <title>404 - Page Not Found - Nguyễn Ngọc Trí</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>
        <div className="section-template min-h-[60vh] flex items-center">
          <div className="container">
            <div className="row justify-center">
              <div className="col-12 lg:col-8 xl:col-6 py-10 text-center">
                {/* 404 Number */}
                <div className="mb-6">
                  <h1 className="text-8xl lg:text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">
                    404
                  </h1>
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-main/10 dark:bg-main/20 p-4">
                    <FaExclamationTriangle
                      className="text-main"
                      size={48}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
                  The page you are looking for is not available or doesn't belong to this website!
                </p>

                {/* Back to Home Button */}
                <Link
                  href="/en"
                  className="inline-flex items-center gap-2 rounded-full bg-main hover:bg-main/90 text-white px-6 py-3 font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <FaHome size={16} aria-hidden="true" />
                  Back to Home
                </Link>

              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Custom404;
