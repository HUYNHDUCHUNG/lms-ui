'use client'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import ReactStars from 'react-rating-star-with-type'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='h-[100vh] flex px-32 pt-[150px] bg-sky-100'>
      <div className='flex flex-col gap-8'>
        <h1 className='font-bold text-5xl leading-[1.4]'>Learn Today, Be a Champion Tomorow.</h1>
        <p className='text-slate-500'>
          There are many variations of passages of Lorem ipsum available, but the majotiry have
          suffered alteration in some form.
        </p>
        <ul>
          <li className='flex gap-2'>
            <Check /> 100+ Exclusive online course
          </li>
          <li className='flex gap-2'>
            <Check />
            Best intructor on live course
          </li>
          <li className='flex gap-2'>
            <Check />
            Get certificate
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          <Button className='bg-sky-500 hover:bg-sky-400'>Let&apos;s Learn</Button>
          <div>
            <ReactStars value={5} isEdit={false} activeColors={['yellow']} />
          </div>
          <p>(300+ reviews)</p>
        </div>
      </div>
      <div>
        <Image height={700} width={700} alt='banner' src='/lmsbanner.png' />
      </div>
    </div>
  )
}

export default Banner
