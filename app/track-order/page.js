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
      label: "Order Confirmed",
      date: "January 19, 2024 2:30 PM",
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
        <div className="border rounded-lg p-6 mb-8">
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Order#{orderNumber}</h2>
            <p className="text-sm text-gray-600">Last updated: January 21, 2024 9:00 AM EST</p>
          </div>

          <div className="space-y-8">
            {trackingSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
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
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{step.label}</p>
                      <p className="text-sm text-gray-600">{step.date}</p>
                    </div>
                    {step.status === "current" && (
                      <span className="text-sm text-purple-600 font-medium">Current Status</span>
                    )}
                  </div>
                  {index < trackingSteps.length - 1 && <div className="ml-4 mt-2 h-12 border-l-2 border-dashed" />}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold mb-4">Shipping Details</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-600">Shipping Carrier:</span> Express Delivery
              </p>
              <p>
                <span className="text-gray-600">Tracking Number:</span> EX123456789GH
              </p>
              <p>
                <span className="text-gray-600">Estimated Delivery:</span> January 23, 2024
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default page