import React from 'react';
import Avatar from '@/components/avatars/index.js';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {colors, chats} from '@/lib/utils';
import {useState} from 'react';
import {useEffect} from 'react';

const MAX_AVATARS = 5;

const createCard = (chat, i) => {
    const avatars = []
    // get the first 5 users
    for (let i = 0; i < Math.min(5, chat.users.length); i++)
        avatars.push(chat.users[i].displayName)

    const emptyAvatarValue = chat.users.length - avatars.length > 99 ? "99+" : chat.users.length - avatars.length

    const bodyCSS = `
        relative
        min-w-20 max-w-64
        min-h-14 max-h-24 
        bg-gray-100
        rounded-xl
        m-4 p-2 px-4
    `;
    const avatarGroupCSS = `
        avatar-group
        absolute 
        -bottom-6 -left-4
        -space-x-3
    `;
    const avatarCSS = `
        w-8 h-8
    `;
    const emptyAvatarCSS = `
        avatar placeholder
        border-none
        items-center justify-center
        w-8 h-8
        bg-gray-300
    `;
//                 <Avatar name={chat.chatName} colors={colors} variant="bauhaus"  className={avatarCSS}/>

    return(
        <Dialog key={i}>
            <DialogTrigger className={bodyCSS}>
                <h1 className="text-2xl">
                    {chat.chatName}
                </h1>
                <div className={avatarGroupCSS}>
                    {avatars.map((name, i) => (
                        <div key={i}className={avatarCSS}>
                            <Avatar name={name} colors={colors} variant="beam" className={avatarCSS}/>
                        </div>
                    ))}
                    {emptyAvatarValue != 0 && 
                        (<div className={emptyAvatarCSS}>
                                <span>+{emptyAvatarValue}</span>      
                        </div>)
                    }  
:w
        </div>

            </DialogTrigger>

            <DialogContent>
                <DialogTitle>
                    {chat.chatName}
                </DialogTitle>

            </DialogContent>
        </Dialog>
    )
}





export default function Search(){
    
    const containerCSS = `
        w-full h-max
        flex flex-wrap
        overflow-y-auto
        p-2
    `;

    



    return(
        <div className={containerCSS}>
            {chats.map((chat, i) => (
                createCard(chat, i)
            ))}
        </div>
    )
}
