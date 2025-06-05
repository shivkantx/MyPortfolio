import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-10 border-t-2 border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="flex flex-col justify-between">
          <div className="mb-4">
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} DevUI. All rights reserved.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Features</Link></li>
            <li><Link to="/" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/" className="hover:text-white">Affiliate Program</Link></li>
            <li><Link to="/" className="hover:text-white">Press Kit</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Account</Link></li>
            <li><Link to="/" className="hover:text-white">Help</Link></li>
            <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-white">Customer Support</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Legals</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-white">Licensing</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
