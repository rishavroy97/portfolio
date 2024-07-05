'use client';

import { navlinks } from "@/app/lib/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavList = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <>
            {
                navlinks.map(link => (
                    <Link key={link.id} href={link.href}>
                        <span className={clsx(
                            'btn btn-ghost',
                            {
                                'btn-active': pathname === link.href
                            }
                        )}>{link.name}</span>
                    </Link>
                ))
            }
        </>
    )
}

export default NavList
