//Making this component client side
"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from "next/link";
function Header() {
    const path=usePathname();

    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        <Image src={'/logo.svg'} width={50} height = {10} alt = 'logo'/>
        <ul className='hidden md:flex gap-6'>
          <Link href={`/dashboard`}>
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
        </Link>
            <Link href={`/dashboard/questions`}>
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
        </Link>
        <Link href={`/dashboard/upgrade`}>
          <li className={`hover:text-primary hover:font-bold transition-all  cursor-pointer${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
        </Link>
        <Link href={`/dashboard/how`}>
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold'}`}>How it works</li>
        </Link>
            
            
            
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header