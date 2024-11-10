import React from "react";
import Avatar from "@/components/avatars/index.js";
import colors from "@/lib/utils";
import db from "./db.js";

export default function Chat(chatId: string){

    let obj;
    for (let i = 0; i < db.length; i++){
        if(db[i].chatId === chatId.chatId){
            obj = db[i];
            break;
        }
    }
    
    console.log(obj);


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

    return(
        <div className={chatCSS}>
            <div className={headerCSS}>
                <Avatar name={obj.chatName} colors={colors} variant="bauhaus" className={avatarCSS} />
                <div className={titleCSS}>
                    <h1>{obj.chatName}</h1>
                </div>
            </div>
        </div>
    )
}
