"use client";

import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [cartCount] = useState(0); // Update cart count dynamically as per your state
    const pathname = usePathname(); // Get the current route

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="fixed w-full top-0 z-50 py-3 backdrop-blur-lg bg-black bg-opacity-20">
            <div className="container px-16 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center flex-shrink-0">
                        <Image src={logo} alt="" className="w-10" />
                    </Link>
                    <ul className="hidden lg:flex ml-14 space-x-8 font-medium text-lg text-white">
                        {["/", "/about", "/contact", "/donation", "/store", "/event"].map((link, index) => (
                            <li
                                key={index}
                                className={`hover:text-purple duration-300 ease-in ${
                                    pathname === link ? "text-purple-500 underline" : ""
                                }`}
                            >
                                <Link href={link}>
                                    {link === "/" ? "Home" : link.replace("/", "").replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-10 text-white relative">
                        <div>
                            <FaSearch className="text-xl" />
                        </div>
                        <Link href="/cart" className="relative">
                            <FaShoppingCart className="text-xl" />
                            {cartCount >= 0 && (
                                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                    <div className="lg:hidden md:flex md:flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? (
                                <AiOutlineClose className="text-2xl font-bold" />
                            ) : (
                                <CgMenu className="text-2xl font-bold" />
                            )}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-purple text-white bg-opacity-70">
                        <ul className="font-semibold text-lg">
                            {["/", "/about", "/contact", "/donation", "/store", "/event"].map((link, index) => (
                                <li
                                    key={index}
                                    onClick={toggleNavbar}
                                    className={`hover:text-purple duration-300 ease-in py-3 text-center ${
                                        pathname === link ? "text-purple underline" : ""
                                    }`}
                                >
                                    <Link href={link}>
                                        {link === "/" ? "Home" : link.replace("/", "").replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div
                            onClick={toggleNavbar}
                            className="my-10 flex lg:hidden text-white text-xl justify-center items-center bg-gradient-to-r from-pink to-purple rounded-3xl hover:scale-110 duration-500 ease-linear"
                        >
                            <Link href="/contact" className="md:py-2 py-1 px-2 md:px-4 flex items-center gap-2">
                                Contact Us
                                <BsArrowUpRight />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
