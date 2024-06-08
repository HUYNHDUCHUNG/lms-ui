import { useTranslations } from "next-intl"
import Link from "next/link"

const Menu = () =>{
    const t = useTranslations('Index')

    return(
        <div className="flex gap-6 justify-center items-center">
            <Link href="/">{t("home")}</Link>
            <Link href="/">About</Link>
            <Link href="/">Courses</Link>
            <Link href="/">Intructor</Link>
        </div>
    )
}

export default Menu