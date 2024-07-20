'use client';
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
function Page() {
  const [file, setFile] = useState("");
  const [des, setDes] = useState("");
  const [resumsData, setResumesData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [message, setMessage] = useState('');

  // for adding new resume 
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        return;
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", des); // Including the description

      const res = await fetch("/api/resumes", {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data);
      setMessage("Added Successfully");
    } catch (error) {
      console.error("Error:", error.message);
      setMessage("Error adding resume");
    }
  };
  // for adding file onChange 
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // for fetching data from data base for resume
  useEffect(() => {
    handleOnfetch();
  }, [])
  const handleOnfetch = async () => {
    try {
      const res = await fetch("/api/resumes");

      if (res.ok) {
        console.log('Data fetched successfully')
        const data = await res.json();
        setResumesData(data.resumesData);

      }
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(resumsData);
  return (
    <>
      <div className='flex justify-between m-5'>
        <h1>Resumes</h1>
        {/* form for adding new project details */}
        <div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Add new Resume</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add new Resume</DialogTitle>
                <DialogDescription>
                  {message && <div className='text-green'>{message}</div>}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleOnSubmit}>
                {/* input field for file  */}
                <div className='flex flex-col my-5'>
                  <label htmlFor="file">Select File</label>
                  <input type="file" id="file" onChange={handleFileChange} />
                </div>
                {/* input field for file description  */}
                <div className='flex flex-col'>
                  <label htmlFor="des">Description</label>
                  <input
                    type="text"
                    id="des"
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                  />
                </div>
                <button className='border px-3 w-full py-2.5 my-5 rounded bg-green'>
                  Submit
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* showing resumes Data */}

      {
        resumsData.map((data, index) => (
          <>
            <div className='flex justify-between m-5' key={index}>
              <p>{index+1}</p>
              <p>{data.title}</p>
              <p className='cursor-pointer' onClick={() => { window.open(`/resumes/${data.pdf}`, '_blank') }}>Show Resume</p>
            </div>

          </>
        ))
      }
    </>
  );
}

export default Page;
const handleDownload = () => {
  window.open('/Prathmesh-Gatade.pdf', '_blank');
};