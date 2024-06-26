'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import ReactStars from 'react-rating-star-with-type'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const Banner = () => {
  const { theme } = useTheme()
  const t = useTranslations('LandingPage')

  return (
    <div className='relative'>
      <Swiper  
      spaceBetween={30}
       effect={'fade'} 
      //  navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
       pagination={{
        clickable: true,
      }}
       modules={[EffectFade,Pagination, Navigation, Autoplay]} className='mySwiper'>
        <SwiperSlide>
          {' '}
          <div className='h-[calc(100vh-65px)] mt-[65px] '>
            <Image
              className='h-[100%] w-full object-cover'
              height={1000}
              width={1000}
              alt='banner'
              src={'/data/banner/banner-1.jpg'}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {' '}
          <div className='h-[calc(100vh-65px)] mt-[65px] '>
            <Image
              className='h-[100%] w-full object-cover'
              height={1000}
              width={1000}
              alt='banner'
              src={'/data/banner/banner-2.jpg'}
            />
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          {' '}
          <div className='h-[calc(100vh-65px)] mt-[65px] '>
            <Image
              className='h-[100%] w-full object-cover'
              height={1000}
              width={1000}
              alt='banner'
              src={'/data/banner/banner-5.jpg'}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='flex flex-col gap-4 absolute left-32 top-[40%] z-10 w-[250px]'>
        <h1 className='text-3xl font-bold'>Hãy đến giảng <br></br>dạy với chúng tôi</h1>
        <span>Trở thành giảng viên và thay đổi cuộc sống của mọi người, bao gồm cả cuộc sống của chính bạn</span>
        <Button className='w-min px-14 bg-black text-white hover:bg-slate-950'>Bắt đầu</Button>
      </div>
    </div>
  )
}

export default Banner
