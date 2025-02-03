'use client'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";

function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [pname, setPname] = useState('');
  const [ptechnologies, setPtechnologies] = useState('');
  const [pdescription, setPdescription] = useState('');
  const [purl, setPurl] = useState('');
  const [pgithuburl, setPgithuburl] = useState('');
  const [pimage, setImage] = useState('');
  const [projectData, setProjectData] = useState([])

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("pname", pname);
  formData.append("ptechnologies", ptechnologies);
  formData.append("pdescription", pdescription);
  formData.append("purl", purl);
  formData.append("pgithuburl", pgithuburl);
  formData.append("pimage", pimage);
  // Add new project
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/projects', {
        method: "POST",
        body: formData
      })
      if (res.ok) {
        setMessage("Added Successfully");
        setTimeout(() => {
          setMessage('');
          setIsDialogOpen(false);
        }, 1000);
        // Reset form fields
        setPname('');
        setPtechnologies('');
        setPdescription('');
        setPurl('');
        setPgithuburl('');
        setImage('');

        fetchProjects(); // Refresh the project list
      } else {
        setMessage("Failed to add project");
      }
    } catch (error) {
      console.log("Error adding project", error);
      setMessage("Error adding project");
    }
  }

  // Fetch project data
  useEffect(() => {
    fetchProjects();
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      setProjectData(data.Project);
    } catch (error) {
      console.log("Unable to fetch project data", error);
    }
  }

  return (
    <section>
      <div className='flex justify-between'>
        <h1>Projects</h1>
        {/* form for adding new project details */}
        <div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Add new Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add new Project</DialogTitle>
                <DialogDescription>
                  {message && <div className='text-green'>{message}</div>}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleOnSubmit} className='flex flex-col space-y-3'>
                <div>
                  <Label htmlFor="Projectname">Enter Project Name</Label>
                  <Input id="Projectname" type='text' value={pname} onChange={(e) => setPname(e.target.value)} placeholder="Project name" />
                </div>
                <div>
                  <Label htmlFor="Technologies">Enter Technologies</Label>
                  <Input id="Technologies" type='text' value={ptechnologies} onChange={(e) => setPtechnologies(e.target.value)} placeholder="e.g. Next.js, Tailwind CSS, MongoDB" />
                </div>
                <div>
                  <Label htmlFor="Description">Enter Description</Label>
                  <Input id="Description" type="text" value={pdescription} onChange={(e) => setPdescription(e.target.value)} placeholder="Description" />
                </div>
                <div>
                  <Label htmlFor="ProjectUrl">Enter Project URL</Label>
                  <Input id="ProjectUrl" type='text' value={purl} onChange={(e) => setPurl(e.target.value)} placeholder="Project URL" />
                </div>
                <div>
                  <Label htmlFor="GithubUrl">Enter Github URL</Label>
                  <Input id="GithubUrl" type="text" value={pgithuburl} onChange={(e) => setPgithuburl(e.target.value)} placeholder="Github URL" required />
                </div>
                <div>
                  <Label htmlFor="GithubUrl">Upload Image</Label>
                  <Input id="GithubUrl" type="file" onChange={handleFileChange} required />
                </div>
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* fetching project deatils and showing */}
      <div className='lg:grid grid-cols-2 gap-4 m-5'>
        {projectData.map((data, index) => (
          <div className='border border-gray-700 rounded-md shadow-lg p-5 py-7 px-5 flex flex-col justify-center space-y-2 lg:my-0 my-5 scale-100 hover:scale-100' key={index}>
            <Image src={`/uploads/${data.pimage}`} width={550} height={100} alt='Project image'/>
            <h1 className='lg:text-xl'>{data.pname}</h1>
            <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
            <ul className='flex space-x-2'>
              {data.ptechnologies.split(',').map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div>{data.pdescription}</div>
            <div className='flex justify-between mt-2'>
              <Link href={data.purl} target='_blank' className='flex items-center'>
                Project Link <FiExternalLink className='ml-1' />
              </Link>
              <Link href={data.pgithuburl} target='_blank' className='flex items-center'>
                Github Link <FiExternalLink className='ml-1' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page;
