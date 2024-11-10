"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Avatar from "../avatars/index.js";
import { colors, pronounArray } from "@/lib/utils";
import { useCommon } from "@/app/context/CommonContext";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Account = ({ user }) => {  
    const [username, setUsername] = useState();

    const avatarCSS = `
        h-14 w-14
        outline-none
        ease duration-700
        hover:rotate-[360deg] 
    `;

    const updateUser = () => {
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Avatar name={user.username} colors={colors} variant="beam" className={avatarCSS} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input onChange={(e)=>setUsername(e.target.value)} id="username" defaultValue={user.username} className="col-span-3"/>
                    </div>
      
                    <div className="grid grid-cols-4 gap-4 items-center">
                        <Label htmlFor="pronouns" className="text-right">
                            Pronouns
                        </Label>
                        <div className="join col-span-3">
                            <Select>
                                <SelectTrigger className="w-min join-item">
                                    <SelectValue placeholder={user.pronounArray} />
                                </SelectTrigger>
                                <SelectContent side="down" className="max-h-64">
                                    {pronounArray.map((pronoun, i) => (
                                        <SelectItem key={i} value={pronoun}>
                                            {pronoun}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-min join-item">
                                    <SelectValue placeholder={user.pronounArray} />
                                </SelectTrigger>
                                <SelectContent side="down" className="max-h-64">
                                    {pronounArray.map((pronoun, i) => (
                                        <SelectItem key={i} value={pronoun}>
                                            {pronoun}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div> 
                    </div>
                </div>            
                <DialogFooter>
                    <Button type="submit">
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default function NavBar() {
    const { user, setUser } = useCommon();
    const router = useRouter();

    useEffect(() => {
        // Only redirect if user is not authenticated
        const userEmail = localStorage.getItem("userEmail");
        if (!user && !userEmail) {
            router.push("/sign-up");
        }
        // Remove the else condition to prevent redirect loop
    }, [user, router]);

    // If no user, return null instead of redirecting again
    if (!user) return null;

    const links = [
        {name: "Home", href: "/", icon: "home"},
        {name: "Chats", href: "/chats", icon: "chat"},
        {name: "Search", href: "/search", icon: "search"},
    ];

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
    const separator1CSS = `
        m-2
        h-1 w-2/3
        rounded-full
    `;
    const separator2CSS = `
        h-full w-1
    `;

    return (
        <>
            <ul className={navCSS}>
                <Account user={user} />
                <Separator className={separator1CSS}/>
                {links.map((link) => (
                    <li className={itemCSS} key={link.icon}>
                        <Link href={link.href} className={linkCSS}>
                            <i className="material-icons">{link.icon}</i>
                        </Link>
                    </li>
                ))}
            </ul>
            <Separator orientation="vertical" className={separator2CSS}/>
        </>
    );
}