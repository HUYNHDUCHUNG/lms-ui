import Navbar from "../../../_components/navbar"
import CourseCard from "./components/course-card"
import Description from "./components/description"
import IntructorDetail from "./components/intructor-detail"
import Lessons from "./components/lessons"


const CourseId = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex gap-4 px-32 pt-[100px]">
            <div>
              <Description/>
              <Lessons/>
              <IntructorDetail/>
            </div>
            <div>
                <CourseCard/>
            </div>
        </div>
    </div>
  )
}

export default CourseId
