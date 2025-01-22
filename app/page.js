import React from 'react'
import Hero from '@/public/Home-hero.png'
import About from '@/public/about.png'
import Deco from '@/public/decor.png'
import Banner from '@/public/banner.png'
import Image from 'next/image'
import EventCard from '@/components/EventCard'
import StoreCard from './store/_component/StoreCard'
import SermonCard from '@/components/SermonCard'
import FeaturedProducts from '@/components/FeaturedProducts'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[100vh] flex items-center justify-center w-full">
            <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
              <div className="w-full flex flex-col gap-5 justify-center text-white">
                <p className="text-lg relative pb-1">
                  Welcome to Nii Kwei Ministries
                  <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
                </p>
                <h1 className='text-5xl font-semibold w-[70%] leading-tight'>Transforming Lives Through Worship and Service.</h1>
                <p className='w-[60%]'>Join us as we build a vibrant community rooted in faith, hope, and love. Explore our inspiring resources, including devotionals, apparel, and more, to support your spiritual journey</p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="/store">
                  <button className="bg-button border border-button py-2 px-6 text-lg rounded-md hover:bg-purple-600 transition duration-300">
                    Shop Now
                  </button>
                </Link>
                <button className="border border-white py-2 px-6 text-lg rounded-md">Learn More</button>
              </div>
            </div>
        </div>
        <div className='grid grid-cols-2 items-center gap-16 px-20 py-10'>
          <Image src={About} alt="about" />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold relative pb-1">
              About Nii Kwei Ministries
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
            </h1>
            <p className='text-lg'>We are a dynamic ministry dedicated to spreading the gospel through worship, outreach, and community service. Our mission is to transform lives and make a lasting impact in our community and beyond.</p>
            <button className="bg-button border border-button py-2 px-6 text-lg rounded-md text-white w-fit">Read More</button>
          </div>
        </div>
        <div className='flex flex-col items-center py-6'>
          <h1 className="text-3xl font-semibold relative pb-1">
            Upcoming Events
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
          </h1>
          <EventCard />
          <button className='text-button'>View All Events {">"}</button>
        </div>
        <div className='flex flex-col gap-4 px-16 py-10 w-full items-center'>
          
          <FeaturedProducts />
        </div>
        <div className='relative'>
          <Image src={Deco} alt="deco" className='absolute top-0 left-0 w-48'/>
          <div className='flex flex-col gap-4 items-center py-24 px-16'>
            <h1 className="text-3xl font-semibold relative pb-1">
              Recent Sermons
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
            </h1>
            <SermonCard />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
            <Image src={Banner} alt='banner' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 items-center justify-center text-white px-20'>
              <h1 className='text-5xl font-semibold w-[40%] text-center leading-none'>Get Involved And A Difference</h1>
              <p className='w-[60%] text-center'>Join our community of passionate volunteers and help us transform lives through service and worship.</p>
              <button className="bg-button border text-white border-button py-2 px-8 text-lg rounded-md">Volunteer</button>
            </div>
        </div>
        <div className='flex flex-col gap-6 items-center py-12 px-16'>
          <h1 className="text-3xl font-semibold relative pb-1">
            Where We Are Located
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
          </h1>
          <iframe className='w-full rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6260413691666!2d-0.1759250258576224!3d5.622100294358928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0062aad%3A0x75de9717e31b2442!2sAccra%20Mall!5e0!3m2!1sen!2sgh!4v1737340962099!5m2!1sen!2sgh" width={1100} height={450} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default page