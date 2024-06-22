import { Lesson } from "@/@types"
import LessionItem from "./lesson-item"
import { useState } from "react";
interface LessonsListProps {
    lessons: Lesson[]
}
const LessonsList = ({
    lessons
}:LessonsListProps) =>{
    const [current,setCurrent] = useState(-1);

    return (
        <div className="mt-6">
            <div>
                <h1 className='font-bold text-xl'>
                    Lessons
                </h1>
            </div>
            <div className="border border-slate-500 rounded-md overflow-hidden mt-2">
                {
                    lessons.map((lesson,index) => (
                        <LessionItem current={current} setCurrent={setCurrent} key={index} lesson={lesson}/>
                    ))
                }
{/*                 
                <LessionItem/>
                <LessionItem isLast={true}/> */}
            </div>
        </div>
    )
}

export default LessonsList