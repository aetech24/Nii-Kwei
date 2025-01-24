"use client";

import React, { useState } from "react";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Confirmation from "./Confirmation";
import Form4 from "./Form4";

const Volunteer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
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
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [donationDetails, setDonationDetails] = useState({
    amount: 0,
    donor: "",
    transactionId: "",
    date: new Date().toLocaleDateString(),
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Generate a random transaction ID
      const transactionId = `DON-${Math.random().toString().slice(2, 12)}`;
      setDonationDetails({
        amount: 100, // Replace with actual amount from form
        donor: formData.guestName || "Anonymous", // Use form data
        transactionId,
        date: new Date().toLocaleDateString(),
      });
      setShowConfirmation(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep1 = () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 text-3xl">Personal Details</div>
      <div className="flex flex-col gap-2">
        <label>Name</label>
        <input type="text" name="" value="" placeholder="Tom Kin" className="border rounded-md p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label>Email Address</label>
        <input type="email" name="" value="" placeholder="Tom Kin" className="border rounded-md p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label>Phone Number</label>
        <input type="text" name="" value="" placeholder="Tom Kin" className="border rounded-md p-2" />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="">
      <Form2 />
    </div>
  );

  const renderStep3 = () => (
    <div className="">
      <Form3 />
    </div>
  );

  const renderStep4 = () => (
    <div className="">
      <Form4 />
    </div>
  );

  return (
    <div>
      {showConfirmation ? (
        <Confirmation />
      ) : (
        <div className="w-full">
          <div className="flex items-center justify-start py-10">
            {/* Step Indicators */}
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                      currentStep >= step ? "bg-purple-500" : "bg-gray-200"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && <div className={`h-1 w-16 ${currentStep > step ? "bg-purple-500" : "bg-gray-200"}`} />}
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="p-6 border rounded-md mb-6">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

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
                {currentStep === 4 ? "Submit Application" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteer;
