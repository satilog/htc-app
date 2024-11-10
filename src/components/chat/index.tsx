"use client";
import React from "react";
import Avatar from "@/components/avatars/index.js";
import { colors, chats } from "@/lib/utils";
import { useCommon } from "@/app/context/CommonContext";


const chatBubble = (messages: any, i: int) => {  
    const { user } = useCommon();
    const avatarCSS = `
        w-14 h-14
        chat-image avatar
    `;
    const messageCSS = `
        h-full w-full
    `;
    const messageLeftCSS = `
        chat chat-start
        ml-3
    `;
    const messageRightCSS = `
        chat chat-end 
        mr-3
    `;

    return(
       <div key={i} className={user.email !== messages.author.email ? messageLeftCSS : messageRightCSS}>
            <Avatar name={messages.author.username} colors={colors} variant="beam" className={avatarCSS} />
            <div className="chat-header flex items-center space-x-3">
                <h1 className="text-lg">{messages.author.username}</h1>
                <h1 className="text-md opacity-50">{messages.author.pronouns[0]}/{messages.author.pronouns[1]}</h1>
            </div>
            <div className="chat-bubble bg-gray-200 text-black text-xl">
                {messages.content}
            </div>
        </div>
    )    
};




export default function Chat(chatUrl: string){
    
    console.log("chatUrl", chatUrl);

    let obj;
    for (let i = 0; i < chats.length; i++){
        // dont tocuh vvvvvvvvvvvvvvvvvv
        if(chats[i].url === chatUrl.chat){
            obj = chats[i];
            console.log("found chat", obj);
            break;
        }
    }

    if(!obj){
        return <h1>Chat id doesnt exist</h1>
    }



    const chatCSS = `
        relative
        h-full w-full
        flex flex-col
    `;
    const headerCSS = `
        h-20 w-full
        bg-gray-100
        flex items-center
    `;
    
    const titleCSS = `
        w-full h-20
        flex items-center justify-center
        text-2xl font-bold
    `;

    const avatarCSS = `
        w-14 h-14
        ml-4
        ease duration-700
        hover:rotate-[360deg]
    `;

    const messagesCSS = `
        h-full w-full
        flex flex-col
    `;

    const inputAreaCSS = `
        input input-border 
        w-1/2 max-w-xs
        bg-gray-200
        text-gray-800
    `;

    const inputCSS = `
        h-20 w-full
        flex items-center justify-center
    `;

    return(
        <div className={chatCSS}>
            <div className={headerCSS}>
                <Avatar name={obj.chatId} colors={colors} variant="bauhaus" className={avatarCSS} />
                <div className={titleCSS}>
                    <h1>{obj.chatName}</h1>
                </div>
            </div>
            <div className={messagesCSS}>
                {obj.messages.map((message: any, i: int) => chatBubble(message, i))}
            </div>
            <div className={inputCSS}>
                <input type="text" placeholder="Type here" className={inputAreaCSS}/>
            </div>
        </div>
    )
}
