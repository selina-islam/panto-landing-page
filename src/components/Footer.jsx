import React from 'react'
// Importing social media icons from react-icons
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
// Importing routing components
import { Link, NavLink } from 'react-router-dom'

// Footer functional component
const Footer = () => {
  return (
    <footer className="">
      {/* Main container with responsive grid layout */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-4">
        {/* Logo and company description section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 cursor-pointer">
            {/* Navigates to homepage */}
            <NavLink to="/">Panto</NavLink>
          </h2>
          <p className="md:mr-12">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        {/* Services section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 ">Services </h2>
          <ul className="py-2">
            {/* Each list item can be linked to a service page */}
            <li>
              <Link className="hover:text-primary cursor-pointer">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary cursor-pointer">
                Campaign
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary cursor-pointer">
                Branding
              </Link>
            </li>
          </ul>
        </div>
        {/* Furniture section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 ">Furniture </h2>
          <ul className="py-2">
            {/* Links to different furniture categories */}
            <li>
              <Link className="hover:text-primary cursor-pointer">Beds</Link>
            </li>
            <li>
              <Link className="hover:text-primary cursor-pointer">Chair</Link>
            </li>
            <li>
              <Link className="hover:text-primary cursor-pointer">All</Link>
            </li>
          </ul>
        </div>
        {/* Social media links section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 ">Follow Us </h2>
          <ul className="py-2">
            {/* Social media link with icon */}
            <li>
              <Link className="hover:font-semibold cursor-pointer flex items-center space-x-2">
                <FaFacebook /> <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link className="hover:font-semibold cursor-pointer flex items-center space-x-2">
                <FaTwitter /> <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link className="hover:font-semibold cursor-pointer flex items-center space-x-2">
                <FaInstagram /> <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom copyright and legal links section */}
      <div className="mt-12 container flex px-4  sm:fle-row sm:justify-between sm:items-center sm:text-center text-left gap-4 text-black border-t border-gray-300 pt-4">
        {/* Current year dynamically shown */}
        <p>Copyright&copy; {new Date().getFullYear()}</p>
        {/* Terms and privacy policy links */}
        <div className="flex items-center gap-4">
          <Link>Terms & Condition</Link>
          <Link>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer