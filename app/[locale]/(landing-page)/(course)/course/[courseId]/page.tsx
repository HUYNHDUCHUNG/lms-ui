import Footer from "../../../_components/footer"
import Navbar from "../../../_components/navbar"
import CourseCard from "./components/course-card"
import Description from "./components/description"
import IntructorDetail from "./components/intructor-detail"
import LessonsList from "./components/lessons-list"


const CourseId = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex gap-4 px-32 pt-[100px]">
            <div>
              <Description/>
              <LessonsList/>
              <IntructorDetail/>
            </div>
            <div>
                <CourseCard/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CourseId
