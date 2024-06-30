import { ImCompass } from 'react-icons/im'

interface TitleProps {
  title: string
  description: string
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className='pt-16 mb-8'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-bold drop-shadow-custom bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96] bg-clip-text text-transparent'>
          {title}
        </h1>
      </div>
      {description && (
        <div className='flex justify-center gap-2 pt-6'>
          <ImCompass size={32} />
          <p className='font-medium'>{description}</p>
        </div>
      )}
    </div>
  )
}

export default Title
