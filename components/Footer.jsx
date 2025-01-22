import Image from 'next/image'
import React from 'react'
import Logo from "@/public/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-white w-full px-16'>
      <div className='grid grid-cols-4 pt-10 pb-24'>
        <Image src={Logo} alt='logo' />
        <div className='flex flex-col gap-3'>
          <h1 className='text-purple-500 text-xl font-semibold'>Quick Links</h1>
          <ul className='flex flex-col gap-2'>
            <li>About Us</li>
            <li>Shop Now</li>
            <li>Contact Us</li>
            <li>Donate Now</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-purple-500 text-xl font-semibold'>Stay Updated</h1>
          <ul className='flex flex-col gap-2'>
            <li>Newsletter Signup</li>
            <li>Latest News</li>
            <li>New Arrivals</li>
            <li>Exclusive Offers</li>
            <li>Special Deals</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-purple-500 text-xl font-semibold'>Subscribe</h1>
          <p>Join our newsletter to stay updated on new products and special promotions.</p>
          <div className='flex items-center gap-2'>
            <input type="email" placeholder='Enter your email' className='p-2 w-full border border-button placeholder:text-white/60 bg-transparent rounded-md' />
            <button className="border border-button py-2 px-4 text-button text-lg rounded-md">Subscribe</button>
          </div>
          <p>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
        </div>
      </div>
      <hr className='text-white bg-white'/>
      <div className='flex items-center justify-between pt-2 pb-4 text-white'>
        <div className='flex items-center gap-3 text-sm'>
          <p>&copy; 2024 Copyright. All Rights Reserved</p>
          <p className='underline cursor-pointer'>Privacy Policy</p>
          <p className='underline cursor-pointer'>Terms of Services</p>
          <p className='underline cursor-pointer'>Cookie Settings</p>
        </div>
        <div className='flex items-center gap-2 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>
    </div>
  )
}

export default Footer