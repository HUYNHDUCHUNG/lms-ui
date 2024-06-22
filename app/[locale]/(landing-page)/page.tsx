"use client"
import { useEffect, useState } from 'react'
import Banner from './_components/banner'
import Categories from './_components/categories'
import Footer from './_components/footer'
import ListCourses from './_components/list-courses'
import Navbar from './_components/navbar'
import { Category } from '@/@types'
import axiosInstance from '@/config/axiosConfig'
import { AxiosResponse } from 'axios'
import Instructors from './_components/instructors'

type CategoryData = {
  results: Category[];
}
const LandingPage = () => {
  const [categories,setCategories] = useState<Category[]>([])
  useEffect(() => {
    const getCategory= async () => {
      try {
        const response = await axiosInstance.get<any,AxiosResponse<CategoryData>>("/education/courses-categories/?format=json")
        setCategories(response.data.results)
      } catch (error) {
        
      }
    }

    getCategory()
  },[])
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories categories={categories}/>
      {categories.map((category,index) =>(
          category.course.length != 0 && 
         <ListCourses key={index} category={category}/>
      ))}
     
      <Instructors />
      <Footer />
    </div>
  )
}

export default LandingPage
