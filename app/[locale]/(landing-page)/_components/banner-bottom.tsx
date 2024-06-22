import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const BannerBottom = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('mt-16 bg-orange-100', theme === 'dark' && 'bg-slate-500')}>
      <div className='px-32 flex justify-center py-16'>
        <div>
          <Image height={350} width={450} alt='banner' src='/banner-bottom.webp' />
        </div>
        <div className='flex flex-col gap-4 w-[400px]'>
          <h1 className='font-bold text-4xl'>Become an instructor</h1>
          <p>Instructors from around the world teach millions of learners on Moddle. We provide the tools and skills to teach what you love.</p>
          <div className='flex items-center gap-2'>
          <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Start teaching today</Button>
          <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Login in as instructor</Button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BannerBottom
