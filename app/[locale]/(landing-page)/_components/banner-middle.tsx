import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const BannerMiddle = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('mt-8 bg-cyan-200 flex items-center px-4 lg:px-32 ', theme === 'dark' && 'bg-slate-500')}>
      <div className='flex py-8 lg:py-16'>
        <div className='flex flex-col gap-8'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Upskill your team with Moodle Business</h1>
          <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Contract Us</Button>
        </div>
      </div>
      <div>
        <Image
          className='object-cover hidden lg:flex'
          height={600}
          width={600}
          alt='banner'
          src='/data/banner/banner-4.png'
        />
      </div>
    </div>
  )
}

export default BannerMiddle
