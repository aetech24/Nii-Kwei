import Image from 'next/image'
import React from 'react'
import Hero from '@/public/donate/hero.png'
import Banner from '@/public/donate/banner.png'
import { give, impact } from '@/constants/donation'
import DonationForm from './_component/DonationForm'

const page = () => {
  return (
    <div>
        <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[100vh] flex items-center justify-center w-full">
            <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
              <div className="w-full flex flex-col gap-5 justify-center text-white">
                <p className="text-lg relative pb-1">
                  Donation
                  <span className="absolute left-0 bottom-0 w-10 h-1 bg-violet-500"></span>
                </p>
                <h1 className='text-5xl font-semibold w-[55%] leading-tight'>Partner With Us To Transform Lives</h1>
                <p className='w-[57%]'>Your generosity helps us spread the Gospel, serve communities, and empower believers worldwide.</p>
              </div>
              <div className="flex items-center gap-6">
                <button className="bg-button border border-button py-2 px-6 text-lg rounded-md">Donate Now</button>
              </div>
            </div>
        </div>
        <div className="h-[55vh] flex items-center justify-center w-full">
            <Image src={Banner} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
                <h1 className="text-3xl font-semibold relative pb-1 py-10">
                    Your Impact
                    <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
                </h1>
                <div className='grid grid-cols-4 gap-6'>
                    {impact.map((item, id) => {
                        return (
                            <div key={id} className='flex flex-col gap-3 items-center text-black bg-white p-4 rounded-md'>
                                <Image src={item.image} alt="family" className='w-24' />
                                <h1 className='text-xl font-semibold'>{item.number}</h1>
                                <p className='text-center text-sm'>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='px-16'>
            <DonationForm />
        </div>
        <div className="h-[75vh] flex items-center justify-center w-full">
            <Image src={Banner} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
                <h1 className="text-3xl font-semibold relative pb-1 py-10">
                    Why Give?
                    <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
                </h1>
                <p>Your support enables us to:</p>
                <div className='grid grid-cols-3 gap-6'>
                    {give.map((item, id) => {
                        return (
                            <div key={id} className='flex flex-col items-center text-black bg-white p-4 rounded-md'>
                                <Image src={item.image} alt="family" className='w-24' />
                                <p className='text-sm text-center'>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-3 w-full items-center'>
                    <p>Every gifts, no matter the size, makes the difference</p>
                    <button className="bg-button border border-white py-2 px-6 text-lg rounded-md text-white w-fit">Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page