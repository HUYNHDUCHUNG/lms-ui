"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import Missions from "./missions"
import Rewards from "./rewards"

interface LessionItemProps {
    isLast?: boolean
}

const LessionItem = ({
    isLast = false
}:LessionItemProps) =>{
    const [isOpen,setIsOpen] = useState(false);

    return (
        <div>
            <div className={cn("flex items-center p-2",
                isLast || "border-b border-slate-500"
            )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <ChevronRight className={
                    cn(
                        "text-slate-500",
                    isOpen && "rotate-90 transition duration-300"
                )}/>
                <span>
                    CHƯƠNG TRÌNH ​FUNDAMENTAL DEVELOPER - 0 missions
                </span>
            </div>
            <div className={cn(
                "h-0 overflow-hidden transition duration-300",
                isOpen && "h-auto p-4",
                isLast || "border-1 border-slate-500"
            )}>
                <iframe width="700" height="400" src="https://www.youtube.com/embed/8zRy02Wl1JA?list=RDkEZa5Bn3IaM" title="THƯƠNG EM ĐẾN GIÀ | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Document</span>
                    <Button className="bg-[#06D001] w-[150px]">Enter Document</Button>
                    <span>*Click opent to documents</span>
                </div>

                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Overview</span>
                    <span>Kiểm tra kỹ năng và ​kiến thức trong các ​lĩnh vực như Lập trình ​cơ bản, Cấu trúc dữ ​liệu và giải thuật, Lập ​trình hướng đối tượng, ​và Cơ sở dữ liệu</span>
                </div>
                
                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Outcome</span>
                    
                </div>

                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Missions</span>
                    <Missions/>
                </div>
                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">Rewards</span>
                    <Rewards/>
                </div>
            
            
            </div>
        </div>
    )
}

export default LessionItem