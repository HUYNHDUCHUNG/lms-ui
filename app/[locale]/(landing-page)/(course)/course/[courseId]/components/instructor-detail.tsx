import { Instructor } from '@/@types'
import { ContactRound, Phone, Star } from 'lucide-react'
import Image from 'next/image'

interface InstructorDetailProps {
  instructors: Instructor[]
}
const InstructorDetail = ({ instructors }: InstructorDetailProps) => {
  const instructor = instructors[0]
  const src = instructor.avatar
  return (
    <div className='mt-6'>
      <div>
        <h1 className='font-bold text-xl'>Intructor</h1>
      </div>
      <div className='mt-2 flex gap-2 items-center'>
        <Image
          className='rounded-full'
          height={100}
          width={100}
          alt='Avatar'
          src={src}
          loader={() => src}
        />
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl text-[#0972eb]'>{instructor.email}</h1>
          <div className='flex items-center gap-1'>
            <Star />
            <span>5 Intructor Rating</span>
          </div>
          <div className='flex items-center gap-1'>
            <ContactRound />
            <span>Reviews</span>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <span className='text-lg underline font-medium'>Contact</span>
       
        {instructor.facebook && (
          <div className='flex items-center gap-2'>
            <Image height={20} width={20} alt='zalo' src='/facebook.svg' />
            <span>{instructor.facebook}</span>
          </div>
        )}
        {instructor.twitter && (
          <div className='flex items-center gap-2'>
            <Image height={20} width={20} alt='zalo' src='/twitter.svg' />
            <span>{instructor.twitter}</span>
          </div>
        )}
        {instructor.discord && (
          <div className='flex items-center gap-2'>
            <Image height={20} width={20} alt='zalo' src='/discord.svg' />
            <span>{instructor.discord}</span>
          </div>
        )}
        {instructor.telegram && (
          <div className='flex items-center gap-2'>
            <Image height={20} width={20} alt='zalo' src='/telegram.svg' />
            <span>{instructor.telegram}</span>
          </div>
        )}
      </div>

      <div className='mt-2'>
        <span className='text-lg underline font-medium'>About me</span>
        <p>{instructor.about_me}</p>
      </div>
    </div>
  )
}

export default InstructorDetail
