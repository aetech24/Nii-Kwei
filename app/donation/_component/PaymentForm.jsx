"use client"

import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="p-6 bg-white">
      {/* Secured Payment Header */}
      <div className="mb-6 bg-purple-50 flex flex-col gap-2 rounded-md">
        <h2 className="text-lg font-semibold text-gray-800 p-4 gap-4 flex items-center">
            <IoLockClosedOutline className="text-4xl flex items-center gap-4 text-purple-500" /> 
            <div className="flex flex-col gap-1">
                <p>Secured Payment</p>
                <p className="text-sm text-gray-500">
                Your payment information is encrypted and secure.
                </p>
            </div>
        </h2>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Payment Method
        </label>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between border p-3 rounded-md">
            <div className="flex items-center cursor-pointer gap-2">
                <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
                />
                <label htmlFor="creditCard" className="flex items-center">
                Credit/Debit Card 
                </label>
            </div>
            <p className="ml-2">💳</p>
          </div>
          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center cursor-pointer gap-3">
                <input
                type="radio"
                id="bankTransfer"
                name="paymentMethod"
                value="bankTransfer"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
                />
                <label htmlFor="bankTransfer" className="flex items-center">
                Bank Transfer 
                </label>
            </div>
            <p className="ml-2">🏦</p>
          </div>
          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center cursor-pointer gap-3">
                <input
                type="radio"
                id="paystack"
                name="paymentMethod"
                value="paystack"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
                />
                <label htmlFor="paystack" className="flex items-center">
                Paystack
                </label>
            </div>
            <p className="ml-2">💳</p>
          </div>
        </div>
      </div>

      {/* Conditional Payment Form */}
      {paymentMethod === "creditCard" && (
        <div className="mt-6">
          <label className="block font-medium text-gray-700 mb-2">
            Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="border rounded-lg w-full px-4 py-2 mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="border rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                className="border rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>

          <label className="block font-medium text-gray-700 mt-4 mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="Tom Kofi"
            className="border rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>
      )}

      {paymentMethod === "bankTransfer" && (
        <div className="flex flex-col gap-4">
            <div className="mt-6 bg-gray-50 p-5 flex-col flex gap-4 rounded-md">
            <p className="text-2xl font-semibold mb-2">
                Bank Transfer Details
            </p>
            <div className="flex items-center justify-between">
                <p className="font-medium text-gray-700">Bank Name: </p>
                <p className="text-lg text-semibold">XYZ Foundation</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="font-medium text-gray-700">Account Number:</p>
                <p className="text-lg text-semibold">0123456789</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="font-medium text-gray-700">Account Name:</p>
                <p className="text-lg text-semibold">Nii Kwei Ministry</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="font-medium text-gray-700">Swift Code:</p>
                <p className="text-lg text-semibold">FBNING</p>
            </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Transfer Reference</label>
              <input
                type="text"
                name=""
                placeholder=""
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
        </div>
      )}

      {paymentMethod === "paystack" && (
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                name=""
                placeholder="Your email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-2xl font-semibold">Payment Summary</p>
                <p>Amount: $100.00 USD</p>
            </div>
          <button className="bg-button text-white w-fit px-4 py-2 rounded-lg">
            Pay with Paystack
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
