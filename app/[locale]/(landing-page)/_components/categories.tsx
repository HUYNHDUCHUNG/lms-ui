import CategoryItem from './category-item'

import { FaCodeMerge } from "react-icons/fa6";
import { FaRegLightbulb,FaBrain  } from "react-icons/fa";
import { TbBrandMiniprogram } from "react-icons/tb";

const Categories = () => {
  const icon = [
    FaCodeMerge,
    FaBrain ,
    FaRegLightbulb,
    TbBrandMiniprogram 
  ]
  return (
    <div className='pt-8 px-32 h-[300px]'>
      <div className='flex justify-center items-center font-bold'>
        <h1 className='text-3xl'>Course Categories</h1>
      </div>
      <div className='flex items-center justify-between gap-4 pt-4'>
        <CategoryItem icon={icon[0]} label='FAT1000 Program' number_course={0}/>
        <CategoryItem icon={icon[0]} label='FAT1000 Program' number_course={0}/>
        <CategoryItem icon={icon[0]} label='FAT1000 Program' number_course={0}/>
        <CategoryItem icon={icon[0]} label='FAT1000 Program' number_course={0}/>
      </div>
    </div>
  )
}

export default Categories
