"use client"

import { useState } from "react"

const Form2 = () => {
  const [roles, setRoles] = useState({
    worshipTeam: false,
    outreachPrograms: false,
    youthMinistry: false,
    eventSupport: false,
    administrativeRoles: false,
  })

  const [availability, setAvailability] = useState("")

  const handleRoleChange = (role) => {
    setRoles((prev) => ({ ...prev, [role]: !prev[role] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedRoles = Object.keys(roles).filter((role) => roles[role])
    console.log("Selected Roles:", selectedRoles)
    console.log("Availability:", availability)
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6">Volunteer interest</h1>
      <form onSubmit={handleSubmit}>
        {/* Roles Section */}
        <div className="mb-6">
          <h2 className="font-medium mb-3">Select Preferred Roles</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="worshipTeam"
                type="checkbox"
                checked={roles.worshipTeam}
                onChange={() => handleRoleChange("worshipTeam")}
                className="mr-3"
              />
              <label htmlFor="worshipTeam">Worship Team</label>
            </div>
            <div className="flex items-center">
              <input
                id="outreachPrograms"
                type="checkbox"
                checked={roles.outreachPrograms}
                onChange={() => handleRoleChange("outreachPrograms")}
                className="mr-3"
              />
              <label htmlFor="outreachPrograms">Outreach Programs</label>
            </div>
            <div className="flex items-center">
              <input
                id="youthMinistry"
                type="checkbox"
                checked={roles.youthMinistry}
                onChange={() => handleRoleChange("youthMinistry")}
                className="mr-3"
              />
              <label htmlFor="youthMinistry">Youth Ministry</label>
            </div>
            <div className="flex items-center">
              <input
                id="eventSupport"
                type="checkbox"
                checked={roles.eventSupport}
                onChange={() => handleRoleChange("eventSupport")}
                className="mr-3"
              />
              <label htmlFor="eventSupport">Event Support</label>
            </div>
            <div className="flex items-center">
              <input
                id="administrativeRoles"
                type="checkbox"
                checked={roles.administrativeRoles}
                onChange={() => handleRoleChange("administrativeRoles")}
                className="mr-3"
              />
              <label htmlFor="administrativeRoles">Administrative Roles</label>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="mb-6">
          <h2 className="font-medium mb-3">Availability</h2>
          <textarea
            placeholder="Please list the days and times you're available to volunteer"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full border p-3 rounded-md"
            rows={4}
          />
        </div>
      </form>
    </div>
  )
}

export default Form2
