import { ConnectDB } from "@/models/sender";
import Sender from "@/lib/connect";
import { NextResponse } from "next/server";


export async function POST (req){
    try {
        const {email,name,phone,subject,massege} = await req.json();
        await ConnectDB();

        await Sender.create({email,name,phone,subject,massege});
        return NextResponse.json({ message: "Messege send." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while Sending Message." }, { status: 500 });   
    }
}
export async function GET (req){
    try {
        await ConnectDB();
        const user=await Sender.find({});
        return NextResponse.json({user});
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while receiving Message." }, { status: 500 });      
    }
}
