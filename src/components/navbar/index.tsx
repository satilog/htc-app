"use client";
import React from "react";
import Link from "next/link";
import Avatar from "../avatars/index.js";
import { colors, pronouns, user } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



const account = (user: any) => {
    const avatarCSS = `
        h-14 w-14
        outline-none
        ease duration-700
        hover:rotate-[360deg] 
    `;

    return(
        <Dialog>
            <DialogTrigger>
                <Avatar name={user.displayName} colors={colors} variant="beam" className={avatarCSS} />
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" defaultValue="@Pablo" className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" defaultValue="Pablo" className="col-span-3"/>
                    </div>  
                    <div className="grid grid-cols-4 gap-4 flex items-center">
                        <Label htmlFor="pronouns" className="text-right">
                            Pronouns
                        </Label>
                        <div className="join">
                            <Select>
                                <SelectTrigger className="w-min join-item">
                                    <SelectValue placeholder={user.pronouns[0]} />
                                </SelectTrigger>
                                <SelectContent side="down" className="max-h-64">
                                    {pronouns.map((pronoun, i) => (
                                        <SelectItem key={i} value={pronoun}>
                                            {pronoun}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-min join-item">
                                    <SelectValue placeholder={user.pronouns[1]} />
                                </SelectTrigger>
                                <SelectContent side="down" className="max-h-64">
                                    {pronouns.map((pronoun, i) => (
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
    )
}


const signUp = () => {
    return(
        <Dialog>
            <DialogTrigger>
                ?
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" defaultValue="@Pablo" className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" defaultValue="Pablo" className="col-span-3"/>
                    </div>  
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="pronouns" className="text-right">
                            Pronouns
                        </Label>
                        <Input id="pronouns" defaultValue="He/She" className="col-span-3"/>
                    </div>
                </div>            
                <DialogFooter>
                    <Button type="submit">
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}



export default function NavBar(){
    const links = [
        {name: "Home", href: "/", icon: "home"},
        {name: "Chats", href: "/chats", icon: "chat"},
        {name: "Search", href: "/search", icon: "search"},
    ]

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

    return(
        <>
            <ul className={navCSS}>
                {user && account(user)}
                <Separator className={separator1CSS}/>
                {links.map((link) => (
                    <li className={itemCSS} key={link.icon}>
                        <Link  href={link.href} className={linkCSS}>
                            <i className="material-icons">{link.icon}</i>
                        </Link>
                    </li>
                ))}
            </ul>
            <Separator orientation="vertical" className={separator2CSS}/>
        </>

    )
}
