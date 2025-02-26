import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white">
      {/* Top Header Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/tih_logo.png" // Replace with your actual logo path
                alt="iHub Drishti Logo"
                width={150} // Adjust as needed
                height={50} // Adjust as needed
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <a href="https://dst.gov.in/" target="_blank">
                <Image
                  src="/images/sampledata/tophead.jpg" // Replace with your actual image path
                  alt="DST"
                  width={100} // Adjust as needed
                  height={30} // Adjust as needed
                />
              </a>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com/IHub-Drishti-107489811622386" target="_blank" className="text-gray-500 hover:text-gray-700">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/TIHihubDrishti" target="_blank" className="text-gray-500 hover:text-gray-700">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCE_1NCswOaeJSUSwKOnmLbg" target="_blank" className="text-gray-500 hover:text-gray-700">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ihub-drishti/" target="_blank" className="text-gray-500 hover:text-gray-700">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-primary text-white py-3">
        <div className="container mx-auto">
          {/* Add your navigation menu here */}
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200">About Us</Link></li>
              {/* Add more menu items */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
