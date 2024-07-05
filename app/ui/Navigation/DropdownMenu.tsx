import { navlinks } from "@/app/lib/navlinks"
import Link from "next/link"

const DropdownMenu = () => {
    return (
        <div className="dropdown dropdown-end flex-none">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                {
                    navlinks.map(link => (
                        <li key={link.id} className="py-2">
                            <Link href={link.href}>
                                <span className="text-xl">
                                    {link.name}
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropdownMenu
