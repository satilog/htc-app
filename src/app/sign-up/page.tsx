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
import Layout from "@/containers/Layout"



function SignUp(){
    const {user, setUser} = useCommon();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [pronouns, setPronouns] = useState(["", ""]);


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

    // when user types in input field change the useSate value
    const onType = (e, value, set) => {
        set(e.target.value)
    }
    
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
        setUser(data.user);
    }


    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Card className="w-max h-max p-8">
                <CardHeader>
                    <CardTitle className="text-xl">
                        Sign Up
                    </CardTitle>
                    <CardDescription>
                        description
                    </CardDescription>
                </CardHeader>
                <div className={sectionContainerCSS}>
                    <div className={sectionCSS}>
                        <Label htmlFor="email" className={labelCSS}>
                            Email
                        </Label>
                        <Input onChange={(e) => onType(e, email, setEmail)} id="email" type="email" className={inputCSS}/>
                    </div>
                    <div className={sectionCSS}>
                        <Label htmlFor="username" className={labelCSS}>
                            Username
                        </Label>
                        <Input onChange={(e) => onType(e, username, setUsername)} id="username" className={inputCSS}/>
                    </div>
                    <div className={sectionCSS}>
                        <Label htmlFor="password" className={labelCSS}>
                            Password
                        </Label>
                        <Input onChange={(e) => onType(e, password, setPassword)} id="password" type="password" className={inputCSS}/>
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
