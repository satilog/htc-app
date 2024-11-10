// design better scroll bar
// selected chat should be highlighted
"use client";


import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import Avatar from "@/components/avatars/index.js";
import Chat from "./chat.tsx";
import db from "./db.js"
import colors from "@/lib/utils";
import { Separator } from "@/components/ui/separator"


export default function Chats(){

    const user = "ilnkostia@gmail.com"

    const [chatId, setChatId] = useState<string>(null);
    useEffect(() => {
        const saved = localStorage.getItem("chatId");
        if(saved)
            setChatId(saved);
    }, [])

    const chatCSS = `
        w-full h-full
        flex
    `;

    const chatsCSS = `
        w-72 h-full
    `;

    const listCSS = `
        h-full w-72
        overflow-y-auto smooth-scroll
        flex flex-col
    `;

    const itemCSS = `
        w-64 
        m-4
        cursor-pointer
    `;

    const avatarCSS = `
        w-12 h-12
        ease duration-700
        group-hover:rotate-[360deg]
    `;

    const groupNameCSS = `
        text-lg font-bold

    `;
    const groupMessageCSS = `
        text-sm
    `;
    
    const separator1CSS = `
        h-1 w-full 
    `;

    const separator2CSS = `
        h-full w-1
    `;

    const cutMessage = (message) => {
        if(message.length > 30){
            return message.slice(0, 25) + "...";
        }
        return message
    }

    const handleOpenChat = (id) => {
        setChatId(id);
        localStorage.setItem("chatId", id);
    };


    return(
        <div className={chatCSS}>
            <div className={chatsCSS}>
                <ul className={listCSS}>
                    {db.map((chat, i) => (
                        <li key={chat.chatId} className={itemCSS} onClick={()=>handleOpenChat(chat.chatId)}>
                            <div className="flex group space-x-3">
                                <Avatar name={chat.chatName} colors={colors} variant="bauhaus" className={avatarCSS}/>
                                <div className="w-full">
                                    <h1 className={groupNameCSS}>{chat.chatName}</h1>
                                    <p className={groupMessageCSS}>
                                        {cutMessage(chat.lastMessage.content)}
                                    </p>
                                    <Separator className={separator1CSS}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div> 
            <Separator corientation="vertical" className={separator2CSS}/>
            {(chatId) && <Chat chatId={chatId}/>}
        </div>
    )
}
