import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

// import { Header } from 'components/molecules/Header'
import { FooterTest } from 'components/molecules/Footertest'

import Link from 'components/molecules/Link'
import Header from 'components/organisms/LayoutTemplate/Header'

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer'])
  const menu = t('menu', { returnObjects: true });
  console.log(menu);

  return (
    <>
      <main>
        {/* <Header heading={t('h1')} title={t('title')} /> */}
        <Header dataMenu={menu} />
        <div>
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                {item.name} {/* Hiển thị tên */}
                <span dangerouslySetInnerHTML={{ __html: item.icon }}></span> {/* Hiển thị icon */}
              </a>
            </li>
          ))}
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
        </div>
      </main>
      <FooterTest />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
