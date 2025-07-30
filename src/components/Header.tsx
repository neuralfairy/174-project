import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DL</span>
            </div>
            <span className="text-xl font-bold text-gray-900">DigitalLifeBank</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={`text-sm font-medium transition-colors ${
                isActive('/features') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive('/pricing') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Pricing
            </Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setDropdownOpen(false)}
                  >
                    FAQ
                  </Link>
                  <a
                    href="https://salescentri.com/resources/case-studies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Case Studies
                  </a>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://salescentri.com/get-started/free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  isActive('/') ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  isActive('/features') ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  isActive('/pricing') ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  isActive('/blog') ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  isActive('/faq') ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  isActive('/about') ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  isActive('/contact') ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-teal-600 px-2 py-1"
                >
                  Free Trial
                </a>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;