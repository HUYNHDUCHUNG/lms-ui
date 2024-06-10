import Image from "next/image"

const IntructorItem = () => {
    return (
        <div className="flex items-center gap-2">
                <Image className="object-cover rounded-full border-indigo-600 border-4" height={120} width={120} alt="Avatar" src="/James.png"/> 

            <div>
                <h3 className="font-semibold text-xl">James</h3>
                <span className="font-medium text-[#3572EF] line-clamp-3"> Joyce was an Irish novelist, short story writer, poet, teacher, and literary critic</span>
            </div>
        </div>
    )
}

export default IntructorItem