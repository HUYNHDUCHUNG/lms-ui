import Image from 'next/image'
import ReactStars from 'react-rating-star-with-type'

const InstructorItem = () => {
  return (
    <div className=' bg-background mr-10'>
      <div className='aspect-video rounded-xl overflow-hidden'>
        <Image
          className='size-full object-cover'
          height={200}
          width={120}
          alt='Avatar'
          src='/avatar.webp'
        />
      </div>

      <div className='flex flex-col gap-2 p-2'>
        <span className='text-sm text-amber-400 font-light'>Marketing Intructor</span>
        <span className='text-xl font-medium'>James</span>
        <div className='flex items-center gap-2 border-t-2'>

          <ReactStars value={5} isEdit={false} activeColors={['yellow']} />
          <span>20 (reviews)</span>
        </div>
      </div>
    </div>
  )
}

export default InstructorItem
