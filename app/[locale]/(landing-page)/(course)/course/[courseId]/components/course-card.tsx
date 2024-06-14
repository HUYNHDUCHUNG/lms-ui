'use client'

import Image from 'next/image'
import { BookText, Calendar, Clock, Languages } from 'lucide-react'
import ReactStars from 'react-rating-star-with-type'
import { formatVND } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CourseCard = () => {
  return (
    <div className='shadow-custom rounded-xl bg-white w-[400px]'>
      <div className='aspect-video'>
        <Image
          className='size-full object-cover'
          width={200}
          height={300}
          alt='Image'
          src='/lmsbanner.png'
        />
      </div>
      <div className='flex gap-1 items-center p-4'>
        <span className='underline font-semibold text-3xl'>đ</span>
        <span className='font-bold text-3xl'>{formatVND(500000.0)}</span>
      </div>
      <div className='px-4 pt-2'>
        <Button className='bg-green-700 hover:bg-green-600 w-full text-transform: capitalize;'>
          Buy for me
        </Button>
      </div>
      <div className='px-4 pt-2'>
        <Button className='bg-amber-400 hover:bg-amber-300 w-full text-transform: capitalize;'>
          Buy for team
        </Button>
      </div>
      <div className='px-4 pt-2'>
        <Button className='bg-sky-500 hover:bg-sky-400 w-full text-transform: capitalize;'>
          Apply for scholarship (upto 50%)
        </Button>
      </div>
      <div className='px-4 pt-2'>
        <div className='flex items-center gap-2'>
          <h2>Mentoring group: </h2>
          <Link href='/'>
            {' '}
            <Image height={40} width={40} src='/facebook.svg' alt='facebook' />
          </Link>
          <Link href='/'>
            <Image height={40} width={40} src='/zalo.svg' alt='zalo' />
          </Link>
        </div>
      </div>
        
        <div className='flex flex-col gap-2 pt-2 px-4'>
          <div>
            <h2>This course include:</h2>
          </div>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center font-medium'>
              <BookText size={18} />3 Lession
            </div>
            <div className='flex gap-1 items-center font-medium'>
              <Languages size={18} />
              Tiếng Việt
            </div>
            <div className='flex gap-1 items-center font-medium'>
              <Clock size={18} /> 4 hours
            </div>
          </div>
        </div>
        <div className='flex gap-2 pt-2 px-4'>
          <div className='px-2 font-normal rounded-lg border-sky-600 border-2'>AI</div>
          <div className='px-2 font-normal rounded-lg   border-sky-600 border-2'>Test</div>
        </div>

    
        <div className='flex justify-between pt-2 px-4'>
            <div className='flex gap-1 items-center font-medium'>
            <Calendar size={18} />
            Start date: 04/05/2024
            </div>
          <ReactStars value={4} isEdit={false} activeColors={['yellow']} />
        </div>
        <div className='flex justify-between pt-2'></div>
      </div>
  )
}

export default CourseCard
