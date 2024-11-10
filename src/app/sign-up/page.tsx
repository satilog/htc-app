import React from "react"
import {useState} from "react"
import { colors, pronouns } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignUp(){
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
        text-opacity-50
        text-gray-600
    `;

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
                        <Input id="email" defaultValue="pablo@gmail.com" className={inputCSS}/>
                    </div>
                    <div className={sectionCSS}>
                        <Label htmlFor="username" className={labelCSS}>
                            Username
                        </Label>
                        <Input id="username" defaultValue="@Pablo" className={inputCSS}/>
                    </div>
                    <div className={sectionCSS}>
                        <Label htmlFor="name" className={labelCSS}>
                            Name
                        </Label>
                        <Input id="name" defaultValue="Pablo" className={inputCSS}/>
                    </div>  
                    <div className={sectionCSS}>
                        <Label htmlFor="pronouns" className={labelCSS}>
                            Pronouns
                        </Label>
                        <div className="join">
                            <Select>
                                <SelectTrigger className="w-min join-item">
                                    <SelectValue placeholder={pronouns[0]} />
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
                                    <SelectValue placeholder={pronouns[2]} />
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
                <CardFooter>
                    <Button type="submit">
                        Save
                    </Button>
                </CardFooter>
            </Card>
        </div>  
    )
}
