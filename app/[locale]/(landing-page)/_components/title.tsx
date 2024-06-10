import { ImCompass } from "react-icons/im"; 

const Title = () => {

    return (
        <div className="pt-8 px-32">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold">FAT1000 Program - Future AI Talents</h1>
            </div>
            <div className="flex justify-center gap-2 pt-6">
                <ImCompass size={32} />
                <p className="font-medium">
                    The FAT1000 program is an initiative to reskill Vietnamese workers with the goal of providing 1000 high-quality AI developers, ready to meet the increasing demand of Vietnamese information technology and the artificial intelligence industry.
                </p>
            </div>
        </div>
    )
}

export default Title