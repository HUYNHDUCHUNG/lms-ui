import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const {theme} = useTheme()
  const t = useTranslations('LandingPage')
  return (
    <div className={cn(
      'px-32 py-16 grid grid-cols-4 gap-3 text-foreground',
        theme === 'dark' ? 'bg-zinc-800' : 'bg-gradient-to-r from-cyan-100 to-blue-200'
    )}>
      <div className='mr-2'>
        <div>
          <Image height={80} width={80} alt='Logo' src='/logo.svg' />
        </div>
        <div>
          <p className='mt-2 font-medium'>{t("footer.title")}</p>
        </div>
      </div>
      <div className='flex flex-col ml-2 gap-4'>
        <Link className='font-medium' href='/'>{t("footer.aboutUs")}</Link>
        <Link className='font-medium' href='/'>{t("footer.contactUs")}</Link>
      </div>
      <div className='flex flex-col gap-4'>
        <Link className='font-medium' href='/'>{t("footer.course")}</Link>
        <Link className='font-medium' href='/'>{t("footer.aiAppstore")}</Link>
        <Link className='font-medium' href='/'>{t("footer.fat1000")}</Link>
        <Link className='font-medium' href='/'>{t("footer.tests")}</Link>
      </div>
      <div className='flex flex-col gap-4'>
        <Link className='font-medium' href='/'>{t("footer.projectOpening")}</Link>
        <Link className='font-medium' href='/'>{t("footer.hiring")}</Link>
        <Link className='font-medium' href='/'>{t("footer.becomeInstructor")}</Link>
      </div>
    </div>
  )
}

export default Footer
