
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
      
     

      <div className='px-4 lg:px-32 pt-4 lg:pt-8 pb-8 lg:pb-16'>
        <Title title={category.name} description={category.description!}/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {category.course.map((course,index) => (
             <CourseItem key={index} course={course}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListCourses
