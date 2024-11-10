import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Chat from '@/models/Chat';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        // Connect to the MongoDB database
        await dbConnect();

        const fetchChat = await Chat.findById(id).populate('messages').populate('users');
        if (!fetchChat) {
            return NextResponse.json({ message: 'Chat not found' }, { status: 404 });
        }

        return NextResponse.json({ chat: fetchChat }, { status: 200 });

    } 
    catch (error: any) {
        return NextResponse.json({ message: 'Error saving user', error: error.message }, { status: 500 });
  }
}
