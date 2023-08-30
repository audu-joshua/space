import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import Image from 'next/image'
import Logo from "@/public/images/Logo.png"

export function Navbar() {
  return (
    <div>
      {/* Mobile Manu */}
        <div className='flex fixed w-full justify-between p-6 bg-none md:hidden'>
            <div>
                <Image src={Logo} alt='Logo'/>
            </div>
            <div className='text-4xl'>
                <FaBars/>
            </div>
    
        </div>

    </div>
  )
}

