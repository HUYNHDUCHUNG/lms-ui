"use client"
import { useEffect, useState } from "react"
import Footer from "../../../_components/footer"
import Navbar from "../../../_components/navbar"
import CourseCard from "./components/course-card"
import Description from "./components/description"
import LessonsList from "./components/lessons-list"
import {  CourseDetail, Instructor } from "@/@types"
import axiosInstance from "@/config/axiosConfig"
import { AxiosResponse } from "axios"
import InstructorDetail from "./components/instructor-detail"


const CourseId = ({
  params
}:{
  params: {courseId: string}
}) => {
  const [course,setCourse] = useState<CourseDetail>()
  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axiosInstance.get<any,AxiosResponse<CourseDetail>>(`/education/courses/${params.courseId}/?format=json`);
        setCourse(response.data)
        console.log(response.data.instructor)
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
        <div className='flex flex-col-reverse md:flex-row gap-4 px-4 md:px-8 lg:px-32 py-16 pt-[100px]'>
            <div className="flex-1">
              <Description title={course?.title!} description={course?.description!}/>
              <LessonsList lessons={course?.lessons}/>
              <InstructorDetail instructors={course?.instructor}/>
            </div>
            <div className="w-full md:w-[40%]">
                <CourseCard course={course}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CourseId
