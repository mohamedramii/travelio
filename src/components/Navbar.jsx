import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F2F2F2] py-4 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-40">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 h-10">
            <img src="../../public/images/logo.png" alt="Travelio Logo" className="h-full" />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-4 lg:space-x-6">
            <Link to="/" className="flex justify-center items-center px-4 py-2 border border-[#CECECE] rounded-full whitespace-nowrap">
              <span className="font-medium text-sm lg:text-base text-[#222222]">
                Home
              </span>
            </Link>

            <Link to="/destination" className="flex justify-center items-center px-4 py-2 rounded-full whitespace-nowrap hover:border hover:border-[#CECECE]">
              <span className="font-medium text-sm lg:text-base text-[#535353]">
                Destination
              </span>
            </Link>

            <Link to="/packages" className="flex justify-center items-center px-4 py-2 rounded-full whitespace-nowrap hover:border hover:border-[#CECECE]">
              <span className="font-medium text-sm lg:text-base text-[#535353]">
                Packages
              </span>
            </Link>

            <Link to="/blogs" className="flex justify-center items-center px-4 py-2 rounded-full whitespace-nowrap hover:border hover:border-[#CECECE]">
              <span className="font-medium text-sm lg:text-base text-[#535353]">
                Blogs
              </span>
            </Link>

            <Link to="/about-us" className="flex justify-center items-center px-4 py-2 rounded-full whitespace-nowrap hover:border hover:border-[#CECECE]">
              <span className="font-medium text-sm lg:text-base text-[#535353]">
                About Us
              </span>
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sign Up Button */}
            <Link to="/signup" className="flex items-center pl-4 pr-0 bg-[#014E82] rounded-full overflow-hidden">
              <span className="font-semibold text-sm lg:text-base text-white pr-3">
                Sign Up
              </span>
              <div className="flex justify-center items-center w-12 h-12 bg-white border border-[#0099D2] rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>

            {/* Login Button */}
            <Link to="/login" className="flex items-center pl-4 pr-0 border border-[#014E82] rounded-full overflow-hidden">
              <span className="font-semibold text-sm lg:text-base text-[#014E82] pr-3">
                Login
              </span>
              <div className="flex justify-center items-center w-12 h-12 bg-white border border-[#014E82] rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link to="/" className="block px-4 py-2 rounded-md border border-[#CECECE] text-center font-medium text-[#222222]">
              Home
            </Link>
            <Link to="/destination" className="block px-4 py-2 rounded-md text-center font-medium text-[#535353] hover:bg-gray-100">
              Destination
            </Link>
            <Link to="/packages" className="block px-4 py-2 rounded-md text-center font-medium text-[#535353] hover:bg-gray-100">
              Packages
            </Link>
            <Link to="/blogs" className="block px-4 py-2 rounded-md text-center font-medium text-[#535353] hover:bg-gray-100">
              Blogs
            </Link>
            <Link to="/about-us" className="block px-4 py-2 rounded-md text-center font-medium text-[#535353] hover:bg-gray-100">
              About Us
            </Link>
            <div className="flex flex-col space-y-3 pt-3">
              <Link to="/signup" className="flex items-center justify-center py-2 px-4 bg-[#014E82] rounded-full text-white font-semibold">
                Sign Up
              </Link>
              <Link to="/login" className="flex items-center justify-center py-2 px-4 border border-[#014E82] rounded-full text-[#014E82] font-semibold">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
