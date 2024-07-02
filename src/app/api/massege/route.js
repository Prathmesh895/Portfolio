import { ConnectDB } from "@/models/sender";
import Sender from "@/lib/connect";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, name, phone, subject, massege} = await req.json();
        await ConnectDB();

        await Sender.create({ email, name, phone, subject, massege});
        return NextResponse.json({ message: "Message sent." }, { status: 201 });
    } catch (error) {
        console.error("Error sending message:", error);
        return NextResponse.json({ message: "An error occurred while sending message." }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await ConnectDB();
        const users = await Sender.find({});
        return NextResponse.json({ users });
    } catch (error) {
        console.error("Error receiving messages:", error);
        return NextResponse.json({ message: "An error occurred while receiving messages." }, { status: 500 });
    }
}
