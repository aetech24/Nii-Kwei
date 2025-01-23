import Link from "next/link";
import React from "react";
import { BsCheckCircle } from "react-icons/bs"


const OrderConfirmation = () => {
  return (
    <div className="max-w-3xl mx-auto border rounded-lg shadow-md p-6 bg-white -mt-24">
      {/* Header */}
      <div className="text-center mb-6 flex flex-col gap-2 items-center">
        <BsCheckCircle className="w-16 h-16 text-purple-500" />
        <h1 className="text-3xl font-bold text-purple-500">Thank You for Your Order!</h1>
        <p className="text-gray-500">
          Order confirmation has been sent to <span className="font-medium">customer@example.com</span>
        </p>
      </div>

      {/* Order Details */}
      <div className="rounded-lg p-4 mb-6 flex flex-col gap-8 bg-gray-50">
        <div className="">
            <div className="flex justify-between">
                <p className="text-xl">Order# <span className="font-medium">ORD-2024-01789</span></p>
                <button className="text-blue-600 text-sm font-medium border p-2">View Invoice</button>
            </div>
            <p className="text-sm text-gray-500">Placed on: <span className="font-medium">1/17/2025</span></p>
        </div>
        <div>
            <p className="text-xl">Estimated Delivery:</p>
            <p className="font-medium text-gray-500 text-sm">1/25/2025</p>
        </div>
        <div>
            <p className="text-xl">Confirmation Sent To:</p>
            <p className="font-medium text-sm text-gray-500">customer@example.com</p>
        </div>
        <div>
            <p className="text-xl">Order Date:</p>
            <p className="font-medium text-sm text-gray-500">1/17/2025</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border rounded-lg p-4">
        <h2 className="font-bold text-lg mb-4">Order Summary</h2>
        {/* Item 1 */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <img
              src="https://via.placeholder.com/50"
              alt="T-Shirt"
              className="w-16 h-16 rounded-md mr-4"
            />
            <div>
              <h3 className="font-medium">Ministry Logo T-Shirt</h3>
              <p className="text-sm text-gray-500">Size: M, Color: Black</p>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
          </div>
          <span className="font-medium">$20</span>
        </div>
        {/* Item 2 */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <img
              src="https://via.placeholder.com/50"
              alt="Mug"
              className="w-16 h-16 rounded-md mr-4"
            />
            <div>
              <h3 className="font-medium">Inspirational Mug</h3>
              <p className="text-sm text-gray-500">Color: White</p>
              <p className="text-sm text-gray-500">Quantity: 2</p>
            </div>
          </div>
          <span className="font-medium">$20</span>
        </div>
        {/* Summary */}
        <div className="border-t pt-4">
          <div className="flex justify-between text-gray-500 mb-2">
            <span className="text-xl">Subtotal</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between text-gray-500 mb-2">
            <span className="text-xl">Shipping</span>
            <span>$5</span>
          </div>
          <div className="flex justify-between text-gray-500 mb-4">
            <span className="text-xl">Tax</span>
            <span>$3</span>
          </div>
          <hr className="py-3" />
          <div className="flex justify-between font-semibold text-xl">
            <span className="text-xl">Total</span>
            <span>$48</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col w-full gap-2">
        <Link href="/track-order">
            <button className="border w-full text-gray-700 font-medium py-2 px-4 rounded">
            Track Order
            </button>
        </Link>
        <button className="bg-button w-full text-white font-medium py-2 px-4 rounded">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
