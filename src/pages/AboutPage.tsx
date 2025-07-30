import React from 'react';
import { Users, Award, Target, Globe, ArrowRight, Linkedin, Mail, MapPin } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former VP of Sales at Fortune 500 tech company with 15+ years in data validation.',
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Ex-Google engineer specializing in large-scale data processing and machine learning.',
      image: 'MC'
    },
    {
      name: 'Amanda Rodriguez',
      role: 'VP of Customer Success',
      bio: 'Customer experience expert with deep knowledge of B2B sales and marketing automation.',
      image: 'AR'
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Infrastructure architect with expertise in high-performance API design and scalability.',
      image: 'DK'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started with a mission to solve email deliverability challenges for B2B companies.'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Partnered with Fortune 500 company, validating 10M+ emails in first year.'
    },
    {
      year: '2021',
      title: '99% Accuracy Achieved',
      description: 'Breakthrough in validation technology, reaching industry-leading accuracy rates.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve clients across 50+ countries with localized validation.'
    },
    {
      year: '2025',
      title: '50M+ Emails Validated',
      description: 'Reached milestone of validating over 50 million email addresses monthly.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                {' '}DigitalLifeBank
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're on a mission to eliminate bounced emails and improve outbound success rates for businesses worldwide. 
              Since 2018, we've been the trusted partner for companies looking to validate their contact data with precision and speed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/company/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
              >
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://salescentri.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that accurate contact data is the foundation of successful business relationships. 
                Our mission is to provide the most reliable, fast, and comprehensive email validation service 
                that empowers businesses to reach their prospects with confidence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every validation we perform helps our clients save money, improve their sender reputation, 
                and ultimately drive better business outcomes through more effective outbound campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy First</h3>
                <p className="text-gray-600 text-sm">
                  We're obsessed with providing the most accurate validation results in the industry.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Success</h3>
                <p className="text-gray-600 text-sm">
                  Your success is our success. We're committed to helping you achieve your goals.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We continuously improve our technology to stay ahead of industry challenges.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">
                  We serve clients worldwide with localized validation and 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader - here's how we've grown and evolved to serve our customers better.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together expertise from top technology companies and deep knowledge of data validation challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {member.image}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-teal-600 font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex justify-center space-x-2">
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 hover:text-teal-600 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 hover:text-teal-600 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DigitalLifeBank by the Numbers
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Our achievements reflect our commitment to excellence and customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50M+</div>
              <div className="text-teal-100">Emails Validated Monthly</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2,500+</div>
              <div className="text-teal-100">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.2%</div>
              <div className="text-teal-100">Validation Accuracy</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-teal-100">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Our Buffalo Office
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our headquarters in Buffalo, NY serves as the hub for our engineering, customer success, and operations teams. 
                We're proud to be part of Buffalo's growing tech ecosystem.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">123 Tech Drive, Buffalo, NY 14202</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-teal-600 mr-3" />
                  <a 
                    href="https://salescentri.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700"
                  >
                    hello@digitallifebank.com
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://salescentri.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
                >
                  Schedule a Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <div className="aspect-w-16 aspect-h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Buffalo, NY Office</h3>
                  <p className="text-gray-600">Our headquarters and main operations center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the thousands of companies that trust DigitalLifeBank for their contact validation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-200"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;