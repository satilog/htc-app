import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

// GET job by id
export async function GET(req: NextRequest, { params }: { params: { email: string } }) {
    const { email } = params;
    try {
        // Connect to the MongoDB database
        await dbConnect();

       const user = await User.findOne({
        email: email
       })
         if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ user }, { status: 200 });
    } 
    catch (error: any) {
        return NextResponse.json({ message: "Error fetching user", error: error.message }, { status: 500 });
    }
}


