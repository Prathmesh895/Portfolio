"use client"
import React, { useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import Link from 'next/link';

function Page() {
    const [Comname, setComname] = useState('');
    const [Comcontact, setComcontact] = useState('')
    const [Comemail, setComemail] = useState('');
    const [Comlocation, setComLocation] = useState('');
    const [Comremarks, setComremarks] = useState('');
    const [Comcareerpage, setComCareerpage] = useState('')
    const [message, setMessage] = useState('');
    const [Comlinkedin, setComLinkedin] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [ComData, setComData] = useState([])
    // add Company contact 
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/company', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                  Comname,Comcontact,Comemail,Comcareerpage,Comlocation,Comremarks,Comlinkedin
                })
            })
            if (res.ok) {
                setMessage("Added Successfully");
                setTimeout(() => {
                    setMessage('');
                    setIsDialogOpen(false);
                }, 1000)
                console.log("Added Successfully");

            }
        } catch (error) {
            console.log("Error adding hrs contact")
        }
    }
    useEffect(() => {
        fetchContact()
    }, [])
    // fetch Company contact 
    const fetchContact = async () => {
        try {
            const res = await fetch("/api/company", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await res.json();
            setComData(data.CompanyContact);
        } catch (error) {
            console.log("Unable to fetch data")
        }
    }
    return (
        <section className='w-full'>
            {/* section for adding new Company contact  */}
            <div className='flex justify-between border-b py-4'>
                <h1 className='text-xl font-semibold dark:text-green'>Company List </h1>
                <div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline">Add new Company Contact</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add new Company Contact</DialogTitle>
                                <DialogDescription>
                                    {message &&
                                        <div className='text-green'>{message}</div>
                                    }
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleOnSubmit} className='flex flex-col space-y-3'>
                                <div>
                                    <Label htmlFor="Comname">Company name</Label>
                                    <Input id="Comname" type='text' className="" value={Comname} onChange={(e) => setComname(e.target.value)}
                                        placeholder="Company name" />
                                </div>
                                <div>
                                    <Label htmlFor="Comcontact">Enter Contact</Label>
                                    <Input id="Comcontact" type='number' value={Comcontact} onChange={(e) => setComcontact(e.target.value)}
                                        className="" placeholder="Contact" />
                                </div>
                                <div>
                                    <Label htmlFor="Comemail">Enter Email</Label>
                                    <Input id="Comemail" type="email" value={Comemail} onChange={(e) => setComemail(e.target.value)}
                                        className="" placeholder="Email" />
                                </div>
                                <div>
                                    <Label htmlFor="Comlinkedin">Enter Linkedin Url</Label>
                                    <Input id="Comlinkedin" type='text' className="" value={Comlinkedin} onChange={(e) => setComLinkedin(e.target.value)}
                                        placeholder="Enter Linkedin Url" />
                                </div>
                                <div>
                                    <Label htmlFor="Comcareerpage">Career page Url</Label>
                                    <Input id="Comcareerpage" type='text' className="" value={Comcareerpage} onChange={(e) => setComCareerpage(e.target.value)}
                                        placeholder="Career page Url" />
                                </div>
                                <div>
                                    <Label htmlFor="Comlocation">Location</Label>
                                    <Input id="Comlocation" type="text" value={Comlocation} onChange={(e) => setComLocation(e.target.value)}
                                        className="" placeholder="Location" />
                                </div>
                                <div>
                                    <Label htmlFor="Remarks">Remarks</Label>
                                    <Input id="Remarks" type="text" value={Comremarks} onChange={(e) => setComremarks(e.target.value)}
                                        className="" placeholder="Remarks" />
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Submit</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            {/* Table for showing Hrs contact list  */}
            <Table className="w-full">
                <TableCaption>A list of Companies and contact.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-auto">Sr.No</TableHead>
                        <TableHead className="w-auto">Company Name</TableHead>
                        <TableHead className="w-auto">Mobile</TableHead>
                        <TableHead className="w-auto">Email</TableHead>
                        <TableHead className="w-auto">Linkedin</TableHead>
                        <TableHead className="w-auto">Career Page</TableHead>
                        <TableHead className="w-auto">Location</TableHead>
                        <TableHead className="text-right w-auto">Remarks</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                       ComData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell className="font-medium">{data.Comname}</TableCell>
                                <TableCell>{data.Comcontact}</TableCell>
                                <TableCell className='text-blue'>{data.Comemail}</TableCell>
                                <TableCell className='dark:text-green'><Link href={data.Comlinkedin} target='_blank'>Linkedin</Link></TableCell>
                                <TableCell className='dark:text-green'><Link href={data.Comcareerpage} target='_blank'>Career</Link></TableCell>
                                <TableCell className=''>{data.Comlocation}</TableCell>
                                <TableCell className="text-right">{data.Comremarks}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    );
}

export default Page;
