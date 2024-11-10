"use client";

import React from "react";
import { useState, useEffect } from "react";
import Avatar from "@/components/avatars/index.js";
import { colors } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import ChatBubble from "@/components/chat/index.tsx";
import Layout from "@/containers/Layout";
import { useCommon } from "@/app/context/CommonContext";

// Define TypeScript interfaces for better type safety
interface Chat {
    _id: string;
    chatId: string;
    chatName: string;
    description: string;
    url: string;
}

interface User {
    email: string;
}

const cutMessage = (message: string): string => {
    if (message?.length > 30) {
        return message.slice(0, 25) + "...";
    }
    return message || "";
};

const ChatSection = ({ 
    chat, 
    handleOpenChat,
    isSelected 
}: { 
    chat: Chat; 
    handleOpenChat: (id: string) => void;
    isSelected: boolean;
}): JSX.Element => {
    return (
        <li 
            key={chat.chatId} 
            className={`w-64 cursor-pointer p-2 rounded-lg ${
                isSelected ? 'bg-blue-100 dark:bg-blue-900' : ''
            }`}
            onClick={() => handleOpenChat(chat._id)}
        >
            <div className="flex flex-col">
                <div className="flex group space-x-3 my-3">
                    <Avatar 
                        name={chat.url} 
                        colors={colors} 
                        variant="bauhaus" 
                        className="w-14 h-14 ease duration-700 group-hover:rotate-[360deg]"
                    />
                    <div className="w-full space-y-1">
                        <h1 className="text-xl font-bold">{chat.chatName}</h1>
                        <p className="text-md">
                            {cutMessage(chat.description)}
                        </p>
                    </div>
                </div>
            </div>
            <Separator className="h-1 w-full rounded-full" />
        </li>
    );
};

export default function Page() {
    return (
        <Layout>
            <Chats />
        </Layout>
    );
}

function Chats() {
    const [chatId, setChatId] = useState<string | null>(null);
    const [chats, setChats] = useState<Chat[]>([]);
    const { user } = useCommon();

    const fetchChats = async () => {
        try {
            if (!user?.email) return;
            
            const res = await fetch(`/api/getChats/${user.email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!res.ok) {
                throw new Error('Failed to fetch chats');
            }

            const data = await res.json();
            setChats(data.chats);

            // Load saved chat ID from localStorage
            const saved = localStorage.getItem("chatId");
            if (saved) {
                setChatId(saved);
            }
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, [user?.email]); // Add dependency on user.email

    const handleOpenChat = (id: string) => {
        setChatId(id);
        localStorage.setItem("chatId", id);
    };

    return (
        <div className="w-full h-full flex">
            <div className="w-72 h-full">
                <ul className="h-full w-72 overflow-y-auto smooth-scroll flex flex-col items-center p-4 space-y-2">
                    {chats.map((chat) => (
                        <ChatSection
                            key={chat._id}
                            chat={chat}
                            handleOpenChat={handleOpenChat}
                            isSelected={chat._id === chatId}
                        />
                    ))}
                </ul>
            </div>
            <Separator orientation="vertical" className="h-full w-1" />
            {chatId && <ChatBubble chatId={chatId} />}
        </div>
    );
}