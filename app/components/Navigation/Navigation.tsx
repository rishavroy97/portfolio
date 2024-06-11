import Image from "next/image";
import imgSrc from "../../../public/rishav.jpg";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import ExperienceTab from "./ExperienceTab";
import HomeTab from "./HomeTab";
import ProjectsTab from "./ProjectsTab";

const Navigation = () => {
    return (
        <div className="navbar bg-base-300 justify-between rounded-md px-4 w-[60vw]">
            <div className="flex-1 flex gap-4">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <Image alt="Rishav profile picture" src={imgSrc} width={100} height={100} priority={true} />
                    </div>
                </div>
                <a className="text-xl">Rishav Roy</a>
            </div>
            <div className="flex-none gap-2">
                <AboutTab />
                <ExperienceTab />
                <ProjectsTab />
                <ContactTab />
                <HomeTab />
            </div>
        </div>
    )
}

export default Navigation
