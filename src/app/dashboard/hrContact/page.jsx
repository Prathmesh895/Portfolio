'use client'
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const ITEMS_PER_PAGE = 10;

function Page() {
    const [hrname, setHrName] = useState('');
    const [hrcontact, setHrcontact] = useState('');
    const [hremail, setHremail] = useState('');
    const [hrcomapany, setHrComapany] = useState('');
    const [hrlocation, setHrLocation] = useState('');
    const [hrremarks, setHrremarks] = useState('');
    const [message, setMessage] = useState('');
    const [hrlinkedin, setHrLinkedin] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [hrsData, setHrsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/hrscontact', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    hrname, hrcontact, hremail, hrcomapany, hrlocation, hrremarks, hrlinkedin
                })
            });
            if (res.ok) {
                setMessage("Added Successfully");
                setTimeout(() => {
                    setMessage('');
                    setIsDialogOpen(false);
                }, 1000);
                fetchContact();
            }
        } catch (error) {
            console.log("Error adding hrs contact");
        }
    };

    useEffect(() => {
        fetchContact();
    }, []);

    const fetchContact = async () => {
        try {
            const res = await fetch("/api/hrscontact", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await res.json();
            setHrsData(data.hrsContact);
        } catch (error) {
            console.log("Unable to fetch data");
        }
    };

    const totalPages = Math.ceil(hrsData.length / ITEMS_PER_PAGE);
    const filteredData = hrsData.filter(data =>
        data.hrname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.hrcomapany.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.hrlocation.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className='w-full'>
            {/* Section for adding new HRs contact */}
            <div className='flex justify-between border-b py-4'>
                <h1 className='text-xl font-semibold dark:text-green'>Contact List</h1>
                <div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline">Add new Contact</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add new HR Contact</DialogTitle>
                                <DialogDescription>
                                    {message && <div className='text-green'>{message}</div>}
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleOnSubmit} className='flex flex-col space-y-3'>
                                <div>
                                    <Label htmlFor="Hrname">Enter Name</Label>
                                    <Input id="Hrname" type='text' value={hrname} onChange={(e) => setHrName(e.target.value)} placeholder="Hr name" />
                                </div>
                                <div>
                                    <Label htmlFor="mobile">Enter Contact</Label>
                                    <Input id="mobile" type='number' value={hrcontact} onChange={(e) => setHrcontact(e.target.value)} placeholder="Contact" />
                                </div>
                                <div>
                                    <Label htmlFor="Hremail">Enter Email</Label>
                                    <Input id="Hremail" type="email" value={hremail} onChange={(e) => setHremail(e.target.value)} placeholder="Email" />
                                </div>
                                <div>
                                    <Label htmlFor="hrlinkedin">Enter Linkedin Url</Label>
                                    <Input id="hrlinkedin" type='text' value={hrlinkedin} onChange={(e) => setHrLinkedin(e.target.value)} placeholder="Linkedin Url" />
                                </div>
                                <div>
                                    <Label htmlFor="Companyname">Company name</Label>
                                    <Input id="Companyname" type="text" value={hrcomapany} onChange={(e) => setHrComapany(e.target.value)} placeholder="Company name" required />
                                </div>
                                <div>
                                    <Label htmlFor="Location">Location</Label>
                                    <Input id="Location" type="text" value={hrlocation} onChange={(e) => setHrLocation(e.target.value)} placeholder="Location" />
                                </div>
                                <div>
                                    <Label htmlFor="Remarks">Remarks</Label>
                                    <Input id="Remarks" type="text" value={hrremarks} onChange={(e) => setHrremarks(e.target.value)} placeholder="Remarks" />
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Submit</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            {/* Search Input */}
            <div className='flex justify-end my-4'>
                <Input
                    type="text"
                    placeholder="Search by name, company, or location"
                    className='w-1/2'
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to the first page on search
                    }}
                />
            </div>
            {/* Table for showing HRs contact list */}
            <Table className="w-full">
                <TableCaption>A list of HRs with company and contact.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-auto">Sr.No</TableHead>
                        <TableHead className="w-auto">Name</TableHead>
                        <TableHead className="w-auto">Mobile</TableHead>
                        <TableHead className="w-auto">Email</TableHead>
                        <TableHead className="w-auto">Linkedin</TableHead>
                        <TableHead className="w-auto">Company</TableHead>
                        <TableHead className="w-auto">Location</TableHead>
                        <TableHead className="text-right w-auto">Remarks</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedData.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</TableCell>
                            <TableCell className="font-medium">{data.hrname}</TableCell>
                            <TableCell>{data.hrcontact}</TableCell>
                            <TableCell className='text-blue'>{data.hremail}</TableCell>
                            <TableCell className='dark:text-green'><Link href={data.hrlinkedin} target='_blank'>Linkedin</Link></TableCell>
                            <TableCell>{data.hrcomapany}</TableCell>
                            <TableCell>{data.hrlocation}</TableCell>
                            <TableCell className="text-right">{data.hrremarks}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* Pagination controls */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious className='cursor-pointer' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    </PaginationItem>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink className='cursor-pointer' onClick={() => handlePageChange(index + 1)} isActive={currentPage === index + 1}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext className='cursor-pointer' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    );
}

export default Page;
