import { Preview } from './preview'


interface DescriptionProps{
  title: string;
  description: string;
}
const Description = ({
  title,
  description
}:DescriptionProps) => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <div className='mt-2' dangerouslySetInnerHTML={{ __html: description }}>
        
      </div>
      
    </div>
  )
}

export default Description
