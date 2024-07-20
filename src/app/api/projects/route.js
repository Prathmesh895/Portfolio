import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';
import { ConnectDB } from "@/models/sender";
import ProjectSchema from "@/lib/projectschema";

export async function POST(req) {
    try {

        await ConnectDB();
        const formData = await req.formData();
        const pname = formData.get('pname');
        const ptechnologies = formData.get('ptechnologies');
        const pdescription = formData.get('pdescription');
        const purl = formData.get('purl');
        const pgithuburl = formData.get('pgithuburl');
        const pimage= formData.get('pimage');

        const buffer = Buffer.from(await pimage.arrayBuffer());
        const fileName = pimage.name;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');

        // Ensure the upload directory exists
        await fs.mkdir(uploadDir, { recursive: true });

        const filePath = path.join(uploadDir, fileName);

        // Save the file to the upload directory within the public directory
        await fs.writeFile(filePath, buffer);

        await ProjectSchema.create({ pname, ptechnologies, pdescription, purl, pgithuburl,pimage:fileName });

        return NextResponse.json({ message: "Project added successfully" }, { status: 201 });
    } catch (error) {

        console.log("Error while adding project");
        return NextResponse.json({ message: "Error while adding project" }, { status: 500 });

    }
}

export async function GET(req) {
    try {
        await ConnectDB();
        const Project = await ProjectSchema.find({});
        return NextResponse.json({ message: "Project data fetched successfully", Project }, { status: 201 })
    } catch (error) {
        console.log("Error while fetching project");
        return NextResponse.json({ message: "Error while fetching project" }, { status: 500 });
    }
}

export async function PATCH(){
    try {
        await ConnectDB();

    } catch (error) {
        console.log("Error while Updating project",error.message);
        return NextResponse.json({ message: "Error while Updating project" }, { status: 500 });
    }
}