import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

import Header from "components/organisms/LayoutTemplate/Header";
import SelectSwitchLanguage from "components/molecules/SelectSwitchLanguage";

const Homepage = () => {
  const { t } = useTranslation(["common", "footer"]);
  const menu = t("menu", { returnObjects: true });

  return (
    <>
      <main className="container mt-20">
        {/* <Header heading={t('h1')} title={t('title')} /> */}
        <Header dataMenu={menu} />
        <div className="mb-20">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                {item.name} {/* Hiển thị tên */}
                <span
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                ></span>{" "}
                {/* Hiển thị icon */}
              </a>
            </li>
          ))}
        </div>
        <SelectSwitchLanguage />
      </main>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };
