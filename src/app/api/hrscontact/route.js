import { ConnectDB } from "@/models/sender";
import HRSCHEMA from "@/lib/hrschema";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {hrname,hrcontact,hremail,hrlinkedin,hrcomapany,hrlocation,hrremarks} = await req.json();
        await ConnectDB();
        await HRSCHEMA.create({hrname,hrcontact,hremail,hrlinkedin,hrcomapany,hrlocation,hrremarks});
        return NextResponse.json({ message: "Contact Created Successfully" }, { status: 201 })
    } catch (error) {
        console.error("Error adding hrs contact:", error);
        return NextResponse.json({ message: "An error occurred while adding hrs contact." }, { status: 500 });
    }
}

export async function GET(req){
    try {
        await ConnectDB();
        const hrsContact = await HRSCHEMA.find({});
        return NextResponse.json({message:'fetched successfully',hrsContact},{status:201})
    } catch (error) {
        console.error("Error fetching hrs contact:", error);
        return NextResponse.json({ message: "An error occurred while fetching hrs contact." }, { status: 500 });
    }
}