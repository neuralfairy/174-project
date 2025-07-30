import React, { useState } from 'react';
import { CheckCircle, Star, ArrowRight, Shield, Zap, Users, TrendingUp, Mail, Database, Target } from 'lucide-react';

const HomePage = () => {
  const [roiData, setRoiData] = useState({
    emailsPerMonth: 10000,
    currentBounceRate: 15,
    averageDealValue: 5000
  });

  const calculateROI = () => {
    const validEmails = roiData.emailsPerMonth * (1 - roiData.currentBounceRate / 100);
    const improvedEmails = roiData.emailsPerMonth * 0.98; // 98% validation rate
    const additionalValidEmails = improvedEmails - validEmails;
    const monthlyROI = additionalValidEmails * 0.02 * roiData.averageDealValue; // 2% conversion rate
    return monthlyROI;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium">
                  <Zap className="h-4 w-4 mr-1" />
                  99.2% Validation Accuracy
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Validate Contacts.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
                    {' '}Boost Success.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Eliminate bounced emails and improve your outbound success rate with our enterprise-grade contact validation service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl"
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

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.2%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50M+</div>
                  <div className="text-sm text-gray-600">Emails Validated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2,500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Validation Results</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Live</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium">Valid Emails</span>
                      </div>
                      <span className="text-green-700 font-semibold">8,426</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-red-500" />
                        <span className="text-sm font-medium">Invalid Emails</span>
                      </div>
                      <span className="text-red-700 font-semibold">174</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Database className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium">Risky Emails</span>
                      </div>
                      <span className="text-yellow-700 font-semibold">92</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">97.2%</div>
                      <div className="text-sm text-gray-600">Deliverability Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">Join thousands of companies that trust our validation services</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center h-16 bg-gray-100 rounded-lg">
              <span className="text-lg font-bold text-gray-700">Microsoft</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-100 rounded-lg">
              <span className="text-lg font-bold text-gray-700">Salesforce</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-100 rounded-lg">
              <span className="text-lg font-bold text-gray-700">HubSpot</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-100 rounded-lg">
              <span className="text-lg font-bold text-gray-700">Mailchimp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DigitalLifeBank Contact Validator?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced validation technology ensures maximum deliverability and protects your sender reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">99.2% Accuracy</h3>
              <p className="text-gray-600 mb-6">
                Industry-leading validation accuracy with real-time verification and comprehensive syntax checking.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Real-time validation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Syntax verification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Mailbox existence check
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 mb-6">
                Process millions of emails per hour with our high-performance validation infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Bulk processing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  API integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Real-time results
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better ROI</h3>
              <p className="text-gray-600 mb-6">
                Increase campaign effectiveness and reduce costs by targeting only valid email addresses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Higher open rates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Reduced bounce rates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Better deliverability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save with our contact validation service
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emails sent per month
                  </label>
                  <input
                    type="number"
                    value={roiData.emailsPerMonth}
                    onChange={(e) => setRoiData({...roiData, emailsPerMonth: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current bounce rate (%)
                  </label>
                  <input
                    type="number"
                    value={roiData.currentBounceRate}
                    onChange={(e) => setRoiData({...roiData, currentBounceRate: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average deal value ($)
                  </label>
                  <input
                    type="number"
                    value={roiData.averageDealValue}
                    onChange={(e) => setRoiData({...roiData, averageDealValue: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Potential ROI</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Revenue Increase:</span>
                    <span className="text-2xl font-bold text-teal-600">
                      ${calculateROI().toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Revenue Increase:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      ${(calculateROI() * 12).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <a
                      href="https://salescentri.com/get-started/free-trial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-200 text-center block"
                    >
                      Start Free Trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "DigitalLifeBank increased our email deliverability by 35% and saved us thousands in wasted marketing spend. The ROI was immediate."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-sm text-gray-600">Marketing Director, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The accuracy is incredible. We've reduced our bounce rate from 18% to less than 2%. Our sales team is finally hitting their targets."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  MJ
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Michael Johnson</div>
                  <div className="text-sm text-gray-600">VP Sales, Growth Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Easy integration, lightning-fast results, and exceptional support. DigitalLifeBank is now an essential part of our sales stack."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AL
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Amanda Lee</div>
                  <div className="text-sm text-gray-600">Operations Manager, StartupHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Email Success Rate?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using DigitalLifeBank to validate contacts and improve their outbound success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-200"
            >
              Book Demo
            </a>
          </div>

          <div className="mt-8 text-teal-100 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;