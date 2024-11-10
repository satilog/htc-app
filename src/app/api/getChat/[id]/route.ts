import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/models/supabase';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const body = await req.json();         
        const { id } = body;

        if (!id)
            return NextResponse.json({ message: 'Id are required.' }, { status: 400 });
   


            return NextResponse.json({ message: 'User added successfully', user: newUser }, { status: 201 });
    } 
    catch (error: any) {
        return NextResponse.json({ message: 'Error saving user', error: error.message }, { status: 500 });
  }
}
