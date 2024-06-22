import { cn } from "@/lib/utils"
import { IconType } from "@react-icons/all-files"
import { Dot, Globe } from "lucide-react"
import { useTheme } from "next-themes"

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
    const {theme} = useTheme()
    return (
        <div className="flex items-center gap-4 bg-primary text-primary-foreground p-8 rounded-sm cursor-pointer hover:bg-[#615EFC] group">
            <Icon  className={cn(
                        theme === 'dark' && 'text-white'
                    )}/>
            <div>
                <h1 className={cn("font-semibold group-hover:text-[#FAA300]",
                    theme === 'dark' && 'text-white'
                )}>{label}</h1>
                <div className="flex items-center  text-slate-400 text-sm group-hover:text-white">
                    <Dot className={cn(
                        theme === 'dark' && 'text-white'
                    )} size={20}/>
                    {number_course} Courses
                </div>
            </div>
        </div>
    )

}

export default CategoryItem