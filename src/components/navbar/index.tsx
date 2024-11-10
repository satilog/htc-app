import React from "react";
import Link from "next/link";
import Avatar from "../avatars/index.js";
import colors from "@/lib/utils";
import { Separator } from "@/components/ui/separator"

export default function NavBar(){
    const links = [
        {name: "Home", href: "/", icon: "home"},
        {name: "Chats", href: "/chats", icon: "chat"},
    ]

    const name = "Kostia";

    const itemCSS = `
        flex items-center justify-center
        h-14 w-14 
        ease duration-500
        bg-gray-200 hover:bg-gray-300
        rounded-full
    `;

    const linkCSS = `
        flex items-center justify-center
        h-full w-full
    `;

    const navCSS = `
        h-full w-20
        bg-gray-100
        py-5  
        flex flex-col items-center
        space-y-5
    `;

    const separatorCSS = `
        m-2
        h-1 w-2/3
        rounded-full
    `;

    const avatarCSS = `
        ease duration-700
        hover:rotate-[360deg] 
    `;



    return(
        <ul className={navCSS}>
            <li className={itemCSS}>
                <Link href="/" className={linkCSS}>
                    <Avatar name={name} colors={colors} variant="beam" className={avatarCSS} />
                </Link>
            </li>
            <Separator className={separatorCSS}/>
            {links.map((link) => (
                <li className={itemCSS} key={link.icon}>
                    <Link  href={link.href} className={linkCSS}>
                        <i className="material-icons">{link.icon}</i>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
