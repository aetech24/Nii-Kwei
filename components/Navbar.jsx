"use client";

import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="fixed w-full top-0 z-50 py-3 backdrop-blur-lg">
        <div className="container px-16 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center flex-shrink-0">
                    <Image src={logo} alt="" className='w-10'/>
                </Link>
                <ul className="hidden lg:flex ml-14 space-x-8 font-medium text-lg text-white">
                    <li className='hover:text-purple duration-300 ease-in'><Link href="/">Home</Link></li>
                    <li className='hover:text-purple duration-300 ease-in'><Link href="/about">About Us</Link></li>
                    <li className='hover:text-purple duration-300 ease-in'><Link href="/contact">Contact Us</Link></li>
                    <li className='hover:text-purple duration-300 ease-in'><Link href="/donation">Donations</Link></li>
                    <li className='hover:text-purple duration-300 ease-in'><Link href="/store">Store</Link></li>
                    <li className='hover:text-purple duration-300 ease-in'><Link href="/event">Events</Link></li>
                </ul>
                <div className="flex items-center gap-10 text-white">
                    <div>
                        <FaSearch className='text-xl'/>
                    </div>
                    <div>
                        <FaShoppingCart className='text-xl'/>
                    </div>
                </div>
                <div className="lg:hidden md:flex md:flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-2xl font-bold' /> : <CgMenu className='text-2xl font-bold' />}

                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-purple text-white bg-opacity-70">
                    <ul className='font-semibold text-lg'>
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link href="/">Home</Link></li> <hr className='w-60'/>
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link href="/about">About Us</Link></li> <hr className='w-60'/>
                        {/* <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link to="/pricing">Pricing</Link></li> <hr className='w-60'/> */}
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link href="/">Services</Link></li> <hr className='w-60'/>
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link href="/">Our Work</Link></li> <hr className='w-60'/>
                    </ul>
                    <div onClick={toggleNavbar} className=" my-10 flex lg:hidden text-white text-xl justify-center items-center bg-gradient-to-r from-pink to-purple rounded-3xl hover:scale-110 duration-500 ease-linear">
                    <Link to="/contact" className='md:py-2 py-1 px-2 md:px-4 flex items-center gap-2'>
                    Contact Us
                    <BsArrowUpRight />
                    </Link>
                </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar