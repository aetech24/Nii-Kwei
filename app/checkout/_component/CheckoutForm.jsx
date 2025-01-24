"use client"

import ConfirmationPage from "@/app/donation/_component/ComfirmationPage"
import React, { useState } from "react"
import CheckoutPaymentForm from "./PaymentForm"
import ReviewPage from "./Review"
import OrderConfirmation from "./OrderConfirmation"


const CheckoutForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    guestBirthDay: "",
    guestPhoneNumber: "",
    guestCountry: "",
    guestProfilePicture: null,
    guestFrontIdCard: null,
    guestBackIdCard: null,
    guestGovernmentIdType: "",
    guestGovernmentIdNumber: "",
    userRole: "guest-admin",
    userType: "guest",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [donationDetails, setDonationDetails] = useState({
    amount: 0,
    donor: "",
    transactionId: "",
    date: new Date().toLocaleDateString(),
  })

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Generate a random transaction ID
      const transactionId = `DON-${Math.random().toString().slice(2, 12)}`
      setDonationDetails({
        amount: 100, // Replace with actual amount from form
        donor: formData.guestName || "Anonymous", // Use form data
        transactionId,
        date: new Date().toLocaleDateString(),
      })
      setShowConfirmation(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const renderStep1 = () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4"></div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-medium">Contact Information</h1>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <label className="font-medium">Email</label>
                <input type="email" className="w-full p-3 rounded-md border" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-medium">Phone</label>
                <input type="email" className="w-full p-3 rounded-md border" />
            </div>
        </div>
        <h1 className="text-2xl font-medium mt-6">Shipping Address</h1>
        <div className="flex flex-col gap-3">
            <input type="text" className="w-full p-3 rounded-md border" placeholder="First Name" />
            <input type="text" className="w-full p-3 rounded-md border" placeholder="Last Name" />
            <input type="text" className="w-full p-3 rounded-md border" placeholder="Address" />
            <input type="text" className="w-full p-3 rounded-md border" placeholder="Apartment, suite etc. (optional)" />
            <input type="text" className="w-full p-3 rounded-md border" placeholder="City" />
            <input type="text" className="w-full p-3 rounded-md border" placeholder="State" />
            <input type="text" className="w-full p-3 rounded-md border" placeholder="Zip Code" />
            <select className="w-full p-3 rounded-md border">
                <option value="">Select Country</option>
                <option value="">Ghana</option>
                <option value="">Nigeria</option>
                <option value="">USA</option>
            </select>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="flex flex-col gap-4">
      <CheckoutPaymentForm />
    </div>
  )

  const renderStep3 = () => (
    <div className="flex flex-col gap-4">
      <ReviewPage />
    </div>
  )
  return (
    <div>
      {showConfirmation ? (
        <OrderConfirmation {...donationDetails} />
      ) : (
        <div className="w-full p-6 pt-10 -mt-32 border rounded-md bg-white">
            <h1 className="text-3xl font-semibold py-3">Checkout</h1>
          <div className="flex items-center justify-start">
            {/* Step 1 */}
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                  currentStep >= 1 ? "bg-purple-500" : "bg-gray-200"
                }`}
              >
                1
              </div>
              <div className={`h-1 w-16 ${currentStep >= 2 ? "bg-purple-500" : "bg-gray-200"}`} />
            </div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                  currentStep >= 2 ? "bg-purple-500" : "bg-gray-200"
                }`}
              >
                2
              </div>
              <div className={`h-1 w-16 ${currentStep >= 3 ? "bg-purple-500" : "bg-gray-200"}`} />
            </div>

            {/* Step 3 */}
            <div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                  currentStep >= 3 ? "bg-purple-500" : "bg-gray-200"
                }`}
              >
                3
              </div>
            </div>
          </div>

          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              className={`px-6 py-2 rounded-md ${
                currentStep === 1 ? "bg-gray-300 bg-opacity-0 text-transparent" : "text-black"
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button onClick={handleNext} className="px-10 py-2 bg-button text-white rounded-md">
              {currentStep === 3 ? <button>Place Order</button> : "Continue"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutForm

