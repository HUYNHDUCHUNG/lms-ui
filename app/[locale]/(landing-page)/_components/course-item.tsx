"use client"

import Image from 'next/image'
import { BookText, Calendar, Clock, Languages } from 'lucide-react'
import ReactStars from 'react-rating-star-with-type'
import { formatVND } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const CourseItem = () => {
  return (
    <div className='shadow-custom rounded-xl'>
      <div className='aspect-video'>
        <Image className='size-full object-cover' width={200} height={300} alt='Image' src='/lmsbanner.png' />
      </div>
      <div className='p-2 font-bold'>
        <h1>SÁT HẠCH KỸ NĂNG</h1>
      </div>
      <div className='p-2'>
      <div className='flex gap-2'>
        <div className='px-2 font-normal rounded-lg border-sky-600 border-2'>AI</div>
        <div className='px-2 font-normal rounded-lg   border-sky-600 border-2'>Test</div>
      </div>
      <div className='flex flex-col gap-2 pt-2'>
        <div className='flex gap-2'>
          <div className='flex gap-1 items-center font-medium'>
            <BookText size={20} />3 Lession
          </div>
          <div className='flex gap-1 items-center font-medium'>
            <Languages size={20} />
            Tiếng Việt
          </div>
        </div>

        <div className='flex gap-1 items-center font-medium'>
          <Clock size={20} />4 hours
        </div>
      </div>

      <div className='flex gap-1 items-center font-medium pt-2'>
        <Calendar size={20} />
        Start date: 04/05/2024
      </div>
      <div className='flex justify-between pt-2'>
        Avocaedu
        <ReactStars
          value={4}
          isEdit={false}
          activeColors={['yellow']}
        />
      </div>
      <div className='flex justify-between pt-2'>
        <div className='flex gap-1 items-center'>
          <span className='underline font-semibold text-xl'>đ</span>
          <span className='font-bold text-xl'>{formatVND(500000.0)}</span>
        </div>
        <div>
          <Button className='bg-green-700 hover:bg-green-600'>Join Now</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CourseItem
