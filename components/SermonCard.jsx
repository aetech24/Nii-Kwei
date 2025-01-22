import { sermon } from '@/constants/sermon'
import Image from 'next/image'
import React from 'react'

const SermonCard = () => {
  return (
    <div className='grid grid-cols-3 gap-10 py-4'>
        {sermon.map((item, id) => {
            return(
                <div key={id} className='shadow-lg rounded-md'>
                    <Image src={item.image} alt="video" className='rounded-t-md'/>
                    <div className='flex flex-col gap-2 p-3'>
                        <h1 className="text-xl font-semibold">{item.title}</h1>
                        <p>{item.description}</p>
                        <div className='flex items-center gap-2'>
                            <Image src={item.avatar} alt="avatar" className='w-16 h-16'/>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default SermonCard