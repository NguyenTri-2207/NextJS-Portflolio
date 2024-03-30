import languageDetector from '../../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()

  let href = rest.href || router.asPath

  let pName = router.pathname
  console.log(locale)
  Object.keys(router.query).forEach(k => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }
  if (href.indexOf(`/${locale}`) < 0) {
    href = `/${locale}${href}`
  }
  return (
    <Link href={href} >
      <button
        className='flex'
        onClick={() => languageDetector.cache(locale)}
      >
        <div> {locale === "vi"
          ? <div className='w-10 h-6'><img className='w-full h-full' src="https://test.bbcincorp.com/assets/flags/4x3/vn.svg" width="full" height="full" /> </div>
          :
          <div className='w-10 h-6'><img className='w-full h-full' src="https://test.bbcincorp.com/assets/flags/4x3/gb.svg" width="full" height="full" /></div>}
        </div>
      </button>

    </Link>
  )
}

export default LanguageSwitchLink
