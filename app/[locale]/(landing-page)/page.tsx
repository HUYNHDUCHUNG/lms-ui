import Banner from "./_components/banner"
import Categories from "./_components/categories"
import ListCourses from "./_components/list-courses"
import Navbar from "./_components/navbar"
import Title from "./_components/title"

const LandingPage =  () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Categories/>
            <Title/>
            <ListCourses/>
        </div>
    )
} 

export default LandingPage