import React from 'react'
import { FiMenu, FiUser } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 lg:hidden">
              <FiMenu size={24} />
            </button>
            <div className="ml-2 lg:ml-0 flex items-center">
              <span className="text-primary-600 font-bold text-xl">MediaMorph</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Documentation
            </a>
          </nav>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
              <FiUser size={20} />
            </button>
            <button className="ml-4 btn btn-primary hidden lg:block">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
