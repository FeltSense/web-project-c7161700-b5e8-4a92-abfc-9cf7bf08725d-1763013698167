'use client';

import { Check, Zap, Star, Phone } from 'lucide-react';

export default function Pricing() {
  const basicFeatures = [
    '24/7 website monitoring and basic updates',
    'Automated task management and execution',
    'Basic business process automation',
    'Email support',
  ];

  const premiumFeatures = [
    'Everything in Basic plus:',
    'Custom website development and management',
    'Advanced business automation',
    'Strategic planning and execution',
    'Priority support with dedicated account manager',
  ];

  const enterpriseFeatures = [
    'Everything in Premium plus:',
    'White-label solutions',
    'API access for custom integrations',
    'Custom business automation workflows',
    '24/7 phone support',
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scalable solutions designed to grow with your business needs
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Basic Package */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 px-8">
                <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
                <p className="text-blue-100">Perfect for solo entrepreneurs & small businesses</p>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">$297</span>
                    <span className="text-xl text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">1-10 employees</p>
                </div>

                <div className="mb-8">
                  <div className="space-y-3">
                    {basicFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-indigo-200 hover:shadow-3xl transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 px-4 py-2 rounded-bl-xl font-bold text-sm flex items-center">
                <Star size={16} className="mr-1" />
                MOST POPULAR
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-8">
                <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
                <p className="text-indigo-100">Ideal for SMBs and startups needing technical co-founder alternative</p>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">$997</span>
                    <span className="text-xl text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">Growing businesses</p>
                </div>

                <div className="mb-8">
                  <div className="space-y-3">
                    {premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-8 py-4 rounded-xl text-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise Package</h3>
                <p className="text-gray-300">For larger organizations and agencies</p>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-gray-900">Custom</span>
                    <span className="text-xl text-gray-600 ml-2">pricing</span>
                  </div>
                  <p className="text-gray-600">Tailored solutions</p>
                </div>

                <div className="mb-8">
                  <div className="space-y-3">
                    {enterpriseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="block w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center px-8 py-4 rounded-xl text-lg font-bold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
                  <Phone size={20} className="mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">All plans include secure payment processing and can be cancelled anytime</p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="text-green-600 mr-1" size={16} />
                No setup fees
              </div>
              <div className="flex items-center">
                <Check className="text-green-600 mr-1" size={16} />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Check className="text-green-600 mr-1" size={16} />
                Secure payment
              </div>
              <div className="flex items-center">
                <Check className="text-green-600 mr-1" size={16} />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}