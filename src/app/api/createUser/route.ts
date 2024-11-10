import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Get the JSON body from the request
        const { email, username, password, pronouns } = body;

        if (!email || !username || !password)
            return NextResponse.json({ message: 'Email, username, and password are required.' }, { status: 400 });
   

        await dbConnect(); // Connect to MongoDB

        // Create the new candidate object using the schema structure
        const newUser = new User({
            email,
            username,
            password,
            pronouns: pronouns || [] ,
        });

        // Save the new candidate in the database
        await newUser.save();

        // Return success response
        return NextResponse.json({ message: 'User added successfully', user: newUser }, { status: 201 });
  } 
    catch (error: any) {
        return NextResponse.json({ message: 'Error saving user', error: error.message }, { status: 500 });
  }
}
