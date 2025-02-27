import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address */}
        <div>
          <Image
            src="/image/tih_website_logo.jpg"
            alt="iHub Drishti Logo"
            width={150}
            height={50}
            priority
          />
          <ul className="mt-4 text-gray-700">
            <li>
              <i className="fa fa-map-marker fa-lg"></i> iHub Drishti Foundation,
              <br />
              Indian Institute of Technology Jodhpur
              <br />
              NH 62 Nagaur Road, Karwar 342037
              <br />
              Jodhpur District, Rajasthan, India
            </li>
            <li>
              <a href="mailto:admin@ihub-drishti.ai" className="text-gray-700 hover:text-blue-500">
                <i className="fa fa-envelope"></i> admin@ihub-drishti.ai
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold">Useful Links</h4>
          <ul className="mt-4 text-gray-700">
            <li>
              <Link href="/tender" className="text-gray-700 hover:text-blue-500">
                Tender
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-500">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/forms" className="text-gray-700 hover:text-blue-500">
                Forms
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="text-gray-700 hover:text-blue-500">
                Newsletter
              </Link>
            </li>
            <li>
              <Link href="/consultancy-services" className="text-gray-700 hover:text-blue-500">
                Consultancy Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Visitor Counter */}
        <div>
          <h4 className="text-lg font-semibold">Visitor Counter</h4>
          {/* Implement your visitor counter here */}
          <p className="text-gray-700">Counter will go here</p>
        </div>

        {/* NM-ICPS Logo */}
        <div>
          <a href="https://nmicps.in/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/nmicp2.png"
              alt="NM-ICPS"
              width={150}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      {/* Copyright Info */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-gray-700">&copy; Copyright 2021 by TIH. All Rights Reserved.</p>
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
              {/* Add more social links */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 