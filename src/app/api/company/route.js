import { NextResponse } from "next/server";
import { ConnectDB } from "@/models/sender";
import Company from "@/lib/companyschema";

export async function POST(req){
    try {
        const {Comname,Comcontact,Comemail,Comcareerpage,Comlocation,Comremarks,Comlinkedin}= await req.json();
        await ConnectDB();
        await Company.create({Comname,Comcontact,Comemail,Comcareerpage,Comlocation,Comremarks,Comlinkedin});
        return NextResponse.json({message:"Company detais added successfully"},{status:201})

    } catch (error) {
        console.error("Error adding Company detais", error);
        return NextResponse.json({ message: "An error occurred while adding Company detais" }, { status: 500 });
    }
}

export async function GET(req){
    try {
        await ConnectDB();
        const CompanyContact = await Company.find({});
        return NextResponse.json({message:'fetched successfully',CompanyContact},{status:201})
    } catch (error) {
        console.error("Error fetching Company Contact", error);
        return NextResponse.json({ message: "An error occurred while fetching CompanyContact contact." }, { status: 500 });
    }
}