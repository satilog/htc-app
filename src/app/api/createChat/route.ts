import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Chat from '@/models/Chat';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Get the JSON body from the request
        const { chatName, url, description } = body;

        if (!chatName || !description || !url)
            return NextResponse.json({ message: 'Chat name, url and description are required.' }, { status: 400 });
   
        await dbConnect(); // Connect to MongoDB

        // Create a new chat object
        const newChat = {
            chatName,
            url,
            messages: [],
            users: [],
            description,
        };

        // Save the new chat to the database
        await newChat.save();

        // Return success response
        return NextResponse.json({ message: 'Chat added successfully', data: newChat }, { status: 201 });
  } 
    catch (error: any) {
        return NextResponse.json({ message: 'Error saving chat', error: error.message }, { status: 500 });
  }
}