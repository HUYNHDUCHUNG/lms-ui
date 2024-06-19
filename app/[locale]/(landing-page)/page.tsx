import Banner from './_components/banner'
import Categories from './_components/categories'
import Footer from './_components/footer'
import Intructors from './_components/intructors'
import ListCourses from './_components/list-courses'
import Navbar from './_components/navbar'

const LandingPage = () => {
  
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <ListCourses />
      

      <Intructors />
      <Footer />
    </div>
  )
}

export default LandingPage
