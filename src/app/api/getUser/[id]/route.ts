import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

// GET job by id
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        // Connect to the MongoDB database
        await dbConnect();

        // Find the user by ID
        const user = await User.findById(id).lean();

        // If the job is not found, return a 404 response
        if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Return the job details
        return NextResponse.json({ job }, { status: 200 });
    } 
    catch (error: any) {
        return NextResponse.json({ message: "Error fetching user", error: error.message }, { status: 500 });
    }
}


