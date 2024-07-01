import Image from 'next/image'
import ReactStars from 'react-rating-star-with-type'

interface InstructorItemProps{
  src: string,
  name: string,
  misson: string,
}

const InstructorItem = ({
  src,
  name,
  misson
}:InstructorItemProps) => {
  return (
    <div className=' bg-background mr-10'>
      <div className=' rounded-xl overflow-hidden'>
        <Image
          className='size-full object-cover aspect-video'
          height={200}
          width={300}
          alt='Avatar'
          src={src}
        />
      </div>

      <div className='flex flex-col gap-2 p-2'>
        <span className='text-sm text-amber-400 font-light'>{misson}</span>
        <span className='text-xl font-medium'>{name}</span>
        <div className='flex items-center gap-2 border-t-2'>

          <ReactStars value={5} isEdit={false} activeColors={['yellow']} />
          <span>20 (reviews)</span>
        </div>
      </div>
    </div>
  )
}

export default InstructorItem
