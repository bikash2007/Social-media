import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-8">
          Welcome to our social media platform! We are a team of passionate individuals dedicated to connecting people and creating meaningful experiences online. Our mission is to build a community where everyone feels valued and heard.
        </p>
        <p className="text-gray-600 mb-8">
          This platform is proudly created by Bikash Bhandari, who is committed to bringing the best user experience to our community. We believe in the power of social connections and strive to make the world a smaller place through our innovative features.
        </p>
        <p className="text-gray-600 mb-8">
          Thank you for being a part of our journey. Together, we can make a difference!
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Learn More</a>
          <a href="#" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
