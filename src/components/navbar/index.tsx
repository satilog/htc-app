import React from "react";
import Link from "next/link";
import Avatar from "../avatars/index.js";

export default function NavBar(){

    const links = [
        {name: "Home", href: "/", icon: "home"},
        {name: "About", href: "/about", icon: "info"},
        {name: "Chats", href: "/chats", icon: "chat"},
        {name: "Profile", href: "/profile", icon: "person"},
    ];    
    
    const colors = ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"];
    const name = "Kostia";

    const linkCSS = "flex items-center justify-center h-14 w-14";

    return(
        <ul className="absolute h-full w-20 bg-gray-100 flex flex-col h-full items-center py-5">
            <li className={linkCSS}>
                <Avatar name={name} colors={colors} variant="beam" />
            </li>

            <div className="divider bg-red-200"></div> 
            {links.map((link) => (
                <li className={linkCSS}>
                    <Link  href={link.href} className="flex items-center justify-center h-full w-full">
                        <i className="material-icons">{link.icon}</i>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
