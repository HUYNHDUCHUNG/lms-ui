import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import Image from "next/image"

const BannerMiddle = () => {
    const {theme} = useTheme()
    return(
        <div className={cn(
            'mt-8 bg-cyan-200',
            theme === 'dark' && 'bg-slate-500'
        )}>
            <div className="px-32 flex justify-between py-16">
                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-4xl">Upskill your team with Moodle Business</h1>
                    <Button className="w-min bg-yellow-400 hover:bg-yellow-300">Contract Us</Button>

                </div>
                <div>
                    <Image height={350} width={450} alt="banner" src="/banner-middle.png"/>
                </div>
            </div>
        </div>
    )
}

export default BannerMiddle