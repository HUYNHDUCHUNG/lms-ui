import CourseItem from "./course-item"

const ListCourses = () =>{
    return (
        <div className="px-32 pt-8 pb-16">
            <div className="grid grid-cols-4 gap-4">
             <CourseItem/>
             <CourseItem/>
             <CourseItem/>
             <CourseItem/>
            </div>

        </div>
    )
}

export default ListCourses