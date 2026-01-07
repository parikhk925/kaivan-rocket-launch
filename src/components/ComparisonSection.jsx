import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: 'Campaign Setup Time',
      manual: '4-6 hours',
      kaivan: '60 seconds',
      highlight: true
    },
    {
      feature: 'Audience Targeting',
      manual: 'Guesswork & trial',
      kaivan: 'AI-powered precision'
    },
    {
      feature: 'Budget Optimization',
      manual: 'Manual adjustments',
      kaivan: 'Automatic optimization'
    },
    {
      feature: 'Ad Structure',
      manual: 'Complex & confusing',
      kaivan: 'Professional & tested',
      highlight: true
    },
    {
      feature: 'Marketing Knowledge',
      manual: 'Expert required',
      kaivan: 'No experience needed'
    },
    {
      feature: 'Cost Per Result',
      manual: 'High & unpredictable',
      kaivan: '65% lower on average',
      highlight: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Manual Campaigns vs{' '}
            <span className="text-orange-500">Kaivan Digital</span>
          </h2>
          <p className="text-xl text-gray-600">
            See why thousands of businesses are making the switch
          </p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b-2 border-gray-200">
            <div className="p-6">
              <p className="font-semibold text-gray-700">Feature</p>
            </div>
            <div className="p-6 border-x border-gray-200">
              <p className="font-semibold text-gray-700 text-center">Manual Setup</p>
            </div>
            <div className="p-6 bg-orange-50">
              <p className="font-semibold text-orange-600 text-center">Kaivan Digital</p>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-gray-200 transition-colors duration-200 ${
                item.highlight ? 'bg-orange-50/30' : 'hover:bg-gray-50'
              }`}
            >
              <div className="p-6 flex items-center">
                <p className="font-medium text-gray-900">{item.feature}</p>
              </div>
              <div className="p-6 border-x border-gray-200 flex items-center justify-center space-x-2">
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-600 text-center">{item.manual}</p>
              </div>
              <div className="p-6 flex items-center justify-center space-x-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-900 font-medium text-center">{item.kaivan}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-2">
            Join the <span className="font-bold text-orange-500">1000+ businesses</span> that switched to AI-powered campaigns
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
