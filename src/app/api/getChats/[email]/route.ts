import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Chat from '@/models/Chat';
import User from '@/models/User';
import mongoose from 'mongoose';

export async function GET(req: NextRequest, { params }: { params: { email: string } }) {
    const { email } = params;
    
    if (!email) {
        return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    console.log('Email:', email);

    try {
        // Connect to the MongoDB database
        await dbConnect();

        // First find the user to get their _id
        const currentUser = await User.findOne({ email: email });
        
        if (!currentUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Use the user's _id to find their chats
        const fetchChats = await Chat.find({
            users: { $in: [currentUser._id] }  // Using $in operator to find chats where user's ID is in the users array
        })

        if (!fetchChats || fetchChats.length === 0) {
            return NextResponse.json({ 
                success: true,
                message: 'No chats found',
                chats: [] 
            }, { status: 200 });
        }

        return NextResponse.json({ 
            success: true,
            chats: fetchChats 
        }, { status: 200 });

    } catch (error: any) {
        console.error('Get chat error:', error);
        return NextResponse.json({ 
            success: false,
            message: 'Error fetching chats', 
            error: error.message 
        }, { status: 500 });
    }
}