'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Custom Software Development',
    'Cloud Infrastructure Setup',
    'Mobile App Development',
    'Data Analytics Dashboard',
    'Cybersecurity Audit',
    'IoT Integration Consultation',
    '24/7 Technical Support',
    'Regular Updates & Maintenance',
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our comprehensive technology solution package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 px-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold">Enterprise Solution</h3>
                <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm flex items-center">
                  <Zap size={16} className="mr-1" />
                  POPULAR
                </div>
              </div>
              <p className="text-blue-100 text-lg">Everything you need to transform your business</p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-2xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Billed monthly, cancel anytime</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What's included:</h4>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <Check className="text-green-600" size={16} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Get Started Now
              </a>

              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600">
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
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Trusted by hundreds of businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">COMPANY</div>
              <div className="text-2xl font-bold text-gray-400">BRAND</div>
              <div className="text-2xl font-bold text-gray-400">CORP</div>
              <div className="text-2xl font-bold text-gray-400">TECH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}