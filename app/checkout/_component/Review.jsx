"use client"

import { useState } from "react"
import { ReviewSection } from "./ReviewSection"

export default function ReviewPage() {
  const [orderDetails] = useState({
    contact: {
      email: "customer@example.com",
      phone: "+233 123 456 789",
    },
    delivery: {
      name: "Tom Kofi",
      street: "123 Main Street",
      apt: "Apt 35",
      city: "Accra",
      region: "GH",
      postal: "49021",
      country: "Ghana",
    },
    payment: {
      cardLast4: "4242",
      expiry: "12/25",
    },
  })

  const handleEdit = (section) => {
    // Handle edit action for each section
    console.log(`Editing ${section}`)
  }

  return (
    <div className="my-5">
      <h1 className="text-2xl font-medium mb-6">Review Your Order</h1>

      <ReviewSection title="Contact Information" onEdit={() => handleEdit("contact")}>
        <p className="text-gray-700">{orderDetails.contact.email}</p>
        <p className="text-gray-700">{orderDetails.contact.phone}</p>
      </ReviewSection>

      <ReviewSection title="Delivery Address" onEdit={() => handleEdit("delivery")}>
        <p className="text-gray-700">{orderDetails.delivery.name}</p>
        <p className="text-gray-700">{orderDetails.delivery.street}</p>
        <p className="text-gray-700">{orderDetails.delivery.apt}</p>
        <p className="text-gray-700">
          {orderDetails.delivery.city}, {orderDetails.delivery.region} {orderDetails.delivery.postal}
        </p>
        <p className="text-gray-700">{orderDetails.delivery.country}</p>
      </ReviewSection>

      <ReviewSection title="Contact Information" onEdit={() => handleEdit("payment")}>
        <p className="text-gray-700">•••• •••• •••• {orderDetails.payment.cardLast4}</p>
        <p className="text-gray-700">Expires {orderDetails.payment.expiry}</p>
      </ReviewSection>

      <div class="border rounded-lg shadow-md p-4">
        <h2 class="text-lg font-semibold mb-4">Order Summary</h2>

        <div class="flex justify-between mb-4">
            <div class="flex">
            <img
                src=""
                alt="Ministry Logo T-Shirt"
                class="w-12 h-12 rounded-md mr-4"
            />
            <div>
                <h3 class="font-medium">Ministry Logo T-Shirt</h3>
                <p class="text-sm text-gray-500">Size: M, Color: Black</p>
                <p class="text-sm text-gray-500">Quantity: 1</p>
            </div>
            </div>
            <span class="font-medium">$20</span>
        </div>

        <div class="flex justify-between mb-4">
            <div class="flex">
            <img
                src=""
                alt="Inspirational Mug"
                class="w-12 h-12 rounded-md mr-4"
            />
            <div>
                <h3 class="font-medium">Inspirational Mug</h3>
                <p class="text-sm text-gray-500">Color: White</p>
                <p class="text-sm text-gray-500">Quantity: 2</p>
            </div>
            </div>
            <span class="font-medium">$20</span>
        </div>

        <div class="border-t pt-4">
            <div class="flex justify-between mb-2">
                <span class="text-gray-500">Subtotal</span>
                <span class="text-sm font-medium">$20</span>
            </div>
            <div class="flex justify-between mb-2">
                <span class="text-gray-500">Shipping</span>
                <span class="text-sm font-medium">$5</span>
            </div>
            <div class="flex justify-between mb-4">
                <span class="text-gray-500">Tax</span>
                <span class="text-sm font-medium">$3</span>
            </div>
        </div>

        <div class="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>$48</span>
        </div>
        </div>

    </div>
  )
}

