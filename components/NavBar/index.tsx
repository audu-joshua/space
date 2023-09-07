"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image'
import Logo from "@/public/images/Logo.png"
import {Barlow_Condensed} from 'next/font/google'
import { usePathname } from "next/navigation";
import styles from '@/styles/navbar.module.css'


const barlow = Barlow_Condensed({subsets: ['latin'], weight:'400'})


//const SelectedLabelClass = 'border-b-2 border-white border-solid'
//const [selectedLocation, setSelectedLoaction] = useState('');

//const handleLocationClick = (location: React.SetStateAction<string>) => {
  //setSelectedLoaction(location);
//}




export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  };

  const CloseNavbar = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  return (
    <div className={barlow.className}>
      {/* Mobile Manu */}
        <div className='flex fixed w-full justify-between p-6 bg-none md:hidden z-[10]'>
            <div>
              <Link href={'/'} className='cursor-pointer'>
                <Image src={Logo} alt='Logo'/>
              </Link>
            </div>
            <div className='text-4xl' onClick={toggleMenu}>
              {isOpen ? <FaTimes/> : <FaBars/> }    
            </div>  
        </div>

        {isOpen && (
          <div className='justify-end flex h-screen absolute w-full bg-transparent'> 
          <div className={`h-screen w-[70%] grid justify-center bg-white text-white bg-opacity-5 backdrop-blur-3xl ${styles.nav}`}>
            <ul className='pt-28'>
              <li className='py-4 text-base font-normal tracking-widest'>
                <Link href={'./'} onClick={CloseNavbar}><strong className='px-3 text-base font-bold'>00 </strong> Home </Link>
              </li>

              <li className='py-4 text-base font-normal tracking-widest'>
                <Link href={"/destination"} onClick={CloseNavbar}><strong className='px-3 font-bold'>01 </strong> Destination </Link>
              </li>

              <li className='py-4 text-base font-normal tracking-widest'>
                <Link href={"/crew"}><strong className='px-3 font-bold'>02 </strong> Crew </Link>
              </li>

              <li className='py-4 text-base font-normal tracking-widest'>
                <Link href={"/technology"}><strong className='px-3 font-bold'>03 </strong> Technology </Link>
              </li>
            </ul>
          </div>
          </div>
        )}

        {/* Tablet and Desktop Menu */}

        <div className='md:flex fixed w-full justify-between mt-4 bg-none hidden z-[10]'>
            <div className='p-4'>
              <Link href={'/'} className='cursor-pointer'>
                <Image src={Logo} alt='Logo' width={48} height={48}/>
              </Link>
            </div>
            <div className={` w-[70%] flex justify-center bg-white text-white bg-opacity-5 backdrop-blur-3xl p-4`}>
            <ul className='flex justify-between gap-8'>
              <li className='py-4 text-lg font-normal tracking-widest cursor-pointer'>
                <Link href={'./'} onClick={CloseNavbar} className={
              pathname === "/" ? "border-b-[2px] border-white pb-7" : ""
            }><strong className='px-3  text-base font-bold'>00 </strong> Home </Link>
              </li>

              <li className='py-4 text-lg font-normal tracking-widest'>
                <Link href={"/destination"} onClick={CloseNavbar} className={
              pathname === "/destination" ? "border-b-[2px] border-white pb-7" : ""
            }><strong className='px-3 font-bold'>01 </strong> Destination </Link>
              </li>

              <li className='py-4 text-lg font-normal tracking-widest cursor-pointer'>
                <Link href={"/crew"} className={
              pathname === "/crew" ? "border-b-[2px] border-white pb-7" : ""
            }><strong className='px-3 font-bold'>02 </strong> Crew </Link>
              </li>

              <li className='py-4 text-lg font-normal tracking-widest cursor-pointer'>
                <Link href={"/technology"} className={
              pathname === "/technology" ? "border-b-[2px] border-white pb-7" : ""
            }><strong className='px-3 font-bold'>03 </strong> Technology </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

