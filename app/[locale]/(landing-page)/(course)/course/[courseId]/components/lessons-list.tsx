import LessionItem from "./lesson-item"

const LessonsList = () =>{
    return (
        <div className="mt-6">
            <div>
                <h1 className='font-bold text-xl'>
                    Lessons
                </h1>
            </div>
            <div className="border border-black rounded-md overflow-hidden mt-2">
                <LessionItem/>
                <LessionItem/>
                <LessionItem isLast={true}/>
            </div>
        </div>
    )
}

export default LessonsList