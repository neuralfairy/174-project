import React from 'react';
import { CheckCircle, Shield, Zap, Database, Target, Mail, Globe, Lock, TrendingUp, Users, Clock, Star } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Contact Validation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                {' '}Features
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover why DigitalLifeBank Contact Validator is the preferred choice for enterprises worldwide. 
              Our comprehensive validation suite ensures maximum deliverability and data quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try Interactive Demo
              </a>
              <a
                href="https://salescentri.com/get-started/free-trial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-200"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Validation Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-layer validation process ensures the highest accuracy and reliability in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl shadow-lg p-8 border border-teal-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Validation</h3>
              <p className="text-gray-600 mb-6">
                Instant email verification with live mailbox checking and comprehensive syntax validation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  SMTP connection testing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Domain validation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  MX record verification
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bulk Processing</h3>
              <p className="text-gray-600 mb-6">
                Process millions of emails efficiently with our high-performance validation infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Up to 1M emails/hour
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  CSV/Excel support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Progress tracking
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h3>
              <p className="text-gray-600 mb-6">
                Advanced risk scoring to identify potentially problematic email addresses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Spam trap detection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Disposable email filtering
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Role account identification
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">API Integration</h3>
              <p className="text-gray-600 mb-6">
                Seamlessly integrate validation into your existing workflows and applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  RESTful API
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Webhook support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Multiple SDKs
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg p-8 border border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive insights into your email data quality and validation performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Detailed reports
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Export capabilities
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Historical tracking
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-red-50 rounded-xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Enterprise-grade security with full GDPR compliance and data protection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  SOC 2 certified
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  GDPR compliant
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Data encryption
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Leading Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why DigitalLifeBank delivers the most accurate and fastest validation results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.2%</div>
              <div className="text-gray-600">Validation Accuracy</div>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt;200ms</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Emails/Hour Capacity</div>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">API Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a streamlined workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-gray-700">Salesforce</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-gray-700">HubSpot</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-gray-700">Mailchimp</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-gray-700">Zapier</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-gray-700">Pipedrive</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-gray-700">ActiveCampaign</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://salescentri.com/solutions/psa-suite/integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
            >
              View All Integrations
            </a>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DigitalLifeBank?
            </h2>
            <p className="text-xl text-gray-600">
              Compare our features with other validation services
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">DigitalLifeBank</th>
                    <th className="px-6 py-4 text-center font-semibold">Competitor A</th>
                    <th className="px-6 py-4 text-center font-semibold">Competitor B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Validation Accuracy</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-teal-500 mx-auto" />
                      <div className="text-sm text-gray-600 mt-1">99.2%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">95.8%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">94.1%</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Processing Speed</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-teal-500 mx-auto" />
                      <div className="text-sm text-gray-600 mt-1">&lt;200ms</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">500ms</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">800ms</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">API Uptime</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-teal-500 mx-auto" />
                      <div className="text-sm text-gray-600 mt-1">99.9%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">99.5%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">98.9%</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">24/7 Support</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-teal-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">Business Hours</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">Email Only</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            See why thousands of companies trust DigitalLifeBank for their contact validation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
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
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;