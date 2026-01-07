import React from 'react';
import { Check } from 'lucide-react';
import { benefits } from '../mock';

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-orange-500">Kaivan Digital</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Built for everyone — from complete beginners to experienced agencies
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 font-medium pt-0.5">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                {/* ROI Indicator */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-sm text-gray-600 mb-2">Average ROI Increase</p>
                  <div className="flex items-end space-x-2">
                    <p className="text-5xl font-bold text-orange-500">2.5x</p>
                    <p className="text-xl text-gray-500 mb-2">better</p>
                  </div>
                </div>

                {/* Time Saved */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-sm text-gray-600 mb-2">Time Saved Per Campaign</p>
                  <div className="flex items-end space-x-2">
                    <p className="text-5xl font-bold text-orange-500">5+</p>
                    <p className="text-xl text-gray-500 mb-2">hours</p>
                  </div>
                </div>

                {/* Success Rate */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-sm text-gray-600 mb-2">Campaign Success Rate</p>
                  <div className="flex items-end space-x-2">
                    <p className="text-5xl font-bold text-orange-500">94%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white rounded-xl px-6 py-3 shadow-lg rotate-3">
              <p className="text-sm font-bold">Trusted by 1000+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
