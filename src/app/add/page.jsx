'use client';
import React, { useState } from 'react';

function Page() {
  const [file, setFile] = useState("");
  const [des, setDes] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(des);
    console.log(file);
    try {
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", des); // Including the description

      const res = await fetch("/api/uploads", {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log(data);

    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className='mt-20 min-h-96 m-5'>
      <form onSubmit={handleOnSubmit}>
        <div className='flex flex-col my-5'>
          <label htmlFor="file">Select File</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
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
    </div>
  );
}

export default Page;
