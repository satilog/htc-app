import dbConnect from "@/lib/mongodb";
import Message from "@/models/Message";
import User from "@/models/User";
import Chat from "@/models/Chat";
import { NextRequest, NextResponse } from "next/server";

interface MessageRequest {
    message: string;
    userEmail: string;
}

interface UserResponse {
    user: {
        _id: string;
        username: string;
        pronouns: {
            subject: string;
            object: string;
            possessive: string;
            reflexive: string;
        };
    };
}

async function processUserMention(message: string): Promise<{ 
    isChanged: boolean; 
    processedMessage: string;
    replacements?: Array<{
        original: string;
        replaced: string;
        position: number;
        userId: string;
    }>;
}> {
    try {
        if (!message.includes('@')) {
            return { isChanged: false, processedMessage: message };
        }

        // Extract username, handling potential spaces and punctuation
        const mentionMatch = message.match(/@(\w+)/);
        if (!mentionMatch) {
            return { isChanged: false, processedMessage: message };
        }

        const mentionedUsername = mentionMatch[1];
        
        // Fetch user details
        const userResponse = await fetch(
            `http://localhost:3000/api/getUserByUsername/${mentionedUsername}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        if (!userResponse.ok) {
            console.log('Failed to fetch user:', await userResponse.text());
            return { isChanged: false, processedMessage: message };
        }

        const userData: UserResponse = await userResponse.json();
        
        if (!userData.user) {
            console.log('No user data returned');
            return { isChanged: false, processedMessage: message };
        }

        // Prepare the request body for pronoun processing
        const requestBody = {
            message_input: {
                content: message,
                timestamp: new Date().toISOString(),
                mentions: {
                    [userData.user._id]: {
                        startIndex: message.indexOf('@' + mentionedUsername),
                        endIndex: message.indexOf('@' + mentionedUsername) + mentionedUsername.length + 1
                    }
                }
            },
            users: {
                [userData.user._id]: {
                    userId: userData.user._id,
                    username: userData.user.username,
                    pronouns: userData.user.pronouns
                }
            }
        };

        const pronounsResponse = await fetch(
            'https://htc-app-server.vercel.app/openai/process_pronouns',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            }
        );

        if (!pronounsResponse.ok) {
            console.log('Failed to process pronouns:', await pronounsResponse.text());
            return { isChanged: false, processedMessage: message };
        }

        const pronounsResult = await pronounsResponse.json();
        
        if (!pronounsResult.processed) {
            return { isChanged: false, processedMessage: message };
        }

        return {
            isChanged: true,
            processedMessage: pronounsResult.processed.content,
            replacements: pronounsResult.processed.replacements
        };
    } catch (error) {
        console.error('Error processing user mention:', error);
        return { isChanged: false, processedMessage: message };
    }
}


export async function POST(
    req: NextRequest, 
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        
        if (!id) {
            return NextResponse.json(
                { message: 'Chat ID is required.' },
                { status: 400 }
            );
        }

        const body = await req.json() as MessageRequest;
        const { message, userEmail } = body;

        // Input validation
        if (!message?.trim()) {
            return NextResponse.json(
                { message: 'Message content is required.' },
                { status: 400 }
            );
        }

        if (!userEmail?.trim()) {
            return NextResponse.json(
                { message: 'User email is required.' },
                { status: 400 }
            );
        }

        // Connect to database
        await dbConnect();

        // Find user
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return NextResponse.json(
                { message: 'User not found.' },
                { status: 404 }
            );
        }

        // Verify chat exists
        const chat = await Chat.findById(id);
        if (!chat) {
            return NextResponse.json(
                { message: 'Chat not found.' },
                { status: 404 }
            );
        }

        // Process message for user mentions
        const { isChanged, processedMessage, replacements } = await processUserMention(message);

        // Create new message
        const newMessage = await Message.create({
            content: message,
            chatId: id,
            author: user._id,
            contentChange: isChanged,
            changedMessage: isChanged ? processedMessage : '',
            replacements: replacements || []  // Store replacements if available
        });

        // Update chat with new message
        await Chat.findByIdAndUpdate(
            id,
            { $push: { messages: newMessage._id } },
            { new: true }
        );

        return NextResponse.json(
            { 
                message: 'Message added successfully', 
                data: newMessage 
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { 
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}