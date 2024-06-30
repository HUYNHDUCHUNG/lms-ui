"use client"
import CategoryItem from './category-item'
import { FaCodeMerge } from "react-icons/fa6";
import { FaCode ,FaBrain  } from "react-icons/fa";
import { TbBrandMiniprogram } from "react-icons/tb";
import { Category } from '@/@types';
import { useTranslations } from 'next-intl';

interface CategoriesProps {
  categories: Category[]
}

const Categories = ({
  categories
}:CategoriesProps) => {
 
  const icon = [
    FaCodeMerge,
    FaBrain,
    FaCode,
    TbBrandMiniprogram 
  ]

  const t = useTranslations('LandingPage')

  return (
    <div className='pt-8 px-4 md:px-32 '>
      <div className='flex justify-center items-center font-bold'>
        <h1 className='text-3xl drop-shadow-custom bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96] bg-clip-text text-transparent'>{t("courseCategory")}</h1>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mt-4'>
        {
          categories?.map((category,index) =>(
            <CategoryItem key={index} icon={icon[index]} label={category.name} number_course={category.num_course}/>
          ))
        }
        
       
      </div>
    </div>
  )
}

export default Categories
