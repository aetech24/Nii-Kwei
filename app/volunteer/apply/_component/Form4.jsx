"use client"

import { useState } from "react"

const Form4 = () => {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      fullName,
      phoneNumber,
      email,
    })
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">References</h1>
      <p className="mb-6 text-gray-600">
        Please provide contact information for a person who can speak to your
        character, skills, and suitability for volunteering. These could be
        employers, teachers, family members, pastors, or community leaders who
        know you well.
      </p>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Reference name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border p-3 rounded-md"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Reference phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border p-3 rounded-md"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email Address (optional)
          </label>
          <input
            type="email"
            id="email"
            placeholder="Reference Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-md"
          />
        </div>
      </form>
    </div>
  )
}

export default Form4
