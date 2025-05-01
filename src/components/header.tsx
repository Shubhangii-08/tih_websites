<<<<<<< HEAD
import React from 'react';
=======
'use client';
import React, { useState } from 'react';
>>>>>>> 3755027 (Initial commit)
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
<<<<<<< HEAD
  return (
    <header className="bg-white">
      {/* Top Header Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="block">
              <Image
                src="/tih_website_logo.jpg" 
                alt="iHub Drishti Logo"
                width={150}
                height={50}
=======
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full">
      {/* Top Header Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <Link href="/" className="block">
              <Image
                src="/image/tih_website_logo.jpg" 
                alt="iHub Drishti Logo"
                width={120}
                height={40}
                className="w-auto h-auto"
>>>>>>> 3755027 (Initial commit)
                priority
              />
            </Link>
          </div>
          <div className="flex items-center">
<<<<<<< HEAD
            <div className="mr-16">
=======
            <div className="mr-4 sm:mr-16">
>>>>>>> 3755027 (Initial commit)
              <a href="https://dst.gov.in/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/image/dst_logo.jpg"
                  alt="DST"
<<<<<<< HEAD
                  width={350}
                  height={150}
                  priority
                />
              </a>
            </div >
=======
                  width={280}
                  height={120}
                  className="w-auto h-auto max-h-[60px]"
                  priority
                />
              </a>
            </div>
>>>>>>> 3755027 (Initial commit)
            <ul className="flex space-x-12">
              <li>
                <a href="https://www.facebook.com/IHub-Drishti-107489811622386" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/TIHihubDrishti" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCE_1NCswOaeJSUSwKOnmLbg" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ihub-drishti/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Navigation Menu */}
      <div className="bg-primary text-white py-3">
        <div className="container mx-auto">
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200">About Us</Link></li>
              <li><Link href="/administration" className="hover:text-gray-200">Administration</Link></li>
              <li><Link href="/r-and-d-labs" className="hover:text-gray-200">R & D Labs</Link></li>
              <li><Link href="/entrepreneurship" className="hover:text-gray-200">Entrepreneurship</Link></li>
              <li><Link href="/projects" className="hover:text-gray-200">Projects</Link></li>
              <li><Link href="/products-and-services" className="hover:text-gray-200">Product & Services</Link></li>
              <li><Link href="/jobs" className="hover:text-gray-200">Jobs</Link></li>
              <li><Link href="/call-for-proposal" className="hover:text-gray-200">Call for Proposal</Link></li>
              <li><Link href="/training" className="hover:text-gray-200">Training</Link></li>
              <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
=======
      {/* Navigation Bar */}
      <div className="bg-primary text-white py-3 relative">
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-full flex items-center justify-between px-4 py-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span>Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0">
              <li><Link href="/" className="block hover:text-gray-200 py-2 lg:py-0">Home</Link></li>
              <li><Link href="/about" className="block hover:text-gray-200 py-2 lg:py-0">About Us</Link></li>
              <li><Link href="/administration" className="block hover:text-gray-200 py-2 lg:py-0">Administration</Link></li>
              <li><Link href="/r-and-d-labs" className="block hover:text-gray-200 py-2 lg:py-0">R & D Labs</Link></li>
              <li><Link href="/entrepreneurship" className="block hover:text-gray-200 py-2 lg:py-0">Entrepreneurship</Link></li>
              <li><Link href="/projects" className="block hover:text-gray-200 py-2 lg:py-0">Projects</Link></li>
              <li><Link href="/products-and-services" className="block hover:text-gray-200 py-2 lg:py-0">Product & Services</Link></li>
              <li><Link href="/jobs" className="block hover:text-gray-200 py-2 lg:py-0">Jobs</Link></li>
              <li><Link href="/call-for-proposal" className="block hover:text-gray-200 py-2 lg:py-0">Call for Proposal</Link></li>
              <li><Link href="/training" className="block hover:text-gray-200 py-2 lg:py-0">Training</Link></li>
              <li><Link href="/contact" className="block hover:text-gray-200 py-2 lg:py-0">Contact</Link></li>
>>>>>>> 3755027 (Initial commit)
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
