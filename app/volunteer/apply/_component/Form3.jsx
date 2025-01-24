"use client"

import { useState } from "react"

const Form3 = () => {
  const [skills, setSkills] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Skills and Motivation:", skills)
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6">Volunteer interest</h1>
      <form onSubmit={handleSubmit}>
        {/* Skills and Motivation Section */}
        <div className="mb-6">
          <h2 className="font-medium mb-3">
            Tell us about your skills and why you want to volunteer
          </h2>
          <textarea
            placeholder="Share your relevant skills, experience, and motivation for volunteering"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full border p-3 rounded-md"
            rows={4}
          />
        </div>
      </form>
    </div>
  )
}

export default Form3
