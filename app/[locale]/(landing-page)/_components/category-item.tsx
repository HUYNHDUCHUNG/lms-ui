import { IconType } from "@react-icons/all-files"
import { Dot, Globe } from "lucide-react"

interface CategoryItemProps {
    icon: IconType
    label: string 
    number_course: number
}

const CategoryItem = ({
    icon: Icon,
    label,
    number_course
}:CategoryItemProps
) =>{
    return (
        <div className="flex items-center gap-4 bg-sky-100 p-8 rounded-sm cursor-pointer hover:bg-[#615EFC] group">
            <Icon />
            <div>
                <h1 className="font-semibold group-hover:text-[#FAA300]">{label}</h1>
                <div className="flex items-center  text-slate-400 text-sm group-hover:text-white">
                    <Dot size={20}/>
                    {number_course} Courses
                </div>
            </div>
        </div>
    )

}

export default CategoryItem