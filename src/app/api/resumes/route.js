import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { ConnectDB } from '@/models/sender';
import PdfS from '@/lib/pdf';

export const POST = async (req) => {
  try {
    await ConnectDB();

    const formData = await req.formData();
    const file = formData.get('file');
    const description = formData.get('description');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Get the file data
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;
    const uploadDir = path.join(process.cwd(), 'public', 'resumes');
    
    // Ensure the upload directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, fileName);

    // Save the file to the upload directory within the public directory
    await fs.writeFile(filePath, buffer);

    // Save file name and description to the database
    const newPdf = new PdfS({
      pdf: fileName,
      title: description
    });

    await newPdf.save();

    return NextResponse.json({ message: 'File uploaded and data saved successfully', fileName }, { status: 200 });
  } catch (error) {
    console.error('Error:', error.message);
    return NextResponse.json({ error: 'Failed to save file or data' }, { status: 500 });
  }
};


export async function GET(req){
  try {
    await ConnectDB();
    const resumesData = await PdfS.find({});
    return NextResponse.json({message:"Data fetched successfully",resumesData},{status:200})
  } catch (error) {
    console.log("Enable to fetch data",error.message);
    return NextResponse.json({ error: 'Failed to fetch file or data' }, { status: 500 });

  }
}