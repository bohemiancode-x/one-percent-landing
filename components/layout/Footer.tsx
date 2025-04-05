import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <a href="#" className="text-sm text-gray-400 hover:text-white">
          Terms & Conditions
        </a>
        <a href="#" className="text-sm text-gray-400 hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="text-sm text-gray-400 hover:text-white">
          Manage Membership
        </a>
      </div>
      <div className="mt-6 text-center">
        <a href="mailto:support@onepercent.dating" className="text-sm text-gray-400 hover:text-white">
          support@onepercent.dating
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer