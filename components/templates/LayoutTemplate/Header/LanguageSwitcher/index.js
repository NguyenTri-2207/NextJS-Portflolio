import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';


export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    const router = useRouter();
    const { locale } = router;

    const handleChange = (e) => {
        let language = e.target.value
        i18n.changeLanguage(language);
        router.push(router.pathname, router.asPath, { locale: language });
        // i18n.changeLanguage(e.target.value);

        // router.push(
        //     {
        //         pathname: router.pathname,
        //         query: router.query,
        //     },
        //     null,
        //     { locale: e.target.value }
        // );
    };

    return (
        <div>
            <select onChange={handleChange} defaultValue={locale}>
                <option value="en">English</option>
                <option value="vi">Vietnamese</option>
            </select>
        </div>
    );
}
