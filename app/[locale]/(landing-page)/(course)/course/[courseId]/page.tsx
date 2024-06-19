"use client"
import { useEffect, useState } from "react"
import Footer from "../../../_components/footer"
import Navbar from "../../../_components/navbar"
import CourseCard from "./components/course-card"
import Description from "./components/description"
import IntructorDetail from "./components/intructor-detail"
import LessonsList from "./components/lessons-list"
import { Category, Course } from "@/@types"
import axiosInstance from "@/config/axiosConfig"
import { AxiosResponse } from "axios"

type CategoryData = {
  results: Category[];
}
const CourseId = ({
  params
}:{
  params: {courseId: string}
}) => {
  const [course,setCourse] = useState<Course>()
  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axiosInstance.get<any,AxiosResponse<CategoryData>>("/education/courses-categories/?format=json");
        const categories = response.data.results;
        if (categories) {
          categories.forEach(category => {
            const course = category.course.find(course => course.id  === +params.courseId);
            if (course) {
              console.log("Thông tin của khóa học:", course);
              setCourse(course)
            }
          });
        }
      
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getCourse();
  }, [params.courseId]);
  if(!course) return null
  return (
    <div>
        <Navbar/>
        <div className="flex gap-4 px-32 pt-[100px]">
            <div>
              <Description title={course?.title!} description={course?.description!}/>
              <LessonsList/>
              <IntructorDetail/>
            </div>
            <div>
                <CourseCard course={course}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CourseId
