import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hero from '@/public/volunteer/hero.png'
import Volunteer from '@/public/volunteer/volunteer.png'
import Start from '@/public/volunteer/start.png'
import Banner from '@/public/banner.png'
import { opportunities, started, volunteer } from '@/constants/volunteer'

const page = () => {
  return (
    <div>
        <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[100vh] flex items-center justify-center w-full">
            <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
              <div className="w-full flex flex-col gap-5 justify-center text-white">
                <p className="text-lg relative pb-1">
                  Volunteer
                  <span className="absolute left-0 bottom-0 w-10 h-1 bg-violet-500"></span>
                </p>
                <h1 className='text-5xl font-semibold w-[50%] leading-tight'>Join Us in Making a Difference</h1>
                <p className='w-[60%]'>Your time and talents can transform lives. Become a volunteer today!</p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="/volunteer/apply">
                  <button className="bg-button border border-button py-2 px-6 text-lg rounded-md hover:bg-purple-600 transition duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-10 items-center px-20 py-10'>
            <Image src={Volunteer} alt="volunteer" width={700} height={500} />
            <div className='flex flex-col gap-4'>
                <h1 className="text-3xl font-semibold relative pb-1">
                Why Volunteer?
                <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
                </h1>
                <div className='flex flex-col gap-5 py-4'>
                    {volunteer.map((item, id) => {
                        return(
                            <div key={id} className='flex items-center gap-4'>
                                <Image src={item.image} alt='volunteer' width={80} height={80} />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-xl font-semibold'>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='px-20 py-10'>
            <h1 className="text-3xl font-semibold relative pb-1">
                Volunteer Opportunities
                <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
            </h1>
            <div className='grid grid-cols-3 gap-6 py-6'>
                {opportunities.map((item, id) => {
                    return(
                        <div key={id} className='border rounded-md flex flex-col gap-4 items-start p-4 shadow-md'>
                            <Image src={item.image} alt="opportunity" width={90} height={90} />
                            <p className='text-xl font-semibold'>{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='grid grid-cols-2 gap-10 items-center px-20 py-10'>
            <Image src={Start} alt="volunteer" width={700} height={500} />
            <div className='flex flex-col gap-4'>
                <h1 className="text-3xl font-semibold relative pb-1">
                How to Get Started
                <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
                </h1>
                <div className='flex flex-col gap-5 py-4'>
                    {started.map((item, id) => {
                        return(
                            <div key={id} className='flex items-center gap-4'>
                                <p className='w-[68px] h-[60px] flex items-center justify-center rounded-md bg-purple-500 text-white text-2xl font-bold'>{item.number}</p>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-xl font-semibold'>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className='py-3 px-6 bg-button text-center w-fit text-white rounded-md'>Apply Now</button>
            </div>
        </div>
        <div className="flex items-center justify-center w-full">
            <Image src={Banner} alt='banner' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 items-center justify-center text-white px-20'>
              <h1 className='text-5xl font-semibold w-[60%] text-center leading-none'>Ready to Make a Difference?</h1>
              <p className='w-[60%] text-center'>Join our team of dedicated volunteers and be part of something bigger than yourself.</p>
              <div className='flex items-center gap-8'>
                <Link href='/volunteer/apply' className="bg-button border text-white border-button py-2 px-8 text-lg rounded-md">Apply Now</Link>
                <button className="border border-white py-2 px-6 text-lg rounded-md">Contact Us</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page