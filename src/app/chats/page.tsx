// design better scroll bar
// selected chat should be highlighted
"use client";


import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import Avatar from "@/components/avatars/index.js";
import Chat from "./chat.tsx";
import { colors, chats } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import ChatBubble from "@/components/chat/index.tsx";


const cutMessage = (message) => {
    if(message.length > 30){
        return message.slice(0, 25) + "...";
    }
    return message
}

const section = (chat, i, handleOpenChat) => {
    const itemCSS = `
        w-64 
        cursor-pointer
    `;
    const avatarCSS = `
        w-12 h-12
        ease duration-700
        group-hover:rotate-[360deg]
    `;
    const chatNameCSS = `
        text-lg font-bold

    `;
    const descriptionCSS = `
        text-sm
    `;
    const separatorCSS = `
        h-1 w-full
        rounded-full
    `;



    return(
     <li key={chat.chatId} className={itemCSS} onClick={()=>handleOpenChat(chat.chatId)}>
        <div className="flex flex-col">
            <div className="flex group space-x-3 my-3">
                <Avatar name={chat.chatName} colors={colors} variant="bauhaus" className={avatarCSS}/>
                <div className="w-full space-y-1">
                    <h1 className={chatNameCSS}>{chat.chatName}</h1>
                    <p className={descriptionCSS}>
                        {cutMessage(chat.description)}
                    </p>
                </div>
            </div>
        </div>
        <Separator className={separatorCSS}/>
    </li>
    )
}


export default function Chats(){
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
        flex flex-col items-center
    `;
    const separatorCSS = `
        h-full w-1
    `;

    const handleOpenChat = (id) => {
        console.log("Hello World");
        setChatId(id);
        localStorage.setItem("chatId", id);
    };

    return(
        <div className={chatCSS}>
            <div className={chatsCSS}>
                <ul className={listCSS}>
                    {chats.map((chat, i) => (
                        section(chat, i, handleOpenChat)                       
                    ))}
                </ul>
            </div> 
            <Separator corientation="vertical" className={separatorCSS}/>
            {(chatId) && <ChatBubble chatId={chatId}/>}
        </div>
    )
}
