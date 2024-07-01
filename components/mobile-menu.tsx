import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import SwitchLanguage from '@/app/[locale]/(landing-page)/_components/switch-language'
import { ThemeToggle } from './theme-toggle'

const MobileMenu = () => {
    const t = useTranslations('LandingPage')
  return (
    <Sheet>
      <SheetTrigger asChild className='md:hidden'>
        <Button variant="ghost" size={'icon'}><Menu /></Button>
      </SheetTrigger>
      <SheetContent side="left" className='flex flex-col justify-between py-2'>
      <div className="flex flex-col gap-2 justify-start ">
            <Link href="/">{t("menu.home")}</Link>
            <Link href="/">{t("menu.about")}</Link>
            <Link href="/">{t("menu.courses")}</Link>
            <Link href="/">{t("menu.instructor")}</Link>
            
        </div>
        <div className='flex gap-2 justify-between'>
          <ThemeToggle/>
          <SwitchLanguage />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
