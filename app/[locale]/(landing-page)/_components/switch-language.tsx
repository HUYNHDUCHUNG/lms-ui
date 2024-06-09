"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator
  } from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "@/navigation"
import { useLocale } from "next-intl"

const SwitchLanguage = () =>{
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (code: string) => {
    router.push(pathname, { locale: code })
  }
    return (
        
        <div >
            <DropdownMenu >
            <DropdownMenuTrigger>{locale === 'vi' ? "Tiếng Việt" : "English"}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => {handleLanguageChange("vi")}}>VI</DropdownMenuItem>
                <DropdownMenuItem onClick={() => {handleLanguageChange("en")}}>EN</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default SwitchLanguage