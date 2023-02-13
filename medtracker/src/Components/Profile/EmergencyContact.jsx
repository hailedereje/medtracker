import React, { Component } from 'react'

export class EmergencyContact extends Component {
  render() {
    return (

      <div data-testid="emergence" className="flex-1 ml-6">
            <h1 className='text-[#263238]'> Contact address incase of emergency </h1>
            <p className='text-[#718096]'>Add contacts that you trust in case of an emergency.</p>
            <input
              type="text"
              className="rounded border-black p-2 m-2 w-full border focus:outline-none focus:border-sky-500"
              placeholder="Name"
            />
            <div className="flex">
              <input
                type="text"
                className="flex-2 rounded border-black p-2 m-2 w-full border focus:outline-none focus:border-sky-500"
                placeholder="Phone number"
              />
              
              <input
                type="text"
                className="flex-2 rounded border-black p-2 m-2 w-full border focus:outline-none focus:border-sky-500"
                placeholder="Relationship"
              />

            </div>
            <input
              type="text"
              className="rounded border-black p-2 m-2 w-full border focus:outline-none focus:border-sky-500"
              placeholder="Name"
            />
            <div className="flex">
              <input
                type="text"
                className="flex-2 rounded border-black p-2 m-2 w-full border focus:outline-none focus:border-sky-500"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="flex-2 rounded border-black p-2 m-2 w-full border focus:outline-none focus:border-sky-500"
                placeholder="Relationship"
              />
            </div>
            <h1>Other</h1>
            <textarea
                type="text-area"
                className="flex-2 rounded border-black p-2 m-2 w-full border focus:outline-none focus:border-sky-500"
                placeholder="Do you want to include other information?"
              />
          </div>

      )
  }
}

export default EmergencyContact