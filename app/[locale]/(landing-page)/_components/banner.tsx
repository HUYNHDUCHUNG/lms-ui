'use client'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import ReactStars from 'react-rating-star-with-type'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
const Banner = () => {
  const t = useTranslations('LandingPage')
  return (
    <div className='h-[100vh] flex px-32 pt-[150px] bg-gradient-to-r from-cyan-100 to-blue-200 text-primary-foreground '>
      <div className='flex flex-col gap-8'>
        <h1 className='font-bold text-5xl leading-[1.4]'>{t("mainHeading")}</h1>
        <p className='text-slate-500'>
        {t("description")}
        </p>
        <ul>
          <li className='flex gap-2'>
            <Check /> {t("features.exclusive_courses")}
          </li>
          <li className='flex gap-2'>
            <Check />
            {t("features.best_instructors")}
          </li>
          <li className='flex gap-2'>
            <Check />
            {t("features.get_certificate")}
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          <Button className='bg-sky-500 hover:bg-sky-400'> {t("letLearn")}</Button>
          <div>
            <ReactStars value={5} isEdit={false} activeColors={['yellow']} />
          </div>
          <p>(300+  {t("reviews")})</p>
        </div>
      </div>
      <div>
        <Image height={700} width={700} alt='banner' src='/lmsbanner.png' />
      </div>
    </div>
  )
}

export default Banner
