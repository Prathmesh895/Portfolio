import { ConnectDB } from "@/models/sender";
import MYLOGIN from "@/lib/myschema";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST (req){
    try {
        const {email,password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await ConnectDB();
        await MYLOGIN.create({email,password:hashedPassword});
        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while regidtering user." }, { status: 400 });   
    }
}