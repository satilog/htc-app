"use client";
import React from "react";
import Avatar from "@/components/avatars/index.js";
import { colors, chats } from "@/lib/utils";
import { useCommon } from "@/app/context/CommonContext";
import { useState, useEffect, useRef } from "react";

const chatBubble = (messages: any, i: int) => { 
    const { user } = useCommon();
    const avatarCSS = `
        w-14 h-14
        chat-image avatar
    `;
    const messageLeftCSS = `
        chat chat-start
        ml-3
    `;
    const messageRightCSS = `
        chat chat-end 
        mr-3
    `;
    const p0 = messages?.author?.pronouns && messages?.author?.pronouns[0] || "";
    const p1 = messages?.author?.pronouns && messages?.author?.pronouns[1] || "";

    return(
       <div key={i} className={user.email !== messages.author.email ? messageLeftCSS : messageRightCSS}>
            <Avatar name={messages.author.username} colors={colors} variant="beam" className={avatarCSS} />
            <div className="chat-header flex items-center space-x-3">
                <h1 className="text-lg">{messages.author.username}</h1>
                {p0 && p1 && (
                    <h1 className="text-md opacity-50">{p0}/{p1}</h1>
                )}
                {((p0 && !p1) || (!p0 && p1)) && (
                    <h1 className="text-md opacity-50">{(p0 || p1)}</h1>
                )}
            </div>
            <div className={`chat-bubble text-black text-xl ${messages.contentChange === true ? 'bg-pink-200' : 'bg-gray-200'}`}>
                {messages.content}
            </div>
       </div>
    )    
};

export default function Chat(chatId: any){
    const { user } = useCommon();
    const [chat, setChat] = useState(null);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const create = async() => {
        const res = await fetch(`/api/getChat/${chatId.chatId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setChat(data.chat);
    };

    useEffect(() => {
        if(chatId.chatId)
            create();
    }, [chatId.chatId]);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        scrollToBottom();
    }, [chat?.messages]);

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

    const type = async(e) => {
        if(e.key === "Enter"){
            const res = await fetch(`/api/createMessage/${chatId.chatId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: e.target.value, userEmail: user.email }),
            });
            const data = await res.json();
            e.target.value = "";
            setChat((prev) => {
                return {
                    ...prev,
                    messages: [...prev.messages, data.data],
                };
            });
        }
    };

    return(
        <div className={chatCSS}>
            <div className={headerCSS}>
                <Avatar name={chat?.url} colors={colors} variant="bauhaus" className={avatarCSS} />
                <div className={titleCSS}>
                    <h1>{chat?.chatName}</h1>
                </div>
            </div>
            <div className="h-[90vh] overflow-y-auto" ref={chatContainerRef}>
                <div className={messagesCSS}>
                    {chat?.messages?.map((message: any, i: int) => chatBubble(message, i))}
                    <div ref={messagesEndRef} /> {/* Invisible element at the bottom */}
                </div>
            </div>
            <div className={inputCSS}>
                <input onKeyPress={(e) => type(e)} type="text" placeholder="Type here" className={inputAreaCSS}/>
            </div>
        </div>
    );
}