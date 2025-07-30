import React from 'react';
import { Check, X, ArrowRight, Star, Zap } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for small businesses and startups',
      features: [
        '10,000 validations/month',
        'Real-time API access',
        'Basic reporting',
        'Email support',
        'CSV file upload',
        '95% accuracy guarantee'
      ],
      notIncluded: [
        'Bulk processing',
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 99,
      description: 'Ideal for growing businesses and sales teams',
      features: [
        '100,000 validations/month',
        'Real-time API access',
        'Advanced reporting & analytics',
        'Priority email & chat support',
        'Bulk file processing',
        'Webhook notifications',
        'CRM integrations',
        '99% accuracy guarantee'
      ],
      notIncluded: [
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited validations',
        'Real-time API access',
        'Custom reporting & analytics',
        '24/7 phone & chat support',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantees',
        '99.5% accuracy guarantee',
        'White-label options',
        'On-premise deployment'
      ],
      notIncluded: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choose the perfect plan for your contact validation needs. All plans include our industry-leading accuracy and comprehensive features.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-sm text-gray-600">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-10 h-6 bg-gray-200 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition-transform duration-200"></div>
              </div>
              <span className="text-sm text-gray-600">Annual <span className="text-teal-600 font-semibold">(Save 20%)</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular 
                    ? 'border-2 border-teal-500 transform scale-105' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      {typeof plan.price === 'number' ? (
                        <>
                          <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                          <span className="text-gray-600">/month</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      )}
                    </div>
                    
                    <a
                      href={plan.name === 'Enterprise' 
                        ? "https://salescentri.com/contact/sales-inquiry" 
                        : "https://salescentri.com/get-started/free-trial"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 shadow-lg hover:shadow-xl'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Features included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start opacity-50">
                          <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities for organizations with complex validation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom SLAs</h3>
              <p className="text-gray-600">
                Guaranteed uptime, response times, and performance metrics tailored to your business needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">White-Label Solution</h3>
              <p className="text-gray-600">
                Brand our validation service as your own with custom domains, logos, and user interfaces.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">On-Premise Deployment</h3>
              <p className="text-gray-600">
                Install our validation engine on your own infrastructure for maximum security and control.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://salescentri.com/pricing/enterprise-custom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
            >
              Explore Enterprise Options
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What happens if I exceed my monthly limit?
              </h3>
              <p className="text-gray-600">
                We offer flexible overage pricing at $0.003 per additional validation. You'll be notified when approaching your limit and can upgrade your plan at any time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer annual discounts?
              </h3>
              <p className="text-gray-600">
                Yes! Annual plans receive a 20% discount compared to monthly pricing. Contact our sales team for custom annual enterprise pricing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a 14-day free trial with 1,000 free validations to test our service. No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies improving their email deliverability with DigitalLifeBank.
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
              href="https://salescentri.com/contact/sales-inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-200"
            >
              Contact Sales
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

export default PricingPage;