"use client";
import React from "react"
import {useState} from "react"
import {useCommon} from "@/app/context/CommonContext"
import { colors, pronounArray } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Avatar from "@/components/avatars/index.js"
import Layout from "@/containers/Layout"



function SignUp(){
    const {user, setUser} = useCommon();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [pronouns, setPronouns] = useState(["", ""]);
    
    const creators = [
        'Klausss', 'Pablo', 'koi', 'satilog', 'zooMy'
    ];

    const labelCSS = `
        text-right
        font-bold
    `;
    const sectionContainerCSS = `
        grid gap-4
        py-4
    `;
    const sectionCSS = `
        grid grid-cols-4 
        items-center 
        gap-4
    `;
    const inputCSS = `
        col-span-3
        w-4/5
        text-opacity-50
        text-gray-600
    `;
    const starCSS = `
        absolute
        -top-3 -right-3
        mask mask-star-2
        w-16 h-16
        bg-yellow-400
        rotate-[45deg]
    `;


    const changePronouns = (e, i) => {
        const newPronouns = [...pronouns];
        newPronouns[i] = e;
        setPronouns(newPronouns);
    }


    const createUser = async() => {
        const userRes = await fetch("/api/createUser", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, username, password, pronouns }),
           }
        );
        const data = await userRes.json();
        const userEmail = localStorage.setItem("userEmail", data.user.email);
        setUser(data.user);
    }


    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Card className="relative w-max h-max p-8">
                <CardHeader>
                    <CardTitle className="text-xl">
                        Sign Up for an free Account!
                    </CardTitle>
                    <CardDescription>
                        enjoy the benefits of being a member
                    </CardDescription>
                </CardHeader>
                <div className={sectionContainerCSS}>
                    <div className={sectionCSS}>
                        <Label htmlFor="email" className={labelCSS}>
                            Email
                        </Label>
                        <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email" className={inputCSS}/>
                    </div>
                    <div className={sectionCSS}>
                        <Label htmlFor="username" className={labelCSS}>
                            Username
                        </Label>
                        <Input onChange={(e) => setUsername(e.target.value)} id="username" className={inputCSS}/>
                    </div>
                    <div className={sectionCSS}>
                        <Label htmlFor="password" className={labelCSS}>
                            Password
                        </Label>
                        <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" className={inputCSS}/>
                    </div>  
                    <div className={sectionCSS}>
                        <Label htmlFor="pronouns" className={labelCSS}>
                        </Label>
                            Pronouns
                        <div className="join">
                            <Select onValueChange={(e) => changePronouns(e,0)}>
                                <SelectTrigger className="w-16 join-item">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent side="down" className="max-h-64">
                                    {pronounArray.map((pronoun, i) => (
                                        <SelectItem key={i} value={pronoun}>
                                            {pronoun}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select onValueChange={(e) => changePronouns(e,1)}>
                                <SelectTrigger className="w-16 join-item">
                                    <SelectValue/>
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
                <CardFooter>
                    <Button onClick={() => createUser()}>
                        Create Account
                    </Button>
                </CardFooter>
            <Avatar name={creators[0]} colors={colors} variant="beam" className="w-20 h-20 absolute -right-4 -bottom-4"/>
            <Avatar name={creators[1]} colors={colors} variant="beam" className="w-20 h-20 absolute left-32 -bottom-4"/>
            <Avatar name={creators[2]} colors={colors} variant="beam" className="w-20 h-20 absolute right-5 bottom-20"/>
            <Avatar name={creators[3]} colors={colors} variant="beam" className="w-20 h-20 absolute left-0 bottom-24"/>
            <Avatar name={creators[4]} colors={colors} variant="beam" className="w-20 h-20 absolute -left-2 -bottom-4"/>
            <div className={starCSS}></div>
            </Card>
        </div> 
    )
}


export default function Page(){
    return (
        <Layout>
            <SignUp />
        </Layout>
    )
}
