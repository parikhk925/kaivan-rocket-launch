import React from 'react';
import { Card } from './ui/card';
import { Sparkles, Target, TrendingUp, Zap } from 'lucide-react';
import { features } from '../mock';

const iconMap = {
  sparkles: Sparkles,
  target: Target,
  trendingUp: TrendingUp,
  zap: Zap
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="text-orange-500">Better Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create and launch successful Meta ad campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Card
                key={feature.id}
                className="p-8 border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      {feature.status && (
                        <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                          {feature.status}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
