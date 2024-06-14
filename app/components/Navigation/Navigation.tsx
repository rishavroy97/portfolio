import Image from "next/image";
import imgSrc from "../../../public/rishav.jpg";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import ExperienceTab from "./ExperienceTab";
import HomeTab from "./HomeTab";
import styles from "./Navigation.module.css";
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
            <div className={styles.navtabs + " flex-none gap-2"}>
                <AboutTab />
                <ExperienceTab />
                <ProjectsTab />
                <ContactTab />
                <HomeTab />
            </div>
            <div className={styles.navdrop + " dropdown flex-none"}>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                    <li><AboutTab /></li>
                    <li><ExperienceTab /></li>
                    <li><ProjectsTab /></li>
                    <li><ContactTab /></li>
                    <li><HomeTab /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
