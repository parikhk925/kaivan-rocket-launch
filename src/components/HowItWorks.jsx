import React from 'react';
import { Check, ArrowRight, FileText, Settings, Cpu, Rocket } from 'lucide-react';
import { howItWorks } from '../mock';

const iconMap = {
  1: FileText,
  2: Settings,
  3: Cpu,
  4: Rocket
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create professional ad campaigns in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 z-0"></div>

          {howItWorks.map((step, index) => {
            const IconComponent = iconMap[step.step];
            return (
              <div key={step.step} className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Step Number and Icon */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center shadow-lg group hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12 text-orange-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Arrow between steps - Hidden on mobile and last item */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:flex absolute top-16 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-orange-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
