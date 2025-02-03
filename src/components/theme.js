'use client'
import React, { useState } from 'react'
import { BsMoon } from "react-icons/bs";
import { BiSolidSun } from "react-icons/bi";
import { useTheme } from 'next-themes'
import { useEffect } from 'react';
import Image from "next/image"
function theme(){
    const[mounted,setMounted]=useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(()=>setMounted(true),[])

    if (!mounted) return (
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iM
          CIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy
          8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={36}
          height={36}
          sizes="36x36"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      )
    
      if (resolvedTheme === 'dark') {
        return < BiSolidSun size={30} onClick={() => setTheme('light')} />
      }
    
      if (resolvedTheme === 'light') {
        return <BsMoon size={26} onClick={() => setTheme('dark')} />
      }
}

export default theme

