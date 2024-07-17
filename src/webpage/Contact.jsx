import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-green-900/40 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Whether you have a question about our platform, feedback, or just want to say hi, feel free to reach out to us.
          </p>
        </div>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 mb-2">Name</label>
            <input type="text" id="name" className="border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500 focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
            <input type="email" id="email" className="border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500 focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-600 mb-2">Message</label>
            <textarea id="message" className="border-gray-300 rounded-lg p-2 h-32 focus:ring focus:ring-blue-500 focus:outline-none"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
