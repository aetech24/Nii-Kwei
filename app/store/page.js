import React from 'react'
import Hero from '@/public/stores/hero.png'
import Banner from '@/public/stores/banner.png'
import Image from 'next/image'
import { category } from '@/constants/store'
import StoreCard from './_component/StoreCard'

const page = () => {
  return (
    <div>
        <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[90vh] flex items-center justify-center w-full">
            <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
              <div className="w-full flex flex-col gap-5 justify-center text-white">
                <p className="text-lg relative pb-1">
                  Shop
                  <span className="absolute left-0 bottom-0 w-10 h-1 bg-violet-500"></span>
                </p>
                <h1 className='text-5xl font-semibold w-[65%] leading-tight'>Shop Nii Kwei Ministry Merchandise</h1>
                <p className='w-[60%]'>Explore our collection of ministry-branded apparel, accessories, and digital products. Every purchase supports our mission to transform lives through worship and service</p>
              </div>
              <div className="flex items-center gap-6">
                <button className="bg-button border border-button py-2 px-6 text-lg rounded-md">Shop Now</button>
              </div>
            </div>
        </div>
        <div className="h-20 flex items-center justify-center w-full">
            <Image src={Banner} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col items-center gap-5 justify-center text-white px-20'>
                <p className='absolute text-white text-xl'>First-time shopper? Get 10% off your order with code WELCOME10</p>
            </div>
        </div>
        <div className="py-10 px-20 flex flex-col gap-6">
            <h1 className="text-3xl font-semibold relative pb-1">
              Categories
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
            </h1>
            <div className='grid grid-cols-3 gap-6'>
                {category.map((item, id) => {
                    return (
                        <div key={id} className='relative rounded-md'>
                            <Image src={item.image} alt="category" className='object-cover rounded-md'/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-100 hover:opacity-0"></div>
                            <div className="absolute bottom-0 left-0 p-2 md:p-4 text-white">
                                <h3 className="text-xl font-semibold">{item.category}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="py-10 px-20">
            <h1 className="text-3xl font-semibold relative pb-1">
              New Arrivals
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
            </h1>
            <StoreCard />
        </div>
    </div>
  )
}

export default page