
import { Category } from '@/@types'
import CourseItem from './course-item'
import Title from './title'

interface ListCoursesProps{
  category: Category
}

const ListCourses = ({
  category
}:ListCoursesProps) => {
  
  
  return (
    <>
      
      <Title title={category.name} description={category.description!}/>

      <div className='px-32 pt-8 pb-16'>
        <div className='grid grid-cols-4 gap-4'>
          {category.course.map((course,index) => (
             <CourseItem key={index} course={course}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListCourses
