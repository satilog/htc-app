"use client";

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState, useContext } from "react";
import {useCommon} from "@/app/context/CommonContext";

export const colors = ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"];
export const pronounArray = [
    'he', 'him', 'she', 'her', 'they', 'them', 'ze', 'zir', 'xe', 'xem', 'ey', 'em', 've', 'ver', 'per', 'per', 'it', 'other'

]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const useUser = () => {
    const {user, setUser} = useCommon();
    useEffect(() => {
        const userData = localStorage.getItem("user");
        if(userData)
            setUser(userData);
    }, []);
    return user;
}


export const chats = [
  
];
