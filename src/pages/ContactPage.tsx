import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, ArrowRight, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to external form
    window.open('https://salescentri.com/get-started/contact', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                {' '}with Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Have questions about our contact validation service? Our team of experts is here to help you find the perfect solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <a
              href="https://salescentri.com/contact/sales-inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Inquiry</h3>
              <p className="text-gray-600 text-sm">
                Speak with our sales team about pricing and custom solutions.
              </p>
            </a>

            <a
              href="https://salescentri.com/contact/support-request"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-600 text-sm">
                Get help with integration, troubleshooting, and technical questions.
              </p>
            </a>

            <a
              href="https://salescentri.com/get-started/calendly"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Demo</h3>
              <p className="text-gray-600 text-sm">
                Book a personalized demo to see our platform in action.
              </p>
            </a>

            <a
              href="https://salescentri.com/contact/partnerships"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Explore partnership opportunities and integrations.
              </p>
            </a>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="demo">Request Demo</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your contact validation needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Buffalo Office</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Address</p>
                      <p className="text-gray-600 text-sm">123 Tech Drive<br />Buffalo, NY 14202</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Phone</p>
                      <a href="tel:+1-716-555-0123" className="text-teal-600 hover:text-teal-700 text-sm">
                        +1 (716) 555-0123
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <a 
                        href="https://salescentri.com/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 text-sm"
                      >
                        hello@digitallifebank.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Business Hours</p>
                      <p className="text-gray-600 text-sm">
                        Mon-Fri: 9:00 AM - 6:00 PM EST<br />
                        Sat-Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://salescentri.com/get-started/free-trial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-200 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  
                  <a
                    href="https://salescentri.com/get-started/book-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-teal-600 text-teal-600 py-3 px-4 rounded-lg font-medium hover:bg-teal-50 transition-all duration-200 flex items-center justify-center"
                  >
                    Book Demo
                    <Calendar className="ml-2 h-4 w-4" />
                  </a>
                  
                  <a
                    href="https://salescentri.com/contact/support-request/live-chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 flex items-center justify-center"
                  >
                    Live Chat Support
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">24/7 Support Available</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our support team is available around the clock to help you with any technical issues or questions.
                </p>
                <a
                  href="https://salescentri.com/contact/support-request/submit-ticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Submit Support Ticket →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions about contacting us</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly will I receive a response?
              </h3>
              <p className="text-gray-600">
                We typically respond to sales inquiries within 2 hours during business hours. 
                Support requests are handled within 1 hour for urgent issues, 4 hours for general questions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer phone support?
              </h3>
              <p className="text-gray-600">
                Yes! Phone support is available for Professional and Enterprise customers. 
                Starter plan customers can access support via email and live chat.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I schedule a demo outside business hours?
              </h3>
              <p className="text-gray-600">
                Absolutely! Use our calendar booking system to schedule demos at your convenience, 
                including evenings and weekends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;