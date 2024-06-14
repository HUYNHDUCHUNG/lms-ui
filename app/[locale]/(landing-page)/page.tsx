import Banner from './_components/banner'
import Categories from './_components/categories'
import Footer from './_components/footer'
import Intructors from './_components/intructors'
import ListCourses from './_components/list-courses'
import Navbar from './_components/navbar'
import Title from './_components/title'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Title />
      <ListCourses />

      <Intructors />
      <Footer />
    </div>
  )
}

export default LandingPage
