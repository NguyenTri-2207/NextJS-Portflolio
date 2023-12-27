import { useRouter } from 'next/router'
import en from '../public/lang/en/index'
import vi from '../public/lang/vi/index'

const useTrans = () => {
    const { locale } = useRouter()

    const trans = locale === 'vi' ? vi : en

    return trans
}

export default useTrans