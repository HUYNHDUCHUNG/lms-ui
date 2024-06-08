import Image from "next/image"
import Link from "next/link"

const Logo = () =>{
    return (
        <Link href="/">
            <Image
                height={50}
                width={120}
                alt="logo"
                src={"/logo.svg"}
                className="h-[65px]"
            />
        </Link>
    )
}

export default Logo