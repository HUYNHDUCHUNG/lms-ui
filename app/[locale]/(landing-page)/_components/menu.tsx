import { useTranslations } from "next-intl"
import Link from "next/link"

const Menu = () =>{
    const t = useTranslations('LandingPage')

    return(
        <div className="hidden sm:flex gap-6 justify-center items-center ">
            <Link href="/">{t("menu.home")}</Link>
            <Link href="/">{t("menu.about")}</Link>
            <Link href="/">{t("menu.courses")}</Link>
            <Link href="/">{t("menu.instructor")}</Link>
        </div>
    )
}

export default Menu