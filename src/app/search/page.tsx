"use client";
import React from 'react';
import Avatar from '@/components/avatars/index.js';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {colors, chats} from '@/lib/utils';
import Layout from '@/containers/Layout';

const MAX_AVATARS = 3;

const createCard = (chat) => {
    const avatars = []
    // get the first 5 users
    for (let i = 0; i < Math.min(MAX_AVATARS, chat.users.length); i++)
        avatars.push(chat.users[i].username)

    const emptyAvatarValue = chat.users.length - avatars.length > 99 ? "99" : chat.users.length - avatars.length
    
    const cardCSS = `
        relative
        min-w-24 max-w-64
        min-h-16 max-h-32
        bg-gray-100
        rounded-xl
        m-4 p-2 px-4
    `;
    const avatarGroupCSS = `
        avatar-group
        absolute 
        -bottom-5 -left-4
        -space-x-3
    `;
    const avatarCSS = `
        w-9 h-9
        ease duration-1000
        hover:rotate-[360deg] 
    `;
    const emptyAvatarCSS = `
        avatar placeholder
        border-none
        items-center justify-center
        w-9 h-9
        bg-gray-300
    `;
    const joinCSS = `
        absolute
        bottom-0 right-0
        py-1 px-3
        bg-rose-400
        font-medium
        rounded-xl
    `;
    const starCSS = `
        absolute
        -top-3 -right-3
        mask mask-star-2
        w-8 h-8
        bg-yellow-400
        rotate-[45deg]
    `;

    return(
        <div className={cardCSS}>
            {chat.recommanded && (<div className={starCSS}></div>)}
            <h1 className="text-3xl font-semibold">
                {chat.chatName}
            </h1>
            <div className={avatarGroupCSS}>
                {avatars.map((name, i) => (
                    <div key={i} className={avatarCSS}>
                        <Avatar name={name} colors={colors} variant="beam" className={avatarCSS}/>
                    </div>
                ))}
                {emptyAvatarValue != 0 && (<div className={emptyAvatarCSS}><span>+{emptyAvatarValue}</span> </div>)} 
            </div>
            <button className={joinCSS}>
                join
            </button>


            <div className="flex items-start mt-2 mx-1 mb-7 text-lg">
                {chat.description}
            </div>
        </div>
    )
}





export default function Search(){
    
    const containerCSS = `
        w-full h-max
        flex flex-wrap items-center justify-center
        overflow-y-auto
        p-2
    `;


    return(
        <Layout>
            <div className={containerCSS}>
                {chats.map((chat) => (
                    createCard(chat)
                ))}
            </div>
        </Layout>
    )
}
