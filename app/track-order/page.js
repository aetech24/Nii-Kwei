"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { FaCheckCircle, FaTruck } from "react-icons/fa"
import { FiPackage } from "react-icons/fi"
import Hero from '@/public/stores/hero.png'
import Image from 'next/image'


const page = () => {
  const searchParams = useSearchParams()
  const initialOrderNumber = searchParams.get("order") || ""
  const [orderNumber, setOrderNumber] = useState(initialOrderNumber)
  const [isTracking, setIsTracking] = useState(!!initialOrderNumber)

  const trackingSteps = [
    {
      label: "Order Placed",
      date: "January 19, 2024 2:30 PM",
      icon: <FaCheckCircle className="w-5 h-5" />,
      status: "completed",
    },
    {
      label: "Order Confirmed",
      date: "January 19, 2024 2:35 PM",
      icon: <FaCheckCircle className="w-5 h-5" />,
      status: "completed",
    },
    {
      label: "Shipped",
      date: "January 20, 2024 10:15 AM",
      icon: <FiPackage className="w-5 h-5" />,
      status: "completed",
    },
    {
      label: "In transit",
      date: "January 20, 2024 10:15 AM",
      icon: <FiPackage className="w-5 h-5" />,
      status: "completed",
    },
    {
      label: "Out for Delivery",
      date: "January 21, 2024 9:00 AM",
      icon: <FaTruck className="w-5 h-5" />,
      status: "current",
    },
    {
      label: "Delivered",
      date: "Pending",
      icon: <FaCheckCircle className="w-5 h-5" />,
      status: "upcoming",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsTracking(true)
  }

  return (
    <div className="w-full">
        <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[60vh] flex items-center justify-center w-full">
            <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
            </div>
        </div>
        <div className="max-w-5xl mx-auto bg-white relative -top-24 p-6 rounded-md border shadow-md">
        <div className="">
            <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>
            <p>Enter your order number to track your shipment</p>

            <form onSubmit={handleSubmit} className="mb-8 w-full py-6">
                <div className="flex items-center justify-between w-full gap-4">
                <input
                    placeholder="Enter your order number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                    className="w-full border p-3 rounded-md"
                />
                <button type="submit" className="bg-button px-6 py-3 text-white rounded-md">Track</button>
                </div>
            </form>
        </div>

      {isTracking && (
        <div>
        <div className="border rounded-lg p-6 mb-8 bg-gray-50">
          <div className="mb-6">
            <h2 className="font-semibold mb-2 text-xl">Order#{orderNumber}</h2>
            <p className="text-sm text-gray-600">Last updated: January 21, 2024 9:00 AM EST</p>
          </div>
            <div className="mt-8 py-6 border-t border-b flex flex-col gap-3">
                <div>
                    <h3 className="text-xl">Estimated Delivery:</h3>
                    <p className="text-gray-600">January 23, 2024</p> 
                </div>
                <div>
                    <h3 className="text-xl">Shipping Center</h3>
                    <p className="text-gray-600">FexED</p> 
                    <p className="text-gray-600">#26783</p> 
                    <p className="text-gray-600">890</p> 
                </div>
                <div>
                    <h3 className="text-xl">Current Location</h3>
                    <p className="text-gray-600">Accra, Greater Accra Region</p> 
                </div>
            </div>
            <div className="py-6 w-full">
                <h1 className="text-xl font-semibold py-3">Tracking Timeline</h1>
                <div className="w-full">
                    {trackingSteps.map((step, index) => (
                    <div key={index} className="flex gap-4 w-full">
                        <div
                        className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                        ${
                            step.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : step.status === "current"
                                ? "bg-purple-100 text-purple-600"
                                : "bg-gray-100 text-gray-400"
                        }
                        `}
                        >
                        {step.icon}
                        </div>
                        <div className="w-full">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center justify-between w-full">
                                <p className="font-medium">{step.label}</p>
                                <p className="text-sm text-gray-600">{step.date}</p>
                            </div>
                        </div>
                        {index < trackingSteps.length - 1 && <div className="ml-4 mt-2 h-6 border-l-2 border-dashed" />}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="w-full py-6">
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>

                <div className="flex justify-between mb-4">
                    <div className="flex">
                    <img
                        src=""
                        alt="Ministry Logo T-Shirt"
                        className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                        <h3 className="font-medium">Ministry Logo T-Shirt</h3>
                        <p className="text-sm text-gray-500">Size: M, Color: Black</p>
                        <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    </div>
                    <span className="font-medium">$20</span>
                </div>

                <div className="flex justify-between mb-4">
                    <div className="flex">
                    <img
                        src=""
                        alt="Inspirational Mug"
                        className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                        <h3 className="font-medium">Inspirational Mug</h3>
                        <p className="text-sm text-gray-500">Color: White</p>
                        <p className="text-sm text-gray-500">Quantity: 2</p>
                    </div>
                    </div>
                    <span className="font-medium">$20</span>
                </div>
            </div>
            </div>
            <p className="text-xl font-semibold py-2">Need Help ?</p>
            <button className="bg-button p-3 text-center w-full text-white rounded-md text-lg">Contact Us</button>
        </div>
      )}
      </div>
    </div>
  )
}

export default page