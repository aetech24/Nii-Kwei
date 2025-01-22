"use client"

import React, { useState } from "react"
import PaymentForm from "./PaymentForm"
import ConfirmationPage from "./ComfirmationPage"


const DonationForm = () => {
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
      <div className="flex flex-col gap-2">
        <label className="font-medium">Select Amount</label>
        <div className="grid grid-cols-2 gap-4">
          <p className="bg-gray-100 p-3 text-center rounded-md">$150</p>
          <p className="bg-gray-100 p-3 text-center rounded-md">$150</p>
          <p className="bg-gray-100 p-3 text-center rounded-md">$150</p>
          <p className="bg-gray-100 p-3 text-center rounded-md">$150</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <input type="number" name="" value="" placeholder="Custom Amount" className="border rounded-md p-2" />
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-medium">Frequency</label>
        <select className="border rounded-md p-3">
          <option className="bg-gray-100 p-3 rounded-md">$50</option>
          <option className="bg-gray-100 p-3 rounded-md">$100</option>
          <option className="bg-gray-100 p-3 rounded-md">$150</option>
          <option className="bg-gray-100 p-3 rounded-md">$200</option>
        </select>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="flex flex-col gap-4 py-10 font-medium">
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="guestName"
          placeholder="Your name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="guestEmail"
          placeholder="youremail@example.com"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>

      {/* Phone Number Field (Optional) */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">Phone Number (optional)</label>
        <input
          type="tel"
          name="guestPhoneNumber"
          placeholder="+233 123 456 789"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>

      {/* Dedication Field (Optional) */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">Dedication (optional)</label>
        <textarea
          name="guestDedication"
          placeholder="Your message here..."
          rows="4"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        ></textarea>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="flex flex-col gap-4">
      <PaymentForm />
    </div>
  )
  return (
    <div>
      {showConfirmation ? (
        <ConfirmationPage {...donationDetails} />
      ) : (
        <div className="max-w-4xl mx-auto p-6 my-10 border rounded-md">
          <h1 className="text-3xl font-semibold text-center py-4">Make A Donation</h1>
          <div className="flex items-center justify-center">
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
              {currentStep === 3 ? <button>Complete Donation</button> : "Continue"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DonationForm

