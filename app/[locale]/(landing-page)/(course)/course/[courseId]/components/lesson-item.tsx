"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import Missions from "./missions"
import Rewards from "./rewards"
import { Lesson } from "@/@types"

interface LessionItemProps {
    isLast?: boolean
    lesson: Lesson,
    current: number,
    setCurrent: (id:number) => void
}

const LessionItem = ({
    isLast = false,
    lesson,
    current,
    setCurrent

}:LessionItemProps) =>{
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div>
            <div className={cn("flex items-center p-2",
                isLast || "border-b border-slate-500"
            )}
                onClick={() => {
                   
                    if(isOpen){
                        setCurrent(-1)
                    }else{
                     setCurrent(lesson.id)
                    }
                    setIsOpen(!isOpen)
                }}
            >
                <ChevronRight className={
                    cn(
                        "text-slate-500",
                        current === lesson.id && "rotate-90 transition duration-300"
                )}/>
                <span>
                   {lesson.title} - Misson {lesson.num_mission}
                </span>
            </div>
            <div className={cn(
                "h-0 overflow-hidden animate-in transition-all duration-300 px-4",
                current === lesson.id && "h-auto py-4 border-b border-slate-500",
            )}>
                <iframe width="700" height="400"  src="https://www.youtube.com/embed/vqo97B350_A" title="Becoming an AI Developer (The Truth)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                
                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Document</span>
                    <Button className="bg-[#06D001] w-[150px]">Enter Document</Button>
                    <span>*Click opent to documents</span>
                </div>

                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Overview</span>
                    <div className='mt-2 font-light text-base' dangerouslySetInnerHTML={{ __html: lesson.description }}>
            
                     </div>
                </div>
                
                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Outcome</span>
                    <span className='mt-2 font-light text-base'>{lesson.detail}</span>
                </div>

                <div className="mt-2 flex flex-col gap-4">
                    <span className="font-semibold">Missions</span>
                    <Missions/>
                    <Missions/>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                    <span className="font-semibold">Rewards</span>
                    <Rewards/>
                    <Rewards/>
                </div>
            
            
            </div>
        </div>
    )
}

export default LessionItem