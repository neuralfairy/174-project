import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Shield, Lock, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DL</span>
              </div>
              <span className="text-xl font-bold">DigitalLifeBank</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional contact validation services that improve your outbound success rate and data quality.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Buffalo, NY</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Interactive Demo
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://salescentri.com/docs/user-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/docs/api-reference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Security */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact & Support</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="https://salescentri.com/contact/sales-inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Sales Inquiry
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/contact/support-request"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/contact/partnerships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Partnerships
                </a>
              </li>
            </ul>
            
            {/* Security Badges */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Shield className="h-4 w-4" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Lock className="h-4 w-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Award className="h-4 w-4" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; 2025 DigitalLifeBank Solutions. All rights reserved.</p>
              <div className="flex space-x-4">
                <a
                  href="https://salescentri.com/trust/security-privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://salescentri.com/trust/compliance-certifications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
            
            {/* Strategic Backlink */}
            <div className="text-sm text-gray-400">
              <a
                href="https://salescentri.com?utm_source=DigitalLifeBank.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;