import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Chat from "@/models/Chat";

export async function GET(
    req: NextRequest,
    { params }: { params: { url: string } }
) {
    try {
        const url = req.headers.get("url");
        
        if (!url) {
            return NextResponse.json(
                { error: "Url is required" },
                { status: 400 }
            );
        }

        await dbConnect();

        const chat = await Chat.findOne({
            url: url
        });

        if (!chat) {
            return NextResponse.json(
                { error: "Chat not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ chat }, { status: 200 });
    } catch (error) {
        console.error("Error fetching chat:", error);
        return NextResponse.json(
            { error: "Error fetching chat" },
            { status: 500 }
        );
    }
}