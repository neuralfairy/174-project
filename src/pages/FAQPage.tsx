import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Book, ArrowRight } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'validation', name: 'Validation Process' },
    { id: 'pricing', name: 'Pricing & Plans' },
    { id: 'integration', name: 'Integration & API' },
    { id: 'accuracy', name: 'Accuracy & Results' },
    { id: 'security', name: 'Security & Privacy' },
    { id: 'support', name: 'Account & Support' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'validation',
      question: 'How does email validation work?',
      answer: 'Our email validation process uses multiple verification layers including syntax checking, domain validation, MX record verification, and mailbox existence testing. We perform real-time SMTP connection tests to ensure emails are deliverable while maintaining the highest accuracy standards.'
    },
    {
      id: 2,
      category: 'validation',
      question: 'What is the difference between valid, invalid, and risky emails?',
      answer: 'Valid emails are confirmed deliverable addresses. Invalid emails include syntax errors, non-existent domains, or non-existent mailboxes. Risky emails are technically valid but may have deliverability issues, such as role-based addresses (info@, admin@) or temporary/disposable email services.'
    },
    {
      id: 3,
      category: 'accuracy',
      question: 'What accuracy rate can I expect?',
      answer: 'DigitalLifeBank delivers industry-leading accuracy rates of 99.2%. Our advanced validation algorithms and real-time verification processes ensure the highest possible accuracy while minimizing false positives and negatives.'
    },
    {
      id: 4,
      category: 'pricing',
      question: 'How does pricing work?',
      answer: 'We offer flexible pricing based on monthly validation volume. Plans start at $29/month for 10,000 validations, with volume discounts available. Enterprise customers can access unlimited validations with custom pricing. All plans include real-time API access and comprehensive reporting.'
    },
    {
      id: 5,
      category: 'pricing',
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with 1,000 free validations to test our service. No credit card is required to get started. You can explore all features and see the quality of our validation results before committing to a paid plan.'
    },
    {
      id: 6,
      category: 'integration',
      question: 'How do I integrate the API into my application?',
      answer: 'Our RESTful API is designed for easy integration. We provide comprehensive documentation, SDKs for popular programming languages, and code examples. Most integrations can be completed in under 30 minutes. Our support team is available to assist with integration questions.'
    },
    {
      id: 7,
      category: 'integration',
      question: 'Do you offer bulk file processing?',
      answer: 'Absolutely! You can upload CSV or Excel files for bulk validation through our web interface. We support files up to 1 million records and provide detailed results with downloadable reports. Processing typically completes within minutes depending on file size.'
    },
    {
      id: 8,
      category: 'security',
      question: 'How do you protect my data?',
      answer: 'We take data security seriously. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We are SOC 2 compliant, GDPR compliant, and never store email addresses longer than necessary for processing. We maintain strict data retention policies and offer data deletion upon request.'
    },
    {
      id: 9,
      category: 'security',
      question: 'Are you GDPR compliant?',
      answer: 'Yes, we are fully GDPR compliant. We have implemented comprehensive data protection measures, privacy controls, and user rights management. We provide data processing agreements, maintain detailed privacy policies, and ensure all data handling meets European data protection standards.'
    },
    {
      id: 10,
      category: 'support',
      question: 'What support options are available?',
      answer: 'We offer multiple support channels including email support for all customers, live chat for Professional and Enterprise plans, and phone support for Enterprise customers. Our average response time is under 2 hours for sales inquiries and under 1 hour for technical support during business hours.'
    },
    {
      id: 11,
      category: 'support',
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time through your account dashboard. Changes take effect immediately, and we prorate billing adjustments. There are no long-term contracts or cancellation fees.'
    },
    {
      id: 12,
      category: 'validation',
      question: 'How fast is the validation process?',
      answer: 'Our real-time API typically responds within 200 milliseconds. Bulk file processing speed depends on file size but averages 10,000 validations per minute. We maintain high-performance infrastructure to ensure fast processing even during peak usage.'
    },
    {
      id: 13,
      category: 'accuracy',
      question: 'Do you catch spam traps and honeypots?',
      answer: 'Yes, our advanced algorithms identify and flag known spam traps, honeypots, and other deliverability risks. We maintain constantly updated databases of problematic addresses and domains to protect your sender reputation.'
    },
    {
      id: 14,
      category: 'integration',
      question: 'Which CRM platforms do you integrate with?',
      answer: 'We integrate with major CRM platforms including Salesforce, HubSpot, Pipedrive, and ActiveCampaign. We also offer Zapier integration for connecting with 2,000+ applications. Custom integrations are available for Enterprise customers.'
    },
    {
      id: 15,
      category: 'support',
      question: 'Do you offer dedicated account management?',
      answer: 'Enterprise customers receive dedicated account management with priority support, custom SLA agreements, and regular account reviews. Our account managers help optimize your validation strategy and ensure you get maximum value from our service.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                {' '}Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Find answers to common questions about DigitalLifeBank Contact Validator. 
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-lg text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Help?</h2>
            <p className="text-lg text-gray-600">Explore our additional resources or get in touch with our support team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://salescentri.com/docs/user-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides and API documentation to help you get started quickly.
              </p>
              <div className="text-teal-600 font-medium flex items-center justify-center">
                View Docs
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </a>

            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Get instant help from our support team through our live chat system.
              </p>
              <div className="text-blue-600 font-medium flex items-center justify-center">
                Start Chat
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </a>

            <a
              href="https://salescentri.com/contact/support-request/submit-ticket"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Ticket</h3>
              <p className="text-gray-600 mb-4">
                Submit a detailed support request and we'll get back to you quickly.
              </p>
              <div className="text-purple-600 font-medium flex items-center justify-center">
                Submit Ticket
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Try DigitalLifeBank?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Start validating your contacts today with our industry-leading accuracy and lightning-fast processing.
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

export default FAQPage;