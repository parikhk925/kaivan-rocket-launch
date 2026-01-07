import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';
import { pricingPlans } from '../mock';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the Plan That{' '}
            <span className="text-orange-500">Fits Your Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start free, upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-4 border-orange-500 shadow-2xl scale-105 depth-shadow-hover'
                  : 'border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl depth-shadow hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center space-x-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 mb-2">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-orange-500" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-6 text-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white hover:bg-orange-50 text-orange-500 border-2 border-orange-500 hover:border-orange-600'
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include 24×7 support and access to our knowledge base.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
