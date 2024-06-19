import CourseItem from './course-item'
import Title from './title'

const ListCourses = () => {
    
  return (
    <>
      <Title />

      <div className='px-32 pt-8 pb-16'>
        <div className='grid grid-cols-4 gap-4'>
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
    </>
  )
}

export default ListCourses
