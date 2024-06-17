import { ContactRound, Phone, Star } from 'lucide-react'
import Image from 'next/image'

const IntructorDetail = () => {
  return (
    <div className='mt-6'>
      <div>
        <h1 className='font-bold text-xl'>Intructor</h1>
      </div>
      <div className='mt-2 flex gap-2 items-center'>
        <Image className='rounded-full' height={100} width={100} alt='Avatar' src='/james.png' />
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl text-[#0972eb]'>james@gmail.com</h1>
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
        <div className='flex items-center gap-2'>
            <Phone className='w-[20px] h-[20px]'/>
            <span>084423112</span>
        </div>
        <div className='flex items-center gap-2'>
            <Image height={20} width={20} alt='zalo' src='/facebook.svg'/>
            <span>https://www.facebook.com/</span>
        </div>
      </div>

      <div className='mt-2'>
        <span className='text-lg underline font-medium'>About me</span>
        <p>
            Instructor: PhD Minh Le, Sorbonne Paris Nord University 17+ year software engineer; 10+ year AI researcher; 8+ year technical manager; CTO triip.met; CTO econations.co
        </p>
      </div>
    </div>
  )
}

export default IntructorDetail
